(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./themes/quicksilver/js/components/responsiveTables.js":
/*!**************************************************************!*\
  !*** ./themes/quicksilver/js/components/responsiveTables.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/

/*------------------------------------------------------------------
Wrap all tables inside of a responsive div
------------------------------------------------------------------*/

jquery__WEBPACK_IMPORTED_MODULE_0___default()('table').each(function (index, table) {
  return jquery__WEBPACK_IMPORTED_MODULE_0___default()(table).wrapAll('<div class="js-table"></div>');
});

/***/ })

}]);
//# sourceMappingURL=bundle.map.js