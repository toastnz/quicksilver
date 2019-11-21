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
/******/ 	__webpack_require__.p = "/themes/quicksilver/dist/scripts/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./themes/quicksilver/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/tiny-slider/src/helpers/Object.keys.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/Object.keys.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Object.keys
if (!Object.keys) {
  Object.keys = function(object) {
    var keys = [];
    for (var name in object) {
      if (Object.prototype.hasOwnProperty.call(object, name)) {
        keys.push(name);
      }
    }
    return keys;
  };
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addCSSRule.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addCSSRule.js ***!
  \************************************************************/
/*! exports provided: addCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCSSRule", function() { return addCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function addCSSRule(sheet, selector, rules, index) {
  // return raf(function() {
    'insertRule' in sheet ?
      sheet.insertRule(selector + '{' + rules + '}', index) :
      sheet.addRule(selector, rules, index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addClass.js ***!
  \**********************************************************/
/*! exports provided: addClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var addClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) {
      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.classList.add(str); }
    } :
    function (el, str) {
      if (!Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.className += ' ' + str; }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/addEvents.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/addEvents.js ***!
  \***********************************************************/
/*! exports provided: addEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvents", function() { return addEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function addEvents(el, obj, preventScrolling) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 && !preventScrolling ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.addEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js ***!
  \*******************************************************************/
/*! exports provided: arrayFromNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayFromNodeList", function() { return arrayFromNodeList; });
function arrayFromNodeList (nl) {
  var arr = [];
  for (var i = 0, l = nl.length; i < l; i++) {
    arr.push(nl[i]);
  }
  return arr;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/caf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/caf.js ***!
  \*****************************************************/
/*! exports provided: caf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caf", function() { return caf; });
var win = window;

var caf = win.cancelAnimationFrame
  || win.mozCancelAnimationFrame
  || function(id){ clearTimeout(id); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/calc.js":
/*!******************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/calc.js ***!
  \******************************************************/
/*! exports provided: calc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calc", function() { return calc; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get css-calc 
// @return - false | calc | -webkit-calc | -moz-calc
// @usage - var calc = getCalc(); 




function calc() {
  var doc = document, 
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'), 
      result = false;

  body.appendChild(div);
  try {
    var str = '(10px * 10)',
        vals = ['calc' + str, '-moz-calc' + str, '-webkit-calc' + str],
        val;
    for (var i = 0; i < 3; i++) {
      val = vals[i];
      div.style.width = val;
      if (div.offsetWidth === 100) { 
        result = val.replace(str, ''); 
        break;
      }
    }
  } catch (e) {}
  
  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();

  return result;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/checkStorageValue.js ***!
  \*******************************************************************/
/*! exports provided: checkStorageValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkStorageValue", function() { return checkStorageValue; });
function checkStorageValue (value) {
  return ['true', 'false'].indexOf(value) >= 0 ? JSON.parse(value) : value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/childNode.remove.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/childNode.remove.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// ChildNode.remove
if(!("remove" in Element.prototype)){
  Element.prototype.remove = function(){
    if(this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/classListSupport.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/classListSupport.js ***!
  \******************************************************************/
/*! exports provided: classListSupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return classListSupport; });
var classListSupport = 'classList' in document.createElement('_');

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/createStyleSheet.js ***!
  \******************************************************************/
/*! exports provided: createStyleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStyleSheet", function() { return createStyleSheet; });
// create and append style sheet
function createStyleSheet (media) {
  // Create the <style> tag
  var style = document.createElement("style");
  // style.setAttribute("type", "text/css");

  // Add a media (and/or media query) here if you'd like!
  // style.setAttribute("media", "screen")
  // style.setAttribute("media", "only screen and (max-width : 1024px)")
  if (media) { style.setAttribute("media", media); }

  // WebKit hack :(
  // style.appendChild(document.createTextNode(""));

  // Add the <style> element to the page
  document.querySelector('head').appendChild(style);

  return style.sheet ? style.sheet : style.styleSheet;
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/docElement.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/docElement.js ***!
  \************************************************************/
/*! exports provided: docElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return docElement; });
var docElement = document.documentElement;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/events.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/events.js ***!
  \********************************************************/
/*! exports provided: Events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
function Events() {
  return {
    topics: {},
    on: function (eventName, fn) {
      this.topics[eventName] = this.topics[eventName] || [];
      this.topics[eventName].push(fn);
    },
    off: function(eventName, fn) {
      if (this.topics[eventName]) {
        for (var i = 0; i < this.topics[eventName].length; i++) {
          if (this.topics[eventName][i] === fn) {
            this.topics[eventName].splice(i, 1);
            break;
          }
        }
      }
    },
    emit: function (eventName, data) {
      data.type = eventName;
      if (this.topics[eventName]) {
        this.topics[eventName].forEach(function(fn) {
          fn(data, eventName);
        });
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/extend.js":
/*!********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/extend.js ***!
  \********************************************************/
/*! exports provided: extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
function extend() {
  var obj, name, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;

  for (; i < length; i++) {
    if ((obj = arguments[i]) !== null) {
      for (name in obj) {
        copy = obj[name];

        if (target === copy) {
          continue;
        } else if (copy !== undefined) {
          target[name] = copy;
        }
      }
    }
  }
  return target;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/forEach.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/forEach.js ***!
  \*********************************************************/
/*! exports provided: forEach */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
// https://toddmotto.com/ditch-the-array-foreach-call-nodelist-hack/
function forEach (arr, callback, scope) {
  for (var i = 0, l = arr.length; i < l; i++) {
    callback.call(scope, arr[i], i);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getAttr.js ***!
  \*********************************************************/
/*! exports provided: getAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttr", function() { return getAttr; });
function getAttr(el, attr) {
  return el.getAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getBody.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getBody.js ***!
  \*********************************************************/
/*! exports provided: getBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBody", function() { return getBody; });
function getBody () {
  var doc = document,
      body = doc.body;

  if (!body) {
    body = doc.createElement('body');
    body.fake = true;
  }

  return body;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getCssRulesLength.js ***!
  \*******************************************************************/
/*! exports provided: getCssRulesLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCssRulesLength", function() { return getCssRulesLength; });
function getCssRulesLength(sheet) {
  var rule = ('insertRule' in sheet) ? sheet.cssRules : sheet.rules;
  return rule.length;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getEndProperty.js":
/*!****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getEndProperty.js ***!
  \****************************************************************/
/*! exports provided: getEndProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEndProperty", function() { return getEndProperty; });
// get transitionend, animationend based on transitionDuration
// @propin: string
// @propOut: string, first-letter uppercase
// Usage: getEndProperty('WebkitTransitionDuration', 'Transition') => webkitTransitionEnd
function getEndProperty(propIn, propOut) {
  var endProp = false;
  if (/^Webkit/.test(propIn)) {
    endProp = 'webkit' + propOut + 'End';
  } else if (/^O/.test(propIn)) {
    endProp = 'o' + propOut + 'End';
  } else if (propIn) {
    endProp = propOut.toLowerCase() + 'end';
  }
  return endProp;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getSlideId.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getSlideId.js ***!
  \************************************************************/
/*! exports provided: getSlideId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideId", function() { return getSlideId; });
function getSlideId() {
  var id = window.tnsId;
  window.tnsId = !id ? 1 : id + 1;
  
  return 'tns' + window.tnsId;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/getTouchDirection.js ***!
  \*******************************************************************/
/*! exports provided: getTouchDirection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTouchDirection", function() { return getTouchDirection; });
function getTouchDirection(angle, range) {
  var direction = false,
      gap = Math.abs(90 - Math.abs(angle));
      
  if (gap >= 90 - range) {
    direction = 'horizontal';
  } else if (gap <= range) {
    direction = 'vertical';
  }

  return direction;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/has3DTransforms.js ***!
  \*****************************************************************/
/*! exports provided: has3DTransforms */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "has3DTransforms", function() { return has3DTransforms; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function has3DTransforms(tf){
  if (!tf) { return false; }
  if (!window.getComputedStyle) { return false; }
  
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      el = doc.createElement('p'),
      has3d,
      cssTF = tf.length > 9 ? '-' + tf.slice(0, -9).toLowerCase() + '-' : '';

  cssTF += 'transform';

  // Add it to the body to get the computed style
  body.insertBefore(el, null);

  el.style[tf] = 'translate3d(1px,1px,1px)';
  has3d = window.getComputedStyle(el).getPropertyValue(cssTF);

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : el.remove();

  return (has3d !== undefined && has3d.length > 0 && has3d !== "none");
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasAttr.js":
/*!*********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasAttr.js ***!
  \*********************************************************/
/*! exports provided: hasAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasAttr", function() { return hasAttr; });
function hasAttr(el, attr) {
  return el.hasAttribute(attr);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hasClass.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hasClass.js ***!
  \**********************************************************/
/*! exports provided: classListSupport, hasClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClass", function() { return hasClass; });
/* harmony import */ var _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classListSupport.js */ "./node_modules/tiny-slider/src/helpers/classListSupport.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "classListSupport", function() { return _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"]; });



var hasClass = _classListSupport_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) { return el.classList.contains(str); } :
    function (el, str) { return el.className.indexOf(str) >= 0; };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/hideElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/hideElement.js ***!
  \*************************************************************/
/*! exports provided: hideElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideElement", function() { return hideElement; });
function hideElement(el, forceHide) {
  if (el.style.display !== 'none') { el.style.display = 'none'; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isNodeList.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isNodeList.js ***!
  \************************************************************/
/*! exports provided: isNodeList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNodeList", function() { return isNodeList; });
function isNodeList(el) {
  // Only NodeList has the "item()" function
  return typeof el.item !== "undefined"; 
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/isVisible.js":
/*!***********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/isVisible.js ***!
  \***********************************************************/
/*! exports provided: isVisible */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVisible", function() { return isVisible; });
function isVisible(el) {
  return window.getComputedStyle(el).display !== 'none';
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/jsTransform.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/jsTransform.js ***!
  \*************************************************************/
/*! exports provided: jsTransform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsTransform", function() { return jsTransform; });
function jsTransform(element, attr, prefix, postfix, to, duration, callback) {
  var tick = Math.min(duration, 10),
      unit = (to.indexOf('%') >= 0) ? '%' : 'px',
      to = to.replace(unit, ''),
      from = Number(element.style[attr].replace(prefix, '').replace(postfix, '').replace(unit, '')),
      positionTick = (to - from) / duration * tick,
      running;

  setTimeout(moveElement, tick);
  function moveElement() {
    duration -= tick;
    from += positionTick;
    element.style[attr] = prefix + from + unit + postfix;
    if (duration > 0) { 
      setTimeout(moveElement, tick); 
    } else {
      callback();
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/mediaquerySupport.js ***!
  \*******************************************************************/
/*! exports provided: mediaquerySupport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaquerySupport", function() { return mediaquerySupport; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");




function mediaquerySupport () {
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      div = doc.createElement('div'),
      style = doc.createElement('style'),
      rule = '@media all and (min-width:1px){.tns-mq-test{position:absolute}}',
      position;

  style.type = 'text/css';
  div.className = 'tns-mq-test';

  body.appendChild(style);
  body.appendChild(div);

  if (style.styleSheet) {
    style.styleSheet.cssText = rule;
  } else {
    style.appendChild(doc.createTextNode(rule));
  }

  position = window.getComputedStyle ? window.getComputedStyle(div).position : div.currentStyle['position'];

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : div.remove();

  return position === "absolute";
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/passiveOption.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/passiveOption.js ***!
  \***************************************************************/
/*! exports provided: passiveOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passiveOption", function() { return passiveOption; });
// Test via a getter in the options object to see if the passive property is accessed
var supportsPassive = false;
try {
  var opts = Object.defineProperty({}, 'passive', {
    get: function() {
      supportsPassive = true;
    }
  });
  window.addEventListener("test", null, opts);
} catch (e) {}
var passiveOption = supportsPassive ? { passive: true } : false;

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/percentageLayout.js":
/*!******************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/percentageLayout.js ***!
  \******************************************************************/
/*! exports provided: percentageLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "percentageLayout", function() { return percentageLayout; });
/* harmony import */ var _getBody_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getBody.js */ "./node_modules/tiny-slider/src/helpers/getBody.js");
/* harmony import */ var _setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setFakeBody.js */ "./node_modules/tiny-slider/src/helpers/setFakeBody.js");
/* harmony import */ var _resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resetFakeBody.js */ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js");
// get subpixel support value
// @return - boolean




function percentageLayout() {
  // check subpixel layout supporting
  var doc = document,
      body = Object(_getBody_js__WEBPACK_IMPORTED_MODULE_0__["getBody"])(),
      docOverflow = Object(_setFakeBody_js__WEBPACK_IMPORTED_MODULE_1__["setFakeBody"])(body),
      wrapper = doc.createElement('div'),
      outer = doc.createElement('div'),
      str = '',
      count = 70,
      perPage = 3,
      supported = false;

  wrapper.className = "tns-t-subp2";
  outer.className = "tns-t-ct";

  for (var i = 0; i < count; i++) {
    str += '<div></div>';
  }

  outer.innerHTML = str;
  wrapper.appendChild(outer);
  body.appendChild(wrapper);

  supported = Math.abs(wrapper.getBoundingClientRect().left - outer.children[count - perPage].getBoundingClientRect().left) < 2;

  body.fake ? Object(_resetFakeBody_js__WEBPACK_IMPORTED_MODULE_2__["resetFakeBody"])(body, docOverflow) : wrapper.remove();

  return supported;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/raf.js":
/*!*****************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/raf.js ***!
  \*****************************************************/
/*! exports provided: raf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "raf", function() { return raf; });
var win = window;

var raf = win.requestAnimationFrame
  || win.webkitRequestAnimationFrame
  || win.mozRequestAnimationFrame
  || win.msRequestAnimationFrame
  || function(cb) { return setTimeout(cb, 16); };


/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeAttrs.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeAttrs.js ***!
  \*************************************************************/
/*! exports provided: removeAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAttrs", function() { return removeAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function removeAttrs(els, attrs) {
  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array) ? els : [els];
  attrs = (attrs instanceof Array) ? attrs : [attrs];

  var attrLength = attrs.length;
  for (var i = els.length; i--;) {
    for (var j = attrLength; j--;) {
      els[i].removeAttribute(attrs[j]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeCSSRule.js ***!
  \***************************************************************/
/*! exports provided: removeCSSRule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCSSRule", function() { return removeCSSRule; });
/* harmony import */ var _raf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
// cross browsers addRule method

function removeCSSRule(sheet, index) {
  // return raf(function() {
    'deleteRule' in sheet ?
      sheet.deleteRule(index) :
      sheet.removeRule(index);
  // });
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeClass.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeClass.js ***!
  \*************************************************************/
/*! exports provided: removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony import */ var _hasClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");

var removeClass = _hasClass_js__WEBPACK_IMPORTED_MODULE_0__["classListSupport"] ?
    function (el, str) {
      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el,  str)) { el.classList.remove(str); }
    } :
    function (el, str) {
      if (Object(_hasClass_js__WEBPACK_IMPORTED_MODULE_0__["hasClass"])(el, str)) { el.className = el.className.replace(str, ''); }
    };



/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/removeEvents.js":
/*!**************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/removeEvents.js ***!
  \**************************************************************/
/*! exports provided: removeEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvents", function() { return removeEvents; });
/* harmony import */ var _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveOption.js */ "./node_modules/tiny-slider/src/helpers/passiveOption.js");


function removeEvents(el, obj) {
  for (var prop in obj) {
    var option = ['touchstart', 'touchmove'].indexOf(prop) >= 0 ? _passiveOption_js__WEBPACK_IMPORTED_MODULE_0__["passiveOption"] : false;
    el.removeEventListener(prop, obj[prop], option);
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/resetFakeBody.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/resetFakeBody.js ***!
  \***************************************************************/
/*! exports provided: resetFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetFakeBody", function() { return resetFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function resetFakeBody (body, docOverflow) {
  if (body.fake) {
    body.remove();
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = docOverflow;
    // Trigger layout so kinetic scrolling isn't disabled in iOS6+
    // eslint-disable-next-line
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].offsetHeight;
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setAttrs.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setAttrs.js ***!
  \**********************************************************/
/*! exports provided: setAttrs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttrs", function() { return setAttrs; });
/* harmony import */ var _isNodeList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isNodeList.js */ "./node_modules/tiny-slider/src/helpers/isNodeList.js");


function setAttrs(els, attrs) {
  els = (Object(_isNodeList_js__WEBPACK_IMPORTED_MODULE_0__["isNodeList"])(els) || els instanceof Array) ? els : [els];
  if (Object.prototype.toString.call(attrs) !== '[object Object]') { return; }

  for (var i = els.length; i--;) {
    for(var key in attrs) {
      els[i].setAttribute(key, attrs[key]);
    }
  }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setFakeBody.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setFakeBody.js ***!
  \*************************************************************/
/*! exports provided: setFakeBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setFakeBody", function() { return setFakeBody; });
/* harmony import */ var _docElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docElement.js */ "./node_modules/tiny-slider/src/helpers/docElement.js");


function setFakeBody (body) {
  var docOverflow = '';
  if (body.fake) {
    docOverflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow;
    //avoid crashing IE8, if background image is used
    body.style.background = '';
    //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
    body.style.overflow = _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].style.overflow = 'hidden';
    _docElement_js__WEBPACK_IMPORTED_MODULE_0__["docElement"].appendChild(body);
  }

  return docOverflow;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js":
/*!*****************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/setLocalStorage.js ***!
  \*****************************************************************/
/*! exports provided: setLocalStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
function setLocalStorage(storage, key, value, access) {
  if (access) {
    try { storage.setItem(key, value); } catch (e) {}
  }
  return value;
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/showElement.js":
/*!*************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/showElement.js ***!
  \*************************************************************/
/*! exports provided: showElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showElement", function() { return showElement; });
function showElement(el, forceHide) {
  if (el.style.display === 'none') { el.style.display = ''; }
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/toDegree.js":
/*!**********************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/toDegree.js ***!
  \**********************************************************/
/*! exports provided: toDegree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDegree", function() { return toDegree; });
function toDegree (y, x) {
  return Math.atan2(y, x) * (180 / Math.PI);
}

/***/ }),

/***/ "./node_modules/tiny-slider/src/helpers/whichProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/tiny-slider/src/helpers/whichProperty.js ***!
  \***************************************************************/
/*! exports provided: whichProperty */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "whichProperty", function() { return whichProperty; });
function whichProperty(props){
  if (typeof props === 'string') {
    var arr = [props],
        Props = props.charAt(0).toUpperCase() + props.substr(1),
        prefixes = ['Webkit', 'Moz', 'ms', 'O'];
        
    prefixes.forEach(function(prefix) {
      if (prefix !== 'ms' || props === 'transform') {
        arr.push(prefix + Props);
      }
    });

    props = arr;
  }

  var el = document.createElement('fakeelement'),
      len = props.length;
  for(var i = 0; i < props.length; i++){
    var prop = props[i];
    if( el.style[prop] !== undefined ){ return prop; }
  }

  return false; // explicit for ie9-
}


/***/ }),

/***/ "./node_modules/tiny-slider/src/tiny-slider.module.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-slider/src/tiny-slider.module.js ***!
  \************************************************************/
/*! exports provided: tns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tns", function() { return tns; });
/* harmony import */ var _helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/Object.keys */ "./node_modules/tiny-slider/src/helpers/Object.keys.js");
/* harmony import */ var _helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_helpers_Object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/childNode.remove */ "./node_modules/tiny-slider/src/helpers/childNode.remove.js");
/* harmony import */ var _helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_childNode_remove__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/raf.js */ "./node_modules/tiny-slider/src/helpers/raf.js");
/* harmony import */ var _helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/caf.js */ "./node_modules/tiny-slider/src/helpers/caf.js");
/* harmony import */ var _helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/extend.js */ "./node_modules/tiny-slider/src/helpers/extend.js");
/* harmony import */ var _helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/checkStorageValue.js */ "./node_modules/tiny-slider/src/helpers/checkStorageValue.js");
/* harmony import */ var _helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/setLocalStorage.js */ "./node_modules/tiny-slider/src/helpers/setLocalStorage.js");
/* harmony import */ var _helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers/getSlideId.js */ "./node_modules/tiny-slider/src/helpers/getSlideId.js");
/* harmony import */ var _helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers/calc.js */ "./node_modules/tiny-slider/src/helpers/calc.js");
/* harmony import */ var _helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers/percentageLayout.js */ "./node_modules/tiny-slider/src/helpers/percentageLayout.js");
/* harmony import */ var _helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/mediaquerySupport.js */ "./node_modules/tiny-slider/src/helpers/mediaquerySupport.js");
/* harmony import */ var _helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./helpers/createStyleSheet.js */ "./node_modules/tiny-slider/src/helpers/createStyleSheet.js");
/* harmony import */ var _helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./helpers/addCSSRule.js */ "./node_modules/tiny-slider/src/helpers/addCSSRule.js");
/* harmony import */ var _helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./helpers/removeCSSRule.js */ "./node_modules/tiny-slider/src/helpers/removeCSSRule.js");
/* harmony import */ var _helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./helpers/getCssRulesLength.js */ "./node_modules/tiny-slider/src/helpers/getCssRulesLength.js");
/* harmony import */ var _helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./helpers/toDegree.js */ "./node_modules/tiny-slider/src/helpers/toDegree.js");
/* harmony import */ var _helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./helpers/getTouchDirection.js */ "./node_modules/tiny-slider/src/helpers/getTouchDirection.js");
/* harmony import */ var _helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./helpers/forEach.js */ "./node_modules/tiny-slider/src/helpers/forEach.js");
/* harmony import */ var _helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./helpers/hasClass.js */ "./node_modules/tiny-slider/src/helpers/hasClass.js");
/* harmony import */ var _helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./helpers/addClass.js */ "./node_modules/tiny-slider/src/helpers/addClass.js");
/* harmony import */ var _helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./helpers/removeClass.js */ "./node_modules/tiny-slider/src/helpers/removeClass.js");
/* harmony import */ var _helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./helpers/hasAttr.js */ "./node_modules/tiny-slider/src/helpers/hasAttr.js");
/* harmony import */ var _helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./helpers/getAttr.js */ "./node_modules/tiny-slider/src/helpers/getAttr.js");
/* harmony import */ var _helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./helpers/setAttrs.js */ "./node_modules/tiny-slider/src/helpers/setAttrs.js");
/* harmony import */ var _helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./helpers/removeAttrs.js */ "./node_modules/tiny-slider/src/helpers/removeAttrs.js");
/* harmony import */ var _helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./helpers/arrayFromNodeList.js */ "./node_modules/tiny-slider/src/helpers/arrayFromNodeList.js");
/* harmony import */ var _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./helpers/hideElement.js */ "./node_modules/tiny-slider/src/helpers/hideElement.js");
/* harmony import */ var _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./helpers/showElement.js */ "./node_modules/tiny-slider/src/helpers/showElement.js");
/* harmony import */ var _helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./helpers/isVisible.js */ "./node_modules/tiny-slider/src/helpers/isVisible.js");
/* harmony import */ var _helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./helpers/whichProperty.js */ "./node_modules/tiny-slider/src/helpers/whichProperty.js");
/* harmony import */ var _helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./helpers/has3DTransforms.js */ "./node_modules/tiny-slider/src/helpers/has3DTransforms.js");
/* harmony import */ var _helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./helpers/getEndProperty.js */ "./node_modules/tiny-slider/src/helpers/getEndProperty.js");
/* harmony import */ var _helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./helpers/addEvents.js */ "./node_modules/tiny-slider/src/helpers/addEvents.js");
/* harmony import */ var _helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./helpers/removeEvents.js */ "./node_modules/tiny-slider/src/helpers/removeEvents.js");
/* harmony import */ var _helpers_events_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./helpers/events.js */ "./node_modules/tiny-slider/src/helpers/events.js");
/* harmony import */ var _helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./helpers/jsTransform.js */ "./node_modules/tiny-slider/src/helpers/jsTransform.js");





































var tns = function(options) {
  options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])({
    container: '.slider',
    mode: 'carousel',
    axis: 'horizontal',
    items: 1,
    gutter: 0,
    edgePadding: 0,
    fixedWidth: false,
    autoWidth: false,
    viewportMax: false,
    slideBy: 1,
    center: false,
    controls: true,
    controlsPosition: 'top',
    controlsText: ['prev', 'next'],
    controlsContainer: false,
    prevButton: false,
    nextButton: false,
    nav: true,
    navPosition: 'top',
    navContainer: false,
    navAsThumbnails: false,
    arrowKeys: false,
    speed: 300,
    autoplay: false,
    autoplayPosition: 'top',
    autoplayTimeout: 5000,
    autoplayDirection: 'forward',
    autoplayText: ['start', 'stop'],
    autoplayHoverPause: false,
    autoplayButton: false,
    autoplayButtonOutput: true,
    autoplayResetOnVisibility: true,
    animateIn: 'tns-fadeIn',
    animateOut: 'tns-fadeOut',
    animateNormal: 'tns-normal',
    animateDelay: false,
    loop: true,
    rewind: false,
    autoHeight: false,
    responsive: false,
    lazyload: false,
    lazyloadSelector: '.tns-lazy-img',
    touch: true,
    mouseDrag: false,
    swipeAngle: 15,
    nested: false,
    preventActionWhenRunning: false,
    preventScrollOnTouch: false,
    freezable: true,
    onInit: false,
    useLocalStorage: true
  }, options || {});
  
  var doc = document,
      win = window,
      KEYS = {
        ENTER: 13,
        SPACE: 32,
        LEFT: 37,
        RIGHT: 39
      },
      tnsStorage = {},
      localStorageAccess = options.useLocalStorage;

  if (localStorageAccess) {
    // check browser version and local storage access
    var browserInfo = navigator.userAgent;
    var uid = new Date;

    try {
      tnsStorage = win.localStorage;
      if (tnsStorage) {
        tnsStorage.setItem(uid, uid);
        localStorageAccess = tnsStorage.getItem(uid) == uid;
        tnsStorage.removeItem(uid);
      } else {
        localStorageAccess = false;
      }
      if (!localStorageAccess) { tnsStorage = {}; }
    } catch(e) {
      localStorageAccess = false;
    }

    if (localStorageAccess) {
      // remove storage when browser version changes
      if (tnsStorage['tnsApp'] && tnsStorage['tnsApp'] !== browserInfo) {
        ['tC', 'tPL', 'tMQ', 'tTf', 't3D', 'tTDu', 'tTDe', 'tADu', 'tADe', 'tTE', 'tAE'].forEach(function(item) { tnsStorage.removeItem(item); });
      }
      // update browserInfo
      localStorage['tnsApp'] = browserInfo;
    }
  }

  var CALC = tnsStorage['tC'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tC']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tC', Object(_helpers_calc_js__WEBPACK_IMPORTED_MODULE_8__["calc"])(), localStorageAccess),
      PERCENTAGELAYOUT = tnsStorage['tPL'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tPL']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tPL', Object(_helpers_percentageLayout_js__WEBPACK_IMPORTED_MODULE_9__["percentageLayout"])(), localStorageAccess),
      CSSMQ = tnsStorage['tMQ'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tMQ']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tMQ', Object(_helpers_mediaquerySupport_js__WEBPACK_IMPORTED_MODULE_10__["mediaquerySupport"])(), localStorageAccess),
      TRANSFORM = tnsStorage['tTf'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTf']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTf', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transform'), localStorageAccess),
      HAS3DTRANSFORMS = tnsStorage['t3D'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['t3D']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 't3D', Object(_helpers_has3DTransforms_js__WEBPACK_IMPORTED_MODULE_30__["has3DTransforms"])(TRANSFORM), localStorageAccess),
      TRANSITIONDURATION = tnsStorage['tTDu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDuration'), localStorageAccess),
      TRANSITIONDELAY = tnsStorage['tTDe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTDe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTDe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('transitionDelay'), localStorageAccess),
      ANIMATIONDURATION = tnsStorage['tADu'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADu']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADu', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDuration'), localStorageAccess),
      ANIMATIONDELAY = tnsStorage['tADe'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tADe']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tADe', Object(_helpers_whichProperty_js__WEBPACK_IMPORTED_MODULE_29__["whichProperty"])('animationDelay'), localStorageAccess),
      TRANSITIONEND = tnsStorage['tTE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tTE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tTE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(TRANSITIONDURATION, 'Transition'), localStorageAccess),
      ANIMATIONEND = tnsStorage['tAE'] ? Object(_helpers_checkStorageValue_js__WEBPACK_IMPORTED_MODULE_5__["checkStorageValue"])(tnsStorage['tAE']) : Object(_helpers_setLocalStorage_js__WEBPACK_IMPORTED_MODULE_6__["setLocalStorage"])(tnsStorage, 'tAE', Object(_helpers_getEndProperty_js__WEBPACK_IMPORTED_MODULE_31__["getEndProperty"])(ANIMATIONDURATION, 'Animation'), localStorageAccess);

  // get element nodes from selectors
  var supportConsoleWarn = win.console && typeof win.console.warn === "function",
      tnsList = ['container', 'controlsContainer', 'prevButton', 'nextButton', 'navContainer', 'autoplayButton'], 
      optionsElements = {};
      
  tnsList.forEach(function(item) {
    if (typeof options[item] === 'string') {
      var str = options[item],
          el = doc.querySelector(str);
      optionsElements[item] = str;

      if (el && el.nodeName) {
        options[item] = el;
      } else {
        if (supportConsoleWarn) { console.warn('Can\'t find', options[item]); }
        return;
      }
    }
  });

  // make sure at least 1 slide
  if (options.container.children.length < 1) {
    if (supportConsoleWarn) { console.warn('No slides found in', options.container); }
    return;
   }

  // update options
  var responsive = options.responsive,
      nested = options.nested,
      carousel = options.mode === 'carousel' ? true : false;

  if (responsive) {
    // apply responsive[0] to options and remove it
    if (0 in responsive) {
      options = Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, responsive[0]);
      delete responsive[0];
    }

    var responsiveTem = {};
    for (var key in responsive) {
      var val = responsive[key];
      // update responsive
      // from: 300: 2
      // to: 
      //   300: { 
      //     items: 2 
      //   } 
      val = typeof val === 'number' ? {items: val} : val;
      responsiveTem[key] = val;
    }
    responsive = responsiveTem;
    responsiveTem = null;
  }

  // update options
  function updateOptions (obj) {
    for (var key in obj) {
      if (!carousel) {
        if (key === 'slideBy') { obj[key] = 'page'; }
        if (key === 'edgePadding') { obj[key] = false; }
        if (key === 'autoHeight') { obj[key] = false; }
      }

      // update responsive options
      if (key === 'responsive') { updateOptions(obj[key]); }
    }
  }
  if (!carousel) { updateOptions(options); }


  // === define and set variables ===
  if (!carousel) {
    options.axis = 'horizontal';
    options.slideBy = 'page';
    options.edgePadding = false;

    var animateIn = options.animateIn,
        animateOut = options.animateOut,
        animateDelay = options.animateDelay,
        animateNormal = options.animateNormal;
  }

  var horizontal = options.axis === 'horizontal' ? true : false,
      outerWrapper = doc.createElement('div'),
      innerWrapper = doc.createElement('div'),
      middleWrapper,
      container = options.container,
      containerParent = container.parentNode,
      containerHTML = container.outerHTML,
      slideItems = container.children,
      slideCount = slideItems.length,
      breakpointZone,
      windowWidth = getWindowWidth(),
      isOn = false;
  if (responsive) { setBreakpointZone(); }
  if (carousel) { container.className += ' tns-vpfix'; }

  // fixedWidth: viewport > rightBoundary > indexMax
  var autoWidth = options.autoWidth,
      fixedWidth = getOption('fixedWidth'),
      edgePadding = getOption('edgePadding'),
      gutter = getOption('gutter'),
      viewport = getViewportWidth(),
      center = getOption('center'),
      items = !autoWidth ? Math.floor(getOption('items')) : 1,
      slideBy = getOption('slideBy'),
      viewportMax = options.viewportMax || options.fixedWidthViewportWidth,
      arrowKeys = getOption('arrowKeys'),
      speed = getOption('speed'),
      rewind = options.rewind,
      loop = rewind ? false : options.loop,
      autoHeight = getOption('autoHeight'),
      controls = getOption('controls'),
      controlsText = getOption('controlsText'),
      nav = getOption('nav'),
      touch = getOption('touch'),
      mouseDrag = getOption('mouseDrag'),
      autoplay = getOption('autoplay'),
      autoplayTimeout = getOption('autoplayTimeout'),
      autoplayText = getOption('autoplayText'),
      autoplayHoverPause = getOption('autoplayHoverPause'),
      autoplayResetOnVisibility = getOption('autoplayResetOnVisibility'),
      sheet = Object(_helpers_createStyleSheet_js__WEBPACK_IMPORTED_MODULE_11__["createStyleSheet"])(),
      lazyload = options.lazyload,
      lazyloadSelector = options.lazyloadSelector,
      slidePositions, // collection of slide positions
      slideItemsOut = [],
      cloneCount = loop ? getCloneCountForLoop() : 0,
      slideCountNew = !carousel ? slideCount + cloneCount : slideCount + cloneCount * 2,
      hasRightDeadZone = (fixedWidth || autoWidth) && !loop ? true : false,
      rightBoundary = fixedWidth ? getRightBoundary() : null,
      updateIndexBeforeTransform = (!carousel || !loop) ? true : false,
      // transform
      transformAttr = horizontal ? 'left' : 'top',
      transformPrefix = '',
      transformPostfix = '',
      // index
      getIndexMax = (function () {
        if (fixedWidth) {
          return function() { return center && !loop ? slideCount - 1 : Math.ceil(- rightBoundary / (fixedWidth + gutter)); };
        } else if (autoWidth) {
          return function() {
            for (var i = slideCountNew; i--;) {
              if (slidePositions[i] >= - rightBoundary) { return i; }
            }
          };
        } else {
          return function() {
            if (center && carousel && !loop) {
              return slideCount - 1;
            } else {
              return loop || carousel ? Math.max(0, slideCountNew - Math.ceil(items)) : slideCountNew - 1;
            }
          };
        }
      })(),
      index = getStartIndex(getOption('startIndex')),
      indexCached = index,
      displayIndex = getCurrentSlide(),
      indexMin = 0,
      indexMax = !autoWidth ? getIndexMax() : null,
      // resize
      resizeTimer,
      preventActionWhenRunning = options.preventActionWhenRunning,
      swipeAngle = options.swipeAngle,
      moveDirectionExpected = swipeAngle ? '?' : true,
      running = false,
      onInit = options.onInit,
      events = new _helpers_events_js__WEBPACK_IMPORTED_MODULE_34__["Events"](),
      // id, class
      newContainerClasses = ' tns-slider tns-' + options.mode,
      slideId = container.id || Object(_helpers_getSlideId_js__WEBPACK_IMPORTED_MODULE_7__["getSlideId"])(),
      disable = getOption('disable'),
      disabled = false,
      freezable = options.freezable,
      freeze = freezable && !autoWidth ? getFreeze() : false,
      frozen = false,
      controlsEvents = {
        'click': onControlsClick,
        'keydown': onControlsKeydown
      },
      navEvents = {
        'click': onNavClick,
        'keydown': onNavKeydown
      },
      hoverEvents = {
        'mouseover': mouseoverPause,
        'mouseout': mouseoutRestart
      },
      visibilityEvent = {'visibilitychange': onVisibilityChange},
      docmentKeydownEvent = {'keydown': onDocumentKeydown},
      touchEvents = {
        'touchstart': onPanStart,
        'touchmove': onPanMove,
        'touchend': onPanEnd,
        'touchcancel': onPanEnd
      }, dragEvents = {
        'mousedown': onPanStart,
        'mousemove': onPanMove,
        'mouseup': onPanEnd,
        'mouseleave': onPanEnd
      },
      hasControls = hasOption('controls'),
      hasNav = hasOption('nav'),
      navAsThumbnails = autoWidth ? true : options.navAsThumbnails,
      hasAutoplay = hasOption('autoplay'),
      hasTouch = hasOption('touch'),
      hasMouseDrag = hasOption('mouseDrag'),
      slideActiveClass = 'tns-slide-active',
      imgCompleteClass = 'tns-complete',
      imgEvents = {
        'load': onImgLoaded,
        'error': onImgFailed
      },
      imgsComplete,
      liveregionCurrent,
      preventScroll = options.preventScrollOnTouch === 'force' ? true : false;

  // controls
  if (hasControls) {
    var controlsContainer = options.controlsContainer,
        controlsContainerHTML = options.controlsContainer ? options.controlsContainer.outerHTML : '',
        prevButton = options.prevButton,
        nextButton = options.nextButton,
        prevButtonHTML = options.prevButton ? options.prevButton.outerHTML : '',
        nextButtonHTML = options.nextButton ? options.nextButton.outerHTML : '',
        prevIsButton,
        nextIsButton;
  }

  // nav
  if (hasNav) {
    var navContainer = options.navContainer,
        navContainerHTML = options.navContainer ? options.navContainer.outerHTML : '',
        navItems,
        pages = autoWidth ? slideCount : getPages(),
        pagesCached = 0,
        navClicked = -1,
        navCurrentIndex = getCurrentNavIndex(),
        navCurrentIndexCached = navCurrentIndex,
        navActiveClass = 'tns-nav-active',
        navStr = 'Carousel Page ',
        navStrCurrent = ' (Current Slide)';
  }

  // autoplay
  if (hasAutoplay) {
    var autoplayDirection = options.autoplayDirection === 'forward' ? 1 : -1,
        autoplayButton = options.autoplayButton,
        autoplayButtonHTML = options.autoplayButton ? options.autoplayButton.outerHTML : '',
        autoplayHtmlStrings = ['<span class=\'tns-visually-hidden\'>', ' animation</span>'],
        autoplayTimer,
        animating,
        autoplayHoverPaused,
        autoplayUserPaused,
        autoplayVisibilityPaused;
  }

  if (hasTouch || hasMouseDrag) {
    var initPosition = {},
        lastPosition = {},
        translateInit,
        disX,
        disY,
        panStart = false,
        rafIndex,
        getDist = horizontal ? 
          function(a, b) { return a.x - b.x; } :
          function(a, b) { return a.y - b.y; };
  }
  
  // disable slider when slidecount <= items
  if (!autoWidth) { resetVariblesWhenDisable(disable || freeze); }

  if (TRANSFORM) {
    transformAttr = TRANSFORM;
    transformPrefix = 'translate';

    if (HAS3DTRANSFORMS) {
      transformPrefix += horizontal ? '3d(' : '3d(0px, ';
      transformPostfix = horizontal ? ', 0px, 0px)' : ', 0px)';
    } else {
      transformPrefix += horizontal ? 'X(' : 'Y(';
      transformPostfix = ')';
    }

  }

  if (carousel) { container.className = container.className.replace('tns-vpfix', ''); }
  initStructure();
  initSheet();
  initSliderTransform();

  // === COMMON FUNCTIONS === //
  function resetVariblesWhenDisable (condition) {
    if (condition) {
      controls = nav = touch = mouseDrag = arrowKeys = autoplay = autoplayHoverPause = autoplayResetOnVisibility = false;
    }
  }

  function getCurrentSlide () {
    var tem = carousel ? index - cloneCount : index;
    while (tem < 0) { tem += slideCount; }
    return tem%slideCount + 1;
  }

  function getStartIndex (ind) {
    ind = ind ? Math.max(0, Math.min(loop ? slideCount - 1 : slideCount - items, ind)) : 0;
    return carousel ? ind + cloneCount : ind;
  }

  function getAbsIndex (i) {
    if (i == null) { i = index; }

    if (carousel) { i -= cloneCount; }
    while (i < 0) { i += slideCount; }

    return Math.floor(i%slideCount);
  }

  function getCurrentNavIndex () {
    var absIndex = getAbsIndex(),
        result;

    result = navAsThumbnails ? absIndex : 
      fixedWidth || autoWidth ? Math.ceil((absIndex + 1) * pages / slideCount - 1) : 
          Math.floor(absIndex / items);

    // set active nav to the last one when reaches the right edge
    if (!loop && carousel && index === indexMax) { result = pages - 1; }

    return result;
  }

  function getItemsMax () {
    // fixedWidth or autoWidth while viewportMax is not available
    if (autoWidth || (fixedWidth && !viewportMax)) {
      return slideCount - 1;
    // most cases
    } else {
      var str = fixedWidth ? 'fixedWidth' : 'items',
          arr = [];

      if (fixedWidth || options[str] < slideCount) { arr.push(options[str]); }

      if (responsive) {
        for (var bp in responsive) {
          var tem = responsive[bp][str];
          if (tem && (fixedWidth || tem < slideCount)) { arr.push(tem); }
        }
      }

      if (!arr.length) { arr.push(0); }

      return Math.ceil(fixedWidth ? viewportMax / Math.min.apply(null, arr) : Math.max.apply(null, arr));
    }
  }

  function getCloneCountForLoop () {
    var itemsMax = getItemsMax(),
        result = carousel ? Math.ceil((itemsMax * 5 - slideCount)/2) : (itemsMax * 4 - slideCount);
    result = Math.max(itemsMax, result);

    return hasOption('edgePadding') ? result + 1 : result;
  }

  function getWindowWidth () {
    return win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
  }

  function getInsertPosition (pos) {
    return pos === 'top' ? 'afterbegin' : 'beforeend';
  }

  function getClientWidth (el) {
    var div = doc.createElement('div'), rect, width;
    el.appendChild(div);
    rect = div.getBoundingClientRect();
    width = rect.right - rect.left;
    div.remove();
    return width || getClientWidth(el.parentNode);
  }

  function getViewportWidth () {
    var gap = edgePadding ? edgePadding * 2 - gutter : 0;
    return getClientWidth(containerParent) - gap;
  }

  function hasOption (item) {
    if (options[item]) {
      return true;
    } else {
      if (responsive) {
        for (var bp in responsive) {
          if (responsive[bp][item]) { return true; }
        }
      }
      return false;
    }
  }

  // get option:
  // fixed width: viewport, fixedWidth, gutter => items
  // others: window width => all variables
  // all: items => slideBy
  function getOption (item, ww) {
    if (ww == null) { ww = windowWidth; }

    if (item === 'items' && fixedWidth) {
      return Math.floor((viewport + gutter) / (fixedWidth + gutter)) || 1;

    } else {
      var result = options[item];

      if (responsive) {
        for (var bp in responsive) {
          // bp: convert string to number
          if (ww >= parseInt(bp)) {
            if (item in responsive[bp]) { result = responsive[bp][item]; }
          }
        }
      }

      if (item === 'slideBy' && result === 'page') { result = getOption('items'); }
      if (!carousel && (item === 'slideBy' || item === 'items')) { result = Math.floor(result); }

      return result;
    }
  }

  function getSlideMarginLeft (i) {
    return CALC ? 
      CALC + '(' + i * 100 + '% / ' + slideCountNew + ')' : 
      i * 100 / slideCountNew + '%';
  }

  function getInnerWrapperStyles (edgePaddingTem, gutterTem, fixedWidthTem, speedTem, autoHeightBP) {
    var str = '';

    if (edgePaddingTem !== undefined) {
      var gap = edgePaddingTem;
      if (gutterTem) { gap -= gutterTem; }
      str = horizontal ?
        'margin: 0 ' + gap + 'px 0 ' + edgePaddingTem + 'px;' :
        'margin: ' + edgePaddingTem + 'px 0 ' + gap + 'px 0;';
    } else if (gutterTem && !fixedWidthTem) {
      var gutterTemUnit = '-' + gutterTem + 'px',
          dir = horizontal ? gutterTemUnit + ' 0 0' : '0 ' + gutterTemUnit + ' 0';
      str = 'margin: 0 ' + dir + ';'
    }

    if (!carousel && autoHeightBP && TRANSITIONDURATION && speedTem) { str += getTransitionDurationStyle(speedTem); }
    return str;
  }

  function getContainerWidth (fixedWidthTem, gutterTem, itemsTem) {
    if (fixedWidthTem) {
      return (fixedWidthTem + gutterTem) * slideCountNew + 'px';
    } else {
      return CALC ?
        CALC + '(' + slideCountNew * 100 + '% / ' + itemsTem + ')' :
        slideCountNew * 100 / itemsTem + '%';
    }
  }

  function getSlideWidthStyle (fixedWidthTem, gutterTem, itemsTem) {
    var width;

    if (fixedWidthTem) {
      width = (fixedWidthTem + gutterTem) + 'px';
    } else {
      if (!carousel) { itemsTem = Math.floor(itemsTem); }
      var dividend = carousel ? slideCountNew : itemsTem;
      width = CALC ? 
        CALC + '(100% / ' + dividend + ')' : 
        100 / dividend + '%';
    }

    width = 'width:' + width;

    // inner slider: overwrite outer slider styles
    return nested !== 'inner' ? width + ';' : width + ' !important;';
  }

  function getSlideGutterStyle (gutterTem) {
    var str = '';

    // gutter maybe interger || 0
    // so can't use 'if (gutter)'
    if (gutterTem !== false) {
      var prop = horizontal ? 'padding-' : 'margin-',
          dir = horizontal ? 'right' : 'bottom';
      str = prop +  dir + ': ' + gutterTem + 'px;';
    }

    return str;
  }

  function getCSSPrefix (name, num) {
    var prefix = name.substring(0, name.length - num).toLowerCase();
    if (prefix) { prefix = '-' + prefix + '-'; }

    return prefix;
  }

  function getTransitionDurationStyle (speed) {
    return getCSSPrefix(TRANSITIONDURATION, 18) + 'transition-duration:' + speed / 1000 + 's;';
  }

  function getAnimationDurationStyle (speed) {
    return getCSSPrefix(ANIMATIONDURATION, 17) + 'animation-duration:' + speed / 1000 + 's;';
  }

  function initStructure () {
    var classOuter = 'tns-outer',
        classInner = 'tns-inner',
        hasGutter = hasOption('gutter');

    outerWrapper.className = classOuter;
    innerWrapper.className = classInner;
    outerWrapper.id = slideId + '-ow';
    innerWrapper.id = slideId + '-iw';

    // set container properties
    if (container.id === '') { container.id = slideId; }
    newContainerClasses += PERCENTAGELAYOUT || autoWidth ? ' tns-subpixel' : ' tns-no-subpixel';
    newContainerClasses += CALC ? ' tns-calc' : ' tns-no-calc';
    if (autoWidth) { newContainerClasses += ' tns-autowidth'; }
    newContainerClasses += ' tns-' + options.axis;
    container.className += newContainerClasses;

    // add constrain layer for carousel
    if (carousel) {
      middleWrapper = doc.createElement('div');
      middleWrapper.id = slideId + '-mw';
      middleWrapper.className = 'tns-ovh';

      outerWrapper.appendChild(middleWrapper);
      middleWrapper.appendChild(innerWrapper);
    } else {
      outerWrapper.appendChild(innerWrapper);
    }

    if (autoHeight) {
      var wp = middleWrapper ? middleWrapper : innerWrapper;
      wp.className += ' tns-ah';
    }

    containerParent.insertBefore(outerWrapper, container);
    innerWrapper.appendChild(container);

    // add id, class, aria attributes 
    // before clone slides
    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function(item, i) {
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-item');
      if (!item.id) { item.id = slideId + '-item' + i; }
      if (!carousel && animateNormal) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal); }
      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
        'aria-hidden': 'true',
        'tabindex': '-1'
      });
    });

    // ## clone slides
    // carousel: n + slides + n
    // gallery:      slides + n
    if (cloneCount) {
      var fragmentBefore = doc.createDocumentFragment(), 
          fragmentAfter = doc.createDocumentFragment();

      for (var j = cloneCount; j--;) {
        var num = j%slideCount,
            cloneFirst = slideItems[num].cloneNode(true);
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneFirst, 'id');
        fragmentAfter.insertBefore(cloneFirst, fragmentAfter.firstChild);

        if (carousel) {
          var cloneLast = slideItems[slideCount - 1 - num].cloneNode(true);
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(cloneLast, 'id');
          fragmentBefore.appendChild(cloneLast);
        }
      }

      container.insertBefore(fragmentBefore, container.firstChild);
      container.appendChild(fragmentAfter);
      slideItems = container.children;
    }

  }

  function initSliderTransform () {
    // ## images loaded/failed
    if (hasOption('autoHeight') || autoWidth || !horizontal) {
      var imgs = container.querySelectorAll('img');

      // add complete class if all images are loaded/failed
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(imgs, function(img) {
        var src = img.src;
        
        if (src && src.indexOf('data:image') < 0) {
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents);
          img.src = '';
          img.src = src;
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        } else if (!lazyload) {
          imgLoaded(img);
        }
      });

      // All imgs are completed
      Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), function() { imgsComplete = true; }); });

      // Check imgs in window only for auto height
      if (!autoWidth && horizontal) { imgs = getImageArray(index, Math.min(index + items - 1, slideCountNew - 1)); }

      lazyload ? initSliderTransformStyleCheck() : Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ imgsLoadedCheck(Object(_helpers_arrayFromNodeList_js__WEBPACK_IMPORTED_MODULE_25__["arrayFromNodeList"])(imgs), initSliderTransformStyleCheck); });

    } else {
      // set container transform property
      if (carousel) { doContainerTransformSilent(); }

      // update slider tools and events
      initTools();
      initEvents();
    }
  }

  function initSliderTransformStyleCheck () {
    if (autoWidth) {
      // check styles application
      var num = loop ? index : slideCount - 1;
      (function stylesApplicationCheck() {
        slideItems[num - 1].getBoundingClientRect().right.toFixed(2) === slideItems[num].getBoundingClientRect().left.toFixed(2) ?
        initSliderTransformCore() :
        setTimeout(function(){ stylesApplicationCheck() }, 16);
      })();
    } else {
      initSliderTransformCore();
    }
  }


  function initSliderTransformCore () {
    // run Fn()s which are rely on image loading
    if (!horizontal || autoWidth) {
      setSlidePositions();

      if (autoWidth) {
        rightBoundary = getRightBoundary();
        if (freezable) { freeze = getFreeze(); }
        indexMax = getIndexMax(); // <= slidePositions, rightBoundary <=
        resetVariblesWhenDisable(disable || freeze);
      } else {
        updateContentWrapperHeight();
      }
    }

    // set container transform property
    if (carousel) { doContainerTransformSilent(); }

    // update slider tools and events
    initTools();
    initEvents();
  }

  function initSheet () {
    // gallery:
    // set animation classes and left value for gallery slider
    if (!carousel) { 
      for (var i = index, l = index + Math.min(slideCount, items); i < l; i++) {
        var item = slideItems[i];
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    }

    // #### LAYOUT

    // ## INLINE-BLOCK VS FLOAT

    // ## PercentageLayout:
    // slides: inline-block
    // remove blank space between slides by set font-size: 0

    // ## Non PercentageLayout:
    // slides: float
    //         margin-right: -100%
    //         margin-left: ~

    // Resource: https://docs.google.com/spreadsheets/d/147up245wwTXeQYve3BRSAD4oVcvQmuGsFteJOeA5xNQ/edit?usp=sharing
    if (horizontal) {
      if (PERCENTAGELAYOUT || autoWidth) {
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', 'font-size:' + win.getComputedStyle(slideItems[0]).fontSize + ';', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, 'font-size:0;', Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      } else if (carousel) {
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function (slide, i) {
          slide.style.marginLeft = getSlideMarginLeft(i);
        });
      }
    }


    // ## BASIC STYLES
    if (CSSMQ) {
      // middle wrapper style
      if (TRANSITIONDURATION) {
        var str = middleWrapper && options.autoHeight ? getTransitionDurationStyle(options.speed) : '';
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-mw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }

      // inner wrapper styles
      str = getInnerWrapperStyles(options.edgePadding, options.gutter, options.fixedWidth, options.speed, options.autoHeight);
      Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + '-iw', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));

      // container styles
      if (carousel) {
        str = horizontal && !autoWidth ? 'width:' + getContainerWidth(options.fixedWidth, options.gutter, options.items) + ';' : '';
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId, str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }

      // slide styles
      str = horizontal && !autoWidth ? getSlideWidthStyle(options.fixedWidth, options.gutter, options.items) : '';
      if (options.gutter) { str += getSlideGutterStyle(options.gutter); }
      // set gallery items transition-duration
      if (!carousel) {
        if (TRANSITIONDURATION) { str += getTransitionDurationStyle(speed); }
        if (ANIMATIONDURATION) { str += getAnimationDurationStyle(speed); }
      }
      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet)); }

    // non CSS mediaqueries: IE8
    // ## update inner wrapper, container, slides if needed
    // set inline styles for inner wrapper & container
    // insert stylesheet (one line) for slides only (since slides are many)
    } else {
      // middle wrapper styles
      update_carousel_transition_duration();

      // inner wrapper styles
      innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, autoHeight);

      // container styles
      if (carousel && horizontal && !autoWidth) {
        container.style.width = getContainerWidth(fixedWidth, gutter, items);
      }

      // slide styles
      var str = horizontal && !autoWidth ? getSlideWidthStyle(fixedWidth, gutter, items) : '';
      if (gutter) { str += getSlideGutterStyle(gutter); }

      // append to the last line
      if (str) { Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet)); }
    }

    // ## MEDIAQUERIES
    if (responsive && CSSMQ) {
      for (var bp in responsive) {
        // bp: convert string to number
        bp = parseInt(bp);

        var opts = responsive[bp],
            str = '',
            middleWrapperStr = '',
            innerWrapperStr = '',
            containerStr = '',
            slideStr = '',
            itemsBP = !autoWidth ? getOption('items', bp) : null,
            fixedWidthBP = getOption('fixedWidth', bp),
            speedBP = getOption('speed', bp),
            edgePaddingBP = getOption('edgePadding', bp),
            autoHeightBP = getOption('autoHeight', bp),
            gutterBP = getOption('gutter', bp);

        // middle wrapper string
        if (TRANSITIONDURATION && middleWrapper && getOption('autoHeight', bp) && 'speed' in opts) {
          middleWrapperStr = '#' + slideId + '-mw{' + getTransitionDurationStyle(speedBP) + '}';
        }

        // inner wrapper string
        if ('edgePadding' in opts || 'gutter' in opts) {
          innerWrapperStr = '#' + slideId + '-iw{' + getInnerWrapperStyles(edgePaddingBP, gutterBP, fixedWidthBP, speedBP, autoHeightBP) + '}';
        }

        // container string
        if (carousel && horizontal && !autoWidth && ('fixedWidth' in opts || 'items' in opts || (fixedWidth && 'gutter' in opts))) {
          containerStr = 'width:' + getContainerWidth(fixedWidthBP, gutterBP, itemsBP) + ';';
        }
        if (TRANSITIONDURATION && 'speed' in opts) {
          containerStr += getTransitionDurationStyle(speedBP);
        }
        if (containerStr) {
          containerStr = '#' + slideId + '{' + containerStr + '}';
        }

        // slide string
        if ('fixedWidth' in opts || (fixedWidth && 'gutter' in opts) || !carousel && 'items' in opts) {
          slideStr += getSlideWidthStyle(fixedWidthBP, gutterBP, itemsBP);
        }
        if ('gutter' in opts) {
          slideStr += getSlideGutterStyle(gutterBP);
        }
        // set gallery items transition-duration
        if (!carousel && 'speed' in opts) {
          if (TRANSITIONDURATION) { slideStr += getTransitionDurationStyle(speedBP); }
          if (ANIMATIONDURATION) { slideStr += getAnimationDurationStyle(speedBP); }
        }
        if (slideStr) { slideStr = '#' + slideId + ' > .tns-item{' + slideStr + '}'; }

        // add up
        str = middleWrapperStr + innerWrapperStr + containerStr + slideStr;

        if (str) {
          sheet.insertRule('@media (min-width: ' + bp / 16 + 'em) {' + str + '}', sheet.cssRules.length);
        }
      }
    }
  }

  function initTools () {
    // == slides ==
    updateSlideStatus();

    // == live region ==
    outerWrapper.insertAdjacentHTML('afterbegin', '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + getLiveRegionStr() + '</span>  of ' + slideCount + '</div>');
    liveregionCurrent = outerWrapper.querySelector('.tns-liveregion .current');

    // == autoplayInit ==
    if (hasAutoplay) {
      var txt = autoplay ? 'stop' : 'start';
      if (autoplayButton) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {'data-action': txt});
      } else if (options.autoplayButtonOutput) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.autoplayPosition), '<button data-action="' + txt + '">' + autoplayHtmlStrings[0] + txt + autoplayHtmlStrings[1] + autoplayText[0] + '</button>');
        autoplayButton = outerWrapper.querySelector('[data-action]');
      }

      // add event
      if (autoplayButton) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(autoplayButton, {'click': toggleAutoplay});
      }

      if (autoplay) {
        startAutoplay();
        if (autoplayHoverPause) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents); }
        if (autoplayResetOnVisibility) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, visibilityEvent); }
      }
    }
 
    // == navInit ==
    if (hasNav) {
      var initIndex = !carousel ? 0 : cloneCount;
      // customized nav
      // will not hide the navs in case they're thumbnails
      if (navContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navContainer, {'aria-label': 'Carousel Pagination'});
        navItems = navContainer.children;
        Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(navItems, function(item, i) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'data-nav': i,
            'tabindex': '-1',
            'aria-label': navStr + (i + 1),
            'aria-controls': slideId,
          });
        });

      // generated nav 
      } else {
        var navHtml = '',
            hiddenStr = navAsThumbnails ? '' : 'style="display:none"';
        for (var i = 0; i < slideCount; i++) {
          // hide nav items by default
          navHtml += '<button data-nav="' + i +'" tabindex="-1" aria-controls="' + slideId + '" ' + hiddenStr + ' aria-label="' + navStr + (i + 1) +'"></button>';
        }
        navHtml = '<div class="tns-nav" aria-label="Carousel Pagination">' + navHtml + '</div>';
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.navPosition), navHtml);

        navContainer = outerWrapper.querySelector('.tns-nav');
        navItems = navContainer.children;
      }

      updateNavVisibility();

      // add transition
      if (TRANSITIONDURATION) {
        var prefix = TRANSITIONDURATION.substring(0, TRANSITIONDURATION.length - 18).toLowerCase(),
            str = 'transition: all ' + speed / 1000 + 's';

        if (prefix) {
          str = '-' + prefix + '-' + str;
        }

        Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '[aria-controls^=' + slideId + '-item]', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
      }

      Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navItems[navCurrentIndex], {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
      Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navItems[navCurrentIndex], 'tabindex');
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navItems[navCurrentIndex], navActiveClass);

      // add events
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(navContainer, navEvents);
    }



    // == controlsInit ==
    if (hasControls) {
      if (!controlsContainer && (!prevButton || !nextButton)) {
        outerWrapper.insertAdjacentHTML(getInsertPosition(options.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[0] + '</button><button data-controls="next" tabindex="-1" aria-controls="' + slideId +'">' + controlsText[1] + '</button></div>');

        controlsContainer = outerWrapper.querySelector('.tns-controls');
      }

      if (!prevButton || !nextButton) {
        prevButton = controlsContainer.children[0];
        nextButton = controlsContainer.children[1];
      }

      if (options.controlsContainer) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(controlsContainer, {
          'aria-label': 'Carousel Navigation',
          'tabindex': '0'
        });
      }

      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])([prevButton, nextButton], {
          'aria-controls': slideId,
          'tabindex': '-1',
        });
      }
      
      if (options.controlsContainer || (options.prevButton && options.nextButton)) {
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(prevButton, {'data-controls' : 'prev'});
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(nextButton, {'data-controls' : 'next'});
      }

      prevIsButton = isButton(prevButton);
      nextIsButton = isButton(nextButton);

      updateControlsStatus();

      // add events
      if (controlsContainer) {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(controlsContainer, controlsEvents);
      } else {
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(prevButton, controlsEvents);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(nextButton, controlsEvents);
      }
    }

    // hide tools if needed
    disableUI();
  }

  function initEvents () {
    // add events
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, eve);
    }

    if (touch) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch); }
    if (mouseDrag) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents); }
    if (arrowKeys) { Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent); }

    if (nested === 'inner') {
      events.on('outerResized', function () {
        resizeTasks();
        events.emit('innerLoaded', info());
      });
    } else if (responsive || fixedWidth || autoWidth || autoHeight || !horizontal) {
      Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(win, {'resize': onResize});
    }

    if (autoHeight) {
      if (nested === 'outer') {
        events.on('innerLoaded', doAutoHeight);
      } else if (!disable) { doAutoHeight(); }
    }

    doLazyLoad();
    if (disable) { disableSlider(); } else if (freeze) { freezeSlider(); }

    events.on('indexChanged', additionalUpdates);
    if (nested === 'inner') { events.emit('innerLoaded', info()); }
    if (typeof onInit === 'function') { onInit(info()); }
    isOn = true;
  }

  function destroy () {
    // sheet
    sheet.disabled = true;
    if (sheet.ownerNode) { sheet.ownerNode.remove(); }

    // remove win event listeners
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(win, {'resize': onResize});

    // arrowKeys, controls, nav
    if (arrowKeys) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent); }
    if (controlsContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(controlsContainer, controlsEvents); }
    if (navContainer) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(navContainer, navEvents); }

    // autoplay
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, visibilityEvent);
    if (autoplayButton) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(autoplayButton, {'click': toggleAutoplay}); }
    if (autoplay) { clearInterval(autoplayTimer); }

    // container
    if (carousel && TRANSITIONEND) {
      var eve = {};
      eve[TRANSITIONEND] = onTransitionEnd;
      Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, eve);
    }
    if (touch) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents); }
    if (mouseDrag) { Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents); }

    // cache Object values in options && reset HTML
    var htmlList = [containerHTML, controlsContainerHTML, prevButtonHTML, nextButtonHTML, navContainerHTML, autoplayButtonHTML];

    tnsList.forEach(function(item, i) {
      var el = item === 'container' ? outerWrapper : options[item];

      if (typeof el === 'object') {
        var prevEl = el.previousElementSibling ? el.previousElementSibling : false,
            parentEl = el.parentNode;
        el.outerHTML = htmlList[i];
        options[item] = prevEl ? prevEl.nextElementSibling : parentEl.firstElementChild;
      }
    });


    // reset variables
    tnsList = animateIn = animateOut = animateDelay = animateNormal = horizontal = outerWrapper = innerWrapper = container = containerParent = containerHTML = slideItems = slideCount = breakpointZone = windowWidth = autoWidth = fixedWidth = edgePadding = gutter = viewport = items = slideBy = viewportMax = arrowKeys = speed = rewind = loop = autoHeight = sheet = lazyload = slidePositions = slideItemsOut = cloneCount = slideCountNew = hasRightDeadZone = rightBoundary = updateIndexBeforeTransform = transformAttr = transformPrefix = transformPostfix = getIndexMax = index = indexCached = indexMin = indexMax = resizeTimer = swipeAngle = moveDirectionExpected = running = onInit = events = newContainerClasses = slideId = disable = disabled = freezable = freeze = frozen = controlsEvents = navEvents = hoverEvents = visibilityEvent = docmentKeydownEvent = touchEvents = dragEvents = hasControls = hasNav = navAsThumbnails = hasAutoplay = hasTouch = hasMouseDrag = slideActiveClass = imgCompleteClass = imgEvents = imgsComplete = controls = controlsText = controlsContainer = controlsContainerHTML = prevButton = nextButton = prevIsButton = nextIsButton = nav = navContainer = navContainerHTML = navItems = pages = pagesCached = navClicked = navCurrentIndex = navCurrentIndexCached = navActiveClass = navStr = navStrCurrent = autoplay = autoplayTimeout = autoplayDirection = autoplayText = autoplayHoverPause = autoplayButton = autoplayButtonHTML = autoplayResetOnVisibility = autoplayHtmlStrings = autoplayTimer = animating = autoplayHoverPaused = autoplayUserPaused = autoplayVisibilityPaused = initPosition = lastPosition = translateInit = disX = disY = panStart = rafIndex = getDist = touch = mouseDrag = null;
    // check variables
    // [animateIn, animateOut, animateDelay, animateNormal, horizontal, outerWrapper, innerWrapper, container, containerParent, containerHTML, slideItems, slideCount, breakpointZone, windowWidth, autoWidth, fixedWidth, edgePadding, gutter, viewport, items, slideBy, viewportMax, arrowKeys, speed, rewind, loop, autoHeight, sheet, lazyload, slidePositions, slideItemsOut, cloneCount, slideCountNew, hasRightDeadZone, rightBoundary, updateIndexBeforeTransform, transformAttr, transformPrefix, transformPostfix, getIndexMax, index, indexCached, indexMin, indexMax, resizeTimer, swipeAngle, moveDirectionExpected, running, onInit, events, newContainerClasses, slideId, disable, disabled, freezable, freeze, frozen, controlsEvents, navEvents, hoverEvents, visibilityEvent, docmentKeydownEvent, touchEvents, dragEvents, hasControls, hasNav, navAsThumbnails, hasAutoplay, hasTouch, hasMouseDrag, slideActiveClass, imgCompleteClass, imgEvents, imgsComplete, controls, controlsText, controlsContainer, controlsContainerHTML, prevButton, nextButton, prevIsButton, nextIsButton, nav, navContainer, navContainerHTML, navItems, pages, pagesCached, navClicked, navCurrentIndex, navCurrentIndexCached, navActiveClass, navStr, navStrCurrent, autoplay, autoplayTimeout, autoplayDirection, autoplayText, autoplayHoverPause, autoplayButton, autoplayButtonHTML, autoplayResetOnVisibility, autoplayHtmlStrings, autoplayTimer, animating, autoplayHoverPaused, autoplayUserPaused, autoplayVisibilityPaused, initPosition, lastPosition, translateInit, disX, disY, panStart, rafIndex, getDist, touch, mouseDrag ].forEach(function(item) { if (item !== null) { console.log(item); } });

    for (var a in this) {
      if (a !== 'rebuild') { this[a] = null; }
    }
    isOn = false;
  }

// === ON RESIZE ===
  // responsive || fixedWidth || autoWidth || !horizontal
  function onResize (e) {
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ resizeTasks(getEvent(e)); });
  }

  function resizeTasks (e) {
    if (!isOn) { return; }
    if (nested === 'outer') { events.emit('outerResized', info(e)); }
    windowWidth = getWindowWidth();
    var bpChanged,
        breakpointZoneTem = breakpointZone,
        needContainerTransform = false;

    if (responsive) {
      setBreakpointZone();
      bpChanged = breakpointZoneTem !== breakpointZone;
      // if (hasRightDeadZone) { needContainerTransform = true; } // *?
      if (bpChanged) { events.emit('newBreakpointStart', info(e)); }
    }

    var indChanged,
        itemsChanged,
        itemsTem = items,
        disableTem = disable,
        freezeTem = freeze,
        arrowKeysTem = arrowKeys,
        controlsTem = controls,
        navTem = nav,
        touchTem = touch,
        mouseDragTem = mouseDrag,
        autoplayTem = autoplay,
        autoplayHoverPauseTem = autoplayHoverPause,
        autoplayResetOnVisibilityTem = autoplayResetOnVisibility,
        indexTem = index;

    if (bpChanged) {
      var fixedWidthTem = fixedWidth,
          autoHeightTem = autoHeight,
          controlsTextTem = controlsText,
          centerTem = center,
          autoplayTextTem = autoplayText;

      if (!CSSMQ) {
        var gutterTem = gutter,
            edgePaddingTem = edgePadding;
      }
    }

    // get option:
    // fixed width: viewport, fixedWidth, gutter => items
    // others: window width => all variables
    // all: items => slideBy
    arrowKeys = getOption('arrowKeys');
    controls = getOption('controls');
    nav = getOption('nav');
    touch = getOption('touch');
    center = getOption('center');
    mouseDrag = getOption('mouseDrag');
    autoplay = getOption('autoplay');
    autoplayHoverPause = getOption('autoplayHoverPause');
    autoplayResetOnVisibility = getOption('autoplayResetOnVisibility');

    if (bpChanged) {
      disable = getOption('disable');
      fixedWidth = getOption('fixedWidth');
      speed = getOption('speed');
      autoHeight = getOption('autoHeight');
      controlsText = getOption('controlsText');
      autoplayText = getOption('autoplayText');
      autoplayTimeout = getOption('autoplayTimeout');

      if (!CSSMQ) {
        edgePadding = getOption('edgePadding');
        gutter = getOption('gutter');
      }
    }
    // update options
    resetVariblesWhenDisable(disable);

    viewport = getViewportWidth(); // <= edgePadding, gutter
    if ((!horizontal || autoWidth) && !disable) {
      setSlidePositions();
      if (!horizontal) {
        updateContentWrapperHeight(); // <= setSlidePositions
        needContainerTransform = true;
      }
    }
    if (fixedWidth || autoWidth) {
      rightBoundary = getRightBoundary(); // autoWidth: <= viewport, slidePositions, gutter
                                          // fixedWidth: <= viewport, fixedWidth, gutter
      indexMax = getIndexMax(); // autoWidth: <= rightBoundary, slidePositions
                                // fixedWidth: <= rightBoundary, fixedWidth, gutter
    }

    if (bpChanged || fixedWidth) {
      items = getOption('items');
      slideBy = getOption('slideBy');
      itemsChanged = items !== itemsTem;

      if (itemsChanged) {
        if (!fixedWidth && !autoWidth) { indexMax = getIndexMax(); } // <= items
        // check index before transform in case
        // slider reach the right edge then items become bigger
        updateIndex();
      }
    }
    
    if (bpChanged) {
      if (disable !== disableTem) {
        if (disable) {
          disableSlider();
        } else {
          enableSlider(); // <= slidePositions, rightBoundary, indexMax
        }
      }
    }

    if (freezable && (bpChanged || fixedWidth || autoWidth)) {
      freeze = getFreeze(); // <= autoWidth: slidePositions, gutter, viewport, rightBoundary
                            // <= fixedWidth: fixedWidth, gutter, rightBoundary
                            // <= others: items

      if (freeze !== freezeTem) {
        if (freeze) {
          doContainerTransform(getContainerTransformValue(getStartIndex(0)));
          freezeSlider();
        } else {
          unfreezeSlider();
          needContainerTransform = true;
        }
      }
    }

    resetVariblesWhenDisable(disable || freeze); // controls, nav, touch, mouseDrag, arrowKeys, autoplay, autoplayHoverPause, autoplayResetOnVisibility
    if (!autoplay) { autoplayHoverPause = autoplayResetOnVisibility = false; }

    if (arrowKeys !== arrowKeysTem) {
      arrowKeys ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, docmentKeydownEvent) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, docmentKeydownEvent);
    }
    if (controls !== controlsTem) {
      if (controls) {
        if (controlsContainer) {
          Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
        } else {
          if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton); }
          if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton); }
        }
      } else {
        if (controlsContainer) {
          Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
        } else {
          if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton); }
          if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton); }
        }
      }
    }
    if (nav !== navTem) {
      nav ?
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer) :
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer);
    }
    if (touch !== touchTem) {
      touch ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, touchEvents, options.preventScrollOnTouch) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, touchEvents);
    }
    if (mouseDrag !== mouseDragTem) {
      mouseDrag ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, dragEvents) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, dragEvents);
    }
    if (autoplay !== autoplayTem) {
      if (autoplay) {
        if (autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton); }
        if (!animating && !autoplayUserPaused) { startAutoplay(); }
      } else {
        if (autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton); }
        if (animating) { stopAutoplay(); }
      }
    }
    if (autoplayHoverPause !== autoplayHoverPauseTem) {
      autoplayHoverPause ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(container, hoverEvents) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(container, hoverEvents);
    }
    if (autoplayResetOnVisibility !== autoplayResetOnVisibilityTem) {
      autoplayResetOnVisibility ?
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(doc, visibilityEvent) :
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(doc, visibilityEvent);
    }

    if (bpChanged) {
      if (fixedWidth !== fixedWidthTem || center !== centerTem) { needContainerTransform = true; }

      if (autoHeight !== autoHeightTem) {
        if (!autoHeight) { innerWrapper.style.height = ''; }
      }

      if (controls && controlsText !== controlsTextTem) {
        prevButton.innerHTML = controlsText[0];
        nextButton.innerHTML = controlsText[1];
      }

      if (autoplayButton && autoplayText !== autoplayTextTem) {
        var i = autoplay ? 1 : 0,
            html = autoplayButton.innerHTML,
            len = html.length - autoplayTextTem[i].length;
        if (html.substring(len) === autoplayTextTem[i]) {
          autoplayButton.innerHTML = html.substring(0, len) + autoplayText[i];
        }
      }
    } else {
      if (center && (fixedWidth || autoWidth)) { needContainerTransform = true; }
    }

    if (itemsChanged || fixedWidth && !autoWidth) {
      pages = getPages();
      updateNavVisibility();
    }

    indChanged = index !== indexTem;
    if (indChanged) { 
      events.emit('indexChanged', info());
      needContainerTransform = true;
    } else if (itemsChanged) {
      if (!indChanged) { additionalUpdates(); }
    } else if (fixedWidth || autoWidth) {
      doLazyLoad(); 
      updateSlideStatus();
      updateLiveRegion();
    }

    if (itemsChanged && !carousel) { updateGallerySlidePositions(); }

    if (!disable && !freeze) {
      // non-meduaqueries: IE8
      if (bpChanged && !CSSMQ) {
        // middle wrapper styles
        if (autoHeight !== autoheightTem || speed !== speedTem) {
          update_carousel_transition_duration();
        }

        // inner wrapper styles
        if (edgePadding !== edgePaddingTem || gutter !== gutterTem) {
          innerWrapper.style.cssText = getInnerWrapperStyles(edgePadding, gutter, fixedWidth, speed, autoHeight);
        }

        if (horizontal) {
          // container styles
          if (carousel) {
            container.style.width = getContainerWidth(fixedWidth, gutter, items);
          }

          // slide styles
          var str = getSlideWidthStyle(fixedWidth, gutter, items) + 
                    getSlideGutterStyle(gutter);

          // remove the last line and
          // add new styles
          Object(_helpers_removeCSSRule_js__WEBPACK_IMPORTED_MODULE_13__["removeCSSRule"])(sheet, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet) - 1);
          Object(_helpers_addCSSRule_js__WEBPACK_IMPORTED_MODULE_12__["addCSSRule"])(sheet, '#' + slideId + ' > .tns-item', str, Object(_helpers_getCssRulesLength_js__WEBPACK_IMPORTED_MODULE_14__["getCssRulesLength"])(sheet));
        }
      }

      // auto height
      if (autoHeight) { doAutoHeight(); }

      if (needContainerTransform) {
        doContainerTransformSilent();
        indexCached = index;
      }
    }

    if (bpChanged) { events.emit('newBreakpointEnd', info(e)); }
  }





  // === INITIALIZATION FUNCTIONS === //
  function getFreeze () {
    if (!fixedWidth && !autoWidth) {
      var a = center ? items - (items - 1) / 2 : items;
      return  slideCount <= a;
    }

    var width = fixedWidth ? (fixedWidth + gutter) * slideCount : slidePositions[slideCount],
        vp = edgePadding ? viewport + edgePadding * 2 : viewport + gutter;

    if (center) {
      vp -= fixedWidth ? (viewport - fixedWidth) / 2 : (viewport - (slidePositions[index + 1] - slidePositions[index] - gutter)) / 2;
    }

    return width <= vp;
  }

  function setBreakpointZone () {
    breakpointZone = 0;
    for (var bp in responsive) {
      bp = parseInt(bp); // convert string to number
      if (windowWidth >= bp) { breakpointZone = bp; }
    }
  }

  // (slideBy, indexMin, indexMax) => index
  var updateIndex = (function () {
    return loop ? 
      carousel ?
        // loop + carousel
        function () {
          var leftEdge = indexMin,
              rightEdge = indexMax;

          leftEdge += slideBy;
          rightEdge -= slideBy;

          // adjust edges when has edge paddings
          // or fixed-width slider with extra space on the right side
          if (edgePadding) {
            leftEdge += 1;
            rightEdge -= 1;
          } else if (fixedWidth) {
            if ((viewport + gutter)%(fixedWidth + gutter)) { rightEdge -= 1; }
          }

          if (cloneCount) {
            if (index > rightEdge) {
              index -= slideCount;
            } else if (index < leftEdge) {
              index += slideCount;
            }
          }
        } :
        // loop + gallery
        function() {
          if (index > indexMax) {
            while (index >= indexMin + slideCount) { index -= slideCount; }
          } else if (index < indexMin) {
            while (index <= indexMax - slideCount) { index += slideCount; }
          }
        } :
      // non-loop
      function() {
        index = Math.max(indexMin, Math.min(indexMax, index));
      };
  })();

  function disableUI () {
    if (!autoplay && autoplayButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(autoplayButton); }
    if (!nav && navContainer) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(navContainer); }
    if (!controls) {
      if (controlsContainer) {
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(controlsContainer);
      } else {
        if (prevButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(prevButton); }
        if (nextButton) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(nextButton); }
      }
    }
  }

  function enableUI () {
    if (autoplay && autoplayButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(autoplayButton); }
    if (nav && navContainer) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(navContainer); }
    if (controls) {
      if (controlsContainer) {
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(controlsContainer);
      } else {
        if (prevButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(prevButton); }
        if (nextButton) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(nextButton); }
      }
    }
  }

  function freezeSlider () {
    if (frozen) { return; }

    // remove edge padding from inner wrapper
    if (edgePadding) { innerWrapper.style.margin = '0px'; }

    // add class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[i], str); }
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    disableUI();

    frozen = true;
  }

  function unfreezeSlider () {
    if (!frozen) { return; }

    // restore edge padding for inner wrapper
    // for mordern browsers
    if (edgePadding && CSSMQ) { innerWrapper.style.margin = ''; }

    // remove class tns-transparent to cloned slides
    if (cloneCount) {
      var str = 'tns-transparent';
      for (var i = cloneCount; i--;) {
        if (carousel) { Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[i], str); }
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(slideItems[slideCountNew - i - 1], str);
      }
    }

    // update tools
    enableUI();

    frozen = false;
  }

  function disableSlider () {
    if (disabled) { return; }

    sheet.disabled = true;
    container.className = container.className.replace(newContainerClasses.substring(1), '');
    Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(container, ['style']);
    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[j]); }
        Object(_helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"])(slideItems[slideCountNew - j - 1]);
      }
    }

    // vertical slider
    if (!horizontal || !carousel) { Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(innerWrapper, ['style']); }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i];
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['style']);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      }
    }

    // update tools
    disableUI();

    disabled = true;
  }

  function enableSlider () {
    if (!disabled) { return; }

    sheet.disabled = false;
    container.className += newContainerClasses;
    doContainerTransformSilent();

    if (loop) {
      for (var j = cloneCount; j--;) {
        if (carousel) { Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[j]); }
        Object(_helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"])(slideItems[slideCountNew - j - 1]);
      }
    }

    // gallery
    if (!carousel) { 
      for (var i = index, l = index + slideCount; i < l; i++) {
        var item = slideItems[i],
            classN = i < index + items ? animateIn : animateNormal;
        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classN);
      }
    }

    // update tools
    enableUI();

    disabled = false;
  }

  function updateLiveRegion () {
    var str = getLiveRegionStr();
    if (liveregionCurrent.innerHTML !== str) { liveregionCurrent.innerHTML = str; }
  }

  function getLiveRegionStr () {
    var arr = getVisibleSlideRange(),
        start = arr[0] + 1,
        end = arr[1] + 1;
    return start === end ? start + '' : start + ' to ' + end; 
  }

  function getVisibleSlideRange (val) {
    if (val == null) { val = getContainerTransformValue(); }
    var start = index, end, rangestart, rangeend;

    // get range start, range end for autoWidth and fixedWidth
    if (center || edgePadding) {
      if (autoWidth || fixedWidth) {
        rangestart = - (parseFloat(val) + edgePadding);
        rangeend = rangestart + viewport + edgePadding * 2;
      }
    } else {
      if (autoWidth) {
        rangestart = slidePositions[index];
        rangeend = rangestart + viewport;
      }
    }

    // get start, end
    // - check auto width
    if (autoWidth) {
      slidePositions.forEach(function(point, i) {
        if (i < slideCountNew) {
          if ((center || edgePadding) && point <= rangestart + 0.5) { start = i; }
          if (rangeend - point >= 0.5) { end = i; }
        }
      });

    // - check percentage width, fixed width
    } else {

      if (fixedWidth) {
        var cell = fixedWidth + gutter;
        if (center || edgePadding) {
          start = Math.floor(rangestart/cell);
          end = Math.ceil(rangeend/cell - 1);
        } else {
          end = start + Math.ceil(viewport/cell) - 1;
        }

      } else {
        if (center || edgePadding) {
          var a = items - 1;
          if (center) {
            start -= a / 2;
            end = index + a / 2;
          } else {
            end = index + a;
          }

          if (edgePadding) {
            var b = edgePadding * items / viewport;
            start -= b;
            end += b;
          }

          start = Math.floor(start);
          end = Math.ceil(end);
        } else {
          end = start + items - 1;
        }
      }

      start = Math.max(start, 0);
      end = Math.min(end, slideCountNew - 1);
    }

    return [start, end];
  }

  function doLazyLoad () {
    if (lazyload && !disable) {
      getImageArray.apply(null, getVisibleSlideRange()).forEach(function (img) {
        if (!Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) {
          // stop propagation transitionend event to container
          var eve = {};
          eve[TRANSITIONEND] = function (e) { e.stopPropagation(); };
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, eve);

          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(img, imgEvents);

          // update src
          img.src = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-src');

          // update srcset
          var srcset = Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(img, 'data-srcset');
          if (srcset) { img.srcset = srcset; }

          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loading');
        }
      });
    }
  }

  function onImgLoaded (e) {
    imgLoaded(getTarget(e));
  }

  function onImgFailed (e) {
    imgFailed(getTarget(e));
  }

  function imgLoaded (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'loaded');
    imgCompleted(img);
  }

  function imgFailed (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'failed');
    imgCompleted(img);
  }

  function imgCompleted (img) {
    Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(img, 'tns-complete');
    Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(img, 'loading');
    Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(img, imgEvents);
  }

  function getImageArray (start, end) {
    var imgs = [];
    while (start <= end) {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems[start].querySelectorAll('img'), function (img) { imgs.push(img); });
      start++;
    }

    return imgs;
  }

  // check if all visible images are loaded
  // and update container height if it's done
  function doAutoHeight () {
    var imgs = getImageArray.apply(null, getVisibleSlideRange());
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ imgsLoadedCheck(imgs, updateInnerWrapperHeight); });
  }

  function imgsLoadedCheck (imgs, cb) {
    // directly execute callback function if all images are complete
    if (imgsComplete) { return cb(); }

    // check selected image classes otherwise
    imgs.forEach(function (img, index) {
      if (Object(_helpers_hasClass_js__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(img, imgCompleteClass)) { imgs.splice(index, 1); }
    });

    // execute callback function if selected images are all complete
    if (!imgs.length) { return cb(); }

    // otherwise execute this functiona again
    Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ imgsLoadedCheck(imgs, cb); });
  } 

  function additionalUpdates () {
    doLazyLoad(); 
    updateSlideStatus();
    updateLiveRegion();
    updateControlsStatus();
    updateNavStatus();
  }


  function update_carousel_transition_duration () {
    if (carousel && autoHeight) {
      middleWrapper.style[TRANSITIONDURATION] = speed / 1000 + 's';
    }
  }

  function getMaxSlideHeight (slideStart, slideRange) {
    var heights = [];
    for (var i = slideStart, l = Math.min(slideStart + slideRange, slideCountNew); i < l; i++) {
      heights.push(slideItems[i].offsetHeight);
    }

    return Math.max.apply(null, heights);
  }

  // update inner wrapper height
  // 1. get the max-height of the visible slides
  // 2. set transitionDuration to speed
  // 3. update inner wrapper height to max-height
  // 4. set transitionDuration to 0s after transition done
  function updateInnerWrapperHeight () {
    var maxHeight = autoHeight ? getMaxSlideHeight(index, items) : getMaxSlideHeight(cloneCount, slideCount),
        wp = middleWrapper ? middleWrapper : innerWrapper;

    if (wp.style.height !== maxHeight) { wp.style.height = maxHeight + 'px'; }
  }

  // get the distance from the top edge of the first slide to each slide
  // (init) => slidePositions
  function setSlidePositions () {
    slidePositions = [0];
    var attr = horizontal ? 'left' : 'top',
        attr2 = horizontal ? 'right' : 'bottom',
        base = slideItems[0].getBoundingClientRect()[attr];

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function(item, i) {
      // skip the first slide
      if (i) { slidePositions.push(item.getBoundingClientRect()[attr] - base); }
      // add the end edge
      if (i === slideCountNew - 1) { slidePositions.push(item.getBoundingClientRect()[attr2] - base); }
    });
  }

  // update slide
  function updateSlideStatus () {
    var range = getVisibleSlideRange(),
        start = range[0],
        end = range[1];

    Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function(item, i) {
      // show slides
      if (i >= start && i <= end) {
        if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(item, ['aria-hidden', 'tabindex']);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, slideActiveClass);
        }
      // hide slides
      } else {
        if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(item, 'aria-hidden')) {
          Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(item, {
            'aria-hidden': 'true',
            'tabindex': '-1'
          });
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, slideActiveClass);
        }
      }
    });
  }

  // gallery: update slide position
  function updateGallerySlidePositions () {
    var l = index + Math.min(slideCount, items);
    for (var i = slideCountNew; i--;) {
      var item = slideItems[i];

      if (i >= index && i < l) {
        // add transitions to visible slides when adjusting their positions
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, 'tns-moving');

        item.style.left = (i - index) * 100 / items + '%';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateIn);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateNormal);
      } else if (item.style.left) {
        item.style.left = '';
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateIn);
      }

      // remove outlet animation
      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
    }

    // removing '.tns-moving'
    setTimeout(function() {
      Object(_helpers_forEach_js__WEBPACK_IMPORTED_MODULE_17__["forEach"])(slideItems, function(el) {
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(el, 'tns-moving');
      });
    }, 300);
  }

  // set tabindex on Nav
  function updateNavStatus () {
    // get current nav
    if (nav) {
      navCurrentIndex = navClicked >= 0 ? navClicked : getCurrentNavIndex();
      navClicked = -1;

      if (navCurrentIndex !== navCurrentIndexCached) {
        var navPrev = navItems[navCurrentIndexCached],
            navCurrent = navItems[navCurrentIndex];

        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navPrev, {
          'tabindex': '-1',
          'aria-label': navStr + (navCurrentIndexCached + 1)
        });
        Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(navPrev, navActiveClass);
        
        Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(navCurrent, {'aria-label': navStr + (navCurrentIndex + 1) + navStrCurrent});
        Object(_helpers_removeAttrs_js__WEBPACK_IMPORTED_MODULE_24__["removeAttrs"])(navCurrent, 'tabindex');
        Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(navCurrent, navActiveClass);

        navCurrentIndexCached = navCurrentIndex;
      }
    }
  }

  function getLowerCaseNodeName (el) {
    return el.nodeName.toLowerCase();
  }

  function isButton (el) {
    return getLowerCaseNodeName(el) === 'button';
  }

  function isAriaDisabled (el) {
    return el.getAttribute('aria-disabled') === 'true';
  }

  function disEnableElement (isButton, el, val) {
    if (isButton) {
      el.disabled = val;
    } else {
      el.setAttribute('aria-disabled', val.toString());
    }
  }

  // set 'disabled' to true on controls when reach the edges
  function updateControlsStatus () {
    if (!controls || rewind || loop) { return; }

    var prevDisabled = (prevIsButton) ? prevButton.disabled : isAriaDisabled(prevButton),
        nextDisabled = (nextIsButton) ? nextButton.disabled : isAriaDisabled(nextButton),
        disablePrev = (index <= indexMin) ? true : false,
        disableNext = (!rewind && index >= indexMax) ? true : false;

    if (disablePrev && !prevDisabled) {
      disEnableElement(prevIsButton, prevButton, true);
    }
    if (!disablePrev && prevDisabled) {
      disEnableElement(prevIsButton, prevButton, false);
    }
    if (disableNext && !nextDisabled) {
      disEnableElement(nextIsButton, nextButton, true);
    }
    if (!disableNext && nextDisabled) {
      disEnableElement(nextIsButton, nextButton, false);
    }
  }

  // set duration
  function resetDuration (el, str) {
    if (TRANSITIONDURATION) { el.style[TRANSITIONDURATION] = str; }
  }

  function getSliderWidth () {
    return fixedWidth ? (fixedWidth + gutter) * slideCountNew : slidePositions[slideCountNew];
  }

  function getCenterGap (num) {
    if (num == null) { num = index; }

    var gap = edgePadding ? gutter : 0;
    return autoWidth ? ((viewport - gap) - (slidePositions[num + 1] - slidePositions[num] - gutter))/2 :
      fixedWidth ? (viewport - fixedWidth) / 2 :
        (items - 1) / 2;
  }

  function getRightBoundary () {
    var gap = edgePadding ? gutter : 0,
        result = (viewport + gap) - getSliderWidth();

    if (center && !loop) {
      result = fixedWidth ? - (fixedWidth + gutter) * (slideCountNew - 1) - getCenterGap() :
        getCenterGap(slideCountNew - 1) - slidePositions[slideCountNew - 1];
    }
    if (result > 0) { result = 0; }

    return result;
  }

  function getContainerTransformValue (num) {
    if (num == null) { num = index; }

    var val;
    if (horizontal && !autoWidth) {
      if (fixedWidth) {
        val = - (fixedWidth + gutter) * num;
        if (center) { val += getCenterGap(); }
      } else {
        var denominator = TRANSFORM ? slideCountNew : items;
        if (center) { num -= getCenterGap(); }
        val = - num * 100 / denominator;
      }
    } else {
      val = - slidePositions[num];
      if (center && autoWidth) {
        val += getCenterGap();
      }
    }

    if (hasRightDeadZone) { val = Math.max(val, rightBoundary); }

    val += (horizontal && !autoWidth && !fixedWidth) ? '%' : 'px';

    return val;
  }

  function doContainerTransformSilent (val) {
    resetDuration(container, '0s');
    doContainerTransform(val);
  }

  function doContainerTransform (val) {
    if (val == null) { val = getContainerTransformValue(); }
    container.style[transformAttr] = transformPrefix + val + transformPostfix;
  }

  function animateSlide (number, classOut, classIn, isOut) {
    var l = number + items;
    if (!loop) { l = Math.min(l, slideCountNew); }

    for (var i = number; i < l; i++) {
        var item = slideItems[i];

      // set item positions
      if (!isOut) { item.style.left = (i - index) * 100 / items + '%'; }

      if (animateDelay && TRANSITIONDELAY) {
        item.style[TRANSITIONDELAY] = item.style[ANIMATIONDELAY] = animateDelay * (i - number) / 1000 + 's';
      }
      Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, classOut);
      Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, classIn);
      
      if (isOut) { slideItemsOut.push(item); }
    }
  }

  // make transfer after click/drag:
  // 1. change 'transform' property for mordern browsers
  // 2. change 'left' property for legacy browsers
  var transformCore = (function () {
    return carousel ?
      function () {
        resetDuration(container, '');
        if (TRANSITIONDURATION || !speed) {
          // for morden browsers with non-zero duration or 
          // zero duration for all browsers
          doContainerTransform();
          // run fallback function manually 
          // when duration is 0 / container is hidden
          if (!speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) { onTransitionEnd(); }

        } else {
          // for old browser with non-zero duration
          Object(_helpers_jsTransform_js__WEBPACK_IMPORTED_MODULE_35__["jsTransform"])(container, transformAttr, transformPrefix, transformPostfix, getContainerTransformValue(), speed, onTransitionEnd);
        }

        if (!horizontal) { updateContentWrapperHeight(); }
      } :
      function () {
        slideItemsOut = [];

        var eve = {};
        eve[TRANSITIONEND] = eve[ANIMATIONEND] = onTransitionEnd;
        Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(slideItems[indexCached], eve);
        Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(slideItems[index], eve);

        animateSlide(indexCached, animateIn, animateOut, true);
        animateSlide(index, animateNormal, animateIn);

        // run fallback function manually 
        // when transition or animation not supported / duration is 0
        if (!TRANSITIONEND || !ANIMATIONEND || !speed || !Object(_helpers_isVisible_js__WEBPACK_IMPORTED_MODULE_28__["isVisible"])(container)) { onTransitionEnd(); }
      };
  })();

  function render (e, sliderMoved) {
    if (updateIndexBeforeTransform) { updateIndex(); }

    // render when slider was moved (touch or drag) even though index may not change
    if (index !== indexCached || sliderMoved) {
      // events
      events.emit('indexChanged', info());
      events.emit('transitionStart', info());
      if (autoHeight) { doAutoHeight(); }

      // pause autoplay when click or keydown from user
      if (animating && e && ['click', 'keydown'].indexOf(e.type) >= 0) { stopAutoplay(); }

      running = true;
      transformCore();
    }
  }

  /*
   * Transfer prefixed properties to the same format
   * CSS: -Webkit-Transform => webkittransform
   * JS: WebkitTransform => webkittransform
   * @param {string} str - property
   *
   */
  function strTrans (str) {
    return str.toLowerCase().replace(/-/g, '');
  }

  // AFTER TRANSFORM
  // Things need to be done after a transfer:
  // 1. check index
  // 2. add classes to visible slide
  // 3. disable controls buttons when reach the first/last slide in non-loop slider
  // 4. update nav status
  // 5. lazyload images
  // 6. update container height
  function onTransitionEnd (event) {
    // check running on gallery mode
    // make sure trantionend/animationend events run only once
    if (carousel || running) {
      events.emit('transitionEnd', info(event));

      if (!carousel && slideItemsOut.length > 0) {
        for (var i = 0; i < slideItemsOut.length; i++) {
          var item = slideItemsOut[i];
          // set item positions
          item.style.left = '';

          if (ANIMATIONDELAY && TRANSITIONDELAY) { 
            item.style[ANIMATIONDELAY] = '';
            item.style[TRANSITIONDELAY] = '';
          }
          Object(_helpers_removeClass_js__WEBPACK_IMPORTED_MODULE_20__["removeClass"])(item, animateOut);
          Object(_helpers_addClass_js__WEBPACK_IMPORTED_MODULE_19__["addClass"])(item, animateNormal);
        }
      }

      /* update slides, nav, controls after checking ...
       * => legacy browsers who don't support 'event' 
       *    have to check event first, otherwise event.target will cause an error 
       * => or 'gallery' mode: 
       *   + event target is slide item
       * => or 'carousel' mode: 
       *   + event target is container, 
       *   + event.property is the same with transform attribute
       */
      if (!event || 
          !carousel && event.target.parentNode === container || 
          event.target === container && strTrans(event.propertyName) === strTrans(transformAttr)) {

        if (!updateIndexBeforeTransform) { 
          var indexTem = index;
          updateIndex();
          if (index !== indexTem) { 
            events.emit('indexChanged', info());

            doContainerTransformSilent();
          }
        } 

        if (nested === 'inner') { events.emit('innerLoaded', info()); }
        running = false;
        indexCached = index;
      }
    }

  }

  // # ACTIONS
  function goTo (targetIndex, e) {
    if (freeze) { return; }

    // prev slideBy
    if (targetIndex === 'prev') {
      onControlsClick(e, -1);

    // next slideBy
    } else if (targetIndex === 'next') {
      onControlsClick(e, 1);

    // go to exact slide
    } else {
      if (running) {
        if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
      }

      var absIndex = getAbsIndex(), 
          indexGap = 0;

      if (targetIndex === 'first') {
        indexGap = - absIndex;
      } else if (targetIndex === 'last') {
        indexGap = carousel ? slideCount - items - absIndex : slideCount - 1 - absIndex;
      } else {
        if (typeof targetIndex !== 'number') { targetIndex = parseInt(targetIndex); }

        if (!isNaN(targetIndex)) {
          // from directly called goTo function
          if (!e) { targetIndex = Math.max(0, Math.min(slideCount - 1, targetIndex)); }

          indexGap = targetIndex - absIndex;
        }
      }

      // gallery: make sure new page won't overlap with current page
      if (!carousel && indexGap && Math.abs(indexGap) < items) {
        var factor = indexGap > 0 ? 1 : -1;
        indexGap += (index + indexGap - slideCount) >= indexMin ? slideCount * factor : slideCount * 2 * factor * -1;
      }

      index += indexGap;

      // make sure index is in range
      if (carousel && loop) {
        if (index < indexMin) { index += slideCount; }
        if (index > indexMax) { index -= slideCount; }
      }

      // if index is changed, start rendering
      if (getAbsIndex(index) !== getAbsIndex(indexCached)) {
        render(e);
      }

    }
  }

  // on controls click
  function onControlsClick (e, dir) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    var passEventObject;

    if (!dir) {
      e = getEvent(e);
      var target = getTarget(e);

      while (target !== controlsContainer && [prevButton, nextButton].indexOf(target) < 0) { target = target.parentNode; }

      var targetIn = [prevButton, nextButton].indexOf(target);
      if (targetIn >= 0) {
        passEventObject = true;
        dir = targetIn === 0 ? -1 : 1;
      }
    }

    if (rewind) {
      if (index === indexMin && dir === -1) {
        goTo('last', e);
        return;
      } else if (index === indexMax && dir === 1) {
        goTo('first', e);
        return;
      }
    }

    if (dir) {
      index += slideBy * dir;
      if (autoWidth) { index = Math.floor(index); }
      // pass e when click control buttons or keydown
      render((passEventObject || (e && e.type === 'keydown')) ? e : null);
    }
  }

  // on nav click
  function onNavClick (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }
    
    e = getEvent(e);
    var target = getTarget(e), navIndex;

    // find the clicked nav item
    while (target !== navContainer && !Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) { target = target.parentNode; }
    if (Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(target, 'data-nav')) {
      var navIndex = navClicked = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(target, 'data-nav')),
          targetIndexBase = fixedWidth || autoWidth ? navIndex * slideCount / pages : navIndex * items,
          targetIndex = navAsThumbnails ? navIndex : Math.min(Math.ceil(targetIndexBase), slideCount - 1);
      goTo(targetIndex, e);

      if (navCurrentIndex === navIndex) {
        if (animating) { stopAutoplay(); }
        navClicked = -1; // reset navClicked
      }
    }
  }

  // autoplay functions
  function setAutoplayTimer () {
    autoplayTimer = setInterval(function () {
      onControlsClick(null, autoplayDirection);
    }, autoplayTimeout);

    animating = true;
  }

  function stopAutoplayTimer () {
    clearInterval(autoplayTimer);
    animating = false;
  }

  function updateAutoplayButton (action, txt) {
    Object(_helpers_setAttrs_js__WEBPACK_IMPORTED_MODULE_23__["setAttrs"])(autoplayButton, {'data-action': action});
    autoplayButton.innerHTML = autoplayHtmlStrings[0] + action + autoplayHtmlStrings[1] + txt;
  }

  function startAutoplay () {
    setAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('stop', autoplayText[1]); }
  }

  function stopAutoplay () {
    stopAutoplayTimer();
    if (autoplayButton) { updateAutoplayButton('start', autoplayText[0]); }
  }

  // programaitcally play/pause the slider
  function play () {
    if (autoplay && !animating) {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }
  function pause () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    }
  }

  function toggleAutoplay () {
    if (animating) {
      stopAutoplay();
      autoplayUserPaused = true;
    } else {
      startAutoplay();
      autoplayUserPaused = false;
    }
  }

  function onVisibilityChange () {
    if (doc.hidden) {
      if (animating) {
        stopAutoplayTimer();
        autoplayVisibilityPaused = true;
      }
    } else if (autoplayVisibilityPaused) {
      setAutoplayTimer();
      autoplayVisibilityPaused = false;
    }
  }

  function mouseoverPause () {
    if (animating) { 
      stopAutoplayTimer();
      autoplayHoverPaused = true;
    }
  }

  function mouseoutRestart () {
    if (autoplayHoverPaused) { 
      setAutoplayTimer();
      autoplayHoverPaused = false;
    }
  }

  // keydown events on document 
  function onDocumentKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      onControlsClick(e, keyIndex === 0 ? -1 : 1);
    }
  }

  // on key control
  function onControlsKeydown (e) {
    e = getEvent(e);
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT].indexOf(e.keyCode);

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (!prevButton.disabled) { onControlsClick(e, -1); }
      } else if (!nextButton.disabled) {
        onControlsClick(e, 1);
      }
    }
  }

  // set focus
  function setFocus (el) {
    el.focus();
  }

  // on key nav
  function onNavKeydown (e) {
    e = getEvent(e);
    var curElement = doc.activeElement;
    if (!Object(_helpers_hasAttr_js__WEBPACK_IMPORTED_MODULE_21__["hasAttr"])(curElement, 'data-nav')) { return; }

    // var code = e.keyCode,
    var keyIndex = [KEYS.LEFT, KEYS.RIGHT, KEYS.ENTER, KEYS.SPACE].indexOf(e.keyCode),
        navIndex = Number(Object(_helpers_getAttr_js__WEBPACK_IMPORTED_MODULE_22__["getAttr"])(curElement, 'data-nav'));

    if (keyIndex >= 0) {
      if (keyIndex === 0) {
        if (navIndex > 0) { setFocus(navItems[navIndex - 1]); }
      } else if (keyIndex === 1) {
        if (navIndex < pages - 1) { setFocus(navItems[navIndex + 1]); }
      } else {
        navClicked = navIndex;
        goTo(navIndex, e);
      }
    }
  }

  function getEvent (e) {
    e = e || win.event;
    return isTouchEvent(e) ? e.changedTouches[0] : e;
  }
  function getTarget (e) {
    return e.target || win.event.srcElement;
  }

  function isTouchEvent (e) {
    return e.type.indexOf('touch') >= 0;
  }

  function preventDefaultBehavior (e) {
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
  }

  function getMoveDirectionExpected () {
    return Object(_helpers_getTouchDirection_js__WEBPACK_IMPORTED_MODULE_16__["getTouchDirection"])(Object(_helpers_toDegree_js__WEBPACK_IMPORTED_MODULE_15__["toDegree"])(lastPosition.y - initPosition.y, lastPosition.x - initPosition.x), swipeAngle) === options.axis;
  }

  function onPanStart (e) {
    if (running) {
      if (preventActionWhenRunning) { return; } else { onTransitionEnd(); }
    }

    if (autoplay && animating) { stopAutoplayTimer(); }
    
    panStart = true;
    if (rafIndex) {
      Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
      rafIndex = null;
    }

    var $ = getEvent(e);
    events.emit(isTouchEvent(e) ? 'touchStart' : 'dragStart', info(e));

    if (!isTouchEvent(e) && ['img', 'a'].indexOf(getLowerCaseNodeName(getTarget(e))) >= 0) {
      preventDefaultBehavior(e);
    }

    lastPosition.x = initPosition.x = $.clientX;
    lastPosition.y = initPosition.y = $.clientY;
    if (carousel) {
      translateInit = parseFloat(container.style[transformAttr].replace(transformPrefix, ''));
      resetDuration(container, '0s');
    }
  }

  function onPanMove (e) {
    if (panStart) {
      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;

      if (carousel) {
        if (!rafIndex) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ panUpdate(e); }); }
      } else {
        if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
        if (moveDirectionExpected) { preventScroll = true; }
      }

      if (preventScroll) { e.preventDefault(); }
    }
  }

  function panUpdate (e) {
    if (!moveDirectionExpected) {
      panStart = false;
      return;
    }
    Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
    if (panStart) { rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function(){ panUpdate(e); }); }

    if (moveDirectionExpected === '?') { moveDirectionExpected = getMoveDirectionExpected(); }
    if (moveDirectionExpected) {
      if (!preventScroll && isTouchEvent(e)) { preventScroll = true; }

      try {
        if (e.type) { events.emit(isTouchEvent(e) ? 'touchMove' : 'dragMove', info(e)); }
      } catch(err) {}

      var x = translateInit,
          dist = getDist(lastPosition, initPosition);
      if (!horizontal || fixedWidth || autoWidth) {
        x += dist;
        x += 'px';
      } else {
        var percentageX = TRANSFORM ? dist * items * 100 / ((viewport + gutter) * slideCountNew): dist * 100 / (viewport + gutter);
        x += percentageX;
        x += '%';
      }

      container.style[transformAttr] = transformPrefix + x + transformPostfix;
    }
  }

  function onPanEnd (e) {
    if (panStart) {
      if (rafIndex) {
        Object(_helpers_caf_js__WEBPACK_IMPORTED_MODULE_3__["caf"])(rafIndex);
        rafIndex = null;
      }
      if (carousel) { resetDuration(container, ''); }
      panStart = false;

      var $ = getEvent(e);
      lastPosition.x = $.clientX;
      lastPosition.y = $.clientY;
      var dist = getDist(lastPosition, initPosition);

      if (Math.abs(dist)) {
        // drag vs click
        if (!isTouchEvent(e)) {
          // prevent "click"
          var target = getTarget(e);
          Object(_helpers_addEvents_js__WEBPACK_IMPORTED_MODULE_32__["addEvents"])(target, {'click': function preventClick (e) {
            preventDefaultBehavior(e);
            Object(_helpers_removeEvents_js__WEBPACK_IMPORTED_MODULE_33__["removeEvents"])(target, {'click': preventClick});
          }}); 
        }

        if (carousel) {
          rafIndex = Object(_helpers_raf_js__WEBPACK_IMPORTED_MODULE_2__["raf"])(function() {
            if (horizontal && !autoWidth) {
              var indexMoved = - dist * items / (viewport + gutter);
              indexMoved = dist > 0 ? Math.floor(indexMoved) : Math.ceil(indexMoved);
              index += indexMoved;
            } else {
              var moved = - (translateInit + dist);
              if (moved <= 0) {
                index = indexMin;
              } else if (moved >= slidePositions[slideCountNew - 1]) {
                index = indexMax;
              } else {
                var i = 0;
                while (i < slideCountNew && moved >= slidePositions[i]) {
                  index = i;
                  if (moved > slidePositions[i] && dist < 0) { index += 1; }
                  i++;
                }
              }
            }

            render(e, dist);
            events.emit(isTouchEvent(e) ? 'touchEnd' : 'dragEnd', info(e));
          });
        } else {
          if (moveDirectionExpected) {
            onControlsClick(e, dist > 0 ? -1 : 1);
          }
        }
      }
    }

    // reset
    if (options.preventScrollOnTouch === 'auto') { preventScroll = false; }
    if (swipeAngle) { moveDirectionExpected = '?'; } 
    if (autoplay && !animating) { setAutoplayTimer(); }
  }

  // === RESIZE FUNCTIONS === //
  // (slidePositions, index, items) => vertical_conentWrapper.height
  function updateContentWrapperHeight () {
    var wp = middleWrapper ? middleWrapper : innerWrapper;
    wp.style.height = slidePositions[index + items] - slidePositions[index] + 'px';
  }

  function getPages () {
    var rough = fixedWidth ? (fixedWidth + gutter) * slideCount / viewport : slideCount / items;
    return Math.min(Math.ceil(rough), slideCount);
  }

  /*
   * 1. update visible nav items list
   * 2. add "hidden" attributes to previous visible nav items
   * 3. remove "hidden" attrubutes to new visible nav items
   */
  function updateNavVisibility () {
    if (!nav || navAsThumbnails) { return; }

    if (pages !== pagesCached) {
      var min = pagesCached,
          max = pages,
          fn = _helpers_showElement_js__WEBPACK_IMPORTED_MODULE_27__["showElement"];

      if (pagesCached > pages) {
        min = pages;
        max = pagesCached;
        fn = _helpers_hideElement_js__WEBPACK_IMPORTED_MODULE_26__["hideElement"];
      }

      while (min < max) {
        fn(navItems[min]);
        min++;
      }

      // cache pages
      pagesCached = pages;
    }
  }

  function info (e) {
    return {
      container: container,
      slideItems: slideItems,
      navContainer: navContainer,
      navItems: navItems,
      controlsContainer: controlsContainer,
      hasControls: hasControls,
      prevButton: prevButton,
      nextButton: nextButton,
      items: items,
      slideBy: slideBy,
      cloneCount: cloneCount,
      slideCount: slideCount,
      slideCountNew: slideCountNew,
      index: index,
      indexCached: indexCached,
      displayIndex: getCurrentSlide(),
      navCurrentIndex: navCurrentIndex,
      navCurrentIndexCached: navCurrentIndexCached,
      pages: pages,
      pagesCached: pagesCached,
      sheet: sheet,
      isOn: isOn,
      event: e || {},
    };
  }

  return {
    version: '2.9.2',
    getInfo: info,
    events: events,
    goTo: goTo,
    play: play,
    pause: pause,
    isOn: isOn,
    updateSliderHeight: updateInnerWrapperHeight,
    refresh: initSliderTransform,
    destroy: destroy,
    rebuild: function() {
      return tns(Object(_helpers_extend_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(options, optionsElements));
    }
  };
};


/***/ }),

/***/ "./themes/quicksilver/js/app.js":
/*!**************************************!*\
  !*** ./themes/quicksilver/js/app.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../scss/style.scss */ "./themes/quicksilver/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/forms */ "./themes/quicksilver/js/components/forms.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/modals */ "./themes/quicksilver/js/components/modals.js");
/* harmony import */ var _components_modals__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modals__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_sliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sliders */ "./themes/quicksilver/js/components/sliders.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accordion */ "./themes/quicksilver/js/components/accordion.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tabs */ "./themes/quicksilver/js/components/tabs.js");
/* harmony import */ var _components_parallax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/parallax */ "./themes/quicksilver/js/components/parallax.js");
/* harmony import */ var _components_equalizer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/equalizer */ "./themes/quicksilver/js/components/equalizer.js");
/* harmony import */ var _components_videoEmbed__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/videoEmbed */ "./themes/quicksilver/js/components/videoEmbed.js");
/* harmony import */ var _components_breakpoints__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/breakpoints */ "./themes/quicksilver/js/components/breakpoints.js");
/*------------------------------------------------------------------
Stylesheets
------------------------------------------------------------------*/
// import './../../../core/scss/style.scss';
 // import './../../../quickblocks/scss/style.scss';

/*------------------------------------------------------------------
Versioning & Debug Information
------------------------------------------------------------------*/

window.debug = window.location.host.includes('.test');
if (debug) console.log('%c👨‍💻👨‍💻', 'padding:5px 5px;font-size:20px;color:#fff;text-shadow:0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2);'); // ------------------------------------------------------------------
// User
// ------------------------------------------------------------------ 

var loadContent = __webpack_require__(/*! ./functions/loadContent */ "./themes/quicksilver/js/functions/loadContent.js");

var selectAll = __webpack_require__(/*! ./functions/selectAll */ "./themes/quicksilver/js/functions/selectAll.js"); // import './components/breakpoints';





var sliders = [];
var sliderSettings = {
  '.js-slider--hero': {},
  '.js-slider--gallery': {},
  '.js-slider--testimonials': {}
};
Object.keys(sliderSettings).map(function (selector) {
  selectAll(selector).forEach(function (el) {
    return sliders.push(new _components_sliders__WEBPACK_IMPORTED_MODULE_3__["default"](el, sliderSettings[selector]));
  });
});




 // import SmoothScroll from './components/smoothScroll';
// import Gallery from './components/gallery';


selectAll('.js-accordion').forEach(function (group) {
  return new _components_accordion__WEBPACK_IMPORTED_MODULE_4__["default"](group);
});
selectAll('.js-tabs').forEach(function (group) {
  return new _components_tabs__WEBPACK_IMPORTED_MODULE_5__["default"](group);
}); // selectAll('.js-gallery').forEach((group) => new Gallery(group, sliders));

selectAll('[data-equalize]').forEach(function (group) {
  return new _components_equalizer__WEBPACK_IMPORTED_MODULE_7__["default"](group);
});
selectAll('[data-parallax]').forEach(function (group) {
  return new _components_parallax__WEBPACK_IMPORTED_MODULE_6__["default"](group);
});
selectAll('[data-breakpoint]').forEach(function (group) {
  return new _components_breakpoints__WEBPACK_IMPORTED_MODULE_9__["default"](group);
});
selectAll('[data-video]').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    el.insertAdjacentHTML('beforeend', new _components_videoEmbed__WEBPACK_IMPORTED_MODULE_8__["default"](el.dataset.video, {
      autoplay: 1
    }).render());
  });
}); // new SmoothScroll(document.querySelector('[data-smooth-scroll]'));

selectAll('.js-sliderGallery').forEach(function (group) {
  var gallery = {};
  var sliderMain = group.querySelector('.js-sliderGallery--main');
  var sliderNav = group.querySelector('.js-sliderGallery--nav');
  gallery.main = new _components_sliders__WEBPACK_IMPORTED_MODULE_3__["default"](sliderMain, {
    loop: false,
    nav: false,
    mode: "gallery"
  }).tns;

  if (sliderNav !== null) {
    var navItems = Array.from(sliderNav.querySelectorAll('.js-sliderGallery--nav-item'));
    navItems[0].classList.add('tns-slide-current');
    gallery.nav = new _components_sliders__WEBPACK_IMPORTED_MODULE_3__["default"](sliderNav, {
      loop: false,
      nav: false,
      controls: false
    }).tns;
    var changing = null;
    var hasChanged = 0;

    var changeSlides = function changeSlides(sliderToChange, index) {
      clearTimeout(changing);
      hasChanged = 1;
      navItems.forEach(function (item) {
        return item.classList.remove('tns-slide-current');
      });
      navItems[index].classList.add('tns-slide-current');
      changing = setTimeout(function () {
        hasChanged = 0;
        sliderToChange.goTo(index);
      }, 200);
    };

    navItems.forEach(function (item) {
      item.addEventListener('click', function () {
        var index = navItems.indexOf(item);
        gallery.nav.goTo(index);
        changeSlides(gallery.main, index);
      });
    });
    gallery.main.events.on('indexChanged', function (e) {
      changeSlides(gallery.nav, e.index);
    });
    gallery.nav.events.on('indexChanged', function (e) {
      changeSlides(gallery.main, e.index);
    });
  }
}); // loadContent({
// 	url: '/contact-us',
// 	method: 'POST',
// 	success: (response) => {
// 		console.log(response);
// 	}
// });

/***/ }),

/***/ "./themes/quicksilver/js/components/accordion.js":
/*!*******************************************************!*\
  !*** ./themes/quicksilver/js/components/accordion.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_toggleHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/toggleHeight */ "./themes/quicksilver/js/functions/toggleHeight.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var lastInRow = __webpack_require__(/*! ../functions/lastInRow */ "./themes/quicksilver/js/functions/lastInRow.js");

var containsClass = __webpack_require__(/*! ../functions/containsClass */ "./themes/quicksilver/js/functions/containsClass.js");

var Accordion = function Accordion(el) {
  _classCallCheck(this, Accordion);

  this.container = el;
  this.triggers = Array.from(this.container.querySelectorAll('.js-accordion--trigger'));
  this.triggers.forEach(function (trigger) {
    var target = trigger.parentElement.querySelector('.js-accordion--target');
    var targetControl = new _functions_toggleHeight__WEBPACK_IMPORTED_MODULE_0__["default"](target);
    targetControl.animate(0);
    trigger.addEventListener('click', function (e) {
      e.preventDefault();

      if (containsClass(trigger, 'js-active')) {
        trigger.classList.remove('js-active');
        targetControl.animate(0);
      } else {
        trigger.classList.add('js-active');
        targetControl.animate();
      }
    });
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion); // function accordionAction($trigger, $target) {
// 	var $group = $trigger.parents('.js-accordion');
// 	var $allTriggers = $group.find('.js-accordion--trigger');
// 	var $allTargets = $group.find('.js-accordion--target');
// 	if ($trigger.hasClass('js-active')) {
// 		$allTriggers.removeClass('js-active');
// 		$allTargets.slideUp();
// 		$trigger.removeClass('js-active');
// 		$target.slideUp();
// 	} else {
// 		$allTriggers.removeClass('js-active');
// 		$allTargets.slideUp();
// 		// $('.js-active').removeClass('js-active');
// 		$trigger.addClass('js-active');
// 		$target.slideDown();
// 	}
// }
// $('.js-accordion').each(function () {
// 	var $accordion = $(this);
// 	var $trigger = $accordion.find('.js-accordion--trigger');
// 	if ($accordion.hasClass('js-active')) {
// 		$target.css({ 'display': 'block' });
// 	}
// 	$trigger.each(function () {
// 		var $this = $(this);
// 		var $target = $this.siblings('.js-accordion--target');
// 		var canClick = 1;
// 		$this.on('click', function (e) {
// 			e.preventDefault();
// 			if (canClick) {
// 				canClick = 0;
// 				accordionAction($this, $target);
// 				setTimeout(function () {
// 					canClick = 1;
// 				}, 400);
// 			}
// 		});
// 	})
// });
// // ==================================================================
// // Accordion Grid
// $('.js-accordion-grid').each(function(){
// 	var $grid = $(this);
// 	function closeContent($blur){
// 		$grid.find('.js-accordion-grid--content').slideUp(function(){
// 			if ($blur) {$blur.blur()}
// 			$grid.find('.js-active').removeClass('js-active');
// 			$(this).remove();
// 		});
// 	}
// 	$('body').on('click', '.js-accordion-grid--item', function(e){
// 		e.preventDefault();
// 		$grid.css({
// 			height: 'auto'
// 		});
// 		var $this = $(this);
// 		var target = lastInRow(this);
// 		var $target = $(target);
// 		var ajaxURL = $this.attr('href');
// 		if (!$this.hasClass('js-active')) {
// 			var $template;
// 			$.ajax({
// 			  	dataType: "html",
// 			  	url: ajaxURL,
// 			  	success: function(response){
// 			  		var $template = $(response);
// 					$grid.find('.js-active').removeClass('js-active');
// 					$this.addClass('js-active');
// 					$grid.find('.js-accordion-grid--content').slideUp(function(){
// 						$(this).remove();
// 					});
// 					$target.after($template);
// 					$grid.find('.js-accordion-grid--content').slideDown();
// 			  	}
// 			});
// 		} else {
// 			closeContent($this);
// 		}
// 	});
// 	$('body').on('click', '.js-accordion-grid-close', function(){
// 		closeContent();
// 	});
// 	$(window).on('resize', function(){
// 		closeContent();
// 	})
// });

/***/ }),

/***/ "./themes/quicksilver/js/components/breakpoints.js":
/*!*********************************************************!*\
  !*** ./themes/quicksilver/js/components/breakpoints.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var attach = __webpack_require__(/*! ../functions/attach */ "./themes/quicksilver/js/functions/attach.js");

var Breakpoint =
/*#__PURE__*/
function () {
  function Breakpoint(el) {
    var _this = this;

    _classCallCheck(this, Breakpoint);

    this.container = el;
    this.children = this.container.querySelectorAll('[data-breakpoint-watch]');
    this.breakpoint = 0;
    setTimeout(function () {
      return _this.init();
    }, 100);
  }

  _createClass(Breakpoint, [{
    key: "toggleClass",
    value: function toggleClass() {
      window.innerWidth >= this.breakpoint ? this.container.classList.remove('js-breakpoint') : this.container.classList.add('js-breakpoint');
    }
  }, {
    key: "init",
    value: function init() {
      var _this2 = this;

      // Create the breakpoint
      this.children.forEach(function (child) {
        return _this2.breakpoint += child.clientWidth;
      }); // Init functions

      attach('resize', function () {
        return _this2.toggleClass();
      }, 500);
    }
  }]);

  return Breakpoint;
}();

/* harmony default export */ __webpack_exports__["default"] = (Breakpoint); // ======================================================
// JavaScript Usage
// ======================================================
// import Breakpoint from './breakpoints';
// document.querySelectorAll('[data-breakpoint]').forEach((group) => new Breakpoint(group));
// ======================================================
// HTML Usage
// ======================================================
// <section data-breakpoint>
//   <div data-breakpoint-watch></div>
//   <div data-breakpoint-watch></div>
// </section>

/***/ }),

/***/ "./themes/quicksilver/js/components/equalizer.js":
/*!*******************************************************!*\
  !*** ./themes/quicksilver/js/components/equalizer.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var attach = __webpack_require__(/*! ../functions/attach */ "./themes/quicksilver/js/functions/attach.js");

var Equalizer =
/*#__PURE__*/
function () {
  function Equalizer(el) {
    var _this = this;

    _classCallCheck(this, Equalizer);

    this.container = el;
    this.children = this.getChildren();
    setTimeout(function () {
      return _this.init();
    }, 100);
  }

  _createClass(Equalizer, [{
    key: "getChildren",
    value: function getChildren() {
      var _this2 = this;

      var childArray = [];

      try {
        var targetArray = this.container.dataset.equalize.split(',');
        targetArray.forEach(function (id) {
          return childArray.push(_this2.container.querySelectorAll("[data-equalize-watch=\"".concat(id, "\"]")));
        });
      } catch (_unused) {
        childArray.push(this.container.querySelectorAll("[data-equalize-watch]"));
      }

      return childArray;
    }
  }, {
    key: "matchHeight",
    value: function matchHeight() {
      var _this3 = this;

      // set height to auto so it can be adjusted
      this.children.forEach(function (group) {
        Array.from(group).forEach(function (child) {
          child.style.height = 'auto';
        });
      }); // now match all their heights

      this.children.forEach(function (group) {
        _this3.height = 0;
        Array.from(group).forEach(function (child) {
          if (child.clientHeight > _this3.height) _this3.height = child.clientHeight;
        });
        Array.from(group).forEach(function (child) {
          return child.style.height = _this3.height + 'px';
        });
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this4 = this;

      attach('resize', function () {
        return _this4.matchHeight();
      }, 500);
    }
  }]);

  return Equalizer;
}();

/* harmony default export */ __webpack_exports__["default"] = (Equalizer); // ======================================================
// JavaScript Usage
// ======================================================
// import Equalizer from './equalizer';
// document.querySelectorAll('[data-equalize]').forEach((group) => new Equalizer(group));
// ======================================================
// HTML Usage
// ======================================================
// <section data-equalize>
//   <div data-equalize-watch></div>
//   <div data-equalize-watch></div>
// </section>
// OR ===================================================
// <section data-equalize="selector">
//   <div data-equalize-watch="selector"></div>
//   <div data-equalize-watch="selector"></div>
// </section>
// OR ===================================================
// <section data-equalize="selector1, selector2">
//   <div data-equalize-watch="selector1">
//      <div data-equalize-watch="selector2"></div>
//   </div>
//   <div data-equalize-watch="selector1">
//      <div data-equalize-watch="selector2"></div>
//   </div>
// </section>

/***/ }),

/***/ "./themes/quicksilver/js/components/forms.js":
/*!***************************************************!*\
  !*** ./themes/quicksilver/js/components/forms.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_selectAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/selectAll */ "./themes/quicksilver/js/functions/selectAll.js");
/* harmony import */ var _functions_selectAll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_selectAll__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _functions_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/serialize */ "./themes/quicksilver/js/functions/serialize.js");
/* harmony import */ var _functions_serialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_serialize__WEBPACK_IMPORTED_MODULE_1__);

 // import sendForm from '../functions/sendForm';

var submitForm = function submitForm(options) {
  var httpRequest = new XMLHttpRequest();
  var settings = Object.assign({
    url: '/',
    data: '',
    load: function load(response) {
      if (settings.success !== undefined && typeof settings.success === 'function') {
        if (response.explicitOriginalTarget !== undefined) {
          settings.success(response.explicitOriginalTarget);
        } else if (response.currentTarget) {
          settings.success(response.currentTarget);
        }
      }

      ;
    },
    error: function error(response) {
      return console.warn(response);
    }
  }, options);
  httpRequest.addEventListener("load", settings.load);
  httpRequest.addEventListener("error", settings.error);
  httpRequest.open('POST', settings.url);
  httpRequest.setRequestHeader('x-requested-with', "XMLHttpRequest");
  httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  httpRequest.send(settings.data);
};

var validEmail = function validEmail(email) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(email);
};

var formMessage = function formMessage(message) {
  var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'p';
  var el = document.createElement(element);
  var content = document.createTextNode(message);
  el.appendChild(content);
  el.classList.add('formMessage');
  return el;
};

_functions_selectAll__WEBPACK_IMPORTED_MODULE_0___default()('form.form').forEach(function (form) {
  var inputs = Array.from(form.querySelectorAll('input:not([type="submit"]), textarea'));
  var requiredInputs = Array.from(form.querySelectorAll('input:required, textarea:required'));
  var untilValid = requiredInputs.length;
  var validation = 0;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    validation = 0;
    Array.from(form.querySelectorAll('.formMessage')).forEach(function (error) {
      return error.remove();
    });
    requiredInputs.forEach(function (input) {
      input.classList.add('error');

      if (input.type === 'email' && input.value === '') {
        input.parentElement.insertBefore(formMessage('Email address is required'), input);
      } else if (input.type === 'email' & !validEmail(input.value)) {
        input.parentElement.insertBefore(formMessage('Email address is not valid'), input);
      } else if (input.value === '') {
        input.parentElement.insertBefore(formMessage('This field is required'), input);
      } else {
        input.classList.remove('error');
        validation += 1;
      }
    });

    if (validation === untilValid) {
      sendForm({
        url: form.action,
        data: _functions_serialize__WEBPACK_IMPORTED_MODULE_1___default()(form),
        success: function success(e) {
          var response = JSON.parse(e.responseText);
          form.parentElement.insertBefore(formMessage(response.message, 'h5'), form);
          inputs.forEach(function (input) {
            return input.value = '';
          }); // success(response.message);
        }
      });
    }
  });
});

/***/ }),

/***/ "./themes/quicksilver/js/components/modals.js":
/*!****************************************************!*\
  !*** ./themes/quicksilver/js/components/modals.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var selectAll = __webpack_require__(/*! ../functions/selectAll */ "./themes/quicksilver/js/functions/selectAll.js");

var lockScroll = __webpack_require__(/*! ../functions/lockScroll */ "./themes/quicksilver/js/functions/lockScroll.js"); // let canBlur = true;
// if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent) || /MSIE 10/i.test(navigator.userAgent)) {
//     canBlur = false;
// }
// const blurElements = (toggle = true) => {
// 	if (canBlur) {
// 		selectAll('[data-blur]').forEach((el) => {
// 			if (toggle) {
// 				el.classList.add('js-active');
// 			}else {
// 				el.classList.remove('js-active');
// 			}
// 		})
// 	}
// }


selectAll('[data-modal]').forEach(function (modal) {
  var ID = modal.getAttribute('data-modal');
  var toggles = selectAll("[data-modal-toggle=\"".concat(ID, "\"]"));
  var closeLinks = selectAll("[data-modal-close=\"".concat(ID, "\"]"));
  var scrollLocked = false;
  modal.style.msTransition = 'opacity .25s ease-out';
  modal.style.webkitTransition = 'opacity .25s ease-out';
  modal.style.MozTransition = 'opacity .25s ease-out';
  modal.style.OTransition = 'opacity .25s ease-out';
  modal.style.transform = 'opacity .25s ease-out';
  modal.style.display = 'none';
  modal.style.opacity = 0;

  var openModal = function openModal() {
    lockScroll(true);
    scrollLocked = true;
    modal.classList.add('js-active');
    modal.style.display = 'block';
    setTimeout(function () {
      // blurElements(true);
      modal.style.opacity = 1;
    }, 5);
  };

  var closeModal = function closeModal() {
    lockScroll(false);
    scrollLocked = false;
    modal.classList.remove('js-active');
    modal.style.opacity = 0; // blurElements(false);

    setTimeout(function () {
      modal.style.display = 'none';
    }, 250);
  };

  closeLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (scrollLocked) {
        closeModal();
      }
    });
  });
  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      modal.classList.contains('js-active') ? closeModal() : openModal();
    });
  });
});

/***/ }),

/***/ "./themes/quicksilver/js/components/parallax.js":
/*!******************************************************!*\
  !*** ./themes/quicksilver/js/components/parallax.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var attach = __webpack_require__(/*! ../functions/attach */ "./themes/quicksilver/js/functions/attach.js");

var offsetY = __webpack_require__(/*! ../functions/offsetY */ "./themes/quicksilver/js/functions/offsetY.js");

var Parallax =
/*#__PURE__*/
function () {
  function Parallax(el) {
    var _this = this;

    var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;

    _classCallCheck(this, Parallax);

    this.container = el;
    this.children = Array.from(this.container.querySelectorAll('[data-parallax-watch]'));
    this.scale = scale / 100;
    setTimeout(function () {
      return _this.init();
    }, 100);
  }

  _createClass(Parallax, [{
    key: "updateCoordinates",
    value: function updateCoordinates() {
      this.lastWindowHeight = window.innerHeight;
      this.offset = offsetY(this.container);
      this.height = this.container.clientHeight;
    }
  }, {
    key: "inView",
    value: function inView() {
      return window.pageYOffset + this.lastWindowHeight >= this.offset && window.pageYOffset <= this.offset + this.height;
    }
  }, {
    key: "yPercent",
    value: function yPercent() {
      return (this.offset - window.pageYOffset) / this.lastWindowHeight * 100;
    }
  }, {
    key: "transform",
    value: function transform(child) {
      var percent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.yPercent() - 33.333;
      child.style.msTransform = "translateY(".concat(percent * -this.scale, "%)");
      child.style.webkitTransform = "translateY(".concat(percent * -this.scale, "%)");
      child.style.MozTransform = "translateY(".concat(percent * -this.scale, "%)");
      child.style.OTransform = "translateY(".concat(percent * -this.scale, "%)");
      child.style.msTransform = "translateY(".concat(percent * -this.scale, "%)");
    }
  }, {
    key: "parallax",
    value: function parallax() {
      var _this2 = this;

      if (this.inView()) this.children.forEach(function (child) {
        return _this2.transform(child);
      });
    }
  }, {
    key: "init",
    value: function init() {
      var _this3 = this;

      attach('resize', function () {
        return _this3.updateCoordinates();
      }, 500);
      attach('scroll', function () {
        return _this3.parallax();
      }, 50);
      setTimeout(function () {
        _this3.children.forEach(function (child) {
          child.style.msTransition = '-ms-transform .25s ease-out'; //IE

          child.style.webkitTransition = '-webkit-transform .25s ease-out'; //Chrome and Safari

          child.style.MozTransition = '-moz-transform .25s ease-out'; //Firefox

          child.style.OTransition = '-o-transform .25s ease-out'; //Opera

          child.style.transform = 'transform .25s ease-out'; //Someday this may get adopted and become a standard, so I put it in here.

          _this3.inView() ? _this3.transform(child) : _this3.transform(child, 66.666);
        });
      });
    }
  }]);

  return Parallax;
}();

/* harmony default export */ __webpack_exports__["default"] = (Parallax); // ======================================================
// JavaScript Usage
// ======================================================
// import Parallax from './parallax';
// document.querySelectorAll('[data-parallax]').forEach((group) => new Parallax(group));
// ======================================================
// HTML Usage
// ======================================================
// <section data-parallax>
//   <div data-parallax-watch></div>
// </section>

/***/ }),

/***/ "./themes/quicksilver/js/components/sliders.js":
/*!*****************************************************!*\
  !*** ./themes/quicksilver/js/components/sliders.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_slider_src_tiny_slider_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-slider/src/tiny-slider.module.js */ "./node_modules/tiny-slider/src/tiny-slider.module.js");
/* harmony import */ var _functions_elFromStr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/elFromStr */ "./themes/quicksilver/js/functions/elFromStr.js");
/* harmony import */ var _functions_elFromStr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_elFromStr__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

 // https://github.com/ganlanyuan/tiny-slider



var Slider =
/*#__PURE__*/
function () {
  function Slider(el, options) {
    _classCallCheck(this, Slider);

    this.settings = Object.assign({
      container: el,
      controls: true,
      mouseDrag: true,
      touch: true,
      navPosition: 'bottom',
      prevButton: '<button class="slider-button slider-button--left"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M3.386 5.547l3.97-3.876a.964.964 0 0 0 0-1.38L7.348.285a1 1 0 0 0-1.397 0L.29 5.81a.961.961 0 0 0 0 1.38l5.66 5.526a1 1 0 0 0 1.397 0l.008-.008a.964.964 0 0 0 0-1.38l-3.924-3.83h35.592a.976.976 0 0 0 0-1.951H3.386z" fill="#000" fill-rule="evenodd"/></svg></button>',
      nextButton: '<button class="slider-button slider-button--right"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M36.614 5.547l-3.97-3.876a.964.964 0 0 1 0-1.38l.008-.007a1 1 0 0 1 1.397 0l5.66 5.526a.961.961 0 0 1 0 1.38l-5.66 5.526a1 1 0 0 1-1.397 0l-.008-.008a.964.964 0 0 1 0-1.38l3.924-3.83H.976a.976.976 0 0 1 0-1.951h35.638z" fill="#000" fill-rule="evenodd"/></svg></button>',
      responsive: this.sliderBreakpoints(el)
    }, options);

    if (this.settings.controls) {
      if (this.settings.prevButton || this.settings.nextButton) this.settings = this.createButtons(this.settings);
    } else {
      this.settings.prevButton = false;
      this.settings.nextButton = false;
    }

    this.tns = Object(tiny_slider_src_tiny_slider_module_js__WEBPACK_IMPORTED_MODULE_0__["tns"])(this.settings);
  }

  _createClass(Slider, [{
    key: "sliderBreakpoints",
    value: function sliderBreakpoints() {
      var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (el) {
        var breakpoints = {
          init: 0,
          xxs: 480,
          xs: 540,
          sm: 640,
          md: 768,
          xmd: 968,
          lg: 1024,
          xl: 1280,
          xxl: 1440
        };
        var responsiveBreakpoints = {};
        var classBreakpoints = el.className.split(' ');
        classBreakpoints.forEach(function (value) {
          if (value.indexOf("-up-") > -1) {
            var breakpoint = value.split('-')[0];
            var slides = parseInt(value.split('-').pop().trim());
            responsiveBreakpoints[breakpoints[breakpoint]] = {
              items: slides
            };
          }
        });

        if (Object.entries(responsiveBreakpoints).length === 0) {
          return null;
        } else {
          return responsiveBreakpoints;
        }
      }
    }
  }, {
    key: "createButtons",
    value: function createButtons(settings) {
      if (settings.prevButton) {
        settings.prevButton = _functions_elFromStr__WEBPACK_IMPORTED_MODULE_1___default()(settings.prevButton).firstChild;
        settings.container.parentNode.insertBefore(settings.prevButton, settings.container);
      }

      if (settings.nextButton) {
        settings.nextButton = _functions_elFromStr__WEBPACK_IMPORTED_MODULE_1___default()(settings.nextButton).firstChild;
        settings.container.parentNode.insertBefore(settings.nextButton, settings.container);
      }

      return settings;
    }
  }]);

  return Slider;
}();

/* harmony default export */ __webpack_exports__["default"] = (Slider); // const sliderBreakpoints = (el = false) => {
// 	if (el) {
// 		const breakpoints = {init: 0,xxs: 480,xs: 540,sm: 640,md: 768,xmd: 968,lg: 1024,xl: 1280,xxl: 1440};
// 		const responsiveBreakpoints = {};
// 		let classBreakpoints = el.className.split(' ');
// 		let slidesToScroll;
// 		classBreakpoints.forEach(function (value) {
// 			if(value.indexOf(`-up-`) > -1){
// 				let breakpoint = value.split('-')[0];
// 				let slides = parseInt(value.split('-').pop().trim());
// 				responsiveBreakpoints[breakpoints[breakpoint]] = {
// 					items: slides,
// 				}
// 			}
// 		});
// 		return responsiveBreakpoints;
// 	}
// }
// const createButtons = (settings) => {
// 	if (settings.prevButton) {
// 		settings.prevButton = elFromStr(settings.prevButton).firstChild;
// 		settings.container.parentNode.insertBefore(settings.prevButton, settings.container);
// 	}
// 	if (settings.nextButton) {
// 		settings.nextButton = elFromStr(settings.nextButton).firstChild;
// 		settings.container.parentNode.insertBefore(settings.nextButton, settings.container);
// 	}
// 	return settings;
// }
// function Slider(el, options = {}) {
//   	const defaults = {
// 		container: el,
// 		mouseDrag: true,
// 		touch: true,
// 		navPosition: 'bottom',
// 		prevButton:'<button class="slider-button slider-button--left"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M3.386 5.547l3.97-3.876a.964.964 0 0 0 0-1.38L7.348.285a1 1 0 0 0-1.397 0L.29 5.81a.961.961 0 0 0 0 1.38l5.66 5.526a1 1 0 0 0 1.397 0l.008-.008a.964.964 0 0 0 0-1.38l-3.924-3.83h35.592a.976.976 0 0 0 0-1.951H3.386z" fill="#000" fill-rule="evenodd"/></svg></button>',
// 		nextButton:'<button class="slider-button slider-button--right"><svg width="40" height="13" viewBox="0 0 40 13" xmlns="http://www.w3.org/2000/svg"><path d="M36.614 5.547l-3.97-3.876a.964.964 0 0 1 0-1.38l.008-.007a1 1 0 0 1 1.397 0l5.66 5.526a.961.961 0 0 1 0 1.38l-5.66 5.526a1 1 0 0 1-1.397 0l-.008-.008a.964.964 0 0 1 0-1.38l3.924-3.83H.976a.976.976 0 0 1 0-1.951h35.638z" fill="#000" fill-rule="evenodd"/></svg></button>',
// 		responsive: sliderBreakpoints(el),
// 	};
// 	let settings = Object.assign(defaults, options);
// 	if (settings.prevButton || settings.nextButton) settings = createButtons(settings);
// 	tns(settings);
// }
// module.exports = Slider;

/***/ }),

/***/ "./themes/quicksilver/js/components/tabs.js":
/*!**************************************************!*\
  !*** ./themes/quicksilver/js/components/tabs.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_toggleHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/toggleHeight */ "./themes/quicksilver/js/functions/toggleHeight.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const toggleHeight = require('../functions/toggleHeight');


var Tabs =
/*#__PURE__*/
function () {
  function Tabs(el) {
    var _this = this;

    _classCallCheck(this, Tabs);

    this.container = el;
    this.links = Array.from(this.container.querySelectorAll('.js-tabs--link'));
    this.items = Array.from(this.container.querySelectorAll('.js-tabs--item'));
    this.toggleHeight = new _functions_toggleHeight__WEBPACK_IMPORTED_MODULE_0__["default"](this.container);
    setTimeout(function () {
      return _this.init();
    }, 100);
  }

  _createClass(Tabs, [{
    key: "clickHandler",
    value: function clickHandler() {
      var _this2 = this;

      this.links.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // If this is not the current tab, change the tab.

          if (!link.className.match(/\bjs-active\b/)) _this2.changeTab(_this2.links.indexOf(link));
        });
      });
    }
  }, {
    key: "changeTab",
    value: function changeTab(index) {
      var _this3 = this;

      this.links.forEach(function (link) {
        // Toggle active state on tab link
        link === _this3.links[index] ? link.classList.add('js-active') : link.classList.remove('js-active');
      });
      this.items.forEach(function (item) {
        // Toggle active state on tab item
        item === _this3.items[index] ? item.classList.add('js-active') : item.classList.remove('js-active');
      });
      this.toggleHeight.animate();
    }
  }, {
    key: "init",
    value: function init() {
      this.clickHandler();
    }
  }]);

  return Tabs;
}();

/* harmony default export */ __webpack_exports__["default"] = (Tabs); // ======================================================
// JavaScript Usage
// ======================================================
// import Tabs from './tabs';
// document.querySelectorAll('.js-tabs').forEach((group) => new Tabs(group));
// ======================================================
// HTML Usage
// ======================================================
// <section class="js-tabs">
//   <a href="#" class="js-tabs--link"></a>
//   <div class="js-tabs--item"></div>
// </section>

/***/ }),

/***/ "./themes/quicksilver/js/components/videoEmbed.js":
/*!********************************************************!*\
  !*** ./themes/quicksilver/js/components/videoEmbed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VideoEmbed =
/*#__PURE__*/
function () {
  function VideoEmbed(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, VideoEmbed);

    this.video = this.parseURL(url);
    this.options = Object.assign({}, {
      attributes: ["frameborder=\"0\"", "allow=\"autoplay; encrypted-media\"", "allowfullscreen", "mozallowfullscreen", "webkitallowfullscreen"],
      modestbranding: 1,
      autoplay: 1,
      rel: 0
    }, options);
  }

  _createClass(VideoEmbed, [{
    key: "parseURL",
    value: function parseURL(url) {
      url.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);
      return {
        type: RegExp.$3.indexOf('youtu') > -1 ? 'youtube' : 'vimeo',
        id: RegExp.$6
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var src = this.video.type === 'youtube' ? "https://www.youtube.com/embed/".concat(this.video.id, "?") : "https://player.vimeo.com/video/".concat(this.video.id, "?");
      Object.keys(this.options).forEach(function (item) {
        if (_typeof(_this.options[item]) !== 'object') src += "".concat(item, "=").concat(_this.options[item], "&");
      });
      return "<iframe class=\"js-".concat(this.video.type, "-embed\" src = \"").concat(src, "\" ").concat(this.options.attributes.join(' '), "> ");
    }
  }]);

  return VideoEmbed;
}();

/* harmony default export */ __webpack_exports__["default"] = (VideoEmbed); // let videoEmbed = new Embed('https://www.youtube.com/watch?v=dbB-mICjkQM', { autoplay: 0 });
// $body.append(videoEmbed.render());

/***/ }),

/***/ "./themes/quicksilver/js/functions/attach.js":
/*!***************************************************!*\
  !*** ./themes/quicksilver/js/functions/attach.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function attach(event, func) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var throttle = false; // not throttled

  var debounce = false; // holder debounce

  func(); // initialise function before adding event handlers

  var attachment = function attachment() {
    if (delay) {
      // throttle
      if (!throttle) {
        throttle = true;
        func();
        setTimeout(function () {
          return throttle = 0;
        }, delay);
      } // debounce


      clearTimeout(debounce);
      debounce = setTimeout(function () {
        func();
      }, delay);
    } else {
      func();
    }
  };

  event.split(' ').forEach(function (type) {
    window.addEventListener(type, function () {
      return attachment();
    });
  });
}

module.exports = attach;

/***/ }),

/***/ "./themes/quicksilver/js/functions/containsClass.js":
/*!**********************************************************!*\
  !*** ./themes/quicksilver/js/functions/containsClass.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function containsClass(el, className) {
  return (' ' + el.className + ' ').indexOf(' ' + className + ' ') > -1;
}

module.exports = containsClass;

/***/ }),

/***/ "./themes/quicksilver/js/functions/elFromStr.js":
/*!******************************************************!*\
  !*** ./themes/quicksilver/js/functions/elFromStr.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function elFromStr(str) {
  var parser = new DOMParser();
  var doc = parser.parseFromString(str, 'text/html');
  return doc.body;
}

module.exports = elFromStr;

/***/ }),

/***/ "./themes/quicksilver/js/functions/lastInRow.js":
/*!******************************************************!*\
  !*** ./themes/quicksilver/js/functions/lastInRow.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var offsetY = __webpack_require__(/*! ./offsetY */ "./themes/quicksilver/js/functions/offsetY.js");

function lastInRow() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (el) {
    var rowOffset = offsetY(el);
    var siblings = Array.from(el.parentNode.children);
    var last = null;
    siblings = siblings.slice(siblings.indexOf(el));
    siblings.forEach(function (sibling) {
      if (offsetY(sibling) > rowOffset) {
        return false;
      } else {
        last = sibling;
      }
    });
    return last;
  }
}

module.exports = lastInRow;

/***/ }),

/***/ "./themes/quicksilver/js/functions/loadContent.js":
/*!********************************************************!*\
  !*** ./themes/quicksilver/js/functions/loadContent.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function loadContent(options) {
  var httpRequest = new XMLHttpRequest();
  var settings = Object.assign({
    url: '/',
    method: 'GET',
    data: '',
    load: function load(response) {
      if (settings.success !== undefined && typeof settings.success === 'function') settings.success(response.explicitOriginalTarget.response);
    },
    error: function error(response) {
      console.warn(response);
    }
  }, options);
  httpRequest.addEventListener("load", settings.load);
  httpRequest.addEventListener("error", settings.error);
  httpRequest.open(settings.method, settings.url);
  httpRequest.send(data);
}

module.exports = loadContent;

/***/ }),

/***/ "./themes/quicksilver/js/functions/lockScroll.js":
/*!*******************************************************!*\
  !*** ./themes/quicksilver/js/functions/lockScroll.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var bodyWrap = document.querySelector('.body');
var scrollPos = 0;

function lockScroll() {
  var toggle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

  if (toggle) {
    scrollPos = window.pageYOffset;
    bodyWrap.classList.add('scroll-locked');
    bodyWrap.style.height = window.innerHeight + 'px';
    bodyWrap.style.overflow = 'hidden';
    bodyWrap.scrollTop = scrollPos;
  } else {
    bodyWrap.classList.remove('scroll-locked');
    bodyWrap.style.height = 'auto';
    bodyWrap.style.overflow = 'visible';
    window.scrollTo(0, scrollPos);
  }
}

module.exports = lockScroll;

/***/ }),

/***/ "./themes/quicksilver/js/functions/offsetY.js":
/*!****************************************************!*\
  !*** ./themes/quicksilver/js/functions/offsetY.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function offsetY(el) {
  var offset = 0;

  while (el) {
    offset += el.offsetTop;
    el = el.offsetParent;
  }

  return offset;
}

module.exports = offsetY;

/***/ }),

/***/ "./themes/quicksilver/js/functions/selectAll.js":
/*!******************************************************!*\
  !*** ./themes/quicksilver/js/functions/selectAll.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function selectAll(selector) {
  return Array.from(document.querySelectorAll(selector));
}

module.exports = selectAll;

/***/ }),

/***/ "./themes/quicksilver/js/functions/serialize.js":
/*!******************************************************!*\
  !*** ./themes/quicksilver/js/functions/serialize.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Serialize all form data into a query string
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   form The form to serialize
 * @return {String}      The serialized form data
 */
var serialize = function serialize(form) {
  // Setup our serialized data
  var serialized = []; // Loop through each field in the form

  for (var i = 0; i < form.elements.length; i++) {
    var field = form.elements[i]; // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields

    if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue; // If a multi-select, get all selections

    if (field.type === 'select-multiple') {
      for (var n = 0; n < field.options.length; n++) {
        if (!field.options[n].selected) continue;
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
      }
    } // Convert field data to a query string
    else if (field.type !== 'checkbox' && field.type !== 'radio' || field.checked) {
        serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
      }
  }

  return serialized.join('&');
};

module.exports = serialize;

/***/ }),

/***/ "./themes/quicksilver/js/functions/toggleHeight.js":
/*!*********************************************************!*\
  !*** ./themes/quicksilver/js/functions/toggleHeight.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var attach = __webpack_require__(/*! ./attach */ "./themes/quicksilver/js/functions/attach.js");

var toggleHeight =
/*#__PURE__*/
function () {
  function toggleHeight(el) {
    var _this = this;

    var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

    _classCallCheck(this, toggleHeight);

    this.el = el;
    this.duration = duration;
    this.currentHeight = this.el.clientHeight;
    this.reinit = null; // Initialise

    this.el.style.msTransition = "height ".concat(this.duration, "ms ease-out");
    this.el.style.webkitTransition = "height ".concat(this.duration, "ms ease-out");
    this.el.style.MozTransition = "height ".concat(this.duration, "ms ease-out");
    this.el.style.OTransition = "height ".concat(this.duration, "ms ease-out");
    this.el.style.transform = "height ".concat(this.duration, "ms ease-out");
    this.el.style.overflow = 'hidden';
    this.update();
    attach('resize', function () {
      if (_this.el.style.height !== 'auto') _this.el.style.height = 'auto';
      clearTimeout(_this.reinit);
      _this.reinit = setTimeout(function () {
        _this.el.style.height = _this.el.clientHeight + 'px';
      }, 500);
    }, 250);
  }

  _createClass(toggleHeight, [{
    key: "update",
    value: function update() {
      this.currentHeight = this.el.clientHeight;
    }
  }, {
    key: "animate",
    value: function animate() {
      var _this2 = this;

      var to = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';
      this.update();

      if (to === 'auto') {
        this.el.style.height = 'auto';
        this.newHeight = this.el.clientHeight;
        this.el.style.height = this.currentHeight + 'px';
        setTimeout(function () {
          _this2.el.style.height = _this2.newHeight + 'px';
        }, 50);
      } else {
        this.el.style.height = to + 'px';
      }
    }
  }]);

  return toggleHeight;
}();

/* harmony default export */ __webpack_exports__["default"] = (toggleHeight);

/***/ }),

/***/ "./themes/quicksilver/scss/style.scss":
/*!********************************************!*\
  !*** ./themes/quicksilver/scss/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map