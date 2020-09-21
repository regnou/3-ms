// * ========================================================
// * MERGE : Prend la source, et pour chaque element, regarde dans la cible,
// * et si la cible a l element ALORS: prend les infos de la cible
// * ========================================================
// 'use ======strict'
const fs = require('fs');
(async () => {
  console.log('[START]');
  try {
    console.log('try=======≠=======≠=======≠=======≠=======≠=======≠=======≠=======≠');
    const FILE_OUT = 'db.json';
    // OUT - folder for viewer
    const DIR_OUT = '/Users/x/0git/axel/2-VIEWER/1-D-owc/public/1-DATA/2-json/';

    // === === === ===  === === === ===  === === === ===  === === === ===
    // === === === ===  === === === ===  === === === ===  === === === ===
    const FILE_1_str = await readFile('/Users/x/1drive/0-DL/tin-leroyjojoax-121.json')
    const FILE_2_str = await readFile('/Users/x/1drive/0-DL/zap-bo-65.json')
    // === === === ===  === === === ===  === === === ===  === === === ===
    // === === === ===  === === === ===  === === === ===  === === === ===

    //array
    const JSON_1_SOURCE_tin = JSON.parse(FILE_1_str);  // arr[obj, obj...]
    const JSON_2_zap        = JSON.parse(FILE_2_str);
    // * il faut que je sois sure que le PARSE, creer un array (structure de mon json), un array de objets contacts
    console.log('JSON FILE 1: ' + JSON_1_SOURCE_tin.length);
    console.log('JSON FILE 2 (zap): ' + JSON_2_zap.length);

    // ° PASSE 1 no no 23
    let zapImg_arr   = [];
    let noZapImg_arr = [];

    // const SEPARATOR = "_";

    // arr[obj, obj...]
    for (let idx_1 in JSON_1_SOURCE_tin) {
      //const PREDICAT_str = JSON_1[itm_1]._02name;
      // = ------------------------
      // ! NAME SPECIFICATION for G-contact (CSV)
      // * ------------------------ UNIQUE NAME

      // * ------------------------------------------------------------------------
      // * ------------------------------------------------------------------------
      // * ------------------------------------------------------------------------

      const FOUNDED_obj = JSON_2_zap.find(e =>
        e._02name === e._00a_unique_name); // find() returns undefined if not found

      if (FOUNDED_obj !== undefined) {
        const value_obj = JSON_1_SOURCE_tin[idx_1];         // ! ATTENTION on ecrase les IDs
        const o         = { ...value_obj, ...FOUNDED_obj }  // FOUNDED_obj._05img_zap_b64 // ! ATTENTION on ecrase les IDs
        zapImg_arr.push(o);// ! ATTENTION on ecrase les IDs
      } else {
        const value_obj = JSON_1_SOURCE_tin[idx_1];  // ! ATTENTION on ecrase les IDs
        noZapImg_arr.push(value_obj);
      }
    }
    console.log('[LENGTH] TIN DB: ' + JSON_1_SOURCE_tin.length);
    console.log('[LENGTH] ZAP DB: ' + JSON_2_zap.length);
    console.log('[LENGTH] zapImg    array: ' + zapImg_arr.length);
    console.log('[LENGTH] zapImg-NO array: ' + noZapImg_arr.length);

    const final_arr     = zapImg_arr.concat(noZapImg_arr);
    const final_arr_str = JSON.stringify(final_arr);
    console.log("[LENGTH] final arr: " + final_arr.length);

    const FILE_3_mergeOut = DIR_OUT + FILE_OUT;
    writeFile(FILE_3_mergeOut, final_arr_str);
    // const taille = zapImg_arr.length + noZapImg_arr.length;
    // console.log('[LENGTH] TT zapImg array + NO zapImg array: ' + taille);
    console.log('=try-end=');
  } catch (err) {
    console.log('catch≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠≠');
    console.error(err.stack); // To be able to ctrl+click > will log the error with the error stack
    console.log('end-catch');
  }
  console.log('----------------------------------------------------------------');
  console.log('[END] : Have a break !');
})();
// @ ---------------------------------------------------------------------------
// @ [LIB]
// @ ---------------------------------------------------------------------------
// ? console.log(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
async function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
// @ ---------------------------------------------------------------------------
// @ [LIB]
// @ ---------------------------------------------------------------------------
async function writeFile(path, arr) {
  return new Promise((resolve, reject) => {

    fs.writeFile(path, arr, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
// @ ---------------------------------------------------------------------------
// @ [LIB] INTERSECTION
// @ ---------------------------------------------------------------------------
function intersection(arr_1, arr_2, eq) {
  return arr_1.filter(itm_1 => arr_2.some(itm_2 => eq(itm_1, itm_2)));
}
// Example:
// intersection([1, 2, 3], [2, 4, 6], (a, b) => a === b);
// returns [2]
// @ ---------------------------------------------------------------------------
// @ [LIB] UNIQUE
// @ ---------------------------------------------------------------------------
function unique(arr, f) {
  const vArr = arr.map(f);
  return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);
}
