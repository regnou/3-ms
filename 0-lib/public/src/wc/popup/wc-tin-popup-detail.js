
// (async () => { })()

import { LitElement, html, css } from 'lit-element';
// import './1-domain/2-wc-list'


class WcTinPopupDetail extends LitElement {
    constructor() {
        super();
        this.data = null;
        // this._00country = "";
        // this._01city = "";
        // this._02name = "";
        // this._03age = "";
        // this._04phone = "";
        // this._04phone_raw = "";
        // this._05img_tinder_src = "";
        // this._06status_tinder = "";
        // this._07tinder_account = "";
        // this._07instagram_account = "";
        // this._07unofAppTinder_link = "";
        // this._07unofAppTinder_USER_link = "";
        // this._08distance = "";
        // this._11chat_tinder_all = "";
    }
    static get properties () {
        return {
            data                : { type: Object }
            // _00country                : { type: String },
            // _01city                   : { type: String },
            // _02name                   : { type: String },
            // _03age                    : { type: String },
            // _04phone                  : { type: String },
            // _04phone_raw              : { type: String },
            // _05img_tinder_src         : { type: String },
            // _06status_tinder          : { type: String },
            // _07tinder_account         : { type: String },
            // _07instagram_account      : { type: String },
            // _07unofAppTinder_link     : { type: String },
            // _07unofAppTinder_USER_link: { type: String },
            // _08distance               : { type: String },
            // _11chat_tinder_all        : { type: Array },    //!!!
        };
    }
    firstUpdated () {
        this.addEventListener('x-event-handleCardClicked', this._handleEventCardClicked);

    }
    _handleEventCardClicked (e) {
      console.log("top cool");
    }

    _handleCardDetailCloseClicked () {
        console.log("<< click >> on :: close-card-detail");
        // const src = e.target.src;
        let event = new CustomEvent('x-event-handleCardDetailCloseClicked', {
            detail: {
                message: 'Something important happened',
                // src: src
            },
            bubbles : true,
            composed: true
        });
        this.dispatchEvent(event);
    }

//*   88        88 888888888888 88b           d88 88
//*   88        88      88      888b         d888 88
//*   88        88      88      88`8b       d8'88 88
//*   88aaaaaaaa88      88      88 `8b     d8' 88 88
//*   88""""""""88      88      88  `8b   d8'  88 88
//*   88        88      88      88   `8b d8'   88 88
//*   88        88      88      88    `888'    88 88
//*   88        88      88      88     `8'     88 88888888888
    render () {
        console.log('rendering <wc-card-detail-contact> ...');
        return html`<div class="layout_card_detail">

<header class = "layout-header">
    <div    class = "btn-close" @click = "${this._handleCardDetailCloseClicked}"></div>
</header>

<main class = "layer-main">

    <div  class = "layer-1">
        <img  class = "layer-1__img" src=${this.data._05img_tinder_src}></img>
        <div  class = "layer-1__content">
            <div class = "font-name">${this.data._02name}</div>
            <div class = "font-country" >🇧🇷${this.data._00country}</div>
            <div class = "font-city">${this.data._01city}</div>
            <div class = "font-age">${this.data._03age} yo</div>
            <div class = "font-phone">${this.data._04phone}</div>
        </div>
    </div>
    <div class = "layer-2 hidden">
        <img class = "layer-2__img" ></img>
        <div class = "layer-2__content "></div>
    </div>
</main>

<footer class = "layer-footer ">
    <div    class = "btn-ok"></div>
</footer>

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
--color-theme-clickable: #d3d7ed;
}
.hidden {
    display: none!important;
}



.font-name {
    font-size: 40px !important;
    font-weight: bold;
}
.font-country {
}
.font-city {
}

.font-phone {
}
.font-age {
}


.layout_card_detail {
    border-radius: 30px;
box-sizing        : border-box;
display           : grid;
grid-template-rows: auto 1fr auto;
padding: 0 10px;
background: white;
box-shadow: rgba(0, 0, 0, 0.24) 0px 12px 15px 0px;
}

.line_shadow {
    box-shadow: 0 1px 1px rgba(0,0,0,0.12),
              0 2px 2px rgba(0,0,0,0.12),
              0 4px 4px rgba(0,0,0,0.12),
              0 8px 8px rgba(0,0,0,0.12),
              0 16px 16px rgba(0,0,0,0.12);
}

.layout-header {
float  : right;
padding: 10px 0;
}
.layer-main {
display       : flex;
flex-direction: column;
}
.layer-footer {
display    : grid;
place-items: center;
padding: 10px 0;
}
.layer-1 {
flex-grow            : 2;
display              : grid;
grid-template-columns: 200px 1fr;

border-top: 1px solid gainsboro;
border-bottom: 1px solid gainsboro;
border-right: 1px solid gainsboro;
}
.layer-2 {
flex-grow            : 1;
display              : grid;
grid-template-columns: 200px 1fr;
grid-gap             : 16px;
margin               : 10px 0;
}
.btn-ok {
    border-radius: 20px;
background: #FFE599;
width     : 100px;
height    : 50px;
}
.btn-close {
background: black;
width     : 50px;
height    : 50px;
float     : right;
border-radius: 50px;
}
.layer-1__img {
background: gray;
width       : 100%;
object-fit: cover;

}
.layer-1__content {
    padding: 10px;
}
.layer-2__img {
align-self: start;
width     : 200px;
height    : 130px;
background: gray;
}
.layer-2__content {
height    : 130px;
max-width : 600px;
background: white;
border    : 1px solid gainsboro;
}
`;
    }

} //end-class


customElements.define('wc-tin-popup-detail', WcTinPopupDetail);
