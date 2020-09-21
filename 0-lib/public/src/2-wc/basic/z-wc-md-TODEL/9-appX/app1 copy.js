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
    this.id = "";
    this.data = [];
  }

  static get properties() {
    return {
      // id: { type: String },
      data: { type: Array },
      // mdcDrawer: { type: Object },
      // mdcTopAppBar: { type: Object },
      // mdcList: { type: Object }

      // import {MDCTopAppBar} from '@material/top-app-bar';
      // import {MDCDrawer} from "@material/drawer/index";
      // import {MDCList} from "@material/list/index";

      // @import "@material/drawer/mdc-drawer";
      // @import "@material/list/mdc-list";
      // @import "@material/top-app-bar/mdc-top-app-bar";
      // @import "@material/typography/mdc-typography";
    };
  }

  firstUpdated() {
    // const elm_arr = [...this.shadowRoot.querySelectorAll('.mdc-chip-set')];
    // elm_arr.map(el => {
    //   mdc.chips.MDCChipSet.attachTo(el);
    // });

    // TOP APP BAR
    // const drawer = mdc.drawer.MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));

    // const el = this.shadowRoot.getElementById('app-bar');
    // const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(el);
    // topAppBar.setScrollTarget(this.shadowRoot.getElementById('main-content'));
    // topAppBar.listen('MDCTopAppBar:nav', () => {
    //   drawer.open = !drawer.open;
    // });

    // SEARCH TEXT
    // const el2 = this.shadowRoot.querySelector('.mdc-text-field');
    // mdc.textField.MDCTextField.attachTo(el2);

    // NOTCHED OUTLINE
    // const el3 = this.shadowRoot.querySelector('.mdc-notched-outline');
    // mdc.notchedOutline.MDCNotchedOutline.attachTo(el3);

    // Select DOM elements
    // const MDCFoo = mdc.foo.MDCFoo;
    // const MDCFooFoundation = mdc.foo.MDCFooFoundation;



    //°- GO OK
    // const topAppBarElement = this.shadowRoot.querySelector('.mdc-top-app-bar');
    // const listEl = this.shadowRoot.querySelector('.mdc-drawer .mdc-list');
    // const drawerElement = this.shadowRoot.querySelector('.mdc-drawer');
    // const mainContentEl = this.shadowRoot.querySelector('.main-content');


//TMP
    const drawer = mdc.drawer.MDCDrawer.attachTo(this.shadowRoot.querySelector('.mdc-drawer'));
    const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(this.shadowRoot.getElementById('app-bar'));
    topAppBar.setScrollTarget(this.shadowRoot.getElementById('main-content'));
    topAppBar.listen('mdc.topAppBar.MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
//TMP



    // // Initialize either modal or permanent drawer
    // const initModalDrawer = () => {
    //   drawerElement.classList.add("mdc-drawer--modal");
    //   const drawer = mdc.drawer.MDCDrawer.attachTo(drawerElement);
    //   drawer.open = false;

    //   const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarElement);
    //   topAppBar.setScrollTarget(mainContentEl);
    //   topAppBar.listen('mdc.topAppBar.MDCTopAppBar:nav', () => {
    //     drawer.open = !drawer.open;
    //   });

    //   listEl.addEventListener('click', (event) => {
    //     drawer.open = false;
    //   });

    //   return drawer;
    // }

    // const initPermanentDrawer = () => {
    //   drawerElement.classList.remove("mdc-drawer--modal");
    //   const list = new mdc.list.MDCList(listEl);
    //   list.wrapFocus = true;
    //   return list;
    // }

    // let drawer = window.matchMedia("(max-width: 900px)").matches
    //   ? initModalDrawer()
    //   : initPermanentDrawer();

    // // Toggle between permanent drawer and modal drawer at breakpoint 900px
    // const resizeHandler = () => {
    //   if (window.matchMedia("(max-width: 900px)").matches
    //     && drawer instanceof mdc.list.MDCList) {
    //     drawer.destroy();
    //     drawer = initModalDrawer();
    //   } else if (window.matchMedia("(min-width: 900px)").matches
    //     && drawer instanceof mdc.drawer.MDCDrawer) {
    //     drawer.destroy();
    //     drawer = initPermanentDrawer();
    //   }
    // }
    // window.addEventListener('resize', resizeHandler);



  }

  //°-  _______  _______  _        ______   _______  _______
  //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
  //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
  //!- | (____)|| (__    |   \ | || |   ) || (__    | (____)|
  //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
  //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
  //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
  //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

  render() {
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
        <span class="mdc-top-app-bar__title">Dismissible Drawer</span>
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




/*

<aside class="mdc-drawer mdc-drawer--fixed-adjust">
  <div class="mdc-drawer__content">
    <nav class="mdc-list">
      <a class="mdc-list-item mdc-list-item--selected" href="#" aria-selected="true" tabindex="0">
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
    </nav>
  </div>
</aside>

  <div class="mdc-drawer-scrim"></div>

  <div class="mdc-drawer-app-content">

    <header class="mdc-top-app-bar">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <a href="#" class="demo-menu material-icons mdc-top-app-bar__navigation-icon">menu</a>
          <span class="mdc-top-app-bar__title">App Bar</span>
        </section>
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" role="toolbar">
          <a href="#" class="material-icons mdc-top-app-bar__action-item" aria-label="Search" alt="Search">search</a>
        </section>
      </div>
    </header>

    <main class="main-content">
      <div class="mdc-top-app-bar--fixed-adjust">
        <h2>
          An example using Material Components for the Web that changes the navigation drawer layout based on screen width
          </h2>
        <p>
          This simple website template uses Material Components to implement a permanent navigation drawer for screen widths larger
          than 900px, and a modal drawer for screen widths smaller than 900px. Check it out by resizing the width of your browser window!
          </p>
        <p>Read more about the Material Design <a href="https://material.io/design/layout/responsive-layout-grid.html">responsive layout grid</a>.</p>
      </div>
    </main>
  </div>
*/


















  // <div class = "app">

  // <div class = "header">
  //   <axel-g-header-1></axel-g-header-1>
  // </div>

  // <div class = "panel-left">
  //   <axel-g-panel-left-1></axel-g-panel-left-1>
  // </div>

  // <div class = "content">
  // <div class = "filter">
  //     <axel-g-chip-1></axel-g-chip-1>
  //   </div>
  //   <div class = "content-main">
  //     <axel-g-content-1></axel-g-content-1>
  //   </div>
  // </div>

  // </div>

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



  static get styles() {
  return css`

// Note: these styles do not account for any paddings/margins that you may need.

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

// only apply this style if below top app bar
.mdc-top-app-bar {
  z-index: 7;
}


  `;
}

} //end-class






//°- REMET EN-COURS
// :host {


//   background: #f5f5f5;
//   display: flex; // Removes top gap between modal drawer and viewport
//   height: 100vh; // Ensures that permanent drawer extends to bottom of viewport
//   margin: 0; // Removes top gap between top app bar and viewport

//   /* --LEFT: 300px; */
//   /* --TOP : 100px; */
// }


// // Note: these styles do not account for any paddings/margins that you may need.

// .mdc-drawer-app-content {
//   flex: auto;
//   overflow: auto;
//   position: relative;
// }

// .main-content {
//   overflow: auto;
//   height: 100%;
// }

// .app-bar {
//   position: absolute;
// }

// // only apply this style if below top app bar
// .mdc-top-app-bar {
//   z-index: 7;
// }



// /* .mdc-top-app-bar {
//   @include mdc-top-app-bar-fill-color-accessible(white);
//   @include mdc-top-app-bar-icon-ink-color(rgba(0, 0, 0, 0.6));
// } */

// .main-content {
//   margin: 20px 50px;
// }

// // BREAKPOINT min-width:900px

// .mdc-top-app-bar__navigation-icon {
//   display: none;
// }

// // BREAKPOINT max-width:900px

// @media (max-width: 900px) {
//   .mdc-top-app-bar__navigation-icon {
//     display: block;
//   }
// }




//°- REMET AXL
// .app {
//   /* position: absolute;
//   top     : 0;
//   left     : 0;
//   right   : 0;
//   bottom  : 0; */
// }

// .header {
//   background: rgb(243, 222, 222);
//   position: absolute;
//   top     : 0;
//   left    : 0;
//   right   : 0;
//   /* bottom: 0; */
// }

// .panel-left {
//   background: rgb(232, 250, 228);
//   position: absolute;
//   top     : var(--TOP);
//   left    : 0;
//   /* right: 0; */
//   bottom: 0;
// }

// .content {
//   background: rgb(227, 240, 255);
//   position: absolute;
//   top     : 0;
//   left    : var(--LEFT);
//   right   : 0;
//   bottom  : 0;
// }

// .filter {
//   background: rgb(253, 238, 195);
//   position: absolute;
//   top     : 0;
//   left    : 0;
//   right   : 0;
//   /* bottom: 0; */
// }

// .content-main {
//   background: rgb(243, 217, 241);
//   position: absolute;
//   top     : var(--TOP);
//   left    : 0;
//   right   : 0;
//   bottom  : 0;
// }




customElements.define('axel-g-app1', AxelApp1);
