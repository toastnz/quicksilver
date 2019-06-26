{"version":3,"sources":["webpack:///webpack/bootstrap","webpack:///./themes/quicksilver/js/app.js","webpack:///./themes/quicksilver/scss/style.scss"],"names":["window","debug","location","host","includes","console","log","document","body","dataset","pageTemplate","$","element","querySelectorAll","addEventListener","length"],"mappings":";AAAA;AACA;AACA;AACA;;;AAGA;AACA;AACA;AACA,gBAAQ,oBAAoB;AAC5B;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;;AAEA;;;AAGA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;;;;AAIA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;;AAEA;AACA;AACA;AACA;;;AAGA;;AAEA;AACA,yCAAiC;;AAEjC;AACA;AACA;AACA,aAAK;AACL;AACA;AACA;AACA,cAAM;AACN;;AAEA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA,gCAAwB,kCAAkC;AAC1D,cAAM;AACN;AACA;AACA;AACA;AACA;AACA;;AAEA;AACA;;AAEA;AACA;;AAEA;AACA;AACA;AACA,kDAA0C,gCAAgC;AAC1E;AACA;;AAEA;AACA;AACA;AACA,gEAAwD,kBAAkB;AAC1E;AACA,yDAAiD,cAAc;AAC/D;;AAEA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA;AACA,iDAAyC,iCAAiC;AAC1E,wHAAgH,mBAAmB,EAAE;AACrI;AACA;;AAEA;AACA;AACA;AACA,mCAA2B,0BAA0B,EAAE;AACvD,yCAAiC,eAAe;AAChD;AACA;AACA;;AAEA;AACA,8DAAsD,+DAA+D;;AAErH;AACA;;AAEA;AACA,kDAA0C,oBAAoB,WAAW;;AAEzE;AACA;AACA;AACA;AACA,wBAAgB,uBAAuB;AACvC;;;AAGA;AACA;;;;;;;;;;;;;ACrMA;AAAA;AAAA;AAAA;;;AAIAA,MAAM,CAACC,KAAP,GAAeD,MAAM,CAACE,QAAP,CAAgBC,IAAhB,CAAqBC,QAArB,CAA8B,OAA9B,CAAf;AAEA,IAAIH,KAAJ,EAAWI,OAAO,CAACC,GAAR,CAAY,qBAAZ,EAAmC,+CAAnC;AACX,IAAIL,KAAJ,EAAWI,OAAO,CAACC,GAAR,uBAA2BC,QAAQ,CAACC,IAAT,CAAcC,OAAd,CAAsBC,YAAtB,IAAsC,QAAjE,GAA6E,+CAA7E;AAEX;;;;AAIA;;AAEA,IAAIC,CAAC,GAAG,SAAJA,CAAI,CAACC,OAAD;AAAA,SAAaL,QAAQ,CAACM,gBAAT,CAA0BD,OAA1B,CAAb;AAAA,CAAR;AAEA;;;;;AAIAL,QAAQ,CAACO,gBAAT,CAA0B,kBAA1B,EAA8C,YAAM;AAEhD,MAAIH,CAAC,CAAC,iBAAD,CAAD,CAAqBI,MAAzB,EAAiC;AACjC,MAAIJ,CAAC,CAAC,OAAD,CAAD,CAAWI,MAAf,EAAuB;AACvB,MAAIJ,CAAC,CAAC,uBAAD,CAAD,CAA2BI,MAA/B,EAAuC;AACvC,MAAIJ,CAAC,CAAC,OAAD,CAAD,CAAWI,MAAf,EAAuB;AAE1B,CAPD,E;;;;;;;;;;;ACrBA,uC","file":"bundle.js","sourcesContent":[" \t// install a JSONP callback for chunk loading\n \tfunction webpackJsonpCallback(data) {\n \t\tvar chunkIds = data[0];\n \t\tvar moreModules = data[1];\n\n\n \t\t// add \"moreModules\" to the modules object,\n \t\t// then flag all \"chunkIds\" as loaded and fire callback\n \t\tvar moduleId, chunkId, i = 0, resolves = [];\n \t\tfor(;i < chunkIds.length; i++) {\n \t\t\tchunkId = chunkIds[i];\n \t\t\tif(installedChunks[chunkId]) {\n \t\t\t\tresolves.push(installedChunks[chunkId][0]);\n \t\t\t}\n \t\t\tinstalledChunks[chunkId] = 0;\n \t\t}\n \t\tfor(moduleId in moreModules) {\n \t\t\tif(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {\n \t\t\t\tmodules[moduleId] = moreModules[moduleId];\n \t\t\t}\n \t\t}\n \t\tif(parentJsonpFunction) parentJsonpFunction(data);\n\n \t\twhile(resolves.length) {\n \t\t\tresolves.shift()();\n \t\t}\n\n \t};\n\n\n \t// The module cache\n \tvar installedModules = {};\n\n \t// object to store loaded and loading chunks\n \t// undefined = chunk not loaded, null = chunk preloaded/prefetched\n \t// Promise = chunk loading, 0 = chunk loaded\n \tvar installedChunks = {\n \t\t\"main\": 0\n \t};\n\n\n\n \t// script path function\n \tfunction jsonpScriptSrc(chunkId) {\n \t\treturn __webpack_require__.p + \"\" + chunkId + \".bundle.js\"\n \t}\n\n \t// The require function\n \tfunction __webpack_require__(moduleId) {\n\n \t\t// Check if module is in cache\n \t\tif(installedModules[moduleId]) {\n \t\t\treturn installedModules[moduleId].exports;\n \t\t}\n \t\t// Create a new module (and put it into the cache)\n \t\tvar module = installedModules[moduleId] = {\n \t\t\ti: moduleId,\n \t\t\tl: false,\n \t\t\texports: {}\n \t\t};\n\n \t\t// Execute the module function\n \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n\n \t\t// Flag the module as loaded\n \t\tmodule.l = true;\n\n \t\t// Return the exports of the module\n \t\treturn module.exports;\n \t}\n\n \t// This file contains only the entry chunk.\n \t// The chunk loading function for additional chunks\n \t__webpack_require__.e = function requireEnsure(chunkId) {\n \t\tvar promises = [];\n\n\n \t\t// JSONP chunk loading for javascript\n\n \t\tvar installedChunkData = installedChunks[chunkId];\n \t\tif(installedChunkData !== 0) { // 0 means \"already installed\".\n\n \t\t\t// a Promise means \"currently loading\".\n \t\t\tif(installedChunkData) {\n \t\t\t\tpromises.push(installedChunkData[2]);\n \t\t\t} else {\n \t\t\t\t// setup Promise in chunk cache\n \t\t\t\tvar promise = new Promise(function(resolve, reject) {\n \t\t\t\t\tinstalledChunkData = installedChunks[chunkId] = [resolve, reject];\n \t\t\t\t});\n \t\t\t\tpromises.push(installedChunkData[2] = promise);\n\n \t\t\t\t// start chunk loading\n \t\t\t\tvar script = document.createElement('script');\n \t\t\t\tvar onScriptComplete;\n\n \t\t\t\tscript.charset = 'utf-8';\n \t\t\t\tscript.timeout = 120;\n \t\t\t\tif (__webpack_require__.nc) {\n \t\t\t\t\tscript.setAttribute(\"nonce\", __webpack_require__.nc);\n \t\t\t\t}\n \t\t\t\tscript.src = jsonpScriptSrc(chunkId);\n\n \t\t\t\t// create error before stack unwound to get useful stacktrace later\n \t\t\t\tvar error = new Error();\n \t\t\t\tonScriptComplete = function (event) {\n \t\t\t\t\t// avoid mem leaks in IE.\n \t\t\t\t\tscript.onerror = script.onload = null;\n \t\t\t\t\tclearTimeout(timeout);\n \t\t\t\t\tvar chunk = installedChunks[chunkId];\n \t\t\t\t\tif(chunk !== 0) {\n \t\t\t\t\t\tif(chunk) {\n \t\t\t\t\t\t\tvar errorType = event && (event.type === 'load' ? 'missing' : event.type);\n \t\t\t\t\t\t\tvar realSrc = event && event.target && event.target.src;\n \t\t\t\t\t\t\terror.message = 'Loading chunk ' + chunkId + ' failed.\\n(' + errorType + ': ' + realSrc + ')';\n \t\t\t\t\t\t\terror.name = 'ChunkLoadError';\n \t\t\t\t\t\t\terror.type = errorType;\n \t\t\t\t\t\t\terror.request = realSrc;\n \t\t\t\t\t\t\tchunk[1](error);\n \t\t\t\t\t\t}\n \t\t\t\t\t\tinstalledChunks[chunkId] = undefined;\n \t\t\t\t\t}\n \t\t\t\t};\n \t\t\t\tvar timeout = setTimeout(function(){\n \t\t\t\t\tonScriptComplete({ type: 'timeout', target: script });\n \t\t\t\t}, 120000);\n \t\t\t\tscript.onerror = script.onload = onScriptComplete;\n \t\t\t\tdocument.head.appendChild(script);\n \t\t\t}\n \t\t}\n \t\treturn Promise.all(promises);\n \t};\n\n \t// expose the modules object (__webpack_modules__)\n \t__webpack_require__.m = modules;\n\n \t// expose the module cache\n \t__webpack_require__.c = installedModules;\n\n \t// define getter function for harmony exports\n \t__webpack_require__.d = function(exports, name, getter) {\n \t\tif(!__webpack_require__.o(exports, name)) {\n \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n \t\t}\n \t};\n\n \t// define __esModule on exports\n \t__webpack_require__.r = function(exports) {\n \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n \t\t}\n \t\tObject.defineProperty(exports, '__esModule', { value: true });\n \t};\n\n \t// create a fake namespace object\n \t// mode & 1: value is a module id, require it\n \t// mode & 2: merge all properties of value into the ns\n \t// mode & 4: return value when already ns object\n \t// mode & 8|1: behave like require\n \t__webpack_require__.t = function(value, mode) {\n \t\tif(mode & 1) value = __webpack_require__(value);\n \t\tif(mode & 8) return value;\n \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n \t\tvar ns = Object.create(null);\n \t\t__webpack_require__.r(ns);\n \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n \t\treturn ns;\n \t};\n\n \t// getDefaultExport function for compatibility with non-harmony modules\n \t__webpack_require__.n = function(module) {\n \t\tvar getter = module && module.__esModule ?\n \t\t\tfunction getDefault() { return module['default']; } :\n \t\t\tfunction getModuleExports() { return module; };\n \t\t__webpack_require__.d(getter, 'a', getter);\n \t\treturn getter;\n \t};\n\n \t// Object.prototype.hasOwnProperty.call\n \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n\n \t// __webpack_public_path__\n \t__webpack_require__.p = \"/themes/quicksilver/dist/scripts/\";\n\n \t// on error function for async loading\n \t__webpack_require__.oe = function(err) { console.error(err); throw err; };\n\n \tvar jsonpArray = window[\"webpackJsonp\"] = window[\"webpackJsonp\"] || [];\n \tvar oldJsonpFunction = jsonpArray.push.bind(jsonpArray);\n \tjsonpArray.push = webpackJsonpCallback;\n \tjsonpArray = jsonpArray.slice();\n \tfor(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);\n \tvar parentJsonpFunction = oldJsonpFunction;\n\n\n \t// Load entry module and return exports\n \treturn __webpack_require__(__webpack_require__.s = \"./themes/quicksilver/js/app.js\");\n","/*------------------------------------------------------------------\nVersioning & Debug Information\n------------------------------------------------------------------*/\n\nwindow.debug = window.location.host.includes('.test');\n\nif (debug) console.log('%cQUICKSILVER: v4.1', 'padding:5px;color: #fff; background: #377cff;');\nif (debug) console.log(`%cTEMPLATE: ${document.body.dataset.pageTemplate || 'Custom'}`, 'padding:5px;color: #fff; background: #c792ea;');\n\n/*------------------------------------------------------------------\nStylesheets\n------------------------------------------------------------------*/\n\nimport './../scss/style.scss';\n\nlet $ = (element) => document.querySelectorAll(element);\n\n/*------------------------------------------------------------------\nComponents\n------------------------------------------------------------------*/\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\n    if ($('.js-video-modal').length) import('./components/videoBlock')\n    if ($('table').length) import('./components/responsiveTables')\n    if ($('.js-accordion-trigger').length) import('./components/accordions')\n    if ($('login').length) import('./components/login')\n\n});\n","// extracted by mini-css-extract-plugin"],"sourceRoot":""}