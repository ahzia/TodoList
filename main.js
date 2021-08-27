/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  background-color: whitesmoke;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.container {\\r\\n  background-color: white;\\r\\n  width: 40%;\\r\\n  margin-top: 130px;\\r\\n  padding: 20px;\\r\\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\\r\\n}\\r\\n\\r\\n.header {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.input {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.icon:hover {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.todoInput {\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\n.todoInput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nul {\\r\\n  padding-left: 0;\\r\\n  padding-bottom: 10px;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  border: 1px solid grey;\\r\\n  margin-bottom: 5px;\\r\\n  padding: 2px;\\r\\n}\\r\\n\\r\\n.clearAll {\\r\\n  background-color: whitesmoke;\\r\\n  height: 70px;\\r\\n  margin: -20px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.clearAll a {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\n.todoContent {\\r\\n  width: 90%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.draggable.dragging {\\r\\n  opacity: 0.5;\\r\\n  border: 2px solid blue;\\r\\n  cursor: grabbing;\\r\\n}\\r\\n\\r\\n.draggableAria {\\r\\n  width: 20%;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: flex-end;\\r\\n  cursor: grab;\\r\\n}\\r\\n\\r\\n.deleteDiv {\\r\\n  display: flex;\\r\\n  width: 20px;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n  color: tomato;\\r\\n}\\r\\n\\r\\n.deleteDiv:hover {\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.description {\\r\\n  border: none;\\r\\n  width: 100%;\\r\\n  height: 30px;\\r\\n}\\r\\n\\r\\n.description:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\n.liFocus {\\r\\n  background-color: lightblue;\\r\\n}\\r\\n\\r\\n.inFocus {\\r\\n  background-color: lightblue;\\r\\n}\\r\\n\\r\\n.hidden {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.hidetemp {\\r\\n  visibility: hidden;\\r\\n}\\r\\n\\r\\n.visible {\\r\\n  visibility: visible;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://JS-Todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://JS-Todo-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://JS-Todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/drag.js":
/*!************************!*\
  !*** ./src/js/drag.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getDragAfterElement = (container, y) => {\r\n  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];\r\n  return draggableElements.reduce((closest, child) => {\r\n    const box = child.getBoundingClientRect();\r\n    const offset = y - box.top - box.height / 2;\r\n    if (offset < 0 && offset > closest.offset) {\r\n      return { offset, element: child };\r\n    }\r\n    return closest;\r\n  }, { offset: Number.NEGATIVE_INFINITY }).element;\r\n};\r\n// function to rearrange todos based on the new position\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDragAfterElement);\n\n//# sourceURL=webpack://JS-Todo-list/./src/js/drag.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/js/list.js\");\n/* harmony import */ var _drag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag.js */ \"./src/js/drag.js\");\n\n\n\n\nconst newList = new _list_js__WEBPACK_IMPORTED_MODULE_1__.default();\nconst eventListener = () => {\n  document.querySelector('ul').onclick = (event) => {\n    const { target } = event;\n    const { id } = target;\n    if (id.includes('idel')) {\n      const divId = (id).replace('idel', '');\n      newList.remove(divId);\n      eventListener();\n    } else if (id.includes('del')) {\n      const divId = (id).replace('del', '');\n      newList.remove(divId);\n      eventListener();\n    } else if (id.includes('ch')) {\n      const index = id.replace('ch', '');\n      newList.updateStatus(index);\n    } else if (id.includes('in')) {\n      const input = document.getElementById(id);\n      const index = id.replace('in', '');\n      const liId = `li${index}`;\n      const inputContainer = document.getElementById(liId);\n      const moveDivId = `mv${index}`;\n      const moveDiv = document.getElementById(moveDivId);\n      const deleteDivId = `del${index}`;\n      const deleteDiv = document.getElementById(deleteDivId);\n      const liFocus = document.querySelector('.liFocus');\n      const hidden = document.querySelector('.hidetemp');\n      const visible = document.querySelector('.visible');\n      const inFocus = document.querySelector('.inFocus');\n      if (visible) {\n        visible.classList.remove('visible');\n      }\n      if (hidden) {\n        hidden.classList.remove('hidetemp');\n      }\n      if (liFocus) {\n        liFocus.classList.remove('liFocus');\n      }\n      if (inFocus) {\n        inFocus.classList.remove('inFocus');\n      }\n      inputContainer.classList.add('liFocus');\n      moveDiv.classList.add('hidetemp');\n      deleteDiv.classList.add('visible');\n      input.classList.add('inFocus');\n      input.addEventListener('change', (e) => {\n        const { value } = e.target;\n        newList.update(index, value);\n      });\n    }\n  };\n  const draggables = document.querySelectorAll('.draggable');\n  draggables.forEach((draggable) => {\n    draggable.addEventListener('dragstart', () => {\n      draggable.classList.add('dragging');\n    });\n    draggable.addEventListener('dragend', () => {\n      draggable.classList.remove('dragging');\n    });\n  });\n  const container = document.getElementById('list');\n  container.addEventListener('dragover', (e) => {\n    e.preventDefault();\n    const afterElement = (0,_drag_js__WEBPACK_IMPORTED_MODULE_2__.default)(container, e.clientY);\n    const draggable = document.querySelector('.dragging');\n    if (afterElement == null) {\n      // end of list\n      container.appendChild(draggable);\n    } else {\n      // insert before (after element)\n      container.insertBefore(draggable, afterElement);\n    }\n  });\n  container.addEventListener('drop', (event) => {\n    event.preventDefault();\n    newList.arrangeTodos();\n    newList.updateLocalStorage(true, true);\n    // reload the page to refresh the event EventListener\n    eventListener();\n  }, false);\n};\n// This first function ensures that the document has being already created\ndocument.addEventListener('DOMContentLoaded', () => {\n  eventListener();\n  const addButton = document.getElementById('add');\n  addButton.addEventListener('click', () => {\n    const input = document.getElementById('todoInput');\n    const text = input.value;\n    if (text !== '') {\n      newList.addNew(text);\n      input.value = '';\n      eventListener();\n    }\n  });\n  const clearAllButton = document.getElementById('clearAll');\n  clearAllButton.addEventListener('click', () => {\n    newList.clearAll();\n    eventListener();\n  });\n});\n\n//# sourceURL=webpack://JS-Todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/list.js":
/*!************************!*\
  !*** ./src/js/list.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ todoList)\n/* harmony export */ });\nclass todoList {\n  constructor() {\n    this.todos = [];\n    this.updateLocalStorage();\n  }\n\naddNew = (value) => {\n  const index = this.todos.length;\n  const newtodo = {\n    index,\n    description: value,\n    completed: false,\n  };\n  this.todos.push(newtodo);\n  this.updateLocalStorage(true, true);\n}\n\nremove = (index) => {\n  this.todos.splice(index, 1);\n  this.updateIndex();\n  this.updateLocalStorage(true, false);\n}\n\nupdate = (index, value) => {\n  this.todos[index].description = value;\n  this.updateLocalStorage(true, false, false);\n}\n\nclearAll = () => {\n  this.todos = this.todos.filter((todo) => !todo.completed);\n  this.updateIndex();\n  this.updateLocalStorage(true, false, true);\n}\n\nupdateIndex = () => {\n  const temp = [];\n  let counter = 0;\n  this.todos.forEach((item) => {\n    const todo = {\n      index: counter,\n      description: item.description,\n      completed: item.completed,\n    };\n    temp.push(todo);\n    counter += 1;\n  });\n  this.todos = temp;\n}\n\nsortList = () => {\n  this.todos.sort((todoA, todoB) => {\n    if (todoA.index < todoB.index) {\n      return -1;\n    }\n    if (todoA.index > todoB.index) {\n      return 1;\n    }\n    return 0;\n  });\n};\n\ndisplayList = () => {\n  const section = document.getElementById('todos');\n  const list = document.createElement('ul');\n  list.id = 'list';\n  this.todos.forEach((todo) => {\n    const { description, completed, index } = todo;\n    const liId = `li${index}`;\n    const checkboxId = `ch${index}`;\n    const inputId = `in${index}`;\n    const moveDiv = `mv${index}`;\n    const deleteDiv = `del${index}`;\n    let todoCard = `<li id=${liId} class=\"todo draggable\" draggable=\"true\"><div class=\"todoContent\">`;\n    if (completed) {\n      todoCard += `<input type=\"checkbox\" name=\"todoCheck\" class=\"todoCheck\" checked id=\"${checkboxId}\">`;\n    } else {\n      todoCard += `<input type=\"checkbox\" name=\"todoCheck\" class=\"todoCheck\" id=\"${checkboxId}\">`;\n    }\n    todoCard += `\n      <input type=\"text\" class=\"description\" id=\"${inputId}\" value=\"${description}\">\n      </div>\n      <div id=\"${moveDiv}\" class=\"draggableAria\">\n        <i class=\"fas fa-ellipsis-v\"></i>\n      <div>\n      <div id=\"${deleteDiv}\" class=\"deleteDiv hidden\">\n        <i id=\"i${deleteDiv}\" class=\"fas fa-trash-alt\"></i>\n      <div>\n      </li>`;\n    list.insertAdjacentHTML('beforeend', todoCard);\n  });\n  section.innerHTML = '';\n  section.appendChild(list);\n};\n\nupdateLocalStorage = (update, sort, display = true) => {\n  const listFromStorage = window.localStorage.getItem('todos');\n  if (update) {\n    // update local storage\n    if (sort) {\n      this.sortList();\n    }\n    window.localStorage.setItem('todos', JSON.stringify(this.todos));\n  } else if (listFromStorage != null) {\n    // get data from local storage\n    this.todos = JSON.parse(window.localStorage.getItem('todos'));\n  } else {\n    // inialize local storage\n    this.sortList();\n    window.localStorage.setItem('todos', JSON.stringify(this.todos));\n  }\n  if (display) {\n    this.displayList();\n  }\n};\n\nupdateStatus = (index) => {\n  this.todos[index].completed = !(this.todos[index].completed);\n  this.updateLocalStorage(true, false, false);\n};\n\narrangeTodos = () => {\n  const container = document.getElementById('list');\n  const children = container.childNodes;\n  const childarray = [...children];\n  let index = 0;\n  const temp = [];\n  childarray.forEach((item) => {\n    const { id } = item;\n    const newIndex = ((id).replace('li', '')).replace('li', '');\n    const todo = {\n      index,\n      description: this.todos[newIndex].description,\n      completed: this.todos[newIndex].completed,\n    };\n    temp.push(todo);\n    index += 1;\n  });\n  this.todos = temp;\n};\n}\n\n\n//# sourceURL=webpack://JS-Todo-list/./src/js/list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;