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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMsg = ref[0], setErrorMsg = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        description: \"\",\n        value: \"\",\n        recipient: \"\"\n    }), request = ref2[0], setRequest = ref2[1];\n    var description = request.description, value = request.value, recipient = request.recipient;\n    //   console.log(router.query.address);\n    var onSubmit = function(e) {\n        e.preventDefault();\n    };\n    var onChange = function(e) {\n        setRequest(_objectSpread({}, request, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/campaigns/requests/\".concat(router.query.address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMsg,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                value: description,\n                                onChange: onChange,\n                                name: \"description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 41,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                value: value,\n                                onChange: onChange,\n                                name: \"value\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Input, {\n                                value: recipient,\n                                onChange: onChange,\n                                name: \"recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMsg\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"NivWtduLk8ghBCD36x+kVeNaqhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ087QUFDWDtBQUNzQjtBQUNjO0FBQ1o7O0FBR3JELElBQU1TLEdBQUcsR0FBRyxXQUFNOztJQUNoQixJQUFNQyxNQUFNLEdBQUdULHNEQUFTLEVBQUU7SUFDMUIsSUFBZ0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFWOUMsUUFVaUIsR0FBaUJBLEdBQVksR0FBN0IsRUFWakIsV0FVOEIsR0FBSUEsR0FBWSxHQUFoQjtJQUM1QixJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVgvQyxPQVdnQixHQUFnQkEsSUFBZSxHQUEvQixFQVhoQixVQVc0QixHQUFJQSxJQUFlLEdBQW5CO0lBQzFCLElBQThCQSxJQUk1QixHQUo0QkEsK0NBQVEsQ0FBQztRQUNyQ2UsV0FBVyxFQUFFLEVBQUU7UUFDZkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDLEVBaEJKLE9BWWdCLEdBQWdCakIsSUFJNUIsR0FKWSxFQVpoQixVQVk0QixHQUFJQSxJQUk1QixHQUp3QjtJQU0xQixJQUFRZSxXQUFXLEdBQXVCRyxPQUFPLENBQXpDSCxXQUFXLEVBQUVDLEtBQUssR0FBZ0JFLE9BQU8sQ0FBNUJGLEtBQUssRUFBRUMsU0FBUyxHQUFLQyxPQUFPLENBQXJCRCxTQUFTO0lBRXJDLHVDQUF1QztJQUN2QyxJQUFNRyxRQUFRLEdBQUcsU0FBQ0MsQ0FBQyxFQUFLO1FBQ3RCQSxDQUFDLENBQUNDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCO0lBRUQsSUFBTUMsUUFBUSxHQUFHLFNBQUNGLENBQUMsRUFBSztRQUN0QkYsVUFBVSxDQUFDLGtCQUFLRCxPQUFPLEVBQUUsb0JBQUNHLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxJQUFJLEVBQUdKLENBQUMsQ0FBQ0csTUFBTSxDQUFDUixLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBQzdEO0lBQ0QscUJBQ0UsOERBQUNiLDBEQUFNOzswQkFDTCw4REFBQ0Qsa0RBQUk7Z0JBQUN3QixJQUFJLEVBQUUsc0JBQXFCLENBQXVCLE9BQXJCaEIsTUFBTSxDQUFDaUIsS0FBSyxDQUFDQyxPQUFPLENBQUU7MEJBQ3ZELDRFQUFDQyxHQUFDOzhCQUFDLE1BQUk7Ozs7O3lCQUFJOzs7OztxQkFDTjswQkFDUCw4REFBQ0MsSUFBRTswQkFBQyxrQkFBZ0I7Ozs7O3FCQUFLOzBCQUN6Qiw4REFBQzFCLG1EQUFJO2dCQUFDZ0IsUUFBUSxFQUFFQSxRQUFRO2dCQUFFVyxLQUFLLEVBQUUsQ0FBQyxDQUFDcEIsUUFBUTs7a0NBQ3pDLDhEQUFDUCx5REFBVTs7MENBQ1QsOERBQUM2QixPQUFLOzBDQUFDLGFBQVc7Ozs7O3FDQUFROzBDQUMxQiw4REFBQzFCLG9EQUFLO2dDQUFDUyxLQUFLLEVBQUVELFdBQVc7Z0NBQUVRLFFBQVEsRUFBRUEsUUFBUTtnQ0FBRUUsSUFBSSxFQUFDLGFBQWE7Ozs7O3FDQUFHOzs7Ozs7NkJBQ3pEO2tDQUNiLDhEQUFDckIseURBQVU7OzBDQUNULDhEQUFDNkIsT0FBSzswQ0FBQyxnQkFBYzs7Ozs7cUNBQVE7MENBQzdCLDhEQUFDMUIsb0RBQUs7Z0NBQUNTLEtBQUssRUFBRUEsS0FBSztnQ0FBRU8sUUFBUSxFQUFFQSxRQUFRO2dDQUFFRSxJQUFJLEVBQUMsT0FBTzs7Ozs7cUNBQUc7Ozs7Ozs2QkFDN0M7a0NBQ2IsOERBQUNyQix5REFBVTs7MENBQ1QsOERBQUM2QixPQUFLOzBDQUFDLFdBQVM7Ozs7O3FDQUFROzBDQUN4Qiw4REFBQzFCLG9EQUFLO2dDQUFDUyxLQUFLLEVBQUVDLFNBQVM7Z0NBQUVNLFFBQVEsRUFBRUEsUUFBUTtnQ0FBRUUsSUFBSSxFQUFDLFdBQVc7Ozs7O3FDQUFHOzs7Ozs7NkJBQ3JEO2tDQUNiLDhEQUFDbkIsc0RBQU87d0JBQUN5QixLQUFLO3dCQUFDRyxNQUFNLEVBQUMsT0FBTzt3QkFBQ0MsT0FBTyxFQUFFeEIsUUFBUTs7Ozs7NkJBQUk7a0NBQ25ELDhEQUFDTixxREFBTTt3QkFBQytCLE9BQU87d0JBQUN2QixPQUFPLEVBQUVBLE9BQU87a0NBQUUsU0FFbEM7Ozs7OzZCQUFTOzs7Ozs7cUJBQ0o7Ozs7OzthQUNBLENBQ1Q7Q0FDSDtHQTlDS0osR0FBRzs7UUFDUVIsa0RBQVM7OztBQURwQlEsS0FBQUEsR0FBRztBQWdEVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9bYWRkcmVzc10vbmV3LmpzPzhkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgSW5wdXQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcblxuXG5jb25zdCBOZXcgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbZXJyb3JNc2csIHNldEVycm9yTXNnXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtyZXF1ZXN0LCBzZXRSZXF1ZXN0XSA9IHVzZVN0YXRlKHtcbiAgICBkZXNjcmlwdGlvbjogXCJcIixcbiAgICB2YWx1ZTogXCJcIixcbiAgICByZWNpcGllbnQ6IFwiXCIsXG4gIH0pO1xuXG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQgfSA9IHJlcXVlc3Q7XG5cbiAgLy8gICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuYWRkcmVzcyk7XG4gIGNvbnN0IG9uU3VibWl0ID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH07XG5cbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIHNldFJlcXVlc3QoeyAuLi5yZXF1ZXN0LCBbZS50YXJnZXQubmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8TGluayBocmVmPXtgL2NhbXBhaWducy9yZXF1ZXN0cy8ke3JvdXRlci5xdWVyeS5hZGRyZXNzfWB9PlxuICAgICAgICA8YT5CYWNrPC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPGgzPkNyZWF0ZSBhIFJlcXVlc3Q8L2gzPlxuICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBlcnJvcj17ISFlcnJvck1zZ30+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5EZXNjcmlwdGlvbjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXtkZXNjcmlwdGlvbn0gb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5WYWx1ZSBpbiBFdGhlcjwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXt2YWx1ZX0gb25DaGFuZ2U9e29uQ2hhbmdlfSBuYW1lPVwidmFsdWVcIiAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgIDxsYWJlbD5SZWNpcGllbnQ8L2xhYmVsPlxuICAgICAgICAgIDxJbnB1dCB2YWx1ZT17cmVjaXBpZW50fSBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJyZWNpcGllbnRcIiAvPlxuICAgICAgICA8L0Zvcm0uRmllbGQ+XG4gICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIk9vcHMhXCIgY29udGVudD17ZXJyb3JNc2d9IC8+XG4gICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXtsb2FkaW5nfT5cbiAgICAgICAgICBDcmVhdGUhXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV3O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlUm91dGVyIiwiTGluayIsIkxheW91dCIsIkZvcm0iLCJCdXR0b24iLCJNZXNzYWdlIiwiSW5wdXQiLCJDYW1wYWlnbiIsIk5ldyIsInJvdXRlciIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJyZXF1ZXN0Iiwic2V0UmVxdWVzdCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0Iiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwiaHJlZiIsInF1ZXJ5IiwiYWRkcmVzcyIsImEiLCJoMyIsImVycm9yIiwiRmllbGQiLCJsYWJlbCIsImhlYWRlciIsImNvbnRlbnQiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});