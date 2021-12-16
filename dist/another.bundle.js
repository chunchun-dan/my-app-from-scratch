"use strict";
(self["webpackChunkchucnhun_s_personal_app"] = self["webpackChunkchucnhun_s_personal_app"] || []).push([["another"],{

/***/ "./src/AnotherModule.js":
/*!******************************!*\
  !*** ./src/AnotherModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var AnotherModule = function AnotherModule() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      clicked = _useState2[0],
      setClicked = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    onClick: function onClick() {
      return setClicked(!clicked);
    }
  }, "Click"), clicked && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, "Show"));
};

var domContainer = document.getElementById('another_module');

if (domContainer) {
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AnotherModule, null), domContainer);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/AnotherModule.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vdGhlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsa0JBQThCRiwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQTtBQUFBLE1BQU9HLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBRUEsc0JBQ0UsaUhBQ0U7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNQSxVQUFVLENBQUMsQ0FBQ0QsT0FBRixDQUFoQjtBQUFBO0FBQWpCLGFBREYsRUFJR0EsT0FBTyxpQkFBSyxxRUFKZixDQURGO0FBUUQsQ0FYRDs7QUFhQSxJQUFNRSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsQ0FBckI7O0FBRUEsSUFBSUYsWUFBSixFQUFrQjtBQUNoQkosRUFBQUEsNkNBQUEsZUFDRSxpREFBQyxhQUFELE9BREYsRUFFRUksWUFGRjtBQUlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2h1Y25odW4tcy1wZXJzb25hbC1hcHAvLi9zcmMvQW5vdGhlck1vZHVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcblxuY29uc3QgQW5vdGhlck1vZHVsZSA9ICgpID0+IHtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybihcbiAgICA8PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRDbGlja2VkKCFjbGlja2VkKX0+XG4gICAgICAgIENsaWNrXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIHtjbGlja2VkICYmICg8ZGl2PlNob3c8L2Rpdj4pfVxuICAgIDwvPlxuICApXG59O1xuXG5jb25zdCBkb21Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5vdGhlcl9tb2R1bGUnKTtcblxuaWYgKGRvbUNvbnRhaW5lcikge1xuICBSZWFjdERPTS5yZW5kZXIoXG4gICAgPEFub3RoZXJNb2R1bGUgLz4sXG4gICAgZG9tQ29udGFpbmVyXG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJlYWN0RE9NIiwiQW5vdGhlck1vZHVsZSIsImNsaWNrZWQiLCJzZXRDbGlja2VkIiwiZG9tQ29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciJdLCJzb3VyY2VSb290IjoiIn0=