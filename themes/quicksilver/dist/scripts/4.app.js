(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./themes/quicksilver/js/components/ContactForm.js":
/*!*********************************************************!*\
  !*** ./themes/quicksilver/js/components/ContactForm.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var wretch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! wretch */ "./node_modules/wretch/dist/index.js");
/* harmony import */ var parsleyjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parsleyjs */ "./node_modules/parsleyjs/dist/parsley.js");
/* harmony import */ var parsleyjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parsleyjs__WEBPACK_IMPORTED_MODULE_2__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*------------------------------------------------------------------
Sticky header
------------------------------------------------------------------*/



/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

var Form =
/*#__PURE__*/
function () {
  function Form(form) {
    _classCallCheck(this, Form);

    this.isValid = false;
    this.scrollToInvalidField = true;
    this.fields = [];
    this.init();
  }

  _createClass(Form, [{
    key: "init",
    value: function init() {}
  }, {
    key: "supported",
    value: function supported() {
      var input = document.createElement('input');
      return 'validity' in input;
    }
  }, {
    key: "attachEventHandlers",
    value: function attachEventHandlers() {}
  }, {
    key: "checkValidity",
    value: function checkValidity() {}
  }, {
    key: "isValid",
    value: function isValid(field) {}
  }]);

  return Form;
}();
/**
 * Form confirmation
 * @param {json} response
*/


var confirmation = function confirmation(response) {
  console.log(reponse);
};

var $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ContactForm_ContactForm');
var url = $form.attr('action');
$form.parsley({
  classHandler: function classHandler(el) {
    return el.$element.closest('.field');
  }
}).on('form:submit', function () {
  Object(wretch__WEBPACK_IMPORTED_MODULE_1__["default"])(url).formUrl($form.serialize()).post().json(function (json) {
    return confirmation(json);
  });
  return false;
});

/***/ })

}]);
//# sourceMappingURL=app.map.js