// ==================================================
// ° 1) STORY AVANT DATA (snippet inside Chrome)
// ==================================================

//= $x('//div[@class="_1vDUw _2sNbV"]')[0].scrollTo(0, 1000);
// = pour xpath, il ne faut pas le point et il faut l espace
// = (pour le selector css/html, c est le contraire)

// ## QUERY SELECTOR :
// * document.querySelector('.Qgzj8.gqwaM._3FXB1')

// ## XPATH :
// *

// ==================================================
// ° 1) STORY AVANT DATA (snippet inside Chrome)
// ==================================================

//= $x('//div[@class="_1vDUw _2sNbV"]')[0].scrollTo(0, 1000);
// = pour xâth, il ne faut pas le point et il faut l espace (pour le selector css/html, c est le contraire)

// -- --------------------------------------------------------------------------
// -- GLOBAL
// -- --------------------------------------------------------------------------
// ? console.table(arrGlobal.data);
// ? console.log(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
// . fb tinder account
var ZAP_ACCOUNT = "bo";
// . 0 = false else true
// ! note: CONFIG (normally all 'const' variable, but putting 'var' for debug inside chrome)
var IS_DEBUG = 1;
var SCROLL_LIMIT = 1000;
var SCROLL_TIMEOUT = 3000;
var FILENAME = `zap-${ZAP_ACCOUNT}`;

// -- --------------------------------------------------------------------------
(async () => {
  // -- ------------------------------------------------------------------------
  console.clear();
  console.log("%c 😎 HELLO ZAP", "background: #222; color: #bada55; font-size:32px");
  try { // ! FEATURES snippet ==================================================
    console.group('try')
    console.log('🟠FEATURE snipet')
    let entity_list_raw = []
    let entity_list_clean = [];
    // let entity_list = [];
    // ! === F1: SCRAP ===
    console.group('🟣=== F1 SCRAP ===')
    {
      // . F1.1 - SCRAP
      // . #############################################
      console.group('🔵=== F1.1: only scrap browser-raw-data ===')
      // . #############################################
      {
        const funcSet_timeout = ms =>
          new Promise(resolve => setTimeout(resolve, ms));
        // = open drawer ===
        const ELT_BTNDRAWER = document.querySelector('.rAUz7:nth-child(2) > div');
        simulateMouseEvents(ELT_BTNDRAWER, 'mousedown');
        await funcSet_timeout(SCROLL_TIMEOUT);
        // = loop scrap ===
        entity_list_raw = await F1_do_scrap();  // ! === === === ===
        // = LIB PRIVATE ===
        async function F1_do_scrap() {
          // ## DATA
          let data = []; // !  ❗❗❗
          let color = "yellow";
          let indexLoop = 0;
          let indexEntity = 0;
          const ELT_SCROLL = document.querySelector('._1vDUw._2sNbV'); // = $, querySelector
          //  ! step 1 [ loop to scrap ]
          ELT_SCROLL.scrollTo(0, 0);
          while (
            ELT_SCROLL.offsetHeight + ELT_SCROLL.scrollTop <
            ELT_SCROLL.scrollHeight
          ) {
            //  ! exec
            printLoopS(indexLoop, color);
            ELT_SCROLL.scrollTo(0, ELT_SCROLL.offsetHeight * indexLoop);
            await funcSet_timeout(SCROLL_TIMEOUT);
            const dataLocalScroll = F1_do_scrapOneScroll(); //  ! === === === ===
            dataLocalScroll.forEach((e, i) => {
              e._99_zap_account = ZAP_ACCOUNT;
              //  ! start at 1 (to know how much contacts)
              indexEntity++;
              e.ID = indexEntity;
            });
            data = data.concat(dataLocalScroll);
            //  @ debug .....................................................
            if (IS_DEBUG && indexLoop === SCROLL_LIMIT) {
              console.log("BREAK SCROLL", indexLoop);
              break;
            } else indexLoop++;
          } //  ! end_while
          return data;
          // ° -------------------------------------------------------------------
          // ° F 1.1
          // ° -------------------------------------------------------------------
          function F1_do_scrapOneScroll() {
            const AA = document.querySelector('._21sW0._1ecJY');
            let ELT_CURRENTSCROLL_ARR = [...AA.childNodes];
            // ! exclude First 'frequented contact' div
            ELT_CURRENTSCROLL_ARR.shift();
            // . IL FAUT UN TABLEAU, QUI CONTIENNE LA STRING DU HTML AVEC TOUTELES INFOS A EXTRAIRE
            const arrEntity = ELT_CURRENTSCROLL_ARR.map(e => {
              return F1_entity_builder(e); // * === === === ===
            });
            // ! exclude Contact that are not G
            const clean_arr = arrEntity.filter(itm =>
              !itm._02name.includes("⭕") && !itm._02name.includes("💪"))
            return clean_arr;
            // * ------------------------------------------------------------------------
            // * ------------------------------------------------------------------------
            // * ------------------------------------------------------------------------
            // * ------------------------------------------------------------------------
            // * ------------------------------------------------------------------------
            // * ------------------------------------------------------------------------
            // * F 1.1.1 [ENTITY BUILDER] [definition RAW structure : piece-commune-aux-projets]
            // * ------------------------------------------------------------------------
            function F1_entity_builder(e) {


              // const IMG_SRC =
              // e.querySelector("img") !== null
              //   ? e.querySelector("img").src
              //   : "NO-SRC-DL-FROM-ZAP";
              const TITLE =
                e.querySelector("._3j7s9 > ._2FBdJ > ._25Ooe > ._3TEwt > ._1wjpf") !== null
                  ? e.querySelector("._3j7s9 > ._2FBdJ > ._25Ooe > ._3TEwt > ._1wjpf").title
                  : "ERROR-imposible-no-name";
              const IMG_SRC = e.querySelector('.Qgzj8.gqwaM._3FXB1') !== null
                ? e.querySelector('.Qgzj8.gqwaM._3FXB1').src
                : "undefined_NO-SRC_IMG";

              // ! create img because function later need an HTMLElement
              let img_elt = document.createElement("img");
              img_elt.src = IMG_SRC;
              // TODO HERE = il faut data-url l'element IMG, car ZAP garde une securite, et ne peut pas reutiliser
              // if (e.innerText === '"FRÉQUEMMENT CONTACTÉS')
              const IMG_DATA = saveDataUrl(img_elt);
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              /* <img width="16" height="16" alt="star" src="data:image/gif;base64,R0lGODljIQA7" /> */
              // data:[<mime type>][;charset=<charset>][;base64],<encoded data>
              const OBJ = {
                // ! COMMON PROJECTS
                // * TODO
                // ° CHANGE VALUE SCHEMA

                // = TINDER defines the JSON STD NAME ATTRIBUTES GROUPING NUMBER
                // * L1 === === === === === ===
                _02name: TITLE,
                _05img_zap_b64: IMG_DATA
                // * L1 === === === === === ===
              };
              return OBJ;
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
              // * ------------------------------------------------------------------------
            } // °

          } // ! END DO SCRAP
        }
        console.groupEnd('🔵=== F1.1: only scrap browser-raw-data ===')

        // . F1.2 - TRANSFO (PATCH : correction et afinement erreur parsing (sans-doublons..))
        // . #############################################
        console.group('🔵=== F1.2: clean raw data ===')
        // . #############################################
        {
          entity_list_clean = await F1_DT_do_deleteDoublon(entity_list_raw); // * === === === ===
          //  -----------------------------------------------------------------------
          //  F 2.2.1
          //  -----------------------------------------------------------------------
          function F1_DT_do_deleteDoublon(__s0_contact_arr) {
            console.group(" 🟢F1.2.1 - delete doublon")
            console.log("DT : TT 1 [contacts MAX] : " + __s0_contact_arr.length);
            //   const arr0 = unique(data, e => e._2name + e._3age + e._9status_tinder);

            // ! ATTENTION : cahnger ici aussi STRUCTURE === === === CHANMPS !!!
            const __d0_contactUnique_arr = unique(__s0_contact_arr, e => e._02name + e._05img_zap_b64); // _01img PEUT avoir plusieur fois la valeur de null

            console.log("%c DT : TT > [contacts UNIQUE] : " + __d0_contactUnique_arr.length, "color: green");
            console.groupEnd(" 🟢F1.2.1 - delete doublon")
            return __d0_contactUnique_arr;
          }
        } //  end-F2
        console.groupEnd('🔵=== F1.2: clean raw data ===')
      }
      console.groupEnd('🟣=== F1 SCRAP ===')

      // ? -----------------------------------------|
      // ? -----------------------------------------|
      // ? === F3 EXPORT :
      // ? -----------------------------------------|
      // ? -----------------------------------------|
      console.group('🟣=== F3 EXPORT ===')
      {
        console.group('🔵=== F3.1: export Json ===')
        { // TODO -  regression
          // ? === F3.1 EXPORT JSON ===
          // ? console.table(arrGlobal.data);
          // ? console.log(`🐬 : ${ JSON.stringify(globalList, null, 4)
        }
        {
          console.group('🔵=== F3.1: export JSON ===')
          console_save(entity_list_clean, `${FILENAME}`, 'json'); // ! === === === ===
          console.groupEnd('🔵=== F3.1: export JSON ===')
        }
        console.groupEnd('🔵=== F3.1: export Json ===')
      }
      console.groupEnd('🟣=== F3 EXPORT ===')
    }
    console.groupEnd('try')
  } catch (err) {
    // ! ======================================================================
    // ! ======================================================================
    // ! ======================================================================
    // ! ======================================================================
    console.groupEnd('try')
    console.log("%c --------------", ":color: red; font-size:32px");
    console.group('catch')
    {
      // = ctrl+click => ouvre le bon fichier
      const re = /http:\/\/localhost:8001/gi;
      console.error(err.stack.replace(re, './1-server-openWC')); // To be able to ctrl+click > will log the error with the error stack
    }
    console.groupEnd('catch')
  }
  console.groupEnd("⚪ Start [pipeline scrapping data]");
  console.log("%c 👋", "background: #222; color: #bada55; font-size:32px");
})(); // END snippet

// @ ---------------------------------------------------------------------------
// @ [LIB] SAVE FILE
// @ ---------------------------------------------------------------------------
function console_save(data, filename, type) { // type_xport
  let dataStringifyedJson = ""
  let dataStringifyedCsv = ""
  console.group("[LIB] save-file");
  if (!data) {
    console.error("Console.save: No data");
    return;
  }
  if (type === 'json') {
    if (!filename) filename = "console.json";
    if (typeof data === "object") {// c est un array mais il est de type object
      const FILE_NAME = filename + '-' + data.length + '.json';
      console_save_json(data, FILE_NAME);
    }
  }
  //else if (type === 'csv') {
  //}
  console.groupEnd("[LIB] save-file");
  // ? ------------------------------------------------------------------------
  // ? - JSON
  // ? ------------------------------------------------------------------------
  function console_save_json(data, filename) {
    // GO
    dataStringifyedJson = JSON.stringify(data, undefined, 4);
    // ? write on disc
    // ? -------------------------------------------------------------------------
    let blob = new Blob([dataStringifyedJson], {
      type: "text/json"
    });
    // ? do click (propagate event => trigger function inside chrome browser ONLY)
    // ? -------------------------------------------------------------------------
    let e = document.createEvent("MouseEvents");
    let a = document.createElement("a");
    a.download = filename; // * # in order to use my plugin store file good directory
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
    // console.log("file saved : " + filename + "!");
    // ((s, col1 = 'yellow', icon = '📚', col2 = 'slategrey') => { if (IS_LOG_DEBUG) { console.log('%c | ' + '%c ' + ' [ ' + icon + ' ] ' + '%c ' + s, 'color:' + col1 + '; font-weight:bold', 'color:' + col2, 'color:' + col1 + ';') } })(FILE + " : " + json.length + " contacts");
    console.log("%c COMPLETED ! .json file saved : " + filename + "!", "color: yellow");
  }
}
// @ ---------------------------------------------------------------------------
function printLoopS(idLoop_inc, color) {
  // console.group("loop-scroll");
  color = idLoop_inc % 2 == 0 ? "red" : "green";
  console.log(`%c 🟢loop# ${idLoop_inc}: `, `strColor: ${color} `);
}

// @ ---------------------------------------------------------------------------
// @ [LIB] SCRAP click
// @ ---------------------------------------------------------------------------
function simulateMouseEvents(element, eventName) {
  var mouseEvent = document.createEvent('MouseEvents'); mouseEvent.initEvent(eventName, true, true);
  element.dispatchEvent(mouseEvent);
}
// @ ---------------------------------------------------------------------------
// @ [LIB] UNIQUE
// @ ---------------------------------------------------------------------------
function unique(arr, f) {
  const vArr = arr.map(f);
  return arr.filter((_, i) => {
    if (vArr.indexOf(vArr[i]) === i) {
      console.log('DUPLICATE REMOVED: ' + i + ' ' + vArr[i]);
      return true
    } else return false;
  })
}
// @ ---------------------------------------------------------------------------
// @ [LIB] interop > chrome-selector
// @ ---------------------------------------------------------------------------
function $(csspath) {
  //var nodes = document.querySelector(csspath)
  const nodes = document.querySelector(csspath)
  //mais je retourne du css  ?
  return nodes;
}
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
// @ ---------------------------------------------------------------------------
// @ [LIB] save file
// @ ---------------------------------------------------------------------------
// https://github.com/bgrins/devtools-snippets
function saveDataUrl(imgElt) {
  //console.group("Data URLs (imgElmt)");
  if (imgElt === null) {
    console.log("warn : the image is null, so we do not convert to dataUrl");
    // console.groupEnd("Data URLs");
    return null;
  }
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  // zap contact image
  // c.width = 640; // SOURCE IMG
  // c.height = 640;
  // TODO - try resize inside canvas
  c.width = 100;
  c.height = 100;
  try {
    // ctx.drawImage(imgElt, 0, 0);
    ctx.drawImage(imgElt, 0, 0, 100, 100);  // DEST IMG
    const dataUrl = c.toDataURL();
    //console.log("DEBUG dataUrl : ", dataUrl);

    return dataUrl;
  } catch (err) {
    console.log(
      err,
      "No Permission - try opening this image in a new tab and running the snippet again?",
      imgElt.src
    );

  }
}


