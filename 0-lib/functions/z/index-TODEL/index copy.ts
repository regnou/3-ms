
//? ,adPPYba,  ,adPPYba, 8b,dPPYba, 8b       d8  ,adPPYba, 8b,dPPYba,
//? I8[    "" a8P_____88 88P'   "Y8 `8b     d8' a8P_____88 88P'   "Y8
//?  `"Y8ba,  8PP""""""" 88          `8b   d8'  8PP""""""" 88
//? aa    ]8I "8b,   ,aa 88           `8b,d8'   "8b,   ,aa 88
//? `"YbbdP"'  `"Ybbd8"' 88             "8"      `"Ybbd8"' 88

// CommonJS imports from node_modules or core.
// import axios from 'axios';
import express from 'express';
// import * as express from 'express'
import functions from 'firebase-functions';
// import https from 'https';
// import LRU from 'lru-cache';
// import {renderToString} from '@popeindustries/lit-html-server';

// Local ES2105 imports.
// import {DEFAULT_SORT, DEFAULT_TAG} from '../lib/constants.js';
// import * as tpl from '../lib/templates.js';
// import * as urls from '../lib/urls.js';
import routes from './src/0-lib/routes.js';

// HTML imports.

// regler PB comiplation avec imports
// import aboutPartial from '../public/0-static/html/partials/about.html';
// import footPartial from '../public/0-static/html/partials/foot.html';
// import headPartial from '../public/0-static/html/partials/head.html';
// import navbarPartial from '../public/0-static/html/partials/navbar.html';


// See https://cloud.google.com/functions/docs/bestpractices/networking#http_requests_with_an_axios_package
// const apiClient = axios.create({
//   baseURL: '',
//   timeout: 10000,
// });

// const httpsAgent = new https.Agent({
//   keepAlive: true,
// });

// Once a browser client has an active service worker, it will no longer need
// to obtain API responses from this server process. But, to cut down on the
// number of API requests that fresh browser clients might trigger, let's put
// in some light-weight caching that's local to this process.
// const apiCache = new LRU({
//   max   : 100,
//   maxAge: 1000 * 60 * 5,   // 5 minutes.
// });

// async function requestData(url) {
//   const cachedResponse = apiCache.get(url);
//   if (cachedResponse) {
//     return cachedResponse;
//   }

//   const networkResponse = await apiClient.request({
//     httpsAgent,
//     url,
//   });

//   const data = networkResponse.data;
//   apiCache.set(url, data);
//   return data;
// }


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
  // res.send(headPartial + navbarPartial + aboutPartial + footPartial);
  res.send("DEMO JOJO server");
});
// ° -------------------------------------------------------
// app.get(routes.get('questions'), async (req, res) => {
//   res.write(headPartial + navbarPartial);

//   const questionId = req.params.questionId;
//   try {
//     const data         = await requestData(urls.getQuestion(questionId));
//     const questionHTML = await renderToString(
//         tpl.question(data.items[0]));
//     res.write(questionHTML);
//   } catch (error) {
//     const errorHTML = await renderToString(tpl.error(error.message));
//     res.write(errorHTML);
//   }

//   res.write(footPartial);
//   res.end();
// });
// ° -------------------------------------------------------
// app.get(routes.get('index'), async (req, res) => {
//   res.write(headPartial + navbarPartial);

//   try {
//     const tag       = req.query.tag || DEFAULT_TAG;
//     const sort      = req.params.sort || DEFAULT_SORT;
//     const data      = await requestData(urls.listQuestionsForTag(tag, sort));

//     // ! AXEL todo here : injecte le code de BIDELMANN => tu mets le .content()
//     // ! renderToStringPupp ()
//     const indexHTML = await renderToString(
//         tpl.index(tag, data.items, sort));
//     res.write(indexHTML);
//   } catch (error) {
//     const errorHTML = await renderToString(tpl.error(error.message));
//     res.write(errorHTML);
//   }

//   res.write(footPartial);
//   res.end();
// });
// ° -------------------------------------------------------
// ° -------------------------------------------------------
export const handleRequest = functions.https.onRequest(app);
