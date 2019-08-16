(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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
/*------------------------------------------------------------------
Sticky header
------------------------------------------------------------------*/



/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

var $form = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#ContactForm_ContactForm');
$form.parsley({
  classHandler: function classHandler(el) {
    return el.$element.closest('.field');
  }
}).on('form:submit', function () {
  Object(wretch__WEBPACK_IMPORTED_MODULE_1__["default"])($form.attr('action')).formUrl($form.serialize()).post().json(function (json) {
    return console.log(json);
  });
  return false;
});

/***/ })

}]);
//# sourceMappingURL=app.map.js