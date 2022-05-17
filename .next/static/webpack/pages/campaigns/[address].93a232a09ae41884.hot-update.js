"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/campaigns/[address]",{

/***/ "./pages/campaigns/[address].js":
/*!**************************************!*\
  !*** ./pages/campaigns/[address].js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _components_ContributeForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ContributeForm */ \"./components/ContributeForm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Address = function(param) {\n    var minimumContribution = param.minimumContribution, balance = param.balance, requestsCount = param.requestsCount, approversCount = param.approversCount, manager = param.manager;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var items = [\n        {\n            header: manager,\n            meta: \"Address of Manager\",\n            description: \"The manager created this campaign and can create requests to withdraw money\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        },\n        {\n            header: minimumContribution,\n            meta: \"Minimum Contribution (wei)\",\n            description: \"You must contribute at least this much wei to become an approver\"\n        },\n        {\n            header: requestsCount,\n            meta: \"Number of Requests\",\n            description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n        },\n        {\n            header: approversCount,\n            meta: \"Number of Approvers\",\n            description: \"Number of people who have already donated to this campaign\"\n        },\n        {\n            header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(balance, \"ether\"),\n            meta: \"Campaign Balance (ether)\",\n            description: \"The balance is how much money this campaign has left to spend.\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Campaign Show\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                        width: 10,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Card.Group, {\n                            items: items\n                        }, void 0, false, {\n                            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Grid.Column, {\n                        width: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContributeForm__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            address: router.query.address\n                        }, void 0, false, {\n                            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                primary: true,\n                onClick: function() {\n                    router.push();\n                },\n                children: \"View Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, _this);\n};\n_s(Address, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = Address;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Address);\nvar _c;\n$RefreshReg$(_c, \"Address\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ21CO0FBRVU7QUFDaEI7QUFDc0I7QUFDckI7O0FBRXhDLElBQU1RLE9BQU8sR0FBRyxnQkFNVjtRQUxKQyxtQkFBbUIsU0FBbkJBLG1CQUFtQixFQUNuQkMsT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLGFBQWEsU0FBYkEsYUFBYSxFQUNiQyxjQUFjLFNBQWRBLGNBQWMsRUFDZEMsT0FBTyxTQUFQQSxPQUFPOztJQUVQLElBQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBRTtJQUMxQixJQUFNUSxLQUFLLEdBQUc7UUFDWjtZQUNFQyxNQUFNLEVBQUVILE9BQU87WUFDZkksSUFBSSxFQUFFLG9CQUFvQjtZQUMxQkMsV0FBVyxFQUNULDZFQUE2RTtZQUMvRUMsS0FBSyxFQUFFO2dCQUFFQyxZQUFZLEVBQUUsWUFBWTthQUFFO1NBQ3RDO1FBQ0Q7WUFDRUosTUFBTSxFQUFFUCxtQkFBbUI7WUFDM0JRLElBQUksRUFBRSw0QkFBNEI7WUFDbENDLFdBQVcsRUFDVCxrRUFBa0U7U0FDckU7UUFDRDtZQUNFRixNQUFNLEVBQUVMLGFBQWE7WUFDckJNLElBQUksRUFBRSxvQkFBb0I7WUFDMUJDLFdBQVcsRUFDVCw2RkFBNkY7U0FDaEc7UUFDRDtZQUNFRixNQUFNLEVBQUVKLGNBQWM7WUFDdEJLLElBQUksRUFBRSxxQkFBcUI7WUFDM0JDLFdBQVcsRUFBRSw0REFBNEQ7U0FDMUU7UUFDRDtZQUNFRixNQUFNLEVBQUVYLG9FQUFrQixDQUFDSyxPQUFPLEVBQUUsT0FBTyxDQUFDO1lBQzVDTyxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDQyxXQUFXLEVBQ1QsZ0VBQWdFO1NBQ25FO0tBQ0Y7SUFFRCxxQkFDRSw4REFBQ2pCLDBEQUFNOzswQkFDTCw4REFBQ3NCLElBQUU7MEJBQUMsZUFBYTs7Ozs7cUJBQUs7MEJBQ3RCLDhEQUFDcEIsbURBQUk7O2tDQUNILDhEQUFDQSwwREFBVzt3QkFBQ3NCLEtBQUssRUFBRSxFQUFFO2tDQUNwQiw0RUFBQ3ZCLHlEQUFVOzRCQUFDYSxLQUFLLEVBQUVBLEtBQUs7Ozs7O2lDQUFJOzs7Ozs2QkFDaEI7a0NBQ2QsOERBQUNaLDBEQUFXO3dCQUFDc0IsS0FBSyxFQUFFLENBQUM7a0NBQ25CLDRFQUFDbkIsa0VBQWM7NEJBQUNxQixPQUFPLEVBQUViLE1BQU0sQ0FBQ2MsS0FBSyxDQUFDRCxPQUFPOzs7OztpQ0FBSTs7Ozs7NkJBQ3JDOzs7Ozs7cUJBQ1Q7MEJBQ1AsOERBQUN2QixxREFBTTtnQkFBQ3lCLE9BQU87Z0JBQUNDLE9BQU8sRUFBRSxXQUFJO29CQUFDaEIsTUFBTSxDQUFDaUIsSUFBSSxFQUFFO2lCQUFDOzBCQUFFLGNBQVk7Ozs7O3FCQUFTOzs7Ozs7YUFDNUQsQ0FDVDtDQUNIO0dBdkRLdkIsT0FBTzs7UUFPSUQsa0RBQVM7OztBQVBwQkMsS0FBQUEsT0FBTzs7QUE0RWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB7IENhcmQsIEdyaWQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBDb250cmlidXRlRm9ybSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybVwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEFkZHJlc3MgPSAoe1xuICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICBiYWxhbmNlLFxuICByZXF1ZXN0c0NvdW50LFxuICBhcHByb3ZlcnNDb3VudCxcbiAgbWFuYWdlcixcbn0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXlcIixcbiAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxuICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxuICAgICAgbWV0YTogXCJDYW1wYWlnbiBCYWxhbmNlIChldGhlcilcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQuXCIsXG4gICAgfSxcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDM+Q2FtcGFpZ24gU2hvdzwvaDM+XG4gICAgICA8R3JpZD5cbiAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXsxMH0+XG4gICAgICAgICAgPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfSAvPlxuICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezZ9PlxuICAgICAgICAgIDxDb250cmlidXRlRm9ybSBhZGRyZXNzPXtyb3V0ZXIucXVlcnkuYWRkcmVzc30gLz5cbiAgICAgICAgPC9HcmlkLkNvbHVtbj5cbiAgICAgIDwvR3JpZD5cbiAgICAgIDxCdXR0b24gcHJpbWFyeSBvbkNsaWNrPXsoKT0+e3JvdXRlci5wdXNoKCl9fT5WaWV3IFJlcXVlc3Q8L0J1dHRvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbi8vIFRoaXMgZ2V0cyBjYWxsZWQgb24gZXZlcnkgcmVxdWVzdFxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jICh7IHF1ZXJ5IH0pID0+IHtcbiAgY29uc3QgeyBhZGRyZXNzIH0gPSBxdWVyeTtcbiAgbGV0IGNhbXBhaWduID0gQ2FtcGFpZ24oYWRkcmVzcyk7XG4gIC8vIEZldGNoIGRhdGEgZnJvbSBleHRlcm5hbCBBUElcbiAgbGV0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XG4gIHN1bW1hcnkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHN1bW1hcnkpKTtcbiAgLy8gUGFzcyBkYXRhIHRvIHRoZSBwYWdlIHZpYSBwcm9wc1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtaW5pbXVtQ29udHJpYnV0aW9uOiBzdW1tYXJ5WzBdLFxuICAgICAgYmFsYW5jZTogc3VtbWFyeVsxXSxcbiAgICAgIHJlcXVlc3RzQ291bnQ6IHN1bW1hcnlbMl0sXG4gICAgICBhcHByb3ZlcnNDb3VudDogc3VtbWFyeVszXSxcbiAgICAgIG1hbmFnZXI6IHN1bW1hcnlbNF0sXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZHJlc3M7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMYXlvdXQiLCJDYXJkIiwiR3JpZCIsIkJ1dHRvbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsInVzZVJvdXRlciIsIkFkZHJlc3MiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJyb3V0ZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwidXRpbHMiLCJmcm9tV2VpIiwiaDMiLCJDb2x1bW4iLCJ3aWR0aCIsIkdyb3VwIiwiYWRkcmVzcyIsInF1ZXJ5IiwicHJpbWFyeSIsIm9uQ2xpY2siLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});