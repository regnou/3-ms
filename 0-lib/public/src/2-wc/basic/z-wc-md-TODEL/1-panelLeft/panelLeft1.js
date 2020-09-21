/* eslint-disable no-undef */
// (async () => { })()

//.- I8,        8        ,8I 88 88888888ba,     ,ad8888ba,  88888888888 888888888888
//.- `8b       d8b       d8' 88 88      `"8b   d8"'    `"8b 88               88
//.-  "8,     ,8"8,     ,8"  88 88        `8b d8'           88               88
//*-   Y8     8P Y8     8P   88 88         88 88            88aaaaa          88
//*-   `8b   d8' `8b   d8'   88 88         88 88      88888 88"""""          88
//*-    `8a a8'   `8a a8'    88 88         8P Y8,        88 88               88
//!-     `8a8'     `8a8'     88 88      .a8P   Y8a.    .a88 88               88
//!-      `8'       `8'      88 88888888Y"'     `"Y88888P"  88888888888      88

import { LitElement, html, css } from 'lit-element';

class AxelPanelLeft1 extends LitElement {
     //--------------------------------------------------------
     constructor() {
          super();
          this.data = [];

          //TODO- does not work in main
          this.data = [
               {
                    title: 'guide',
                    link: '/guide',
                    children: [
                         {  //!- CHAPTER 1 --------------------------------
                              title: 'cities',
                              link: '/guide/cities',
                              children: [
                                   {
                                        title: 'la paz',
                                        link: '/guide/cities/la-paz',
                                        children: [
                                             'eating',
                                             'sleeping',
                                             'trecking/agencies',
                                             'sightseeing',
                                             'eating',
                                             'entertainment',
                                             'excursions',
                                             'transport',
                                             'health',
                                             'leaving',
                                             'shopping',
                                             'exercices',
                                             'ARTICLES',
                                        ]
                                   },
                                   {
                                        title: 'santa cruz',
                                        link: '/guide/cities/santa-cruz',
                                        children: [
                                             'eating',
                                             'sleeping',
                                             'trecking/agencies',
                                             'sightseeing',
                                             'eating',
                                             'health',
                                             'leaving',
                                             'shopping',
                                             'exercices',
                                             'ARTICLES',
                                        ]
                                   },
                                   {
                                        title: 'cochabamba',
                                        link: '/guide/cities/cochabamba',
                                        children: [
                                             'eating',
                                             'sleeping',
                                             'trecking/agencies',
                                             'sightseeing',
                                             'eating',
                                             'entertainment',
                                             'excursions',
                                             'transport',
                                             'health',
                                        ]
                                   },
                                   {
                                        title: 'sucre',
                                        link: '/guide/cities/sucre',
                                        children: [
                                             'eating',
                                             'sleeping',
                                             'trecking/agencies',
                                             'sightseeing',
                                             'eating',
                                             'entertainment',
                                             'excursions',
                                             'transport',
                                             'health',
                                             'leaving',
                                             'shopping',
                                             'exercices',
                                             'ARTICLES',
                                        ]
                                   },
                                   {
                                        title: 'potosi',
                                        link: '/guide/cities/potosi',
                                        children: [
                                             'eating',
                                             'exercices',
                                             'ARTICLES',
                                        ]
                                   }
                              ]
                         },
                         {
                              title: 'national parks',
                              link: '/guide/national-parks',
                              children: [
                                   {
                                        title: 'amboro',
                                        link: '/guide/national-parks/amboro',
                                        children: [
                                             'eating',
                                             'sleeping',
                                             'trecking/agencies',
                                             'sightseeing',
                                             'eating',
                                             'entertainment',
                                             'excursions',
                                             'transport',
                                             'health',
                                             'leaving',
                                             'shopping',
                                             'exercices',
                                             'ARTICLES',
                                        ]
                                   },
                                   {
                                        title: 'cotapata',
                                        link: '/guide/national-parks/cotapata',
                                   },
                                   {
                                        title: 'sama',
                                        link: '/guide/national-parks/sama',
                                   },
                                   {
                                        title: 'tunari',
                                        link: '/guide/national-parks/tunari',
                                   }
                              ]
                         },
                         {
                              title: 'regions',
                              children: [
                                   {
                                        title: 'norte potosi',
                                        link: '/guide/regions/norte-potosi',
                                   },
                                   {
                                        title: 'misiones',
                                        link: '/guide/regions/misiones',
                                   },
                              ]
                         },
                    ] //children
               },
               { //!- CHAPTER 2 -------------------------------------
                    title: 'explore',
                    link: '/explore',
                    children: [
                         {
                              title: 'cities2',
                              link: '/explore/cities',
                              children: [
                                   {
                                        title: 'la paz',
                                        link: '/explore/cities/la-paz',
                                   },
                                   {
                                        title: 'santa cruz',
                                        link: '/explore/cities/santa-cruz',
                                   },
                                   {
                                        title: 'cochabamba',
                                        link: '/explore/cities/cochabamba',
                                   },
                                   {
                                        title: 'sucre',
                                        link: '/explore/cities/sucre',
                                   },
                                   {
                                        title: 'potosi',
                                        link: '/explore/cities/potosi',
                                   }
                              ]
                         },
                         {
                              title: 'national parks2',
                              link: '/explore/national-parks',
                              children: [
                                   {
                                        title: 'amboro',
                                        link: '/explore/national-parks/amboro',
                                   },
                                   {
                                        title: 'cotapata',
                                        link: '/explore/national-parks/cotapata',
                                   },
                                   {
                                        title: 'sama',
                                        link: '/explore/national-parks/sama',
                                   },
                                   {
                                        title: 'tunari',
                                        link: '/explore/national-parks/tunari',
                                   }
                              ]
                         },
                         {
                              title: 'regions2',
                              children: [
                                   {
                                        title: 'norte potosi',
                                        link: '/explore/regions/norte-potosi',
                                   },
                                   {
                                        title: 'misiones',
                                        link: '/explore/regions/misiones',
                                   },
                              ]
                         },
                    ] //children
               },
               { //!- CHAPTER 3 ------------------------------------
                    title: 'circuits',
                    link: '/circuits',
                    children: [
                         {
                              title: 'treks',
                              link: '/circuits/treks',
                         },
                         {
                              title: 'cultural',
                              link: '/circuits/cultural',
                         },
                         {
                              title: 'photography',
                              link: '/circuits/photography',
                         },
                         {
                              title: 'expedition 4x4',
                              link: '/circuits/expedition-4x4',
                         },
                         {
                              title: 'communautaire',
                              link: '/circuits/communautaire',
                         }
                    ] //children
               },
          ]; //json
     }
     //--------------------------------------------------------
     static get properties () {
          return {
               data: { type: Array },
          };
     }
     //--------------------------------------------------------
     static get styles () {
          return css`


            :host {
               --mdc-theme-primary	: #ee5400;
            }
            .mdc-list-item--activated {
                 color: #ee5400 !important;
            }
            .mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{
               color: #ee5400 !important;
            }

            .area-chapter[id^=section-] {
               display: none;
               }
               .area-chapter[id^=section-].activated{
               display: block !important;
               }


          `;
     }


     //--------------------------------------------------------
     handleClick (e) {
          //.- TOGGLE (unique) OFF
          const sectionOff = this.shadowRoot.querySelector('.activated');
          if (sectionOff) sectionOff.classList.remove("activated");

          const linkOff = this.shadowRoot.querySelector('.mdc-list-item--activated');
          if (linkOff) linkOff.classList.remove("mdc-list-item--activated");

          e.currentTarget.classList.add("mdc-list-item--activated");

          // a ajouter sur le <a>
          // mdc-list-item--activated

          //*- DISPLAY MATCHING 'L2 aka chapters'
          const sectionOn = this.shadowRoot.getElementById('section-' + e.currentTarget.id);
          sectionOn.classList.toggle("activated");


          //const list = [...this.shadowRoot.querySelectorAll('[id^="section-"]')];
          //list.map(itm => {itm.classList.toggle("activated");})
     }

     //°-  _______  _______  _        ______   _______  _______
     //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
     //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
     //!- | (____)|| (__    |   \ | || |   ) || (__    | (____)|
     //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
     //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
     //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
     //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

     firstUpdated () {

          // list.wrapFocus = true;
          // const elm_arr1 = [...this.shadowRoot.querySelectorAll('.mdc-list')];
          // elm_arr1.map(el => {
          //      mdc.list.MDCList.attachTo(el);
          // });

          // RIPPLE
          const elm_arr2 = [...this.shadowRoot.querySelectorAll('.mdc-list-item')];
          elm_arr2.map(el => {
               // eslint-disable-next-line no-undef
               mdc.ripple.MDCRipple.attachTo(el);
          });

          // FIXED DRAWER
          // For permanently visible drawer, the list must be instantiated for appropriate keyboard interaction:
          const list = this.shadowRoot.querySelector('.mdc-list');
          mdc.list.MDCList.attachTo(list);
          list.wrapFocus = true;


          // const listEl = this.shadowRoot.querySelector('.mdc-drawer .mdc-list');
          // const mainContentEl = this.shadowRoot.querySelector('.main-content');

          // listEl.addEventListener('click', (event) => {
          //      drawer.open = false;
          // });

          // this.shadowRoot.addEventListener('MDCDrawer:closed', () => {
          //      mainContentEl.querySelector('input, button').focus();
          // });


     }



     render () {
          console.log('rendering <axel-panel-left-1> ...');
          //*-----------------------------------------------
          //*-
          //*-----------------------------------------------
          const menuL1 = (data, ariaLevel) => {
               const nodes = [];
               const ariaSetsize = data.length;
               let ariaPosinset = 0;
               ariaLevel += 1;            //!!!
               data.map(itm => {
                    ariaPosinset += 1;
                    // if (itm.children && Object.keys(itm.children).length) {
                    // SUMMARY LINK
                    if (ariaLevel === 1) {
                         nodes.push(
                              htmlLinkL1(itm, ariaLevel, ariaSetsize, ariaPosinset));
                    }
               });
               return html`
                    ${nodes}
               `
          }

          //*- class         = "menu-link-chapter"
          //*- tabindex      = "-1"
          const htmlLinkL1 = (itm, ariaLevel, ariaSetsize, ariaPosinset) => {
               const label = itm.title.trim();  //!- keep trim ? //this.firstChars.push(label.substring(0, 1).toLowerCase());
               const ti = html`
                    <a
                    id            = ${label}
                    class         = "mdc-list-item "
                    tabindex      = "-1"
                    href          = "#"
                    aria-current  = "page"
                    @click        = ${this.handleClick}
                    aria-expanded = "false"
                    aria-level    = ${ariaLevel}
                    aria-setsize  = ${ariaSetsize}
                    aria-posinset = ${ariaPosinset}
                    >
                         <i
                         class       = "material-icons mdc-list-item__graphic"
                         aria-hidden = "true"
                         >label</i>
                         <span
                         class = "mdc-list-item__text"
                         >
                         ${label}</span>
                    </a>

               `
               return ti;
          }
          //=----------------------------------------------- controler
          const menuL2 = (data, ariaLevel) => {
               const nodes = [];
               const ariaSetsize = data.length;
               let ariaPosinset = 0;
               ariaLevel += 1;            //!!!

               data.map(itm => {
                    ariaPosinset += 1;
                    if (itm.children && Object.keys(itm.children).length) {
                         if (ariaLevel === 1) {
                              nodes.push(
                                   htmlLinkL2(itm.title, itm.children, ariaLevel, ariaSetsize, ariaPosinset));
                         }
                    }
               })

               return nodes;
          }

          //<i class = "material-icons md-36 md-dark ">label</i>
          const htmlLinkL2 = (titleParent, data, ariaLevel, ariaSetsize, ariaPosinset) => {
               //this.firstChars.push(label.substring(0, 1).toLowerCase());
               const ti = html`
                <div class = "mdc-list area-chapter" id = "section-${titleParent}">
                    ${data.map(itm => {
                    const label = itm.title.trim();  //!- keep trim ?
                    return html`
                              <a
                              href          = "#"
                              class         = "mdc-list-item menu-link-chapter"
                              tabindex      = "-1"
                              id            = ${label}
                              aria-current  = "page"
                              aria-level    = ${ariaLevel}
                              aria-setsize  = ${ariaSetsize}
                              aria-posinset = ${ariaPosinset}
                              >
                              <i    class = "material-icons mdc-list-item__graphic" aria-hidden = "true">label</i>
                              <span class = "mdc-list-item__text">${label}</span>
                              </a>
                    `
               })}
               </div>
               `
               return ti;
          }
          //*-----------------------------------------------
          //*- render - <link href = "./panelLeft1.css" rel = "stylesheet"></link>
          //*-----------------------------------------------
          const ariaLevel = 0;
          return html`

          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</link>

<link href = "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500;700;900&display=swap" rel = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700;800&display=swap" rel  = "stylesheet">
</link>
<link href = "https://fonts.googleapis.com/css?family=Baloo+2:400,600,800&display=swap" rel              = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700;800;900&display=swap" rel = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap" rel      = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap" rel                  = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@100;300;700&display=swap" rel   = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Laila:wght@700&display=swap" rel                  = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;900&display=swap" rel         = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Flamenco:wght@300;400&display=swap" rel           = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap" rel                 = "stylesheet">
<link href = "https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@300&display=swap" rel       = "stylesheet">

<link rel = "stylesheet" href = "https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">

<aside class = "mdc-drawer">

  <div class = "mdc-drawer__header">
  <h3  class = "mdc-drawer__title">BRASIL</h3>
  <h6  class = "mdc-drawer__subtitle">lovelyplanet.app</h6>
  </div>


  <div class = "mdc-drawer__content">
     <nav class = "mdc-list">
        ${menuL1(this.data, ariaLevel)}

        <hr class="mdc-list-divider">
        <h1 class="mdc-list-group__subheader">chapitres</h1>
        ${menuL2(this.data, ariaLevel)}
     </nav>
  </div>

</aside>`;


     } //render
     //*- <ul  class = "area-summary" ></ul>
} //end-class
customElements.define('axel-g-panel-left-1', AxelPanelLeft1);

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
