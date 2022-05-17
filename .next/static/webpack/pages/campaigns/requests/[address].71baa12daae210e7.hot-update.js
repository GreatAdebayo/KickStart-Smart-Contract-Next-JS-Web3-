"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/requests/[address]",{

/***/ "./pages/campaigns/requests/[address]/index.js":
/*!*****************************************************!*\
  !*** ./pages/campaigns/requests/[address]/index.js ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _components_RequestRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/RequestRow */ \"./components/RequestRow.js\");\nvar _this = undefined;\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Requests = function(param) {\n    var requests = param.requests, approversCount = param.approversCount;\n    var _this1 = _this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var Header = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Header, Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, HeaderCell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.HeaderCell, Body = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Body;\n    var renderRows = function() {\n        var _this2 = _this1;\n        return requests.map(function(request, index) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                id: index,\n                request: request,\n                address: router.query.address,\n                approversCount: _this2.props.approversCount\n            }, index, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this2);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Requests\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                primary: true,\n                onClick: function() {\n                    router.push(\"/campaigns/requests/\".concat(router.query.address, \"/new\"));\n                },\n                children: \"Add Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"ID\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 39,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Description\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Amount\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Recipient\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Approval Count\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 43,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Approve\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(HeaderCell, {\n                                    children: \"Finalize\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                                    lineNumber: 45,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_RequestRow__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Found \",\n                    requests.length,\n                    \" requests.\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Requests, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Requests;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Requests);\nvar _c;\n$RefreshReg$(_c, \"Requests\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDeUI7QUFDWDtBQUNVO0FBRVM7O0FBRTNELElBQU1NLFFBQVEsR0FBRyxnQkFBa0M7UUFBL0JDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxjQUFjLFNBQWRBLGNBQWM7OztJQUMxQyxJQUFNQyxNQUFNLEdBQUdQLHNEQUFTLEVBQUU7SUFDMUIsSUFBUVEsTUFBTSxHQUE0Qk4sMkRBQTVCLEVBQUVPLEdBQUcsR0FBdUJQLHdEQUF2QixFQUFFUSxVQUFVLEdBQVdSLCtEQUFYLEVBQUVTLElBQUksR0FBS1QseURBQUw7SUFFckMsSUFBTVUsVUFBVSxHQUFHLFdBQU07O1FBQ3ZCLE9BQU9QLFFBQVEsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLE9BQU8sRUFBRUMsS0FBSyxFQUFLO1lBQ3RDLHFCQUNFLDhEQUFDWiw4REFBVTtnQkFFVGEsRUFBRSxFQUFFRCxLQUFLO2dCQUNURCxPQUFPLEVBQUVBLE9BQU87Z0JBQ2hCRyxPQUFPLEVBQUVWLE1BQU0sQ0FBQ1csS0FBSyxDQUFDRCxPQUFPO2dCQUM3QlgsY0FBYyxFQUFFLE9BQUthLEtBQUssQ0FBQ2IsY0FBYztlQUpwQ1MsS0FBSzs7OztzQkFLVixDQUNGO1NBQ0gsQ0FBQyxDQUFDO0tBQ0o7SUFDRCxxQkFDRSw4REFBQ2hCLDBEQUFNOzswQkFDTCw4REFBQ3FCLElBQUU7MEJBQUMsVUFBUTs7Ozs7cUJBQUs7MEJBQ2pCLDhEQUFDbkIscURBQU07Z0JBQ0xvQixPQUFPO2dCQUNQQyxPQUFPLEVBQUUsV0FBTTtvQkFDYmYsTUFBTSxDQUFDZ0IsSUFBSSxDQUFDLHNCQUFxQixDQUF1QixNQUFJLENBQXpCaEIsTUFBTSxDQUFDVyxLQUFLLENBQUNELE9BQU8sRUFBQyxNQUFJLENBQUMsQ0FBQyxDQUFDO2lCQUNoRTswQkFDRixhQUVEOzs7OztxQkFBUzswQkFDVCw4REFBQ2Ysb0RBQUs7O2tDQUNKLDhEQUFDTSxNQUFNO2tDQUNMLDRFQUFDQyxHQUFHOzs4Q0FDRiw4REFBQ0MsVUFBVTs4Q0FBQyxJQUFFOzs7Ozt5Q0FBYTs4Q0FDM0IsOERBQUNBLFVBQVU7OENBQUMsYUFBVzs7Ozs7eUNBQWE7OENBQ3BDLDhEQUFDQSxVQUFVOzhDQUFDLFFBQU07Ozs7O3lDQUFhOzhDQUMvQiw4REFBQ0EsVUFBVTs4Q0FBQyxXQUFTOzs7Ozt5Q0FBYTs4Q0FDbEMsOERBQUNBLFVBQVU7OENBQUMsZ0JBQWM7Ozs7O3lDQUFhOzhDQUN2Qyw4REFBQ0EsVUFBVTs4Q0FBQyxTQUFPOzs7Ozt5Q0FBYTs4Q0FDaEMsOERBQUNBLFVBQVU7OENBQUMsVUFBUTs7Ozs7eUNBQWE7Ozs7OztpQ0FDN0I7Ozs7OzZCQUNDO2tDQUNULDhEQUFDQyxJQUFJO2tDQUNILDRFQUFDUiw4REFBVTs7OztpQ0FBRzs7Ozs7NkJBQ1Q7Ozs7OztxQkFDRDswQkFDUiw4REFBQ3FCLEtBQUc7O29CQUFDLFFBQU07b0JBQUNuQixRQUFRLENBQUNvQixNQUFNO29CQUFDLFlBQVU7Ozs7OztxQkFBTTs7Ozs7O2FBQ3JDLENBQ1Q7Q0FDSDtHQS9DS3JCLFFBQVE7O1FBQ0dKLGtEQUFTOzs7QUFEcEJJLEtBQUFBLFFBQVE7O0FBd0VkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3JlcXVlc3RzL1thZGRyZXNzXS9pbmRleC5qcz8xM2E5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEJ1dHRvbiwgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCBSZXF1ZXN0Um93IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL1JlcXVlc3RSb3dcIjtcblxuY29uc3QgUmVxdWVzdHMgPSAoeyByZXF1ZXN0cywgYXBwcm92ZXJzQ291bnQgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBIZWFkZXIsIFJvdywgSGVhZGVyQ2VsbCwgQm9keSB9ID0gVGFibGU7XG5cbiAgY29uc3QgcmVuZGVyUm93cyA9ICgpID0+IHtcbiAgICByZXR1cm4gcmVxdWVzdHMubWFwKChyZXF1ZXN0LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPFJlcXVlc3RSb3dcbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGlkPXtpbmRleH1cbiAgICAgICAgICByZXF1ZXN0PXtyZXF1ZXN0fVxuICAgICAgICAgIGFkZHJlc3M9e3JvdXRlci5xdWVyeS5hZGRyZXNzfVxuICAgICAgICAgIGFwcHJvdmVyc0NvdW50PXt0aGlzLnByb3BzLmFwcHJvdmVyc0NvdW50fVxuICAgICAgICAvPlxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgzPlJlcXVlc3RzPC9oMz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgcHJpbWFyeVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9jYW1wYWlnbnMvcmVxdWVzdHMvJHtyb3V0ZXIucXVlcnkuYWRkcmVzc30vbmV3YCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCBSZXF1ZXN0XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxUYWJsZT5cbiAgICAgICAgPEhlYWRlcj5cbiAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgPEhlYWRlckNlbGw+SUQ8L0hlYWRlckNlbGw+XG4gICAgICAgICAgICA8SGVhZGVyQ2VsbD5EZXNjcmlwdGlvbjwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFtb3VudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPlJlY2lwaWVudDwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkFwcHJvdmFsIENvdW50PC9IZWFkZXJDZWxsPlxuICAgICAgICAgICAgPEhlYWRlckNlbGw+QXBwcm92ZTwvSGVhZGVyQ2VsbD5cbiAgICAgICAgICAgIDxIZWFkZXJDZWxsPkZpbmFsaXplPC9IZWFkZXJDZWxsPlxuICAgICAgICAgIDwvUm93PlxuICAgICAgICA8L0hlYWRlcj5cbiAgICAgICAgPEJvZHk+XG4gICAgICAgICAgPFJlcXVlc3RSb3cgLz5cbiAgICAgICAgPC9Cb2R5PlxuICAgICAgPC9UYWJsZT5cbiAgICAgIDxkaXY+Rm91bmQge3JlcXVlc3RzLmxlbmd0aH0gcmVxdWVzdHMuPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHF1ZXJ5O1xuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICBsZXQgcmVxdWVzdENvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRSZXF1ZXN0Q291bnQoKS5jYWxsKCk7XG4gIHJlcXVlc3RDb3VudCA9IHBhcnNlSW50KHJlcXVlc3RDb3VudCk7XG4gIGNvbnN0IGFwcHJvdmVyc0NvdW50ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5hcHByb3ZlcnNDb3VudCgpLmNhbGwoKTtcbiAgLy9qYXZhc2NyaXB0IHRyaWNrXG4gIGNvbnN0IHJlcXVlc3RzID0gYXdhaXQgUHJvbWlzZS5hbGwoXG4gICAgQXJyYXkocmVxdWVzdENvdW50KVxuICAgICAgLmZpbGwoKVxuICAgICAgLm1hcCgoZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIGNhbXBhaWduLm1ldGhvZHMucmVxdWVzdHMoaW5kZXgpLmNhbGwoKTtcbiAgICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcmVxdWVzdHM6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocmVxdWVzdHMpKSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBhcHByb3ZlcnNDb3VudCxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJUYWJsZSIsIlJlcXVlc3RSb3ciLCJSZXF1ZXN0cyIsInJlcXVlc3RzIiwiYXBwcm92ZXJzQ291bnQiLCJyb3V0ZXIiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclJvd3MiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJpZCIsImFkZHJlc3MiLCJxdWVyeSIsInByb3BzIiwiaDMiLCJwcmltYXJ5Iiwib25DbGljayIsInB1c2giLCJkaXYiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/index.js\n");

/***/ })

});