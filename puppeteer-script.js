/**
 * @param {puppeteer.Browser} browser
 * @param {{url: string, options: LHCI.CollectCommand.Options}} context
 */
module.exports = async (browser, context) => {
  // launch browser for LHCI
  const page = await browser.newPage();
  {{cookies}}

  const urls = {{urls}}

  for (let i = 0; i < urls.length; i++) {
    console.log(urls[i]);
    await page.goto(urls[i]);
    await new Promise(r => setTimeout(r, 10000));
    // await page.screenshot({
    //    path: i + '.png',
    //    fullPage: true
    // });
    // await page.waitForNavigation();
  }

  await page.close();
};
