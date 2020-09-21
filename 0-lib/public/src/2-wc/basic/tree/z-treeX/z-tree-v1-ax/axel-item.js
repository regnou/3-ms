(async () => {})()
// import { LitElement, html, css, unsafeCSS } from 'lit-element';
import { LitElement, html} from 'lit-element';
import './axel-item.js';
// import { classMap } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';
// import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class AxelItem extends LitElement {
  constructor() {
    super();
    console.log('constructing axel-item ...');
    this.name           = "";
    this.css_marginLeft = "";
    this.css_bg         = "";
    this.css_color      = "";
    this.css_color      = "";
    this.arr_child      = [];
  }
  static get properties() {
    return {
      arr_child: { type: Array },
      name: { type: String },
      css_marginLeft: { type: String },
      css_bg: { type: String },
      css_color: { type: String },
    };
  }
  // static get styles() {
  //   return css`
  //     div { margin-left: ${unsafeCSS(this.marginLeft)}px }
  //   `;
  // }
  // div { color: ${unsafeCSS(mainColor)} }
  // static get styles() {
  //   return css`
  //   :host { color: var(--spacingLeft); }
  // `;
  // }

  handleClick(){
    console.log('clic !');
    // fire event to parent => open the structure
  }

  //°-  _______  _______  _        ______   _______  _______
  //@- (  ____ )(  ____ \( (    /|(  __  \ (  ____ \(  ____ )
  //=- | (    )|| (    \/|  \  ( || (  \  )| (    \/| (    )|
  //!- | (____)|| (__    |   \ | || |   ) || (__    | (____)|
  //.- |     __)|  __)   | (\ \) || |   | ||  __)   |     __)
  //?- | (\ (   | (      | | \   || |   ) || (      | (\ (
  //@- | ) \ \__| (____/\| )  \  || (__/  )| (____/\| ) \ \__
  //*- |/   \__/(_______/|/    )_)(______/ (_______/|/   \__/

//   import {unsafeHTML} from 'lit-html/lib/unsafe-html';
// html`
// ${unsafeHTML(`<style> .mood { color: ${color}; } </style>`)}

//°<div class="wrapper" style={styleMap({s})}></div>
// const s = `marginLeft:${this.marginLeft}`
  render() {
    console.log('rendering axel-item ...');
    const styles = {
       marginLeft: `${this.css_marginLeft}`,
       backgroundColor: `${this.css_bg}`,
       color: `${this.css_color}`
      };

    // <style> { marginLeft: ${this.marginLeft}; } </style>
    // const ML = css`${this.marginLeft}`;
    // div { margin-left: ${unsafeCSS(this.marginLeft)}px }
    // <style> div{ margin-left: 50px } </style>

    return html`
       <link href = "./0-ui/widget/4-tree/axel-item.css" rel = "stylesheet">

       <div class="wrapper" style=${styleMap(styles)}  @click="${this.handleClick}" >
            ${this.name}
       </div>
 `;
  } //render
//--------------------------------------------------------

// this.style.setProperty('--feedback-height', this.expanded ? '70vh' : '60px')


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
customElements.define('axel-item', AxelItem);

