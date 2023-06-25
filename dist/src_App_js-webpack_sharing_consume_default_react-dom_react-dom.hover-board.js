"use strict";
(self["webpackChunkhover_board"] = self["webpackChunkhover_board"] || []).push([["src_App_js-webpack_sharing_consume_default_react-dom_react-dom"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/common */ "./src/modules/common/index.js");
/* harmony import */ var _modules_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/loader */ "./src/modules/loader/index.js");
/* harmony import */ var _modules_controllersContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/controllersContainer */ "./src/modules/controllersContainer/index.js");
/* harmony import */ var _modules_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/table */ "./src/modules/table/index.js");
/* harmony import */ var _modules_hoverLogger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/hoverLogger */ "./src/modules/hoverLogger/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./src/context/index.js");
/* harmony import */ var Api_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Api/index.js */ "./src/api/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var initialAppContext = {
  modes: null,
  pickedMode: null,
  hoverHistory: []
};
function App() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialAppContext),
    _useState2 = _slicedToArray(_useState, 2),
    appState = _useState2[0],
    setAppState = _useState2[1];
  var _getModes = (0,Api_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(),
    boardSizes = _getModes.boardSizes;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setTimeout(function () {
      setAppState(function (state) {
        return _objectSpread(_objectSpread({}, state), {}, {
          modes: boardSizes
        });
      });
    }, 350);
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: {
      appState: appState,
      setAppState: setAppState
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_common__WEBPACK_IMPORTED_MODULE_1__.Container, null, appState.modes ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_common__WEBPACK_IMPORTED_MODULE_1__.SubContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_controllersContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    boardSize: appState.pickedMode
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_hoverLogger__WEBPACK_IMPORTED_MODULE_5__["default"], null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modules_loader__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.json */ "./src/api/data.json");

var getModes = function getModes() {
  return _data_json__WEBPACK_IMPORTED_MODULE_0__;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getModes);

/***/ }),

/***/ "./src/context/index.js":
/*!******************************!*\
  !*** ./src/context/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var AppContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppContext);

/***/ }),

/***/ "./src/modules/common/container/index.js":
/*!***********************************************!*\
  !*** ./src/modules/common/container/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/common/container/index.module.scss");


var Container = function Container(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].container
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ "./src/modules/common/index.js":
/*!*************************************!*\
  !*** ./src/modules/common/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* reexport safe */ _container__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   SubContainer: () => (/* reexport safe */ _subContainer__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container */ "./src/modules/common/container/index.js");
/* harmony import */ var _subContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subContainer */ "./src/modules/common/subContainer/index.js");



/***/ }),

/***/ "./src/modules/common/subContainer/index.js":
/*!**************************************************!*\
  !*** ./src/modules/common/subContainer/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/common/subContainer/index.module.scss");


var SubContainer = function SubContainer(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].subContainer
  }, children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubContainer);

/***/ }),

/***/ "./src/modules/controllersContainer/button/index.js":
/*!**********************************************************!*\
  !*** ./src/modules/controllersContainer/button/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/controllersContainer/button/index.module.scss");


var Button = function Button(_ref) {
  var text = _ref.text,
    onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].button,
    onClick: onClick
  }, text);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ "./src/modules/controllersContainer/index.js":
/*!***************************************************!*\
  !*** ./src/modules/controllersContainer/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select */ "./src/modules/controllersContainer/select/index.js");
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button */ "./src/modules/controllersContainer/button/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./src/context/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/controllersContainer/index.module.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var buttonTexts = {
  start: "start"
};
var ControllersContainer = function ControllersContainer() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
    appState = _useContext.appState,
    setAppState = _useContext.setAppState;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(appState.pickedMode),
    _useState2 = _slicedToArray(_useState, 2),
    pickedMode = _useState2[0],
    setPickedMode = _useState2[1];
  var modes = appState.modes;
  var onSetMode = function onSetMode(_ref) {
    var value = _ref.value;
    setPickedMode(value);
  };
  var onStart = function onStart() {
    refreshGame();
    setTimeout(function () {
      startGame();
    }, 0);
  };
  var startGame = function startGame() {
    setAppState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        pickedMode: pickedMode
      });
    });
  };
  var refreshGame = function refreshGame() {
    setAppState(function (prevState) {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        pickedMode: null,
        hoverHistory: []
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].controllersContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_select__WEBPACK_IMPORTED_MODULE_1__["default"], {
    modes: modes,
    onChange: onSetMode
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onStart,
    text: buttonTexts.start
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ControllersContainer);

/***/ }),

/***/ "./src/modules/controllersContainer/select/index.js":
/*!**********************************************************!*\
  !*** ./src/modules/controllersContainer/select/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var Api_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Api/index.js */ "./src/api/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/controllersContainer/select/index.module.scss");




var SelectModule = function SelectModule(_ref) {
  var modes = _ref.modes,
    onChange = _ref.onChange;
  var _getModes = (0,Api_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(),
    selectLabels = _getModes.selectLabels;
  var modesKeys = Object.keys(modes);
  var selectOptions = modesKeys.map(function (key) {
    return {
      value: modes[key].field,
      label: selectLabels[key]
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].select,
    options: selectOptions,
    placeholder: selectLabels["default"],
    onChange: onChange
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectModule);

/***/ }),

/***/ "./src/modules/hoverLogger/index.js":
/*!******************************************!*\
  !*** ./src/modules/hoverLogger/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../context */ "./src/context/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/hoverLogger/index.module.scss");



var HoverLogger = function HoverLogger() {
  var lastItemRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__["default"]),
    appState = _useContext.appState;
  var hoverHistory = appState.hoverHistory;
  var scrollToBottom = function scrollToBottom() {
    var _lastItemRef$current;
    (_lastItemRef$current = lastItemRef.current) === null || _lastItemRef$current === void 0 ? void 0 : _lastItemRef$current.scrollIntoView({
      behavior: "smooth"
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    scrollToBottom();
  }, [hoverHistory]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].hoverBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].title
  }, "Hover squares"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].list
  }, hoverHistory.map(function (_ref, idx) {
    var row = _ref.row,
      col = _ref.col;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: idx,
      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].item
    }, "row: ", row, " col: ", col);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    ref: lastItemRef
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HoverLogger);

/***/ }),

/***/ "./src/modules/loader/index.js":
/*!*************************************!*\
  !*** ./src/modules/loader/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/loader/index.module.scss");



var CustomLoader = function CustomLoader() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].loaderContainer
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.ColorRing, {
    visible: true,
    height: "80",
    width: "80",
    ariaLabel: "blocks-loading",
    wrapperStyle: {},
    wrapperClass: "blocks-wrapper",
    colors: ['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomLoader);

/***/ }),

/***/ "./src/modules/table/ceil/index.js":
/*!*****************************************!*\
  !*** ./src/modules/table/ceil/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
/* harmony import */ var classnames_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../context */ "./src/context/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/table/ceil/index.module.scss");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




var ceilStyle = function ceilStyle(boardSize) {
  return classnames_bind__WEBPACK_IMPORTED_MODULE_1___default()([_index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].defaultCeil], boardSize === 10 ? [_index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].mediumCeil] : boardSize === 15 ? [_index_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].smallCeil] : null);
};
var Ceil = function Ceil(_ref) {
  var boardSize = _ref.boardSize,
    idx = _ref.idx;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
    setAppState = _useContext.setAppState;
  var handleHover = function handleHover(_ref2) {
    var target = _ref2.target;
    var hovered = target.getAttribute("hovered");
    var hoverInfo = {
      row: target.parentNode.getAttribute("row"),
      col: target.getAttribute("col")
    };
    changeHoverHistory(hoverInfo);
    changeStyles(target, hovered);
  };
  var changeStyles = function changeStyles(el, hovered) {
    if (hovered === "false") {
      el.setAttribute("hovered", "true");
    } else {
      el.setAttribute("hovered", "false");
    }
  };
  var changeHoverHistory = function changeHoverHistory(hoverInfo) {
    setAppState(function (state) {
      return _objectSpread(_objectSpread({}, state), {}, {
        hoverHistory: [].concat(_toConsumableArray(state.hoverHistory), [hoverInfo])
      });
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    col: idx,
    className: ceilStyle(boardSize),
    onMouseEnter: handleHover,
    hovered: "false"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ceil);

/***/ }),

/***/ "./src/modules/table/index.js":
/*!************************************!*\
  !*** ./src/modules/table/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row */ "./src/modules/table/row/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/table/index.module.scss");



var GameTable = function GameTable(_ref) {
  var boardSize = _ref.boardSize;
  var board = Array(boardSize).fill(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, boardSize ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].gameBoard
  }, board.map(function (_, idx, arr) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_row__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: idx,
      idx: idx,
      arr: arr
    });
  })) : null);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameTable);

/***/ }),

/***/ "./src/modules/table/row/index.js":
/*!****************************************!*\
  !*** ./src/modules/table/row/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ceil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ceil */ "./src/modules/table/ceil/index.js");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.module.scss */ "./src/modules/table/row/index.module.scss");



var Row = function Row(_ref) {
  var idx = _ref.idx,
    arr = _ref.arr;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].row,
    row: idx + 1
  }, arr.map(function (_, idx) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ceil__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: idx,
      boardSize: arr.length,
      idx: idx + 1,
      checked: "false"
    });
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ }),

/***/ "./src/modules/common/container/index.module.scss":
/*!********************************************************!*\
  !*** ./src/modules/common/container/index.module.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"container":"mF37rJUk7SQWXya9PJPh"});
    if(true) {
      // 1687716865164
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/common/subContainer/index.module.scss":
/*!***********************************************************!*\
  !*** ./src/modules/common/subContainer/index.module.scss ***!
  \***********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"subContainer":"mvAsxtl8pNo0cBzerKUd"});
    if(true) {
      // 1687716865184
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/controllersContainer/button/index.module.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/controllersContainer/button/index.module.scss ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"button":"y4iGrS9KQ1X_tVvd77lI"});
    if(true) {
      // 1687716865167
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/controllersContainer/index.module.scss":
/*!************************************************************!*\
  !*** ./src/modules/controllersContainer/index.module.scss ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"controllersContainer":"bgurpnmlxFQete4k6YZq"});
    if(true) {
      // 1687716865112
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/controllersContainer/select/index.module.scss":
/*!*******************************************************************!*\
  !*** ./src/modules/controllersContainer/select/index.module.scss ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"select":"jQrlBlMFKtrh1d4um_OT"});
    if(true) {
      // 1687716865160
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/hoverLogger/index.module.scss":
/*!***************************************************!*\
  !*** ./src/modules/hoverLogger/index.module.scss ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"hoverBox":"C4ZQ222VW8WCgjxSkqzA","title":"HO0P4zLnlOSkoo9NabdH","list":"tElE2PGYOiF36EMWsOMY","item":"PC18AIHEZASaqFfyb1V7"});
    if(true) {
      // 1687716865118
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/loader/index.module.scss":
/*!**********************************************!*\
  !*** ./src/modules/loader/index.module.scss ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"loaderContainer":"Yb8rOBbElmBTG16VZyq_"});
    if(true) {
      // 1687716865115
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/table/ceil/index.module.scss":
/*!**************************************************!*\
  !*** ./src/modules/table/ceil/index.module.scss ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"defaultCeil":"y2JIhlSOBnRJ0MyBvQEC","mediumCeil":"tnK7iFdMkezE7Zq_FKL4","smallCeil":"ulg8YjaFgs6pS6ZxdcIf"});
    if(true) {
      // 1687716865578
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/table/index.module.scss":
/*!*********************************************!*\
  !*** ./src/modules/table/index.module.scss ***!
  \*********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"gameBoard":"eISv06SGQmdDpa0eHFvT"});
    if(true) {
      // 1687716865109
      var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/modules/table/row/index.module.scss":
/*!*************************************************!*\
  !*** ./src/modules/table/row/index.module.scss ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"row":"J0Wa03EEq6wWGpHLsAr1"});
    if(true) {
      // 1687716865208
      var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {"locals":true});
      module.hot.dispose(cssReload);
      
    }
  

/***/ }),

/***/ "./src/api/data.json":
/*!***************************!*\
  !*** ./src/api/data.json ***!
  \***************************/
/***/ ((module) => {

module.exports = JSON.parse('{"selectLabels":{"default":"Pick mode","easyMode":"Easy mode","normalMode":"Normal mode","hardMode":"Hard mode"},"boardSizes":{"default":{"field":null},"easyMode":{"field":3},"normalMode":{"field":9},"hardMode":{"field":12}}}');

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0FwcF9qcy13ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LWRvbV9yZWFjdC1kb20uaG92ZXItYm9hcmQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNRO0FBQ2Y7QUFDc0I7QUFDMUI7QUFDUTtBQUNiO0FBQ0M7QUFFbkMsSUFBTVcsaUJBQWlCLEdBQUc7RUFDdEJDLEtBQUssRUFBRSxJQUFJO0VBQ1hDLFVBQVUsRUFBRSxJQUFJO0VBQ2hCQyxZQUFZLEVBQUU7QUFDbEIsQ0FBQztBQUVELFNBQVNDLEdBQUdBLENBQUEsRUFBRztFQUNYLElBQUFDLFNBQUEsR0FBZ0NkLCtDQUFRLENBQUNTLGlCQUFpQixDQUFDO0lBQUFNLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQXBERyxRQUFRLEdBQUFGLFVBQUE7SUFBRUcsV0FBVyxHQUFBSCxVQUFBO0VBQzVCLElBQUFJLFNBQUEsR0FBdUJYLHdEQUFRLENBQUMsQ0FBQztJQUF6QlksVUFBVSxHQUFBRCxTQUFBLENBQVZDLFVBQVU7RUFFbEJyQixnREFBUyxDQUFDLFlBQU07SUFDWnNCLFVBQVUsQ0FBQyxZQUFNO01BQ2JILFdBQVcsQ0FBQyxVQUFDSSxLQUFLO1FBQUEsT0FBQUMsYUFBQSxDQUFBQSxhQUFBLEtBQVdELEtBQUs7VUFBRVosS0FBSyxFQUFFVTtRQUFVO01BQUEsQ0FBRyxDQUFDO0lBQzdELENBQUMsRUFBRSxHQUFHLENBQUM7RUFDWCxDQUFDLEVBQUUsRUFBRSxDQUFDO0VBRU4sb0JBQ0l0QiwwREFBQSxDQUFDUyxnREFBVSxDQUFDa0IsUUFBUTtJQUFDQyxLQUFLLEVBQUU7TUFBRVQsUUFBUSxFQUFSQSxRQUFRO01BQUVDLFdBQVcsRUFBWEE7SUFBWTtFQUFFLGdCQUNsRHBCLDBEQUFBLENBQUNHLHNEQUFTLFFBQ0xnQixRQUFRLENBQUNQLEtBQUssZ0JBQ1haLDBEQUFBLENBQUFBLHVEQUFBLHFCQUNJQSww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QU0sVUFBVTtBQUNoQjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQSxpRUFBZSxDQUFDLDRHQUE0RyxFQUFDO0FBQzdILE9BQU8sSUFBVTtBQUNqQjtBQUNBLHNCQUFzQixtQkFBTyxDQUFDLGtLQUFtRixjQUFjLGNBQWM7QUFDN0ksTUFBTSxVQUFVO0FBQ2hCO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBLGlFQUFlLENBQUMsbUNBQW1DLEVBQUM7QUFDcEQsT0FBTyxJQUFVO0FBQ2pCO0FBQ0Esc0JBQXNCLG1CQUFPLENBQUMsK0pBQWdGLGNBQWMsY0FBYztBQUMxSSxNQUFNLFVBQVU7QUFDaEI7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0EsaUVBQWUsQ0FBQyw2QkFBNkIsRUFBQztBQUM5QyxPQUFPLElBQVU7QUFDakI7QUFDQSxzQkFBc0IsbUJBQU8sQ0FBQyxrS0FBbUYsY0FBYyxjQUFjO0FBQzdJLE1BQU0sVUFBVTtBQUNoQjtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3Zlci1ib2FyZC8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvYXBpL2luZGV4LmpzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tb24vY29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvY29tbW9uL3N1YkNvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob3Zlci1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzQ29udGFpbmVyL2J1dHRvbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ob3Zlci1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzQ29udGFpbmVyL2luZGV4LmpzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvY29udHJvbGxlcnNDb250YWluZXIvc2VsZWN0L2luZGV4LmpzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvaG92ZXJMb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy90YWJsZS9jZWlsL2luZGV4LmpzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy90YWJsZS9yb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy9jb21tb24vY29udGFpbmVyL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvY29tbW9uL3N1YkNvbnRhaW5lci9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9ob3Zlci1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzQ29udGFpbmVyL2J1dHRvbi9pbmRleC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9ob3Zlci1ib2FyZC8uL3NyYy9tb2R1bGVzL2NvbnRyb2xsZXJzQ29udGFpbmVyL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvY29udHJvbGxlcnNDb250YWluZXIvc2VsZWN0L2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvaG92ZXJMb2dnZXIvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy9sb2FkZXIvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy90YWJsZS9jZWlsL2luZGV4Lm1vZHVsZS5zY3NzIiwid2VicGFjazovL2hvdmVyLWJvYXJkLy4vc3JjL21vZHVsZXMvdGFibGUvaW5kZXgubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvbW9kdWxlcy90YWJsZS9yb3cvaW5kZXgubW9kdWxlLnNjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBTdWJDb250YWluZXIgfSBmcm9tICcuL21vZHVsZXMvY29tbW9uJ1xyXG5pbXBvcnQgQ3VzdG9tTG9hZGVyIGZyb20gJy4vbW9kdWxlcy9sb2FkZXInXHJcbmltcG9ydCBDb250cm9sbGVyc0NvbnRhaW5lciBmcm9tICcuL21vZHVsZXMvY29udHJvbGxlcnNDb250YWluZXInXHJcbmltcG9ydCBHYW1lVGFibGUgZnJvbSAnLi9tb2R1bGVzL3RhYmxlJ1xyXG5pbXBvcnQgSG92ZXJMb2dnZXIgZnJvbSAnLi9tb2R1bGVzL2hvdmVyTG9nZ2VyJ1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tICcuL2NvbnRleHQnXHJcbmltcG9ydCBnZXRNb2RlcyBmcm9tICdBcGkvaW5kZXguanMnXHJcblxyXG5jb25zdCBpbml0aWFsQXBwQ29udGV4dCA9IHtcclxuICAgIG1vZGVzOiBudWxsLFxyXG4gICAgcGlja2VkTW9kZTogbnVsbCxcclxuICAgIGhvdmVySGlzdG9yeTogW10sXHJcbn1cclxuXHJcbmZ1bmN0aW9uIEFwcCgpIHtcclxuICAgIGNvbnN0IFthcHBTdGF0ZSwgc2V0QXBwU3RhdGVdID0gdXNlU3RhdGUoaW5pdGlhbEFwcENvbnRleHQpXHJcbiAgICBjb25zdCB7IGJvYXJkU2l6ZXMgfSA9IGdldE1vZGVzKClcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBzZXRBcHBTdGF0ZSgoc3RhdGUpID0+ICh7IC4uLnN0YXRlLCBtb2RlczogYm9hcmRTaXplcyB9KSlcclxuICAgICAgICB9LCAzNTApXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcHBDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGFwcFN0YXRlLCBzZXRBcHBTdGF0ZSB9fT5cclxuICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIHthcHBTdGF0ZS5tb2RlcyA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3ViQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRyb2xsZXJzQ29udGFpbmVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8R2FtZVRhYmxlIGJvYXJkU2l6ZT17YXBwU3RhdGUucGlja2VkTW9kZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdWJDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxIb3ZlckxvZ2dlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tTG9hZGVyIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0FwcENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcFxyXG4iLCJpbXBvcnQgZmllbGRDb25maWcgZnJvbSAnLi9kYXRhLmpzb24nXHJcblxyXG5jb25zdCBnZXRNb2RlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmaWVsZENvbmZpZ1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRNb2Rlc1xyXG4iLCJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBBcHBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwQ29udGV4dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PntjaGlsZHJlbn08L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFpbmVyOyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vY29udGFpbmVyXCI7XHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU3ViQ29udGFpbmVyIH0gZnJvbSBcIi4vc3ViQ29udGFpbmVyXCI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgU3ViQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3ViQ29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTdWJDb250YWluZXI7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgQnV0dG9uID0gKHsgdGV4dCwgb25DbGljayB9KSA9PiAoXHJcbiAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgIHt0ZXh0fVxyXG4gIDwvYnV0dG9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNlbGVjdCBmcm9tIFwiLi9zZWxlY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSBcIi4uLy4uL2NvbnRleHRcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuXHJcbmNvbnN0IGJ1dHRvblRleHRzID0ge1xyXG4gIHN0YXJ0OiBcInN0YXJ0XCIsXHJcbn07XHJcblxyXG5jb25zdCBDb250cm9sbGVyc0NvbnRhaW5lciA9ICgpID0+IHtcclxuICBjb25zdCB7IGFwcFN0YXRlLCBzZXRBcHBTdGF0ZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuICBjb25zdCBbcGlja2VkTW9kZSwgc2V0UGlja2VkTW9kZV0gPSB1c2VTdGF0ZShhcHBTdGF0ZS5waWNrZWRNb2RlKTtcclxuXHJcbiAgY29uc3QgeyBtb2RlcyB9ID0gYXBwU3RhdGU7XHJcblxyXG4gIGNvbnN0IG9uU2V0TW9kZSA9ICh7IHZhbHVlIH0pID0+IHtcclxuICAgIHNldFBpY2tlZE1vZGUodmFsdWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uU3RhcnQgPSAoKSA9PiB7XHJcbiAgICByZWZyZXNoR2FtZSgpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzdGFydEdhbWUoKTtcclxuICAgIH0sIDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+IHtcclxuICAgIHNldEFwcFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgcGlja2VkTW9kZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICBjb25zdCByZWZyZXNoR2FtZSA9ICgpID0+IHtcclxuICAgIHNldEFwcFN0YXRlKChwcmV2U3RhdGUpID0+ICh7XHJcbiAgICAgIC4uLnByZXZTdGF0ZSxcclxuICAgICAgcGlja2VkTW9kZTogbnVsbCxcclxuICAgICAgaG92ZXJIaXN0b3J5OiBbXSxcclxuICAgIH0pKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sbGVyc0NvbnRhaW5lcn0+XHJcbiAgICAgIDxTZWxlY3QgbW9kZXM9e21vZGVzfSBvbkNoYW5nZT17b25TZXRNb2RlfSAvPlxyXG4gICAgICA8QnV0dG9uIG9uQ2xpY2s9e29uU3RhcnR9IHRleHQ9e2J1dHRvblRleHRzLnN0YXJ0fSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRyb2xsZXJzQ29udGFpbmVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAncmVhY3Qtc2VsZWN0J1xyXG5pbXBvcnQgZ2V0TW9kZXMgZnJvbSAnQXBpL2luZGV4LmpzJ1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xyXG5cclxuY29uc3QgU2VsZWN0TW9kdWxlID0gKHsgbW9kZXMsIG9uQ2hhbmdlIH0pID0+IHtcclxuICAgIGNvbnN0IHsgc2VsZWN0TGFiZWxzIH0gPSBnZXRNb2RlcygpXHJcbiAgICBjb25zdCBtb2Rlc0tleXMgPSBPYmplY3Qua2V5cyhtb2RlcylcclxuXHJcbiAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gbW9kZXNLZXlzLm1hcCgoa2V5KSA9PiAoe1xyXG4gICAgICAgIHZhbHVlOiBtb2Rlc1trZXldLmZpZWxkLFxyXG4gICAgICAgIGxhYmVsOiBzZWxlY3RMYWJlbHNba2V5XSxcclxuICAgIH0pKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3R9XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3NlbGVjdE9wdGlvbnN9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtzZWxlY3RMYWJlbHMuZGVmYXVsdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgID48L1NlbGVjdD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0TW9kdWxlXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vY29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgSG92ZXJMb2dnZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgbGFzdEl0ZW1SZWYgPSB1c2VSZWYobnVsbCk7XHJcblxyXG4gIGNvbnN0IHsgYXBwU3RhdGUgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dCk7XHJcbiAgY29uc3QgeyBob3Zlckhpc3RvcnkgfSA9IGFwcFN0YXRlO1xyXG5cclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIGxhc3RJdGVtUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKCk7XHJcbiAgfSwgW2hvdmVySGlzdG9yeV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3ZlckJveH0+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+SG92ZXIgc3F1YXJlczwvaDI+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICB7aG92ZXJIaXN0b3J5Lm1hcCgoeyByb3csIGNvbCB9LCBpZHgpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2lkeH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgIHJvdzoge3Jvd30gY29sOiB7Y29sfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICA8bGkgcmVmPXtsYXN0SXRlbVJlZn0gLz5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb3ZlckxvZ2dlcjtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDb2xvclJpbmcgfSBmcm9tICdyZWFjdC1sb2FkZXItc3Bpbm5lcidcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2NzcydcclxuXHJcbmNvbnN0IEN1c3RvbUxvYWRlciA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJDb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8Q29sb3JSaW5nXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiODBcIlxyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI4MFwiXHJcbiAgICAgICAgICAgICAgICBhcmlhTGFiZWw9XCJibG9ja3MtbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPVwiYmxvY2tzLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgY29sb3JzPXtbJyNlMTViNjQnLCAnI2Y0N2U2MCcsICcjZjhiMjZhJywgJyNhYmJkODEnLCAnIzg0OWI4NyddfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Mb2FkZXJcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXMvYmluZFwiO1xyXG5pbXBvcnQgQXBwQ29udGV4dCBmcm9tIFwiLi4vLi4vLi4vY29udGV4dFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9pbmRleC5tb2R1bGUuc2Nzc1wiO1xyXG5cclxuY29uc3QgY2VpbFN0eWxlID0gKGJvYXJkU2l6ZSkgPT5cclxuICBjbGFzc05hbWVzKFxyXG4gICAgW3N0eWxlcy5kZWZhdWx0Q2VpbF0sXHJcbiAgICBib2FyZFNpemUgPT09IDEwXHJcbiAgICAgID8gW3N0eWxlcy5tZWRpdW1DZWlsXVxyXG4gICAgICA6IGJvYXJkU2l6ZSA9PT0gMTVcclxuICAgICAgPyBbc3R5bGVzLnNtYWxsQ2VpbF1cclxuICAgICAgOiBudWxsXHJcbiAgKTtcclxuXHJcbmNvbnN0IENlaWwgPSAoeyBib2FyZFNpemUsIGlkeCB9KSA9PiB7XHJcbiAgY29uc3QgeyBzZXRBcHBTdGF0ZSB9ID0gdXNlQ29udGV4dChBcHBDb250ZXh0KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgY29uc3QgaG92ZXJlZCA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJob3ZlcmVkXCIpO1xyXG5cclxuICAgIGNvbnN0IGhvdmVySW5mbyA9IHtcclxuICAgICAgcm93OiB0YXJnZXQucGFyZW50Tm9kZS5nZXRBdHRyaWJ1dGUoXCJyb3dcIiksXHJcbiAgICAgIGNvbDogdGFyZ2V0LmdldEF0dHJpYnV0ZShcImNvbFwiKSxcclxuICAgIH07XHJcblxyXG4gICAgY2hhbmdlSG92ZXJIaXN0b3J5KGhvdmVySW5mbyk7XHJcbiAgICBjaGFuZ2VTdHlsZXModGFyZ2V0LCBob3ZlcmVkKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBjaGFuZ2VTdHlsZXMgPSAoZWwsIGhvdmVyZWQpID0+IHtcclxuICAgIGlmIChob3ZlcmVkID09PSBcImZhbHNlXCIpIHtcclxuICAgICAgZWwuc2V0QXR0cmlidXRlKFwiaG92ZXJlZFwiLCBcInRydWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJob3ZlcmVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2hhbmdlSG92ZXJIaXN0b3J5ID0gKGhvdmVySW5mbykgPT4ge1xyXG4gICAgc2V0QXBwU3RhdGUoKHN0YXRlKSA9PiAoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgaG92ZXJIaXN0b3J5OiBbLi4uc3RhdGUuaG92ZXJIaXN0b3J5LCBob3ZlckluZm9dLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNvbD17aWR4fVxyXG4gICAgICBjbGFzc05hbWU9e2NlaWxTdHlsZShib2FyZFNpemUpfVxyXG4gICAgICBvbk1vdXNlRW50ZXI9e2hhbmRsZUhvdmVyfVxyXG4gICAgICBob3ZlcmVkPVwiZmFsc2VcIlxyXG4gICAgPjwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDZWlsO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBSb3cgZnJvbSBcIi4vcm93XCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBHYW1lVGFibGUgPSAoeyBib2FyZFNpemUgfSkgPT4ge1xyXG4gIGNvbnN0IGJvYXJkID0gQXJyYXkoYm9hcmRTaXplKS5maWxsKG51bGwpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2JvYXJkU2l6ZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdhbWVCb2FyZH0+XHJcbiAgICAgICAgICB7Ym9hcmQubWFwKChfLCBpZHgsIGFycikgPT4gKFxyXG4gICAgICAgICAgICA8Um93IGtleT17aWR4fSBpZHg9e2lkeH0gYXJyPXthcnJ9IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVRhYmxlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDZWlsIGZyb20gXCIuLi9jZWlsXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5zY3NzXCI7XHJcblxyXG5jb25zdCBSb3cgPSAoeyBpZHgsIGFyciB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucm93fSByb3c9e2lkeCArIDF9PlxyXG4gICAgICB7YXJyLm1hcCgoXywgaWR4KSA9PiAoXHJcbiAgICAgICAgPENlaWwga2V5PXtpZHh9IGJvYXJkU2l6ZT17YXJyLmxlbmd0aH0gaWR4PXtpZHggKyAxfSBjaGVja2VkPVwiZmFsc2VcIiAvPlxyXG4gICAgICApKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3c7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udGFpbmVyXCI6XCJtRjM3ckpVazdTUVdYeWE5UEpQaFwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjg3NzE2ODY1MTY0XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcInN1YkNvbnRhaW5lclwiOlwibXZBc3h0bDhwTm8wY0J6ZXJLVWRcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NzcxNjg2NTE4NFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJidXR0b25cIjpcInk0aUdyUzlLUTFYX3RWdmQ3N2xJXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODc3MTY4NjUxNjdcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiY29udHJvbGxlcnNDb250YWluZXJcIjpcImJndXJwbm1seEZRZXRlNGs2WVpxXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODc3MTY4NjUxMTJcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wic2VsZWN0XCI6XCJqUXJsQmxNRkt0cmgxZDR1bV9PVFwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjg3NzE2ODY1MTYwXG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImhvdmVyQm94XCI6XCJDNFpRMjIyVlc4V0NnanhTa3F6QVwiLFwidGl0bGVcIjpcIkhPMFA0ekxubE9Ta29vOU5hYmRIXCIsXCJsaXN0XCI6XCJ0RWxFMlBHWU9pRjM2RU1Xc09NWVwiLFwiaXRlbVwiOlwiUEMxOEFJSEVaQVNhcUZmeWIxVjdcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NzcxNjg2NTExOFxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJsb2FkZXJDb250YWluZXJcIjpcIlliOHJPQmJFbG1CVEcxNlZaeXFfXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODc3MTY4NjUxMTVcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IGRlZmF1bHQge1wiZGVmYXVsdENlaWxcIjpcInkySklobFNPQm5SSjBNeUJ2UUVDXCIsXCJtZWRpdW1DZWlsXCI6XCJ0bks3aUZkTWtlekU3WnFfRktMNFwiLFwic21hbGxDZWlsXCI6XCJ1bGc4WWphRmdzNnBTNlp4ZGNJZlwifTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjg3NzE2ODY1NTc4XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHtcImxvY2Fsc1wiOnRydWV9KTtcbiAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShjc3NSZWxvYWQpO1xuICAgICAgXG4gICAgfVxuICAiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCBkZWZhdWx0IHtcImdhbWVCb2FyZFwiOlwiZUlTdjA2U0dRbWREcGEwZUhGdlRcIn07XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgLy8gMTY4NzcxNjg2NTEwOVxuICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJsb2NhbHNcIjp0cnVlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIFxuICAgIH1cbiAgIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQgZGVmYXVsdCB7XCJyb3dcIjpcIkowV2EwM0VFcTZ3V0dwSExzQXIxXCJ9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIC8vIDE2ODc3MTY4NjUyMDhcbiAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge1wibG9jYWxzXCI6dHJ1ZX0pO1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGNzc1JlbG9hZCk7XG4gICAgICBcbiAgICB9XG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ29udGFpbmVyIiwiU3ViQ29udGFpbmVyIiwiQ3VzdG9tTG9hZGVyIiwiQ29udHJvbGxlcnNDb250YWluZXIiLCJHYW1lVGFibGUiLCJIb3ZlckxvZ2dlciIsIkFwcENvbnRleHQiLCJnZXRNb2RlcyIsImluaXRpYWxBcHBDb250ZXh0IiwibW9kZXMiLCJwaWNrZWRNb2RlIiwiaG92ZXJIaXN0b3J5IiwiQXBwIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiYXBwU3RhdGUiLCJzZXRBcHBTdGF0ZSIsIl9nZXRNb2RlcyIsImJvYXJkU2l6ZXMiLCJzZXRUaW1lb3V0Iiwic3RhdGUiLCJfb2JqZWN0U3ByZWFkIiwiY3JlYXRlRWxlbWVudCIsIlByb3ZpZGVyIiwidmFsdWUiLCJGcmFnbWVudCIsImJvYXJkU2l6ZSIsImZpZWxkQ29uZmlnIiwiY3JlYXRlQ29udGV4dCIsInN0eWxlcyIsIl9yZWYiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRlZmF1bHQiLCJzdWJDb250YWluZXIiLCJCdXR0b24iLCJ0ZXh0Iiwib25DbGljayIsInR5cGUiLCJidXR0b24iLCJ1c2VDb250ZXh0IiwiU2VsZWN0IiwiYnV0dG9uVGV4dHMiLCJzdGFydCIsIl91c2VDb250ZXh0Iiwic2V0UGlja2VkTW9kZSIsIm9uU2V0TW9kZSIsIm9uU3RhcnQiLCJyZWZyZXNoR2FtZSIsInN0YXJ0R2FtZSIsInByZXZTdGF0ZSIsImNvbnRyb2xsZXJzQ29udGFpbmVyIiwib25DaGFuZ2UiLCJTZWxlY3RNb2R1bGUiLCJzZWxlY3RMYWJlbHMiLCJtb2Rlc0tleXMiLCJPYmplY3QiLCJrZXlzIiwic2VsZWN0T3B0aW9ucyIsIm1hcCIsImtleSIsImZpZWxkIiwibGFiZWwiLCJzZWxlY3QiLCJvcHRpb25zIiwicGxhY2Vob2xkZXIiLCJ1c2VSZWYiLCJsYXN0SXRlbVJlZiIsInNjcm9sbFRvQm90dG9tIiwiX2xhc3RJdGVtUmVmJGN1cnJlbnQiLCJjdXJyZW50Iiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciIsImhvdmVyQm94IiwidGl0bGUiLCJsaXN0IiwiaWR4Iiwicm93IiwiY29sIiwiaXRlbSIsInJlZiIsIkNvbG9yUmluZyIsImxvYWRlckNvbnRhaW5lciIsInZpc2libGUiLCJoZWlnaHQiLCJ3aWR0aCIsImFyaWFMYWJlbCIsIndyYXBwZXJTdHlsZSIsIndyYXBwZXJDbGFzcyIsImNvbG9ycyIsImNsYXNzTmFtZXMiLCJjZWlsU3R5bGUiLCJkZWZhdWx0Q2VpbCIsIm1lZGl1bUNlaWwiLCJzbWFsbENlaWwiLCJDZWlsIiwiaGFuZGxlSG92ZXIiLCJfcmVmMiIsInRhcmdldCIsImhvdmVyZWQiLCJnZXRBdHRyaWJ1dGUiLCJob3ZlckluZm8iLCJwYXJlbnROb2RlIiwiY2hhbmdlSG92ZXJIaXN0b3J5IiwiY2hhbmdlU3R5bGVzIiwiZWwiLCJzZXRBdHRyaWJ1dGUiLCJjb25jYXQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJvbk1vdXNlRW50ZXIiLCJSb3ciLCJib2FyZCIsIkFycmF5IiwiZmlsbCIsImdhbWVCb2FyZCIsIl8iLCJhcnIiLCJsZW5ndGgiLCJjaGVja2VkIl0sInNvdXJjZVJvb3QiOiIifQ==