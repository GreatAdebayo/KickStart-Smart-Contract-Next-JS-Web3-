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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMsg = ref[0], setErrorMsg = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        description: \"\",\n        value: \"\",\n        recipient: \"\"\n    }), request = ref2[0], setRequest = ref2[1];\n    //   console.log(router.query.address);\n    var onSubmit = function() {};\n    var onChange = function(e) {\n        var name = e.target.name;\n        var _$value = e.target.value;\n        setRequest(_objectSpread({}, request, _defineProperty({}, name, _$value)));\n        console.log(request);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/campaigns/requests/\".concat(router.query.address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form, {\n                onSubmit: onSubmit,\n                error: !!errorMsg,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: description,\n                                onChange: onChange,\n                                name: \"description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 32,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: value,\n                                onChange: onChange,\n                                name: \"value\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 36,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                                value: recipient,\n                                onChange: onChange,\n                                name: \"recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 40,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMsg\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"NivWtduLk8ghBCD36x+kVeNaqhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ087QUFDWDs7QUFFN0IsSUFBTUcsR0FBRyxHQUFHLFdBQU07O0lBQ2hCLElBQU1DLE1BQU0sR0FBR0gsc0RBQVMsRUFBRTtJQUMxQixJQUFnQ0QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQU45QyxRQU1pQixHQUFpQkEsR0FBWSxHQUE3QixFQU5qQixXQU04QixHQUFJQSxHQUFZLEdBQWhCO0lBQzVCLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBUC9DLE9BT2dCLEdBQWdCQSxJQUFlLEdBQS9CLEVBUGhCLFVBTzRCLEdBQUlBLElBQWUsR0FBbkI7SUFDMUIsSUFBOEJBLElBSTVCLEdBSjRCQSwrQ0FBUSxDQUFDO1FBQ3JDUyxXQUFXLEVBQUUsRUFBRTtRQUNmQyxLQUFLLEVBQUUsRUFBRTtRQUNUQyxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUMsRUFaSixPQVFnQixHQUFnQlgsSUFJNUIsR0FKWSxFQVJoQixVQVE0QixHQUFJQSxJQUk1QixHQUp3QjtJQUsxQix1Q0FBdUM7SUFDdkMsSUFBTWMsUUFBUSxHQUFHLFdBQU0sRUFBRTtJQUV6QixJQUFNQyxRQUFRLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3RCLElBQUlDLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNELElBQUk7UUFDeEIsSUFBSVAsT0FBSyxHQUFHTSxDQUFDLENBQUNFLE1BQU0sQ0FBQ1IsS0FBSztRQUMxQkcsVUFBVSxDQUFDLGtCQUFLRCxPQUFPLEVBQUUsb0JBQUNLLElBQUksRUFBR1AsT0FBSyxFQUFFLENBQUMsQ0FBQztRQUMxQ1MsT0FBTyxDQUFDQyxHQUFHLENBQUNSLE9BQU8sQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QscUJBQ0UsOERBQUNTLE1BQU07OzBCQUNMLDhEQUFDbkIsa0RBQUk7Z0JBQUNvQixJQUFJLEVBQUUsc0JBQXFCLENBQXVCLE9BQXJCbEIsTUFBTSxDQUFDbUIsS0FBSyxDQUFDQyxPQUFPLENBQUU7MEJBQ3ZELDRFQUFDQyxHQUFDOzhCQUFDLE1BQUk7Ozs7O3lCQUFJOzs7OztxQkFDTjswQkFDUCw4REFBQ0MsSUFBRTswQkFBQyxrQkFBZ0I7Ozs7O3FCQUFLOzBCQUN6Qiw4REFBQ0MsSUFBSTtnQkFBQ2IsUUFBUSxFQUFFQSxRQUFRO2dCQUFFYyxLQUFLLEVBQUUsQ0FBQyxDQUFDdkIsUUFBUTs7a0NBQ3pDLDhEQUFDc0IsSUFBSSxDQUFDRSxLQUFLOzswQ0FDVCw4REFBQ0MsT0FBSzswQ0FBQyxhQUFXOzs7OztxQ0FBUTswQ0FDMUIsOERBQUNDLEtBQUs7Z0NBQUNyQixLQUFLLEVBQUVELFdBQVc7Z0NBQUVNLFFBQVEsRUFBRUEsUUFBUTtnQ0FBRUUsSUFBSSxFQUFDLGFBQWE7Ozs7O3FDQUFHOzs7Ozs7NkJBQ3pEO2tDQUNiLDhEQUFDVSxJQUFJLENBQUNFLEtBQUs7OzBDQUNULDhEQUFDQyxPQUFLOzBDQUFDLGdCQUFjOzs7OztxQ0FBUTswQ0FDN0IsOERBQUNDLEtBQUs7Z0NBQUNyQixLQUFLLEVBQUVBLEtBQUs7Z0NBQUVLLFFBQVEsRUFBRUEsUUFBUTtnQ0FBRUUsSUFBSSxFQUFDLE9BQU87Ozs7O3FDQUFHOzs7Ozs7NkJBQzdDO2tDQUNiLDhEQUFDVSxJQUFJLENBQUNFLEtBQUs7OzBDQUNULDhEQUFDQyxPQUFLOzBDQUFDLFdBQVM7Ozs7O3FDQUFROzBDQUN4Qiw4REFBQ0MsS0FBSztnQ0FBQ3JCLEtBQUssRUFBRUMsU0FBUztnQ0FBRUksUUFBUSxFQUFFQSxRQUFRO2dDQUFFRSxJQUFJLEVBQUMsV0FBVzs7Ozs7cUNBQUc7Ozs7Ozs2QkFDckQ7a0NBQ2IsOERBQUNlLE9BQU87d0JBQUNKLEtBQUs7d0JBQUNLLE1BQU0sRUFBQyxPQUFPO3dCQUFDQyxPQUFPLEVBQUU3QixRQUFROzs7Ozs2QkFBSTtrQ0FDbkQsOERBQUM4QixNQUFNO3dCQUFDQyxPQUFPO3dCQUFDN0IsT0FBTyxFQUFFQSxPQUFPO2tDQUFFLFNBRWxDOzs7Ozs2QkFBUzs7Ozs7O3FCQUNKOzs7Ozs7YUFDQSxDQUNUO0NBQ0g7R0E1Q0tKLEdBQUc7O1FBQ1FGLGtEQUFTOzs7QUFEcEJFLEtBQUFBLEdBQUc7QUE4Q1QsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcz84ZDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgTmV3ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2Vycm9yTXNnLCBzZXRFcnJvck1zZ10gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbcmVxdWVzdCwgc2V0UmVxdWVzdF0gPSB1c2VTdGF0ZSh7XG4gICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgcmVjaXBpZW50OiBcIlwiLFxuICB9KTtcbiAgLy8gICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuYWRkcmVzcyk7XG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge307XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBsZXQgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXRSZXF1ZXN0KHsgLi4ucmVxdWVzdCwgW25hbWVdOiB2YWx1ZSB9KTtcbiAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPExpbmsgaHJlZj17YC9jYW1wYWlnbnMvcmVxdWVzdHMvJHtyb3V0ZXIucXVlcnkuYWRkcmVzc31gfT5cbiAgICAgICAgPGE+QmFjazwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxoMz5DcmVhdGUgYSBSZXF1ZXN0PC9oMz5cbiAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gZXJyb3I9eyEhZXJyb3JNc2d9PlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+RGVzY3JpcHRpb248L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17ZGVzY3JpcHRpb259IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+VmFsdWUgaW4gRXRoZXI8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17dmFsdWV9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT1cInZhbHVlXCIgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgICA8bGFiZWw+UmVjaXBpZW50PC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e3JlY2lwaWVudH0gb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPVwicmVjaXBpZW50XCIgLz5cbiAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e2Vycm9yTXNnfSAvPlxuICAgICAgICA8QnV0dG9uIHByaW1hcnkgbG9hZGluZz17bG9hZGluZ30+XG4gICAgICAgICAgQ3JlYXRlIVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5ldztcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIkxpbmsiLCJOZXciLCJyb3V0ZXIiLCJlcnJvck1zZyIsInNldEVycm9yTXNnIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwicmVxdWVzdCIsInNldFJlcXVlc3QiLCJvblN1Ym1pdCIsIm9uQ2hhbmdlIiwiZSIsIm5hbWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwiTGF5b3V0IiwiaHJlZiIsInF1ZXJ5IiwiYWRkcmVzcyIsImEiLCJoMyIsIkZvcm0iLCJlcnJvciIsIkZpZWxkIiwibGFiZWwiLCJJbnB1dCIsIk1lc3NhZ2UiLCJoZWFkZXIiLCJjb250ZW50IiwiQnV0dG9uIiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});