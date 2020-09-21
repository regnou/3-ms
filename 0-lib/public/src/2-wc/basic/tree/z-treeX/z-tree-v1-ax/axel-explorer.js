(async () => { })()
import { LitElement, html } from 'lit-element';
import './axel-item.js';

// const COLORS_ARR = ["white", "black", "#b2eab1", "#d3d3de", "white", ]
// const COLORS_ARR = ["white", "black", "#d3d3de", "white"]

class AxelExplorer extends LitElement {
  constructor() {
    super();
    // this.data_arr = ["A", "B", "C", "D", "E"];
    // this.data_map = new Map([
    //   ['A', ['one', 'two', 'three']],
    //   ['B', ['four', 'five', 'six']],
    //   ['C', ['seven', 'eight', 'nine']],
    // ]);

    // couper dans un meme domaine : par ex. toute la structure TAXO du tourisme
    // liste de [ville/regions/zone] qui seront decoupees en [topics] qui seront decoupes en [cat||sub-topics] qui seront decoupes en [fournisseurs]

    //donc SI ATTRIBUTE : ARR => il y a des fils. Donc, lors de la construction du DIV,
    //ce div devient 'clickable', addListener ('click', f1), et il devra creer des blocjs,
    //ces blocks doivent etre espace du parent (prend le LEFT abs pos, du parent, et tu le decale.)    //

    // For (chaque element)
    // => 1 print name + decalage CSS LEFT 5px
    // If (arr !== undefined) =>
    //    For (chaque element) => RECCURSE
    //

    // JSON 'not serialized' ==> object ==> LOW PERF !
    this.data_obj =
    {
      name: "",
      arr: [
        {
          name: "La Paz",
          arr: [
            { //topic1
              name: "eating",
              arr: [
                { //subTopic1
                  name: "Restaurant",
                  final_arr: [
                    {//fournisseur1
                      name: "La Comedie",
                      //tel: "0120033231",
                    },
                    {//fournisseur2
                      name: "ZACK",
                      //tel: "012332130033231",
                    }
                  ] //@fournisseurs
                },
                { //subTopic2
                  name: "Fast Food",
                  final_arr: [
                    {//fournisseur1
                      name: "Copacabana",
                      //tel: "01200332343231",
                    },
                    {//fournisseur2
                      name: "ZACKLa Soperia",
                      //tel: "0123321300432432433231",
                    }
                  ] //@fournisseurs
                },
              ]
            }, //@topic1
            { //topic2
              name: "sleeping",
              arr: [
                { //subTopic1
                  name: "hotel",
                  final_arr: [
                    {//fournisseur1
                      name: "La Comedie",
                      // tel: "0120033231",
                    },
                    {//fournisseur2
                      name: "xx",
                      //  tel: "012332130033231",
                    }
                  ] //@topic2-subTopic1-fournisseurs
                },
                { //subTopic2
                  name: "hostel",
                  final_arr: [
                    {//fournisseur1
                      name: "Copacabana",
                      // tel: "01200332343231",
                    },
                    {//fournisseur2
                      name: "ZACKLa Soperia",
                      //   tel: "0123321300432432433231",
                    }
                  ] //@topic2-subTopic2-fournisseurs
                },
              ]
            } //@topic2
          ]
        } //@lpz
      ]
    } //end-json

    console.log('consstructing axel-explorer ...');
  }


  static get properties() {
    return {
      // data_arr: { type: Array },
      // data_map: { type: Object },
      data_obj: { type: Object },
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

  render() {
    console.log('rendering axel-explorer ...');

    //*-----------------------------------------------------
    // const reccuItemList = (v, loop, str, acc = []) => {
    //   // const decalage = (marginLeft) => {
    //   //   const html = `<div style="margin-left:${marginLeft}px"> </div>`
    //   // }
    //   const tab = 50;
    //   const marginLeft = loop * tab;
    //   const color = loop === 1 ? "white" : "black";

    //   // FOLDER
    //   if (v.arr !== undefined) {
    //     const children = [];
    //     for (let itm of v.arr) {
    //       children.push(reccuItemList(itm, loop + 1, str + " ", acc));
    //     }

    //     // arr_child      = children
    //     return html`<axel-item
    //         name           = ${v.name}
    //         css_marginLeft = ${0}px
    //         css_bg         = ${COLORS_ARR[loop]}

    //         css_color      = ${color}
    //         >
    //         </axel-item>`;

    //     // return html`${acc}`
    //   }
    //   // FILE
    //   else {
    //     return html`<axel-item
    //     name           = ${v.name}
    //     css_marginLeft = ${0}px
    //     css_bg         = ${COLORS_ARR[loop]}
    //     css_color      = ${color}
    //     >
    //     </axel-item>`;
    //   }



    // }//*reccuItemList

    //*-----------------------------------------------------
    return html`
      <link href = "./0-ui/widget/4-tree/axel-explorer.css" rel = "stylesheet">

      <div class = "wrapper">

      <h3 id="tree_label">
  File Viewer
</h3>
<ul role="tree" aria-labelledby="tree_label">
  <li role="treeitem" aria-expanded="false">
    <span>
      Projects
    </span>
    <ul role="group">
      <li role="treeitem" class="doc">
        project-1.docx
      </li>
      <li role="treeitem" class="doc">
        project-2.docx
      </li>
      <li role="treeitem" aria-expanded="false">
        <span>
          Project 3
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            project-3A.docx
          </li>
          <li role="treeitem" class="doc">
            project-3B.docx
          </li>
          <li role="treeitem" class="doc">
            project-3C.docx
          </li>
        </ul>
      </li>
      <li role="treeitem" class="doc">
        project-4.docx
      </li>
      <li role="treeitem" aria-expanded="false">
        <span>
          Project 5
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            project-5A.docx
          </li>
          <li role="treeitem" class="doc">
            project-5B.docx
          </li>
          <li role="treeitem" class="doc">
            project-5C.docx
          </li>
          <li role="treeitem" class="doc">
            project-5D.docx
          </li>
          <li role="treeitem" class="doc">
            project-5E.docx
          </li>
          <li role="treeitem" class="doc">
            project-5F.docx
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li role="treeitem" aria-expanded="false">
    <span>
      Reports
    </span>
    <ul role="group">
      <li role="treeitem" aria-expanded="false">
        <span>
          report-1
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            report-1A.docx
          </li>
          <li role="treeitem" class="doc">
            report-1B.docx
          </li>
          <li role="treeitem" class="doc">
            report-1C.docx
          </li>
        </ul>
      </li>
      <li role="treeitem" aria-expanded="false">
        <span>
          report-2
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            report-2A.docx
          </li>
          <li role="treeitem" class="doc">
            report-2B.docx
          </li>
          <li role="treeitem" class="doc">
            report-2C.docx
          </li>
          <li role="treeitem" class="doc">
            report-2D.docx
          </li>
        </ul>
      </li>
      <li role="treeitem" aria-expanded="false">
        <span>
          report-3
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            report-3A.docx
          </li>
          <li role="treeitem" class="doc">
            report-3B.docx
          </li>
          <li role="treeitem" class="doc">
            report-3C.docx
          </li>
          <li role="treeitem" class="doc">
            report-3D.docx
          </li>
        </ul>
      </li>
    </ul>
  </li>
  <li role="treeitem" aria-expanded="false">
    <span>
      Letters
    </span>
    <ul role="group">
      <li role="treeitem" aria-expanded="false">
        <span>
          letter-1
        </span>
        <ul>
          <li role="treeitem" class="doc">
            letter-1A.docx
          </li>
          <li role="treeitem" class="doc">
            letter-1B.docx
          </li>
          <li role="treeitem" class="doc">
            letter-1C.docx
          </li>
        </ul>
      </li>
      <li role="treeitem" aria-expanded="false">
        <span>
          letter-2
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            letter-2A.docx
          </li>
          <li role="treeitem" class="doc">
            letter-2B.docx
          </li>
          <li role="treeitem" class="doc">
            letter-2C.docx
          </li>
          <li role="treeitem" class="doc">
            letter-2D.docx
          </li>
        </ul>
      </li>
      <li role="treeitem" aria-expanded="false">
        <span>
          letter-3
        </span>
        <ul role="group">
          <li role="treeitem" class="doc">
            letter-3A.docx
          </li>
          <li role="treeitem" class="doc">
            letter-3B.docx
          </li>
          <li role="treeitem" class="doc">
            letter-3C.docx
          </li>
          <li role="treeitem" class="doc">
            letter-3D.docx
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
<p>
  <label>
    File or Folder Selected:
    <input id="last_action"
           type="text"
           size="15"
           readonly="">
  </label>
</p>


       </div>
 `;
  } //render


  //- ${reccuItemList(this.data_obj, 0, "")}


  // <ul>
  // ${this.data_arr.map(i => html`
  // <li>
  // <axel-item name = ${i}></axel-item>
  // </li>`)}
  // </ul>

  // const itemList = () => {
  //  let result = null;
  //    for (i in this.data_arr)
  //    {
  //     result  = html`
  //      <axel-item
  //          .imgTrailer_arr  = ${db_json.imgTrailer_arr}
  //          .imgCarousel_arr = ${db_json.imgCarousel_arr}>
  //      </axel-item>`;
  //    }
  //  return result;
  // }

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
customElements.define('axel-explorer', AxelExplorer);



    // //*-----------------------------------------------------
    // const itemList = () => {
    //   // const decalage = (marginLeft) => {
    //   //   const html = `<div style="margin-left:${marginLeft}px"> </div>`
    //   // }

    //   let marginLeft = 0;
    //   const tab = 50;
    //   const itemTemplates = [];
    //   //itemTemplates.push(html`<ul>`);
    //   let loop = 0;

    //   for (let key of this.data_map.keys()) {
    //     // console.log(key); //for (let e of db_flat)
    //     itemTemplates.push(html`<axel-item name=${key} ></axel-item>`);

    //     // decalage L1
    //     // const simple = this.data_map.get(key);
    //     const simple_arr = this.data_map.get(key);
    //     loop = 1;
    //     marginLeft = loop * tab; //°-*************************
    //     for (const val in simple_arr) {
    //       // decalage(marginLeft);
    //       itemTemplates.push(html`<axel-item name=${val} css_marginLeft=${marginLeft}px></axel-item>`);
    //     }
    //   }

    //   //itemTemplates.push(html`</ul>`);
    //   return html`${itemTemplates}`
    // }//*itemList



    //*-----------------------------------------------------
    // const reccuItemList = (v, loop, str, acc=[]) => {
    //   // const decalage = (marginLeft) => {
    //   //   const html = `<div style="margin-left:${marginLeft}px"> </div>`
    //   // }
    //   const tab = 50;
    //   const marginLeft = loop * tab;
    //   const color = loop === 1 ? "white" : "black";

    //   console.log(loop, " *name: ", v.name);
    //   acc.push(html`<axel-item
    //   name=${v.name}
    //   css_marginLeft=${0}px
    //   css_bg="${COLORS_ARR[loop]}"
    //   css_color="${color}"
    //   >
    //   </axel-item>`);

    //   if (v.arr !== undefined)
    //   {
    //       // create DIV with name
    //       // add STYLE adapted
    //       for (let itm of v.arr) {
    //         reccuItemList(itm, loop+1, str+" ", acc);
    //       }
    //   }

    //   //itemTemplates.push(html`</ul>`);
    //   return html`${acc}`
    // }//*reccuItemList
