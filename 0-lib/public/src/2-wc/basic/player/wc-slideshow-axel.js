//.- I8,        8        ,8I 88 88888888ba,     ,ad8888ba,  88888888888 888888888888
//.- `8b       d8b       d8' 88 88      `"8b   d8"'    `"8b 88               88
//.-  "8,     ,8"8,     ,8"  88 88        `8b d8'           88               88
//*-   Y8     8P Y8     8P   88 88         88 88            88aaaaa          88
//*-   `8b   d8' `8b   d8'   88 88         88 88      88888 88"""""          88
//*-    `8a a8'   `8a a8'    88 88         8P Y8,        88 88               88
//!-     `8a8'     `8a8'     88 88      .a8P   Y8a.    .a88 88               88
//!-      `8'       `8'      88 88888888Y"'     `"Y88888P"  88888888888      88
import { LitElement, html } from 'lit-element';
import './wc-trailer'
import './wc-carousel'

class WcSlideshowAxel extends LitElement {
    constructor() {
        super();
        this.data = [];
    }
    static get properties () {
        return {
            data: { type: Array }  //°observed attribute name is img_arr
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
    render () {
        return html`
  <link           rel          = "stylesheet" href = "./0-ui/widget/3-trailerCarousel/trailercarousel1.css">

  <div            class        = "trailerCarousel">
  <wc-trailer  .isCarouselOn=${true}  .img_arr=${this.data}>
        <wc-carousel .isTrailerOn=${true} .img_arr=${this.data}> </wc-carousel>
  </wc-trailer>

  </div>`;
    } //render

} //end-class
customElements.define('wc-slideshow-axel', WcSlideshowAxel);
