/* eslint-disable no-undef */
(async () => {
  //console.log("%c 😎 JoJo ", "background: #222; color: yellow; font-size:32px");
})()

//.- I8,        8        ,8I 88 88888888ba,     ,ad8888ba,  88888888888 888888888888
//.- `8b       d8b       d8' 88 88      `"8b   d8"'    `"8b 88               88
//.-  "8,     ,8"8,     ,8"  88 88        `8b d8'           88               88
//*-   Y8     8P Y8     8P   88 88         88 88            88aaaaa          88
//*-   `8b   d8' `8b   d8'   88 88         88 88      88888 88"""""          88
//*-    `8a a8'   `8a a8'    88 88         8P Y8,        88 88               88
//!-     `8a8'     `8a8'     88 88      .a8P   Y8a.    .a88 88               88
//!-      `8'       `8'      88 88888888Y"'     `"Y88888P"  88888888888      88
import { LitElement, html, css } from 'lit-element';

class AxelHeader1 extends LitElement {
  constructor() {
    super();
  }

  static get properties() {
    return {
      // imgTrailer_arr: { type: Array }, //°observed attribute name is img_arr
    };
  }

  // MyElement's static styles
  static get styles() {
    return css`
    .mdc-top-app-bar {
      --mdc-theme-primary: white;
      color: black;
      /* border-bottom: 1px solid gainsboro; */
    }
    .mdc-top-app-bar__title {
      padding-left: 12px;
    }
  `;
  }

  firstUpdated() {
    // TOP APP BAR
    const el = this.shadowRoot.querySelector('.mdc-top-app-bar');
    mdc.topAppBar.MDCTopAppBar.attachTo(el);

    // SEARCH TEXT
    const el2 = this.shadowRoot.querySelector('.mdc-text-field');
    mdc.textField.MDCTextField.attachTo(el2);

    // NOTCHED OUTLINE
    const el3 = this.shadowRoot.querySelector('.mdc-notched-outline');
    mdc.notchedOutline.MDCNotchedOutline.attachTo(el3);

    // ICON
    // const el3 = this.shadowRoot.querySelector('.mdc-text-field__icon');
    // mdc.textField.MDCTextField.attachTo(el2);
    // MDCTextFieldIcon
  }

  //°-  _______  _______  _        ______   _______  _______
  //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
  //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
  //!- | (____)|| (__    |   \ | || |   ) || (__    | (____)|
  //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
  //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
  //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
  //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

  // LOGO
  // <img id="logo-ID_img" src="../static/logo.jpg" alt=""></img>
  // <link href="../../static/css/norm.css" rel="stylesheet"></link>

  // <button class="mdc-icon-button material-icons mdc-top-app-bar__navigation-icon--unbounded">menu</button>

  // <link href="./header1.css" rel="stylesheet"></link>
  render() {
    console.log('rendering <axel-g-header1> ...');

    return html`
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</link>
<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">

<header class=" mdc-top-app-bar mdc-top-app-bar--fixed">
  <div class="mdc-top-app-bar__row">

    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <span class="mdc-top-app-bar__title">NADA</span>
    </section>


    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">

      <div class="mdc-text-field mdc-text-field--outlined mdc-text-field--with-trailing-icon mdc-text-field--fullwidth">

        <input class="mdc-text-field__input " id="xxx-text-field-hero-input">
        <i class="material-icons mdc-text-field__icon  mdc-text-field__icon--trailing">search</i>

        <span class="mdc-notched-outline">
          <span class="mdc-notched-outline__leading"></span>
          <span class="mdc-notched-outline__trailing"></span>
        </span>

      </div>

    </section>


    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
        aria-label="Download">file_download</button>
      <button class="mdc-icon-button material-icons mdc-top-app-bar__action-item--unbounded"
        aria-label="login">face</button>
    </section>

  </div>
</header>`;
  } //render
} //end-class
customElements.define('axel-g-header-1', AxelHeader1);

  //*EEEEEEEEEEEEEEEEEEEEEENNN              NNNNNNNNDDDDDDDDDDDDDDD
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
