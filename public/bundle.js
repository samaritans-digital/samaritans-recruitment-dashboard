/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/fetchKpis.js":
/*!*****************************!*\
  !*** ./client/fetchKpis.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _isomorphicUnfetch = __webpack_require__(/*! isomorphic-unfetch */ \"./node_modules/isomorphic-unfetch/browser.js\");\n\nvar _isomorphicUnfetch2 = _interopRequireDefault(_isomorphicUnfetch);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = () => {\n  // Check that the DOM elements exist\n  if (document.querySelector(\".kpis\")) {\n    const applicants = document.querySelector('#kpi-applicants');\n    const slots = document.querySelector('#kpi-unbooked-slots');\n    const waiting = document.querySelector('#kpi-avg-waiting-time');\n    let query = parseQuery(window.location.search);\n    fetchKpis(query.branch).then(data => {\n      applicants.innerHTML = data.applicantCount;\n      slots.innerHTML = data.unbookedSlots;\n      waiting.innerHTML = data.avgWaitingTime ? `${data.avgWaitingTime} days` : '?';\n    }).catch(data => {\n      applicants.innerHTML = '?';\n      slots.innerHTML = '?';\n      waiting.innerHTML = '?';\n    });\n  }\n};\n\nconst parseQuery = search => {\n  var query = search.substr(1);\n  var result = {};\n  query.split(\"&\").forEach(function (part) {\n    var item = part.split(\"=\");\n    result[item[0]] = decodeURIComponent(item[1]);\n  });\n  return result;\n};\n\nconst fetchKpis = async branchId => {\n  let endpoint = \"/api/kpis\";\n\n  if (branchId) {\n    endpoint = `/api/kpis/${branchId}`;\n  }\n\n  const response = await (0, _isomorphicUnfetch2.default)(endpoint);\n  const data = await response.json();\n  return data;\n};\n\n//# sourceURL=webpack:///./client/fetchKpis.js?");

/***/ }),

/***/ "./client/launchModal.js":
/*!*******************************!*\
  !*** ./client/launchModal.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _dialogPolyfill = __webpack_require__(/*! dialog-polyfill */ \"./node_modules/dialog-polyfill/dialog-polyfill.js\");\n\nvar _dialogPolyfill2 = _interopRequireDefault(_dialogPolyfill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = () => {\n  if (document.querySelector('#launch-modal')) {\n    const button = document.querySelector('#launch-modal');\n    const modal = document.querySelector('.modal');\n    const close = document.querySelector('.modal .modal__close'); // Turn on polyfill\n\n    _dialogPolyfill2.default.registerDialog(modal);\n\n    button.addEventListener('click', () => {\n      modal.showModal();\n    });\n    close.addEventListener('click', () => {\n      modal.close();\n    });\n  }\n};\n\n//# sourceURL=webpack:///./client/launchModal.js?");

/***/ }),

/***/ "./client/main.js":
/*!************************!*\
  !*** ./client/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _submitFilters = __webpack_require__(/*! ./submitFilters */ \"./client/submitFilters.js\");\n\nvar _submitFilters2 = _interopRequireDefault(_submitFilters);\n\nvar _launchModal = __webpack_require__(/*! ./launchModal */ \"./client/launchModal.js\");\n\nvar _launchModal2 = _interopRequireDefault(_launchModal);\n\nvar _removeUser = __webpack_require__(/*! ./removeUser */ \"./client/removeUser.js\");\n\nvar _removeUser2 = _interopRequireDefault(_removeUser);\n\nvar _fetchKpis = __webpack_require__(/*! ./fetchKpis */ \"./client/fetchKpis.js\");\n\nvar _fetchKpis2 = _interopRequireDefault(_fetchKpis);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nwindow.addEventListener(\"DOMContentLoaded\", () => {\n  (0, _submitFilters2.default)();\n  (0, _launchModal2.default)();\n  (0, _fetchKpis2.default)();\n  (0, _removeUser2.default)();\n});\n\n//# sourceURL=webpack:///./client/main.js?");

/***/ }),

/***/ "./client/removeUser.js":
/*!******************************!*\
  !*** ./client/removeUser.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _dialogPolyfill = __webpack_require__(/*! dialog-polyfill */ \"./node_modules/dialog-polyfill/dialog-polyfill.js\");\n\nvar _dialogPolyfill2 = _interopRequireDefault(_dialogPolyfill);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = () => {\n  if (document.querySelector('#launch-remove-user-modal')) {\n    const buttons = document.querySelectorAll('#launch-remove-user-modal');\n    const modal = document.querySelector('.modal');\n    const close = document.querySelector('.modal .modal__close');\n    const emailField = document.querySelector('.modal #email-to-remove'); // Turn on polyfill\n\n    _dialogPolyfill2.default.registerDialog(modal);\n\n    console.log(buttons);\n    buttons.forEach(button => {\n      button.addEventListener('click', () => {\n        // Set value of field to remove\n        emailField.value = button.dataset.user;\n        modal.showModal();\n      });\n    });\n    close.addEventListener('click', () => {\n      modal.close();\n    });\n  }\n};\n\n//# sourceURL=webpack:///./client/removeUser.js?");

/***/ }),

/***/ "./client/submitFilters.js":
/*!*********************************!*\
  !*** ./client/submitFilters.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = () => {\n  if (document.querySelector(\".applicants-filters\")) {\n    // Grab DOM elements\n    const form = document.querySelector(\".applicants-filters\");\n    const sort = form.querySelector(\"select[name=sort]\");\n    const branch = form.querySelector(\"select[name=branch]\"); // When something is changed, trigger reload\n\n    form.addEventListener('change', () => {\n      window.location = `/?sort=${sort ? sort.value : \"\"}&branch=${branch ? branch.value : \"\"}`;\n    });\n  }\n};\n\n//# sourceURL=webpack:///./client/submitFilters.js?");

/***/ }),

/***/ "./node_modules/dialog-polyfill/dialog-polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/dialog-polyfill/dialog-polyfill.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_RESULT__;(function() {\n\n  // nb. This is for IE10 and lower _only_.\n  var supportCustomEvent = window.CustomEvent;\n  if (!supportCustomEvent || typeof supportCustomEvent === 'object') {\n    supportCustomEvent = function CustomEvent(event, x) {\n      x = x || {};\n      var ev = document.createEvent('CustomEvent');\n      ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);\n      return ev;\n    };\n    supportCustomEvent.prototype = window.Event.prototype;\n  }\n\n  /**\n   * @param {Element} el to check for stacking context\n   * @return {boolean} whether this el or its parents creates a stacking context\n   */\n  function createsStackingContext(el) {\n    while (el && el !== document.body) {\n      var s = window.getComputedStyle(el);\n      var invalid = function(k, ok) {\n        return !(s[k] === undefined || s[k] === ok);\n      }\n      if (s.opacity < 1 ||\n          invalid('zIndex', 'auto') ||\n          invalid('transform', 'none') ||\n          invalid('mixBlendMode', 'normal') ||\n          invalid('filter', 'none') ||\n          invalid('perspective', 'none') ||\n          s['isolation'] === 'isolate' ||\n          s.position === 'fixed' ||\n          s.webkitOverflowScrolling === 'touch') {\n        return true;\n      }\n      el = el.parentElement;\n    }\n    return false;\n  }\n\n  /**\n   * Finds the nearest <dialog> from the passed element.\n   *\n   * @param {Element} el to search from\n   * @return {HTMLDialogElement} dialog found\n   */\n  function findNearestDialog(el) {\n    while (el) {\n      if (el.localName === 'dialog') {\n        return /** @type {HTMLDialogElement} */ (el);\n      }\n      el = el.parentElement;\n    }\n    return null;\n  }\n\n  /**\n   * Blur the specified element, as long as it's not the HTML body element.\n   * This works around an IE9/10 bug - blurring the body causes Windows to\n   * blur the whole application.\n   *\n   * @param {Element} el to blur\n   */\n  function safeBlur(el) {\n    if (el && el.blur && el !== document.body) {\n      el.blur();\n    }\n  }\n\n  /**\n   * @param {!NodeList} nodeList to search\n   * @param {Node} node to find\n   * @return {boolean} whether node is inside nodeList\n   */\n  function inNodeList(nodeList, node) {\n    for (var i = 0; i < nodeList.length; ++i) {\n      if (nodeList[i] === node) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  /**\n   * @param {HTMLFormElement} el to check\n   * @return {boolean} whether this form has method=\"dialog\"\n   */\n  function isFormMethodDialog(el) {\n    if (!el || !el.hasAttribute('method')) {\n      return false;\n    }\n    return el.getAttribute('method').toLowerCase() === 'dialog';\n  }\n\n  /**\n   * @param {!HTMLDialogElement} dialog to upgrade\n   * @constructor\n   */\n  function dialogPolyfillInfo(dialog) {\n    this.dialog_ = dialog;\n    this.replacedStyleTop_ = false;\n    this.openAsModal_ = false;\n\n    // Set a11y role. Browsers that support dialog implicitly know this already.\n    if (!dialog.hasAttribute('role')) {\n      dialog.setAttribute('role', 'dialog');\n    }\n\n    dialog.show = this.show.bind(this);\n    dialog.showModal = this.showModal.bind(this);\n    dialog.close = this.close.bind(this);\n\n    if (!('returnValue' in dialog)) {\n      dialog.returnValue = '';\n    }\n\n    if ('MutationObserver' in window) {\n      var mo = new MutationObserver(this.maybeHideModal.bind(this));\n      mo.observe(dialog, {attributes: true, attributeFilter: ['open']});\n    } else {\n      // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also\n      // seem to fire even if the element was removed as part of a parent removal. Use the removed\n      // events to force downgrade (useful if removed/immediately added).\n      var removed = false;\n      var cb = function() {\n        removed ? this.downgradeModal() : this.maybeHideModal();\n        removed = false;\n      }.bind(this);\n      var timeout;\n      var delayModel = function(ev) {\n        if (ev.target !== dialog) { return; }  // not for a child element\n        var cand = 'DOMNodeRemoved';\n        removed |= (ev.type.substr(0, cand.length) === cand);\n        window.clearTimeout(timeout);\n        timeout = window.setTimeout(cb, 0);\n      };\n      ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {\n        dialog.addEventListener(name, delayModel);\n      });\n    }\n    // Note that the DOM is observed inside DialogManager while any dialog\n    // is being displayed as a modal, to catch modal removal from the DOM.\n\n    Object.defineProperty(dialog, 'open', {\n      set: this.setOpen.bind(this),\n      get: dialog.hasAttribute.bind(dialog, 'open')\n    });\n\n    this.backdrop_ = document.createElement('div');\n    this.backdrop_.className = 'backdrop';\n    this.backdrop_.addEventListener('click', this.backdropClick_.bind(this));\n  }\n\n  dialogPolyfillInfo.prototype = {\n\n    get dialog() {\n      return this.dialog_;\n    },\n\n    /**\n     * Maybe remove this dialog from the modal top layer. This is called when\n     * a modal dialog may no longer be tenable, e.g., when the dialog is no\n     * longer open or is no longer part of the DOM.\n     */\n    maybeHideModal: function() {\n      if (this.dialog_.hasAttribute('open') && document.body.contains(this.dialog_)) { return; }\n      this.downgradeModal();\n    },\n\n    /**\n     * Remove this dialog from the modal top layer, leaving it as a non-modal.\n     */\n    downgradeModal: function() {\n      if (!this.openAsModal_) { return; }\n      this.openAsModal_ = false;\n      this.dialog_.style.zIndex = '';\n\n      // This won't match the native <dialog> exactly because if the user set top on a centered\n      // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's\n      // possible to polyfill this perfectly.\n      if (this.replacedStyleTop_) {\n        this.dialog_.style.top = '';\n        this.replacedStyleTop_ = false;\n      }\n\n      // Clear the backdrop and remove from the manager.\n      this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);\n      dialogPolyfill.dm.removeDialog(this);\n    },\n\n    /**\n     * @param {boolean} value whether to open or close this dialog\n     */\n    setOpen: function(value) {\n      if (value) {\n        this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');\n      } else {\n        this.dialog_.removeAttribute('open');\n        this.maybeHideModal();  // nb. redundant with MutationObserver\n      }\n    },\n\n    /**\n     * Handles clicks on the fake .backdrop element, redirecting them as if\n     * they were on the dialog itself.\n     *\n     * @param {!Event} e to redirect\n     */\n    backdropClick_: function(e) {\n      if (!this.dialog_.hasAttribute('tabindex')) {\n        // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be\n        // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this\n        // would not be needed - clicks would move the implicit cursor there.\n        var fake = document.createElement('div');\n        this.dialog_.insertBefore(fake, this.dialog_.firstChild);\n        fake.tabIndex = -1;\n        fake.focus();\n        this.dialog_.removeChild(fake);\n      } else {\n        this.dialog_.focus();\n      }\n\n      var redirectedEvent = document.createEvent('MouseEvents');\n      redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,\n          e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,\n          e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);\n      this.dialog_.dispatchEvent(redirectedEvent);\n      e.stopPropagation();\n    },\n\n    /**\n     * Focuses on the first focusable element within the dialog. This will always blur the current\n     * focus, even if nothing within the dialog is found.\n     */\n    focus_: function() {\n      // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.\n      var target = this.dialog_.querySelector('[autofocus]:not([disabled])');\n      if (!target && this.dialog_.tabIndex >= 0) {\n        target = this.dialog_;\n      }\n      if (!target) {\n        // Note that this is 'any focusable area'. This list is probably not exhaustive, but the\n        // alternative involves stepping through and trying to focus everything.\n        var opts = ['button', 'input', 'keygen', 'select', 'textarea'];\n        var query = opts.map(function(el) {\n          return el + ':not([disabled])';\n        });\n        // TODO(samthor): tabindex values that are not numeric are not focusable.\n        query.push('[tabindex]:not([disabled]):not([tabindex=\"\"])');  // tabindex != \"\", not disabled\n        target = this.dialog_.querySelector(query.join(', '));\n      }\n      safeBlur(document.activeElement);\n      target && target.focus();\n    },\n\n    /**\n     * Sets the zIndex for the backdrop and dialog.\n     *\n     * @param {number} dialogZ\n     * @param {number} backdropZ\n     */\n    updateZIndex: function(dialogZ, backdropZ) {\n      if (dialogZ < backdropZ) {\n        throw new Error('dialogZ should never be < backdropZ');\n      }\n      this.dialog_.style.zIndex = dialogZ;\n      this.backdrop_.style.zIndex = backdropZ;\n    },\n\n    /**\n     * Shows the dialog. If the dialog is already open, this does nothing.\n     */\n    show: function() {\n      if (!this.dialog_.open) {\n        this.setOpen(true);\n        this.focus_();\n      }\n    },\n\n    /**\n     * Show this dialog modally.\n     */\n    showModal: function() {\n      if (this.dialog_.hasAttribute('open')) {\n        throw new Error('Failed to execute \\'showModal\\' on dialog: The element is already open, and therefore cannot be opened modally.');\n      }\n      if (!document.body.contains(this.dialog_)) {\n        throw new Error('Failed to execute \\'showModal\\' on dialog: The element is not in a Document.');\n      }\n      if (!dialogPolyfill.dm.pushDialog(this)) {\n        throw new Error('Failed to execute \\'showModal\\' on dialog: There are too many open modal dialogs.');\n      }\n\n      if (createsStackingContext(this.dialog_.parentElement)) {\n        console.warn('A dialog is being shown inside a stacking context. ' +\n            'This may cause it to be unusable. For more information, see this link: ' +\n            'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');\n      }\n\n      this.setOpen(true);\n      this.openAsModal_ = true;\n\n      // Optionally center vertically, relative to the current viewport.\n      if (dialogPolyfill.needsCentering(this.dialog_)) {\n        dialogPolyfill.reposition(this.dialog_);\n        this.replacedStyleTop_ = true;\n      } else {\n        this.replacedStyleTop_ = false;\n      }\n\n      // Insert backdrop.\n      this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);\n\n      // Focus on whatever inside the dialog.\n      this.focus_();\n    },\n\n    /**\n     * Closes this HTMLDialogElement. This is optional vs clearing the open\n     * attribute, however this fires a 'close' event.\n     *\n     * @param {string=} opt_returnValue to use as the returnValue\n     */\n    close: function(opt_returnValue) {\n      if (!this.dialog_.hasAttribute('open')) {\n        throw new Error('Failed to execute \\'close\\' on dialog: The element does not have an \\'open\\' attribute, and therefore cannot be closed.');\n      }\n      this.setOpen(false);\n\n      // Leave returnValue untouched in case it was set directly on the element\n      if (opt_returnValue !== undefined) {\n        this.dialog_.returnValue = opt_returnValue;\n      }\n\n      // Triggering \"close\" event for any attached listeners on the <dialog>.\n      var closeEvent = new supportCustomEvent('close', {\n        bubbles: false,\n        cancelable: false\n      });\n      this.dialog_.dispatchEvent(closeEvent);\n    }\n\n  };\n\n  var dialogPolyfill = {};\n\n  dialogPolyfill.reposition = function(element) {\n    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;\n    var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;\n    element.style.top = Math.max(scrollTop, topValue) + 'px';\n  };\n\n  dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {\n    for (var i = 0; i < document.styleSheets.length; ++i) {\n      var styleSheet = document.styleSheets[i];\n      var cssRules = null;\n      // Some browsers throw on cssRules.\n      try {\n        cssRules = styleSheet.cssRules;\n      } catch (e) {}\n      if (!cssRules) { continue; }\n      for (var j = 0; j < cssRules.length; ++j) {\n        var rule = cssRules[j];\n        var selectedNodes = null;\n        // Ignore errors on invalid selector texts.\n        try {\n          selectedNodes = document.querySelectorAll(rule.selectorText);\n        } catch(e) {}\n        if (!selectedNodes || !inNodeList(selectedNodes, element)) {\n          continue;\n        }\n        var cssTop = rule.style.getPropertyValue('top');\n        var cssBottom = rule.style.getPropertyValue('bottom');\n        if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {\n          return true;\n        }\n      }\n    }\n    return false;\n  };\n\n  dialogPolyfill.needsCentering = function(dialog) {\n    var computedStyle = window.getComputedStyle(dialog);\n    if (computedStyle.position !== 'absolute') {\n      return false;\n    }\n\n    // We must determine whether the top/bottom specified value is non-auto.  In\n    // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but\n    // Firefox returns the used value. So we do this crazy thing instead: check\n    // the inline style and then go through CSS rules.\n    if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||\n        (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {\n      return false;\n    }\n    return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);\n  };\n\n  /**\n   * @param {!Element} element to force upgrade\n   */\n  dialogPolyfill.forceRegisterDialog = function(element) {\n    if (window.HTMLDialogElement || element.showModal) {\n      console.warn('This browser already supports <dialog>, the polyfill ' +\n          'may not work correctly', element);\n    }\n    if (element.localName !== 'dialog') {\n      throw new Error('Failed to register dialog: The element is not a dialog.');\n    }\n    new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));\n  };\n\n  /**\n   * @param {!Element} element to upgrade, if necessary\n   */\n  dialogPolyfill.registerDialog = function(element) {\n    if (!element.showModal) {\n      dialogPolyfill.forceRegisterDialog(element);\n    }\n  };\n\n  /**\n   * @constructor\n   */\n  dialogPolyfill.DialogManager = function() {\n    /** @type {!Array<!dialogPolyfillInfo>} */\n    this.pendingDialogStack = [];\n\n    var checkDOM = this.checkDOM_.bind(this);\n\n    // The overlay is used to simulate how a modal dialog blocks the document.\n    // The blocking dialog is positioned on top of the overlay, and the rest of\n    // the dialogs on the pending dialog stack are positioned below it. In the\n    // actual implementation, the modal dialog stacking is controlled by the\n    // top layer, where z-index has no effect.\n    this.overlay = document.createElement('div');\n    this.overlay.className = '_dialog_overlay';\n    this.overlay.addEventListener('click', function(e) {\n      this.forwardTab_ = undefined;\n      e.stopPropagation();\n      checkDOM([]);  // sanity-check DOM\n    }.bind(this));\n\n    this.handleKey_ = this.handleKey_.bind(this);\n    this.handleFocus_ = this.handleFocus_.bind(this);\n\n    this.zIndexLow_ = 100000;\n    this.zIndexHigh_ = 100000 + 150;\n\n    this.forwardTab_ = undefined;\n\n    if ('MutationObserver' in window) {\n      this.mo_ = new MutationObserver(function(records) {\n        var removed = [];\n        records.forEach(function(rec) {\n          for (var i = 0, c; c = rec.removedNodes[i]; ++i) {\n            if (!(c instanceof Element)) {\n              continue;\n            } else if (c.localName === 'dialog') {\n              removed.push(c);\n            }\n            removed = removed.concat(c.querySelectorAll('dialog'));\n          }\n        });\n        removed.length && checkDOM(removed);\n      });\n    }\n  };\n\n  /**\n   * Called on the first modal dialog being shown. Adds the overlay and related\n   * handlers.\n   */\n  dialogPolyfill.DialogManager.prototype.blockDocument = function() {\n    document.documentElement.addEventListener('focus', this.handleFocus_, true);\n    document.addEventListener('keydown', this.handleKey_);\n    this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});\n  };\n\n  /**\n   * Called on the first modal dialog being removed, i.e., when no more modal\n   * dialogs are visible.\n   */\n  dialogPolyfill.DialogManager.prototype.unblockDocument = function() {\n    document.documentElement.removeEventListener('focus', this.handleFocus_, true);\n    document.removeEventListener('keydown', this.handleKey_);\n    this.mo_ && this.mo_.disconnect();\n  };\n\n  /**\n   * Updates the stacking of all known dialogs.\n   */\n  dialogPolyfill.DialogManager.prototype.updateStacking = function() {\n    var zIndex = this.zIndexHigh_;\n\n    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {\n      dpi.updateZIndex(--zIndex, --zIndex);\n      if (i === 0) {\n        this.overlay.style.zIndex = --zIndex;\n      }\n    }\n\n    // Make the overlay a sibling of the dialog itself.\n    var last = this.pendingDialogStack[0];\n    if (last) {\n      var p = last.dialog.parentNode || document.body;\n      p.appendChild(this.overlay);\n    } else if (this.overlay.parentNode) {\n      this.overlay.parentNode.removeChild(this.overlay);\n    }\n  };\n\n  /**\n   * @param {Element} candidate to check if contained or is the top-most modal dialog\n   * @return {boolean} whether candidate is contained in top dialog\n   */\n  dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {\n    while (candidate = findNearestDialog(candidate)) {\n      for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {\n        if (dpi.dialog === candidate) {\n          return i === 0;  // only valid if top-most\n        }\n      }\n      candidate = candidate.parentElement;\n    }\n    return false;\n  };\n\n  dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {\n    if (this.containedByTopDialog_(event.target)) { return; }\n\n    event.preventDefault();\n    event.stopPropagation();\n    safeBlur(/** @type {Element} */ (event.target));\n\n    if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key\n\n    var dpi = this.pendingDialogStack[0];\n    var dialog = dpi.dialog;\n    var position = dialog.compareDocumentPosition(event.target);\n    if (position & Node.DOCUMENT_POSITION_PRECEDING) {\n      if (this.forwardTab_) {  // forward\n        dpi.focus_();\n      } else {  // backwards\n        document.documentElement.focus();\n      }\n    } else {\n      // TODO: Focus after the dialog, is ignored.\n    }\n\n    return false;\n  };\n\n  dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {\n    this.forwardTab_ = undefined;\n    if (event.keyCode === 27) {\n      event.preventDefault();\n      event.stopPropagation();\n      var cancelEvent = new supportCustomEvent('cancel', {\n        bubbles: false,\n        cancelable: true\n      });\n      var dpi = this.pendingDialogStack[0];\n      if (dpi && dpi.dialog.dispatchEvent(cancelEvent)) {\n        dpi.dialog.close();\n      }\n    } else if (event.keyCode === 9) {\n      this.forwardTab_ = !event.shiftKey;\n    }\n  };\n\n  /**\n   * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are\n   * removed and immediately readded don't stay modal, they become normal.\n   *\n   * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed\n   */\n  dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {\n    // This operates on a clone because it may cause it to change. Each change also calls\n    // updateStacking, which only actually needs to happen once. But who removes many modal dialogs\n    // at a time?!\n    var clone = this.pendingDialogStack.slice();\n    clone.forEach(function(dpi) {\n      if (removed.indexOf(dpi.dialog) !== -1) {\n        dpi.downgradeModal();\n      } else {\n        dpi.maybeHideModal();\n      }\n    });\n  };\n\n  /**\n   * @param {!dialogPolyfillInfo} dpi\n   * @return {boolean} whether the dialog was allowed\n   */\n  dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {\n    var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;\n    if (this.pendingDialogStack.length >= allowed) {\n      return false;\n    }\n    if (this.pendingDialogStack.unshift(dpi) === 1) {\n      this.blockDocument();\n    }\n    this.updateStacking();\n    return true;\n  };\n\n  /**\n   * @param {!dialogPolyfillInfo} dpi\n   */\n  dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {\n    var index = this.pendingDialogStack.indexOf(dpi);\n    if (index === -1) { return; }\n\n    this.pendingDialogStack.splice(index, 1);\n    if (this.pendingDialogStack.length === 0) {\n      this.unblockDocument();\n    }\n    this.updateStacking();\n  };\n\n  dialogPolyfill.dm = new dialogPolyfill.DialogManager();\n  dialogPolyfill.formSubmitter = null;\n  dialogPolyfill.useValue = null;\n\n  /**\n   * Installs global handlers, such as click listers and native method overrides. These are needed\n   * even if a no dialog is registered, as they deal with <form method=\"dialog\">.\n   */\n  if (window.HTMLDialogElement === undefined) {\n\n    /**\n     * If HTMLFormElement translates method=\"DIALOG\" into 'get', then replace the descriptor with\n     * one that returns the correct value.\n     */\n    var testForm = document.createElement('form');\n    testForm.setAttribute('method', 'dialog');\n    if (testForm.method !== 'dialog') {\n      var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');\n      if (methodDescriptor) {\n        // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything\n        // and don't bother to update the element.\n        var realGet = methodDescriptor.get;\n        methodDescriptor.get = function() {\n          if (isFormMethodDialog(this)) {\n            return 'dialog';\n          }\n          return realGet.call(this);\n        };\n        var realSet = methodDescriptor.set;\n        methodDescriptor.set = function(v) {\n          if (typeof v === 'string' && v.toLowerCase() === 'dialog') {\n            return this.setAttribute('method', v);\n          }\n          return realSet.call(this, v);\n        };\n        Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);\n      }\n    }\n\n    /**\n     * Global 'click' handler, to capture the <input type=\"submit\"> or <button> element which has\n     * submitted a <form method=\"dialog\">. Needed as Safari and others don't report this inside\n     * document.activeElement.\n     */\n    document.addEventListener('click', function(ev) {\n      dialogPolyfill.formSubmitter = null;\n      dialogPolyfill.useValue = null;\n      if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission\n\n      var target = /** @type {Element} */ (ev.target);\n      if (!target || !isFormMethodDialog(target.form)) { return; }\n\n      var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);\n      if (!valid) {\n        if (!(target.localName === 'input' && target.type === 'image')) { return; }\n        // this is a <input type=\"image\">, which can submit forms\n        dialogPolyfill.useValue = ev.offsetX + ',' + ev.offsetY;\n      }\n\n      var dialog = findNearestDialog(target);\n      if (!dialog) { return; }\n\n      dialogPolyfill.formSubmitter = target;\n    }, false);\n\n    /**\n     * Replace the native HTMLFormElement.submit() method, as it won't fire the\n     * submit event and give us a chance to respond.\n     */\n    var nativeFormSubmit = HTMLFormElement.prototype.submit;\n    var replacementFormSubmit = function () {\n      if (!isFormMethodDialog(this)) {\n        return nativeFormSubmit.call(this);\n      }\n      var dialog = findNearestDialog(this);\n      dialog && dialog.close();\n    };\n    HTMLFormElement.prototype.submit = replacementFormSubmit;\n\n    /**\n     * Global form 'dialog' method handler. Closes a dialog correctly on submit\n     * and possibly sets its return value.\n     */\n    document.addEventListener('submit', function(ev) {\n      var form = /** @type {HTMLFormElement} */ (ev.target);\n      if (!isFormMethodDialog(form)) { return; }\n      ev.preventDefault();\n\n      var dialog = findNearestDialog(form);\n      if (!dialog) { return; }\n\n      // Forms can only be submitted via .submit() or a click (?), but anyway: sanity-check that\n      // the submitter is correct before using its value as .returnValue.\n      var s = dialogPolyfill.formSubmitter;\n      if (s && s.form === form) {\n        dialog.close(dialogPolyfill.useValue || s.value);\n      } else {\n        dialog.close();\n      }\n      dialogPolyfill.formSubmitter = null;\n    }, true);\n  }\n\n  dialogPolyfill['forceRegisterDialog'] = dialogPolyfill.forceRegisterDialog;\n  dialogPolyfill['registerDialog'] = dialogPolyfill.registerDialog;\n\n  if ( true && 'amd' in __webpack_require__(/*! !webpack amd define */ \"./node_modules/webpack/buildin/amd-define.js\")) {\n    // AMD support\n    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return dialogPolyfill; }).call(exports, __webpack_require__, exports, module),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n  } else if ( true && typeof module['exports'] === 'object') {\n    // CommonJS support\n    module['exports'] = dialogPolyfill;\n  } else {\n    // all others\n    window['dialogPolyfill'] = dialogPolyfill;\n  }\n})();\n\n\n//# sourceURL=webpack:///./node_modules/dialog-polyfill/dialog-polyfill.js?");

/***/ }),

/***/ "./node_modules/isomorphic-unfetch/browser.js":
/*!****************************************************!*\
  !*** ./node_modules/isomorphic-unfetch/browser.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = window.fetch || (window.fetch = __webpack_require__(/*! unfetch */ \"./node_modules/unfetch/dist/unfetch.mjs\").default || __webpack_require__(/*! unfetch */ \"./node_modules/unfetch/dist/unfetch.mjs\"));\n\n\n//# sourceURL=webpack:///./node_modules/isomorphic-unfetch/browser.js?");

/***/ }),

/***/ "./node_modules/unfetch/dist/unfetch.mjs":
/*!***********************************************!*\
  !*** ./node_modules/unfetch/dist/unfetch.mjs ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (function(e,n){return n=n||{},new Promise(function(t,r){var s=new XMLHttpRequest;for(var o in s.open(n.method||\"get\",e,!0),n.headers)s.setRequestHeader(o,n.headers[o]);function u(){var e,n=[],t=[],r={};return s.getAllResponseHeaders().replace(/^(.*?):[^\\S\\n]*([\\s\\S]*?)$/gm,function(s,o,u){n.push(o=o.toLowerCase()),t.push([o,u]),r[o]=(e=r[o])?e+\",\"+u:u}),{ok:2==(s.status/100|0),status:s.status,statusText:s.statusText,url:s.responseURL,clone:u,text:function(){return Promise.resolve(s.responseText)},json:function(){return Promise.resolve(s.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([s.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}s.withCredentials=\"include\"==n.credentials,s.onload=function(){t(u())},s.onerror=r,s.send(n.body||null)})});;\n//# sourceMappingURL=unfetch.mjs.map\n\n\n//# sourceURL=webpack:///./node_modules/unfetch/dist/unfetch.mjs?");

/***/ }),

/***/ "./node_modules/webpack/buildin/amd-define.js":
/*!***************************************!*\
  !*** (webpack)/buildin/amd-define.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\n\tthrow new Error(\"define cannot be used indirect\");\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/amd-define.js?");

/***/ })

/******/ });