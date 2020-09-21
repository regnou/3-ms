(async () => { })()

import { LitElement, html, css } from 'lit-element';

// ui-widgets
import '../0-header/header1.js';
import '../1-chip/chip1.js';
import '../1-panelLeft/panelLeft1.js';
import '../5-content/content1.js';

// data
// import { jdd as jddtin } from '../../static/db/1-config-tin'

class AxelApp1 extends LitElement {

  constructor() {
    super();
    // this.data = [];
  }

  static get properties () {
    return {
      // data: { type: Array },
    };
  }

  firstUpdated () {

    //TMP
    const drawer = mdc.drawer.MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));
    const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(this.shadowRoot.getElementById('app-bar'));
    topAppBar.setScrollTarget(this.shadowRoot.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
    //TMP



  }

  //°-  _______  _______  _        ______   _______  _______
  //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
  //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
  //!- | (____)|| (__    |   \ | || |   ) || (__    | (____)|
  //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
  //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
  //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
  //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

  render () {
    console.log('rendering <axel-xxx> ...');
    //*-----------------------------------------------------
    //*- init
    //*-----------------------------------------------------
    // const init = () => {}; //init

    //*-----------------------------------------------------
    //* <link href = "./xxx.css" rel   = "stylesheet">
    //*-----------------------------------------------------
    return html`<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">
<link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel = "stylesheet"></link>



<header class="mdc-top-app-bar app-bar" id="app-bar">
    <div class="mdc-top-app-bar__row">
      <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
        <button class="material-icons mdc-top-app-bar__navigation-icon mdc-icon-button">menu</button>
        <span class="mdc-top-app-bar__title">HEADER on top && DISMISSIBLE</span>
      </section>
    </div>
  </header>

  <aside class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust">
    <div class="mdc-drawer__content">
      <div class="mdc-list">
        <a class="mdc-list-item mdc-list-item--activated" href="#" aria-current="page">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">inbox</i>
          <span class="mdc-list-item__text">Inbox</span>
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">send</i>
          <span class="mdc-list-item__text">Outgoing</span>
        </a>
        <a class="mdc-list-item" href="#">
          <i class="material-icons mdc-list-item__graphic" aria-hidden="true">drafts</i>
          <span class="mdc-list-item__text">Drafts</span>
        </a>
      </div>
    </div>
  </aside>

  <div class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
    <main class="main-content" id="main-content">
      App Content
    </main>
  </div>

`;
  } //render


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


  static get styles () {
    return css`


.app-bar {
  position: absolute;
}


:host {
  display: flex;
  height: 100vh;
}

.mdc-drawer-app-content {
  flex: auto;
  overflow: auto;
  position: relative;
}

.main-content {
  overflow: auto;
  height: 100%;
}

.app-bar {
  position: absolute;
}

.mdc-top-app-bar {
  z-index: 7 ;
}


  `;
  }

} //end-class


customElements.define('axel-g-app1', AxelApp1);
