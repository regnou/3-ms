// ## --------------------------------------------------------------------------
// ## SNIPPET
// ## --------------------------------------------------------------------------
// ## CONFIG (normally all 'const' variable, but putting 'var' for debug inside chrome)

// ? ---------------------------------------------------------------------------
// ? MAIN
// ? ---------------------------------------------------------------------------
(async () => {
  // ** ------------------------------------------------------------------------
  // ** ACCOUNT
  // ** ------------------------------------------------------------------------
  // fb tinder account
  // var FB_TINDER_ACCOUNT = "00_2axelsecond";
  // var FB_TINDER_ACCOUNT = "01_axelrobomart";
  // var FB_TINDER_ACCOUNT = '03_nzaero';
  // var FB_TINDER_ACCOUNT = '04_axelopolito';
  // var FB_TINDER_ACCOUNT = "05_leroyjojoax";
  // var FB_TINDER_ACCOUNT = '06_myjojoax';
  // var FB_TINDER_ACCOUNT = '07_nzaerolita';
  // var FB_TINDER_ACCOUNT = '08_jojoaxelito';
  var FB_TINDER_ACCOUNT = "09_popoax";
  // @ -------------------------------------------------------------------------
  // @ INIT
  // @ -------------------------------------------------------------------------
  // 0 = false else true
  var IS_DEBUG = 1;
  // 10000 <=> illimited
  var SCROLL_LIMIT = 1000;
  // var SCROLL_LIMIT = 3;
  var SCROLL_TIMEOUT = 3000;
  var FILENAME = `tinder-${FB_TINDER_ACCOUNT}`;
  // @ -------------------------------------------------------------------------
  // @ TRYINH
  // @ -------------------------------------------------------------------------
  // loadScript("https://www.gstatic.com/firebasejs/6.6.1/", firebaseInit);
  // try write
  // return -1;
  // ° -----------------------------------------|
  // ° STEP 1 : init
  // ° -----------------------------------------|
  printInit();
  const funcSet_timeout = ms => new Promise(resolve => setTimeout(resolve, ms));
  //
  let color = "yellow";
  let data = [];
  let indexLoop = 0;
  let indexEntity = 0;
  //
  const SEL_SCROLL = ".ReactVirtualized__Grid.ReactVirtualized__List";
  const ELT_SCROLL = document.querySelector(SEL_SCROLL);

  // ° -----------------------------------------|
  // ° STEP 2 : loop to scrap
  // ° -----------------------------------------|
  ELT_SCROLL.scrollTo(0, 0);
  while (
    ELT_SCROLL.offsetHeight + ELT_SCROLL.scrollTop <
    ELT_SCROLL.scrollHeight
  ) {
    // * --------------------|
    // * 1 - main process
    // * --------------------|
    printLoop(indexLoop, color);
    ELT_SCROLL.scrollTo(0, ELT_SCROLL.offsetHeight * indexLoop);
    await funcSet_timeout(SCROLL_TIMEOUT);
    let dataLocalScroll = scrap_loop_tinder(); // ❗❗❗
    dataLocalScroll.forEach((e, i) => {
      e._99_tinder_fb_account = FB_TINDER_ACCOUNT;
      // start at 1 (to know how much contacts)
      indexEntity++;
      e.ID = indexEntity;
    });
    data = data.concat(dataLocalScroll);
    cge("loop-scroll");

    // * --------------------|
    // * 2 - debug
    // * --------------------|
    if (IS_DEBUG && indexLoop === SCROLL_LIMIT) {
      console.log("BREAK SCROLL", indexLoop);
      break;
    } else indexLoop++;
  } // end_while

  // ° -----------------------------------------|
  // ° STEP 3 : data transformation (uniquify, orderify...)
  // ° -----------------------------------------|
  // const DT_MAP = DT_tinder(data);
  const arr0 = DT_delete_doublon(data); // ❗❗❗

  // ° -----------------------------------------|
  // ° STEP 4 : save file (stringify the structure) ()
  // ° -----------------------------------------|
  saveFile(arr0, `${FILENAME}-all.json`);
  // ! saveFilePerCity(DT_MAP, `${FILENAME}-city`);
  // try now - CSV
  //arrEntity_scrappedRaw_all = ConvertToCSV(arrEntity_scrappedRaw_all);
  //const CONST_MAP_DT_CSV = ConvertToCSV(CONST_MAP_DT);
  //saveFile(arrEntity_scrappedRaw_all, `${CONST_FILENAME}-raw-CSV.json`);
  //saveFilePerCity(CONST_MAP_DT_CSV, `${CONST_FILENAME}-map-CSV`);

  // ° -----------------------------------------|
  // ° STEP 5 : end + debug
  // ° -----------------------------------------|
  printEnd(arr0);
})();

// ## --------------------------------------------------------------------------
// ## API
// ## --------------------------------------------------------------------------
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function scrap_loop_tinder() {
  // scrap all visible content on page (then we will scroll to see new content)
  const SEL_CURRENTSCROLL = "match-row__wrapper";
  const ELT_CURRENTSCROLL = [
    ...document.getElementsByClassName(SEL_CURRENTSCROLL)
  ];
  const arrEntity = ELT_CURRENTSCROLL.map(e => {
    return get_detail_tinder(e);
  });
  return arrEntity;
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function get_detail_tinder(e) {
  // e => the element to click to see details
  // click to access detail
  e.click();
  // document.querySelector('match-row__wrapper').click();
  // await ?

  // ° -----------------------------------------|
  // ° SEL
  // ° -----------------------------------------|
  // ! mandatory fields
  const SEL_NAME_AGE = ".match__person-details h1";
  // const CONST_IMG_GALLERY_SEL = '.slick-track'; // the parent
  const SEL_IMG_GALLERY = ".slick-slide";
  const SEL_IMG_AVATAR = ".slick-active img";
  // * NON-mandatory fields
  const SEL_DISTANCE = "match__person-distance";
  const SEL_COMMENT = ".match__person-bio";
  const SEL_CHAT = ".message__body";
  //const S_boyChat = 'message__body';
  //const S_girlChat = '';

  // ° -----------------------------------------|
  // ° ELT
  // ° -----------------------------------------|
  // ! mandatory fields
  const ELT_NAME_AGE = document.querySelector(SEL_NAME_AGE);
  const ELT_ARR_IMG_GALLERY = [...document.querySelectorAll(SEL_IMG_GALLERY)];
  const ELT_IMG_AVATAR = document.querySelector(SEL_IMG_AVATAR);
  // * NON mandatory fields
  const ELT_COMMENT = document.querySelector(SEL_COMMENT);
  const ELT_DISTANCE = document.querySelector(SEL_DISTANCE);
  const ELT_CHAT = [...document.querySelectorAll(SEL_CHAT)];
  // newer syntax
  //const nodeList = Array.from(document.querySelectorAll('[selector]'))
  // or
  //const nodeList = [...document.querySelectorAll('[selector]')]

  // ° -----------------------------------------|
  // ° VALUE
  // ° -----------------------------------------|
  // ! mandatory fields
  const NAME_AGE = ELT_NAME_AGE.innerText.split(",");
  const NAME = NAME_AGE[0] !== null ? NAME_AGE[0] : "";
  const AGE = NAME_AGE[1] !== null ? NAME_AGE[1] : "";
  // gallery : il faudra simuler le click sur le slider, pour faire loader les autres images
  //const CONST_ARR_IMG_SRC_GALLERY = CONST_ARR_IMG_GALLERY_ELT.map(e=>e.src);
  //const CONST_ARR_IMG_DATAURL_GALLERY = CONST_ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
  const IMG_SRC_AVATAR = ELT_IMG_AVATAR.src;
  // pour tinder, inutile binaire, car je crois, j ai acces depuis l URL
  // const CONST_IMG_DATAURL_AVATAR = saveDataUrl(CONST_IMG_AVATAR_ELT);
  // *  NON-mandatory fields
  const DISTANCE = ELT_DISTANCE !== null ? ELT_DISTANCE.innerText : "";
  const STATUS = ELT_COMMENT !== null ? ELT_COMMENT.innerText : "";
  // TINDER > CORS PB => saveDataUrl(CONST_IMG_GALLEY_FIRST); //CONST_ARR_IMG_GALLERY_ELT.map(e=>saveDataUrl(e));
  // TODO - tu prends les innerText du array de chat...
  // chat
  const CHAT = ELT_CHAT !== null ? ELT_CHAT.map(e => e.innerText) : [];
  const OBJ_DATAMINED = DM_chat_tinder(CHAT);
  //const boyChat = document.queryAllSelector(S_boyChat);
  //const girlChat = document.queryAllSelector(S_girlChat);

  // * -----------------------------------------|
  // * IMMUTABLE OBJECT
  // * -----------------------------------------|
  const OBJ = {
    // @ ---------------------------------------|
    // @ L1
    // @ ---------------------------------------|
    _0country: "",
    _1city: OBJ_DATAMINED.city,
    _2name: NAME,
    _3age: AGE,
    _4phone: OBJ_DATAMINED.phone,
    _5img_tinder_src: IMG_SRC_AVATAR,
    // @ ----------------------------------------|
    // @ STATUS
    // @ ----------------------------------------|
    //_9comment_axel: '',
    //_9status_insta: '',
    _9status_tinder: STATUS,
    // @ ----------------------------------------|
    // @ L2
    // @ ----------------------------------------|
    _1instagram_account: "",
    _1tinder_account: "",
    // here : just all the DATA URLs
    //_3img_tinder_dataUrl: CONST_IMG_DATAURL_AVATAR,
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

    // @ ----------------------------------------|
    // @ L3
    // @ ----------------------------------------|
    _8distance: DISTANCE,
    _10cat_L0: "",
    // categorie
    //_10cat_L1: '',
    // rank inside categorie
    // uselfull to big-data,  A/B test, the best sentences
    // @ ----------------------------------------|
    // @ CHAT
    // @ ----------------------------------------|
    // _11chat_zap_all: [],
    // _11chat_zap_my: '',
    // _11chat_zap_her: '',
    // _11chat_insta_all: [],
    // _11chat_insta_my: '',
    // _11chat_insta_her: '',
    _11chat_tinder_my: "",
    _11chat_tinder_her: "",
    _11chat_tinder_all: CHAT
  };
  return OBJ;
}

// ## --------------------------------------------------------------------------
// ## DT
// ## --------------------------------------------------------------------------

// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function DT_tinder(data) {
  // step0 = DT : CLEAN data
  const arr0 = DT_delete_doublon(data);

  // step1 = group by CITIES (ici s'opere la transfo en MAP)
  // const MAP_ENTITY_GROUPBY_CITY = DT_tinder_groupBy_city(
  //  ENTITY_SCRAPPEDRAW_NODOUBLON
  // );
  // step2 = order by AGE
  // return MAP_ENTITY_GROUPBY_CITY;
  return arr0;
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function DT_delete_doublon(data) {
  // KEY : name + age + distance + comment (or just comment)
  // REMOVE PROCESS
  // ! rule 1 : unique (doublon because of scroll)
  cl("DT : deleting doublon... contacts : " + data.length);
  // ! const arr0 = unique(data, e => e._2name + e._3age + e._9status_tinder);
  const arr0 = unique(data, e => e._2name + e._5img_tinder_src);
  cl("DT : contacts restants : " + arr0.length);
  // QUE POUR ZAP
  // it should be unic by phone number (not present in whatsapp now)
  // ! rule 2:  without null names
  // cl('DT : not null names');
  // const dataArr2 = dataArr1.filter(e => e.title !== null);
  // TODO - je perd du tps a parcourir les Z
  // ! rule 3 : not normal contact (start with z)
  //cl('DT : not Z');
  // const dataArr3 = dataArr2.filter(e => e.title.charAt(0) !== 'z');
  return arr0;
}
// ## --------------------------------------------------------------------------
// ## DM
// ## --------------------------------------------------------------------------
function DM_chat_tinder(CHATS) {
  //data-mining : extract infos
  // TODO - il faudrait verifier que les phrases sont celles de la fille
  // check pour chaque ligne, regexp : si l'une evoque un num de tel (5 num continue)
  let o = {
    phone: "",
    city: ""
  };
  const REGEXP_PHONE = /\d{4,}/g;
  // ne marche pas si number est comme ca : 92 995246941
  CHATS.forEach(tokenLine => {
    ///(?<city>manaus|campo grande)|(?<phone>\d{4,})/g
    // match() => null if not found
    const PHONE = tokenLine.match(REGEXP_PHONE);
    // TODO - ne prends pas le cas ou elle me corrige le num en dessous
    // TODO - prendre le cas ou melange chiffre et lettres dans la phrase
    const CITY = DM_find_city(tokenLine);
    // data-mining
    PHONE !== null ? (o.phone = PHONE) : null;
    CITY !== null ? (o.city = CITY) : null;
    // we should stop the loop if both are found
  });
  return o;
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function DM_find_city(tokenLine) {
  tokenLine = tokenLine.toLowerCase();
  const TOKENS = tokenLine.split(" ");
  let city = null;
  for (let i = 0; i < TOKENS.length; i++) {
    const WORD = TOKENS[i];
    // new
    // "Sou de Manaus/AM\n",
    // manaus,
    // Cochabamba\n
    for (let j = 0; j < GLOBAL_CITIES_DEFAULT.length; j++) {
      //const CONST_REGEXP_CITY = /${CONST_GLOBAL_ARR_STR_CITY_DEFAULT[j]}/g;
      const CONST_REGEXP_CITY = new RegExp(`${GLOBAL_CITIES_DEFAULT[j]}`, "g");
      city = WORD.match(CONST_REGEXP_CITY);
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
// ## --------------------------------------------------------------------------
// ## HELPER (print)
// ## --------------------------------------------------------------------------
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function printLoop(idLoop_inc, color) {
  cg("loop-scroll");
  color = idLoop_inc % 2 == 0 ? "red" : "green";
  console.log(`%c ⭐ ${idLoop_inc}: `, `strColor: ${color}`);
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function printInit() {
  cg("main");
  console.clear();
  console.log("%c 😎", "background: #222; color: #bada55; font-size:32px");
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function printEnd(DT_map) {
  cge("main");
  // ! DEBUG
  //   for (var [key, value] of dataMap) {
  //   //cl(key + " = " + value);
  //   saveFile(value, `${key}-${filename}.json`);
  // }
  //cl('ENDING PROCESS : saved total : ', DT_map.data.length, ' contacts');
  //cl("ENDING PROCESS : debug DT_map => ", DT_map);
  // console.table(arrGlobal.data); // cl(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
  console.log("%c 👋", "background: #222; color: #bada55; font-size:32px");
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function cl(s) {
  console.log(s);
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function cg(s) {
  console.group(s);
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function cge(s) {
  console.groupEnd(s);
}
// ## --------------------------------------------------------------------------
// ## HELPER (common)
// ## --------------------------------------------------------------------------
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function unique(arr, f) {
  const vArr = arr.map(f);
  return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
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
// ## --------------------------------------------------------------------------
// ## HELPER (save)
// ## --------------------------------------------------------------------------
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
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
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
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
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function addScript(src) {
  var s = document.createElement("script");
  s.setAttribute("src", src);
  document.body.appendChild(s);
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function loadScript(src, cb) {
  var script = document.createElement("script");
  script.async = true;
  script.src = src;
  script.onerror = function() {
    console.log("loading script: KO !!!");
    // cb(new Error("Failed to load" + src));
  };
  script.onload = function() {
    console.log("loading script: OK");
    firebaseInit();
  };
  document.getElementsByTagName("head")[0].appendChild(script);
}
// @ ---------------------------------------------------------------------------
// @
// @ ---------------------------------------------------------------------------
function firebaseInit() {
  // ! all SDK DEV only
  // ? DYN IMPORT
  // script.src="/__/firebase/6.6.1/firebase.js"
  // script.src="/__/firebase/init.js"
  // ? CDN
  // addScript("https://www.gstatic.com/firebasejs/6.6.1/");
  // <script src="https://www.gstatic.com/firebasejs/6.6.2/firebase-app.js"></script>
  //script.src = "https://cdn.firebase.com/js/client//firebase.js";
  // ! config
  var firebaseConfig = {
    apiKey: "AIzaSyDDG-V68LCyNipM2-_R_hDdDfijSTvSe1o",
    authDomain: "my-design-v1.firebaseapp.com",
    databaseURL: "https://my-design-v1.firebaseio.com",
    projectId: "my-design-v1",
    storageBucket: "my-design-v1.appspot.com",
    messagingSenderId: "517935807498",
    appId: "1:517935807498:web:506aeaeddf615e53a733f3"
  };
  firebase.initializeApp(firebaseConfig);

  //   <!-- The core Firebase JS SDK is always required and must be listed first -->
  // <script src="/__/firebase/6.6.2/firebase-app.js"></script>

  // <!-- TODO: Add SDKs for Firebase products that you want to use
  //      https://firebase.google.com/docs/web/setup#available-libraries -->

  // <!-- Initialize Firebase -->
  // <script src="/__/firebase/init.js"></script>

  /*
  new Firebase("https://mine.firebaseio.com/").once(
    "value",
    function(s) {
      console.log(JSON.stringify(s.val()));
    },
    console.error
  );
  */
}
// * ---------------------------------------------------------------------------
// * CITIES
// * ---------------------------------------------------------------------------
// ? si ca fait 9 chiffres, il faut rajouter l indicatif
// ? 'brasil' => oui, mais il ne faut regarder que dans SES chats, pas les miens ET il ne faut pas de nom de ville
var GLOBAL_CITIES_DEFAULT = [
  "3marias",
  "acre",
  "alegre",
  "alegrete",
  "alem",
  "alexânia",
  "altamira",
  "alvadora",
  "alvorada",
  "anapolis",
  "anápolis",
  "ângelo",
  "antônio",
  "apucarana",
  "apucarana",
  "aracaju",
  "aracruz",
  "araguaína",
  "araranguá",
  "argentina",
  "azul",
  "bahia",
  "bananal",
  "baranquilla",
  "barcarena",
  "Magdalena",
  "barranquilla",
  "barreto",
  "bayeux",
  "belem",
  "belém",
  "beltrão",
  "bento",
  "bezerros",
  "bh",
  "Perú",
  "birigui",
  "bituruna",
  "corações",
  "blumenau",
  "bolivia",
  "borja",
  "branco",
  "brasília",
  "brilhante",
  "bucharest",
  "budapest",
  "bulgaria",
  "cabedelo",
  "cajuru",
  "caldas",
  "camaquã",
  "campina",
  "campinas",
  "candeias",
  "canedo",
  "canoas",
  "capivari",
  "caracas",
  "cartagena",
  "caruaru",
  "cascavel",
  "castanhal",
  "catarina",
  "Asuncion",
  "ccbm",
  "cerro",
  "cerro largo",
  "chapeco",
  "chapecó",
  "chisinau",
  "cianorte",
  "cocal",
  "cochabamba",
  "colombia",
  "colombiana",
  "concórdia",
  "condado",
  "contagem",
  "cordoba",
  "coronel",
  "correia",
  "corumbá",
  "criciuma",
  "cruz",
  "curionópolis",
  "curitibanos",
  "cuzco",
  "czech",
  "divinópolis",
  "dourados",
  "epitaciolândia",
  "espírito",
  "Itaquiraí",
  "fé",
  "florianópolis",
  "floripa",
  "fortaleza",
  "foz",
  "francisco",
  "gabriel",
  "garibaldi",
  "gaspar",
  "goianésia",
  "goiania",
  "goiânia",
  "goiás",
  "goioerê",
  "gonçalves",
  "anzoategui",
  "grande",
  "grão",
  "gravatal",
  "guaíba",
  "guarapari",
  "guarapuava",
  "guaratuba",
  "gv",
  "hamburgo",
  "hohenau",
  "horizonte",
  "ibatiba",
  "ibirama",
  "icaraima",
  "ijuí",
  "isabela",
  "itabaiana",
  "itajai",
  "itambé",
  "itapejara",
  "itapema",
  "itauna",
  "jacarezinho",
  "jaguaré",
  "jaraguá",
  "jardim",
  "joinville",
  "josé",
  "jp",
  "Indaial",
  "jujuy",
  "jose",
  "Criciúma",
  "lages",
  "lagoas",
  "laranjeiras",
  "leônidas",
  "leopoldo",
  "lima",
  "limoeiro",
  "linhares",
  "lisbon",
  "london",
  "londrina",
  "lontra",
  "lourenço",
  "lpz",
  "luis",
  "luís",
  "luziânia",
  "macapa",
  "Santana",
  "macapá",
  "maceió",
  "mamborê",
  "manaus",
  "manhuaçu",
  "maranhão",
  "maravilha",
  "marechal",
  "maria",
  "mariana",
  "maringa",
  "maringá",
  "marta",
  "medellin",
  "mérida",
  "minsk",
  "misiones",
  "missal",
  "mourao",
  "murutinga",
  "naviraí",
  "niquelândia",
  "novo",
  "odessa",
  "olinda",
  "oliveira",
  "oriximiná",
  "orleans",
  "palhoça",
  "palmares",
  "palmas",
  "palmeira",
  "palotina",
  "palotina",
  "pará",
  "paraguay",
  "paraíba",
  "paraiso",
  "paranaguá",
  "pato",
  "paulista",
  "paz",
  "pernambuco",
  "peru",
  "pessoa",
  "piquiri",
  "piúma",
  "poa",
  "porã",
  "porangatu",
  "portão",
  "posadas",
  "preto",
  "prudente",
  "rb",
  "recife",
  "riga",
  "rolândia",
  "romania",
  "salta",
  "salvador",
  "santa tereza",
  "santarem",
  "santarém",
  "santo antonio",
  "sapucaia",
  "sarandi",
  "scz",
  "serra",
  "jacaraipe",
  "sete",
  "siderópolis",
  "sl",
  "sm",
  "socorro",
  "sofia",
  "sooretama",
  "sooretama",
  "tallinn",
  "tapejara",
  "tarija",
  "teresina",
  "toledo",
  "umuarama",
  "união",
  "uruaçu",
  "urussanga",
  "vacaria",
  "valderes",
  "veadeiros",
  "Cumaná",
  "velha",
  "venâncio",
  "Ipatinga",
  "venezuela",
  "videira",
  "vilnius",
  "vitória",
  "esperança",
  "Parauapebas",
  "Indaiatuba",
  "vizinhos",
  "warsaw",
  "xanxerê",
  "xavantina",
  "zagreb",
  "Alenquer",
  "Arapongas",
  "Marabá",
  "Navegantes",
  "Venezolana",
  "Cornélio",
  "Maturín",
  "jaguariuna",
  "Sabáudia"
];

// ## --------------------------------------------------------------------------
// ## END
// ## --------------------------------------------------------------------------
