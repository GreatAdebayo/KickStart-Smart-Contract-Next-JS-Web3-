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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ethereum/web3 */ \"./ethereum/web3.js\");\nvar _this = undefined;\n\n\n\n\n\nvar Address = function(param) {\n    var minimumContribution = param.minimumContribution, balance = param.balance, requestsCount = param.requestsCount, approversCount = param.approversCount, manager = param.manager;\n    var items = [\n        {\n            header: manager,\n            meta: \"Address of Manager\",\n            description: \"The manager created this campaign and can create requests to withdraw money\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        },\n        {\n            header: minimumContribution,\n            meta: \"Minimum Contribution (wei)\",\n            description: \"You must contribute at least this much wei to become an approver\"\n        },\n        {\n            header: requestsCount,\n            meta: \"Number of Requests\",\n            description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n        },\n        {\n            header: approversCount,\n            meta: \"Number of Approvers\",\n            description: \"Number of people who have already donated to this campaign\"\n        },\n        {\n            header: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(balance, \"ether\"),\n            meta: \"Campaign Balance (ether)\",\n            description: \"The balance is how much money this campaign has left to spend.\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Campaign Show\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n                        width: 10,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Card.Group, {\n                            items: items\n                        }, void 0, false, {\n                            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Grid.Column, {\n                        width: 6,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ContributeForm, {}, void 0, false, {\n                            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, _this);\n};\n_c = Address;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Address);\nvar _c;\n$RefreshReg$(_c, \"Address\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTBCO0FBQ21CO0FBRUU7QUFDUjtBQUV2QyxJQUFNSyxPQUFPLEdBQUcsZ0JBTVY7UUFMSkMsbUJBQW1CLFNBQW5CQSxtQkFBbUIsRUFDbkJDLE9BQU8sU0FBUEEsT0FBTyxFQUNQQyxhQUFhLFNBQWJBLGFBQWEsRUFDYkMsY0FBYyxTQUFkQSxjQUFjLEVBQ2RDLE9BQU8sU0FBUEEsT0FBTztJQUVQLElBQU1DLEtBQUssR0FBRztRQUNaO1lBQ0VDLE1BQU0sRUFBRUYsT0FBTztZQUNmRyxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCQyxXQUFXLEVBQ1QsNkVBQTZFO1lBQy9FQyxLQUFLLEVBQUU7Z0JBQUVDLFlBQVksRUFBRSxZQUFZO2FBQUU7U0FDdEM7UUFDRDtZQUNFSixNQUFNLEVBQUVOLG1CQUFtQjtZQUMzQk8sSUFBSSxFQUFFLDRCQUE0QjtZQUNsQ0MsV0FBVyxFQUNULGtFQUFrRTtTQUNyRTtRQUNEO1lBQ0VGLE1BQU0sRUFBRUosYUFBYTtZQUNyQkssSUFBSSxFQUFFLG9CQUFvQjtZQUMxQkMsV0FBVyxFQUNULDZGQUE2RjtTQUNoRztRQUNEO1lBQ0VGLE1BQU0sRUFBRUgsY0FBYztZQUN0QkksSUFBSSxFQUFFLHFCQUFxQjtZQUMzQkMsV0FBVyxFQUFFLDREQUE0RDtTQUMxRTtRQUNEO1lBQ0VGLE1BQU0sRUFBRVIsb0VBQWtCLENBQUNHLE9BQU8sRUFBRSxPQUFPLENBQUM7WUFDNUNNLElBQUksRUFBRSwwQkFBMEI7WUFDaENDLFdBQVcsRUFDVCxnRUFBZ0U7U0FDbkU7S0FDRjtJQUVELHFCQUNFLDhEQUFDYiwwREFBTTs7MEJBQ0wsOERBQUNrQixJQUFFOzBCQUFDLGVBQWE7Ozs7O3FCQUFLOzBCQUN0Qiw4REFBQ2hCLG1EQUFJOztrQ0FDSCw4REFBQ0EsMERBQVc7d0JBQUNrQixLQUFLLEVBQUUsRUFBRTtrQ0FDcEIsNEVBQUNuQix5REFBVTs0QkFBQ1MsS0FBSyxFQUFFQSxLQUFLOzs7OztpQ0FBSTs7Ozs7NkJBQ2hCO2tDQUNkLDhEQUFDUiwwREFBVzt3QkFBQ2tCLEtBQUssRUFBRSxDQUFDO2tDQUNuQiw0RUFBQ0UsY0FBYzs7OztpQ0FBRzs7Ozs7NkJBQ047Ozs7OztxQkFDVDs7Ozs7O2FBQ0EsQ0FDVDtDQUNIO0FBckRLbEIsS0FBQUEsT0FBTzs7QUEwRWIsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzPzhkYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcbmltcG9ydCB7IENhcmQsIEdyaWQgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi8uLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNvbnN0IEFkZHJlc3MgPSAoe1xuICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICBiYWxhbmNlLFxuICByZXF1ZXN0c0NvdW50LFxuICBhcHByb3ZlcnNDb3VudCxcbiAgbWFuYWdlcixcbn0pID0+IHtcbiAgY29uc3QgaXRlbXMgPSBbXG4gICAge1xuICAgICAgaGVhZGVyOiBtYW5hZ2VyLFxuICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlRoZSBtYW5hZ2VyIGNyZWF0ZWQgdGhpcyBjYW1wYWlnbiBhbmQgY2FuIGNyZWF0ZSByZXF1ZXN0cyB0byB3aXRoZHJhdyBtb25leVwiLFxuICAgICAgc3R5bGU6IHsgb3ZlcmZsb3dXcmFwOiBcImJyZWFrLXdvcmRcIiB9LFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyOiBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICAgICAgbWV0YTogXCJNaW5pbXVtIENvbnRyaWJ1dGlvbiAod2VpKVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiWW91IG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCB0aGlzIG11Y2ggd2VpIHRvIGJlY29tZSBhbiBhcHByb3ZlclwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxuICAgICAgbWV0YTogXCJOdW1iZXIgb2YgUmVxdWVzdHNcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIkEgcmVxdWVzdCB0cmllcyB0byB3aXRoZHJhdyBtb25leSBmcm9tIHRoZSBjb250cmFjdC4gUmVxdWVzdHMgbXVzdCBiZSBhcHByb3ZlZCBieSBhcHByb3ZlcnNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXG4gICAgICBtZXRhOiBcIk51bWJlciBvZiBBcHByb3ZlcnNcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIk51bWJlciBvZiBwZW9wbGUgd2hvIGhhdmUgYWxyZWFkeSBkb25hdGVkIHRvIHRoaXMgY2FtcGFpZ25cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjogd2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsIFwiZXRoZXJcIiksXG4gICAgICBtZXRhOiBcIkNhbXBhaWduIEJhbGFuY2UgKGV0aGVyKVwiLFxuICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgIFwiVGhlIGJhbGFuY2UgaXMgaG93IG11Y2ggbW9uZXkgdGhpcyBjYW1wYWlnbiBoYXMgbGVmdCB0byBzcGVuZC5cIixcbiAgICB9LFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cbiAgICAgIDxHcmlkPlxuICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezEwfT5cbiAgICAgICAgICA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17Nn0+XG4gICAgICAgICAgPENvbnRyaWJ1dGVGb3JtIC8+XG4gICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICA8L0dyaWQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG4vLyBUaGlzIGdldHMgY2FsbGVkIG9uIGV2ZXJ5IHJlcXVlc3RcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gcXVlcnk7XG4gIGxldCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGxldCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICBzdW1tYXJ5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdW1tYXJ5KSk7XG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcbiAgICAgIGJhbGFuY2U6IHN1bW1hcnlbMV0sXG4gICAgICByZXF1ZXN0c0NvdW50OiBzdW1tYXJ5WzJdLFxuICAgICAgYXBwcm92ZXJzQ291bnQ6IHN1bW1hcnlbM10sXG4gICAgICBtYW5hZ2VyOiBzdW1tYXJ5WzRdLFxuICAgIH0sXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRyZXNzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwiQ2FyZCIsIkdyaWQiLCJ3ZWIzIiwiQWRkcmVzcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJoMyIsIkNvbHVtbiIsIndpZHRoIiwiR3JvdXAiLCJDb250cmlidXRlRm9ybSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});