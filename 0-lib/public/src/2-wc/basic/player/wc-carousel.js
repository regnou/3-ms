
// (async () => { })()

import { LitElement, html, css } from 'lit-element';
// import './1-domain/2-wc-list'

class WcCarousel extends LitElement {
    constructor() {
        super();
        this.img_arr = [];
        this.isTrailerOn = false;
      }

      static get properties() {
        return {
          isTrailerOn: { type: Boolean },
          img_arr: { type: Array },     //°observed attribute name is img_arr
        };
      }

      imgHandler(e) {
        console.log("clicked");
        const src = e.target.src;
        let event = new CustomEvent('x-event-imgCarouselChanged', {
          detail: {
            message: 'Something important happened',
            src: src
          },
          bubbles: true,
          composed: true
        });
        this.dispatchEvent(event);
      }

    // <img id = "offline" src = "/offline.svg"></img>
    render () {
        console.log('rendering <wc-carousel> ...');
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
<link href="../../../../static/css/norm.css" rel="stylesheet"></link>
<link href = "./carousel1.css" rel   = "stylesheet" >

<div  class = "grid">

<div class=" arrow-left ">
  <span class="material-icons">navigate_before</span></div>

${this.isTrailerOn
  ? html`${this.img_arr.map(i =>
      html`<div @click = "${this.imgHandler}" class="card-char-div"><img class="card-char-img" src=${i} alt="" /> </div>`)}
            </div>`
  : html`${this.img_arr.map(i =>
      html`<div class="card-char-div">
                <img  class="card-char-img" src=${i} alt="" /> </div>`)}
            </div>`
}

<div class=" arrow-right ">
  <span class="material-icons">navigate_next</span></div>

</div>
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


::-webkit-scrollbar {
 width: 0px;
 background: transparent; /* make scrollbar transparent */
}

.grid {
overflow-x       : scroll;
scroll-snap-type : x mandatory;  /* TODO */
position         : relative;
display          : grid;
grid-auto-flow   : column;
grid-auto-columns: 30%;
/* grid-row-gap     : 15px; */
/* grid-column-gap  : 10px; */
/* background: darkgray; */
background: black;
border    : 1px solid black;
}
.grid:hover {
/* background: gray; */
}
.arrow-left .material-icons{
margin-top: 60px;
cursor: default;
}
.arrow-right .material-icons{
 margin-top: 60px;
 cursor: default;
 }
.grid:hover   .arrow-left,
.grid:hover   .arrow-right {
display: block;
opacity: 0.5;
}
.arrow-right {
position  : sticky;
right     : 0;
top       : 0;
width     : 20px;
background: black;
color     : white;
/* display   : none; */
opacity: 0;
}
.arrow-left {
position  : sticky;
left      : 0;
top       : 0;
width     : 20px;
background: black;
color     : white;
/* display   : none; */
opacity: 0;
}
div .card-char-div {
scroll-snap-align: start;
height           : 100%;
text-align       : center;
/* background       : gray; */
vertical-align: middle;
display       : inline-block;
cursor        : pointer;
}
div .card-char-div:active{
opacity: 0.5;
}
.card-char-img {
border-radius : 20px;
padding       : 10px 0;
height        : 10vh;
max-width     : calc(100% - 20px);
border        : 2px solid transparent;
margin        : 5px;
vertical-align: middle;
object-fit    : cover;
}
.card-char-div:hover  .card-char-img{
/* border       : 5px solid black;
outline      : 5px solid black; */
border       : 2px solid white;
outline      : 5px solid black;
border-radius: 0px;
background   : #000 !important;
/* background   : white !important; */
}


`;
}

} //end-class


customElements.define('wc-carousel', WcCarousel);
