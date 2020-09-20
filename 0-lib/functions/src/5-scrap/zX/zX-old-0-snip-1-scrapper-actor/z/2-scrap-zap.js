// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function scrap_loop_zap() {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function DT_zap(arrGlobalRaw, filename) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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
  const MAP_DT1 = T4zap_dataTransfo_businessRules(arrGlobalEntities);
  const MAP_DT2 = {
    data: MAP_DT1,
    account: filename
  };
  return MAP_DT2;
}

/**
 * transform data into more hierarchical one
 * @param {a zap raw data} data
 */
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function T1zap_dataTransfo_clean(arrGlobalRaw) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function T2zap_parseEntityZap(dataArr) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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

// 📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗📗 DT (other script) ...

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function T3zap_order(arrGlobalEntities) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  const arr = arrGlobalEntities.sort((a, b) =>
    a._3age > b._3age ? 1 : b._3age > a._3age ? -1 : 0
  );
  return arr;
}

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function T4zap_dataTransfo_businessRules(arrData) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  // rule 1 : primay key by country + city
  const map = groupBy_countryCity(arrData);
  // rule 2 :
  return map;
}

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
function groupBy_countryCity(arrData) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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
