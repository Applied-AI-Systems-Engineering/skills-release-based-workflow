// Actual Chromium render checks of instructor files at immutable Git tags.
// No website deployment; only loopback HTTP inside this disposable runner.
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const { chromium } = require('playwright');

const output = path.join(process.env.RUNNER_TEMP || '/tmp', 'release-render-evidence');
fs.mkdirSync(output, { recursive: true });
const tags = [
  { tag: 'v0.9', expected: 'black' },
  { tag: 'v1.0.0', expected: 'green' },
  { tag: 'v1.0.1', expected: 'black' },
];
const assets = {
  '/': ['index.html', 'text/html'],
  '/index.html': ['index.html', 'text/html'],
  '/base.css': ['base.css', 'text/css'],
  '/engine.js': ['engine.js', 'text/javascript'],
  '/game.js': ['game.js', 'text/javascript'],
  '/images/sprites.png': ['images/sprites.png', 'image/png'],
};
(async () => {
  const browser = await chromium.launch({ headless: true });
  const results = [];
  try {
    for (const { tag, expected } of tags) {
      const commit = execFileSync('git', ['rev-parse', tag + '^{commit}'], { encoding: 'utf8' }).trim();
      const files = Object.fromEntries(Object.entries(assets).map(([url, [file, type]]) =>
        [url, { type, content: execFileSync('git', ['show', tag + ':' + file]) }]));
      const server = http.createServer((req, res) => {
        const asset = files[new URL(req.url, 'http://127.0.0.1').pathname];
        if (!asset) { res.writeHead(404); res.end(); return; }
        res.writeHead(200, { 'Content-Type': asset.type }); res.end(asset.content);
      });
      await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
      const port = server.address().port;
      const origin = 'http://127.0.0.1:' + port;
      const page = await browser.newPage({ viewport: { width: 800, height: 700 } });
      const errors = [];
      page.on('pageerror', err => errors.push(String(err)));
      await page.route('**/*', route => {
        const url = new URL(route.request().url());
        return url.origin === origin ? route.continue() : route.abort();
      });
      try {
        await page.goto(origin, { waitUntil: 'networkidle' });
        await page.waitForFunction(() => typeof Game !== 'undefined' && Game.width === 320 &&
          typeof SpriteSheet !== 'undefined' && SpriteSheet.image && SpriteSheet.image.complete);
        await page.waitForFunction(expected => {
          const canvas = document.getElementById('game');
          const pixels = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
          let count = 0;
          for (let i = 0; i < pixels.length; i += 4) {
            const match = expected === 'black' ? pixels[i] === 0 && pixels[i+1] === 0 && pixels[i+2] === 0
              : pixels[i] === 0 && pixels[i+1] === 255 && pixels[i+2] === 0;
            if (match && pixels[i+3] === 255) count++;
          }
          return count / (canvas.width * canvas.height) > 0.90;
        }, expected, { timeout: 10000 });
        const observed = await page.evaluate(() => {
          const canvas = document.getElementById('game');
          const data = canvas.getContext('2d').getImageData(0, 0, canvas.width, canvas.height).data;
          let black = 0, green = 0;
          for (let i = 0; i < data.length; i += 4) {
            if (data[i] === 0 && data[i+1] === 0 && data[i+2] === 0 && data[i+3] === 255) black++;
            if (data[i] === 0 && data[i+1] === 255 && data[i+2] === 0 && data[i+3] === 255) green++;
          }
          return { width: canvas.width, height: canvas.height, black, green,
            total: canvas.width * canvas.height, bodyBackground: getComputedStyle(document.body).backgroundColor };
        });
        assert.deepEqual(errors, [], 'Unexpected application JavaScript errors');
        if (tag !== 'v0.9') assert.equal(observed.bodyBackground, 'rgb(0, 0, 0)');
        await page.screenshot({ path: path.join(output, tag + '.png'), fullPage: true });
        const result = { tag, commit, expected, observed, javascriptErrors: errors, passed: true };
        results.push(result);
        console.log(JSON.stringify(result));
      } finally {
        await page.close();
        await new Promise(resolve => server.close(resolve));
      }
    }
  } finally {
    fs.writeFileSync(path.join(output, 'render-results.json'), JSON.stringify({
      browser: browser.version(), method: 'Real headless Chromium canvas pixels from tagged instructor files',
      externalRequests: 'blocked', listener: '127.0.0.1 only', results,
    }, null, 2));
    await browser.close();
  }
})();
