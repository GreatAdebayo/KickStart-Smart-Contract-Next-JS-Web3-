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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../ethereum/campaign */ \"./ethereum/campaign.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../ethereum/web3 */ \"./ethereum/web3.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar New = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), errorMsg = ref[0], setErrorMsg = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        description: \"\",\n        value: \"\",\n        recipient: \"\"\n    }), request = ref2[0], setRequest = ref2[1];\n    var description = request.description, value = request.value, recipient = request.recipient;\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var campaign, accounts;\n            return _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        setLoading(true);\n                        if (!description) {\n                            _ctx.next = 18;\n                            break;\n                        }\n                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(router.query.address);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].eth.getAccounts();\n                    case 7:\n                        accounts = _ctx.sent;\n                        _ctx.next = 10;\n                        return campaign.methods.createRequest(description, _ethereum_web3__WEBPACK_IMPORTED_MODULE_7__[\"default\"].utils.toWei(value, \"ether\"), recipient).send({\n                            from: accounts[0]\n                        });\n                    case 10:\n                        setLoading(false);\n                        router.push(\"/campaigns/requests/\".concat(router.query.address));\n                        _ctx.next = 18;\n                        break;\n                    case 14:\n                        _ctx.prev = 14;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        setErrorMsg(_ctx.t0.message);\n                        setLoading(false);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    14\n                ]\n            ]);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var onChange = function(e) {\n        setRequest(_objectSpread({}, request, _defineProperty({}, e.target.name, e.target.value)));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/campaigns/requests/\".concat(router.query.address),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                    children: \"Back\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                children: \"Create a Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form, {\n                onSubmit: onSubmit,\n                error: !!errorMsg,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: description,\n                                onChange: onChange,\n                                name: \"description\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Value in Ether\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 56,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: value,\n                                onChange: onChange,\n                                name: \"value\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 57,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Form.Field, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                                children: \"Recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Input, {\n                                value: recipient,\n                                onChange: onChange,\n                                name: \"recipient\"\n                            }, void 0, false, {\n                                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Message, {\n                        error: true,\n                        header: \"Oops!\",\n                        content: errorMsg\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        primary: true,\n                        loading: loading,\n                        children: \"Create!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/new.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, _this);\n};\n_s(New, \"NivWtduLk8ghBCD36x+kVeNaqhc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar _c;\n$RefreshReg$(_c, \"New\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL25ldy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ087QUFDWDtBQUNzQjtBQUNjO0FBQ1o7QUFDUjs7QUFFN0MsSUFBTVUsR0FBRyxHQUFHLFdBQU07O0lBQ2hCLElBQU1DLE1BQU0sR0FBR1Ysc0RBQVMsRUFBRTtJQUMxQixJQUFnQ0QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQVY5QyxRQVVpQixHQUFpQkEsR0FBWSxHQUE3QixFQVZqQixXQVU4QixHQUFJQSxHQUFZLEdBQWhCO0lBQzVCLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBWC9DLE9BV2dCLEdBQWdCQSxJQUFlLEdBQS9CLEVBWGhCLFVBVzRCLEdBQUlBLElBQWUsR0FBbkI7SUFDMUIsSUFBOEJBLElBSTVCLEdBSjRCQSwrQ0FBUSxDQUFDO1FBQ3JDZ0IsV0FBVyxFQUFFLEVBQUU7UUFDZkMsS0FBSyxFQUFFLEVBQUU7UUFDVEMsU0FBUyxFQUFFLEVBQUU7S0FDZCxDQUFDLEVBaEJKLE9BWWdCLEdBQWdCbEIsSUFJNUIsR0FKWSxFQVpoQixVQVk0QixHQUFJQSxJQUk1QixHQUp3QjtJQU0xQixJQUFRZ0IsV0FBVyxHQUF1QkcsT0FBTyxDQUF6Q0gsV0FBVyxFQUFFQyxLQUFLLEdBQWdCRSxPQUFPLENBQTVCRixLQUFLLEVBQUVDLFNBQVMsR0FBS0MsT0FBTyxDQUFyQkQsU0FBUztJQUVyQyxJQUFNRyxRQUFRO21CQUFHLDhMQUFPQyxDQUFDLEVBQUs7Z0JBS3RCQyxRQUFRLEVBRU5DLFFBQVE7Ozs7d0JBTmhCRixDQUFDLENBQUNHLGNBQWMsRUFBRSxDQUFDO3dCQUNuQlYsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDOzRCQUNkQyxDQUFBQSxX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YWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9bYWRkcmVzc10vbmV3LmpzPzhkMDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgTWVzc2FnZSwgSW5wdXQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi8uLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IE5ldyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtlcnJvck1zZywgc2V0RXJyb3JNc2ddID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3JlcXVlc3QsIHNldFJlcXVlc3RdID0gdXNlU3RhdGUoe1xuICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgIHZhbHVlOiBcIlwiLFxuICAgIHJlY2lwaWVudDogXCJcIixcbiAgfSk7XG5cbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCB9ID0gcmVxdWVzdDtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgaWYoZGVzY3JpcHRpb24gKXtcbiAgICAgIFxuICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24ocm91dGVyLnF1ZXJ5LmFkZHJlc3MpO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KGRlc2NyaXB0aW9uLCB3ZWIzLnV0aWxzLnRvV2VpKHZhbHVlLCBcImV0aGVyXCIpLCByZWNpcGllbnQpXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIHJvdXRlci5wdXNoKGAvY2FtcGFpZ25zL3JlcXVlc3RzLyR7cm91dGVyLnF1ZXJ5LmFkZHJlc3N9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHNldEVycm9yTXNnKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkNoYW5nZSA9IChlKSA9PiB7XG4gICAgc2V0UmVxdWVzdCh7IC4uLnJlcXVlc3QsIFtlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvY2FtcGFpZ25zL3JlcXVlc3RzLyR7cm91dGVyLnF1ZXJ5LmFkZHJlc3N9YH0+XG4gICAgICAgIDxhPkJhY2s8L2E+XG4gICAgICA8L0xpbms+XG4gICAgICA8aDM+Q3JlYXRlIGEgUmVxdWVzdDwvaDM+XG4gICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGVycm9yPXshIWVycm9yTXNnfT5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPkRlc2NyaXB0aW9uPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e2Rlc2NyaXB0aW9ufSBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlZhbHVlIGluIEV0aGVyPC9sYWJlbD5cbiAgICAgICAgICA8SW5wdXQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJ2YWx1ZVwiIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPEZvcm0uRmllbGQ+XG4gICAgICAgICAgPGxhYmVsPlJlY2lwaWVudDwvbGFiZWw+XG4gICAgICAgICAgPElucHV0IHZhbHVlPXtyZWNpcGllbnR9IG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT1cInJlY2lwaWVudFwiIC8+XG4gICAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgICAgPE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wcyFcIiBjb250ZW50PXtlcnJvck1zZ30gLz5cbiAgICAgICAgPEJ1dHRvbiBwcmltYXJ5IGxvYWRpbmc9e2xvYWRpbmd9PlxuICAgICAgICAgIENyZWF0ZSFcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L0Zvcm0+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiTGF5b3V0IiwiRm9ybSIsIkJ1dHRvbiIsIk1lc3NhZ2UiLCJJbnB1dCIsIkNhbXBhaWduIiwid2ViMyIsIk5ldyIsInJvdXRlciIsImVycm9yTXNnIiwic2V0RXJyb3JNc2ciLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJyZXF1ZXN0Iiwic2V0UmVxdWVzdCIsIm9uU3VibWl0IiwiZSIsImNhbXBhaWduIiwiYWNjb3VudHMiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5IiwiYWRkcmVzcyIsImV0aCIsImdldEFjY291bnRzIiwibWV0aG9kcyIsImNyZWF0ZVJlcXVlc3QiLCJ1dGlscyIsInRvV2VpIiwic2VuZCIsImZyb20iLCJwdXNoIiwiZXJyb3IiLCJtZXNzYWdlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJuYW1lIiwiaHJlZiIsImEiLCJoMyIsIkZpZWxkIiwibGFiZWwiLCJoZWFkZXIiLCJjb250ZW50IiwicHJpbWFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/new.js\n");

/***/ })

});