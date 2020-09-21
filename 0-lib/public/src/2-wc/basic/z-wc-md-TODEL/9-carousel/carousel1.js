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

import { LitElement, html } from 'lit-element';

class AxelCarousel1 extends LitElement {
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

  //°-  _______  _______  _        ______   _______  _______
  //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
  //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
  //!- | (____)|| (__    |   \ | || |  x ) || (__    | (____)|
  //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
  //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
  //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
  //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

  render() {
    console.log('[carousel] [render] start...');
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

} //end-class
customElements.define('axel-g-carousel1', AxelCarousel1);

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
