(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./themes/quicksilver/js/components/login.js":
/*!***************************************************!*\
  !*** ./themes/quicksilver/js/components/login.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*------------------------------------------------------------------
Imports
------------------------------------------------------------------*/


/*------------------------------------------------------------------
Variables
------------------------------------------------------------------*/

/** Class representing an animation */

var Animation =
/*#__PURE__*/
function () {
  function Animation() {
    _classCallCheck(this, Animation);

    // Create a scene, that will hold all our elements such as objects, cameras and lights.
    this.scene = new three__WEBPACK_IMPORTED_MODULE_0__["Scene"](); // Create a camera, which defines where we're looking at.

    this.camera = new three__WEBPACK_IMPORTED_MODULE_0__["PerspectiveCamera"](75, this.getAspect(), 0.1, 1000); // Create a render and set the size

    this.initRenderer(); // Initialise the main animation sequence

    this.init();
  }
  /**
   * Initialise the statistics module
   *
   * @param {number} [type=0] 0: fps, 1: ms, 2: mb, 3+: custom
   * @returns object 
   * @memberof Animation
   */


  _createClass(Animation, [{
    key: "initStats",
    value: function initStats() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.stats = new stats_js__WEBPACK_IMPORTED_MODULE_1___default.a();
      this.stats.showPanel(type);
      document.body.appendChild(this.stats.dom);
    }
    /**
     * Initialise the renderer object
     *
     * @param {*} [props={}]
     * @memberof Animation
     */

  }, {
    key: "initRenderer",
    value: function initRenderer() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = Object.assign(props, {
        antialias: true,
        canvas: document.getElementById('animation')
      });
      this.renderer = new three__WEBPACK_IMPORTED_MODULE_0__["WebGLRenderer"](options);
      this.renderer.shadowMap.enabled = true;
      this.renderer.shadowMapSoft = true;
      this.renderer.shadowMap.type = three__WEBPACK_IMPORTED_MODULE_0__["PCFSoftShadowMap"];
      this.renderer.setClearColor(new three__WEBPACK_IMPORTED_MODULE_0__["Color"](0x000000));
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }, {
    key: "init",
    value: function init() {
      // Initialise the statistics module
      this.initStats();
      this.renderer.setPixelRatio(2);
      this.renderer.setSize(window.innerWidth, window.innerHeight);
      var geometry = new three__WEBPACK_IMPORTED_MODULE_0__["BoxGeometry"](1, 1, 1);
      var material = new three__WEBPACK_IMPORTED_MODULE_0__["MeshBasicMaterial"]({
        color: 0x333333
      });
      var cube = new three__WEBPACK_IMPORTED_MODULE_0__["Mesh"](geometry, material);
      this.scene.add(cube);
      this.camera.position.z = 15;
      this.render();
    }
    /**
     * Get's the aspet ratio of the current scene
     *
     * @returns {number} the ratio 
     * @memberof Animation
     */

  }, {
    key: "getAspect",
    value: function getAspect() {
      return window.innerWidth / window.innerHeight;
    }
    /**
     * Render the scene
     *
     * @memberof Animation
     */

  }, {
    key: "render",
    value: function render() {
      this.stats.update();
      requestAnimationFrame(this.render.bind(this));
      this.renderer.render(this.scene, this.camera);
    }
  }]);

  return Animation;
}(); // let _animation = new Animation();

/***/ })

}]);
//# sourceMappingURL=bundle.map.js