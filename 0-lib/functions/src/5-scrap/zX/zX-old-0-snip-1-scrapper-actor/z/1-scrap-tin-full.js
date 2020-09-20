// 📒📕📗📘📙 2
// SNIPPET-CHROME
// SCRAPPER
// the app end, when all data are scrapped and put in a json file (simple array structure...) uploaded to the drive
// DT = data-transform
// DM = data-mining
// synced 0016
// 📒📕📗📘📙
//
// si ca fait 9 chiffres, il faut rajouter l indicatif
//
// ----------------------------------------------------------------------------
// 📘 GLOBAL VAR CONFIG // normally cst, but for debug, putting var
// ----------------------------------------------------------------------------
//var CONST_IS_ZAP = true;
var CONST_IS_ZAP = false;
// ----------------------------------------------------------------------------
var CONST_IS_DEBUG = 1;
// 0 = false else true

var CONST_LIMIT_SCROLL = 1000;
//var CONST_LIMIT_SCROLL = 3;

/// 10000 = illimited
// <-----------XXXXXXXXX ATTENTION (sinon arrete scrappeur)
// tinder
//var CONST_ACCOUNT_FB_FOR_TINDER = '00_1_nzaero';
//var CONST_ACCOUNT_FB_FOR_TINDER = '00_2_jojoaxelito';
// var CONST_ACCOUNT_FB_FOR_TINDER = '00_3_axelopolito';
// var CONST_ACCOUNT_FB_FOR_TINDER = '00_4_nzaerolita';
// var CONST_ACCOUNT_FB_FOR_TINDER = '00_5_myjojoax';
// var CONST_ACCOUNT_FB_FOR_TINDER = '00_6_popoax';
// var CONST_ACCOUNT_FB_FOR_TINDER = '00_7_2axelsecond';
// var CONST_ACCOUNT_FB_FOR_TINDER = '00_8_axelrobomart';
var CONST_ACCOUNT_FB_FOR_TINDER = "00_9_leroyjojoax";

// un fichier par petite ville = la merde => regrouper par grosses zones
// 'pa',  => j ai un break, donc fait default
// 'brasil' => oui, mais il ne faut regarder que dans SES chats, pas les miens.
// itajai
//Perú
var GLOBAL_CITIES_DEFAULT = [
  "manaus",
  "marta",
  "cartagena",
  "baranquilla",
  "jacarezinho",
  "garibaldi",
  "piúma",
  "alem",
  "posadas",
  "recife",
  "lagoas",
  "murutinga",
  "birigui",
  "florianópolis",
  "porã",
  "catarina",
  "curitibanos",
  "brilhante",
  "itapema",
  "jaraguá",
  "jardim",
  "itajai",
  "grande",
  "palmas",
  "cusco",
  "sete",
  "josé",
  "laranjeiras",
  "canedo",
  "caldas",
  "luziânia",
  "anápolis",
  "borja",
  "hohenau",
  "foz",
  "curionópolis",
  "altamira",
  "caracas",
  "guarapuava",
  "alvorada",
  "novo",
  "sooretama",
  "jaguaré",
  "Piúma",
  "Espírito",
  "leopoldo",
  "apucarana",
  "vitória",
  "itambé",
  "gonçalves",
  "gabriel",
  "correia",
  "fé",
  "francisco",
  "joinville",
  "beltrão",
  "canoas",
  "guaíba",
  "poa",
  "bolivia",
  "corumbá",
  "isabela",
  "argentina",
  "maringá",
  "umuarama",
  "toledo",
  "hamburgo",
  "alvadora",
  "naviraí",
  "chapecó",
  "chapeco",
  "goiânia",
  "palotina",
  "goioerê",
  "vizinhos",
  "cascavel",
  "xavantina",
  "bituruna",
  "mourao",
  "misiones",
  "santo antonio",
  "cerro largo",
  "cianorte",
  "santa tereza",
  "jujuy",
  "paraguay",
  "paraiso",
  "salvador",
  "vacaria",
  "acre",
  "lages",
  "londrina",
  "maringa",
  "rb",
  "branco",
  "scz",
  "sm",
  "maria",
  "alegre",
  "anapolis",
  "floripa",
  "medellin",
  "blumenau",
  "cuzco",
  "portão",
  "salta",
  "bananal",
  "cordoba",
  "lima",
  "vitoria",
  "gv",
  "valderes",
  "cruz",
  "paz",
  "cochabamba"
];

var CONST_TIMEOUT_SCROLL = 3000;

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
// ----------------------------------------------------------------------------
// 📘 MAIN
(async () => {
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
  const CONST_SCROLL_SEL = CONST_IS_ZAP
    ? "._1vDUw._2sNbV"
    : ".ReactVirtualized__Grid.ReactVirtualized__List";
  const CONST_SCROLL_ELT = document.querySelector(CONST_SCROLL_SEL);
  CONST_SCROLL_ELT.scrollTo(0, 0);
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 2 : loop to scrap
  // - - - - - - - - - - - - - - - - - - - - -
  while (
    CONST_SCROLL_ELT.offsetHeight + CONST_SCROLL_ELT.scrollTop <
    CONST_SCROLL_ELT.scrollHeight
  ) {
    cg("loop-scroll");
    strColor = idLoop_inc % 2 == 0 ? "red" : "green";
    console.log(`%c ⭐ ${idLoop_inc}: `, `strColor: ${strColor}`);
    // main process
    // -------------------------------------------------------------------------
    CONST_SCROLL_ELT.scrollTo(0, CONST_SCROLL_ELT.offsetHeight * idLoop_inc);
    await funcSet_timeout(CONST_TIMEOUT_SCROLL);
    // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
    let arrEntity_scrappedRaw_all_localScroll = CONST_IS_ZAP
      ? scrap_loop_zap()
      : scrap_loop_tinder();
    // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
    arrEntity_scrappedRaw_all_localScroll.forEach((e, i) => {
      CONST_IS_ZAP
        ? (e._99axel_account_fb = "zap: 77538637")
        : (e._99axel_account_fb = CONST_ACCOUNT_FB_FOR_TINDER);
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
    if (CONST_IS_DEBUG && idLoop_inc === CONST_LIMIT_SCROLL) {
      console.log("BREAK SCROLL", idLoop_inc);
      break;
    } else idLoop_inc++;
  }
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 3 : data transformation (uniquify, orderify...)
  // - - - - - - - - - - - - - - - - - - - - -
  const CONST_FILENAME = CONST_IS_ZAP
    ? "zap"
    : `tinder-${CONST_ACCOUNT_FB_FOR_TINDER}`;
  // ==========> AXEL : it should be the same transfo for both
  // map Global, as a first unique-key for each PLACE... (because I want to visualize by place to go to the best one...)
  // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
  const CONST_MAP_DT = CONST_IS_ZAP
    ? DT_zap(arrEntity_scrappedRaw_all, CONST_FILENAME)
    : DT_tinder(arrEntity_scrappedRaw_all, CONST_FILENAME);
  // ❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗❗
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 4 : save file (stringify the structure) ()
  // - - - - - - - - - - - - - - - - - - - - -

  // try now - CSV
  //arrEntity_scrappedRaw_all = ConvertToCSV(arrEntity_scrappedRaw_all);
  //const CONST_MAP_DT_CSV = ConvertToCSV(CONST_MAP_DT);

  //saveFile(arrEntity_scrappedRaw_all, `${CONST_FILENAME}-raw-CSV.json`);
  //saveFilePerCity(CONST_MAP_DT_CSV, `${CONST_FILENAME}-map-CSV`);

  saveFile(arrEntity_scrappedRaw_all, `${CONST_FILENAME}-raw.json`);
  saveFilePerCity(CONST_MAP_DT, `${CONST_FILENAME}-map`);
  //
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // STEP 5 : end + debug
  // - - - - - - - - - - - - - - - - - - - - -
  printEnd(CONST_MAP_DT);
})();

// 📘
// 📘
// 📘
// 📘
// 📘
// 📘
// 📘
// 📘
// JSON to CSV Converter
function ConvertToCSV(objArray) {
  var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
  var str = "";

  for (var i = 0; i < array.length; i++) {
    var line = "";
    for (var index in array[i]) {
      if (line != "") line += ",";

      line += array[i][index];
    }

    str += line + "\r\n";
  }

  return str;
}

function printEnd(CONST_MAP_DT) {
  // END APP
  cge("main");
  cl(" 😦 😦 😦 😦 😦 😦 😦 😦 😦 END");
  // DEBUG
  //   for (var [key, value] of dataMap) {
  //   //cl(key + " = " + value);
  //   saveFile(value, `${key}-${filename}.json`);
  // }

  //cl('ENDING PROCESS : saved total : ', CONST_MAP_DT.data.length, ' contacts');
  //cl("ENDING PROCESS : debug CONST_MAP_DT => ", CONST_MAP_DT);
  // console.table(arrGlobal.data); // cl(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
  cl(" 😦 😦 😦 😦 😦 😦 😦 😦 😦 END");
}

// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
// 📙📙📙📙📙📙📙📙📙 TINDER 📙📙📙📙📙📙📙📙
// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
/**📙
 * F1
 * scrap all visible content on page (then we will scroll to see new content)
 */
function scrap_loop_tinder() {
  const CONST_ARR_ITEMS_CURRENTSCROLL_SEL = "match-row__wrapper";
  const CONST_ARR_ITEMS_CURRENTSCROLL_ELT = [
    ...document.getElementsByClassName(CONST_ARR_ITEMS_CURRENTSCROLL_SEL)
  ];
  const arrEntity = CONST_ARR_ITEMS_CURRENTSCROLL_ELT.map(e => {
    return get_detail_tinder(e);
  });
  return arrEntity;
}
/**📙
 * F2
 * e => the element to click to see details
 **/
function get_detail_tinder(e) {
  // click to access detail
  e.click();
  // document.querySelector('match-row__wrapper').click();
  // await ?
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // SEL
  // - - - - - - - - - - - - - - - - - - - - -
  // ✅ mandatory fields
  const CONST_NAME_AGE_SEL = ".match__person-details h1";
  // const CONST_IMG_GALLERY_SEL = '.slick-track'; // the parent
  const CONST_IMG_GALLERY_SEL = ".slick-slide";
  const CONST_IMG_AVATAR_SEL = ".slick-active img";
  // ⛔NON-mandatory fields
  const CONST_DISTANCE_SEL = "match__person-distance";
  const CONST_COMMENT_SEL = ".match__person-bio";
  const CONST_CHAT_SEL = ".message__body";
  //const S_boyChat = 'message__body';
  //const S_girlChat = '';
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // ELT
  // - - - - - - - - - - - - - - - - - - - - -
  // ✅ mandatory fields
  const CONST_NAME_AGE_ELT = document.querySelector(CONST_NAME_AGE_SEL);
  const CONST_ARR_IMG_GALLERY_ELT = [
    ...document.querySelectorAll(CONST_IMG_GALLERY_SEL)
  ];
  const CONST_IMG_AVATAR_ELT = document.querySelector(CONST_IMG_AVATAR_SEL);
  // ⛔NON mandatory fields
  const CONST_COMMENT_ELT = document.querySelector(CONST_COMMENT_SEL);
  const CONST_DISTANCE_ELT = document.querySelector(CONST_DISTANCE_SEL);
  const CONST_CHAT_ELT = [...document.querySelectorAll(CONST_CHAT_SEL)];
  // newer syntax
  //const nodeList = Array.from(document.querySelectorAll('[selector]'))
  // or
  //const nodeList = [...document.querySelectorAll('[selector]')]
  //
  // - - - - - - - - - - - - - - - - - - - - -
  // VALUE
  // - - - - - - - - - - - - - - - - - - - - -
  // ✅ mandatory fields
  const CONST_ARR_NAME_AGE = CONST_NAME_AGE_ELT.innerText.split(",");
  const CONST_STR_NAME =
    CONST_ARR_NAME_AGE[0] !== null ? CONST_ARR_NAME_AGE[0] : "";
  const CONST_STR_AGE =
    CONST_ARR_NAME_AGE[1] !== null ? CONST_ARR_NAME_AGE[1] : "";
  // gallery : il faudra simuler le click sur le slider, pour faire loader les autres images
  //const CONST_ARR_IMG_SRC_GALLERY = CONST_ARR_IMG_GALLERY_ELT.map(e=>e.src);
  //const CONST_ARR_IMG_DATAURL_GALLERY = CONST_ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
  const CONST_IMG_SRC_AVATAR = CONST_IMG_AVATAR_ELT.src;
  // pour tinder, inutile binaire, car je crois, j ai acces depuis l URL
  // const CONST_IMG_DATAURL_AVATAR = saveDataUrl(CONST_IMG_AVATAR_ELT);
  // ⛔ NON-mandatory fields
  const CONST_STR_DISTANCE =
    CONST_DISTANCE_ELT !== null ? CONST_DISTANCE_ELT.innerText : "";
  const CONST_STR_STATUS =
    CONST_COMMENT_ELT !== null ? CONST_COMMENT_ELT.innerText : "";
  // TINDER > CORS PB => saveDataUrl(CONST_IMG_GALLEY_FIRST); //CONST_ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
  // TODO - tu prends les innerText du array de chat...
  // chat
  const CONST_ARR_STR_CHAT =
    CONST_CHAT_ELT !== null ? CONST_CHAT_ELT.map(e => e.innerText) : [];
  const CONST_OBJ_DATAMINED = DM_chat_tinder(CONST_ARR_STR_CHAT);
  //const boyChat = document.queryAllSelector(S_boyChat);
  //const girlChat = document.queryAllSelector(S_girlChat);
  // - - - - - - - - - - - - - - - - - - - - -
  // IMMUTABLE OBJECT
  // - - - - - - - - - - - - - - - - - - - - -
  const CONST_OBJ = {
    // - - - - - - - - - - - - - - - - - - - - -
    // ACCOUNT
    // - - - - - - - - - - - - - - - - - - - - -
    _0name: CONST_STR_NAME,
    //DM
    _1phone: CONST_OBJ_DATAMINED.phone,
    _1instagram_account: "",
    _1tinder_account: "",
    _2age: CONST_STR_AGE,
    // - - - - - - - - - - - - - - - - - - - - -
    // IMG
    // - - - - - - - - - - - - - - - - - - - - -
    // here : just all the DATA URLs
    //_3img_tinder_dataUrl: CONST_IMG_DATAURL_AVATAR,
    _3img_tinder_src: CONST_IMG_SRC_AVATAR,
    //_3img_tinderGallery_dataUrl: CONST_ARR_IMG_DATAURL_GALLERY_ELT,
    //_3img_tinderGallery_src: CONST_ARR_IMG_SRC_GALLERY_ELT,
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
    _7city: CONST_OBJ_DATAMINED.city,
    _8distance: CONST_STR_DISTANCE,
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
    _11chat_tinder_all: CONST_ARR_STR_CHAT,
    // - - - - - - - - - - - - - - - - - - - - -
    // STATUS
    // - - - - - - - - - - - - - - - - - - - - -
    //_9comment_axel: '',
    //_9status_insta: '',
    _9status_tinder: CONST_STR_STATUS
  };
  return CONST_OBJ;
}
//📙
/**
 * data-mining : extract infos
 * @param {*} CONST_ARR_STR_CHAT
 */
function DM_chat_tinder(CONST_ARR_STR_CHAT) {
  // TODO - il faudrait verifier que les phrases sont celles de la fille
  // check pour chaque ligne, regexp : si l'une evoque un num de tel (5 num continue)

  let o = {
    phone: "",
    city: ""
  };

  const CONST_REGEXP_PHONE = /\d{4,}/g;
  // ne marche pas si number est comme ca : 92 995246941

  CONST_ARR_STR_CHAT.forEach(tokenLine => {
    ///(?<city>manaus|campo grande)|(?<phone>\d{4,})/g
    // match() => null if not found
    const CONST_STR_PHONE = tokenLine.match(CONST_REGEXP_PHONE);
    // TODO - ne prends pas le cas ou elle me corrige le num en dessous
    // TODO - prendre le cas ou melange chiffre et lettres dans la phrase
    const CONST_STR_CITY = DM_find_city(tokenLine);
    // data-mining
    CONST_STR_PHONE !== null ? (o.phone = CONST_STR_PHONE) : null;
    CONST_STR_CITY !== null ? (o.city = CONST_STR_CITY) : null;
    // we should stop the loop if both are found
  });
  return o;
}
// 📙
function DM_find_city(tokenLine) {
  tokenLine = tokenLine.toLowerCase();
  const CONST_ARR_TOKEN = tokenLine.split(" ");
  let city = null;
  for (let i = 0; i < CONST_ARR_TOKEN.length; i++) {
    const CONST_WORD = CONST_ARR_TOKEN[i];

    // new
    // "Sou de Manaus/AM\n",
    // manaus,
    // Cochabamba\n
    for (let j = 0; j < GLOBAL_CITIES_DEFAULT.length; j++) {
      //const CONST_REGEXP_CITY = /${CONST_GLOBAL_ARR_STR_CITY_DEFAULT[j]}/g;
      const CONST_REGEXP_CITY = new RegExp(`${GLOBAL_CITIES_DEFAULT[j]}`, "g");
      city = CONST_WORD.match(CONST_REGEXP_CITY);
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
    //city = CONST_GLOBAL_ARR_STR_CITY_DEFAULT.find(e=>e === CONST_WORD) !== undefined ? CONST_WORD : city;
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
function DT_tinder(arrEntity_scrappedRaw_all, CONST_FILENAME) {
  // step0 = DT : CLEAN data
  const CONST_ARR_ENTITY_SCRAPPEDRAW_NODOUBLON = DT_tinder_delete_doublon(
    arrEntity_scrappedRaw_all
  );

  // TODO : it should be handled by another ACTOR,
  // TODO : to simplify process, we operate transformation directly in this file

  // step1 = group by CITIES (ici s'opere la transfo en MAP)
  const CONST_MAP_ENTITY_GROUPBY_CITY = DT_tinder_groupBy_city(
    CONST_ARR_ENTITY_SCRAPPEDRAW_NODOUBLON
  );
  // step2 = order by AGE
  return CONST_MAP_ENTITY_GROUPBY_CITY;

  /*
  // DT : CREATE ENTITIES
  const arrGlobalEntities = T2zap_parseEntityZap(arrGlobalRawClean);
  // DT : ORDER PROCESS : by city, by rank, by age
  const arrGlobalOrdered = T3zap_order(arrGlobalEntities);
  // rule 4 : order BY age !
  // cl('DT : order');
  // const dataArr4 = dataArr3.sort();
  // DT : TAXOMISATION
  const CONST_MAP_DT1 = T4zap_dataTransfo_businessRules(arrGlobalEntities);
  const CONST_MAP_DT2 = {
    'data': CONST_MAP_DT1,
    'account': filename
  };
  return CONST_MAP_DT2;
  */
}

// TODO - utiliser les classes, pour statifier l acces aux var, selon un schema predefinit : il faut que le _7city soit
// GROUPER = c est ORDONNER + DETACHER PHYSIQUEMENT
function DT_tinder_groupBy_city(arr) {
  cl("DT : group by (city)");
  // let existingKeys = {};
  let map = new Map();

  arr.forEach((e, i) => {
    const CONST_KEY = e._7city;
    // delete the ID (country) that has been extracted
    //delete e._7city;
    map.has(CONST_KEY) // if the key exist
      ? map.get(CONST_KEY).push(e) // if the key, does not exist
      : map.set(CONST_KEY, [e]);
  });
  return map;
}

function DT_tinder_orderBy_age(arr) {
  // d'abord, est ce qu'ils ont un TEL ou PAS
  //
  // ensuite par age
  const CONST_ARR_1 = arr.sort((a, b) =>
    a._2age > b._2age ? 1 : b._2age > a._2age ? -1 : 0
  );
  const CONST_ARR_2 = CONST_ARR_1.sort((a, b) =>
    a._8distance > b._8distance ? 1 : b._8distance > a._8distance ? -1 : 0
  );
  return CONST_ARR_2;
}

// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙
/**
 * KEY : name + age + distance + comment (or just comment)
 */
function DT_tinder_delete_doublon(arr) {
  // REMOVE PROCESS
  // rule 1 : unique (doublon because of scroll)
  cl("DT : unique");
  const CONST_ARR_1 = unique(arr, e => e._0name + e._2age + e._9status_tinder);

  // QUE POUR ZAP
  // it should be unic by phone number (not present in whatsapp now)
  // rule 2:  without null names
  // cl('DT : not null names');
  // const dataArr2 = dataArr1.filter(e => e.title !== null);
  // TODO - je perd du tps a parcourir les Z
  // rule 3 : not normal contact (start with z)
  //cl('DT : not Z');
  // const dataArr3 = dataArr2.filter(e => e.title.charAt(0) !== 'z');
  return CONST_ARR_1;
}

// 📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙📙

// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘 END
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘

// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒 COMMON HELPERS
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒

// https://github.com/bgrins/devtools-snippets
function saveDataUrl(imgElt) {
  //cg("Data URLs (imgElmt)");
  if (imgElt === null) {
    cl("warn : the image is null, so we do not convert to dataUrl");
    cge("Data URLs");
    return null;
  }
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  // zap contact image
  c.width = 640;
  c.height = 640;
  try {
    ctx.drawImage(imgElt, 0, 0);
    const dataUrl = c.toDataURL();
    //cl("DEBUG dataUrl : ", dataUrl);
    //cge("Data URLs");
    return dataUrl;
  } catch (err) {
    console.log(
      err,
      "No Permission - try opening this image in a new tab and running the snippet again?",
      imgElt.src
    );
    //cge("Data URLs");
  }
}
// - - - - - - - - - - - - - - - - - - - - -
function saveDataUrlArr(arr) {
  cg("Data URLs (arr)");
  const dataArrUrl = arr.map(e => {
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    //c.width = i.width;
    //c.height = i.height;
    // zap contact image
    c.width = 640;
    c.height = 640;
    try {
      ctx.drawImage(e, 0, 0);
      const dataUrl = c.toDataURL();
      //cl("DEBUG dataUrl : ", dataUrl);
      return dataUrl;
    } catch (err) {
      console.log(
        err,
        "No Permission - try opening this image in a new tab and running the snippet again?",
        e.src
      );
    }
  });
  cge("Data URLs");
  return dataArrUrl;
}
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒
function saveFile(data, filename) {
  let dataStringifyedJson = "";
  cg("save-file");
  if (!data) {
    console.error("Console.save: No data");
    return;
  }
  if (!filename) filename = "console.json";
  if (typeof data === "object") {
    dataStringifyedJson = JSON.stringify(data, undefined, 4);
  }
  let blob = new Blob([dataStringifyedJson], {
    type: "text/json"
  });
  let e = document.createEvent("MouseEvents");
  let a = document.createElement("a");
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
  e.initMouseEvent(
    "click",
    true,
    false,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  a.dispatchEvent(e);
  cl("file saved : " + filename + "!");
  cge("save-file");
}
// - - - - - - - - - - - - - - - - - - - - -
function saveFilePerCity(map, filename) {
  for (var [key, value] of map) {
    //cl(key + " = " + value);
    saveFile(value, `${filename}-${key}.json`);
  }
}
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒
function unique(arr, f) {
  const vArr = arr.map(f);
  return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);
}
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒
function $x(xpath, el) {
  var nodes = document.evaluate(
    xpath,
    el || document,
    null,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null
  );
  var results = new Array(nodes.snapshotLength);
  // faster for chrome to know how long this'll be
  for (var i = 0, length = nodes.snapshotLength; i < length; i++) {
    results[i] = nodes.snapshotItem(i);
  }
  return results;
}

// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘 END
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘

// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗 ZAP
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗
function scrap_loop_zap() {
  // const arrScrap = scrapZap();
  //__________________________
  // SCRAP ZAP 📒
  const arrListElt = [...document.getElementsByClassName("_2wP_Y")];
  const arrRaw = arrListElt.map(i => {
    // const img = $('img', i) !== null ? $('img', i).src : null;
    const imgElt = i.querySelector("img");
    const title =
      i.querySelector("._3j7s9 > ._2FBdJ > ._25Ooe > ._3TEwt > ._1wjpf") !==
      null
        ? i.querySelector("._3j7s9 > ._2FBdJ > ._25Ooe > ._3TEwt > ._1wjpf")
            .title
        : null;
    const o = {
      title,
      imgElt
    };
    return o;
  });
  return arrRaw;
}
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
function DT_zap(arrGlobalRaw, filename) {
  // DT : CLEAN data
  const arrGlobalRawClean = T1zap_dataTransfo_clean(arrGlobalRaw);
  // DT : CREATE ENTITIES
  const arrGlobalEntities = T2zap_parseEntityZap(arrGlobalRawClean);

  // DT : ORDER PROCESS : by city, by rank, by age
  const arrGlobalOrdered = T3zap_order(arrGlobalEntities);
  // rule 4 : order BY age !
  // cl('DT : order');
  // const dataArr4 = dataArr3.sort();

  // DT : TAXOMISATION
  const CONST_MAP_DT1 = T4zap_dataTransfo_businessRules(arrGlobalEntities);
  const CONST_MAP_DT2 = {
    data: CONST_MAP_DT1,
    account: filename
  };
  return CONST_MAP_DT2;
}
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
/**
 * transform data into more hierarchical one
 * @param {a zap raw data} data
 */
function T1zap_dataTransfo_clean(arrGlobalRaw) {
  // REMOVE PROCESS
  // rule 1 : unique (doublon because of scroll)
  cl("DT : unique");
  const dataArr1 = unique(arrGlobalRaw, e => e.title);
  // it should be unic by phone number (not present in whatsapp now)
  // rule 2:  without null names
  cl("DT : not null names");
  const dataArr2 = dataArr1.filter(e => e.title !== null);
  // TODO - je perd du tps a parcourir les Z
  // rule 3 : not normal contact (start with z)
  //cl('DT : not Z');
  const dataArr3 = dataArr2.filter(e => e.title.charAt(0) !== "z");
  return dataArr3;
}
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
function T2zap_parseEntityZap(dataArr) {
  const arrSplitted = dataArr.map(e => {
    const img = saveDataUrl(e.imgElt);
    const arrTitle = e.title.split(" ");
    const country = arrTitle[0];
    const city = arrTitle[1];
    const age = arrTitle[2];
    const name = arrTitle[3];
    const comment = arrTitle[4] !== undefined ? arrTitle[4] : "";

    const phone = "";

    // IMMUTABLE OBJECT
    const o = {
      _0name: name,
      _1phone: "",
      _2img_tinder: img,

      _3age: age,

      _4img_zap: "",
      _5img_tin_gallery: "",
      _6img_zap_gallery: "",
      _7img_inst_gallery: "",

      _8country: country,
      _9city: city,

      _10insta: "",
      _11tin_status: "",

      _12axl_fb_account: "",
      _13rank: "",
      _14note: "",
      _15comment: comment,
      _16tag: ""
    };
    //cl('DEBUG o => ' + o);
    return o;
  });
  return arrSplitted;
}

// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗 DT (other script) ...
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗

// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
function T3zap_order(arrGlobalEntities) {
  const arr = arrGlobalEntities.sort((a, b) =>
    a._3age > b._3age ? 1 : b._3age > a._3age ? -1 : 0
  );
  return arr;
}
// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗
function T4zap_dataTransfo_businessRules(arrData) {
  // rule 1 : primay key by country + city
  const map = DT_groupBy_countryCity(arrData);
  // rule 2 :
  return map;
}
function DT_groupBy_countryCity(arrData) {
  // let existingKeys = {};
  let map = new Map();
  arrData.forEach((e, i) => {
    const key = e._8country;
    // delete the ID (country) that has been extracted
    delete e._8country;
    map.has(key) // if the key exist
      ? map.get(key).push(e) // if the key, does not exist
      : map.set(key, [e]);
  });
  return map;
}

// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘 END
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
// 📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘📘
