//----------------------------------------------------------
//@-IMPORT
//----------------------------------------------------------
// import equal from'fast-deep-equal'; //°console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
//----------------------------------------------------------
// LIB AXEL
import libErr from "../../../../../0-lib/0-basic/0-libaxB-error.js"; //fe
// import {_try_dl_img, mkdirSync} from "./0-lib/0-libaxB-io.js"; //_try_dl_img, mkdirSync
//----------------------------------------------------------

//----------------------------------------------------------
//import {unik_tinder_contactName} from './0-libax-tin'
//----------------------------------------------------------
const RE_ME = /at .* \/Users\/x\/0git\/axel\/1-dist\/functions\//gi;
const RE_ME_OK = "/Users/x/0git/axel/1-dist/functions/";
import STD_COUNTRY_CITY_mmap from '../../../../../../static/0-std/STD-cityCountry1.js';

try {
    // const STD = require('../../lib/axel/std/STD-cityCountry1');
    // const STD = import STD from '../../lib/axel/std/STD-cityCountry1';
} catch (err) {
    libErr.fe(RE_ME, RE_ME_OK, "(getinfoDM.js)", err, '🍌djax evil', '🔵🍌'); //no return for main !
}
//----------------------------------------------------------

//----------------------------------------------------------
//HELPER
//----------------------------------------------------------
function get_cleanString(s) {
  const REGEXP_CLEAN_CHAT = /\n/g;
  const noNewLine = s.replace(REGEXP_CLEAN_CHAT, ' ')
  const lowercase = noNewLine.toLowerCase();
  return lowercase;
}
function get_cleanStringArray(chat_arr) {
  const clean_arr = chat_arr.map(s => { const s_clean = get_cleanString(s); return s_clean; });
  return clean_arr;
}
function get_instagram(status_s, chat_s) { //°-TODO chercher ds le chat
  const REGEXP_INSTA = RegExp(/@([A-Za-z0-9_])*/);
  let INSTAGRAM_ACCOUNT_str = status_s.match(REGEXP_INSTA);
  if (INSTAGRAM_ACCOUNT_str !== null)
    INSTAGRAM_ACCOUNT_str = "https://www.instagram.com/" + INSTAGRAM_ACCOUNT_str[0].slice(1);
  else
    INSTAGRAM_ACCOUNT_str = ""
  return INSTAGRAM_ACCOUNT_str;
}

//----------------------------------------------------------
//START
//----------------------------------------------------------
//.parse the CHAT saved in RAW object
export function DM_chat(db_arr) {
  console.log("%c [task] 😎 TINDER ANALYSING (DM > input:chat | format:STDcityCountry1)...", "background: #222; color: purple; font-size:32px");
  try {
    const dbContactCountryCity_arr = db_arr.map(o => {
      let chat_arr = get_cleanStringArray(o._11chat_tinder_all);
      const status_s = get_cleanString(o._06status_tinder)

      if (chat_arr.length === 0)
        console.log("no chat for this person ! " + o._02name);
      else {
        const o_detail = DM(chat_arr);  // chat
        o._00country = o_detail.country_str;
        o._01city = o_detail.city_str;
        o._04phone = o_detail.phone_str;
        o._04phone_raw = o_detail.phoneRaw_str;
      }
      o._07instagram_account = get_instagram(status_s, chat_arr);
      return o;
    })
    return dbContactCountryCity_arr;
  } catch (err) {
    // const RE_ME = /at .* \(\/Users\/x\/0git\/axel\/back\/1-tin\//gi;
    // const RE_ME_OK = "/Users/x/0git/axel/" + "back/1-tin/"
    libErr.fe(RE_ME, RE_ME_OK, "()", err, '🍌djax', '🔵🍌'); //no return for main !
    // err.axel_msg = "There is probably no img here! " + path_;
    // libErr.fe("xxx", "xxx", "_try_dl_img", err, '🍇', '🔴', 'red');
  }

  function DM(chat_arr) {
    let o = { //*-o = VALUE OBJECT TO RETURN
      country_str: "no-country",
      city_str: "no-city",
      phone_str: "",
      phoneRaw_str: "",
      indicatifPhone_str: "", //!- not important for the moment
    };

    //##-=================================================
    //-POUR CHAQUE MSG (mes msg et ses msg sont melange ds le array)
    //?-==================================================

    // °CAS - 1 - si elle nous donne les infos de sa ville
    chat_arr.forEach(tokenLine_str => {
      const TOKENS_arr = tokenLine_str.split(" ");
      for (let i = 0; i <= TOKENS_arr.length; i++) { //pour whaque mot, on regarede si ya une ville qui match
        const WORD_str = TOKENS_arr[i];
        //DEBUG: if (WORD_str === 'luis' || WORD_str === 'luís')

        //##-On prend le STD et on compare le mot, voir si ca match
        //-POUR CHAQUE PAYS
        //@-==============================================
        for (let keyCountryStd in STD_COUNTRY_CITY_mmap) {
          const country_map = STD_COUNTRY_CITY_mmap[keyCountryStd]
          //console.log('the country is: ' + country_keyStr);
          //console.log('city STD:' + key_country_obj);

          //-POUR CHAQUE VILLE STD
          //@-============================================
          for (let keyCityStd in country_map) {
            // * console.log('city STD : ' + cityStd_keyStr);
            const synonym_arr = country_map[keyCityStd];
            // for (let synonym_arr in country_obj[cityStd_keyStr]) {
            // ?POUR CHAQUE VILLE SYNONYME, JE REGARDE SI MATCH
            //-EXEMPLE JSON DICO A PARCOURIR
            //-var GLOBAL_STD_CITY_mmap = {
            //-  colombia: {
            //-    barranquilla: ['barranquilla', 'bquilla'],
            //-    bucaramanga: ['bucaramanga'],
            //-  },
            //-  br_amazonia: {
            //-    mm: ['manaus'],
            //-    mm_z_santarem: ['santarém', 'santarem'],
            for (let str in synonym_arr) { //en fait le array, est comme un objet en JS
              //console.log('- synonyms : ' + synonym_arr[str]);
              //----------------------------------------------
              //@-FILL CITY : ICI on a trouve un token qui match une ville
              //----------------------------------------------
              //CITY MATCH = (de ville vers deviner phone)
              if (WORD_str === synonym_arr[str]) {
                o.city_str = keyCityStd;
                o.country_str = keyCountryStd;
                //##-=== === fiNAL PHONE COMPLETioN ===
                //else {
                //valueDetail_obj.phone = valueDetail_obj.indicatifPhone + valueDetail_obj.phone
                //}
                break; // . SUCCESS => doit sortir de la boucle naturellement
              }
              // if (valueDetail_obj.city !== "") break
            }
            if (o.city_str !== "no-city") break
          }
          if (o.city_str !== "no-city") break
        }
        // ! NOW : je n ai pas besoin d info plus precise que la ville... car je sais le pays-ou-etat
        if (o.city_str !== "no-city") break // * === === === === === === ===
      } //END-FOREACH-CITY







      //##-===================================================
      //-TARGET 2 : guess PHONE
      //?-====================================================
      const REGEXP_PHONE_AND_INDICATIF = /\d[0-9 -]+/g;  // ^[\d\s]+$ // . === === === RULE 0 (const REGEXP_PHONE = /\d{4,}/g;)
      chat_arr.forEach(tokenLine => {
        ///(?<city>manaus|campo grande)|(?<phone>\d{4,})/g
        //match() => null if not found
        //°-=== === === PHONE (part 1/2)
        const PHONE_RAW_str = tokenLine.match(REGEXP_PHONE_AND_INDICATIF);


        if (PHONE_RAW_str !== null) { // BUG PATCH - phone !== ""
          o.phoneRaw_str = PHONE_RAW_str;
          if (typeof PHONE_RAW_str === "object") { // . === === === RULE 1
            // const PHONE_RAW_CLEAN_str = PHONE_RAW_str[0].replace(/[ -]/g, '') // . === === === GLOBAL
            let PHONE_RAW_CLEAN_str = PHONE_RAW_str.reduce((acc, e) => {
              return acc + e;
            })
            PHONE_RAW_CLEAN_str = PHONE_RAW_CLEAN_str.replace(/([-+ \(\)])*/g, '')
            if (PHONE_RAW_CLEAN_str === "59177538637") // . === === === RULE 2 - do not use my tel
              o.phone_str = "";
            else
              o.phone_str = PHONE_RAW_CLEAN_str;  // * DEFAULT : the first, mais a ameliorer
          }
        }
      }); //for


      //°-PHONE DETAILS (amelioration de l ecrire des tels donnes)
      //=-=== === === RULE 3-1 - 09898
      if (o.city_str === "sll") {
        o.indicatifPhone_str = "+55"  // . === === === LOCAL PHONE

        if (o.phone_str.substring(0, 5) === "09898") {
          o.phone_str = o.phone_str.substring(1, o.phone_str.length);
        }
        //-=== === === RULE 3-3 - 5598 (cas exept stupid girl)
        else if (o.phone_str.substring(0, 4) === "5598") {
          o.phone_str = o.phone_str.substring(2, o.phone_str.length)
        }
      } //sao luis PHONE treatment
      else if (o.city_str === "bell") {
        o.indicatifPhone_str = "+55"  // . === === === LOCAL PHONE

        //if (o.phone_str.substring(0, 5) === "091") {
        //  o.phone_str = o.phone_str.substring(1, o.phone_str.length);
        //}
        //// = === === === RULE 3-3 - 5598 (cas exept stupid girl)
        //else if (o.phone_str.substring(0, 4) === "5598") {
        //  o.phone_str = o.phone_str.substring(2, o.phone_str.length)
        //}
      } //sao luis PHONE treatment
      else if (o.city_str === "macapa") { o.indicatifPhone_str = "+55 96 " }
      else if (o.city_str === "santarem") { o.indicatifPhone_str = "+55 93 " }
      else if (o.city_str === "manaus") { o.indicatifPhone_str = "+55 92 " }
      else if (o.city_str === "belem") { o.indicatifPhone_str = "+55 91 " }
      else if (o.city_str === "maringa") { o.indicatifPhone_str = "+55 44 " }
      else if (o.city_str === "pereira") { o.indicatifPhone_str = "+57" }
      else if (o.city_str === "barranquilla") { o.indicatifPhone_str = "+57" }
      else if (o.city_str === "marta") { o.indicatifPhone_str = "+57" }
      else if (o.city_str === "medellin") { o.indicatifPhone_str = "+57" }
      //ds le cas ou on a pas trouve la ville precise, je regarde le pays
      //else if (o.country_str === "colombia") { o.indicatifPhone_str = "+57" }
      //else if (o.country_str === "br_amazonia" ||
      //-  "br_parana" ||
      //-  "br_centro" ||
      //-  "br_south_beach" ||
      //-  "br_south" ||
      //-  "br_nordeste") {
      //-   // ° === === === RULE 6
      //-   o.indicatifPhone_str = "+55"
      //-   if (o.phone_str.substring(0, 2) === "55") {
      //-     o.phone_str = o.phone_str.substring(2, o.phone_str.length)
      //-   }
      //- si son phone commence para 55, et apparatirnt, au br, c est probablement l indicatif,
      //- pas sure 100%%
      //- }

      //@-================================================
      //-FINAL CONCAT PHONE
      //@-================================================
      o.phone_str = o.indicatifPhone_str + o.phone_str; //!-=== === ===
      // °quick hack mal MIS  pour 3 cas sur belem: :
      // °TEST : a verifier
      if (o.phone_str.substring(0, 4) === +550) {
        o.phone_str = "+55" + o.phone_str.substring(4, o.phone_str.length);
      }
      if (o.phone_str.length < 7) { o.phone_str = "" }
      //@-================================================
      //-==> DEVINE LA CITY ? (deduction by phone)
      //@-================================================
      // === === === RULE 1 - 09898 (again) // je renseigne la ville, a partir de son tel,
      // . SLL
      if (o.phone_str.substring(0, 5) === "+5598") {
        if (o.phone_str.length === 12)
          // ! HACK special, comme cela je corrige le cas ou il manque 98
          o.phone_str = "+5598" + o.phone_str.substring(3, 12)
        o.city_str = "sll"
        o.country_str = "br_amazonia"
      }
      // . BELL
      if (o.phone_str.substring(0, 5) === "+5591") {
        if (o.phone_str.length === 12)
          // ! HACK special, comme cela je corrige le cas ou il manque 98
          o.phone_str = "+5591" + o.phone_str.substring(3, 12)
        o.city_str = "bell"
        o.country_str = "br_amazonia"
      }
      // . MAC
      if (o.phone_str.substring(0, 5) === "+5596") {
        if (o.phone_str.length === 12)
          // ! HACK special, comme cela je corrige le cas ou il manque 98
          o.phone_str = "+5596" + o.phone_str.substring(3, 12)
        o.city_str = "macc"
        o.country_str = "br_amazonia"
      }
      // . MM
      if (o.phone_str.substring(0, 5) === "+5592") {
        if (o.phone_str.length === 12)
          // ! HACK special, comme cela je corrige le cas ou il manque 98
          o.phone_str = "+5592" + o.phone_str.substring(3, 12)
        o.city_str = "mm"
        o.country_str = "br_amazonia"
      }
      //*-====================================================
      //*- END DM (return object)
      //*-====================================================
      // DEBUG console.log(`🐬 : ${JSON.stringify(valueDetail_obj, null, 4)}`)
      return o;
    }); //end-chat_arr.forEach(tokenLine_str =>
    return o;
  }


} //DM_chat

