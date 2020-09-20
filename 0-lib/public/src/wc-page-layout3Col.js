
// (async () => { })()
import {
    LitElement, html, css
} from 'lit-element';
import './wc-list.js'
import './wc/popup/wc-tin-popup-detail.js'

class WcPageLayout3Col extends LitElement {

    render () {
        console.log('rendering tin::<wc-page-layout3col> ...');

        return html`<div class="layout_3col">
        <div class = "slot-layout_list__left    ">
        ${!this.data_detail
                ? html`<h4>Loading... == Card-detail ==</h4>`
                : html`<wc-card-detail-contact .data=${this.data_detail}></wc-card-detail-contact>`
            }
        </div>
        <div class = "slot-layout_list__center">
            <wc-list view=${this.pageView}></wc-list>
        </div>
        <div class = "slot-layout_list__right"></div>
    </div>
</div>`;
    } //render

    constructor() {
        super();
        this.data_detail = null;
        this.cardRefTmp = null;
        this.pageView="";

    }
    static get properties () {
        return {
            data_detail: { type: Object },
            cardRefTmp: { type: Object },
            pageView: {type: String}
        };
    }
    firstUpdated () {
        this.addEventListener('x-event-handleCardClicked', this._handleEventCardClicked);
        this.addEventListener('x-event-handleCardDetailCloseClicked', this._handleEventCardDetailCloseClicked);
    }
    //     {
    //         _00country                 : "Country",
    //         _01city                    : "City",
    //         _02name                    : "Josepha Bento",
    //         _03age                     : "24",
    //         _04phone                   : "+xx 00 00 00 00 00",
    //         _04phone_raw               : "",
    //         _05img_tinder_src          : "static/1-i/0-CRM/contact-tin.jpg",
    //         _06status_tinder           : "",
    //         _07tinder_account          : "",
    //         _07instagram_account       : "",
    //         _07unofAppTinder_link      : "",
    //         _07unofAppTinder_USER_link : "",
    //         _08distance                : "",
    //         _11chat_tinder_all         : ""
    // }
    // user click a card  -- so this happen:
    _handleEventCardClicked (e) {
        console.log("top cool 1");
        console.log("Exe order : show wc-card-detail-contact");

        // const tmp = this.shadowRoot.querySelector(".slot-layout_list__left");

        // const el = document.createElement("<wc-card-detail-contact .data=${e.data}></wc-card-detail-contact>");
        // this.shadowRoot.querySelector(".slot-layout_list__left")
        // .appendChild(el.content.cloneNode(true));

        this.data_detail = e.detail.data;

        this.shadowRoot.querySelector(".slot-layout_list__left")
            .classList.add("width-half");

        this.shadowRoot.querySelector(".slot-layout_list__center")
            .classList.add("move-right");

        // remeber the card that was clicked
        this.cardRefTmp = e.detail.currentTarget;

        // bind data



    }
    // user close the card detail -- so  his happen:
    _handleEventCardDetailCloseClicked (e) {
        console.log("Exe order : hide wc-card-detail-contact");

        this.shadowRoot.querySelector(".slot-layout_list__left")
            .classList.remove("width-half");
        this.shadowRoot.querySelector(".slot-layout_list__center")
            .classList.remove("move-right");
        // and
        this.cardRefTmp.classList.remove("active");

        // let event = new CustomEvent('x-event-handleCardDetailCloseClickedForCard', {
        //     detail: {
        //         message: 'Something important happened',
        //         // src: src
        //     },
        //     bubbles : true,
        //     composed: true
        // });
        // this.dispatchEvent(event);
        // this.shadowRoot.querySelector(".layer-card")
        // .classList.remove("active");
    }

    ///   ,ad8888ba,   ad88888ba   ad88888ba
    ///   d8"'    `"8b d8"     "8b d8"     "8b
    ///  d8'           Y8,         Y8,
    ///  88            `Y8aaaaa,   `Y8aaaaa,
    ///  88              `"""""8b,   `"""""8b,
    ///  Y8,                   `8b         `8b
    ///   Y8a.    .a8P Y8a     a8P Y8a     a8P
    ///    `"Y8888Y"'   "Y88888P"   "Y88888P"

    static get styles () {
        return css`
:host {
--space: 10px;
}
.layout_3col {

}
.slot-layout_list__center,
.slot-layout_list__left,
.slot-layout_list__right {

}
.slot-layout_list__center {
    transition: width .1s;
    width: 100%;
    float: right;
    border-left: 1px solid gainsboro;
    border-right: 1px solid gainsboro;
    background: white;
    box-shadow: 0 8px 10px -5px rgba(0,0,0,.2), 0 16px 24px 2px rgba(0,0,0,.14), 0 6px 30px 5px rgba(0,0,0,.12);

}
.slot-layout_list__left  {
    background: #b9b9b9;
    display: grid;
    place-items: center;

transition: width .1s;
width: 0;
height: 0;
overflow: hidden;
float: left;

margin-bottom: 70px;
}
.move-right {
    width: 50%;
}
.width-half {
    position: fixed;
    height: calc(100% - 212px);
    width: calc(50% - 20px);

}





`;
    }
} //end-class
customElements.define('wc-page-layout3col', WcPageLayout3Col);
