//.-############################################################################
//.-#                             scrapper
//.-#                             TIND3R.com
//.-############################################################################
//°---------------------------------------------------------
//°- PARAM TO CONFIG !
//°---------------------------------------------------------
const RE_ME = /file:\/\//gi;
const RE_ME_OK = ""
// const RE_ME = /at .* \/Users\/x\/0git\/axel\/1-dist\/functions\//gi;
// const RE_ME_OK = "/Users/x/0git/axel/1-dist/functions/"

const CHROMIUM_DATA_DIR = "/Users/x/1data/pupp";

// est ce que MODULE-ES6-import est dans node-8 (actual firebase) ?
import del from 'del';
import {promises as fsp} from 'fs';
import puppeteer  from 'puppeteer';

import fe    from "../../../../0-lib/0-basic/0-libaxB-error.js";      //fe
import {mkdirSync}     from "../../../../0-lib/0-basic/0-libaxB-io.js";      //_try_dl_img, mkdirSync
import {fbLogin, fbTinPopupValidate}      from '../2-auth/tin-fb-login.js';
import {loop}     from '../1-data/fetch/scrap/tin-loop.js'; //unik_tinder_contactName
import {transform_scrap} from '../1-data/transform/tin-transform-scrap.js'

// javascript:(async()=>{ document.getElementById('userNavigationLabel').click(); const hDelay = (ms)=>new Promise(resolve=>setTimeout(resolve, ms));await hDelay(2000); document.querySelector('._w0d').click(); } )();

let IS_FACEBOOK_LOGIN       = false;
let IS_FACEBOOK_POPUP_LOGIN = false;

//  IS_FACEBOOK_LOGIN       = true;
//   IS_FACEBOOK_POPUP_LOGIN = true;

const IS_DEVTOOL  = false;  //prod
const IS_HEADLESS = false;  //debug

// const IS_DEVTOOL = true;   //prod
// const IS_HEADLESS = true;                                                         //debug

const ACCOUNT_arr = [

  "popoax85" // .macapa
  ,"axelopolito"     //. manaus
  ,"veneax01"      //. baranquilla

  , "leroyjojoax"      //##sll
  ,"totoax01"         //1less for test
  , "2axelsecond"     //bell
  , "nzaerolita"      //macc
  , "myjojoax"
  , "jojoaxelito"
  , "axelrobomart"
  , "nzaero"
]
const TINDER_ACCOUNT_str = ACCOUNT_arr[0];
//----------------------------------------------------------
//CTX: data (db)
//----------------------------------------------------------
const FILENAME = `tin-db-${TINDER_ACCOUNT_str}`;
const OUT_DIR  = './0-lib/functions/static/1-scraper-outputX/tin/';

//----------------------------------------------------------
//CTX: browser
//----------------------------------------------------------
let   BROWSER           = null;
const IS_DEBUG          = 1;                             //debug
const SCROLL_LIMIT      = 1000;                          //debug premature stop scrolling for debug purpose only
const TIMEOUT_NAV       = 20000;
const TIMEOUT_DEFAULT   = 10000;                         //3000
// const IS_IMG_CSS_DISABLED = true;                                                          //for faster load, this intercept img and css pages and prevent it to be downloaded;
const IS_IMG_CSS_DISABLED = false;  //for faster load, this intercept img and css pages and prevent it to be downloaded;

const WW = 1000;  //viewport width
const WH = 900;   //viewport height

//°-########################################################
//°-1                     STARTER
//°-########################################################
export default async function main() {
  try {
    //------------------------------------------------------
    //@DIRECTORY CLEAN
    //------------------------------------------------------
    mkdirSync(OUT_DIR);  //create output dir if it doesn't exist.
    await del([`${OUT_DIR}/*`]);  //cleanup after last run.
    //------------------------------------------------------
    //@-START
    //------------------------------------------------------
    console.clear(); // console.log(chalk.bgBlue("SERVER: START"));
    console.log('%c  💔 Project : TINDER GET DB (json)      😎 ', "color: white; background: blue");
    console.log('%c  💔 Site    : tind3r.com                😎 ', "color: white; background: blue");
    console.log('%c  💔 Output  : x                         😎 ', "color: white; background: blue");
    //------------------------------------------------------
    //°BROWSER    //°-"puppeteer": "^3.0.1", °-"node": "14"
    //------------------------------------------------------
    // const CRX_PATH = '/Users/x/Desktop/chromium/tind3r-chrome-plugin'
    const CRX_PATH = '/Users/x/1data/0DL/tind3r'
          BROWSER  = await puppeteer.launch(
      {
          headless   : IS_HEADLESS,
          devtools   : IS_DEVTOOL,
          userDataDir: CHROMIUM_DATA_DIR  //To save img (src => dataUrl => dl))
        , args       :
          [
            '--disable-infobars',

            `--disable-extensions-except=${CRX_PATH}`,
            `--load-extension=${CRX_PATH}`,
            `--window-size=${WW},${WH}`,
            `--defaultViewport: null`,
            '--defaultViewport:2000,800', //marche pas ca ?
            '--app=http://www.google.com'
          ]
      });
    //------------------------------------------------------
    //°PAGE
    //------------------------------------------------------
    const pages = await BROWSER.pages();
    const page  = await pages[0];
    // await pages[1].close(); //*This page opens automatically when loading the plugin tind3r. It is useless so we close it !
  //   if (pages.length > 1) {
  //     await pages[0].close();
  //     BROWSER.off('targetcreated', f);
  // }
    await page.setDefaultTimeout(TIMEOUT_DEFAULT); //!AXEL (pour sortir du waitFor si existe pas)
    await page.setDefaultNavigationTimeout(TIMEOUT_NAV); //!AXEL (pour sortir du waitFor si existe pas)
    //------------------------------------------------------
    // await page.setViewport({ width: WW, height: WH });
    //------------------------------------------------------
    if (IS_IMG_CSS_DISABLED) {
      await page.setRequestInterception(true); //exclude css + img => faster load
      page.on('request', (req) => { //##OK use !
        if (req.resourceType() == 'stylesheet' || req.resourceType() == 'font' || req.resourceType() == 'image') {
          req.abort();
        }
        else { req.continue(); }
      });
    }
    //------------------------------------------------------
    //*AUTH FB (step-1)
    //------------------------------------------------------
    if (IS_FACEBOOK_LOGIN) {
      //°si je delete les cookies, alors il a plus rien => await page2._client.send('Network.clearBrowserCookies');
      await fbLogin(page, TINDER_ACCOUNT_str, "gelanSo72");
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
      await fbTinPopupValidate(BROWSER, page);
      await page.waitFor(2000); //! important on dirait
      // await page.goto(URL_TIND3R_MATCH, { waitUntil: 'networkidle2' }); // GIVE IT A REFRESH becaus etinder kinf of bug the first time
    }
    //.-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //?-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //##------------------------------------------------------------------------
    //##SCRAP
    const dbRaw_arr  = await loop(page, callback_factory);
    const db_arr = transform_scrap(dbRaw_arr);
    //##------------------------------------------------------------------------
    //##OUTPUT FILE
    console.log("%c [task] 😎 WRITING DB ...", "background: #222; color: purple; font-size:32px");
    await fsp.writeFile(`./${OUT_DIR}/${FILENAME}.json`, JSON.stringify(db_arr, null, ' '));
    //.-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //?-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  } catch (err) {
    fe(RE_ME, RE_ME_OK, "()", err, '😎', '🔵😎'); //no return for main !
  }
  finally {
    //@FREE RESOURCES
    //.await page.close();
    //.await BROWSER.close();
  }
  //@-END
  console.log('\n%c --------------------------------------------', "color: green; background: green");
  console.log('%c      🍌🍌🍌🍌      FINISH getDB    🍌🍌🍌🍌     ', "color: white; background: green");
  console.log('%c --------------------------------------------', "color: green; background: green");
  console.log("%c 👋\n\n", "background: #222; color: #bada55; font-size:32px");
} //main

//*-############################################################################
//=-                                    SCRAP
//*-############################################################################
// async function factory(page, indexEntity_ext) {
async function callback_factory(page) {

  await page.waitFor(500);

  // evaluate different de $eval
  const o = await page.evaluate(_ => {

    //const ELT_ARR_IMG_GALLERY = [...document.querySelectorAll(".slick-slide")];
    const ELT_NAME_AGE   = document.querySelector(".match__person-details h1");
    const ELT_IMG_AVATAR = document.querySelector(".slick-active img");
    const ELT_COMMENT    = document.querySelector(".match__person-bio");
    const ELT_DISTANCE   = document.querySelector("match__person-distance");
    const ELT_CHAT       = [...document.querySelectorAll(".message__body")];

    const NAME_AGE                     = ELT_NAME_AGE.innerText.split(",");
    const NAME                         = NAME_AGE[0] != null ? NAME_AGE[0] : "";
    let   AGE                          = NAME_AGE[1] != null ? NAME_AGE[1] : "";
          AGE                          = AGE.replace(/ /g, "")
    const IMG_SRC_AVATAR               = ELT_IMG_AVATAR.src;
    const CHAT_str                     = ELT_CHAT != null ? ELT_CHAT.map(e => e.innerText) : [];
    const DISTANCE                     = ELT_DISTANCE != null ? ELT_DISTANCE.innerText : "";                                                                                                       // todo - distance
    let   STATUS                       = ELT_COMMENT != null ? ELT_COMMENT.innerText : "";
          STATUS                       = STATUS.replace(/\n/g, ' %%% ')                                                                                                                             // ° === === ===
    const UNOF_APP_TINDER_strLink      = window.location.href;
    const UNOF_APP_TINDER_USER_strLink = "http://localhost:3005/matches/5c8e8f2bf0956f11007a832c" + window.location.href.substring(window.location.href.length - 24, window.location.href.length);
    // * TINDER > CORS PB => saveDataUrl(CONST_IMG_GALLEY_FIRST); //CONST_ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));

    //- debugger

    //.-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //?-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const ENTITY_obj = {
      //now
      // ID: indexEntity_ext,                //!- ca fait doublon avec unik-name ?
      _00country                : "todo",
      _01city                   : "todo",
      _02name                   : NAME,
      _03age                    : AGE,
      _04phone                  : "todo",
      _04phone_raw              : "todo",
      _05img_tinder_src         : IMG_SRC_AVATAR,                 //°TODO-gallery img avatar !
      _06status_tinder          : STATUS,                         // !!!
      _07instagram_account      : "todo",
      _07unofAppTinder_link     : UNOF_APP_TINDER_strLink,
      _07unofAppTinder_USER_link: UNOF_APP_TINDER_USER_strLink,
      _08distance               : DISTANCE,
      _11chat_tinder_all        : CHAT_str,                       // !!!

      //next
      // _00a_unique_name          : UNIK_NAME,
      // _07tinder_account         : TINDER_ACCOUNT_str,      //!- !!!! FAIRE TAGGAGE A LA FIN SI NECESSAIRE
      // o_10cat_L0           = "",
      //   o_11chat_tinder_my = "",
      //   o_11chat_tinder_her= "",
      // * const boyChat = document.queryAllSelector(S_boyChat);
      // * const girlChat = document.queryAllSelector(S_girlChat);

    };
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //?-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //.-!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    return ENTITY_obj; //console.log(`🐬 : ${JSON.stringify(ENTITY_obj, null, 4)}`);
  }); //page-evaluate
  return o;
} //##factory
