
import {
    LitElement, html, css
} from 'lit-element';


import './wc/card/wc-tin-card.js'
import '@regnou/wc-slideshow'
import '@regnou/wc-category'

// import '../../../../../wc/basic/wc-category.js'
// import '../../../../../wc/basic/slideshow/wc-slideshow'


import { tranformDb_groupByCountryCity } from './1-data/transform/1-tin-transform.js' // TRANSFORM
import { db_tin_raw } from '../static/2-data/1-scrap/tin/tin-db-popoax85.js' // FETCH
import { VIEW } from './constant.js'


class WcList extends LitElement {
    constructor() {
        super();
        this.view=VIEW.raw; // default = raw
        // this.db = new Map();  //°-TODO - remplacer par import dynamique ???
        // this.db_raw = [];

        //! TRY CATCH FILE TODO !
        this.db_raw = db_tin_raw;
        this.db_cat = tranformDb_groupByCountryCity(db_tin_raw);
        console.log("debug-stop");
    }
    static get properties () {
        return {
            db: { type: Object }, // map
            db_raw: { type: Array },
            view: { type: String }, // STATE = raw, group_L1 (TODO - //° faire CONSTANT AVEC LES ETATS VIEW_STATE.groupby)
        };
    }
    firstUpdated () {
    }

    // this.data_trailer = [
    //     "./static/i/SLIDESHOW_W3C/img_snow_wide.jpg"];
    // this.data_carousel = [
    //     "./static/i/SLIDESHOW_W3C/img_woods.jpg",
    //     "./static/i/SLIDESHOW_W3C/img_snow.jpg"];
    // this.data_carousel_alt = [
    //     "The Woods",
    //     "Snowy Mountains"];

    render () {
        console.log('rendering <tinder::wc-list> ...');

        //° on sait deja comment sont orga les data ici
        return html`
            <div class="layout_content">
                <wc-category title1=${"=== tinder-crm ==="} title2=${"CRM"} title3=${"15 Sept"}></wc-category>
                ${select_view()}
            </div>
                `;
        //*-------------------------------------------------
        function select_view () {
            if(this.view === VIEW.raw)
                {view_raw(this.db_raw)}
            else
            if(this.view === VIEW.groupBy_L1)
                {view_groupL1(this.db_cat)}
        }
        //*-------------------------------------------------
        function view_raw (cities_arr) {
            const itemTemplates = [];
            // itemTemplates.push(html`<ul>`);

            cities_arr.map(contact => {
                // itemTemplates.push(html`<li>`);
                itemTemplates.push(html`
                      <wc-tin-card
                      ._00country        = ${contact._00country}
                      ._01city           = ${contact._01city}
                      ._02name           = ${contact._02name}
                      ._03age            = ${contact._03age}
                      ._04phone          = ${contact._04phone}
                      ._04phone_raw      = ${contact._04phone_raw}
                      ._05img_tinder_src = ${contact._05img_tinder_src}
                      ._06status_tinder  = ${contact._06status_tinder}
                      ._07tinder_account = ${contact._07tinder_account}
                      ._07instagram_account       = ${contact._07instagram_account}
                      ._07unofAppTinder_link      = ${contact._07unofAppTinder_link}
                      ._07unofAppTinder_USER_link = ${contact._07unofAppTinder_USER_link}
                      ._08distance                = ${contact._08distance}
                      ._11chat_tinder_all         = ${contact._11chat_tinder_all}
                      ></wc-tin-card>`);
                // itemTemplates.push(html`</li>`);
            })
            // itemTemplates.push(html`</ul>`);
            return html`${itemTemplates}`
        }//*cardListTin
        //*-----------------------------------------------------
        function view_groupL1 (db_mmap) {
            //! YES => ne pas faire de traitement sur la data ICI !
            //! YES => mais faire un parcours adapte pour les categorys. (cf. transfo) !
            //let nextColor = 0;
            const itemTemplates = [];
            for (let keyCountry of db_mmap.keys()) {
                const cities_map = db_mmap.get(keyCountry);
                for (let keyCity of cities_map.keys()) {
                    itemTemplates.push(html`
                        <wc-category title1=${keyCountry} title2=${keyCity} title3=""></wc-category>
                        <wc-slideshow></wc-slideshow>
                        <div class="slot-layer-list_card-grid">
                            ${view_raw(cities_map.get(keyCity))}
                        </div>
                    `);
                }
            } //for
            return html`${itemTemplates}`;
        }//*end
        //*-----------------------------------------------------

    } //end render









    //! HORIZONTAL SCROLL CATEGORY: pending feature
    // overflow-x       : scroll;
    // grid-auto-flow   : column;
    // grid-auto-columns: 30%;
    // scroll-snap-type: x mandatory;
    static get styles () {
        return css`
:host {
--card-width : 190px;
--height-block: 300px;
--color-theme-clickable: #d3d7ed;
--space: 10px;
}
.layout_content {
    box-sizing: border-box;
}
.slot-layer-list_card-grid {
display              : grid;
grid-template-columns: repeat(auto-fill, var(--card-width));
grid-column-gap      : calc(var(--space) );
grid-row-gap         : calc(var(--space) );
padding: 10px 0 10px 0;
margin: 10px;
}
.hidden {
display: none;
}
`;
    }

} //end-class

customElements.define('wc-list', WcList);
