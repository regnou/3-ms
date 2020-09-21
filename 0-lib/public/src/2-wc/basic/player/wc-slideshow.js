//.- I8,        8        ,8I 88 88888888ba,     ,ad8888ba,  88888888888 888888888888
//.- `8b       d8b       d8' 88 88      `"8b   d8"'    `"8b 88               88
//.-  "8,     ,8"8,     ,8"  88 88        `8b d8'           88               88
//*-   Y8     8P Y8     8P   88 88         88 88            88aaaaa          88
//*-   `8b   d8' `8b   d8'   88 88         88 88      88888 88"""""          88
//*-    `8a a8'   `8a a8'    88 88         8P Y8,        88 88               88
//!-     `8a8'     `8a8'     88 88      .a8P   Y8a.    .a88 88               88
//!-      `8'       `8'      88 88888888Y"'     `"Y88888P"  88888888888      88

import { LitElement, html, css } from 'lit-element';

// import { jdd as jddTrailerCulture } from '../../0-static/db/config/0-config-vitrine'
import './wc-trailer'
import './wc-carousel'

class WcSlideshow extends LitElement {

  constructor() {
    super();
    this.data_carousel = [];
    this.data_trailer = [];
    this.data_carousel_alt = [];
    this.slideIndex = 1;

    // USELESS now
    // const db_map = new Map();  //°-TODO - remplacer par import dynamique ???
    // db_map.set("culture", jddTrailerCulture)
    // const db_json = db_map.get("culture");
    // this.img_arr = db_json.imgTrailer_arr;
  }

  static get properties () {
    return {
      slideIndex: { type: Number }, //°observed attribute name is img_arr
      data_trailer: { type: Array },
      data_carousel: { type: Array },
      data_carousel_alt: { type: Array }
    };
  }

  firstUpdated () {
    this._showSlides(this.slideIndex);
  }
  // Next/previous controls
  _plusSlides (n) {
    this._showSlides(this.slideIndex += n);
  }
  // Thumbnail image controls
  _handleCurrentSlide (n) {
    this._showSlides(this.slideIndex = n);
  }
  _showSlides (n) {
    // const elm_arr = [...this.shadowRoot.querySelectorAll('.mdc-chip-set')];
    // elm_arr.map(el => {
    //   mdc.chips.MDCChipSet.attachTo(el);
    // });
    const slides = this.shadowRoot.querySelectorAll(".mySlides"); // var slides = this.shadowRoot.getElementsByClassName("mySlides");
    const dots = this.shadowRoot.querySelectorAll(".demo"); // var dots = this.shadowRoot.getElementsByClassName("demo");
    const captionText = this.shadowRoot.querySelector("#caption");
    if (n > slides.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
    captionText.innerHTML = dots[this.slideIndex - 1].alt;
    // captionText.innerHTML = dots[this.slideIndex - 1].alt;
  }

  render () {

    console.log('rendering <wc-slideshow (w3c)> ...');

    const init_trailer = () => {
      const itemTemplates = [];
      this.data_trailer.map((url, idx) =>
        itemTemplates.push(html`
              <div class="mySlides">
                <div class="numbertext">${idx} / 6</div>
                <img src=${url} style="width:100%">
              </div> `));
      return html`${itemTemplates}`
    }; //* init

    //@click="${() => this._handleCurrentSlide(idx)}" alt=${this.data_carousel_alt[idx]}>
    //je met idx + 1 car je veux eviter le bug
    const init_carousel = () => {
      const itemTemplates = [];
      this.data_carousel.map((url, idx) =>
        itemTemplates.push(html`

      <div class="column">
            <img class="demo cursor" src=${url} style="width:100%"
        @click="${() => this._handleCurrentSlide(idx)}" alt=${this.data_carousel_alt[idx]}>
      </div>

              `));
      return html`${itemTemplates}`
    }; //* init

    // @MICKAEL : JIRA1 : bug caption, mauvais numero
    return html`<div class="container">
  <div class="caption-container">
    <p id="caption"></p>
  </div>
  ${init_trailer()}

  <a class="prev" @click="${() => this._plusSlides(-1)}">&#10094;</a>
  <a class="next" @click="${() => this._plusSlides(1)}">&#10095;</a>
  <div class="row">
    ${init_carousel()}
  </div>

</div>
</div>`;
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

}

.hidden {
  display: none;
}

    * {
        box-sizing: border-box;
      }
      .container {
        position: relative;

      }
      .mySlides {
        display: none;
      }
      .cursor {
        cursor: pointer;
      }
      .prev,
      .next {
        cursor: pointer;
        position: absolute;
        top: 40%;
        width: auto;
        padding: 16px;
        margin-top: -50px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;
      }
      .next {
        right: 0;
        border-radius: 3px 0 0 3px;
      }
      .prev:hover,
      .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
      }
      .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
      }
      .caption-container {
        text-align: center;
        background-color: #222;
        padding: 2px 16px;
        color: white;
      }
      .row:after {
        content: "";
        display: table;
        clear: both;
      }
      .column {
        float: left;
        width: 16.66%;
      }
      .demo {
        opacity: 0.6;
      }
      .active,
      .demo:hover {
        opacity: 1;
      }
      `;
}


} //end-class
customElements.define('wc-slideshow', WcSlideshow);
