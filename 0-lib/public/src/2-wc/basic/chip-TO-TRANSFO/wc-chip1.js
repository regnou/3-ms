import { LitElement, html } from 'lit-element';
// import {MDCTextField} from '@material/textfield';

class AxelChip1 extends LitElement {

  constructor() {
    super();
    this.data = [];

    this.data = [
      'eating',
      'sleeping',
      'trecking/agencies',
      'sightseeing',
      'eating',
      'entertainment',
      'excursions',
      'transport',
      'health',
      'leaving',
      'shopping',
      'exercices',
      'ARTICLES',
    ];

  }
  static get properties() {
    return {
      data: { type: Array },
    };
  }

  //°-  _______  _______  _        ______   _______  _______
  //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
  //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
  //!- | (____)|| (__    |   \ | || |   ) || (__    | (____)|
  //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
  //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
  //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
  //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

  firstUpdated() {
    // TEXT
    // const elm = this.shadowRoot.querySelector('.mdc-text-field');
    // mdc.textField.MDCTextField.attachTo(elm);

    // CHIP
    // const elm = this.shadowRoot.querySelector('.mdc-chip-set');
    // mdc.chips.MDCChipSet.attachTo(elm);
    const elm_arr = [...this.shadowRoot.querySelectorAll('.mdc-chip-set')];
    elm_arr.map(el => {
      // eslint-disable-next-line no-undef
      mdc.chips.MDCChipSet.attachTo(el);
    });
  }

  render() {
    console.log('rendering <axel-chip> ...');
    //*-----------------------------------------------------
    //*-
    //*-----------------------------------------------------
    const tplChip = (title) => {
      return html`


  <div class="mdc-chip mdc-chip--selected" role="row">
    <div class="mdc-chip__ripple"></div>
    <span class="mdc-chip__checkmark">
      <svg class="mdc-chip__checkmark-svg" viewBox="-2 -3 30 30">
        <path class="mdc-chip__checkmark-path" fill="none" stroke="black" d="M1.73,12.91 8.1,19.28 22.79,4.59" />
      </svg>
    </span>
    <span role="gridcell">
      <span role="checkbox" tabindex="0" aria-checked="false" class="mdc-chip__primary-action">
        <span class="mdc-chip__text">${title}</span>
      </span>
    </span>
  </div>

`
    }; //tplChip

    //*-----------------------------------------------------
    //* <link href="./chip1.css" rel="stylesheet">
    //*-----------------------------------------------------
    return html`

<link rel="stylesheet" href="https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css">

<div class="mdc-chip-set mdc-chip-set--filter" role="grid">
${this.data.map(e => {
  return tplChip(e);
})}

</div>

`;
  } //render

// W3C - chip
// <div class="chip">
//   <img src="../../static/i/avatar-woman.png" alt="Person" width="96" height="96">
//   ${e}
//   <span class="closebtn" onclick="this.parentElement.style.display='none'">&times;</span>
// </div>
// <div class="chip">
//   <img src="../../static/i/avatar-man.png" alt="Person" width="96" height="96">
//   ${e}
// </div>

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

customElements.define('axel-g-chip-1', AxelChip1);
