// (async () => {
//   //console.log("%c 😎 JoJo ", "background: #222; color: yellow; font-size:32px");
// })()

//.- I8,        8        ,8I 88 88888888ba,     ,ad8888ba,  88888888888 888888888888
//.- `8b       d8b       d8' 88 88      `"8b   d8"'    `"8b 88               88
//.-  "8,     ,8"8,     ,8"  88 88        `8b d8'           88               88
//*-   Y8     8P Y8     8P   88 88         88 88            88aaaaa          88
//*-   `8b   d8' `8b   d8'   88 88         88 88      88888 88"""""          88
//*-    `8a a8'   `8a a8'    88 88         8P Y8,        88 88               88
//!-     `8a8'     `8a8'     88 88      .a8P   Y8a.    .a88 88               88
//!-      `8'       `8'      88 88888888Y"'     `"Y88888P"  88888888888      88

// import { LitElement, html, css } from 'lit-element';
import { LitElement, html } from 'lit-element';

class AxelTrailer1 extends LitElement {
  constructor() {
    super();
    this.img_arr = [];
    this.isCarouselOn = false;
  }

  static get properties() {
    return {
      img_arr: { type: Array }, //°observed attribute name is img_arr
      isCarouselOn: { type: Boolean }
    };
  }

  // firstUpdated(changedProperties) {
  firstUpdated() {
    // this.addEventListener('click', this.siteHandler);
    if (this.isCarouselOn)
      this.addEventListener('x-event-imgCarouselChanged', this.handleXeventImgCarouselChanged);
  }

  // @x-event-imgCarouselChanged=${this.handleXeventImgCarouselChanged}
  handleXeventImgCarouselChanged(e) {
    const src = e.detail.src;

    const target = [...this.shadowRoot.querySelectorAll('.trailer-banner-img')]
      .find(e => e.src === src)
    target.scrollIntoView({ block: 'end', behavior: 'smooth' });

    // const target = this.shadowRoot.getElementById(src)
    // const offsetLeft = target.offsetLeft;
    // const scrollbar = this.shadowRoot.getElementById('trailer')
    // scrollbar.scrollLeft = offsetLeft;
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
    return html`
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
<link href="../../static/norm.css" rel="stylesheet"></link>
<link rel   = "stylesheet" href = "./trailer1.css">

<div  class = "trailer">
    ${this.img_arr.map(i =>
      html`<div class="trailer-banner-div">
          <img class="trailer-banner-img" src=${i} alt="" /> </div>`)}
</div>

<slot></slot>
`;
  } //render

} //end-class
customElements.define('axel-g-trailer1', AxelTrailer1);
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
