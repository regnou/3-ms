
import { LitElement, html, css } from 'lit-element';

class AxelContent1 extends LitElement {

  constructor() {
    super();
    this.id = "";
    this.data = [];
  }
  static get properties() {
    return {
      id: { type: String },
      data: { type: Array },
    };
  }
  static get styles() {
    return css`
    .block-content {
        width: 100%;
        height:  100%;
        box-shadow: inset 0px 0px 15px #808080;
    }
    `;
  }

  firstUpdated() {
    // const elm_arr = [...this.shadowRoot.querySelectorAll('.mdc-chip-set')];
    // elm_arr.map(el => {
    //   mdc.chips.MDCChipSet.attachTo(el);
    // });
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
    console.log('rendering <axel-content-1> ...');
    //*-----------------------------------------------------
    //*- init
    //*-----------------------------------------------------
    // const init = () => {}; //init


    //*-----------------------------------------------------
    //* <link href = "./xxx.css" rel = "stylesheet">
    //*-----------------------------------------------------
    return html`

    <link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">

  <div style="width:500px; height: 300px; padding: 50px">
      <div class="block-content"></div>
    </div>
    `;
  } //render

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
} //end-class

customElements.define('axel-g-content-1', AxelContent1);
