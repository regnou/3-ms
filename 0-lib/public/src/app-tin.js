// (async () => { })() HERE

import { LitElement, html, css } from 'lit-element';
import './wc-page-layout3Col.js'
import { VIEW } from './constant.js'

class WcAppTin extends LitElement {
    constructor() {
        super();
        this.pageView = "";

        //! TODO - WE SHOULD CHANGE THE VIEW WITH THE BTN
        this.pageView = VIEW.groupBy_L1;
    }
    static get properties () {
        return {
            pageView: { type: String }
        };
    }
    firstUpdated () {
    }


    // @TODO JIRA2 @mike : mettre le panel rectangulaire en dessous du menu, bg white et border 1px gris - cf. dropdown-countrycity
    render () {
        console.log('RUN rendering tin::<app> ...');
        return html`<div class="LAPP">

    <div class="LAPP__header">
        <div class="LAPP__header_top">
            <div class="top_left">
                <div class="group_1 ">
                    <img class="logo_img " src="static/1-i/0-logo/2-logo-ms.jpg"></img>

                    <div class="btn_page_event">
                        <a class="btn">Event</a>
                    </div>
                    <div class="btn_page_local">
                        <a class="btn ">Local</a>
                    </div>
                </div>
            </div>
            <div class="top_right">
                <div class="group_2">
                    <div class="search-icon">
                        <svg width="24px" height="24px" class="v1262d JUQOtc" viewBox="0 0 24 24">
                            <path
                                d="M20.49 19l-5.73-5.73C15.53 12.2 16 10.91 16 9.5A6.5 6.5 0 1 0 9.5 16c1.41 0 2.7-.47 3.77-1.24L19 20.49 20.49 19zM5 9.5C5 7.01 7.01 5 9.5 5S14 7.01 14 9.5 11.99 14 9.5 14 5 11.99 5 9.5z">
                            </path>
                        </svg>
                    </div>
                    <input class="search" placeholder="Search">
                </div>
                <div class="group_3">
                    <div class="login "></div>
                </div>
            </div>
        </div>

        <div class="LAPP__header_bottom">
            <div class="bottom_left">
                <div class="group_4">
                    <div class="dropdown-countrycity">
                        <div id="btn_countrycity" class="" @mouseout="${this._handleCityBtnOut}"
                            @mouseover="${this._handleCityBtnHover}">
                            <img src='./static/1-i/map.svg' alt="">
                            Country / City
                            <i class="arrow down"></i>
                        </div>
                        <div class="dropdown-panel--btn_countrycity">
                            <div class="panel_theme">
                                <a href="#">Brésil</a>
                                <a href="#">Bolivie</a>
                                <a href="#">France</a>
                                <a href="#">Portugual</a>
                                <a href="#">Peru</a>
                            </div>
                        </div>
                    </div>
                    <div id="btn_topic" class="btn  ">Topic
                        <i class="arrow down"></i>
                    </div>
                    <div id="btn_date" class="btn  ">Mercredi 12 juin <i class="arrow down"></i></div>
                </div>
            </div>
            <div class="bottom_right">
                <div class="group_5">
                    <div id="" class="   ">
                        <div class="chip">
                            <img src="./static/1-i/avatar-woman.png" alt="Person" width="30" height="30">
                            Cinema
                        </div>
                    </div>
                    <div id="" class="   ">
                        <div class="chip">
                            <img src="./static/1-i/avatar-man.png" alt="Person" width="30" height="30">
                            Theatre
                            <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
                        </div>
                    </div>
                    <div id="" class="   ">
                        <div class="chip">
                            <img src="./static/1-i/avatar-man.png" alt="Person" width="30" height="30">
                            Litterature
                        </div>
                    </div>
                </div>
                <div class="group_6">
                </div>
            </div>
        </div>
    </div>









    <div class="LAPP__center_slot">
        <wc-page-layout3col pageView=${this.pageView}>
        </wc-page-layout3col>
    </div>









    <div class="LAPP__footer">
        <div class="LAPP__footer_grid">
            <div class="group_7">
                <div class="simple_flex group_9">
                    <div id="btn_distanceMinus" class="btn">-</div>
                    <div id="btn_distance" class="">Distance</div>
                    <div id="btn_distancePlus" class="btn">+</div>
                </div>
                <div class="simple_flex group_9">
                    <div id="btn_sortByTime" class="btn">Sort by time</div>
                    <div id="btn_sortByAge" class="btn">Sort by age</div>
                    <div id="btn_sortByRank" class="btn">Sort by rank</div>
                </div>
            </div>

            <div class="group_8">
                <div class="simple_flex group_9">
                    <div id="btn_zoomIn" class="btn">-</div>
                    <div id="btn_zoom">Zoom</div>
                    <div id="btn_zoomOut" class="btn">+</div>
                </div>
                <div class="simple_flex group_9">
                    <div id="btn_list" class="btn btn_yellow">List</div>
                    <div id="btn_map" class="btn btn_yellow">Map</div>
                    <div id="btn_card" class="btn btn_yellow theme-active">Card</div>
                </div>
                <div id="btn_1perLine" class="btn btn_yellow">1 per line</div>
            </div>
        </div>

    </div>

</div>`;
    } //render
    //.   ,ad8888ba,   ad88888ba   ad88888ba
    //.   d8"'    `"8b d8"     "8b d8"     "8b
    //.  d8'           Y8,         Y8,
    //.  88              `"""""8b,   `"""""8b,
    //.  Y8,                   `8b         `8b
    //.   Y8a.    .a8P Y8a     a8P Y8a     a8P
    //.    `"Y8888Y"'   "Y88888P"   "Y88888P"
    static get styles () {
        return css`:host {
--header-item-height: 50px;
--header-item-width : 80px;
--space             : 10px;
--panel-width       : 250px;
font-family         : 'Roboto', Arial, Helvetica, sans-serif;
font-weight         : 500;
}

::-webkit-scrollbar {
  width: 30px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: black;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background:red;
}

.LAPP {
width             : 100vw;
height            : 100vh;
display           : grid;
grid-template-rows: auto 1fr auto;
}
.LAPP__header {
border-bottom: 1px solid gainsboro;
display: flex;
flex-direction: column;
padding: 0 20px;
}
.LAPP__header_top,
.LAPP__header_bottom{
    height: 70px;
    overflow: hidden;
}
.LAPP__header_top{
display: flex;
align-items: center;
justify-content: center;
}
.LAPP__header_bottom{
display: flex;
align-items: center;

}
.top_right {
    flex: 1;
    display: flex;
}
.top_left {
    flex: 1;
    display: flex;
    align-items: center;

}
.bottom_right {
    flex: 1;
    display: flex;
}
.bottom_left {
    flex: 1;
    display: flex;
}
.LAPP__footer {

}
.LAPP__footer_grid  {
    background-color: whitesmoke;
display    : flex;
align-items: center;
padding    : 10px 50px;
height     : 50px;
border-top: 2px solid gainsboro;

}
.LAPP__center_slot {
overflow-y: scroll;
padding   : 0 0 0 0;
background: whitesmoke;
}
.group_1{

    width:100%;
}
#btn_countrycity
,.group_1
,.group_2
,.group_3
,.group_4
,.group_5
,.group_6{
    display:flex;
}
#btn_countrycity
{
    align-items: center;
}
.group_1 {
    align-items: center;
    justify-content: space-between;

}
.group_4 {
    align-items: center;
    align-content: center;
}
.group_2 {
    flex-grow: 4;
}
.group_2
,.group_4
,.group_5 {
    justify-content: center;
    flex: 1;
}
.group_3 {
    align-items: center;
}
.group_7, .group_8, .group_9 {
flex-grow: 1;
}
.group_7, .group_8{
display: flex;
}
#btn_countrycity img{
    margin-right: 5px;
}
#btn_countrycity:hover,
#btn_topic:hover,
#btn_date:hover{
    background: whitesmoke;
}
#btn_countrycity,
#btn_topic,
#btn_date{
    display: flex;
align-items: center;
width:200px;
margin-right: 20px;
box-sizing: border-box;
overflow  : hidden;
height    : 50px;
color        : black;
padding      : 8px 18px;
border-radius: 8px;
border       : 1px solid gainsboro;
font-size    : 14px;
cursor       : default;
}
.dropdown-countrycity{
    justify-self: start;
}
#btn_sortByAge,
#btn_sortByTime,
#btn_sortByRank,
#btn_list,
#btn_map,
#btn_card,
#btn_1perLine{
margin: 0 10px !important;
}
.btn_page_local  {
border-top-right-radius   : 10px !important;
border-bottom-right-radius: 10px  !important;
}
.btn_page_event {
border-top-left-radius   : 10px  !important;
border-bottom-left-radius: 10px  !important;
}
.btn_page_local a:hover,
.btn_page_event a:hover {
background-color: red;
color           : white !important;
}
.logo_img {
height      : calc(var(--header-item-height));
box-sizing  : border-box;
}
.login {
background   : whitesmoke;
border-radius: 50%;
height       : calc(var(--header-item-height) - 10px);
width        : calc(var(--header-item-height) - 10px);
}
.group_2{
height: 70px;
}
.group_2 {
display        : flex;
align-items    : center;
}
.search-icon {
margin-right: -35px;
z-index     : 1;
}
.search:focus {
background-color: white;
box-shadow      : 0 1px 3px 0 rgba(60,64,67,.30), 0 4px 8px 3px rgba(60,64,67,.15);
border          : none !important;
outline         : none !important;
font-weight: bold;
}
.search:hover {
border: 1px solid gray;
}
.search {
margin          : 10px 0;
border          : none;
height          : calc(var(--header-item-height));
width           : 100%;
max-width       : 450px;
padding         : 0 10px 0 50px;
font-size       : 1em;
box-sizing      : border-box;
border-radius   : 8px;
background-color: rgb(241, 243, 244);;
}
.search::placeholder {
color: rgb(154, 160, 166);
}
.search:-ms-input-placeholder {
color: gainsboro;
}
.search::-ms-input-placeholder {
color: gainsboro;
}
.line_separator-4 {
background: black;
height    : 2px;
width     : 100%;
}
.shadow-line-sep {
box-shadow: 0 1px 1px rgba(0,0,0,0.12),
0 2px 2px rgba(0,0,0,0.12),
0 4px 4px rgba(0,0,0,0.12),
0 8px 8px rgba(0,0,0,0.12),
0 16px 16px rgba(0,0,0,0.12);
}
.line_separator-4--reverse {
background: black;
height    : 2px;
width     : 100%;
box-shadow: 0 -1px 1px rgba(0,0,0,0.12),
0 -2px 2px rgba(0,0,0,0.12),
0 -4px 4px rgba(0,0,0,0.12),
0 -8px 8px rgba(0,0,0,0.12),
0 -16px 16px rgba(0,0,0,0.12);
}
.hidden {
visibility: hidden;
}
.visible {
visibility: visible;
}
.display_block {
display: block !important;
}
.arrow {
border      : solid black;
border-width: 0 3px 3px 0;
display     : inline-block;
padding     : 3px;
margin      : 0 5px 1px 15px;
}
.right {
transform        : rotate(-45deg);
-webkit-transform: rotate(-45deg);
}
.left {
transform        : rotate(135deg);
-webkit-transform: rotate(135deg);
}
.up {
transform        : rotate(-135deg);
-webkit-transform: rotate(-135deg);
}
.down {
transform        : rotate(45deg);
-webkit-transform: rotate(45deg);
}
.chip {
padding      : 0 25px;
height       : 40px;
border-radius: 25px;
display      : flex;
align-items  : center;
margin       : 0 5px;
border: 1px solid gainsboro;
}
.chip img {
margin       : 0 10px 0 -25px;
height       : 40px;
width        : 40px;
border-radius: 50%;
}
.closebtn {
padding-left: 10px;
color       : red;
font-weight : bold;
float       : right;
font-size   : 30px;
cursor      : pointer;
height      : 40px;
line-height : 40px;

}

.closebtn:hover {
color: #000;
}

.simple_flex {
display    : flex;
align-items: center;
}
#btn_zoom, #btn_distance {
margin: 10px;
}
.dropdown-countrycity:hover .dropdown-panel--btn_countrycity
{
display: block;
}
.dropdown-panel--btn_countrycity{
display : none;
z-index : 1;
position: absolute;
top     : 140px;
left    : 50px;
width   : var(--panel-width);
bottom  : 0px;
padding : 10px;
border: 1px solid red;
}
.panel_theme {
    box-shadow: 0 1px 2px rgba(60,64,67, 0.3), 0 1px 3px 1px rgba(60,64,67, 0.15);
    z-index: 1;
background    : white;
position      : absolute;
top           : 0; left : 0;right: 0;
padding       : 10px 0px 10px 0px;

display       : flex;
flex-direction: column;

}
.panel_theme a{
padding        : 0 15px;
height         : 50px;
line-height    : 50px;
color          : black;
text-decoration: none;
font-size      : 16px;
}
.panel_theme a:hover{
background: whitesmoke;
}

`;
    }
} //end-class
customElements.define('app-tin', WcAppTin);
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

//  <link href = "https://fonts.googleapis.com/icon?family=Material+Icons" rel                      = "stylesheet"></link>
// <div class = "line_separator-2"></div>
// <i class="material-icons">search</i>
// box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

// _handleCountryBtnHover(e){
//     // console.log("ok country");
//     this.shadowRoot.querySelector(".LAPP__center_slot__header_sub_panel_left")
//     .classList.add("visible");
// }
// _handleCountryBtnOut(e){
//     // console.log("ok city");
//     this.shadowRoot.querySelector(".LAPP__center_slot__header_sub_panel_left")
//     .classList.remove("visible");
// }

// _handleCityBtnHover(e){
//     console.log("ok city");
//     this.shadowRoot.querySelector(".dropdown-panel--btn_country")
//     .classList.add("display_block");
// }
// _handleCityBtnOut(e){
//     // console.log("ok city");
//     this.shadowRoot.querySelector(".LAPP__center_slot__header_sub_panel_right")
//     .classList.remove("visible");
// }

// height    : calc(100vh - 204px);
//{/* <div class="line_separator-4"></div> */}
// <img id = "offline" src = "/offline.svg"></img>
// <div class = "line_separator"></div>

// <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

// BTN SHADOW :
// box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);

// grid-gap: 1rem;
// grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));

//.- 88888888ba  88888888888 888b      88 88888888ba,   88888888888 88888888ba
//.- 88      "8b 88          8888b     88 88      `"8b  88          88      "8b
//.- 88      ,8P 88          88 `8b    88 88        `8b 88          88      ,8P
//*- 88aaaaaa8P' 88aaaaa     88  `8b   88 88         88 88aaaaa     88aaaaaa8P'
//*- 88""""88'   88"""""     88   `8b  88 88         88 88"""""     88""""88'
//*- 88    `8b   88          88    `8b 88 88         8P 88          88    `8b
//!- 88     `8b  88          88     `8888 88      .a8P  88          88     `8b
//!- 88      `8b 88888888888 88      `888 88888888Y"'   88888888888 88      `8b
