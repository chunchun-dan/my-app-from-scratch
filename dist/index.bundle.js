"use strict";
(self["webpackChunkchucnhun_s_personal_app"] = self["webpackChunkchucnhun_s_personal_app"] || []).push([["index"],{

/***/ "./src/LikeButton.js":
/*!***************************!*\
  !*** ./src/LikeButton.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } Object.defineProperty(subClass, "prototype", { value: Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }), writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var LikeButton = /*#__PURE__*/function (_React$Component) {
  _inherits(LikeButton, _React$Component);

  var _super = _createSuper(LikeButton);

  function LikeButton(props) {
    var _this;

    _classCallCheck(this, LikeButton);

    _this = _super.call(this, props);
    _this.state = {
      liked: false
    };
    return _this;
  }

  _createClass(LikeButton, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.liked) {
        return 'You liked this.';
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
        onClick: function onClick() {
          return _this2.setState({
            liked: true
          });
        }
      }, "Like");
    }
  }]);

  return LikeButton;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButton);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _LikeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LikeButton */ "./src/LikeButton.js");





var domContainer = document.getElementById('root');

if (domContainer) {
  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LikeButton__WEBPACK_IMPORTED_MODULE_2__["default"], null), domContainer);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/index.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUdNQzs7Ozs7QUFDSixzQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQUFiO0FBRmlCO0FBR2xCOzs7O1dBRUQsa0JBQVM7QUFBQTs7QUFDUCxVQUFJLEtBQUtELEtBQUwsQ0FBV0MsS0FBZixFQUFzQjtBQUNwQixlQUFPLGlCQUFQO0FBQ0Q7O0FBRUQsMEJBQ0U7QUFBUSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFFRCxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQUFkLENBQU47QUFBQTtBQUFqQixnQkFERjtBQUdEOzs7O0VBZHNCSjs7QUFpQnpCLGlFQUFlQyxVQUFmOzs7Ozs7Ozs7Ozs7OztBQ3BCYTs7QUFDYjtBQUNBO0FBQ0E7QUFFQSxJQUFNTyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFyQjs7QUFFQSxJQUFJRixZQUFKLEVBQWtCO0FBQ2hCRCxFQUFBQSw2Q0FBQSxlQUNFLGlEQUFDLG1EQUFELE9BREYsRUFFRUMsWUFGRjtBQUlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2h1Y25odW4tcy1wZXJzb25hbC1hcHAvLi9zcmMvTGlrZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly9jaHVjbmh1bi1zLXBlcnNvbmFsLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5cbmNsYXNzIExpa2VCdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0geyBsaWtlZDogZmFsc2UgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5saWtlZCkge1xuICAgICAgcmV0dXJuICdZb3UgbGlrZWQgdGhpcy4nO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBsaWtlZDogdHJ1ZSB9KX0+TGlrZTwvYnV0dG9uPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlrZUJ1dHRvbjtcbiIsIid1c2Ugc3RyaWN0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBMaWtlQnV0dG9uIGZyb20gJy4vTGlrZUJ1dHRvbic7XG5cbmNvbnN0IGRvbUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG5cbmlmIChkb21Db250YWluZXIpIHtcbiAgUmVhY3RET00ucmVuZGVyKFxuICAgIDxMaWtlQnV0dG9uIC8+LFxuICAgIGRvbUNvbnRhaW5lclxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGlrZUJ1dHRvbiIsInByb3BzIiwic3RhdGUiLCJsaWtlZCIsInNldFN0YXRlIiwiQ29tcG9uZW50IiwiUmVhY3RET00iLCJkb21Db250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==