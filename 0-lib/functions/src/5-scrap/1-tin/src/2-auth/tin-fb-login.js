// javascript:(async()=>{
//    document.getElementById('userNavigationLabel').click();
//     const hDelay = (ms)=>new Promise(resolve=>setTimeout(resolve, ms));
//     await hDelay(2000);
//     document.querySelector('._w0d').click();
//   } )();

//.-############################################################################
//.-#                             scrapper-tinder
//.-#                                  [ LIB ] FB LOGIN
//.-############################################################################

//@---------------------------------------------------------
//@-                              .
//@---------------------------------------------------------

export async function fbLogin (page, mail, pwd){
  await page.goto("https://www.facebook.com/");
  await page.bringToFront(); //!oblige sinon il text pas
  await page.waitForSelector('input[name=email]');
  const emailField = await page.$('input[name=email]')
  await emailField.click()
  await emailField.type(mail+"@gmail.com", { delay: 100 }); // Types slower, like a user
  await emailField.dispose()
  await page.waitForSelector('input[name=pass]');
  const passwordField = await page.$('input[name=pass]')
  await passwordField.click()
  await passwordField.type(pwd, { delay: 120 }); // Types slower, like a user
  await passwordField.dispose()

  // _42ft _4jy0 _6lth _4jy6 _4jy1 selected _51sy

  await page.waitForSelector('._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy');
  const Button = await page.$('._42ft._4jy0._6lth._4jy6._4jy1.selected._51sy');
  await Button.focus()
  await Button.click()
  await Button.dispose()
  await page.waitForNavigation()
}

//@---------------------------------------------------------
//@-                              .
//@---------------------------------------------------------
export async function fbTinPopupValidate (browser, page){

  // click
  await page.waitForXPath('//*[@class="login__facebook"]');
  let btn2 = await page.$x('//*[@class="login__facebook"]');
  btn2 = btn2[0];
  await btn2.focus()
  await btn2.click()
  await btn2.dispose()


  // popup
  const newPagePromise = new Promise(x =>
    browser.once('targetcreated', target => x(target.page())));
  const popup = await newPagePromise;
  await popup.waitForSelector('button[name=__CONFIRM__]')
  // sol 1 ?
  await popup.waitFor(1000);
  await popup.click('button[name=__CONFIRM__]');
  //confirm.click();
}

// sol 2 ?
  // const btnHandle = await page.$('#platformDialogForm > div._2_bh > div > table > tbody > tr > td._51m-.uiOverlayFooterButtons._51mw > button._42ft._4jy0.layerConfirm._51_n.autofocus._4jy5._4jy1.selected._51sy');
  // await popup.evaluate(e => e.click(), btnHandle);
//await popup.bringToFront(); //!oblige sinon il text pas
//await popup.waitFor(4000);

//await popup.setViewport({
//  width: 1000,
//  height: 6000,
//  deviceScaleFactor: 1,
//});
//FULL (apres fb.com)

//await page.waitFor(2000);
//_42ft _4jy0 layerConfirm _51_n autofocus _4jy5 _4jy1 selected _51sy
//await popup.waitForSelector('#platformDialogForm > div._2_bh > div > table > tbody > tr > td._51m-.uiOverlayFooterButtons._51mw > button._42ft._4jy0.layerConfirm._51_n.autofocus._4jy5._4jy1.selected._51sy')
//const confirm = await popup.$('#platformDialogForm > div._2_bh > div > table > tbody > tr > td._51m-.uiOverlayFooterButtons._51mw > button._42ft._4jy0.layerConfirm._51_n.autofocus._4jy5._4jy1.selected._51sy') // why


//##------------------------------------------------------------------------
//##                       FB other file => merge because more recent
//##------------------------------------------------------------------------
async function doStartFb(page) {
  // await loginFB(page);
  // await authPopupTinder(page);
}
async function loginFB(page) {
  // const URL_FB = "https://www.facebook.com";
  // await page.goto(URL_FB, { waitUntil: 'networkidle2' });
  // await page.bringToFront();
  // await page.waitForSelector('input[name=email]');
  // const emailField = await page.$('input[name=email]')
  // await emailField.click()
  // // await emailField.type('totoax01@gmail.com', { delay: 100 }); // Types slower, like a user
  // await emailField.type('leroyjojoax@gmail.com', { delay: DELAY_TXT }); // Types slower, like a user
  // await emailField.dispose()
  // await page.waitForSelector('input[name=pass]');
  // const passwordField = await page.$('input[name=pass]')
  // await passwordField.click()
  // await passwordField.type('gelanSo72', { delay: 120 }); // Types slower, like a user
  // await passwordField.dispose()
  // await page.waitForSelector('#loginbutton');
  // const Button = await page.$('#loginbutton')
  // await Button.focus()
  // await Button.click()
  // await Button.dispose()
  // await page.waitForNavigation()
}
async function authPopupTinder(page) {
  // const URL_TIND3R = "http://localhost:3005";
  // await page.goto(URL_TIND3R, { waitUntil: 'networkidle2' });

  // // === === === === login
  // await page.waitForXPath('//*[@class="login__facebook"]');
  // let btn2 = await page.$x('//*[@class="login__facebook"]');
  //     btn2 = btn2[0];
  // await btn2.focus()
  // await btn2.click()
  // await btn2.dispose()
  // // === === === === popup
  // const newPagePromise = new Promise(x =>
  //   browser.once('targetcreated', target =>
  //     x(target.page())));
  // const popup = await newPagePromise;
  // // await popup.waitFor(4000);
  // await popup.setViewport({
  //   width            : 1000,
  //   height           : 6000,
  //   deviceScaleFactor: 1,
  // });
  // // FULL (apres fb.com)
  // await popup.waitForSelector('#platformDialogForm > div._2_bh > div > table > tbody > tr > td._51m-.uiOverlayFooterButtons._51mw > button._42ft._4jy0.layerConfirm._51_n.autofocus._4jy5._4jy1.selected._51sy')
  // //const confirm = await popup.$('#platformDialogForm > div._2_bh > div > table > tbody > tr > td._51m-.uiOverlayFooterButtons._51mw > button._42ft._4jy0.layerConfirm._51_n.autofocus._4jy5._4jy1.selected._51sy') // why
  // await popup.click('#platformDialogForm > div._2_bh > div > table > tbody > tr > td._51m-.uiOverlayFooterButtons._51mw > button._42ft._4jy0.layerConfirm._51_n.autofocus._4jy5._4jy1.selected._51sy');
  // //confirm.click();
}
