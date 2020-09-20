//.-############################################################################
//.-#                             scrapper-tinder
//.-#                                  [ LIB ] utils
//.-############################################################################

// ?--------------------------------------------------------
// !NAME SPECIFICATION for G-contact (CSV)
// *UNIQUE NAME
// *--------------------------------------------------------
export function unik_tinder_contactName (
 city
 , name
 , age
 , tinder_account
 , instagram_account
 , distance
 , status_tinder) {

 const SEP = "_";

 let NAME_str =
  'B' + SEP
  + (city === "" ? "z-noCity" + SEP : city + SEP)
  + name + SEP
  + age + SEP
  + tinder_account + SEP
  + instagram_account + SEP
  + status_tinder + SEP
  + distance
  ;
 NAME_str = NAME_str.replace(/,/g, SEP)  // for no CSV confusion
 return NAME_str;
}

//=-############################################################################
//*-               EACH ITEM LOOP (pupp > tinder [chat, scrap])
//=-############################################################################

//=-############################################################################
//=-loop scroll
//=-############################################################################
// exports.loop = async (page, process_f) => {
  export async function loop (page, process_f) {
 console.log("%c [task] 💔 TINDER LOOPING...", "background: #222; color: purple; font-size:32px");
 let  db = []; //!- !!! Si c est le m ID, ne pas l ajouter : TRY a SET !
 let   indexEntity = 0; //db  = db.concat(arr);
 let idxLoop_int = 0;

 let o = await _BROWSER_scrollToTop(page); //*loop items (inside scroll)

// let i = 0; /// debug
 while (o.sT + o.oH < o.sH) {
  //  if (i == 1) break; /// debug
  //  else i++; /// debug

   console.log(`💔loop# ${idxLoop_int}`); // !- 🟢CHALK (non, passe pas a l interieur du ctx BROWSER)//console.log(chalk.green.black(`🟢loop# ${idLoop_inc}`));
   // await BREATH(TIMEOUT_BREATH);
   // await page.waitFor(6000)
   //*Liste de contact
   await page.waitForSelector('.match-row__wrapper');
   const scrollItem_handle_arr = await page.$$('.match-row__wrapper');
   for (const e of scrollItem_handle_arr) {
     try {

       // detail
       //turns out instagram infinite list is pretty complicated - it re-builds itself at some time as you start scrolling it. At this point, it removes all old DOM nodes and creates a new ones; so your element handles start pointing to detached nodes.
       await page.evaluate(e => e.click(), e);

       try {
        // indexEntity++; //! !!! !!!
        //await do_brazil_strategy_flow(page, textArea, chat_arrO_);
        //  const contact_o = await process_f(page, indexEntity); //°ca marche ? magnifique ! ??? === === ===
        // assert typof === "function"
         const contact_o = await process_f(page); //!- chat or build-entity HERE
         db.push(contact_o);
       } catch (err) { // no textArea available
         console.log('🟡DEBUG 🟡 WARNING 🟡 process_f() => no textArea available for this person (deleted ?): ' + page.url());
       }
     } catch (err) {
       console.log('🟠DEBUG 🟠 WARNING 🟠 for (e of scrollItem_handle_arr) => this is not clickable s person : ' + page.url());
       console.log(err);
     }
   } //end-for-item
   idxLoop_int++;
   o = await _BROWSER_scrollTo(page, idxLoop_int);

 } //end-while
 return db;
} //end-doChat
//@---------------------------------------------------------------------------
//@-                                COMMON (DB)
//@---------------------------------------------------------------------------
async function _BROWSER_scrollToTop(page, indexLoop_int) {
 await page.waitForSelector('.ReactVirtualized__Grid.ReactVirtualized__List');
 const o = await page.evaluate(_ => {
   const scroll = document.querySelector('.ReactVirtualized__Grid.ReactVirtualized__List');
   scroll.scrollTo(0, 0);
   const o = {
     'oH': scroll.offsetHeight,
     "sH": scroll.scrollHeight,
     "sT": scroll.scrollTop,
   }
   return o;
 }, null);
 return o;
}
//@---------------------------------------------------------------------------
async function _BROWSER_scrollTo(page, indexLoop_int) {
 await page.waitForSelector('.ReactVirtualized__Grid.ReactVirtualized__List');
 const o = await page.evaluate(indexLoop_int => {
   // debugger
   //do: getScrollElement
   const scroll = document.querySelector('.ReactVirtualized__Grid.ReactVirtualized__List');
   //do: getScrollPosition
   const o = {
     'oH': scroll.offsetHeight,
     "sH": scroll.scrollHeight,
     "sT": scroll.scrollTop,
   }
   // o.oH = o.oH + (o.sH * indexLoop_int); // modify it !
   // o.oH = o.oH * indexLoop_int; // modify it !
   o.sT += o.oH;
   //do: scroll
   scroll.scrollTo(0, o.sT);
   // scroll.scrollTo(0, o.oH);
   return o;
 }, indexLoop_int);

 return o;
}


//*EEEEEEEEEEEEEEEEEEEEEENNNNNNNN        NNNNNNNNDDDDDDDDDDDDD
//.E::::::::::::::::::::EN:::::::N       N::::::ND::::::::::::DDD
//!E::::::::::::::::::::EN::::::::N      N::::::ND:::::::::::::::DD
//?EE::::::EEEEEEEEE::::EN:::::::::N     N::::::NDDD:::::DDDDD:::::D
//@- E:::::E       EEEEEEN::::::::::N    N::::::N  D:::::D    D:::::D
//-  E:::::E             N:::::::::::N   N::::::N  D:::::D     D:::::D
//=- E:::::::::::::::E   N::::::N N::::N N::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N:::::::N::::N  N::::::N  D:::::D     D:::::D
//*  E:::::::::::::::E   N::::::N  N::::N:::::::N  D:::::D     D:::::D
//   E::::::EEEEEEEEEE   N::::::N   N:::::::::::N  D:::::D     D:::::D
//   E:::::E             N::::::N    N::::::::::N  D:::::D     D:::::D
//   E:::::E       EEEEEEN::::::N     N:::::::::N  D:::::D    D:::::D
// EE::::::EEEEEEEE:::::EN::::::N      N::::::::NDDD:::::DDDDD:::::D
// E::::::::::::::::::::EN::::::N       N:::::::ND:::::::::::::::DD
// E::::::::::::::::::::EN::::::N        N::::::ND::::::::::::DDD
//*-EEEEEEEEEEEEEEEEEEEEEENNNNNNNN         NNNNNNNDDDDDDDDDDDDD
