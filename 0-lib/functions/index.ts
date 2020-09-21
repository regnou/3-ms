
//? ,adPPYba,  ,adPPYba, 8b,dPPYba, 8b       d8  ,adPPYba, 8b,dPPYba,
//? I8[    "" a8P_____88 88P'   "Y8 `8b     d8' a8P_____88 88P'   "Y8
//?  `"Y8ba,  8PP""""""" 88          `8b   d8'  8PP""""""" 88
//? aa    ]8I "8b,   ,aa 88           `8b,d8'   "8b,   ,aa 88
//? `"YbbdP"'  `"Ybbd8"' 88             "8"      `"Ybbd8"' 88
import express from 'express';
import functions from 'firebase-functions';

import routes from './src/0-lib/routes';

// import main from './scraper/tin/1-getDb';


///           db        88888888ba  88
///          d88b       88      "8b 88
///         d8'`8b      88      ,8P 88
///        d8'  `8b     88aaaaaa8P' 88
///       d8YaaaaY8b    88""""""'   88
///      d8""""""""8b   88          88
///     d8'        `8b  88          88
///    d8'          `8b 88          88
const app = express();
// ° -------------------------------------------------------
app.get(routes.get('demo'), async (req, res) => {
  res.send("DEMO JOJO server");
});
// ° -------------------------------------------------------
app.get(routes.get('tin'), async (req, res) => {
  res.send("launch : pupp scrap tin");
  // main();
});
// ° -------------------------------------------------------
// ° -------------------------------------------------------
export const handleRequest = functions.https.onRequest(app);
