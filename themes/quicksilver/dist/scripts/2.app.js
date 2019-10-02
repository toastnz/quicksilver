(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./themes/quicksilver/js/components/Accordions.js":
/*!********************************************************!*\
  !*** ./themes/quicksilver/js/components/Accordions.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*------------------------------------------------------------------
Sticky header
------------------------------------------------------------------*/

/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
$body.on('click', '.js-accordion-trigger', function (e) {
  e.preventDefault();
  var $accordion = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).closest('.js-accordion-item');

  if ($accordion.hasClass('active')) {
    $accordion.removeClass('active');
    $accordion.find('.js-accordion-target').slideUp();
  } else {
    $accordion.addClass('active');
    $accordion.find('.js-accordion-target').slideDown();
  }
});

/***/ })

}]);
//# sourceMappingURL=app.map.js