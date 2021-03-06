/*
*   This content is licensed according to the W3C Software License at
* https:   //www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
* File: TreeitemLink.js
*
* Desc: Treeitem widget that implements ARIA Authoring Practices
*           for a tree being used as a file viewer
*/
(async () => { })()
import { LitElement, html } from 'lit-element';
// import { styleMap } from 'lit-html/directives/style-map';
import './axel-treeitem.js';


class AxelTreeItem extends LitElement {
  /*
  *   @constructor
  *
  *   @desc
  *       Treeitem object for representing the state and user interactions for a
  *       treeItem widget
  *
  *   @param node
  * An element with the role = tree attribute
  */
  constructor(node, treeObj, group) {
    super();
    console.log('constructing <axel-treeitem> ...');


    //=new
    this.id = "";
    this.title = ""


    // Check whether node is a DOM element
    // if (typeof node !== 'object') {
    //   return;
    // }

    node.tabIndex = -1;

    this.domNode = node;
    this.tree = treeObj;
    this.groupTreeitem = group;

    this.label = node.textContent.trim();
    this.stopDefaultClick = false;

    // if (node.getAttribute('aria-label')) {
    //   this.label = node.getAttribute('aria-label').trim();
    // }

    this.isExpandable = false;
    this.isVisible = false;
    this.inGroup = false;

    if (group) {
      this.inGroup = true;
    }

    var elem = node.firstElementChild;

    while (elem) {
      if (elem.tagName.toLowerCase() == 'ul') {
        elem.setAttribute('role', 'group');
        this.isExpandable = true;
        break;
      }
      elem = elem.nextElementSibling;
    }

    this.keyCode = Object.freeze({
      RETURN: 13,
      SPACE: 32,
      PAGEUP: 33,
      PAGEDOWN: 34,
      END: 35,
      HOME: 36,
      LEFT: 37,
      UP: 38,
      RIGHT: 39,
      DOWN: 40
    });

    //----------------------------------------------------------
    //init

    this.domNode.tabIndex = -1;
    if (!this.domNode.getAttribute('role')) {
      this.domNode.setAttribute('role', 'treeitem');
    }

    // doc TPL => je pense que domNode est inutile ! c est le template lui meme
    //  this.addEventListener('stuff-loaded', (e) => { this.message = e.detail } );

    this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
    this.domNode.addEventListener('click', this.handleClick.bind(this));
    this.domNode.addEventListener('focus', this.handleFocus.bind(this));
    this.domNode.addEventListener('blur', this.handleBlur.bind(this));
    // @keydown = "${this.handleKeydown}"
    // @click = "${this.handleClick}"
    // @focus = "${this.handleFocus}"
    // @blur = "${this.handleBlur}"
    if (this.isExpandable) {
      this.domNode.firstElementChild.addEventListener('mouseover', this.handleMouseOver.bind(this));
      this.domNode.firstElementChild.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }
    else {
      this.domNode.addEventListener('mouseover', this.handleMouseOver.bind(this));
      this.domNode.addEventListener('mouseout', this.handleMouseOut.bind(this));
    }
  }

  static get properties() {
    return {
      domNode: { type: Object },
      tree: { type: Object },
      groupTreeitem: { type: Object },
      label: { type: Object },
      // stopDefaultClick: { type: Boolean },
      // isExpandable    : { type: Boolean },
      // inGroup         : { type: Boolean },

      //=new
      id: { type: Number },
      title: { type: String },
    };
  }

  isExpanded() {
    if (this.isExpandable) {
      return this.domNode.getAttribute('aria-expanded') === 'true';
    }
    return false;
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
    console.log('rendering axel-item ...');
    // const styles = {
    //    marginLeft: `${this.css_marginLeft}`,
    //   };

    //*-----------------------------------------------------
    //*
    //*-----------------------------------------------------
    return html`
<li role="treeitem" aria-expanded="false">
            <span>
              ${this.title} (${this.id})
            </span>
</li>
          `;
    //*-----------------------------------------------------
    //*
    //*-----------------------------------------------------
    // return html`
    //    <link href = "./0-ui/widget/4-tree/axel-treeitem.css" rel = "stylesheet">

    //    <div class = "wrapper" style = ${styleMap(styles)}  @click = "${this.handleClick}" >
    //         ${this.name}
    //    </div>
    //   `;
  } //render

  //----------------------------------------------------------
  /* EVENT HANDLERS */
  //----------------------------------------------------------

  // handleClick(){
  //   console.log('clic !');
  //   // fire event to parent => open the structure
  // }

  handleClick(event) {
    // only process click events that directly happened on this treeitem
    if (event.target !== this.domNode && event.target !== this.domNode.firstElementChild) {
      return;
    }
    if (this.isExpandable) {
      if (this.isExpanded()) {
        this.tree.collapseTreeitem(this);
      }
      else {
        this.tree.expandTreeitem(this);
      }
      event.stopPropagation();
    }
  }

  handleFocus() {
    var node = this.domNode;
    if (this.isExpandable) {
      node = node.firstElementChild;
    }
    node.classList.add('focus');
  }

  handleBlur() {
    var node = this.domNode;
    if (this.isExpandable) {
      node = node.firstElementChild;
    }
    node.classList.remove('focus');
  }

  // handleMouseOver(event) {
  handleMouseOver() {
    event.currentTarget.classList.add('hover');
  }

  handleMouseOut() {
    event.currentTarget.classList.remove('hover');
  }

  handleKeydown(event) {
    // tgt = event.currentTarget,
    let
      flag = false,
      char = event.key;


    function isPrintableCharacter(str) {
      return str.length === 1 && str.match(/\S/);
    }

    function printableCharacter(item) {
      if (char == '*') {
        item.tree.expandAllSiblingItems(item);
        flag = true;
      }
      else {
        if (isPrintableCharacter(char)) {
          item.tree.setFocusByFirstCharacter(item, char);
          flag = true;
        }
      }
    }
    this.stopDefaultClick = false;
    if (event.altKey || event.ctrlKey || event.metaKey) {
      return;
    }
    if (event.shift) {
      if (event.keyCode == this.keyCode.SPACE || event.keyCode == this.keyCode.RETURN) {
        event.stopPropagation();
        this.stopDefaultClick = true;
      }
      else {
        if (isPrintableCharacter(char)) {
          printableCharacter(this);
        }
      }
    }
    else {
      switch (event.keyCode) {
        case this.keyCode.SPACE:
        case this.keyCode.RETURN:
          if (this.isExpandable) {
            if (this.isExpanded()) {
              this.tree.collapseTreeitem(this);
            }
            else {
              this.tree.expandTreeitem(this);
            }
            flag = true;
          }
          else {
            event.stopPropagation();
            this.stopDefaultClick = true;
          }
          break;
        case this.keyCode.UP:
          this.tree.setFocusToPreviousItem(this);
          flag = true;
          break;
        case this.keyCode.DOWN:
          this.tree.setFocusToNextItem(this);
          flag = true;
          break;
        case this.keyCode.RIGHT:
          if (this.isExpandable) {
            if (this.isExpanded()) {
              this.tree.setFocusToNextItem(this);
            }
            else {
              this.tree.expandTreeitem(this);
            }
          }
          flag = true;
          break;
        case this.keyCode.LEFT:
          if (this.isExpandable && this.isExpanded()) {
            this.tree.collapseTreeitem(this);
            flag = true;
          }
          else {
            if (this.inGroup) {
              this.tree.setFocusToParentItem(this);
              flag = true;
            }
          }
          break;
        case this.keyCode.HOME:
          this.tree.setFocusToFirstItem();
          flag = true;
          break;
        case this.keyCode.END:
          this.tree.setFocusToLastItem();
          flag = true;
          break;
        default:
          if (isPrintableCharacter(char)) {
            printableCharacter(this);
          }
          break;
      }
    } //else
    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  } //handleKeydown

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

customElements.define('axel-treeitem', AxelTreeItem);
