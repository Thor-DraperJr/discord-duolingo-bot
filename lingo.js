const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.duolingo.com/profile/ThorDraperJr');
  await page.screenshot({path: 'example.png'});

  await page.setViewport({width: 1640, height: 800});

  await page.waitForTimeout(1000);

  await page.evaluate(() => {
          return Promise.resolve(window.scrollTo(0,document.body.scrollHeight));
      });

  await browser.close();
})();
