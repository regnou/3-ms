function saveFilePerCity(map, filename) {
  for (var [key, value] of map) {
    //cl(key + " = " + value);
    saveFile(value, `${filename}-${key}.json`);
  }
}

function ConvertToCSV(objArray) {
  //JSON to CSV Converter
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

function DT_tinder_groupBy_city(arr) {
  // TODO - utiliser les classes, pour statifier l acces aux var, selon un schema predefinit : il faut que le _7city soit
  // GROUPER = c est ORDONNER + DETACHER PHYSIQUEMENT

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
