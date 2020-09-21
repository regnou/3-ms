(async () => { })()
import { LitElement, html } from 'lit-element';
import './axel-treeitem.js';

// const COLORS_ARR = ["white", "black", "#d3d3de", "white"]
// document.querySelector('axel-tree').shadowRoot.querySelectorAll('[role="tree"]')


// The HTML Content Template (<template>) element is a mechanism for holding HTML that is not to be rendered immediately when a page is loaded but may be instantiated subsequently during runtime using JavaScript.
// Think of a template as a content fragment that is being stored for subsequent use in the document. While the parser does process the contents of the <template> element while loading the page, it does so only to ensure that those contents are valid; the element's contents are not rendered, however.

class AxelTree extends LitElement {

  /*
  *   @constructor
  *
  *   @desc
  *       Tree item object for representing the state and user interactions for a
  *       tree widget
  *
  *   @param node
  *       An element with the role=tree attribute
  */
  constructor(node) {
    super();
    this.domNode = node;

    // Check whether node is a DOM element
    if (typeof this.domNode !== 'object') {
      console.log("ERROR A :impossible to construct <axel-tree>");
      return; // TODO- print error ?
    }
    this.treeitems = [];
    this.firstChars = [];
    this.firstTreeitem = null;
    this.lastTreeitem = null;

    // initialize pop up menus
    if (!this.domNode.getAttribute('role')) {
      this.domNode.setAttribute('role', 'tree');
    }
    //.START ----------------------------------------------
    findTreeitems(this.domNode, this, false);
    this.updateVisibleTreeitems();
    this.firstTreeitem.domNode.tabIndex = 0;
    console.log('consstructing <axel-tree> ...');
  }

  findTreeitems(node, tree, group) {
    var elemCursor = node.firstElementChild;
    var ti = group;
    while (elemCursor) {
      if (
        (elemCursor.tagName.toLowerCase() === 'li' && elemCursor.firstElementChild.tagName.toLowerCase() === 'span')
        || elemCursor.tagName.toLowerCase() === 'a') {

        // ti = new AxelTreeItem(elem, tree, group);
        ti = html`<axel-treeitem .domNode=${elemCursor} .tree=${tree} .groupTreeitem=${group}></axel-treeitem>`

        // ti = new TreeitemLink(elem, tree, group);
        // ti.init();

        tree.treeitems.push(ti);
        tree.firstChars.push(ti.label.substring(0, 1).toLowerCase());
      }
      //inspect sub-level
      if (elemCursor.firstElementChild) { //!- we don't get here if some_variable is null, undefined, 0, NaN, false, or ""
        findTreeitems(elemCursor, tree, ti);
      }
      //inspect same-level
      elemCursor = elemCursor.nextElementSibling; //TODO- nextElementSibling = TEST IT
    }
  }

  static get properties() {
    return {
      // data_obj: { type: Object },

      domNode: { type: Object },

      // treeitems: { type: Array },
      // firstChars: { type: Array },
      // firstTreeitem: { type: Object },
      // lastTreeitems: { type: Object },
    };
  }


  findTreeitems(node, tree, group) {
    var elemCursor = node.firstElementChild;
    var ti = group;
    while (elemCursor) {
      if (
        (elemCursor.tagName.toLowerCase() === 'li' && elemCursor.firstElementChild.tagName.toLowerCase() === 'span')
        || elemCursor.tagName.toLowerCase() === 'a') {

        // ti = new AxelTreeItem(elem, tree, group);
        ti = html`<axel-treeitem .domNode=${elemCursor} .tree=${tree} .groupTreeitem=${group}></axel-treeitem>`

        // ti = new TreeitemLink(elem, tree, group);
        // ti.init();

        tree.treeitems.push(ti);
        tree.firstChars.push(ti.label.substring(0, 1).toLowerCase());
      }
      //inspect sub-level
      if (elemCursor.firstElementChild) { //!- we don't get here if some_variable is null, undefined, 0, NaN, false, or ""
        findTreeitems(elemCursor, tree, ti);
      }
      //inspect same-level
      elemCursor = elemCursor.nextElementSibling; //TODO- nextElementSibling = TEST IT
    }
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
    console.log('rendering axel-tree ...');
    //*-----------------------------------------------------
    //*- init
    //*-----------------------------------------------------
    // const init = () => {
    // }; //*init

    //*-----------------------------------------------------
    //*
    //*-----------------------------------------------------
    return html`<link href = "./0-ui/widget/4-tree/axel-tree.css" rel = "stylesheet">
    `;
  } //render

  updateVisibleTreeitems() {
    this.firstTreeitem = this.treeitems[0];
    for (var i = 0; i < this.treeitems.length; i++) {
      var ti = this.treeitems[i];
      var parent = ti.domNode.parentNode;
      ti.isVisible = true;
      while (parent && (parent !== this.domNode)) {
        if (parent.getAttribute('aria-expanded') == 'false') {
          ti.isVisible = false;
        }
        parent = parent.parentNode;
      }
      if (ti.isVisible) {
        this.lastTreeitem = ti;
      }
    }
  }

  expandTreeitem(currentItem) {
    if (currentItem.isExpandable) {
      currentItem.domNode.setAttribute('aria-expanded', true);
      this.updateVisibleTreeitems();
    }
  }
  expandAllSiblingItems(currentItem) {
    for (var i = 0; i < this.treeitems.length; i++) {
      var ti = this.treeitems[i];
      if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
        this.expandTreeitem(ti);
      }
    }
  }
  collapseTreeitem(currentItem) {
    var groupTreeitem = false;
    if (currentItem.isExpanded()) {
      groupTreeitem = currentItem;
    }
    else {
      groupTreeitem = currentItem.groupTreeitem;
    }
    if (groupTreeitem) {
      groupTreeitem.domNode.setAttribute('aria-expanded', false);
      this.updateVisibleTreeitems();
      this.setFocusToItem(groupTreeitem);
    }
  }

  setFocusToItem(treeitem) {
    for (var i = 0; i < this.treeitems.length; i++) {
      var ti = this.treeitems[i];
      if (ti === treeitem) {
        ti.domNode.tabIndex = 0;
        ti.domNode.focus();
      }
      else {
        ti.domNode.tabIndex = -1;
      }
    }
  }
  setFocusToNextItem(currentItem) {
    var nextItem = false;
    for (var i = (this.treeitems.length - 1); i >= 0; i--) {
      var ti = this.treeitems[i];
      if (ti === currentItem) {
        break;
      }
      if (ti.isVisible) {
        nextItem = ti;
      }
    }
    if (nextItem) {
      this.setFocusToItem(nextItem);
    }
  }
  setFocusToPreviousItem(currentItem) {
    var prevItem = false;
    for (var i = 0; i < this.treeitems.length; i++) {
      var ti = this.treeitems[i];
      if (ti === currentItem) {
        break;
      }
      if (ti.isVisible) {
        prevItem = ti;
      }
    }
    if (prevItem) {
      this.setFocusToItem(prevItem);
    }
  }
  setFocusToParentItem(currentItem) {
    if (currentItem.groupTreeitem) {
      this.setFocusToItem(currentItem.groupTreeitem);
    }
  }
  setFocusToFirstItem() {
    this.setFocusToItem(this.firstTreeitem);
  }
  setFocusToLastItem() {
    this.setFocusToItem(this.lastTreeitem);
  }
  setFocusByFirstCharacter(currentItem, char) {
    var start, index, char = char.toLowerCase();
    // Get start index for search based on position of currentItem
    start = this.treeitems.indexOf(currentItem) + 1;
    if (start === this.treeitems.length) {
      start = 0;
    }
    // Check remaining slots in the menu
    index = this.getIndexFirstChars(start, char);
    // If not found in remaining slots, check from beginning
    if (index === -1) {
      index = this.getIndexFirstChars(0, char);
    }
    // If match was found...
    if (index > -1) {
      this.setFocusToItem(this.treeitems[index]);
    }
  }
  getIndexFirstChars(startIndex, char) {
    for (var i = startIndex; i < this.firstChars.length; i++) {
      if (this.treeitems[i].isVisible) {
        if (char === this.firstChars[i]) {
          return i;
        }
      }
    }
    return -1;
  }


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
customElements.define('axel-tree', AxelTree);

// this.data_obj =
// {
//   name: "",
//   arr: [
//     {
//       name: "La Paz",
//       arr: [
//         { //topic1
//           name: "eating",
//           arr: [
//             { //subTopic1
//               name: "Restaurant",
//               final_arr: [
//                 {//fournisseur1
//                   name: "La Comedie",
//                   //tel: "0120033231",
//                 },
//                 {//fournisseur2
//                   name: "ZACK",
//                   //tel: "012332130033231",
//                 }
//               ] //@fournisseurs
//             },
//             { //subTopic2
//               name: "Fast Food",
//               final_arr: [
//                 {//fournisseur1
//                   name: "Copacabana",
//                   //tel: "01200332343231",
//                 },
//                 {//fournisseur2
//                   name: "ZACKLa Soperia",
//                   //tel: "0123321300432432433231",
//                 }
//               ] //@fournisseurs
//             },
//           ]
//         }, //@topic1
//         { //topic2
//           name: "sleeping",
//           arr: [
//             { //subTopic1
//               name: "hotel",
//               final_arr: [
//                 {//fournisseur1
//                   name: "La Comedie",
//                   // tel: "0120033231",
//                 },
//                 {//fournisseur2
//                   name: "xx",
//                   //  tel: "012332130033231",
//                 }
//               ] //@topic2-subTopic1-fournisseurs
//             },
//             { //subTopic2
//               name: "hostel",
//               final_arr: [
//                 {//fournisseur1
//                   name: "Copacabana",
//                   // tel: "01200332343231",
//                 },
//                 {//fournisseur2
//                   name: "ZACKLa Soperia",
//                   //   tel: "0123321300432432433231",
//                 }
//               ] //@topic2-subTopic2-fournisseurs
//             },
//           ]
//         } //@topic2
//       ]
//     } //@lpz
//   ]
// }; //end-json






// const data_dom = " \
// <h3 id = 'tree1'> \
//   Foods \
// </h3> \
// <ul role = 'tree' aria-labelledby = 'tree1'> \
// <li role = 'treeitem' aria-level  = '1' aria-setsize = '3' aria-posinset = '1' aria-expanded = 'false'> \
//     <span> \
//       Fruits \
//     </span> \
//     <ul> \
//       <li role = 'none'> \
//       <a  role = 'treeitem' aria-level = '2' aria-setsize = '5' aria-posinset = '1' \
//           href = 'https://en.wikipedia.org/wiki/Orange_%28fruit%29'> \
//           Oranges \
//         </a> \
//       </li> \
//       <li role = 'none'> \
//       <a  role = 'treeitem' aria-level = '2' aria-setsize = '5' aria-posinset = '2' \
//           href = 'https://en.wikipedia.org/wiki/Pineapple'> \
//           Pineapple \
//         </a> \
//       </li> \
//       <li role = 'treeitem' aria-level = '2' aria-setsize = '5' aria-posinset = '3' aria-expanded = 'false'> \
//         <span> \
//           Apples \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/McIntosh_%28apple%29'> \
//               Macintosh \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Granny_Smith'> \
//               Granny Smith \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Fuji_(apple)'> \
//               Fuji \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//       <li role = 'none'> \
//       <a  role = 'treeitem' aria-level = '2' aria-setsize = '5' aria-posinset = '4' \
//           href = 'https://en.wikipedia.org/wiki/Banana'> \
//           Bananas \
//         </a> \
//       </li> \
//       <li role = 'treeitem' aria-level = '2' aria-setsize = '5' aria-posinset = '5' aria-expanded = 'false'> \
//         <span> \
//           Pears \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '6' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/D%27Anjou'> \
//               Anjou \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '6' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Williams_pear'> \
//               Bartlett \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '6' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Bosc_pear'> \
//               Bosc \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '6' aria-posinset = '4' \
//               href = 'https://en.wikipedia.org/wiki/Pyrus_communis'> \
//               Concorde \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '6' aria-posinset = '5' \
//               href = 'https://en.wikipedia.org/wiki/Pyrus_communis'> \
//               Seckel \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '6' aria-posinset = '6' \
//               href = 'https://en.wikipedia.org/wiki/Pyrus_communis'> \
//               Starkrimson \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//     </ul> \
//   </li> \
//   <li role = 'treeitem' aria-level = '1' aria-setsize = '3' aria-posinset = '2' aria-expanded = 'false'> \
//     <span> \
//       Vegetables \
//     </span> \
//     <ul role = 'group'> \
//     <li role = 'treeitem' aria-level = '2' aria-setsize = '3' aria-posinset = '1' aria-expanded = 'false'> \
//         <span> \
//           Podded Vegetables \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/Lentil'> \
//               Lentil \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Pea'> \
//               Pea \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Peanut'> \
//               Peanut \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//       <li role = 'treeitem' aria-level = '2' aria-setsize = '3' aria-posinset = '2' aria-expanded = 'false'> \
//         <span> \
//           Bulb and Stem Vegetables \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/Asparagus'> \
//               Asparagus \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Celery'> \
//               Celery \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Leek'> \
//               Leek \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '4' \
//               href = 'https://en.wikipedia.org/wiki/Onion'> \
//               Onion \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//       <li role = 'treeitem' aria-level = '2' aria-setsize = '3' aria-posinset = '3' aria-expanded = 'false'> \
//         <span> \
//           Root and Tuberous Vegetables \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/Carrot'> \
//               Carrot \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Ginger'> \
//               Ginger \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Parsnip'> \
//               Parsnip \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '4' \
//               href = 'https://en.wikipedia.org/wiki/Potato'> \
//               Potato \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//     </ul> \
//   </li> \
//   <li role = 'treeitem' aria-level = '1' aria-setsize = '3' aria-posinset = '3' aria-expanded = 'false'> \
//     <span> \
//       Grains \
//     </span> \
//     <ul role = 'group'> \
//     <li role = 'treeitem' aria-level = '2' aria-setsize = '3' aria-posinset = '1' aria-expanded = 'false'> \
//         <span> \
//           Cereal Grains \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/Barley'> \
//               Barley \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Oats'> \
//               Oats \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '3' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Rice'> \
//               Rice \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//       <li role = 'treeitem' aria-level = '2' aria-setsize = '3' aria-posinset = '2' aria-expanded = 'false'> \
//         <span> \
//           Pseudocereal Grains \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/Amaranth'> \
//               Amaranth \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Buckwheat'> \
//               Bucketwheat \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Salvia_hispanica'> \
//               Chia \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '4' \
//               href = 'https://en.wikipedia.org/wiki/Quinoa'> \
//               Quinoa \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//       <li role = 'treeitem' aria-level = '2' aria-setsize = '3' aria-posinset = '3' aria-expanded = 'false'> \
//         <span> \
//           Oilseeds \
//         </span> \
//         <ul role = 'group'> \
//         <li role = 'none'> \
//         <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '1' \
//             href = 'https://en.wikipedia.org/wiki/Brassica_juncea'> \
//               India Mustard \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '2' \
//               href = 'https://en.wikipedia.org/wiki/Safflower'> \
//               Safflower \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '3' \
//               href = 'https://en.wikipedia.org/wiki/Flax_seed'> \
//               Flax Seed \
//             </a> \
//           </li> \
//           <li role = 'none'> \
//           <a  role = 'treeitem' aria-level = '3' aria-setsize = '4' aria-posinset = '4' \
//               href = 'https://en.wikipedia.org/wiki/Poppy_seed'> \
//               Poppy Seed \
//             </a> \
//           </li> \
//         </ul> \
//       </li> \
//     </ul> \
//   </li> \
// </ul> \
// ";
