"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests/[address]/new",{

/***/ "./pages/campaigns/requests/[address]/new.js":
/*!***************************************************!*\
  !*** ./pages/campaigns/requests/[address]/new.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   console.log(router.query.address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                route: \"/campaigns/\".concat(_this.props.address, \"/requests\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: _this.onSubmit,\n                error: !!_this.state.errorMessage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.description,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        description: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.value,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        value: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.recipient,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        recipient: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: _this.state.errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        primary: true,\n                        loading: _this.state.loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2M7O0FBRXhDLElBQU1FLEdBQUcsR0FBRyxXQUFNOzs7SUFDaEIsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLHVDQUF1QztJQUN2QyxxQkFDRSw4REFBQ0csTUFBTTs7MEJBQ0wsOERBQUNDLElBQUk7Z0JBQUNDLEtBQUssRUFBRSxhQUFZLENBQXFCLE1BQVMsQ0FBNUIsTUFBS0MsS0FBSyxDQUFDQyxPQUFPLEVBQUMsV0FBUyxDQUFDOzBCQUN0RCw0RUFBQ0MsR0FBQzs4QkFBQyxNQUFJOzs7Ozt5QkFBSTs7Ozs7cUJBQ047MEJBQ1AsOERBQUNDLElBQUU7MEJBQUMsa0JBQWdCOzs7OztxQkFBSzswQkFDekIsOERBQUNDLElBQUk7Z0JBQUNDLFFBQVEsRUFBRSxNQUFLQSxRQUFRO2dCQUFFQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQUtDLEtBQUssQ0FBQ0MsWUFBWTs7a0NBQzdELDhEQUFDSixJQUFJLENBQUNLLEtBQUs7OzBDQUNULDhEQUFDQyxPQUFLOzBDQUFDLGFBQVc7Ozs7O3FDQUFROzBDQUMxQiw4REFBQ0MsS0FBSztnQ0FDSkMsS0FBSyxFQUFFLE1BQUtMLEtBQUssQ0FBQ00sV0FBVztnQ0FDN0JDLFFBQVEsRUFBRSxTQUFDQyxLQUFLOzJDQUNkLE9BQUtDLFFBQVEsQ0FBQzt3Q0FBRUgsV0FBVyxFQUFFRSxLQUFLLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSztxQ0FBRSxDQUFDO2lDQUFBOzs7OztxQ0FFcEQ7Ozs7Ozs2QkFDUztrQ0FDYiw4REFBQ1IsSUFBSSxDQUFDSyxLQUFLOzswQ0FDVCw4REFBQ0MsT0FBSzswQ0FBQyxnQkFBYzs7Ozs7cUNBQVE7MENBQzdCLDhEQUFDQyxLQUFLO2dDQUNKQyxLQUFLLEVBQUUsTUFBS0wsS0FBSyxDQUFDSyxLQUFLO2dDQUN2QkUsUUFBUSxFQUFFLFNBQUNDLEtBQUs7MkNBQUssT0FBS0MsUUFBUSxDQUFDO3dDQUFFSixLQUFLLEVBQUVHLEtBQUssQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLO3FDQUFFLENBQUM7aUNBQUE7Ozs7O3FDQUNqRTs7Ozs7OzZCQUNTO2tDQUNiLDhEQUFDUixJQUFJLENBQUNLLEtBQUs7OzBDQUNULDhEQUFDQyxPQUFLOzBDQUFDLFdBQVM7Ozs7O3FDQUFROzBDQUN4Qiw4REFBQ0MsS0FBSztnQ0FDSkMsS0FBSyxFQUFFLE1BQUtMLEtBQUssQ0FBQ1csU0FBUztnQ0FDM0JKLFFBQVEsRUFBRSxTQUFDQyxLQUFLOzJDQUNkLE9BQUtDLFFBQVEsQ0FBQzt3Q0FBRUUsU0FBUyxFQUFFSCxLQUFLLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSztxQ0FBRSxDQUFDO2lDQUFBOzs7OztxQ0FFbEQ7Ozs7Ozs2QkFDUztrQ0FDYiw4REFBQ08sT0FBTzt3QkFBQ2IsS0FBSzt3QkFBQ2MsTUFBTSxFQUFDLE9BQU87d0JBQUNDLE9BQU8sRUFBRSxNQUFLZCxLQUFLLENBQUNDLFlBQVk7Ozs7OzZCQUFJO2tDQUNsRSw4REFBQ2MsTUFBTTt3QkFBQ0MsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFLE1BQUtqQixLQUFLLENBQUNpQixPQUFPO2tDQUFFLFNBRTdDOzs7Ozs2QkFBUzs7Ozs7O3FCQUNKOzs7Ozs7YUFDQSxDQUNUO0NBQ0g7R0ExQ0s3QixHQUFHOztRQUNRRCxrREFBUzs7O0FBRHBCQyxLQUFBQSxHQUFHO0FBNENULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL1thZGRyZXNzXS9uZXcuanM/OGQwMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgTmV3ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuYWRkcmVzcyk7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke3RoaXMucHJvcHMuYWRkcmVzc30vcmVxdWVzdHNgfT5cbiAgICAgICAgPGE+QmFjazwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxoMz5DcmVhdGUgYSBSZXF1ZXN0PC9oMz5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+VmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiB0aGlzLnNldFN0YXRlKHsgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucmVjaXBpZW50fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlY2lwaWVudDogZXZlbnQudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfT5cbiAgICAgICAgICBDcmVhdGUhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwiTmV3Iiwicm91dGVyIiwiTGF5b3V0IiwiTGluayIsInJvdXRlIiwicHJvcHMiLCJhZGRyZXNzIiwiYSIsImgzIiwiRm9ybSIsIm9uU3VibWl0IiwiZXJyb3IiLCJzdGF0ZSIsImVycm9yTWVzc2FnZSIsIkZpZWxkIiwibGFiZWwiLCJJbnB1dCIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJyZWNpcGllbnQiLCJNZXNzYWdlIiwiaGVhZGVyIiwiY29udGVudCIsIkJ1dHRvbiIsInByaW1hcnkiLCJsb2FkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});