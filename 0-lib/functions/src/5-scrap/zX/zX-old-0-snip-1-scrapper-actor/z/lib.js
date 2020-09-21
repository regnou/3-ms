// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒 COMMON HELPERS
// 📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒📒

// https://github.com/bgrins/devtools-snippets
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
export function saveDataUrl(imgElt) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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
saveDataUrl;
saveDataUrlArr;
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
export function saveDataUrlArr(arr) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
export function saveFile(data, filename) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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
// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴

export function saveFilePerCity(map, filename) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴

  for (var [key, value] of map) {
    //cl(key + " = " + value);
    saveFile(value, `${filename}-${key}.json`);
  }
}

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
export function unique(arr, f) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
  const vArr = arr.map(f);
  return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);
}

// 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
export function $x(xpath, el) {
  // 🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴🌴
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
