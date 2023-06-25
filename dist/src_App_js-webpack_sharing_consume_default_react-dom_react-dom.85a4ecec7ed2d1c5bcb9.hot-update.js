"use strict";
self["webpackHotUpdatehover_board"]("src_App_js-webpack_sharing_consume_default_react-dom_react-dom",{

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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX0FwcF9qcy13ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3JlYWN0LWRvbV9yZWFjdC1kb20uODVhNGVjZWM3ZWQyZDFjNWJjYjkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWtEO0FBQ1E7QUFDZjtBQUNzQjtBQUMxQjtBQUNRO0FBQ2I7QUFDQztBQUVuQyxJQUFNVyxpQkFBaUIsR0FBRztFQUN0QkMsS0FBSyxFQUFFLElBQUk7RUFDWEMsVUFBVSxFQUFFLElBQUk7RUFDaEJDLFlBQVksRUFBRTtBQUNsQixDQUFDO0FBRUQsU0FBU0MsR0FBR0EsQ0FBQSxFQUFHO0VBQ1gsSUFBQUMsU0FBQSxHQUFnQ2QsK0NBQVEsQ0FBQ1MsaUJBQWlCLENBQUM7SUFBQU0sVUFBQSxHQUFBQyxjQUFBLENBQUFGLFNBQUE7SUFBcERHLFFBQVEsR0FBQUYsVUFBQTtJQUFFRyxXQUFXLEdBQUFILFVBQUE7RUFDNUIsSUFBQUksU0FBQSxHQUF1Qlgsd0RBQVEsQ0FBQyxDQUFDO0lBQXpCWSxVQUFVLEdBQUFELFNBQUEsQ0FBVkMsVUFBVTtFQUVsQnJCLGdEQUFTLENBQUMsWUFBTTtJQUNac0IsVUFBVSxDQUFDLFlBQU07TUFDYkgsV0FBVyxDQUFDLFVBQUNJLEtBQUs7UUFBQSxPQUFBQyxhQUFBLENBQUFBLGFBQUEsS0FBV0QsS0FBSztVQUFFWixLQUFLLEVBQUVVO1FBQVU7TUFBQSxDQUFHLENBQUM7SUFDN0QsQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUNYLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixvQkFDSXRCLDBEQUFBLENBQUNTLGdEQUFVLENBQUNrQixRQUFRO0lBQUNDLEtBQUssRUFBRTtNQUFFVCxRQUFRLEVBQVJBLFFBQVE7TUFBRUMsV0FBVyxFQUFYQTtJQUFZO0VBQUUsZ0JBQ2xEcEIsMERBQUEsQ0FBQ0csc0RBQVMsUUFDTGdCLFFBQVEsQ0FBQ1AsS0FBSyxnQkFDWFosMERBQUEsQ0FBQUEsdURBQUEscUJBQ0lBLDBEQUFBLENBQUNJLHlEQUFZLHFCQUNUSiwwREFBQSxDQUFDTSxxRUFBb0IsTUFBRSxDQUFDLGVBQ3hCTiwwREFBQSxDQUFDTyxzREFBUztJQUFDdUIsU0FBUyxFQUFFWCxRQUFRLENBQUNOO0VBQVcsQ0FBRSxDQUNsQyxDQUFDLGVBQ2ZiLDBEQUFBLENBQUNRLDREQUFXLE1BQUUsQ0FDaEIsQ0FBQyxnQkFFSFIsMERBQUEsQ0FBQ0ssdURBQVksTUFBRSxDQUVaLENBQ00sQ0FBQztBQUU5QjtBQUVBLGlFQUFlVSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG92ZXItYm9hcmQvLi9zcmMvQXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IENvbnRhaW5lciwgU3ViQ29udGFpbmVyIH0gZnJvbSAnLi9tb2R1bGVzL2NvbW1vbidcclxuaW1wb3J0IEN1c3RvbUxvYWRlciBmcm9tICcuL21vZHVsZXMvbG9hZGVyJ1xyXG5pbXBvcnQgQ29udHJvbGxlcnNDb250YWluZXIgZnJvbSAnLi9tb2R1bGVzL2NvbnRyb2xsZXJzQ29udGFpbmVyJ1xyXG5pbXBvcnQgR2FtZVRhYmxlIGZyb20gJy4vbW9kdWxlcy90YWJsZSdcclxuaW1wb3J0IEhvdmVyTG9nZ2VyIGZyb20gJy4vbW9kdWxlcy9ob3ZlckxvZ2dlcidcclxuaW1wb3J0IEFwcENvbnRleHQgZnJvbSAnLi9jb250ZXh0J1xyXG5pbXBvcnQgZ2V0TW9kZXMgZnJvbSAnQXBpL2luZGV4LmpzJ1xyXG5cclxuY29uc3QgaW5pdGlhbEFwcENvbnRleHQgPSB7XHJcbiAgICBtb2RlczogbnVsbCxcclxuICAgIHBpY2tlZE1vZGU6IG51bGwsXHJcbiAgICBob3Zlckhpc3Rvcnk6IFtdLFxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgICBjb25zdCBbYXBwU3RhdGUsIHNldEFwcFN0YXRlXSA9IHVzZVN0YXRlKGluaXRpYWxBcHBDb250ZXh0KVxyXG4gICAgY29uc3QgeyBib2FyZFNpemVzIH0gPSBnZXRNb2RlcygpXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgc2V0QXBwU3RhdGUoKHN0YXRlKSA9PiAoeyAuLi5zdGF0ZSwgbW9kZXM6IGJvYXJkU2l6ZXMgfSkpXHJcbiAgICAgICAgfSwgMzUwKVxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBwQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBhcHBTdGF0ZSwgc2V0QXBwU3RhdGUgfX0+XHJcbiAgICAgICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICB7YXBwU3RhdGUubW9kZXMgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1YkNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb250cm9sbGVyc0NvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEdhbWVUYWJsZSBib2FyZFNpemU9e2FwcFN0YXRlLnBpY2tlZE1vZGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3ViQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SG92ZXJMb2dnZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPEN1c3RvbUxvYWRlciAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9BcHBDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb250YWluZXIiLCJTdWJDb250YWluZXIiLCJDdXN0b21Mb2FkZXIiLCJDb250cm9sbGVyc0NvbnRhaW5lciIsIkdhbWVUYWJsZSIsIkhvdmVyTG9nZ2VyIiwiQXBwQ29udGV4dCIsImdldE1vZGVzIiwiaW5pdGlhbEFwcENvbnRleHQiLCJtb2RlcyIsInBpY2tlZE1vZGUiLCJob3Zlckhpc3RvcnkiLCJBcHAiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJhcHBTdGF0ZSIsInNldEFwcFN0YXRlIiwiX2dldE1vZGVzIiwiYm9hcmRTaXplcyIsInNldFRpbWVvdXQiLCJzdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJjcmVhdGVFbGVtZW50IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsIkZyYWdtZW50IiwiYm9hcmRTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==