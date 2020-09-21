export function fe( // browser import  (but browsers do not use bare path natively)
  re_me,
  re_me_ok,
  name,
  err,
  icon,
  ballColor,
  color,
  bg = "#ffa3a3",

  bg2 = "black") {
  console.group('catch')
  console.log('');
  //@--------------------------------------------------------
  // msg
  console.log("%c [catched] in: " + name + " 💥💥💥 [ERROR]            ", "color: white; background: red");
  console.log("%c " + icon + " 💥 " + '[NODE] ' + err.message + "      ", "color: black; background: " + bg);
  if (err.axel_msg !== undefined)
    console.log("%c " + icon + " 🗨️ [APP-MSG] " + err.axel_msg + "      ", "color: black; background: " + bg);
  // stack
  // regexp ci dessus lors du SNiPPET
  // const re = /http:\/\/localhost:8001/gi; //°-ctrl+click => ouvre le bon fichier
  // const re_me = /at .* \(\/Users\/x\/0git\/axel\/3-BO-SCRAP\/0-pupp-boScrapDb/gi;
  let stack = err.stack.trim().replace(re_me, icon + '😓 👉 ' + re_me_ok); // '/Users/x/0git/axel/3-BO-SCRAP/0-pupp-boScrapDb"
  //@--------------------------------------------------------
  //  const re = /at .* \(/gi;
  const re = /internal\/process/gi;
  stack = stack.replace(re, '                                                          ');  //
  //@--------------------------------------------------------
  stack = stack.split("\n").slice(1).join("\n");
  console.log("%c       " + stack + " 🟢           ", "color: green; background:" + bg2); // console.log("%c       " + stack + "      ", "color: " + color + "; background: black");
  console.groupEnd('catch')
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