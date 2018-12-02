webpackHotUpdate("main",{

/***/ "./src/components/SingleMeal.js":
/*!**************************************!*\
  !*** ./src/components/SingleMeal.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SingleMeal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SingleMeal.css */ "./src/components/SingleMeal.css");
/* harmony import */ var _SingleMeal_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_SingleMeal_css__WEBPACK_IMPORTED_MODULE_6__);





var _jsxFileName = "/Users/Binh/Desktop/YHack-2018/seefood/src/components/SingleMeal.js";



var SingleMeal =
/*#__PURE__*/
function (_Component) {
  Object(_Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SingleMeal, _Component);

  function SingleMeal() {
    Object(_Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SingleMeal);

    return Object(_Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SingleMeal).apply(this, arguments));
  }

  Object(_Users_Binh_Desktop_YHack_2018_seefood_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SingleMeal, [{
    key: "render",
    value: function render() {
      var _this = this;

      console.log(this.props.mealDetails);
      var imageSrc = "/pics/" + this.props.mealName.replace(/\s/g, "") + ".jpeg";
      var mealContent = this.props.isMeal ? react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: imageSrc,
        class: "meal-pic",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, this.props.mealName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, "Calories: "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, "Carbs (g):")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Time:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Protein (g):")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        className: "remove-button",
        onClick: function onClick() {
          return _this.props.onRemoveClicked(_this.props.index);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "-")) : react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "rec",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: imageSrc,
        class: "meal-pic",
        alt: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, this.props.mealName), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Calories: "), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Carbs (g):")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "meal-details",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, "Time:"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Protein (g):")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "link-div",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        action: "https://www.foodnetwork.com/recipes/jeff-mauro/braised-short-ribs-2621165",
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        class: "link-form",
        type: "submit",
        value: "Recipe",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }))));
      return mealContent;
    }
  }]);

  return SingleMeal;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (SingleMeal);

/***/ })

})
//# sourceMappingURL=main.2b989bd8b7dcc87813bf.hot-update.js.map