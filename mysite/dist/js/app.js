(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _classie = require('classie');

var _classie2 = _interopRequireDefault(_classie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Variables -------------------------------------------------------*/

var body = document.getElementsByTagName("body")[0];

//import './contactForm';
/*------------------------------------------------------------------
 Mobile Navigation
 ------------------------------------------------------------------*/

//$body.on('click', '.js-mobile-nav', (e) => {
//    e.preventDefault();
//    $body.toggleClass('off-canvas-visible')
//});
//
//$body.on('click', '.js-toggle-nav', (e) => {
//    e.preventDefault();
//    $(this).closest('.offCanvas__menu__item').toggleClass('open');
//});

//document.querySelector('.js-mobile-nav').onclick = () => {
//    classie.toggleClass(body, 'off-canvas-visible')
//};

/* Imports ---------------------------------------------------------*/

document.querySelector('.js-mobile-nav').addEventListener('click', function (e) {
  e.preventDefault();
  _classie2.default.toggleClass(body, 'off-canvas-visible');
});

},{"classie":2}],2:[function(require,module,exports){
/*
 * classie
 * http://github.amexpub.com/modules/classie
 *
 * Copyright (c) 2013 AmexPub. All rights reserved.
 */

module.exports = require('./lib/classie');

},{"./lib/classie":4}],3:[function(require,module,exports){
/* 
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException, DOMTokenList */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if ("document" in self) {

    // Full polyfill for browsers with no classList support
    if (!("classList" in document.createElement("_")) || document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg", "g"))) {

        (function(view) {

            "use strict";

            if (!('Element' in view)) {
                return;
            }

            var classListProp = "classList",
                protoProp = "prototype",
                elemCtrProto = view.Element[protoProp],
                objCtr = Object,
                strTrim = String[protoProp].trim || function() {
                    return this.replace(/^\s+|\s+$/g, "");
                }, arrIndexOf = Array[protoProp].indexOf || function(item) {
                    var
                    i = 0,
                        len = this.length;
                    for (; i < len; i++) {
                        if (i in this && this[i] === item) {
                            return i;
                        }
                    }
                    return -1;
                },
                // Vendors: please allow content code to instantiate DOMExceptions
                DOMEx = function(type, message) {
                    this.name = type;
                    this.code = DOMException[type];
                    this.message = message;
                }, checkTokenAndGetIndex = function(classList, token) {
                    if (token === "") {
                        throw new DOMEx(
                            "SYNTAX_ERR", "An invalid or illegal string was specified");
                    }
                    if (/\s/.test(token)) {
                        throw new DOMEx(
                            "INVALID_CHARACTER_ERR", "String contains an invalid character");
                    }
                    return arrIndexOf.call(classList, token);
                }, ClassList = function(elem) {
                    var
                    trimmedClasses = strTrim.call(elem.getAttribute("class") || ""),
                        classes = trimmedClasses ? trimmedClasses.split(/\s+/) : [],
                        i = 0,
                        len = classes.length;
                    for (; i < len; i++) {
                        this.push(classes[i]);
                    }
                    this._updateClassName = function() {
                        elem.setAttribute("class", this.toString());
                    };
                }, classListProto = ClassList[protoProp] = [],
                classListGetter = function() {
                    return new ClassList(this);
                };
            // Most DOMException implementations don't allow calling DOMException's toString()
            // on non-DOMExceptions. Error's toString() is sufficient here.
            DOMEx[protoProp] = Error[protoProp];
            classListProto.item = function(i) {
                return this[i] || null;
            };
            classListProto.contains = function(token) {
                token += "";
                return checkTokenAndGetIndex(this, token) !== -1;
            };
            classListProto.add = function() {
                var
                tokens = arguments,
                    i = 0,
                    l = tokens.length,
                    token, updated = false;
                do {
                    token = tokens[i] + "";
                    if (checkTokenAndGetIndex(this, token) === -1) {
                        this.push(token);
                        updated = true;
                    }
                }
                while (++i < l);

                if (updated) {
                    this._updateClassName();
                }
            };
            classListProto.remove = function() {
                var
                tokens = arguments,
                    i = 0,
                    l = tokens.length,
                    token, updated = false,
                    index;
                do {
                    token = tokens[i] + "";
                    index = checkTokenAndGetIndex(this, token);
                    while (index !== -1) {
                        this.splice(index, 1);
                        updated = true;
                        index = checkTokenAndGetIndex(this, token);
                    }
                }
                while (++i < l);

                if (updated) {
                    this._updateClassName();
                }
            };
            classListProto.toggle = function(token, force) {
                token += "";

                var
                result = this.contains(token),
                    method = result ?
                        force !== true && "remove" :
                        force !== false && "add";

                if (method) {
                    this[method](token);
                }

                if (force === true || force === false) {
                    return force;
                } else {
                    return !result;
                }
            };
            classListProto.toString = function() {
                return this.join(" ");
            };

            if (objCtr.defineProperty) {
                var classListPropDesc = {
                    get: classListGetter,
                    enumerable: true,
                    configurable: true
                };
                try {
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                } catch (ex) { // IE 8 doesn't support enumerable:true
                    if (ex.number === -0x7FF5EC54) {
                        classListPropDesc.enumerable = false;
                        objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                    }
                }
            } else if (objCtr[protoProp].__defineGetter__) {
                elemCtrProto.__defineGetter__(classListProp, classListGetter);
            }

        }(self));

    } else {
        // There is full or partial native classList support, so just check if we need
        // to normalize the add/remove and toggle APIs.

        (function() {
            "use strict";

            var testElement = document.createElement("_");

            testElement.classList.add("c1", "c2");

            // Polyfill for IE 10/11 and Firefox <26, where classList.add and
            // classList.remove exist but support only one argument at a time.
            if (!testElement.classList.contains("c2")) {
                var createMethod = function(method) {
                    var original = DOMTokenList.prototype[method];

                    DOMTokenList.prototype[method] = function(token) {
                        var i, len = arguments.length;

                        for (i = 0; i < len; i++) {
                            token = arguments[i];
                            original.call(this, token);
                        }
                    };
                };
                createMethod('add');
                createMethod('remove');
            }

            testElement.classList.toggle("c3", false);

            // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
            // support the second argument.
            if (testElement.classList.contains("c3")) {
                var _toggle = DOMTokenList.prototype.toggle;

                DOMTokenList.prototype.toggle = function(token, force) {
                    if (1 in arguments && !this.contains(token) === !force) {
                        return force;
                    } else {
                        return _toggle.call(this, token);
                    }
                };

            }

            testElement = null;
        }());
    }

}

},{}],4:[function(require,module,exports){
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */
'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo
var classList = require('./class_list_ployfill'),
    classie;

function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

function noop() {}

function isArr(classes) {
    if (Array.isArray(classes)) {
        return true;
    } else if (Object.prototype.toString.call(classes) === '[object Array]') {
        return true;
    } else {
        return false;
    }
}

function removeMultiple() {
    var c = arguments[1],
        elem = arguments[0];
    c.forEach(function(value) {
        if (classie.has(elem, value)) {
            noop();
        }
        classie.removeClass(elem, value);
    });
}


function addMultiple() {
    var c = arguments[1],
        elem = arguments[0];
    c.forEach(function(value) {
        if (classie.has(elem, value)) {
            noop();
        }
        classie.addClass(elem, value);
    });
}

function hasClass(elem, c) {
    return elem.classList.contains(c);
}

function addClass(elem, c) {
    if (isArr(c)) {
        addMultiple.apply(this, arguments);
    } else {
        elem.classList.add(c);
    }
}

function removeClass(elem, c) {
    if (isArr(c)) {
        removeMultiple.apply(this, arguments);
    } else {
        elem.classList.remove(c);
    }
}

function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
}

var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
};

// transport

if (typeof module === "object" && module && typeof module.exports === "object") {
    // commonjs / browserify
    module.exports = classie;
} else {
    // AMD
    define(classie);
}

},{"./class_list_ployfill":3}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJteXNpdGUvYXBwL2pzL2NvbXBvbmVudHMvYXBwLmpzIiwibm9kZV9tb2R1bGVzL2NsYXNzaWUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvY2xhc3NpZS9saWIvY2xhc3NfbGlzdF9wbG95ZmlsbC5qcyIsIm5vZGVfbW9kdWxlcy9jbGFzc2llL2xpYi9jbGFzc2llLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNFQTs7Ozs7O0FBRUE7O0FBRUEsSUFBSSxPQUFPLFNBQVMsb0JBQVQsQ0FBOEIsTUFBOUIsRUFBc0MsQ0FBdEMsQ0FBWDs7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUF6QkE7O0FBMkJBLFNBQVMsYUFBVCxDQUF1QixnQkFBdkIsRUFBeUMsZ0JBQXpDLENBQTBELE9BQTFELEVBQW1FLFVBQUMsQ0FBRCxFQUFPO0FBQ3RFLElBQUUsY0FBRjtBQUNBLG9CQUFRLFdBQVIsQ0FBb0IsSUFBcEIsRUFBMEIsb0JBQTFCO0FBQ0gsQ0FIRDs7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogSW1wb3J0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQgY2xhc3NpZSBmcm9tICdjbGFzc2llJztcblxuLyogVmFyaWFibGVzIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5sZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiYm9keVwiKVswXTtcblxuLy9pbXBvcnQgJy4vY29udGFjdEZvcm0nO1xuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiBNb2JpbGUgTmF2aWdhdGlvblxuIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbi8vJGJvZHkub24oJ2NsaWNrJywgJy5qcy1tb2JpbGUtbmF2JywgKGUpID0+IHtcbi8vICAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgICRib2R5LnRvZ2dsZUNsYXNzKCdvZmYtY2FudmFzLXZpc2libGUnKVxuLy99KTtcbi8vXG4vLyRib2R5Lm9uKCdjbGljaycsICcuanMtdG9nZ2xlLW5hdicsIChlKSA9PiB7XG4vLyAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAkKHRoaXMpLmNsb3Nlc3QoJy5vZmZDYW52YXNfX21lbnVfX2l0ZW0nKS50b2dnbGVDbGFzcygnb3BlbicpO1xuLy99KTtcblxuLy9kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbW9iaWxlLW5hdicpLm9uY2xpY2sgPSAoKSA9PiB7XG4vLyAgICBjbGFzc2llLnRvZ2dsZUNsYXNzKGJvZHksICdvZmYtY2FudmFzLXZpc2libGUnKVxuLy99O1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtbW9iaWxlLW5hdicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2xhc3NpZS50b2dnbGVDbGFzcyhib2R5LCAnb2ZmLWNhbnZhcy12aXNpYmxlJyk7XG59KTtcblxuIiwiLypcbiAqIGNsYXNzaWVcbiAqIGh0dHA6Ly9naXRodWIuYW1leHB1Yi5jb20vbW9kdWxlcy9jbGFzc2llXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDEzIEFtZXhQdWIuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9jbGFzc2llJyk7XG4iLCIvKiBcbiAqIGNsYXNzTGlzdC5qczogQ3Jvc3MtYnJvd3NlciBmdWxsIGVsZW1lbnQuY2xhc3NMaXN0IGltcGxlbWVudGF0aW9uLlxuICogMjAxNC0wNy0yM1xuICpcbiAqIEJ5IEVsaSBHcmV5LCBodHRwOi8vZWxpZ3JleS5jb21cbiAqIFB1YmxpYyBEb21haW4uXG4gKiBOTyBXQVJSQU5UWSBFWFBSRVNTRUQgT1IgSU1QTElFRC4gVVNFIEFUIFlPVVIgT1dOIFJJU0suXG4gKi9cblxuLypnbG9iYWwgc2VsZiwgZG9jdW1lbnQsIERPTUV4Y2VwdGlvbiwgRE9NVG9rZW5MaXN0ICovXG5cbi8qISBAc291cmNlIGh0dHA6Ly9wdXJsLmVsaWdyZXkuY29tL2dpdGh1Yi9jbGFzc0xpc3QuanMvYmxvYi9tYXN0ZXIvY2xhc3NMaXN0LmpzKi9cblxuaWYgKFwiZG9jdW1lbnRcIiBpbiBzZWxmKSB7XG5cbiAgICAvLyBGdWxsIHBvbHlmaWxsIGZvciBicm93c2VycyB3aXRoIG5vIGNsYXNzTGlzdCBzdXBwb3J0XG4gICAgaWYgKCEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmICEoXCJjbGFzc0xpc3RcIiBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIikpKSB7XG5cbiAgICAgICAgKGZ1bmN0aW9uKHZpZXcpIHtcblxuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgICAgIGlmICghKCdFbGVtZW50JyBpbiB2aWV3KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNsYXNzTGlzdFByb3AgPSBcImNsYXNzTGlzdFwiLFxuICAgICAgICAgICAgICAgIHByb3RvUHJvcCA9IFwicHJvdG90eXBlXCIsXG4gICAgICAgICAgICAgICAgZWxlbUN0clByb3RvID0gdmlldy5FbGVtZW50W3Byb3RvUHJvcF0sXG4gICAgICAgICAgICAgICAgb2JqQ3RyID0gT2JqZWN0LFxuICAgICAgICAgICAgICAgIHN0clRyaW0gPSBTdHJpbmdbcHJvdG9Qcm9wXS50cmltIHx8IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9LCBhcnJJbmRleE9mID0gQXJyYXlbcHJvdG9Qcm9wXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgICAgIGkgPSAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIGluIHRoaXMgJiYgdGhpc1tpXSA9PT0gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vIFZlbmRvcnM6IHBsZWFzZSBhbGxvdyBjb250ZW50IGNvZGUgdG8gaW5zdGFudGlhdGUgRE9NRXhjZXB0aW9uc1xuICAgICAgICAgICAgICAgIERPTUV4ID0gZnVuY3Rpb24odHlwZSwgbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSB0eXBlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSBET01FeGNlcHRpb25bdHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgfSwgY2hlY2tUb2tlbkFuZEdldEluZGV4ID0gZnVuY3Rpb24oY2xhc3NMaXN0LCB0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4gPT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBET01FeChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlNZTlRBWF9FUlJcIiwgXCJBbiBpbnZhbGlkIG9yIGlsbGVnYWwgc3RyaW5nIHdhcyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKC9cXHMvLnRlc3QodG9rZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRE9NRXgoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJTlZBTElEX0NIQVJBQ1RFUl9FUlJcIiwgXCJTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyckluZGV4T2YuY2FsbChjbGFzc0xpc3QsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9LCBDbGFzc0xpc3QgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgICAgICB0cmltbWVkQ2xhc3NlcyA9IHN0clRyaW0uY2FsbChlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlcyA9IHRyaW1tZWRDbGFzc2VzID8gdHJpbW1lZENsYXNzZXMuc3BsaXQoL1xccysvKSA6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW4gPSBjbGFzc2VzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wdXNoKGNsYXNzZXNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sIGNsYXNzTGlzdFByb3RvID0gQ2xhc3NMaXN0W3Byb3RvUHJvcF0gPSBbXSxcbiAgICAgICAgICAgICAgICBjbGFzc0xpc3RHZXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIE1vc3QgRE9NRXhjZXB0aW9uIGltcGxlbWVudGF0aW9ucyBkb24ndCBhbGxvdyBjYWxsaW5nIERPTUV4Y2VwdGlvbidzIHRvU3RyaW5nKClcbiAgICAgICAgICAgIC8vIG9uIG5vbi1ET01FeGNlcHRpb25zLiBFcnJvcidzIHRvU3RyaW5nKCkgaXMgc3VmZmljaWVudCBoZXJlLlxuICAgICAgICAgICAgRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG4gICAgICAgICAgICBjbGFzc0xpc3RQcm90by5pdGVtID0gZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzW2ldIHx8IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgICAgIHRva2VuICs9IFwiXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgIT09IC0xO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhclxuICAgICAgICAgICAgICAgIHRva2VucyA9IGFyZ3VtZW50cyxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDAsXG4gICAgICAgICAgICAgICAgICAgIGwgPSB0b2tlbnMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICB0b2tlbiwgdXBkYXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aGlsZSAoKytpIDwgbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgdG9rZW5zID0gYXJndW1lbnRzLFxuICAgICAgICAgICAgICAgICAgICBpID0gMCxcbiAgICAgICAgICAgICAgICAgICAgbCA9IHRva2Vucy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHRva2VuLCB1cGRhdGVkID0gZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluZGV4O1xuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0b2tlbnNbaV0gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdoaWxlICgrK2kgPCBsKTtcblxuICAgICAgICAgICAgICAgIGlmICh1cGRhdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjbGFzc0xpc3RQcm90by50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcbiAgICAgICAgICAgICAgICB0b2tlbiArPSBcIlwiO1xuXG4gICAgICAgICAgICAgICAgdmFyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jb250YWlucyh0b2tlbiksXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCA9IHJlc3VsdCA/XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZSAhPT0gdHJ1ZSAmJiBcInJlbW92ZVwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlICE9PSBmYWxzZSAmJiBcImFkZFwiO1xuXG4gICAgICAgICAgICAgICAgaWYgKG1ldGhvZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW21ldGhvZF0odG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChmb3JjZSA9PT0gdHJ1ZSB8fCBmb3JjZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcmNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjbGFzc0xpc3RQcm90by50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmpvaW4oXCIgXCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKG9iakN0ci5kZWZpbmVQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc0xpc3RQcm9wRGVzYyA9IHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBjbGFzc0xpc3RHZXR0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7IC8vIElFIDggZG9lc24ndCBzdXBwb3J0IGVudW1lcmFibGU6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXgubnVtYmVyID09PSAtMHg3RkY1RUM1NCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqQ3RyLmRlZmluZVByb3BlcnR5KGVsZW1DdHJQcm90bywgY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0UHJvcERlc2MpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChvYmpDdHJbcHJvdG9Qcm9wXS5fX2RlZmluZUdldHRlcl9fKSB7XG4gICAgICAgICAgICAgICAgZWxlbUN0clByb3RvLl9fZGVmaW5lR2V0dGVyX18oY2xhc3NMaXN0UHJvcCwgY2xhc3NMaXN0R2V0dGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KHNlbGYpKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFRoZXJlIGlzIGZ1bGwgb3IgcGFydGlhbCBuYXRpdmUgY2xhc3NMaXN0IHN1cHBvcnQsIHNvIGp1c3QgY2hlY2sgaWYgd2UgbmVlZFxuICAgICAgICAvLyB0byBub3JtYWxpemUgdGhlIGFkZC9yZW1vdmUgYW5kIHRvZ2dsZSBBUElzLlxuXG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgICAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKTtcblxuICAgICAgICAgICAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImMxXCIsIFwiYzJcIik7XG5cbiAgICAgICAgICAgIC8vIFBvbHlmaWxsIGZvciBJRSAxMC8xMSBhbmQgRmlyZWZveCA8MjYsIHdoZXJlIGNsYXNzTGlzdC5hZGQgYW5kXG4gICAgICAgICAgICAvLyBjbGFzc0xpc3QucmVtb3ZlIGV4aXN0IGJ1dCBzdXBwb3J0IG9ubHkgb25lIGFyZ3VtZW50IGF0IGEgdGltZS5cbiAgICAgICAgICAgIGlmICghdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzJcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbCA9IERPTVRva2VuTGlzdC5wcm90b3R5cGVbbWV0aG9kXTtcblxuICAgICAgICAgICAgICAgICAgICBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbih0b2tlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGksIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsLmNhbGwodGhpcywgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY3JlYXRlTWV0aG9kKCdhZGQnKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVNZXRob2QoJ3JlbW92ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXN0RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYzNcIiwgZmFsc2UpO1xuXG4gICAgICAgICAgICAvLyBQb2x5ZmlsbCBmb3IgSUUgMTAgYW5kIEZpcmVmb3ggPDI0LCB3aGVyZSBjbGFzc0xpc3QudG9nZ2xlIGRvZXMgbm90XG4gICAgICAgICAgICAvLyBzdXBwb3J0IHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gICAgICAgICAgICBpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYzNcIikpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG4gICAgICAgICAgICAgICAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbih0b2tlbiwgZm9yY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKDEgaW4gYXJndW1lbnRzICYmICF0aGlzLmNvbnRhaW5zKHRva2VuKSA9PT0gIWZvcmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9yY2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGVzdEVsZW1lbnQgPSBudWxsO1xuICAgICAgICB9KCkpO1xuICAgIH1cblxufVxuIiwiLyohXG4gKiBjbGFzc2llIC0gY2xhc3MgaGVscGVyIGZ1bmN0aW9uc1xuICogZnJvbSBib256byBodHRwczovL2dpdGh1Yi5jb20vZGVkL2JvbnpvXG4gKiBcbiAqIGNsYXNzaWUuaGFzKCBlbGVtLCAnbXktY2xhc3MnICkgLT4gdHJ1ZS9mYWxzZVxuICogY2xhc3NpZS5hZGQoIGVsZW0sICdteS1uZXctY2xhc3MnIClcbiAqIGNsYXNzaWUucmVtb3ZlKCBlbGVtLCAnbXktdW53YW50ZWQtY2xhc3MnIClcbiAqIGNsYXNzaWUudG9nZ2xlKCBlbGVtLCAnbXktY2xhc3MnIClcbiAqL1xuXG4vKmpzaGludCBicm93c2VyOiB0cnVlLCBzdHJpY3Q6IHRydWUsIHVuZGVmOiB0cnVlICovXG4vKmdsb2JhbCBkZWZpbmU6IGZhbHNlICovXG4ndXNlIHN0cmljdCc7XG5cbi8vIGNsYXNzIGhlbHBlciBmdW5jdGlvbnMgZnJvbSBib256byBodHRwczovL2dpdGh1Yi5jb20vZGVkL2JvbnpvXG52YXIgY2xhc3NMaXN0ID0gcmVxdWlyZSgnLi9jbGFzc19saXN0X3Bsb3lmaWxsJyksXG4gICAgY2xhc3NpZTtcblxuZnVuY3Rpb24gY2xhc3NSZWcoY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIgKyBjbGFzc05hbWUgKyBcIihcXFxccyt8JClcIik7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5mdW5jdGlvbiBpc0FycihjbGFzc2VzKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NlcykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoY2xhc3NlcykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTXVsdGlwbGUoKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHNbMV0sXG4gICAgICAgIGVsZW0gPSBhcmd1bWVudHNbMF07XG4gICAgYy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIGlmIChjbGFzc2llLmhhcyhlbGVtLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgIG5vb3AoKTtcbiAgICAgICAgfVxuICAgICAgICBjbGFzc2llLnJlbW92ZUNsYXNzKGVsZW0sIHZhbHVlKTtcbiAgICB9KTtcbn1cblxuXG5mdW5jdGlvbiBhZGRNdWx0aXBsZSgpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50c1sxXSxcbiAgICAgICAgZWxlbSA9IGFyZ3VtZW50c1swXTtcbiAgICBjLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgaWYgKGNsYXNzaWUuaGFzKGVsZW0sIHZhbHVlKSkge1xuICAgICAgICAgICAgbm9vcCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsYXNzaWUuYWRkQ2xhc3MoZWxlbSwgdmFsdWUpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjKSB7XG4gICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGMpO1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyhlbGVtLCBjKSB7XG4gICAgaWYgKGlzQXJyKGMpKSB7XG4gICAgICAgIGFkZE11bHRpcGxlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGMpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbSwgYykge1xuICAgIGlmIChpc0FycihjKSkge1xuICAgICAgICByZW1vdmVNdWx0aXBsZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGMpIHtcbiAgICB2YXIgZm4gPSBoYXNDbGFzcyhlbGVtLCBjKSA/IHJlbW92ZUNsYXNzIDogYWRkQ2xhc3M7XG4gICAgZm4oZWxlbSwgYyk7XG59XG5cbnZhciBjbGFzc2llID0ge1xuICAgIC8vIGZ1bGwgbmFtZXNcbiAgICBoYXNDbGFzczogaGFzQ2xhc3MsXG4gICAgYWRkQ2xhc3M6IGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzOiByZW1vdmVDbGFzcyxcbiAgICB0b2dnbGVDbGFzczogdG9nZ2xlQ2xhc3MsXG4gICAgLy8gc2hvcnQgbmFtZXNcbiAgICBoYXM6IGhhc0NsYXNzLFxuICAgIGFkZDogYWRkQ2xhc3MsXG4gICAgcmVtb3ZlOiByZW1vdmVDbGFzcyxcbiAgICB0b2dnbGU6IHRvZ2dsZUNsYXNzXG59O1xuXG4vLyB0cmFuc3BvcnRcblxuaWYgKHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xuICAgIC8vIGNvbW1vbmpzIC8gYnJvd3NlcmlmeVxuICAgIG1vZHVsZS5leHBvcnRzID0gY2xhc3NpZTtcbn0gZWxzZSB7XG4gICAgLy8gQU1EXG4gICAgZGVmaW5lKGNsYXNzaWUpO1xufVxuIl19
