(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/tingle.js/dist/tingle.min.js":
/*!***************************************************!*\
  !*** ./node_modules/tingle.js/dist/tingle.min.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(t,o){ true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (o),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,function(){function t(t){var o={onClose:null,onOpen:null,beforeOpen:null,beforeClose:null,stickyFooter:!1,footer:!1,cssClass:[],closeLabel:"Close",closeMethods:["overlay","button","escape"]};this.opts=r({},o,t),this.init()}function o(){this.modalBoxFooter&&(this.modalBoxFooter.style.width=this.modalBox.clientWidth+"px",this.modalBoxFooter.style.left=this.modalBox.offsetLeft+"px")}function e(){this.modal=document.createElement("div"),this.modal.classList.add("tingle-modal"),0!==this.opts.closeMethods.length&&-1!==this.opts.closeMethods.indexOf("overlay")||this.modal.classList.add("tingle-modal--noOverlayClose"),this.modal.style.display="none",this.opts.cssClass.forEach(function(t){"string"==typeof t&&this.modal.classList.add(t)},this),-1!==this.opts.closeMethods.indexOf("button")&&(this.modalCloseBtn=document.createElement("button"),this.modalCloseBtn.type="button",this.modalCloseBtn.classList.add("tingle-modal__close"),this.modalCloseBtnIcon=document.createElement("span"),this.modalCloseBtnIcon.classList.add("tingle-modal__closeIcon"),this.modalCloseBtnIcon.innerHTML="×",this.modalCloseBtnLabel=document.createElement("span"),this.modalCloseBtnLabel.classList.add("tingle-modal__closeLabel"),this.modalCloseBtnLabel.innerHTML=this.opts.closeLabel,this.modalCloseBtn.appendChild(this.modalCloseBtnIcon),this.modalCloseBtn.appendChild(this.modalCloseBtnLabel)),this.modalBox=document.createElement("div"),this.modalBox.classList.add("tingle-modal-box"),this.modalBoxContent=document.createElement("div"),this.modalBoxContent.classList.add("tingle-modal-box__content"),this.modalBox.appendChild(this.modalBoxContent),-1!==this.opts.closeMethods.indexOf("button")&&this.modal.appendChild(this.modalCloseBtn),this.modal.appendChild(this.modalBox)}function s(){this.modalBoxFooter=document.createElement("div"),this.modalBoxFooter.classList.add("tingle-modal-box__footer"),this.modalBox.appendChild(this.modalBoxFooter)}function i(){this._events={clickCloseBtn:this.close.bind(this),clickOverlay:l.bind(this),resize:this.checkOverflow.bind(this),keyboardNav:n.bind(this)},-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.addEventListener("click",this._events.clickCloseBtn),this.modal.addEventListener("mousedown",this._events.clickOverlay),window.addEventListener("resize",this._events.resize),document.addEventListener("keydown",this._events.keyboardNav)}function n(t){-1!==this.opts.closeMethods.indexOf("escape")&&27===t.which&&this.isOpen()&&this.close()}function l(t){-1!==this.opts.closeMethods.indexOf("overlay")&&!d(t.target,"tingle-modal")&&t.clientX<this.modal.clientWidth&&this.close()}function d(t,o){for(;(t=t.parentElement)&&!t.classList.contains(o););return t}function a(){-1!==this.opts.closeMethods.indexOf("button")&&this.modalCloseBtn.removeEventListener("click",this._events.clickCloseBtn),this.modal.removeEventListener("mousedown",this._events.clickOverlay),window.removeEventListener("resize",this._events.resize),document.removeEventListener("keydown",this._events.keyboardNav)}function r(){for(var t=1;t<arguments.length;t++)for(var o in arguments[t])arguments[t].hasOwnProperty(o)&&(arguments[0][o]=arguments[t][o]);return arguments[0]}var h=function(){var t,o=document.createElement("tingle-test-transition"),e={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in e)if(void 0!==o.style[t])return e[t]}(),c=!1;return t.prototype.init=function(){if(!this.modal)return e.call(this),i.call(this),document.body.insertBefore(this.modal,document.body.firstChild),this.opts.footer&&this.addFooter(),this},t.prototype._busy=function(t){c=t},t.prototype._isBusy=function(){return c},t.prototype.destroy=function(){null!==this.modal&&(this.isOpen()&&this.close(!0),a.call(this),this.modal.parentNode.removeChild(this.modal),this.modal=null)},t.prototype.isOpen=function(){return!!this.modal.classList.contains("tingle-modal--visible")},t.prototype.open=function(){if(!this._isBusy()){this._busy(!0);var t=this;return"function"==typeof t.opts.beforeOpen&&t.opts.beforeOpen(),this.modal.style.removeProperty?this.modal.style.removeProperty("display"):this.modal.style.removeAttribute("display"),this._scrollPosition=window.pageYOffset,document.body.classList.add("tingle-enabled"),document.body.style.top=-this._scrollPosition+"px",this.setStickyFooter(this.opts.stickyFooter),this.modal.classList.add("tingle-modal--visible"),h?this.modal.addEventListener(h,function o(){"function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t.modal.removeEventListener(h,o,!1),t._busy(!1)},!1):("function"==typeof t.opts.onOpen&&t.opts.onOpen.call(t),t._busy(!1)),this.checkOverflow(),this}},t.prototype.close=function(t){if(!this._isBusy()){if(this._busy(!0),t=t||!1,"function"==typeof this.opts.beforeClose){if(!this.opts.beforeClose.call(this))return}document.body.classList.remove("tingle-enabled"),window.scrollTo(0,this._scrollPosition),document.body.style.top=null,this.modal.classList.remove("tingle-modal--visible");var o=this;t?(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)):h?this.modal.addEventListener(h,function t(){o.modal.removeEventListener(h,t,!1),o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1)},!1):(o.modal.style.display="none","function"==typeof o.opts.onClose&&o.opts.onClose.call(this),o._busy(!1))}},t.prototype.setContent=function(t){return"string"==typeof t?this.modalBoxContent.innerHTML=t:(this.modalBoxContent.innerHTML="",this.modalBoxContent.appendChild(t)),this.isOpen()&&this.checkOverflow(),this},t.prototype.getContent=function(){return this.modalBoxContent},t.prototype.addFooter=function(){return s.call(this),this},t.prototype.setFooterContent=function(t){return this.modalBoxFooter.innerHTML=t,this},t.prototype.getFooterContent=function(){return this.modalBoxFooter},t.prototype.setStickyFooter=function(t){return this.isOverflow()||(t=!1),t?this.modalBox.contains(this.modalBoxFooter)&&(this.modalBox.removeChild(this.modalBoxFooter),this.modal.appendChild(this.modalBoxFooter),this.modalBoxFooter.classList.add("tingle-modal-box__footer--sticky"),o.call(this),this.modalBoxContent.style["padding-bottom"]=this.modalBoxFooter.clientHeight+20+"px"):this.modalBoxFooter&&(this.modalBox.contains(this.modalBoxFooter)||(this.modal.removeChild(this.modalBoxFooter),this.modalBox.appendChild(this.modalBoxFooter),this.modalBoxFooter.style.width="auto",this.modalBoxFooter.style.left="",this.modalBoxContent.style["padding-bottom"]="",this.modalBoxFooter.classList.remove("tingle-modal-box__footer--sticky"))),this},t.prototype.addFooterBtn=function(t,o,e){var s=document.createElement("button");return s.innerHTML=t,s.addEventListener("click",e),"string"==typeof o&&o.length&&o.split(" ").forEach(function(t){s.classList.add(t)}),this.modalBoxFooter.appendChild(s),s},t.prototype.resize=function(){console.warn("Resize is deprecated and will be removed in version 1.0")},t.prototype.isOverflow=function(){var t=window.innerHeight;return this.modalBox.clientHeight>=t},t.prototype.checkOverflow=function(){this.modal.classList.contains("tingle-modal--visible")&&(this.isOverflow()?this.modal.classList.add("tingle-modal--overflow"):this.modal.classList.remove("tingle-modal--overflow"),!this.isOverflow()&&this.opts.stickyFooter?this.setStickyFooter(!1):this.isOverflow()&&this.opts.stickyFooter&&(o.call(this),this.setStickyFooter(!0)))},{modal:t}});

/***/ }),

/***/ "./themes/quicksilver/js/components/videoBlock.js":
/*!********************************************************!*\
  !*** ./themes/quicksilver/js/components/videoBlock.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tingle.js */ "./node_modules/tingle.js/dist/tingle.min.js");
/* harmony import */ var tingle_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tingle_js__WEBPACK_IMPORTED_MODULE_1__);
/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/


/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

var $body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
$body.on('click', '.js-video-modal', function (e) {
  e.preventDefault();
  var $this = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
  var videoModal = new tingle_js__WEBPACK_IMPORTED_MODULE_1___default.a.modal({
    cssClass: ['videoModal'],
    onClose: function onClose() {
      videoModal.destroy();
    },
    onOpen: function onOpen() {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tingle-modal__close').html("<div class=\"closeIcon\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"86\" height=\"85\" viewBox=\"0 0 86 85\" class=\"svg-close\"><polygon fill=\"none\" stroke=\"#ffffff\" stroke-width=\"3.78\" points=\"840 88.29 824.516 73 799.999 97.207 775.484 73 760 88.29 784.515 112.499 760 136.708 775.484 152 799.999 127.789 824.516 152 840 136.708 815.483 112.499\" transform=\"translate(-757 -70)\"></polygon></svg></div>");
      jquery__WEBPACK_IMPORTED_MODULE_0___default()('.tingle-modal').addClass('active');
    }
  });

  if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-video-source') === 'vimeo') {
    videoModal.setContent("<div class=\"modal__close\"><a href=\"#\" class=\"modal__close__icon [ js-close-modal ]\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"86\" height=\"85\" viewBox=\"0 0 86 85\" class=\"svg-close\"><polygon fill=\"none\" stroke=\"#704C99\" stroke-width=\"3.78\" points=\"840 88.29 824.516 73 799.999 97.207 775.484 73 760 88.29 784.515 112.499 760 136.708 775.484 152 799.999 127.789 824.516 152 840 136.708 815.483 112.499\" transform=\"translate(-757 -70)\"></polygon></svg></a></div><div class=\"modal wysiwyg\"><div class=\"embed-container\"><iframe src=\"https://player.vimeo.com/video/".concat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-video-id'), "?title=0&byline=0&portrait=0&autoplay=1\" width=\"640\" height=\"360\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>"));
  } else {
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('data-video-id'));
    videoModal.setContent("<div class=\"modal__close\">\n                                 <a href=\"#\" class=\"modal__close__icon [ js-close-modal ]\">\n                                    <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"86\" height=\"85\" viewBox=\"0 0 86 85\" class=\"svg-close\"><polygon fill=\"none\" stroke=\"#704C99\" stroke-width=\"3.78\" points=\"840 88.29 824.516 73 799.999 97.207 775.484 73 760 88.29 784.515 112.499 760 136.708 775.484 152 799.999 127.789 824.516 152 840 136.708 815.483 112.499\" transform=\"translate(-757 -70)\"></polygon></svg>\n                                 </a>\n                               </div>\n                               <div class=\"modal wysiwyg\">\n                                 <div class=\"embed-container\">\n                                   <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/".concat($this.attr('data-video-id'), "?controls=0&autoplay=1&rel=0\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n                                 </div>\n                               </div>"));
  }

  videoModal.open();
});

/***/ })

}]);
//# sourceMappingURL=bundle.map.js