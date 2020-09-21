//!- hack 1 => convert STRING to HTML NODE
//?- [inutile, car je deplace la var ds index.html]
//?- const wrapper = document.createElement('div');
//?- wrapper.innerHTML = data_dom;
//?- const div= wrapper.firstChild;

//.During an update, only the parts of the DOM that change are re-rendered. To get the performance benefits of this model, you should design your element’s template as a pure function of its properties.
//.To do this, make sure the render function:
//.Does not change the element’s state.
//.Does not have any side effects.
//.Only depends on the element’s properties.
//.Returns the same result when given the same property values.
//.Also, avoid making DOM updates outside of render. Instead, express the element’s template as a function of its state, and capture its state in properties.

//.- I8,        8        ,8I 88 88888888ba,     ,ad8888ba,  88888888888 888888888888
//.- `8b       d8b       d8' 88 88      `"8b   d8"'    `"8b 88               88
//.-  "8,     ,8"8,     ,8"  88 88        `8b d8'           88               88
//*-   Y8     8P Y8     8P   88 88         88 88            88aaaaa          88
//*-   `8b   d8' `8b   d8'   88 88         88 88      88888 88"""""          88
//*-    `8a a8'   `8a a8'    88 88         8P Y8,        88 88               88
//!-     `8a8'     `8a8'     88 88      .a8P   Y8a.    .a88 88               88
//!-      `8'       `8'      88 88888888Y"'     `"Y88888P"  88888888888      88

import { LitElement, html } from 'lit-element';
// ui
// import './axel-treeitem.js';
// data
// import { jdd as jddtin } from '../../static/db/1-config-tin'


// const KEYCODE = Object.freeze({
//   RETURN: 13,
//   SPACE: 32,
//   PAGEUP: 33,
//   PAGEDOWN: 34,
//   END: 35,
//   HOME: 36,
//   LEFT: 37,
//   UP: 38,
//   RIGHT: 39,
//   DOWN: 40
// });

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
    console.log('constructing <axel-tree> ...');
    super();
    this.ariaLabelledby = "";
    this.data = [
      {
        title: 'Beverages',
        children: [
          {
            title: 'Water',
          },
          {
            title: 'Coffee',
          },
          {
            title: 'Tea',
            children: [
              {
                title: 'Black Tea',
              },
              {
                title: 'White Tea',
              },
              {
                title: 'Green Tea',
                children: [
                  {
                    title: 'Sencha',
                  },
                  {
                    title: 'Gyokuro',
                  },
                  {
                    title: 'Matcha',
                  },
                  {
                    title: 'Pi Lo Chun',
                  },
                ]
              },
            ]
          }
        ]
      },
    ];

  } //constructor

  //?-   _____   _____   _____   _____
  //.-  |  _  | | __  | |     | |  _  |
  //°-  |   __| |    -| |  |  | |   __|
  //*- |__|    |__|__| |_____| |__|

  static get properties() {
    return {
      data: { type: Array },
      ariaLabelledby: { type: String },
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

  isExpanded(e) { return e.getAttribute('aria-expanded') === 'true'; }
  openFolder(e) { e.setAttribute('aria-expanded', 'true'); }
  closeFolder(e) { e.setAttribute('aria-expanded', 'false'); }

  handleClick(e) {
    const elem = e.target.parentElement;
    //°- toggle
    if (this.isExpanded(elem)) {
      this.closeFolder(elem);
    }
    else {
      this.openFolder(elem);
    }
    //preventDefault
    e.stopPropagation();
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
    console.log('rendering <axel-tree1> ...');
    // @blur      = ${this.handleBlur}
    // @keydown   = ${this.handleKeydown}
    //*-----------------------------------------------------
    //*-
    //*-----------------------------------------------------
    const tplFolder = (itm, ariaLevel, ariaSetsize, ariaPosinset) => {
      const label = itm.title.trim(); //!- keep trim ?
      // this.firstChars.push(label.substring(0, 1).toLowerCase());

      const ti = html`<li
      role          = "treeitem"
      aria-expanded = "false"
      aria-level    = ${ariaLevel}
      aria-setsize  = ${ariaSetsize}
      aria-posinset = ${ariaPosinset}
      tabindex      = "-1"

      @click     = ${this.handleClick}
      @focus     = ${this.handleFocus}
      >
        <span>${label}</span>

        <ul role = "group">
          ${recurse(itm.children, ariaLevel)}
        </ul>
    </li>`

      return ti;
    }
    const tplLeaf = (itm, ariaLevel, ariaSetsize, ariaPosinset) => {
      const label = itm.title.trim(); //!- keep trim ?
      // this.firstChars.push(label.substring(0, 1).toLowerCase());
      const ti = html`<li role          = "none">
            <span role          = "treeitem"
                  aria-level    = ${ariaLevel}
                  aria-setsize  = ${ariaSetsize}
                  aria-posinset = ${ariaPosinset}
                  tabindex      = "-1"
            >${label}</span></li>`

      return ti;
    }
    //*-----------------------------------------------------
    const recurse = (data, ariaLevel) => {
      const nodes = [];
      ariaLevel += 1;
      const ariaSetsize = data.length;
      let ariaPosinset = 0;
      data.map(itm => {
        ariaPosinset += 1;
        nodes.push(
          (itm.children && Object.keys(itm.children).length)
            ? tplFolder(itm, ariaLevel, ariaSetsize, ariaPosinset)
            : tplLeaf(itm, ariaLevel, ariaSetsize, ariaPosinset)
        )
      })
      return nodes;
    }
    //*-----------------------------------------------------
    //*- render
    //*-----------------------------------------------------
    const ariaLevel = 0;
    return html`
    <link href = "./tree1.css" rel = "stylesheet">

      <ul role="tree" aria-labelledby=${this.ariaLabelledby}>
        ${recurse(this.data, ariaLevel)}
      </ul>`

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

customElements.define('axel-tree1', AxelTree);

   //*---------------------------------------------------------
  //  isExpandable(e){
  //   // if (e.tagName.toLowerCase() == 'ul') {
  //     return e.getAttribute('aria-expanded')
  //     // elem.setAttribute('role', 'group');
  //     // return true;
  //   // }
  // }
  // handleFocus(event) {
  //   var node = event.target; //ax // var node = this.domNode;
  //   if (this.isExpandable(node)) {
  //     node = node.firstElementChild;
  //   }
  //   node.classList.add('focus');
  // };
  // handleBlur(event) {
  //   // var node = this.domNode;
  //   var node = event.target; //ax
  //   // if (this.isExpandable) {
  //     node = node.firstElementChild;
  //   // }
  //   node.classList.remove('focus');
  // };
  // //!- TODO - PUT THIS IN CSS ?
  // handleMouseOver(event) {
  //   event.currentTarget.classList.add('hover');
  // };
  // handleMouseOut(event) {
  //   event.currentTarget.classList.remove('hover');
  // };

/*
  ?
  ?|\     /|(  ___  )( (    /|(  __  \ ( \      (  ____ \(  ____ )
  °| )   ( || (   ) ||  \  ( || (  \  )| (      | (    \/| (    )|
  °| (___) || (___) ||   \ | || |   ) || |      | (__    | (____)|
  .|  ___  ||  ___  || (\ \) || |   | || |      |  __)   |     __)
  .| (   ) || (   ) || | \   || |   ) || |      | (      | (\ (
  *| )   ( || )   ( || )  \  || (__/  )| (____/\| (____/\| ) \ \__
  *|/     \||/     \||/    )_)(______/ (_______/(_______/|/   \__/
*/

  // handleKeydown(event) {
  //   var tgt = event.currentTarget,
  //     flag = false,
  //     char = event.key,
  //     clickEvent;
  //   // const isPrintableCharacter = (str) => {
  //   //   return str.length === 1 && str.match(/\S/);
  //   // } //isPrintableCharacter
  //   // const printableCharacter = (item) => {
  //   //   if (char == '*') {
  //   //     item.tree.expandAllSiblingItems(item);
  //   //     flag = true;
  //   //   }
  //   //   else {
  //   //     if (isPrintableCharacter(char)) {
  //   //       item.tree.setFocusByFirstCharacter(item, char);
  //   //       flag = true;
  //   //     }
  //   //   }
  //   // } //printableCharacter
  //   // this.stopDefaultClick = false;
  //   if (event.altKey || event.ctrlKey || event.metaKey) {
  //     return;
  //   }
  //   if (event.shift) {
  //     if (event.keyCode == KEYCODE.SPACE || event.keyCode == KEYCODE.RETURN) {
  //       event.stopPropagation();
  //       // this.stopDefaultClick = true;
  //     }
  //     // else {
  //     //   if (isPrintableCharacter(char)) {
  //     //     printableCharacter(this);
  //     //   }
  //     // }
  //   }
  //   else {
  //     switch (event.keyCode) {
  //       case KEYCODE.SPACE:
  //       case KEYCODE.RETURN:
  //         // if (this.isExpandable) {
  //           if (this.isExpanded()) {
  //             this.closeFolder();
  //             // collapseTreeitem(this);
  //           }
  //           else {
  //             this.openFolder();
  //             // expandTreeitem(this);
  //           }
  //           flag = true;
  //         // }
  //         // else {
  //           // event.stopPropagation();
  //           // this.stopDefaultClick = true;
  //         // }
  //         break;
  //       case KEYCODE.UP:
  //         //°-TODO this.setFocusToPreviousItem(this);
  //         flag = true;
  //         break;
  //       case KEYCODE.DOWN:
  //         //°-TODO this.setFocusToNextItem(this);
  //         flag = true;
  //         break;
  //       case KEYCODE.RIGHT:
  //         // if (this.isExpandable) {
  //           if (this.isExpanded()) {
  //             //°-TODO this.setFocusToNextItem(this);
  //           }
  //           else {
  //             // this.expandTreeitem(this);
  //             this.openFolder();
  //           }
  //         // }
  //         flag = true;
  //         break;
  //       case KEYCODE.LEFT:
  //         // if (this.isExpandable && this.isExpanded) { //ax
  //         if (this.isExpanded) {
  //           this.closeFolder();
  //           // this.collapseTreeitem(this);
  //           flag = true;
  //         }
  //         else {
  //           // if (this.inGroup) {
  //           //°-   this.setFocusToParentItem(this);
  //           //   flag = true;
  //           // }
  //         }
  //         break;
  //       case KEYCODE.HOME:
  //         //°-this.setFocusToFirstItem();
  //         flag = true;
  //         break;
  //       case KEYCODE.END:
  //         //°-this.setFocusToLastItem();
  //         flag = true;
  //         break;
  //       default:
  //         // if (this.isPrintableCharacter(char)) {
  //         //   this.printableCharacter(this);
  //         // }
  //         break;
  //     }
  //   }
  //   if (flag) {
  //     event.stopPropagation();
  //     event.preventDefault();
  //   }
  // }; //handle-keydown

  // setFocusToItem(treeitem) {
  //   for (var i = 0; i < this.treeitems.length; i++) {
  //     var ti = this.treeitems[i];
  //     if (ti === treeitem) {
  //       ti.domNode.tabIndex = 0;
  //       ti.domNode.focus();
  //     }
  //     else {
  //       ti.domNode.tabIndex = -1;
  //     }
  //   }
  // };
  // setFocusToNextItem(currentItem) {
  //   var nextItem = false;
  //   for (var i = (this.treeitems.length - 1); i >= 0; i--) {
  //     var ti = this.treeitems[i];
  //     if (ti === currentItem) {
  //       break;
  //     }
  //     if (ti.isVisible) {
  //       nextItem = ti;
  //     }
  //   }
  //   if (nextItem) {
  //     this.setFocusToItem(nextItem);
  //   }
  // };
  // setFocusToPreviousItem(currentItem) {
  //   var prevItem = false;
  //   for (var i = 0; i < this.treeitems.length; i++) {
  //     var ti = this.treeitems[i];
  //     if (ti === currentItem) {
  //       break;
  //     }
  //     if (ti.isVisible) {
  //       prevItem = ti;
  //     }
  //   }
  //   if (prevItem) {
  //     this.setFocusToItem(prevItem);
  //   }
  // };
  // setFocusToParentItem(currentItem) {
  //   if (currentItem.groupTreeitem) {
  //     this.setFocusToItem(currentItem.groupTreeitem);
  //   }
  // };
  // setFocusToFirstItem() {
  //   this.setFocusToItem(this.firstTreeitem);
  // };
  // setFocusToLastItem() {
  //   this.setFocusToItem(this.lastTreeitem);
  // };
  // expandTreeitem(currentItem) {
  //   if (currentItem.isExpandable) {
  //     // currentItem.domNode.setAttribute('aria-expanded', true);
  //     currentItem.setAttribute('aria-expanded', true);
  //     this.updateVisibleTreeitems();
  //   }
  // };
  // expandAllSiblingItems(currentItem) {
  //   for (var i = 0; i < this.treeitems.length; i++) {
  //     var ti = this.treeitems[i];
  //     if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
  //       this.expandTreeitem(ti);
  //     }
  //   }
  // };
  // collapseTreeitem(currentItem) {
  //   var groupTreeitem = false;
  //   if (currentItem.isExpanded) { //ax
  //     groupTreeitem = currentItem;
  //   }
  //   else {
  //     groupTreeitem = currentItem.groupTreeitem;
  //   }
  //   if (groupTreeitem) {
  //     // groupTreeitem.domNode.setAttribute('aria-expanded', false);
  //     groupTreeitem.setAttribute('aria-expanded', false);
  //     this.updateVisibleTreeitems();
  //     this.setFocusToItem(groupTreeitem);
  //   }
  // }
  // updateVisibleTreeitems() {//*-------------------------------------------------------
  //   this.firstTreeitem = this.treeitems[0];
  //   for (var i = 0; i < this.treeitems.length; i++) {
  //     var ti = this.treeitems[i];
  //     var parent = ti.domNode.parentNode;
  //     ti.isVisible = true;
  //     while (parent && (parent !== this.domNode)) {
  //       if (parent.getAttribute('aria-expanded') == 'false') {
  //         ti.isVisible = false;
  //       }
  //       parent = parent.parentNode;
  //     }
  //     if (ti.isVisible) {
  //       this.lastTreeitem = ti;
  //     }
  //   }
  // };
  // setFocusByFirstCharacter(currentItem, char) { //*-------------------------------------------------------
  //   var start, index, char = char.toLowerCase();
  //   // Get start index for search based on position of currentItem
  //   start = this.treeitems.indexOf(currentItem) + 1;
  //   if (start === this.treeitems.length) {
  //     start = 0;
  //   }
  //   // Check remaining slots in the menu
  //   index = this.getIndexFirstChars(start, char);
  //   // If not found in remaining slots, check from beginning
  //   if (index === -1) {
  //     index = this.getIndexFirstChars(0, char);
  //   }
  //   // If match was found...
  //   if (index > -1) {
  //     this.setFocusToItem(this.treeitems[index]);
  //   }
  // };
  // getIndexFirstChars(startIndex, char) {
  //   for (var i = startIndex; i < this.firstChars.length; i++) {
  //     if (this.treeitems[i].isVisible) {
  //       if (char === this.firstChars[i]) {
  //         return i;
  //       }
  //     }
  //   }
  //   return -1;
  // };
