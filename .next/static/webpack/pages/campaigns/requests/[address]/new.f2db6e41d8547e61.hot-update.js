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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   console.log(router.query.address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/campaigns/requests/\".concat(router.query.address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: _this.onSubmit,\n                error: !!_this.state.errorMessage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.description,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        description: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.value,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        value: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 26,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.recipient,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        recipient: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: _this.state.errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        primary: true,\n                        loading: _this.state.loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDYztBQUNYOztBQUU3QixJQUFNRyxHQUFHLEdBQUcsV0FBTTs7O0lBQ2hCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQix1Q0FBdUM7SUFDdkMscUJBQ0UsOERBQUNJLE1BQU07OzBCQUNMLDhEQUFDSCxrREFBSTtnQkFBQ0ksSUFBSSxFQUFFLHNCQUFxQixDQUF1QixPQUFyQkYsTUFBTSxDQUFDRyxLQUFLLENBQUNDLE9BQU8sQ0FBRTswQkFDdkQsNEVBQUNDLEdBQUM7OEJBQUMsTUFBSTs7Ozs7eUJBQUk7Ozs7O3FCQUNOOzBCQUNQLDhEQUFDQyxJQUFFOzBCQUFDLGtCQUFnQjs7Ozs7cUJBQUs7MEJBQ3pCLDhEQUFDQyxJQUFJO2dCQUFDQyxRQUFRLEVBQUUsTUFBS0EsUUFBUTtnQkFBRUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxNQUFLQyxLQUFLLENBQUNDLFlBQVk7O2tDQUM3RCw4REFBQ0osSUFBSSxDQUFDSyxLQUFLOzswQ0FDVCw4REFBQ0MsT0FBSzswQ0FBQyxhQUFXOzs7OztxQ0FBUTswQ0FDMUIsOERBQUNDLEtBQUs7Z0NBQ0pDLEtBQUssRUFBRSxNQUFLTCxLQUFLLENBQUNNLFdBQVc7Z0NBQzdCQyxRQUFRLEVBQUUsU0FBQ0MsS0FBSzsyQ0FDZCxPQUFLQyxRQUFRLENBQUM7d0NBQUVILFdBQVcsRUFBRUUsS0FBSyxDQUFDRSxNQUFNLENBQUNMLEtBQUs7cUNBQUUsQ0FBQztpQ0FBQTs7Ozs7cUNBRXBEOzs7Ozs7NkJBQ1M7a0NBQ2IsOERBQUNSLElBQUksQ0FBQ0ssS0FBSzs7MENBQ1QsOERBQUNDLE9BQUs7MENBQUMsZ0JBQWM7Ozs7O3FDQUFROzBDQUM3Qiw4REFBQ0MsS0FBSztnQ0FDSkMsS0FBSyxFQUFFLE1BQUtMLEtBQUssQ0FBQ0ssS0FBSztnQ0FDdkJFLFFBQVEsRUFBRSxTQUFDQyxLQUFLOzJDQUFLLE9BQUtDLFFBQVEsQ0FBQzt3Q0FBRUosS0FBSyxFQUFFRyxLQUFLLENBQUNFLE1BQU0sQ0FBQ0wsS0FBSztxQ0FBRSxDQUFDO2lDQUFBOzs7OztxQ0FDakU7Ozs7Ozs2QkFDUztrQ0FDYiw4REFBQ1IsSUFBSSxDQUFDSyxLQUFLOzswQ0FDVCw4REFBQ0MsT0FBSzswQ0FBQyxXQUFTOzs7OztxQ0FBUTswQ0FDeEIsOERBQUNDLEtBQUs7Z0NBQ0pDLEtBQUssRUFBRSxNQUFLTCxLQUFLLENBQUNXLFNBQVM7Z0NBQzNCSixRQUFRLEVBQUUsU0FBQ0MsS0FBSzsyQ0FDZCxPQUFLQyxRQUFRLENBQUM7d0NBQUVFLFNBQVMsRUFBRUgsS0FBSyxDQUFDRSxNQUFNLENBQUNMLEtBQUs7cUNBQUUsQ0FBQztpQ0FBQTs7Ozs7cUNBRWxEOzs7Ozs7NkJBQ1M7a0NBQ2IsOERBQUNPLE9BQU87d0JBQUNiLEtBQUs7d0JBQUNjLE1BQU0sRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUUsTUFBS2QsS0FBSyxDQUFDQyxZQUFZOzs7Ozs2QkFBSTtrQ0FDbEUsOERBQUNjLE1BQU07d0JBQUNDLE9BQU87d0JBQUNDLE9BQU8sRUFBRSxNQUFLakIsS0FBSyxDQUFDaUIsT0FBTztrQ0FBRSxTQUU3Qzs7Ozs7NkJBQVM7Ozs7OztxQkFDSjs7Ozs7O2FBQ0EsQ0FDVDtDQUNIO0dBMUNLNUIsR0FBRzs7UUFDUUYsa0RBQVM7OztBQURwQkUsS0FBQUEsR0FBRztBQTRDVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9bYWRkcmVzc10vbmV3LmpzPzhkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE5ldyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vICAgY29uc29sZS5sb2cocm91dGVyLnF1ZXJ5LmFkZHJlc3MpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy9yZXF1ZXN0cy8ke3JvdXRlci5xdWVyeS5hZGRyZXNzfWB9PlxuICAgICAgICA8YT5CYWNrPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGgzPkNyZWF0ZSBhIFJlcXVlc3Q8L2gzPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e3RoaXMub25TdWJtaXR9IGVycm9yPXshIXRoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRlc2NyaXB0aW9uOiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZWNpcGllbnR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVjaXBpZW50OiBldmVudC50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9PlxuICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTmV3Iiwicm91dGVyIiwiTGF5b3V0IiwiaHJlZiIsInF1ZXJ5IiwiYWRkcmVzcyIsImEiLCJoMyIsIkZvcm0iLCJvblN1Ym1pdCIsImVycm9yIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJGaWVsZCIsImxhYmVsIiwiSW5wdXQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicmVjaXBpZW50IiwiTWVzc2FnZSIsImhlYWRlciIsImNvbnRlbnQiLCJCdXR0b24iLCJwcmltYXJ5IiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});