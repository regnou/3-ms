(async () => { })()

import { LitElement, html, css } from 'lit-element';

// ui-widgets
import '../0-header/header1.js';
import '../1-chip/chip1.js';
import '../1-panelLeft/panelLeft1.js';
import '../5-content/content1.js';


/*
*- .
*- DEPENDENCY JS & CSS : responsive: under 500px => [smartphone]
*- Apply the mdc-drawer-app-content class to the --sibling-- element after the drawer for the open/close animations to work.
*/
class AxelApp1 extends LitElement {

  constructor() {
    super();
    this.data = [];
  }

  static get properties() {
    return {
      data: { type: Array },
    };
  }

  firstUpdated() {



    //°- GO OK
    const mainContentEl = this.shadowRoot.querySelector('.main-content');
    const topAppBarEl = this.shadowRoot.querySelector('.mdc-top-app-bar');



    const listEl = this.shadowRoot.querySelector('.mdc-drawer .mdc-list');
    const drawerEl = this.shadowRoot.querySelector('.mdc-drawer');
    const drawer = mdc.drawer.MDCDrawer.attachTo(drawerEl);
    drawer.open = true;
      const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);
         topAppBar.setScrollTarget(mainContentEl);
      topAppBar.listen('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
      });


    //°- Initialize either modal or permanent drawer
    // const initModalDrawer = () => {
    //   drawerEl.classList.add("mdc-drawer--modal");
    //   const drawer = mdc.drawer.MDCDrawer.attachTo(drawerEl);
    //   drawer.open = false;
    //   const topAppBar = mdc.topAppBar.MDCTopAppBar.attachTo(topAppBarEl);
    //   topAppBar.setScrollTarget(mainContentEl);
    //   topAppBar.listen('MDCTopAppBar:nav', () => {
    //     drawer.open = !drawer.open;
    //   });
    //   listEl.addEventListener('click', (event) => {
    //     drawer.open = false;
    //   });
    //   return drawer;
    // }
    // const initPermanentDrawer = () => {
    //   drawerEl.classList.remove("mdc-drawer--modal");
    //   const list = new mdc.list.MDCList(listEl);
    //   list.wrapFocus = true;
    //   return list;
    // }

    // let drawer = initModalDrawer();

    // let drawer = window.matchMedia("(max-width: 500px)").matches
    //   ? initModalDrawer()
    //   : initPermanentDrawer();

    //°- Toggle between permanent drawer and modal drawer at breakpoint 900px
    // const resizeHandler = () => {
    //   if (window.matchMedia("(max-width: 500px)").matches
    //     && drawer instanceof mdc.list.MDCList) {
    //     drawer.destroy();
    //     drawer = initModalDrawer();
    //   } else if (window.matchMedia("(min-width: 500px)").matches
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


//<div class="mdc-drawer-scrim"></div>

  render() {
    console.log('rendering <axel-xxx> ...');
    //*-----------------------------------------------------
    //*- init
    //*-----------------------------------------------------
    // const init = () => {}; //init

    //*-----------------------------------------------------
    //* <link href = "./xxx.css" rel   = "stylesheet">
    //*-----------------------------------------------------
    return html`
<link href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css" rel="stylesheet" >
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">




<aside class="mdc-drawer mdc-drawer--modal">
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
            APP
          </h2>
        </div>
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

  // .main-content {
  //   overflow: auto;
  //   height: 100%;
  // }



  // display: flex; // Removes top gap between modal drawer and viewport
  // height: 100vh; // Ensures that permanent drawer extends to bottom of viewport
  // margin: 0; // Removes top gap between top app bar and viewport

  static get styles() {
    return css`

:host {
  --mdc-theme-primary: rgba(0, 0, 0, 0.87);
  background: #f5f5f5;
  display: flex;
  height: 100vh;
  margin: 0;
}

.main-content {
  margin: 20px 50px;
}


 .mdc-top-app-bar {
   z-index: 7;
 }

  `;
  }

} //end-class


// .mdc-top-app-bar__navigation-icon {
//   display: none;
// }

// @media (max-width: 500px) {
//   .mdc-top-app-bar__navigation-icon {
//     display: block;
//   }
// }




/*
.mdc-top-app-bar {
  // @include mdc-top-app-bar-fill-color-accessible(white);
  // @include mdc-top-app-bar-icon-ink-color(rgba(0, 0, 0, 0.6));
}
*/

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

customElements.define('axel-g-app1', AxelApp1);
