
 //@--------------------------------------------------------
 //@
 //@--------------------------------------------------------
//  export function fe (
// libErr.fe("_try_dl_img", err, '🍇', '🔴', 'red');
export default function fe (
 re_me,
 re_me_ok,
 name,
 err,
 icon,
 ballColor,
 color,
 bg = "#ffa3a3",
 bg2 = "black"
 ) {
 console.group('catch')
 console.log('');
//@--------------------------------------------------------
 // msg
 console.log("%c 💥 💥 [ERROR] [catched] in: " + name + "            ", "color: white; background: red");
 console.log("%c " + icon + " 💥 " + '[MSG-NODE]: ' + err.message + "      ", "color: black; background: " + bg);
 if (err.axel_msg !== undefined) console.log("%c " + icon + " 🗨️ [MSG-APP]: " + err.axel_msg + "      ", "color: black; background: " + bg);
 let stack = err.stack.trim().replace(re_me, icon + '😓 👉 ' + re_me_ok );
 stack = stack.split("\n").slice(1).join("\n");
 console.log("%c ==STACK==      " + stack + " 🟢           ", "color: green; background:" + bg2); // console.log("%c       " + stack + "      ", "color: " + color + "; background: black");
 console.groupEnd('catch')
}

  // stack
  // regexp ci dessus lors du SNiPPET
  // const re = /http:\/\/localhost:8001/gi; //°-ctrl+click => ouvre le bon fichier
 // const re_me = /at .* \(\/Users\/x\/0git\/axel\/3-BO-SCRAP\/0-pupp-boScrapDb/gi;
