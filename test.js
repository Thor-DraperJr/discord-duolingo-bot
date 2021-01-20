const browser = await puppeteer.launch();

const page = await browser.newPage();
await page.goto('https://www.duolingo.com/profile/ThorDraperJr');

await page.setViewport({width: 1640, height: 800});

await page.evaluate(() => {
        return Promise.resolve(window.scrollTo(0,document.body.scrollHeight));
    });

console.log(await page.content());
await page.screenshot({path: 'screenshot.png'});

await browser.close();


\\runs in https://try-puppeteer.appspot.com/
