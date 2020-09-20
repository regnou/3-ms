import {
    LitElement, html, css
} from 'lit-element';

class WcTinCard extends LitElement {
    constructor() {
        super();
        this._00country = "";
        this._01city = "";
        this._02name = "";
        this._03age = "";
        this._04phone = "";
        this._04phone_raw = "";
        this._05img_tinder_src = "";
        this._06status_tinder = "";
        this._07tinder_account = "";
        this._07instagram_account = "";
        this._07unofAppTinder_link = "";
        this._07unofAppTinder_USER_link = "";
        this._08distance = "";
        this._11chat_tinder_all = "";
    }
    //------------------------------------------------------
    static get properties () {
        return {
            db: { type: Object },
            _00country: { type: String },
            _01city: { type: String },
            _02name: { type: String },
            _03age: { type: String },
            _04phone: { type: String },
            _04phone_raw: { type: String },
            _05img_tinder_src: { type: String },
            _06status_tinder: { type: String },
            _07tinder_account: { type: String },
            _07instagram_account: { type: String },
            _07unofAppTinder_link: { type: String },
            _07unofAppTinder_USER_link: { type: String },
            _08distance: { type: String },
            _11chat_tinder_all: { type: Array },    //!!!
        };
    }
    firstUpdated () {
        // this.addEventListener('x-event-handleCardDetailCloseClickedForCard', this._handleEventCardDetailClicked);
    }
    _handleCardClicked (e) {
        console.log("<< click >> on :: card");
        const currentTarget = e.currentTarget;
        let event = new CustomEvent('x-event-handleCardClicked', {
            detail: {
                message: 'Something important happened',
                currentTarget: currentTarget,
                data: {
                      _00country : this._00country        ,
                      _01city : this._01city           ,
                      _02name : this._02name           ,
                      _03age : this._03age            ,
                      _04phone : this._04phone          ,
                      _04phone_raw : this._04phone_raw      ,
                      _05img_tinder_src : this._05img_tinder_src ,
                      _06status_tinder : this._06status_tinder  ,
                      _07tinder_account : this._07tinder_account ,
                      _07instagram_account : this._07instagram_account       ,
                      _07unofAppTinder_link : this._07unofAppTinder_link      ,
                      _07unofAppTinder_USER_link : this._07unofAppTinder_USER_link ,
                      _08distance : this._08distance                ,
                      _11chat_tinder_all : this._11chat_tinder_all
                }
            },
            bubbles : true,
            composed: true
        });
        this.dispatchEvent(event);
        // and
        this.shadowRoot.querySelector(".layout_card")
            .classList.add("active");
    }
    //*   88        88 888888888888 88b           d88 88
    //*   88        88      88      888b         d888 88
    //*   88        88      88      88`8b       d8'88 88
    //*   88aaaaaaaa88      88      88 `8b     d8' 88 88
    //*   88""""""""88      88      88  `8b   d8'  88 88
    //*   88        88      88      88   `8b d8'   88 88
    //*   88        88      88      88    `888'    88 88
    //*   88        88      88      88     `8'     88 88888888888
    //--------------------------------------------------------
    //RENDER STATE
    //--------------------------------------------------------
    // <a href="${this._05img_tinder_src}" class="card-img-tin-link" target="blank"></a>
    // {/* <div class="unik-name">
    //        ${this._00a_unique_name.substring(0, 15)}
    //            </div>
    //            <div class="tooltipText">
    //                ${this._00a_unique_name}
    //            </div> */}

    // <div class="font-distance">${this._08distance + ' km [' + this._07tinder_account + ']'}</div>
    // <div class="font-age">${this._03age + ' yo'}</div>
    // <div class="font-phone">${this._04phone} ${this._04phone_raw}</div>
    // ${this._07instagram_account !== ""
    // ? html`<a href="${this._07instagram_account}" class="card-insta-link" target="blank"></a>`
    // : html``}
    // ${this._07instagram_account !== ""
    // ? html`<a href="${this._07unofAppTinder_USER_link}" class="card-insta-link" target="blank"></a>`
    // : html``}
    // <div>${this._06status_tinder}</div>

    render () {
        console.log('rendering <wc-card-tin> ...');
        return html`

<div class=" layout_card mdc-elevation--z1 mdc-elevation--z24" @click = "${this._handleCardClicked}" >
<img src="${this._05img_tinder_src}" alt="" class="card__img"></img>
<div     class  = "card__content">
    <div class="font-name">${this._02name}</div>
    <div class="font-country">${this._00country}</div>
    <div class="font-city">${this._01city} 🇧🇷 </div>
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
    --card-img-height    : 250px;
--border-radius-card: 3px;
--card-content-height: 250px;
}


.layout_card {
display       : flex;
flex-direction: column;
background    : white;
border-radius: var(--border-radius-card);
}
.layout_card:hover .card__content{
background: whitesmoke;
}
.layout_card:hover .card__img {
opacity: 0.8;
}
.layout_card:hover.mdc-elevation--z24 {
-webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 5px 8px 0 rgba(0,0,0,.14), 0 1px 14px 0 rgba(0,0,0,.12);
}
.mdc-elevation--z1 {
-webkit-box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}


.card__img {
height: var(--card-img-height);
background: #A3A3A3;
border-top-left-radius:var(--border-radius-card);
border-top-right-radius: var(--border-radius-card);
}
.active .card__img{
background: black !important;
}
.card__content {
max-height    : var(--card-content-height);
display: grid;
grid-gap: 0px;
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));

flex-direction: column;
justify-content: center;
padding: 20px;
overflow: hidden;
}
.layout_card.active {

}

.font-name {
    font-size: 14px;
    margin: 0;
}
.font-city {
    margin: 10px 0 0 0 ;
}
.font-country {
margin: 5px 0;
}
.font-country {
font-size: 20px;
font-weight: bold;
}
.font-city {
font-size: 14px;
color: darkgray;
}


`;
    }
} //end-class
customElements.define('wc-tin-card', WcTinCard);


//------------------------------------------------------
//this.mock(); //debug
// mock() {
//     const JDD =
//     {
//         "_00country"                : "br_amazonia",
//         "_01city"                   : "sll",
//         "_02name"                   : "Karliani Pimenta",
//         "_03age"                    : "26",
//         "_04phone"                  : "",
//         "_04phone_raw"              : "",
//         "_05img_tinder_src"         : "https://images-ssl.gotinder.com/5ea4471214dc9301000b614b/original_d8a9665e-4b13-4597-8ef6-ee1c6cc7297e.jpeg",
//         "_06status_tinder"          : "Moça do sorriso fácil 🌸 %%% Apaixonada pela família ♥️ %%% Deus meu Guia 🙏 %%%  %%% ",
//         "_07instagram_account"      : "",
//         "_07unofAppTinder_link"     : "http://localhost:3005/matches/5c8e8f2bf0956f11007a832c5ea4471214dc9301000b614b",
//         "_07unofAppTinder_USER_link": "http://localhost:3005/matches/5c8e8f2bf0956f11007a832c5ea4471214dc9301000b614b",
//         "_08distance"               : "",
//         "_11chat_tinder_all"        : [
//             "🌎Olá, em que cidade você esta ?\n",
//             "Oi\n",
//             "Boa noite\n",
//             "Falo de são Luís\n",
//             "que gostosa\n",
//             "Ham\n"
//         ]
//     };
//     // const JDD_o = JSON.parse(JDD_s);
//     this.set(JDD)
// }
//------------------------------------------------------
// set(data) {
//     this._00country                 = data._00country;
//     this._01city                    = data._01city
//     this._02name                    = data._02name
//     this._03age                     = data._03age
//     this._04phone                   = data._04phone
//     this._04phone_raw               = data._04phone_raw
//     this._05img_tinder_src          = data._05img_tinder_src
//     this._06status_tinder           = data._06status_tinder

//     this._07tinder_account           = data._07tinder_account

//     this._07instagram_account       = data._07instagram_account
//     this._07unofAppTinder_link      = data._07unofAppTinder_link
//     this._07unofAppTinder_USER_link = data._07unofAppTinder_USER_link
//     this._08distance                = data._08distance
//     this._11chat_tinder_all         = data._11chat_tinder_all

//     // this._00a_unique_name = unikName
// }
