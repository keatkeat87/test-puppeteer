const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://192.168.1.152:4200/index.html', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'hn.pdf', format: 'a4' });
  await browser.close();
})();
