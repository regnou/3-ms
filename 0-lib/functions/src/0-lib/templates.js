import {escape, unescape} from 'html-escaper';
import {html} from '@popeindustries/lit-html-server';
import {unsafeHTML} from
  '@popeindustries/lit-html-server/directives/unsafe-html';

import {DEFAULT_TAG, SORT_ORDERS} from './constants.js';
import {getQuestion} from './urls.js';

// ° -------------------------------------------------------
function formatDate(timestamp) {
  return new Date(timestamp * 1000).toLocaleString();
}
// ° -------------------------------------------------------
function profile({imageUrl, date, profileLink, displayName, anchorLink}) {
  return html`
    <div class       = "profile">
    <img src         = "${imageUrl}"
         title       = "Profile picture"
         crossorigin = "${imageUrl && imageUrl.startsWith('https://www.gravatar.com/')}"
    <a   href        = "${profileLink}">${displayName}</a>
      at
      <a href = "${anchorLink}">${date}</a>
    </div>
  `;
}
// ° -------------------------------------------------------
function questionCard({id, title}) {
  return html`
    <a class          = "card"
       href           = "/questions/${id}"
       data-cache-url = "${getQuestion(id)}">
       ${title}
    </a>
  `;
}


///        db        88888888ba  88
///        d88b       88      "8b 88
///        d8'`8b      88      ,8P 88
///        d8'  `8b     88aaaaaa8P' 88
///        d8YaaaaY8b    88""""""'   88
///        d8""""""""8b   88          88
///        d8'        `8b  88          88
///        d8'          `8b 88          88


export function index(tag, items, sort) {
  if (!items) {
    return html`<p class="error">Unable to list questions for the tag.</p>`;
  }
  /// ------------------------------------------------------
  const titleString = (sort === SORT_ORDERS.VOTES ? 'Top' : 'Active') +
    ` "${tag}" Questions`;
  const title = html`
    <h3>${titleString}</h3>
  `;
  /// ------------------------------------------------------
  const form = html`
    <form  method      = "GET">
    <label for         = "tag">Switch to tag 2:</label>
    <input type        = "text"
           name        = "tag"
           placeholder = "${DEFAULT_TAG}"></input>
    </form>
  `;
  /// ------------------------------------------------------
  const questionCards = items.map((item) => questionCard({
    id   : item.question_id,
    title: unescape(item.title),
  }));
  /// ------------------------------------------------------
  const questions = html`<div id="questions">${questionCards}</div>`;
  /// ------------------------------------------------------
  const metadataScript = html`
    <script>
      self._title = ${JSON.stringify(escape(titleString))};
    </script>
  `;
  /// ------------------------------------------------------
  return html`
    ${title}
    ${form}
    ${questions}
    ${metadataScript}
  `;
}


///        db        88888888ba  88
///        d88b       88      "8b 88
///        d8'`8b      88      ,8P 88
///        d8'  `8b     88aaaaaa8P' 88
///        d8YaaaaY8b    88""""""'   88
///        d8""""""""8b   88          88
///        d8'        `8b  88          88
///        d8'          `8b 88          88


export function question(item) {
  if (!item) {
    return html`<p class="error">Unable to load question.</p>`;
  }

  const ownerProfile = profile({
    anchorLink : item.link,
    date       : formatDate(item.creation_date),
    displayName: item.owner.display_name,
    imageUrl   : item.owner.profile_image,
    profileLink: item.owner.link,
  });

  const title = unescape(item.title);

  const question = html`
    <h3>${title}</h3>
    ${ownerProfile}
    <div>${unsafeHTML(item.body)}</div>
  `;

  const answers = item.answers ? item.answers
      .sort((a, b) => a.score < b.score)
      .map((answer) => {
        const answererProfile = profile({
          anchorLink : answer.link,
          date       : formatDate(answer.creation_date),
          displayName: answer.owner.display_name,
          imageUrl   : answer.owner.profile_image,
          profileLink: answer.owner.link,
        });

        return html`
          ${answererProfile}
          <div>${unsafeHTML(answer.body)}</div>
        `;
      }) : [];

  const metadataScript = html`
    <script>
      self._title = ${JSON.stringify(escape(title))};
    </script>
  `;

  return html`
    ${question}
    <hr>
    ${answers}
    ${metadataScript}
  `;
}


///        db        88888888ba  88
///        d88b       88      "8b 88
///        d8'`8b      88      ,8P 88
///        d8'  `8b     88aaaaaa8P' 88
///        d8YaaaaY8b    88""""""'   88
///        d8""""""""8b   88          88
///        d8'        `8b  88          88
///        d8'          `8b 88          88


export function error(message) {
  return html`
    <p>Sorry, this page couldn't be loaded.</p>
    <p>Try a cached page instead.</p>
    <pre>${message}</pre>
  `;
}

