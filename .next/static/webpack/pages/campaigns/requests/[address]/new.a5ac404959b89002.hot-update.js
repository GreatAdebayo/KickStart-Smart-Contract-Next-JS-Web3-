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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), errorMsg = ref[0], setErrorMsg = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        description: \"\",\n        value: \"\",\n        recipient: \"\"\n    }), request = ref2[0], setRequest = ref2[1];\n    var description = request.description, value = request.value, recipient = request.recipient;\n    //   console.log(router.query.address);\n    var onSubmit = function() {};\n    var onChange = function(e) {\n        setRequest(_objectSpread({}, request, _defineProperty({}, e.target.name, e.target.value)));\n        console.log(request);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/campaigns/requests/\".concat(router.query.address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMsg,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                value: description,\n                                onChange: onChange,\n                                name: \"description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 38,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                value: value,\n                                onChange: onChange,\n                                name: \"value\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 42,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Input, {\n                                value: recipient,\n                                onChange: onChange,\n                                name: \"recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 43,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMsg\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"NivWtduLk8ghBCD36x+kVeNaqhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDTztBQUNYO0FBQ3NCO0FBQ2M7O0FBRWpFLElBQU1RLEdBQUcsR0FBRyxXQUFNOztJQUNoQixJQUFNQyxNQUFNLEdBQUdSLHNEQUFTLEVBQUU7SUFDMUIsSUFBZ0NELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxFQUFFLENBQUMsRUFSOUMsUUFRaUIsR0FBaUJBLEdBQVksR0FBN0IsRUFSakIsV0FROEIsR0FBSUEsR0FBWSxHQUFoQjtJQUM1QixJQUE4QkEsSUFBZSxHQUFmQSwrQ0FBUSxDQUFDLEtBQUssQ0FBQyxFQVQvQyxPQVNnQixHQUFnQkEsSUFBZSxHQUEvQixFQVRoQixVQVM0QixHQUFJQSxJQUFlLEdBQW5CO0lBQzFCLElBQThCQSxJQUk1QixHQUo0QkEsK0NBQVEsQ0FBQztRQUNyQ2MsV0FBVyxFQUFFLEVBQUU7UUFDZkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDLEVBZEosT0FVZ0IsR0FBZ0JoQixJQUk1QixHQUpZLEVBVmhCLFVBVTRCLEdBQUlBLElBSTVCLEdBSndCO0lBTTFCLElBQVFjLFdBQVcsR0FBdUJHLE9BQU8sQ0FBekNILFdBQVcsRUFBRUMsS0FBSyxHQUFnQkUsT0FBTyxDQUE1QkYsS0FBSyxFQUFFQyxTQUFTLEdBQUtDLE9BQU8sQ0FBckJELFNBQVM7SUFFckMsdUNBQXVDO0lBQ3ZDLElBQU1HLFFBQVEsR0FBRyxXQUFNLEVBQUU7SUFFekIsSUFBTUMsUUFBUSxHQUFHLFNBQUNDLENBQUMsRUFBSztRQUN0QkgsVUFBVSxDQUFDLGtCQUFLRCxPQUFPLEVBQUUsb0JBQUNJLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLEVBQUdGLENBQUMsQ0FBQ0MsTUFBTSxDQUFDUCxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQzVEUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsT0FBTyxDQUFDLENBQUM7S0FDdEI7SUFDRCxxQkFDRSw4REFBQ2QsMERBQU07OzBCQUNMLDhEQUFDRCxrREFBSTtnQkFBQ3dCLElBQUksRUFBRSxzQkFBcUIsQ0FBdUIsT0FBckJqQixNQUFNLENBQUNrQixLQUFLLENBQUNDLE9BQU8sQ0FBRTswQkFDdkQsNEVBQUNDLEdBQUM7OEJBQUMsTUFBSTs7Ozs7eUJBQUk7Ozs7O3FCQUNOOzBCQUNQLDhEQUFDQyxJQUFFOzBCQUFDLGtCQUFnQjs7Ozs7cUJBQUs7MEJBQ3pCLDhEQUFDMUIsbURBQUk7Z0JBQUNlLFFBQVEsRUFBRUEsUUFBUTtnQkFBRVksS0FBSyxFQUFFLENBQUMsQ0FBQ3JCLFFBQVE7O2tDQUN6Qyw4REFBQ04seURBQVU7OzBDQUNULDhEQUFDNkIsT0FBSzswQ0FBQyxhQUFXOzs7OztxQ0FBUTswQ0FDMUIsOERBQUMxQixvREFBSztnQ0FBQ1EsS0FBSyxFQUFFRCxXQUFXO2dDQUFFTSxRQUFRLEVBQUVBLFFBQVE7Z0NBQUVHLElBQUksRUFBQyxhQUFhOzs7OztxQ0FBRzs7Ozs7OzZCQUN6RDtrQ0FDYiw4REFBQ25CLHlEQUFVOzswQ0FDVCw4REFBQzZCLE9BQUs7MENBQUMsZ0JBQWM7Ozs7O3FDQUFROzBDQUM3Qiw4REFBQzFCLG9EQUFLO2dDQUFDUSxLQUFLLEVBQUVBLEtBQUs7Z0NBQUVLLFFBQVEsRUFBRUEsUUFBUTtnQ0FBRUcsSUFBSSxFQUFDLE9BQU87Ozs7O3FDQUFHOzs7Ozs7NkJBQzdDO2tDQUNiLDhEQUFDbkIseURBQVU7OzBDQUNULDhEQUFDNkIsT0FBSzswQ0FBQyxXQUFTOzs7OztxQ0FBUTswQ0FDeEIsOERBQUMxQixvREFBSztnQ0FBQ1EsS0FBSyxFQUFFQyxTQUFTO2dDQUFFSSxRQUFRLEVBQUVBLFFBQVE7Z0NBQUVHLElBQUksRUFBQyxXQUFXOzs7OztxQ0FBRzs7Ozs7OzZCQUNyRDtrQ0FDYiw4REFBQ2pCLHNEQUFPO3dCQUFDeUIsS0FBSzt3QkFBQ0csTUFBTSxFQUFDLE9BQU87d0JBQUNDLE9BQU8sRUFBRXpCLFFBQVE7Ozs7OzZCQUFJO2tDQUNuRCw4REFBQ0wscURBQU07d0JBQUMrQixPQUFPO3dCQUFDeEIsT0FBTyxFQUFFQSxPQUFPO2tDQUFFLFNBRWxDOzs7Ozs2QkFBUzs7Ozs7O3FCQUNKOzs7Ozs7YUFDQSxDQUNUO0NBQ0g7R0E3Q0tKLEdBQUc7O1FBQ1FQLGtEQUFTOzs7QUFEcEJPLEtBQUFBLEdBQUc7QUErQ1QsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcz84ZDAxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyBGb3JtLCBCdXR0b24sIE1lc3NhZ2UsIElucHV0IH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNvbnN0IE5ldyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlcXVlc3QsIHNldFJlcXVlc3RdID0gdXNlU3RhdGUoe1xuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIHZhbHVlOiBcIlwiLFxuICAgIHJlY2lwaWVudDogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCB9ID0gcmVxdWVzdDtcblxuICAvLyAgIGNvbnNvbGUubG9nKHJvdXRlci5xdWVyeS5hZGRyZXNzKTtcbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7fTtcblxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UmVxdWVzdCh7IC4uLnJlcXVlc3QsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgY29uc29sZS5sb2cocmVxdWVzdCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zL3JlcXVlc3RzLyR7cm91dGVyLnF1ZXJ5LmFkZHJlc3N9YH0+XG4gICAgICAgIDxhPkJhY2s8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXshIWVycm9yTXNnfT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJ2YWx1ZVwiIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXtyZWNpcGllbnR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT1cInJlY2lwaWVudFwiIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIk5ldyIsInJvdXRlciIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJyZXF1ZXN0Iiwic2V0UmVxdWVzdCIsIm9uU3VibWl0Iiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwibmFtZSIsImNvbnNvbGUiLCJsb2ciLCJocmVmIiwicXVlcnkiLCJhZGRyZXNzIiwiYSIsImgzIiwiZXJyb3IiLCJGaWVsZCIsImxhYmVsIiwiaGVhZGVyIiwiY29udGVudCIsInByaW1hcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});