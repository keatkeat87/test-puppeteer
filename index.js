const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://192.168.1.152:4200/index.html', {
    waitUntil: 'networkidle2',
  });
  // await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  // await page.emulateMediaType('screen');
  await page.pdf({
    displayHeaderFooter: true,
    headerTemplate: `
      <style>#header{ padding-top: 0; padding-left:1.5cm; padding-right:1.5cm; box-sizing: border-box; border:0px solid red; height:75px;}</style>
      <div style="font-size:12px;">
        hello
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACi0lEQVRoge2aP2sUQRjGfyanjVfEqHgJgo2NdoJioaj9pbTU9j5BjK2YK+xsNYWgHyDYWEY0CUpME1CxUEhIIFYiJIGLGl2LeccbLrvr7Ht7u6vMA8PuPvPsO8+7M/tnbg4CAgK0mADmgB0gKrlsi5dm1iTaFTCfVKZ9k5iQE3aBSWAs61UYAMaAWxhPEZ4981zEk4PzpcYUxtucj3hbxI1BOlKigfG25SO2Y7EILAGve7gFKUnw9ldkInFt/a392PqhHE2VijISWWD/VY1SuLRh9gf/Qo+oh3m4R8pESKQPhJtdc2K42ctCreT2Fz05FYocWhr830MrJFI1aBIZAk4ozy0USTd7A3gCdKS+AzzGb0o8kxI3L39ewhHgk/DfgE3ZRsBHqU/CdeI/QbToKxH7O9dLYFS4UWBe+HZCrFPAVyqUyHvhLvXwl4V/GxOnhnm5RcBsFgMKf97CPeFqwBHgHHBcju8R3yPTcs46pvcqkYjlZoFfsv8TeAacjIlxDZP8HnAlqwGFP2+hO8Y7wDu6T69V4JijPQpsSN0djQGFP2+h5ZYw7xBk+0b4+472qXDzwLDGgMKft9ByF3r4i8KvyfEBR9sGWk6xfAu4mtl+uj9v4Q/h6j18XfhdOXYTSSuPMttP9+c9H1kDTgPngRcOb3to3eFmEmK0nPpXnu32hbiM7wr3ATgj3Fk5jqReEzcvf97COrDi1H1x9leAw3kayCtOknAEeEh3TXEHeED6d5bKQF5xtkSYtOR2SOoO5mAqK8Yx3vYt9MTNKZZleyMh2HfgM+ZJVjRuynY5VSVo0n2kTmGuQtkYB27TnTp4L1PbD74qFu/laYsmZvXULo6WWdR/GAgICDD4DX06nIxwse1pAAAAAElFTkSuQmCC"/>
      </div>
      `,
    footerTemplate: `
      <style>#footer{ padding-bottom: 0;padding-left:1.5cm; padding-right:1.5cm; box-sizing: border-box; border:0px solid red; height:75px;}</style>
      <div style="font-size:12px !important; color:#808080; ">
        hello
      </div>
      `,
    path: `${Math.random()}.pdf`,
    format: 'a4',
    printBackground: true,
    margin: {
      top: '100px',
      bottom: '100px',
      right: '0cm',
      left: '0cm',
    },
  });
  await browser.close();
})();
