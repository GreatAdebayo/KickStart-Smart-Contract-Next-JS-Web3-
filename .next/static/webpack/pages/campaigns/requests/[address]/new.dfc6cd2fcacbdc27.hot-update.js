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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    //   console.log(router.query.address);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                route: \"/campaigns/requests/\".concat(router.query.address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: _this.onSubmit,\n                error: !!_this.state.errorMessage,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 15,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.description,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        description: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 24,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.value,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        value: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 25,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: _this.state.recipient,\n                                onChange: function(event) {\n                                    return _this1.setState({\n                                        recipient: event.target.value\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: _this.state.errorMessage\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        primary: true,\n                        loading: _this.state.loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQTBCO0FBQ2M7O0FBRXhDLElBQU1FLEdBQUcsR0FBRyxXQUFNOzs7SUFDaEIsSUFBTUMsTUFBTSxHQUFHRixzREFBUyxFQUFFO0lBQzFCLHVDQUF1QztJQUN2QyxxQkFDRSw4REFBQ0csTUFBTTs7MEJBQ0wsOERBQUNDLElBQUk7Z0JBQUNDLEtBQUssRUFBRSxzQkFBcUIsQ0FBdUIsT0FBckJILE1BQU0sQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLENBQUU7MEJBQ3hELDRFQUFDQyxHQUFDOzhCQUFDLE1BQUk7Ozs7O3lCQUFJOzs7OztxQkFDTjswQkFDUCw4REFBQ0MsSUFBRTswQkFBQyxrQkFBZ0I7Ozs7O3FCQUFLOzBCQUN6Qiw4REFBQ0MsSUFBSTtnQkFBQ0MsUUFBUSxFQUFFLE1BQUtBLFFBQVE7Z0JBQUVDLEtBQUssRUFBRSxDQUFDLENBQUMsTUFBS0MsS0FBSyxDQUFDQyxZQUFZOztrQ0FDN0QsOERBQUNKLElBQUksQ0FBQ0ssS0FBSzs7MENBQ1QsOERBQUNDLE9BQUs7MENBQUMsYUFBVzs7Ozs7cUNBQVE7MENBQzFCLDhEQUFDQyxLQUFLO2dDQUNKQyxLQUFLLEVBQUUsTUFBS0wsS0FBSyxDQUFDTSxXQUFXO2dDQUM3QkMsUUFBUSxFQUFFLFNBQUNDLEtBQUs7MkNBQ2QsT0FBS0MsUUFBUSxDQUFDO3dDQUFFSCxXQUFXLEVBQUVFLEtBQUssQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLO3FDQUFFLENBQUM7aUNBQUE7Ozs7O3FDQUVwRDs7Ozs7OzZCQUNTO2tDQUNiLDhEQUFDUixJQUFJLENBQUNLLEtBQUs7OzBDQUNULDhEQUFDQyxPQUFLOzBDQUFDLGdCQUFjOzs7OztxQ0FBUTswQ0FDN0IsOERBQUNDLEtBQUs7Z0NBQ0pDLEtBQUssRUFBRSxNQUFLTCxLQUFLLENBQUNLLEtBQUs7Z0NBQ3ZCRSxRQUFRLEVBQUUsU0FBQ0MsS0FBSzsyQ0FBSyxPQUFLQyxRQUFRLENBQUM7d0NBQUVKLEtBQUssRUFBRUcsS0FBSyxDQUFDRSxNQUFNLENBQUNMLEtBQUs7cUNBQUUsQ0FBQztpQ0FBQTs7Ozs7cUNBQ2pFOzs7Ozs7NkJBQ1M7a0NBQ2IsOERBQUNSLElBQUksQ0FBQ0ssS0FBSzs7MENBQ1QsOERBQUNDLE9BQUs7MENBQUMsV0FBUzs7Ozs7cUNBQVE7MENBQ3hCLDhEQUFDQyxLQUFLO2dDQUNKQyxLQUFLLEVBQUUsTUFBS0wsS0FBSyxDQUFDVyxTQUFTO2dDQUMzQkosUUFBUSxFQUFFLFNBQUNDLEtBQUs7MkNBQ2QsT0FBS0MsUUFBUSxDQUFDO3dDQUFFRSxTQUFTLEVBQUVILEtBQUssQ0FBQ0UsTUFBTSxDQUFDTCxLQUFLO3FDQUFFLENBQUM7aUNBQUE7Ozs7O3FDQUVsRDs7Ozs7OzZCQUNTO2tDQUNiLDhEQUFDTyxPQUFPO3dCQUFDYixLQUFLO3dCQUFDYyxNQUFNLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFLE1BQUtkLEtBQUssQ0FBQ0MsWUFBWTs7Ozs7NkJBQUk7a0NBQ2xFLDhEQUFDYyxNQUFNO3dCQUFDQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUUsTUFBS2pCLEtBQUssQ0FBQ2lCLE9BQU87a0NBQUUsU0FFN0M7Ozs7OzZCQUFTOzs7Ozs7cUJBQ0o7Ozs7OzthQUNBLENBQ1Q7Q0FDSDtHQTFDSzdCLEdBQUc7O1FBQ1FELGtEQUFTOzs7QUFEcEJDLEtBQUFBLEdBQUc7QUE0Q1QsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcz84ZDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCBOZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5hZGRyZXNzKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPExpbmsgcm91dGU9e2AvY2FtcGFpZ25zL3JlcXVlc3RzLyR7cm91dGVyLnF1ZXJ5LmFkZHJlc3N9YH0+XG4gICAgICAgIDxhPkJhY2s8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZGVzY3JpcHRpb246IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiBldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJlY2lwaWVudH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByZWNpcGllbnQ6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e3RoaXMuc3RhdGUubG9hZGluZ30+XG4gICAgICAgICAgQ3JlYXRlIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIk5ldyIsInJvdXRlciIsIkxheW91dCIsIkxpbmsiLCJyb3V0ZSIsInF1ZXJ5IiwiYWRkcmVzcyIsImEiLCJoMyIsIkZvcm0iLCJvblN1Ym1pdCIsImVycm9yIiwic3RhdGUiLCJlcnJvck1lc3NhZ2UiLCJGaWVsZCIsImxhYmVsIiwiSW5wdXQiLCJ2YWx1ZSIsImRlc2NyaXB0aW9uIiwib25DaGFuZ2UiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwicmVjaXBpZW50IiwiTWVzc2FnZSIsImhlYWRlciIsImNvbnRlbnQiLCJCdXR0b24iLCJwcmltYXJ5IiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});