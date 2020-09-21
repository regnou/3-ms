// 📒📕📗📘📙 2
// SNIPPET-CHROME
// SCRAPPER
// the app end, when all data are scrapped and put in a json file (simple array structure...) uploaded to the drive
// ? DT = data-transform
// ? DM = data-mining
// synced 0016
// 📒📕📗📘📙

export { saveFile, saveFilePerCity, unique, $x } from "./lib.js";

// TODO: si ca fait 9 chiffres, il faut rajouter l indicatif

// ----------------------------------------------------------------------------
// 📘 GLOBAL VAR CONFIG // ! > normally cst, but for debug, putting var
// ----------------------------------------------------------------------------
//* var IS_ZAP = true;
var IS_ZAP = false;

// * 0 = false else true
var IS_DEBUG = 1;

var LIMIT_SCROLL = 1000; /// 10000 = illimited
// <-----------XXXXXXXXX ATTENTION (sinon arrete scrappeur)

// ? SELECT tinder account
//var ACCOUNT_FB_FOR_TINDER = '00_1_nzaero';
//var ACCOUNT_FB_FOR_TINDER = '00_2_jojoaxelito';
// var ACCOUNT_FB_FOR_TINDER = '00_3_axelopolito';

var ACCOUNT_FB_FOR_TINDER = "00_4_nzaerolita";
// var ACCOUNT_FB_FOR_TINDER = '00_5_myjojoax';
// var ACCOUNT_FB_FOR_TINDER = '00_6_popoax';
// var ACCOUNT_FB_FOR_TINDER = '00_7_2axelsecond';

// var ACCOUNT_FB_FOR_TINDER = '00_8_axelrobomart';
//  var ACCOUNT_FB_FOR_TINDER = '00_9_leroyjojoax';

// un fichier par petite ville = la merde => regrouper par grosses zones
// 'pa',  => j ai un break, donc fait default
// 'brasil' => oui, mais il ne faut regarder que dans SES chats, pas les miens.
// itajai
// Perú
import config from "./config.js";
var CITIES = config.destinations;
var TIMEOUT_SCROLL = 3000;

// ----------------------------------------------------------------------------
// voir si tu arrives a utiliser ... pour deconstruire multi var du console log
function cl(s) {
  console.log(s);
}
function cg(s) {
  console.group(s);
}
function cge(s) {
  console.groupEnd(s);
}
// 📘 MAIN
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
(async () => {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 1 : init
  // - - - - - - - - - - - - - - - - - - - - -
  cg("main");
  console.clear();
  console.log(" 😎 😎 😎 😎 😎 😎 😎 😎 😎 😎");
  const funcSet_timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  let arrEntity_scrappedRaw_all = [],
    strColor = "yellow",
    idLoop_inc = 0,
    idEntity_inc = 0;
  const SCROLL_SEL = IS_ZAP
    ? "._1vDUw._2sNbV"
    : ".ReactVirtualized__Grid.ReactVirtualized__List";
  const SCROLL_ELT = document.querySelector(SCROLL_SEL);
  SCROLL_ELT.scrollTo(0, 0);
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 2 : loop to scrap
  // - - - - - - - - - - - - - - - - - - - - -
  while (
    SCROLL_ELT.offsetHeight + SCROLL_ELT.scrollTop <
    SCROLL_ELT.scrollHeight
  ) {
    cg("loop-scroll");
    strColor = idLoop_inc % 2 == 0 ? "red" : "green";
    console.log(`%c ⭐ ${idLoop_inc}: `, `strColor: ${strColor}`);
    // main process
    // -------------------------------------------------------------------------
    SCROLL_ELT.scrollTo(0, SCROLL_ELT.offsetHeight * idLoop_inc);
    await funcSet_timeout(TIMEOUT_SCROLL);
    // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
    let arrEntity_scrappedRaw_all_localScroll = IS_ZAP
      ? scrap_loop_zap()
      : scrap_loop_tinder();
    // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
    arrEntity_scrappedRaw_all_localScroll.forEach((e, i) => {
      IS_ZAP
        ? (e._99axel_account_fb = "zap: 77538637")
        : (e._99axel_account_fb = ACCOUNT_FB_FOR_TINDER);
      idEntity_inc++;
      // start at 1 (to know how much contacts)
      e.ID = idEntity_inc;
    });
    arrEntity_scrappedRaw_all = arrEntity_scrappedRaw_all.concat(
      arrEntity_scrappedRaw_all_localScroll
    );
    // -------------------------------------------------------------------------
    cge("loop-scroll");
    // DEBUG
    if (IS_DEBUG && idLoop_inc === LIMIT_SCROLL) {
      console.log("BREAK SCROLL", idLoop_inc);
      break;
    } else idLoop_inc++;
  }
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 3 : data transformation (uniquify, orderify...)
  // - - - - - - - - - - - - - - - - - - - - -
  const FILENAME = IS_ZAP ? "zap" : `tinder-${ACCOUNT_FB_FOR_TINDER}`;
  // ==========> AXEL : it should be the same transfo for both
  // map Global, as a first unique-key for each PLACE... (because I want to visualize by place to go to the best one...)
  // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
  const MAP_DT = IS_ZAP
    ? DT_zap(arrEntity_scrappedRaw_all, FILENAME)
    : DT_tinder(arrEntity_scrappedRaw_all, FILENAME);
  // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 4 : save file (stringify the structure) ()
  // - - - - - - - - - - - - - - - - - - - - -
  saveFile(arrEntity_scrappedRaw_all, `${FILENAME}-raw.json`);
  saveFilePerCity(MAP_DT, `${FILENAME}-map`);
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 5 : end + debug
  // - - - - - - - - - - - - - - - - - - - - -
  end_main_log(MAP_DT);
})();

// 📘
// 📘
// 📘

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function end_main_log(MAP_DT) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // END APP
  cge("main");
  cl(" 😦 😦 😦 😦 😦 😦 😦 😦 😦 END");
  // DEBUG
  //   for (var [key, value] of dataMap) {
  //   //cl(key + " = " + value);
  //   saveFile(value, `${key}-${filename}.json`);
  // }
  //cl('ENDING PROCESS : saved total : ', MAP_DT.data.length, ' contacts');
  //cl("ENDING PROCESS : debug MAP_DT => ", MAP_DT);
  // console.table(arrGlobal.data); // cl(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
  cl(" 😦 😦 😦 😦 😦 😦 😦 😦 😦 END");
}

// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
// 📙📙📙📙📙📙📙📙📙 TINDER 📙📙📙📙📙📙📙📙
// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
/**📙
 * F1
 * scrap all visible content on page (then we will scroll to see new content)
 */
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function scrap_loop_tinder() {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  const ARR_ITEMS_CURRENTSCROLL_SEL = "match-row__wrapper";
  const ARR_ITEMS_CURRENTSCROLL_ELT = [
    ...document.getElementsByClassName(ARR_ITEMS_CURRENTSCROLL_SEL)
  ];
  const arrEntity = ARR_ITEMS_CURRENTSCROLL_ELT.map(e => {
    return get_detail_tinder(e);
  });
  return arrEntity;
}
/**📙
 * F2
 * e => the element to click to see details
 **/
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function get_detail_tinder(e) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // click to access detail
  e.click();
  // document.querySelector('match-row__wrapper').click();
  // await ?
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // SEL
  // - - - - - - - - - - - - - - - - - - - - -
  // ! mandatory fields
  const NAME_AGE_SEL = ".match__person-details h1";
  // const IMG_GALLERY_SEL = '.slick-track'; // the parent
  const IMG_GALLERY_SEL = ".slick-slide";
  const IMG_AVATAR_SEL = ".slick-active img";
  // * NON-mandatory fields
  const DISTANCE_SEL = "match__person-distance";
  const COMMENT_SEL = ".match__person-bio";
  const CHAT_SEL = ".message__body";
  //const S_boyChat = 'message__body';
  //const S_girlChat = '';
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // ELT
  // - - - - - - - - - - - - - - - - - - - - -
  // ! mandatory fields
  const NAME_AGE_ELT = document.querySelector(NAME_AGE_SEL);
  const ARR_IMG_GALLERY_ELT = [...document.querySelectorAll(IMG_GALLERY_SEL)];
  const IMG_AVATAR_ELT = document.querySelector(IMG_AVATAR_SEL);
  // * NON mandatory fields
  const COMMENT_ELT = document.querySelector(COMMENT_SEL);
  const DISTANCE_ELT = document.querySelector(DISTANCE_SEL);
  const CHAT_ELT = [...document.querySelectorAll(CHAT_SEL)];
  // newer syntax
  //const nodeList = Array.from(document.querySelectorAll('[selector]'))
  // or
  //const nodeList = [...document.querySelectorAll('[selector]')]
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // VALUE
  // - - - - - - - - - - - - - - - - - - - - -
  // ! mandatory fields
  const ARR_NAME_AGE = NAME_AGE_ELT.innerText.split(",");
  const STR_NAME = ARR_NAME_AGE[0] !== null ? ARR_NAME_AGE[0] : "";
  const STR_AGE = ARR_NAME_AGE[1] !== null ? ARR_NAME_AGE[1] : "";
  // gallery : il faudra simuler le click sur le slider, pour faire loader les autres images
  //const ARR_IMG_SRC_GALLERY = ARR_IMG_GALLERY_ELT.map(e=>e.src);
  //const ARR_IMG_DATAURL_GALLERY = ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
  const IMG_SRC_AVATAR = IMG_AVATAR_ELT.src;
  // pour tinder, inutile binaire, car je crois, j ai acces depuis l URL
  // const IMG_DATAURL_AVATAR = saveDataUrl(IMG_AVATAR_ELT);
  // * NON-mandatory fields
  const STR_DISTANCE = DISTANCE_ELT !== null ? DISTANCE_ELT.innerText : "";
  const STR_STATUS = COMMENT_ELT !== null ? COMMENT_ELT.innerText : "";
  // TINDER > CORS PB => saveDataUrl(IMG_GALLEY_FIRST); //ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
  // TODO - tu prends les innerText du array de chat...
  // chat
  const ARR_STR_CHAT = CHAT_ELT !== null ? CHAT_ELT.map(e => e.innerText) : [];
  const OBJ_DATAMINED = DM_chat_tinder(ARR_STR_CHAT);
  //const boyChat = document.queryAllSelector(S_boyChat);
  //const girlChat = document.queryAllSelector(S_girlChat);
  // - - - - - - - - - - - - - - - - - - - - -
  // IMMUTABLE OBJECT
  // - - - - - - - - - - - - - - - - - - - - -
  const OBJ = {
    // - - - - - - - - - - - - - - - - - - - - -
    // ACCOUNT
    // - - - - - - - - - - - - - - - - - - - - -
    _0name: STR_NAME,
    //DM
    _1phone: OBJ_DATAMINED.phone,
    _1instagram_account: "",
    _1tinder_account: "",
    _2age: STR_AGE,
    // - - - - - - - - - - - - - - - - - - - - -
    // IMG
    // - - - - - - - - - - - - - - - - - - - - -
    // here : just all the DATA URLs
    //_3img_tinder_dataUrl: IMG_DATAURL_AVATAR,
    _3img_tinder_src: IMG_SRC_AVATAR,
    //_3img_tinderGallery_dataUrl: ARR_IMG_DATAURL_GALLERY_ELT,
    //_3img_tinderGallery_src: ARR_IMG_SRC_GALLERY_ELT,
    // C est dans la fusion de la DB globale, que tout est assemble
    // _4img_zap_dataUrl: '',
    // _4img_zap_src: '',
    // _4img_zapGallery_dataUrl: [],
    // _4img_zapGallery_src: [],
    // _5img_instagram_dataUrl: '',
    // _5img_instagram_src: '',
    // _5img_instagramGallery_dataUrl: [],
    // _5img_instagramGallery_src: [],
    // - - - - - - - - - - - - - - - - - - - - -
    // LOCATION
    // - - - - - - - - - - - - - - - - - - - - -
    //DM
    _6country: "",
    //DM
    _7city: OBJ_DATAMINED.city,
    _8distance: STR_DISTANCE,
    // - - - - - - - - - - - - - - - - - - - - -
    // NOTE
    // - - - - - - - - - - - - - - - - - - - - -
    _10cat_L0: "",
    // categorie
    //_10cat_L1: '',
    // rank inside categorie
    // uselfull to big-data,  A/B test, the best sentences
    // - - - - - - - - - - - - - - - - - - - - -
    // CHAT
    // - - - - - - - - - - - - - - - - - - - - -
    // _11chat_zap_all: [],
    // _11chat_zap_my: '',
    // _11chat_zap_her: '',
    // _11chat_insta_all: [],
    // _11chat_insta_my: '',
    // _11chat_insta_her: '',
    _11chat_tinder_my: "",
    _11chat_tinder_her: "",
    _11chat_tinder_all: ARR_STR_CHAT,
    // - - - - - - - - - - - - - - - - - - - - -
    // STATUS
    // - - - - - - - - - - - - - - - - - - - - -
    //_9comment_axel: '',
    //_9status_insta: '',
    _9status_tinder: STR_STATUS
  };
  return OBJ;
}
//📙
/**
 * data-mining : extract infos
 * @param {*} ARR_STR_CHAT
 */
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function DM_chat_tinder(ARR_STR_CHAT) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // TODO - il faudrait verifier que les phrases sont celles de la fille
  // check pour chaque ligne, regexp : si l'une evoque un num de tel (5 num continue)

  let o = {
    phone: "",
    city: ""
  };

  const REGEXP_PHONE = /\d{4,}/g;
  // ne marche pas si number est comme ca : 92 995246941

  ARR_STR_CHAT.forEach(tokenLine => {
    //! /(?<city>manaus|campo grande)|(?<phone>\d{4,})/g
    //!  match() => null if not found
    const STR_PHONE = tokenLine.match(REGEXP_PHONE);
    // TODO - ne prends pas le cas ou elle me corrige le num en dessous
    // TODO - prendre le cas ou melange chiffre et lettres dans la phrase
    const STR_CITY = find_city(tokenLine);
    // data-mining
    STR_PHONE !== null ? (o.phone = STR_PHONE) : null;
    STR_CITY !== null ? (o.city = STR_CITY) : null;
    // we should stop the loop if both are found
  });
  return o;
}
// 📙
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function find_city(tokenLine) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  tokenLine = tokenLine.toLowerCase();
  const ARR_TOKEN = tokenLine.split(" ");
  let city = null;
  for (let i = 0; i < ARR_TOKEN.length; i++) {
    const WORD = ARR_TOKEN[i];

    // new
    // "Sou de Manaus/AM\n",
    // manaus,
    // Cochabamba\n
    for (let j = 0; j < CITIES.length; j++) {
      //const REGEXP_CITY = /${GLOBAL_ARR_STR_CITY_DEFAULT[j]}/g;
      const REGEXP_CITY = new RegExp(`${CITIES[j]}`, "g");
      city = WORD.match(REGEXP_CITY);
      // match return array
      // null si no match
      // we stop loop if founded
      if (city !== null) {
        city = city[0];
        // convert arr to str
        break;
      }
    }
    // old
    //city = GLOBAL_ARR_STR_CITY_DEFAULT.find(e=>e === WORD) !== undefined ? WORD : city;
    // we stop loop if founded
    if (city !== null) break;
  }
  return city;
}

// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
/**
 * Take array and operate transformations...
 *
 **/
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function DT_tinder(arrEntity_scrappedRaw_all, FILENAME) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // step0 = DT : CLEAN data
  const ARR_ENTITY_SCRAPPEDRAW_NODOUBLON = DT_tinder_delete_doublon(
    arrEntity_scrappedRaw_all
  );

  // TODO : it should be handled by another ACTOR,
  // TODO : to simplify process, we operate transformation directly in this file

  // step1 = group by CITIES (ici s'opere la transfo en MAP)
  const MAP_ENTITY_GROUPBY_CITY = DT_tinder_groupBy_city(
    ARR_ENTITY_SCRAPPEDRAW_NODOUBLON
  );
  // step2 = order by AGE
  return MAP_ENTITY_GROUPBY_CITY;

  /*
  // DT : CREATE ENTITIES
  const arrGlobalEntities = T2zap_parseEntityZap(arrGlobalRawClean);
  // DT : ORDER PROCESS : by city, by rank, by age
  const arrGlobalOrdered = T3zap_order(arrGlobalEntities);
  // rule 4 : order BY age !
  // cl('DT : order');
  // const dataArr4 = dataArr3.sort();
  // DT : TAXOMISATION
  const MAP_DT1 = T4zap_dataTransfo_businessRules(arrGlobalEntities);
  const MAP_DT2 = {
    'data': MAP_DT1,
    'account': filename
  };
  return MAP_DT2;
  */
}

// TODO - utiliser les classes, pour statifier l acces aux var, selon un schema predefinit : il faut que le _7city soit
// GROUPER = c est ORDONNER + DETACHER PHYSIQUEMENT
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function DT_tinder_groupBy_city(arr) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  cl("DT : group by (city)");
  // let existingKeys = {};
  let map = new Map();

  arr.forEach((e, i) => {
    const KEY = e._7city;
    // delete the ID (country) that has been extracted
    //delete e._7city;
    map.has(KEY) // if the key exist
      ? map.get(KEY).push(e) // if the key, does not exist
      : map.set(KEY, [e]);
  });
  return map;
}

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function DT_tinder_orderBy_age(arr) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // d'abord, est ce qu'ils ont un TEL ou PAS
  //
  // ensuite par age
  const ARR_1 = arr.sort((a, b) =>
    a._2age > b._2age ? 1 : b._2age > a._2age ? -1 : 0
  );
  const ARR_2 = ARR_1.sort((a, b) =>
    a._8distance > b._8distance ? 1 : b._8distance > a._8distance ? -1 : 0
  );
  return ARR_2;
}

// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
/**
 * KEY : name + age + distance + comment (or just comment)
 */
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function DT_tinder_delete_doublon(arr) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // REMOVE PROCESS
  // rule 1 : unique (doublon because of scroll)
  cl("DT : unique");
  const ARR_1 = unique(arr, e => e._0name + e._2age + e._9status_tinder);

  // QUE POUR ZAP
  // it should be unic by phone number (not present in whatsapp now)
  // rule 2:  without null names
  // cl('DT : not null names');
  // const dataArr2 = dataArr1.filter(e => e.title !== null);
  // TODO - je perd du tps a parcourir les Z
  // rule 3 : not normal contact (start with z)
  //cl('DT : not Z');
  // const dataArr3 = dataArr2.filter(e => e.title.charAt(0) !== 'z');
  return ARR_1;
}
