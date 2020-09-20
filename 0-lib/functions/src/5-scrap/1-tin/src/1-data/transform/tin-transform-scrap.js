import {DM_chat}      from './tin-transform-DM.js';


const unique = (arr, f) => {
    const vArr = arr.map(f);
    return arr.filter((_, i) => vArr.indexOf(vArr[i]) === i);
  }

  export function  transform_scrap(dbRaw_arr){
    // transfo 1
    const dbUniK_arr = unique(dbRaw_arr, e => e._05img_tinder_src + e._02name);
    console.log("%c DT : TT > [contacts UNIQUE] : " + dbUniK_arr.length, "color: green");

    // transfo 2
    const db_arr = DM_chat(dbUniK_arr);
    return db_arr;

  }
