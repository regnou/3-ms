
// (async () => { })()


import { LitElement, html, css } from 'lit-element';
// import './1-domain/2-wc-list'

//=   ,ad8888ba,  88                 db        ad88888ba   ad88888ba
//=   d8"'    `"8b 88                d88b      d8"     "8b d8"     "8b
//=  d8'           88               d8'`8b     Y8,         Y8,
//=  88            88              d8'  `8b    `Y8aaaaa,   `Y8aaaaa,
//=  88            88             d8YaaaaY8b     `"""""8b,   `"""""8b,
//=  Y8,           88            d8""""""""8b          `8b         `8b
//=   Y8a.    .a8P 88           d8'        `8b Y8a     a8P Y8a     a8P
//=    `"Y8888Y"'  88888888888 d8'          `8b "Y88888P"   "Y88888P"

class WcTrailer extends LitElement {
    constructor() {
        super();
        this.img_arr = [];
        this.isCarouselOn = false;


    }

    static get properties () {
        return {
            img_arr: { type: Array }, //°observed attribute name is img_arr
            isCarouselOn: { type: Boolean }
        };
    }

    // firstUpdated(changedProperties) {
    firstUpdated () {
        // this.addEventListener('click', this.siteHandler);
        if (this.isCarouselOn)
            this.addEventListener('x-event-imgCarouselChanged', this.handleXeventImgCarouselChanged);
    }

    // @x-event-imgCarouselChanged=${this.handleXeventImgCarouselChanged}
    handleXeventImgCarouselChanged (e) {
        const src = e.detail.src;

        const target = [...this.shadowRoot.querySelectorAll('.trailer-banner-img')]
            .find(e => e.src === src)
        target.scrollIntoView({ block: 'end', behavior: 'smooth' });

        // const target = this.shadowRoot.getElementById(src)
        // const offsetLeft = target.offsetLeft;
        // const scrollbar = this.shadowRoot.getElementById('trailer')
        // scrollbar.scrollLeft = offsetLeft;
    }


    // <img id = "offline" src = "/offline.svg"></img>
    render () {
        console.log('rendering <wc-trailer> ...');
        //*-----------------------------------------------------
        //*- init
        //*-----------------------------------------------------
        // const init = () => {}; //init

        //*-----------------------------------------------------
        //* <link href = "./xxx.css" rel   = "stylesheet">
        //*-----------------------------------------------------

        // <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        //*   88        88 888888888888 88b           d88 88
        //*   88        88      88      888b         d888 88
        //*   88        88      88      88`8b       d8'88 88
        //*   88aaaaaaaa88      88      88 `8b     d8' 88 88
        //*   88""""""""88      88      88  `8b   d8'  88 88
        //*   88        88      88      88   `8b d8'   88 88
        //*   88        88      88      88    `888'    88 88
        //*   88        88      88      88     `8'     88 88888888888
        // <div class = "search"></div>
        // <div class = "login"></div>
        return html`

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
<link href="../../static/norm.css" rel="stylesheet"></link>
<link rel   = "stylesheet" href = "./trailer1.css">

<div  class = "layer-trailer">
    ${this.img_arr.map(i =>
            html`<div class="trailer-banner-div">
          <img class="trailer-banner-img" src=${i} alt="" /> </div>`)}
</div>
<slot></slot>

`;




    } //render

    //.   ,ad8888ba,   ad88888ba   ad88888ba
    //.   d8"'    `"8b d8"     "8b d8"     "8b
    //.  d8'           Y8,         Y8,
    //.  88            `Y8aaaaa,   `Y8aaaaa,
    //.  88              `"""""8b,   `"""""8b,
    //.  Y8,                   `8b         `8b
    //.   Y8a.    .a8P Y8a     a8P Y8a     a8P
    //.    `"Y8888Y"'   "Y88888P"   "Y88888P"
    static get styles () {
        return css`
:host {
    --color-theme-clickable: #d3d7ed;
}
.layer-trailer {
    width     : 100%;
    height    : 400px;
    box-sizing: border-box;
    background: #0f457a;
}

::-webkit-scrollbar {
 width: 0px;
 background: transparent;
}
.layer-trailer {
 height: 400px;
 overflow-x      : scroll;
 scroll-snap-type: x mandatory;
 border     : 1px solid black;
 white-space     : nowrap;
 padding         : 25px 0 3px 0;
 margin          : 0;
 background: black;
}
.arrow-right {
 position  : sticky;
 right     : 0;
 top       : 0;
 width     : 20px;
 background: black;
 color     : white;
 opacity: 0;
 }
 .arrow-left {
 position  : sticky;
 left      : 0;
 top       : 0;
 width     : 20px;
 background: black;
 color     : white;
 opacity: 0;
 }
.arrow-left .material-icons{
 margin-top: 60px;
 cursor: default;
 }
 .arrow-right .material-icons{
  margin-top: 60px;
  cursor: default;
  }
 .trailer:hover   .arrow-left,
 .trailer:hover   .arrow-right {
 display: block;
 opacity: 0.5;
 }
.trailer-banner-div {
 display          : inline-block;
 border     : 1px solid black;
 width            : calc(100% - 2px);
 height           : calc(100% - 10px);
 text-align       : center;
 scroll-snap-align: start;
 position         : relative;
}
.trailer-banner-div:active{
 opacity: 0.5;
 }
.trailer-banner-img {
    object-fit: contain;
 width     : 100%;
 height    : 100%;
}

`;
    }

} //end-class


customElements.define('wc-trailer', WcTrailer);


// //handle event : click from child 'carousel' !
// handleEvent(event) {
//   console.log("TEST WIN : we catched click event !");
//   console.log(event.bubbles);
//   // const pos = this.img_arr.find(
//   //   e => { e === event.target.src }
//   // );
//   // il faut donc prendre le 3eme enfant du DOM
//   const img_arr = [...this.querySelectorAll(".trailer-banner-img")];
//   const el      = img_arr.find(e => { e.src === event.target.src });

//   // all elements are inside, but you bring the scroll to the good one
// }x-event-imgCarouselChanged


      // prop1: { type: String },
  // prop2: { type: Number },
  // prop3: { type: Boolean },
        // prop5: { type: Object }

    // <div class=" arrow-left ">
// <span class="material-icons">navigate_before</span></div>
// <div class=" arrow-right ">
// <span class="material-icons">navigate_next</span></div>
