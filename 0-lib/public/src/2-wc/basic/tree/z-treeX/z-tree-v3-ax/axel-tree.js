
import { LitElement, html } from 'lit-element';
// ui
import './axel-treeitem.js';
// data
// import { jdd as jddtin } from '../../static/db/1-config-tin'

class AxelTree extends LitElement {
  /*
  *   @constructor
  *
  *   @desc
  *       Tree item object for representing the state and user interactions for a
  *       tree widget
  *
  *   @param node
  * An element with the role = tree attribute
  */
  constructor() {
    console.log('consstructing <axel-tree> ...');
    super();
    this.data = [
      {
        id: 2,
        title: 'Oranges',
        parent: 0,
      },
      {
        id: 2,
        title: 'Pineapple',
        parent: 0,
      },
      {
        id: 1,
        title: 'Apples',
        parent: 0,
        children: [
          {
            id: 3,
            title: 'Macintosh',
            parent: 1
          },
          {
            id: 3,
            title: 'Granny Smith',
            parent: 1
          },
          {
            id: 3,
            title: 'Fuji',
            parent: 1
          }
        ]
      },
      {
        id: 2,
        title: 'Bananas',
        parent: 0,
      },
      {
        id: 2,
        title: 'Pears',
        parent: 0,
        children: [
          {
            id: 8,
            title: 'anjou',
            parent: 2
          },
          {
            id: 8,
            title: 'Bartlett',
            parent: 2
          },
          {
            id: 8,
            title: 'Bosc',
            parent: 2
          },
          {
            id: 8,
            title: 'concorde',
            parent: 2
          },
          {
            id: 8,
            title: 'Seckel',
            parent: 2
          },
          {
            id: 8,
            title: 'Starkrimson',
            parent: 2
          },
        ]
      },
      {
        id: 2,
        title: 'Vegetables',
        parent: 0,
        children: [
          {
            id: 8,
            title: 'Podded Vegetables',
            parent: 2
          }
        ]
      },
      {
        id: 2,
        title: 'Grains',
        parent: 0,
        children: [
          {
            id: 8,
            title: 'Cereal Grains',
            parent: 2
          }
        ]
      }
    ];

    // this.domNode = node;
    this.domNode = null;

    // // Check whether node is a DOM element
    // if (typeof this.domNode !== 'object') {
    //   console.log("ERROR A :impossible to construct <axel-tree>");
    //   return; // TODO- print error ?
    // }
    this.treeitems = [];
    this.firstChars = [];
    this.firstTreeitem = null;
    this.lastTreeitem = null;

    // initialize pop up menus
    // if (!this.domNode.getAttribute('role')) {
    //   this.domNode.setAttribute('role', 'tree');
    // }
    //.START ----------------------------------------------
    // this.findTreeitems(this.domNode, false);

    this.updateVisibleTreeitems();
    this.firstTreeitem.domNode.tabIndex = 0;

  } //constructor



  findTreeitems(node, group) {
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

        this.treeitems.push(ti);
        this.firstChars.push(ti.label.substring(0, 1).toLowerCase());
      }
      //inspect sub-level
      if (elemCursor.firstElementChild) { //!- we don't get here if some_variable is null, undefined, 0, NaN, false, or ""
        this.findTreeitems(elemCursor, ti);
      }
      //inspect same-level
      elemCursor = elemCursor.nextElementSibling; //TODO- nextElementSibling = TEST IT
    }
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

  render() {
    console.log('rendering <axel-tree> ...');
    //*-----------------------------------------------------
    //*-
    //*-----------------------------------------------------
    const recurse = node => {
      if (node.children && Object.keys(node.children).length) {
        //console.log(html`<axel-tree .data=${node.children}></axel-tree>`) // for verification
        return html`
          <axel-tree .data=${node.children}></axel-tree>
        `;
      }
    }


    // <li role="treeitem" aria-expanded="false">
    //         <span>
    //           ${i.title} (${i.id})
    //         </span>
    //       </li>
    const widget = () => {
      return html`
      <ul role="group"  >
        ${this.data.map(i => html`

          <axel-treeitem .id=${i.id} .title=${i.title}></axel-treeitem>


          ${recurse(i)}
        `)}
      </ul>
      `;
    }
    //*-----------------------------------------------------
    //*- render
      //.During an update, only the parts of the DOM that change are re-rendered. To get the performance benefits of this model, you should design your element’s template as a pure function of its properties.
  //.To do this, make sure the render function:
  //.Does not change the element’s state.
  //.Does not have any side effects.
  //.Only depends on the element’s properties.
  //.Returns the same result when given the same property values.
  //.Also, avoid making DOM updates outside of render. Instead, express the element’s template as a function of its state, and capture its state in properties.
    //*-----------------------------------------------------
    return html`
      <link href = "./0-ui/widget/4-tree/axel-tree.css" rel = "stylesheet">
      <ul role="tree" aria-labelledby="tree1">
        ${widget()}
      </ul>
    `
  } //render


  //@-_   ______  _______
  //.-  (  ____ \(  ___  )
  //##- | (    \/| (   ) |
  //?-  | |      | |   | |
  //##- | | ____ | |   | |
  //=-  | | \_  )| |   | |
  //##- | (___) || (___) |
  //*-  (_______)(_______)


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
  // sibling = frere et soeur
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


  //@-_   ______  _______
  //.-  (  ____ \(  ___  )
  //##- | (    \/| (   ) |
  //?-  | |      | |   | |
  //##- | | ____ | |   | |
  //=-  | | \_  )| |   | |
  //##- | (___) || (___) |
  //*-  (_______)(_______)


    //=-----------------------------------------------------
    // data.forEach(function(nodeData) {
    // return ${
    //   this.data.map((nodeData) =>
    //     html`<axel-tree .data=${nodeData}</axel-tree>`)
    // };
    //=-----------------------------------------------------
    // ${items.map((i) => html`<li>${i}</li>`)
    //=-----------------------------------------------------
    // <template  repeat   = '{{child in nodeData.children}}'>
    // const itemTemplates = [];
    // for (const i of this.data) {
    //   const tpl = html`
    //     <ul>
    //       <li>${i.title} (${i.id})</li>

    //       <axel-tree data=${child}></axel-tree>
    //       </template>
    //     </ul>
    //     `
    //   itemTemplates.push(tpl);
    // }
    //=-----------------------------------------------------
    // ${i.configuration && i.configuration.text || ""}

    // const recurse = node => {
    //   if (node.children && Object.keys(node.children).length) {
    //     console.log(litApp(node.children)) // for verification
    //     return litApp(node.children)
    //   }
    // }

    // const litApp = nodes =>
    //   html`
    //     ${Object.values(nodes).map(node => html`
    //       <div id="${node.meta.guid}">
    //         ${node.configuration && node.configuration.text || ""}
    //         ${recurse(node)}
    //       </div>
    //     `)}
    //   `

    // <ul>
    //     ${this.data.map((i) => html`
    //     <li>${i.title} (${i.id})</li>
    //     `)}
    // </ul>
    //=-----------------------------------------------------
