// ! ###########################################################################
(async () => {
  // ! #########################################################################
  console.clear();
  console.log("%c 😎 TINDER!", "background: #222; color: purple; font-size:32px");
  try {
    console.group('try')

    // ? -----------------------------------------|
    // ? === F3 EXPORT :
    // ? -----------------------------------------|
    console.group('🟣=== F3 EXPORT ===')
    {
      console.group('🔵=== F3.1: export Json ===')
      // ? console.table(arrGlobal.data);
      // ? console.log(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
      await console_save(entity_list_clean, `${FILENAME}`, 'json'); // ! === === === ===
    }
    console.groupEnd('🔵=== F3.1: export Json ===')
    console.group('🔵=== F3.2: export CSV ===')
    {
      // ? console.table(arrGlobal.data);
      // ? console.log(`🐬 : ${JSON.stringify(globalList, null, 4)}`);
      await console_save(entity_list_clean, `${FILENAME}`, 'csv'); // ! === === === ===
    }
    console.groupEnd('🔵=== F3.2: export CSV ===')
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
    console.log("%c 😓", "background: #222; color: #bada55; font-size:32px");
  }

  console.log("%c 👋", "background: #222; color: #bada55; font-size:32px");
})(); // END snippet


// ## --------------------------------------------------------------------------
// ## END
// ## --------------------------------------------------------------------------


// @ ---------------------------------------------------------------------------
// @ [LIB] SAVE FILE
// @ ---------------------------------------------------------------------------
function console_save(data, filename, type) {

  console.group("[LIB] save-file");
  if (!data) {
    console.error("Console.save: No data");
    return;
  }
  if (type === 'json') {
    if (!filename) filename = filename + ".json";
    if (typeof data === "object") {
      console.log("SAVING in json FILE : " + data.length + " contacts");
      console_save_json(data, filename);
    }
  }
  else if (type === 'csv') {
    if (!filename) filename = filename + ".csv";
    if (typeof data === "object") {
      console.log("SAVING in csv FILE : " + data.length + " contacts");
      console_save_csv(data, filename);
    }
  }
  console.groupEnd("[LIB] save-file");
  // ? ------------------------------------------------------------------------
  // ? - JSON
  // ? ------------------------------------------------------------------------
  function console_save_json(data, filename) {
    // GO
    const json_str = JSON.stringify(data, undefined, 4);
    // ? write on disc
    // ? -------------------------------------------------------------------------
    let blob = new Blob([json_str], {
      type: "text/json"
    });
    // ? do click (propagate event => trigger function inside chrome browser ONLY)
    // ? -------------------------------------------------------------------------
    let e = document.createEvent("MouseEvents");
    let a = document.createElement("a");
    const FILE_NAME = filename + '-' + data.length + '.json';
    a.download = FILE_NAME; // * # in order to use my plugin store file good directory
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
    console.log("%c .json file saved : " + FILE_NAME + " !", "color: yellow");
  }
  // = ------------------------------------------------------------------------
  // = - CSV
  // = ------------------------------------------------------------------------
  function console_save_csv(objArray, filename) {
    const CSV_STR = csvStringify(objArray)
    csvDownload(CSV_STR);
    // = STRINGIFY PROCESS (from array of objects, TO Strings)
    function csvStringify(array) {
      // const NEXT_COL = ", ";
      const END_LINE = "\r\n";
      let HEADER_LINE = "Name \
        ,Given Name \
        ,Additional Name \
        ,Family Name \
        ,Yomi Name \
        ,Given Name Yomi \
        ,Additional Name Yomi \
        ,Family Name Yomi \
        ,Name Prefix \
        ,Name Suffix \
        ,Initials \
        ,Nickname \
        ,Short Name \
        ,Maiden Name \
        ,Birthday \
        ,Gender \
        ,Location \
        ,Billing Information \
        ,Directory Server \
        ,Mileage \
        ,Occupation \
        ,Hobby \
        ,Sensitivity \
        ,Priority \
        ,Subject \
        ,Notes \
        ,Language \
        ,Photo \
        ,Group Membership \
        ,Phone 1 - Type \
        ,Phone 1 - Value \
        ,Phone 2 - Type \
        ,Phone 2 - Value ";

      let str_csv = "";
      str_csv += HEADER_LINE + END_LINE;
      //   = JSON.parse(objArray)
      for (var i = 0; i < array.length; i++) {
        var line = "";
        // = ------------------------
        // = NAME SPECIFICATION
        // = ------------------------
        var NAME = array[i]._00a_unique_name;
        line += NAME
        // = il y a 32 champs ds CSV G-contact
        line += ",,,,,,,,,,,,,,,,,,,,,,,,,,,,,Mobile,";
        line += array[i]._04phone;
        line += ",,";
        // = line = line.replace('\n', ' ')
        // = line += array[i]._04phone
        str_csv += line + END_LINE;
      }
      return str_csv;

      // = -------
      // = const headers = "Name,	Given Name,	Additional Name,	Family Name,	Yomi Name,	Given Name Yomi,	Additional Name Yomi,	Family Name Yomi,	Name Prefix,	Name Suffix,	Initials,	Nickname,	Short Name,	Maiden Name,	Birthday,	Gender,	Location,	Billing Information,	Directory Server,	Mileage,	Occupation,	Hobby,	Sensitivity,	Priority,	Subject,	Notes,	Language,	Photo,	Group Membership,	E-mail 1 - Type,	E-mail 1 - Value,	Phone 1 - Type,	Phone 1 - Value"
      // = let data = [
      // =   ['Foo', 'programmer'],
      // =   ['Bar', 'bus driver'],
      // =   ['Moo', 'Reindeer Hunter']
      // = ];
      // // let csv = 'Name,Title\n';
      // let csv = headers + '\n';
      // data.forEach(row => {
      //   csv += row.join(',');
      //   csv += "\n";
      // });
      // -------
    } // end convert-to-csv
    function csvDownload(csv_str) {
      // console.log(csv); // * debug CSV
      const FILE_NAME = filename + '-' + data.length + '.csv';
      // let hiddenElement = document.createElement('a');
      // hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv_str);
      // hiddenElement.target = '_blank';
      // hiddenElement.download = FILE_NAME;
      // hiddenElement.click();
      // console.log("%c .csv file saved : " + FILE_NAME + "!", "color: orange");
      // console.log("file saved : " + filename + "!");
      // = write on disc
      // = -------------------------------------------------------------------------
      let blob = new Blob([csv_str], {
        type: "text/csv"
      });
      // = do click (propagate event => trigger function inside chrome browser ONLY)
      // = -------------------------------------------------------------------------
      let e = document.createEvent("MouseEvents");
      let a = document.createElement("a");
      a.download = FILE_NAME; // * # in order to use my plugin store file good directory
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
      // = console.log("file saved : " + filename + "!");
      // = ((s, col1 = 'yellow', icon = '📚', col2 = 'slategrey') => { if (IS_LOG_DEBUG) { console.log('%c | ' + '%c ' + ' [ ' + icon + ' ] ' + '%c ' + s, 'color:' + col1 + '; font-weight:bold', 'color:' + col2, 'color:' + col1 + ';') } })(FILE + " : " + json.length + " contacts");
      console.log("%c .csv file saved : " + FILE_NAME + "  !", "color: yellow");
    }

  } // ? - end CSV
}


// @ ---------------------------------------------------------------------------
// @ [LIB] interop > chrome-selector
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
  c.width = 640;
  c.height = 640;
  try {
    ctx.drawImage(imgElt, 0, 0);
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
