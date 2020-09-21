//@-----------------------------------------------------------------------------
//@-                            LIB [IO]
//@-----------------------------------------------------------------------------
import fs from 'fs';
import fe  from "./0-libaxB-error.js";  //fe
//@-----------------------------------------------------------------------------
//@-                            TRY DL IMG
//@-----------------------------------------------------------------------------
// REQUIRE ? COMMON JS export- exports._try_dl_img = async (page, src, PREFIX, OUT_DIR) => {
  export async function try_dl_img (page, src, PREFIX, OUT_DIR) {
  //export async function _try_dl_img (page, src, PREFIX
  //return "fast-debug"; //°TODO- a retirer
  let path_ = "null"
  try {
    //const options = { cache: 'no-cache' };
    const options          = {};
    const dataUrl          = await page.evaluate(_getDataUrlThroughFetch, src, options);
    const { mime, buffer } = _parseDataUrl(dataUrl);
    //assert.equal(mime, 'image/jpeg2'); //TODO- // assert.equal(mime, 'image/svg+xml');
    const filename =
      src
        .replace(/http.*\//, "")
        .replace(/\/| /g, "_");
    PREFIX = PREFIX.replace(/ /g, "_");
    path_  = `./${OUT_DIR}/` + PREFIX + filename;
    fs.writeFileSync(path_, buffer, 'base64'); //°- AXEL TODO ???? --> PASSER EN AWAIT ?
    console.log('✅SUCCESS > dl img : ' + path_);
    return filename;
  } catch (err) {
    //!-------------------------------------------------------------------------
    //!-                           ERROR
    //!-------------------------------------------------------------------------
    err.axel_msg = "There is probably no img here! " + path_;
    fe("xxx", "xxx", "_try_dl_img", err, '🍇', '🔴', 'red');
  }
  //@---------------------------------------------------------------------------
  //@-INSIDE (can't debug)
  async function _getDataUrlThroughFetch(url, options = {}) {
    const response = await fetch(url, options);
    if (!response.ok) {
      //!-----------------------------------------------------------------------
      //!-                           ERROR
      //!-----------------------------------------------------------------------
      throw new Error(`_getDataUrlThroughFetch = AXEL THROW : Could not fetch image, (status ${response.status})`);
    }
    const data   = await response.blob();
    const reader = new FileReader();
    return new Promise((resolve) => {
      reader.addEventListener('loadend', () => resolve(reader.result));
      reader.readAsDataURL(data);
    });
  } //getDataUrlThroughFetch()
  //@---------------------------------------------------------------------------
  function _parseDataUrl(dataUrl) { //*bypass CORS ?
    const matches = dataUrl.match(/^data:(.+);base64,(.+)$/);
    if (matches == null || matches.length !== 3) {
      //!-----------------------------------------------------------------------
      //!-                           ERROR
      //!-----------------------------------------------------------------------
      throw new Error('_parseDataUrl = [APP-THROW] : Could not parse data URL. (because no img ?)');
    }
    return { mime: matches[1], buffer: Buffer.from(matches[2], 'base64') };
  }
} //_try_dl_img
//@-----------------------------------------------------------------------------
//@-                            MKDIR SYNC
//@-----------------------------------------------------------------------------
export function mkdirSync (dirPath) {
  try {
    dirPath.split('/').reduce((parentPath, dirName) => {
      const currentPath = parentPath + dirName;
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);
      }
      return currentPath + '/';
    }, '');
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}
