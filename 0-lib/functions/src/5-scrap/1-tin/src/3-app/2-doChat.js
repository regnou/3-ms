import puppeteer from 'puppeteer';                       // TODO - save_json

import libFb from '../2-auth/tin-fb-login';
import libTin from '../1-data/fetch/scrap/tin-loop';     //unik_tinder_contactName

// LIB AXEL
import libErr    from "../../../../0-lib/0-basic/0-libaxB-error";      //fe
import libIo     from "../../../../0-lib/0-basic/0-libaxB-io";      //_try_dl_img, mkdirSync

let IS_FACEBOOK_LOGIN = true;
let IS_FACEBOOK_POPUP_LOGIN = true;


//?_______  _______  _        _______ _________ _______
//=(  ____ \(  ___  )( (    /|(  ____ \\__   __/(  ____ \
//=| (    \/| (   ) ||  \  ( || (    \/   ) (   | (    \/
//=| |      | |   | ||   \ | || (__       | |   | |
//?| |      | |   | || (\ \) ||  __)      | |   | | ____
//=| |      | |   | || | \   || (         | |   | | \_  )
//=| (____/\| (___) || )  \  || )      ___) (___| (___) |
//?(_______/(_______)|/    )_)|/       \_______/(_______)


 IS_FACEBOOK_LOGIN       = false;
 IS_FACEBOOK_POPUP_LOGIN = false;

//.-PROD
const IS_HEADLESS = false;  //!OBLIGATOIRE, il trouve pas l ascenseur en headless
const IS_DEVTOOL = false;
//##-DEBUG
// const IS_DEVTOOL = false;
// const IS_HEADLESS = true;

const WW = 1000;  //viewport width
const WH = 900;   //viewport height

const DELAY_TXT = 0;
//._______  _______  _        _______ _________ _______
//=(  ____ \(  ___  )( (    /|(  ____ \\__   __/(  ____ \
//?| (    \/| (   ) ||  \  ( || (    \/   ) (   | (    \/
// | |      | |   | ||   \ | || (__       | |   | |
//!| |      | |   | || (\ \) ||  __)      | |   | | ____
// | |      | |   | || | \   || (         | |   | | \_  )
//*| (____/\| (___) || )  \  || )      ___) (___| (___) |
//*(_______/(_______)|/    )_)|/       \_______/(_______)
//----------------------------------------------------------
//CTX: fb-tin-account
//----------------------------------------------------------
const ACCOUNT_arr = [
  "totoax01",         //1less for test

  "leroyjojoax",      //##sll

  , "2axelsecond"     //bell
  , "nzaerolita"      //macc
  , "axelopolito"     //mm
  , "myjojoax"
  , "jojoaxelito"
  , "axelrobomart"
  , "nzaero"
  , "popoax"
]
const TINDER_ACCOUNT_str = ACCOUNT_arr[0];
//----------------------------------------------------------
//CTX: error
//----------------------------------------------------------
//°-TODO
const RE_ME = /at .* \(\/Users\/x\/0git\/axel\/back\/1-tin\/2-doChat/gi;
const RE_ME_OK = '/Users/x/0git/axel/back/1-tin/2-doChat'
const CHROMIUM_DATA_DIR = "/Users/x/1data/pupp";
//----------------------------------------------------------
//CTX: browser
//----------------------------------------------------------
let BROWSER = null;
const TIMEOUT_NAV = 10000;
const TIMEOUT_DEFAULT = 10000;  //3000
// const IS_IMG_CSS_DISABLED = true;                                                          //for faster load, this intercept img and css pages and prevent it to be downloaded;
const IS_IMG_CSS_DISABLED = false;  //for faster load, this intercept img and css pages and prevent it to be downloaded;

//°-########################################################
//°-1                     STARTER
//°-########################################################
(async () => { await main(); })(); //end (async ()

async function main() {
  try {
    //°-@-_   ______  _______
    //°-.-  (  ____ \(  ___  )
    //°-##- | (    \/| (   ) |
    //°-?-  | |      | |   | |
    //°-##- | | ____ | |   | |
    //°-=-  | | \_  )| |   | |
    //°-##- | (___) || (___) |
    //°-*-  (_______)(_______)
    //------------------------------------------------------
    //@-START
    //------------------------------------------------------
    console.clear(); // console.log(chalk.bgBlue("SERVER: START"));
    console.log('%c  💔 Project : TINDER CHAT (oi ... tel)  🐤 ', "color: white; background: blue");
    console.log('%c  💔 Site    : tind3r.com                🐤 ', "color: white; background: blue");
    console.log('%c  💔 Output  : x                         🐤 ', "color: white; background: blue");
    //°-------------------------------------------------------------------------
    //°BROWSER
    //°-------------------------------------------------------------------------
    const CRX_PATH = '/Users/x/Desktop/chromium/tind3r-chrome-plugin'

    BROWSER = await puppeteer.launch( //°const BROWSER = await puppeteer.launch();
      {
        headless: IS_HEADLESS,
        devtools: IS_DEVTOOL,
        userDataDir: CHROMIUM_DATA_DIR  //To save img (src => dataUrl => dl))
        , args:
          [
            '--disable-infobars',

            `--disable-extensions-except=${CRX_PATH}`,
            `--load-extension=${CRX_PATH}`,
            `--window-size=${WW},${WH}`,
            `--defaultViewport: null`,
            '--defaultViewport:2000,800', //marche pas ca ?
            // °'--app=http://xxxxxx.com'
          ]
      });
    //°-------------------------------------------------------------------------
    //°PAGE
    //°-------------------------------------------------------------------------
    const pages = await BROWSER.pages();
    const page = await pages[0];
    await page.setDefaultTimeout(TIMEOUT_DEFAULT); //!AXEL (pour sortir du waitFor si existe pas)
    await page.setDefaultNavigationTimeout(TIMEOUT_NAV); //!AXEL (pour sortir du waitFor si existe pas)
    //°----------------------------------------
    await page.setViewport({
      width: WW,
      height: WH
    });
    //°----------------------------------------
    if (IS_IMG_CSS_DISABLED) {
      await page.setRequestInterception(true);
      //exclude css + img => faster load
      //##OK use !
      page.on('request', (req) => {
        if (req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image') {
          req.abort();
        }
        else {
          req.continue();
        }
      });
    }
    //@-_   ______  _______
    //.-  (  ____ \(  ___  )
    //##- | (    \/| (   ) |
    //?-  | |      | |   | |
    //##- | | ____ | |   | |
    //=-  | | \_  )| |   | |
    //##- | (___) || (___) |
    //*-  (_______)(_______)
    //------------------------------------------------------
    //*AUTH FB (step-1)
    //------------------------------------------------------
    if (IS_FACEBOOK_LOGIN) {
      //°si je delete les cookies, alors il a plus rien => await page2._client.send('Network.clearBrowserCookies');
      await libFb.fbLogin(page, TINDER_ACCOUNT_str + "@gmail.com", "gelanSo72");
    }
    //------------------------------------------------------
    //Home
    //------------------------------------------------------
    const URL_TIND3R_MATCH = "http://localhost:3005/matches";
    await page.goto(URL_TIND3R_MATCH, { waitUntil: 'networkidle2' });
    await page.bringToFront(); //!oblige sinon il text pas
    //ca bug  ! //const pages = await BROWSER.pages(); //await pages[1].close(); //*This page opens automatically when loading the plugin tind3r. It is useless so we close it !
    //------------------------------------------------------
    //*AUTH FB (step-2)
    //------------------------------------------------------
    if (IS_FACEBOOK_POPUP_LOGIN) {
      await libFb.fbTinPopupValidate(BROWSER, page);
      await page.waitFor(2000);
      // await page.goto(URL_TIND3R_MATCH, { waitUntil: 'networkidle2' }); // GIVE IT A REFRESH becaus etinder kinf of bug the first time
    }
    //@-_   ______  _______
    //.-  (  ____ \(  ___  )
    //##- | (    \/| (   ) |
    //?-  | |      | |   | |
    //##- | | ____ | |   | |
    //=-  | | \_  )| |   | |
    //##- | (___) || (___) |
    //*-  (_______)(_______)
    //.-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //?-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //##----------------------------------------------------
    //##CHAT
    //##----------------------------------------------------
    console.log("%c 💔🗨️ TINDER CHAT !", "background: #222; color: purple; font-size:32px");
    await libTin.loop(page, callback_doChat);
    // console.log("OK ?");
    //.-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //?-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  } catch (err) {
    libErr.fe(RE_ME, RE_ME_OK, "()", err, '🐤', '🔵🐤'); //no return for main !
  }
  finally {
    //@FREE RESOURCES
    //.await page.close();
    //.await BROWSER.close();
  }
  //@-END
  console.log('\n%c --------------------------------------------', "color: green; background: green");
  console.log('%c      🍌🍌🍌🍌      FINISH  chat    🍌🍌🍌🍌     ', "color: white; background: green");
  console.log('%c --------------------------------------------', "color: green; background: green");
  console.log("%c 👋\n\n", "background: #222; color: #bada55; font-size:32px");
} //main


//*EEEEEEEEEEEEEEEEEEEEEENNNNNNNN        NNNNNNNNDDDDDDDDDDDDD
//.E::::::::::::::::::::EN:::::::N       N::::::ND::::::::::::DDD
//!E::::::::::::::::::::EN::::::::N      N::::::ND:::::::::::::::DD
//?EE::::::EEEEEEEEE::::EN:::::::::N     N::::::NDDD:::::DDDDD:::::D
//@- E:::::E       EEEEEEN::::::::::N    N::::::N  D:::::D    D:::::D
//-  E:::::E             N:::::::::::N   N::::::N  D:::::D     D:::::D
//=- E:::::::::::::::E   N::::::N N::::N N::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N:::::::N::::N  N::::::N  D:::::D     D:::::D
//*  E:::::::::::::::E   N::::::N  N::::N:::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N::::::N   N:::::::::::N  D:::::D     D:::::D
//   E:::::E             N::::::N    N::::::::::N  D:::::D     D:::::D
//   E:::::E       EEEEEEN::::::N     N:::::::::N  D:::::D    D:::::D
// EE::::::EEEEEEEE:::::EN::::::N      N::::::::NDDD:::::DDDDD:::::D
// E::::::::::::::::::::EN::::::N       N:::::::ND:::::::::::::::DD
// E::::::::::::::::::::EN::::::N        N::::::ND::::::::::::DDD
//*-EEEEEEEEEEEEEEEEEEEEEENNNNNNNN         NNNNNNNDDDDDDDDDDDDD


//*-############################################################################
//##-                                    CHAT
//*-############################################################################
async function callback_doChat(page) {

  await page.waitFor(500);

  try {
    let textArea = null;
    await page.waitForSelector('textarea');
    textArea = await page.$('textarea');

    let chat_arrO_ = [];  // write msg
    try {
      //Axel msg only (cf. .message__current span)
      //si j n ai pas repondu, et il va attendre longtemps pour trouver mes reponses :
      await page.waitForSelector('.message__current span');
      chat_arrO_ = await page.$$('.message__current span');

    } catch (err) { // Will write msg for first time // err.axel_msg = 'STRANGE: nothing to do here ? I have not written any msg for page: ' + page.url(); // libErr.fe("()", err, '🍌', '🔵🍌'); //no return for main !
      console.log('🟡DEBUG 🟡 WARNING-OK 🟡 you simply didnt wrote any msg to this person : ' + page.url());
    }

    await do_brazil_strategy_flow(page, textArea, chat_arrO_);
  } catch (err) { // no textArea available
    console.log('🟡DEBUG 🟡 WARNING 🟡 no textArea available for this person (deleted ?): ' + page.url());
  }
} //end-for-item

// spanish_strategy(page2); (CF CODE INSIDE README)

// ---------------------------------------------------------------------
// BRASIL flow
// ---------------------------------------------------------------------
//await do_brazil_strategy_flow(page, textArea, chat_arrO_);
async function do_brazil_strategy_flow(page, textArea, chat_arrO) {

  const Axel_arrStr = await BROWSER_getAxelMsg(page, chat_arrO);  // contient tous mes msg

  const MSG1 = "🌎Olá, em que cidade você esta ?";
  const MSG2 = "Que legal, eu tambem ! Se você quiser podemos falar pelo whatsapp (eu vou te add) ?";
  const MSG3 = "Eu estou no centro. Em que bairro você esta ? A gente pode sair para se conhocer.";
  const MSG4 = "Oi, em que bairro você esta ?"
  // Eu sou do Paris 🇫🇷
  //const BRASIL = [MSG1, MSG2, MSG3]
  // Ta vez voce esta estudando o trabalhando ?
  // Eu sou francês. Do Paris. 🇫🇷


//°METTRE UNE SECURITE sur la repetition
// - si deja la ville => dit rien
// - si deja le tel. => dit rien

//°SECU 2 - les anciens types de msg a ne pas repeter ...
//°sinon conflict

//°PAR NOM !!!
//° lara domenico -> bloc !!


  //*Rules
  //°TODO - POUR XPORTER DM : REGARDE QUE INFO VILLE CHEZ LA MEUF ?
  if (containMsg(Axel_arrStr, MSG3)) { // "Hola, de donde eres..."
    // ? CAS 1 - rien (complet) (attend repond bairro)
  }
  else {

    if (containMsg(Axel_arrStr, MSG3)) {
      // if (await sheAnswerAfterAxel1(MSG4, page)) {
        await answer(MSG4, textArea);
      // }
    }

    if (containMsg(Axel_arrStr, MSG2)) {
      if (await sheAnswerAfterAxel1(MSG2, page)) {
        await answer(MSG3, textArea);
      }
    }
    else {
      if (containMsg(Axel_arrStr, MSG1)) {
        if (await sheAnswerAfterAxel1(MSG1, page)) {
          await answer(MSG2, textArea);
        }
      }
      else {
        await answer(MSG1, textArea);
      }
    }
  }
  // END-do_brazil_strategy_flow()
  //@-----------------------------------------------------------------------------
  //@-                                PRIVATE / main
  //@-----------------------------------------------------------------------------
  async function BROWSER_getAxelMsg(page, chat_arrO) {
    const arr = [];
    for (e of chat_arrO) {
      const o = await page.evaluate(elmt => {
        // debugger
        const str = elmt.innerText;
        return str;
      }, e);
      arr.push(o)
    }
    return arr;
  }
  //@-------------------------------------------------------------------------
  //@-                                PRIVATE / br-flow
  //@-------------------------------------------------------------------------
  function containMsg(str_arr, MSG) {
    if (!str_arr || str_arr.length === 0) return false; // contract-design : validate parameters in entry
    // const CHAT_str = ELT_CHAT !== null ? ELT_CHAT.map(e => e.innerText) : [];
    let has = false;
    str_arr.some(e => {
      has = e.includes(MSG)
      if (has) return true; // some() break on first return TRUE
    });
    return has;
  }
  //@-------------------------------------------------------------------------
  //@-                                PRIVATE / br-flow
  //@-------------------------------------------------------------------------
  async function sheAnswerAfterAxel1(MSG, page) {
    const msgFull_arrO = await page.$$('.message');
    let startLookForHer = false;
    let hasAnswerAfterAxel = false;

    for (e of msgFull_arrO) {
      const className = await e.getProperty('className');
      const classNameStr = await className.jsonValue();
      //const classNameStrSplit = classNameStr.split(" ");
      const isAxel = classNameStr.includes("message__current");

      if (isAxel) {
        const str = await page.evaluate(elmt => {
          // debugger
          const str = elmt.innerText;
          return str;
        }, e);
        startLookForHer = str.includes(MSG);
      }
      else {
        if (startLookForHer) {
          hasAnswerAfterAxel = true;
          break; // So Yes, she ed after ME !
        }
      }
    } // for
    return hasAnswerAfterAxel;
  }
  //@---------------------------------------------------------------------------
  //@-                                PRIVATE / br-flow
  //@---------------------------------------------------------------------------
  async function answer(MSG, textArea) {
    // ? CAS 2 - barr
    await textArea.click()
    await textArea.type(MSG, { delay: DELAY_TXT }); // Types slower, like a user
    await textArea.press('Enter');
    // await textArea.dispose()
  }
} // end-brazil-flow

//*EEEEEEEEEEEEEEEEEEEEEENNNNNNNN        NNNNNNNNDDDDDDDDDDDDD
//.E::::::::::::::::::::EN:::::::N       N::::::ND::::::::::::DDD
//!E::::::::::::::::::::EN::::::::N      N::::::ND:::::::::::::::DD
//?EE::::::EEEEEEEEE::::EN:::::::::N     N::::::NDDD:::::DDDDD:::::D
//@- E:::::E       EEEEEEN::::::::::N    N::::::N  D:::::D    D:::::D
//-  E:::::E             N:::::::::::N   N::::::N  D:::::D     D:::::D
//=- E:::::::::::::::E   N::::::N N::::N N::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N:::::::N::::N  N::::::N  D:::::D     D:::::D
//*  E:::::::::::::::E   N::::::N  N::::N:::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N::::::N   N:::::::::::N  D:::::D     D:::::D
//   E:::::E             N::::::N    N::::::::::N  D:::::D     D:::::D
//   E:::::E       EEEEEEN::::::N     N:::::::::N  D:::::D    D:::::D
// EE::::::EEEEEEEE:::::EN::::::N      N::::::::NDDD:::::DDDDD:::::D
// E::::::::::::::::::::EN::::::N       N:::::::ND:::::::::::::::DD
// E::::::::::::::::::::EN::::::N        N::::::ND::::::::::::DDD
//*-EEEEEEEEEEEEEEEEEEEEEENNNNNNNN         NNNNNNNDDDDDDDDDDDDD
