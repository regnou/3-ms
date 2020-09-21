import { LitElement, html, css } from 'lit-element';
// import './1-domain/2-wc-list'

class WcCategory extends LitElement {
    constructor() {
        super();
        // "Colombia / Barranquilla"
        // Cinema mercredi 21 juin
        this.title1 = "";
        this.title2 = "";
        this.title3 = "";
    }
    static get properties () {
        return {
            title1: { type: String },
            title2: { type: String },
            title3: { type: String }
        };
    }
    firstUpdated () {
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
        console.log('rendering <wc-category> ...');
        // const init = () => {}; //init
        // <img id = "offline" src = "/offline.svg"></img>
        // <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        // <div class="info">></div>

        // <div class="layer-category stickyNo">

        return html`
    <div class="layer-category sticky">
        <div class="info font_google">${this.title1}</div>
        <div class="info font_google">${this.title2}</div>
        <div class="info font_google">${this.title3}</div>
    </div>
`;
    } //render

    // gris clair cat = background: #efefef;
    // border: 1px solid gainsboro;
    // box-shadow: 0 1px 1px rgba(0,0,0,0.12),
    // 0 2px 2px rgba(0,0,0,0.12),
    // 0 4px 4px rgba(0,0,0,0.12),
    // 0 8px 8px rgba(0,0,0,0.12),
    // 0 16px 16px rgba(0,0,0,0.12);

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
--space: 10px;
--color-theme-clickable: #d3d7ed;
}
.layer-category {
height    : 60px;
padding: 0 30px   ;
margin: 10px 0px 0 0px   ;
display: flex;
align-items: center;
border-top: 10px solid white;
background-color: white;
border-bottom: 1px solid gainsboro;
}
.info {
    margin-right: var(--space);
}
.font_google {
font-size: 18px;
color: #202124;
}
.font_bold {
    font-weight:bold;
}
.font_red {
    color:red;
}
.font_gray {
    color: darkgray;
}
.sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 1;
  }
.shadow {
  box-shadow: 0 1px 1px rgba(0,0,0,0.12),
0 2px 2px rgba(0,0,0,0.12),
0 4px 4px rgba(0,0,0,0.12),
0 8px 8px rgba(0,0,0,0.12),
0 16px 16px rgba(0,0,0,0.12);
}
`;
}

} //end-class
customElements.define('wc-category', WcCategory);
