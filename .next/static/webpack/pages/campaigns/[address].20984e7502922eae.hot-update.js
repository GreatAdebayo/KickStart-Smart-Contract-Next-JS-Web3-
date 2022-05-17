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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.js\");\nvar _this = undefined;\n\n\n\n\nvar Address = function(param) {\n    var minimumContribution = param.minimumContribution, balance = param.balance, requests = param.requests, approversCount = param.approversCount, manager = param.manager;\n    var items = [\n        {\n            header: manager,\n            meta: \"Address of Manager\",\n            description: \"The manager created this campaign and can create requests to withdraw money\",\n            style: {\n                overflowWrap: \"break-word\"\n            }\n        },\n        {\n            header: minimumContribution,\n            meta: \"Minimum Contribution (wei)\",\n            description: \"You must contribute at least this much wei to become an approver\"\n        },\n        {\n            header: requestsCount,\n            meta: \"Number of Requests\",\n            description: \"A request tries to withdraw money from the contract. Requests must be approved by approvers\"\n        },\n        {\n            header: approversCount,\n            meta: \"Number of Approvers\",\n            description: \"Number of people who have already donated to this campaign\"\n        },\n        {\n            header: web3.utils.fromWei(balance, \"ether\"),\n            meta: \"Campaign Balance (ether)\",\n            description: \"The balance is how much money this campaign has left to spend.\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"address\"\n        }, void 0, false, {\n            fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/[address].js\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, _this);\n};\n_c = Address;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Address);\nvar _c;\n$RefreshReg$(_c, \"Address\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvW2FkZHJlc3NdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUNtQjtBQUVFO0FBRS9DLElBQU1JLE9BQU8sR0FBRyxnQkFNVjtRQUxKQyxtQkFBbUIsU0FBbkJBLG1CQUFtQixFQUNuQkMsT0FBTyxTQUFQQSxPQUFPLEVBQ1BDLFFBQVEsU0FBUkEsUUFBUSxFQUNSQyxjQUFjLFNBQWRBLGNBQWMsRUFDZEMsT0FBTyxTQUFQQSxPQUFPO0lBRVAsSUFBTUMsS0FBSyxHQUFHO1FBQ1o7WUFDRUMsTUFBTSxFQUFFRixPQUFPO1lBQ2ZHLElBQUksRUFBRSxvQkFBb0I7WUFDMUJDLFdBQVcsRUFDVCw2RUFBNkU7WUFDL0VDLEtBQUssRUFBRTtnQkFBRUMsWUFBWSxFQUFFLFlBQVk7YUFBRTtTQUN0QztRQUNEO1lBQ0VKLE1BQU0sRUFBRU4sbUJBQW1CO1lBQzNCTyxJQUFJLEVBQUUsNEJBQTRCO1lBQ2xDQyxXQUFXLEVBQ1Qsa0VBQWtFO1NBQ3JFO1FBQ0Q7WUFDRUYsTUFBTSxFQUFFSyxhQUFhO1lBQ3JCSixJQUFJLEVBQUUsb0JBQW9CO1lBQzFCQyxXQUFXLEVBQ1QsNkZBQTZGO1NBQ2hHO1FBQ0Q7WUFDRUYsTUFBTSxFQUFFSCxjQUFjO1lBQ3RCSSxJQUFJLEVBQUUscUJBQXFCO1lBQzNCQyxXQUFXLEVBQUUsNERBQTREO1NBQzFFO1FBQ0Q7WUFDRUYsTUFBTSxFQUFFTSxJQUFJLENBQUNDLEtBQUssQ0FBQ0MsT0FBTyxDQUFDYixPQUFPLEVBQUUsT0FBTyxDQUFDO1lBQzVDTSxJQUFJLEVBQUUsMEJBQTBCO1lBQ2hDQyxXQUFXLEVBQ1QsZ0VBQWdFO1NBQ25FO0tBQ0Y7SUFDRCxxQkFDRSw4REFBQ1osMERBQU07a0JBQ0wsNEVBQUNtQixLQUFHO3NCQUFDLFNBQU87Ozs7O2lCQUFNOzs7OzthQUNYLENBQ1Q7Q0FDSDtBQTVDS2hCLEtBQUFBLE9BQU87O0FBaUViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL1thZGRyZXNzXS5qcz84ZGFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL2V0aGVyZXVtL2NhbXBhaWduXCI7XG5pbXBvcnQgeyBDYXJkLCBHcmlkIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmNvbnN0IEFkZHJlc3MgPSAoe1xuICBtaW5pbXVtQ29udHJpYnV0aW9uLFxuICBiYWxhbmNlLFxuICByZXF1ZXN0cyxcbiAgYXBwcm92ZXJzQ291bnQsXG4gIG1hbmFnZXIsXG59KSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIGhlYWRlcjogbWFuYWdlcixcbiAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJUaGUgbWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNhbiBjcmVhdGUgcmVxdWVzdHMgdG8gd2l0aGRyYXcgbW9uZXlcIixcbiAgICAgIHN0eWxlOiB7IG92ZXJmbG93V3JhcDogXCJicmVhay13b3JkXCIgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjogbWluaW11bUNvbnRyaWJ1dGlvbixcbiAgICAgIG1ldGE6IFwiTWluaW11bSBDb250cmlidXRpb24gKHdlaSlcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIllvdSBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgdGhpcyBtdWNoIHdlaSB0byBiZWNvbWUgYW4gYXBwcm92ZXJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcjogcmVxdWVzdHNDb3VudCxcbiAgICAgIG1ldGE6IFwiTnVtYmVyIG9mIFJlcXVlc3RzXCIsXG4gICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgXCJBIHJlcXVlc3QgdHJpZXMgdG8gd2l0aGRyYXcgbW9uZXkgZnJvbSB0aGUgY29udHJhY3QuIFJlcXVlc3RzIG11c3QgYmUgYXBwcm92ZWQgYnkgYXBwcm92ZXJzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXI6IGFwcHJvdmVyc0NvdW50LFxuICAgICAgbWV0YTogXCJOdW1iZXIgb2YgQXBwcm92ZXJzXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJOdW1iZXIgb2YgcGVvcGxlIHdobyBoYXZlIGFscmVhZHkgZG9uYXRlZCB0byB0aGlzIGNhbXBhaWduXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBoZWFkZXI6IHdlYjMudXRpbHMuZnJvbVdlaShiYWxhbmNlLCBcImV0aGVyXCIpLFxuICAgICAgbWV0YTogXCJDYW1wYWlnbiBCYWxhbmNlIChldGhlcilcIixcbiAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICBcIlRoZSBiYWxhbmNlIGlzIGhvdyBtdWNoIG1vbmV5IHRoaXMgY2FtcGFpZ24gaGFzIGxlZnQgdG8gc3BlbmQuXCIsXG4gICAgfSxcbiAgXTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5hZGRyZXNzPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG4vLyBUaGlzIGdldHMgY2FsbGVkIG9uIGV2ZXJ5IHJlcXVlc3RcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSBhc3luYyAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgYWRkcmVzcyB9ID0gcXVlcnk7XG4gIGxldCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAvLyBGZXRjaCBkYXRhIGZyb20gZXh0ZXJuYWwgQVBJXG4gIGxldCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xuICBzdW1tYXJ5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShzdW1tYXJ5KSk7XG4gIC8vIFBhc3MgZGF0YSB0byB0aGUgcGFnZSB2aWEgcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbjogc3VtbWFyeVswXSxcbiAgICAgIGJhbGFuY2U6IHN1bW1hcnlbMV0sXG4gICAgICByZXF1ZXN0czogc3VtbWFyeVsyXSxcbiAgICAgIGFwcHJvdmVyc0NvdW50OiBzdW1tYXJ5WzNdLFxuICAgICAgbWFuYWdlcjogc3VtbWFyeVs0XSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkcmVzcztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkxheW91dCIsIkNhcmQiLCJHcmlkIiwiQWRkcmVzcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHMiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVxdWVzdHNDb3VudCIsIndlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/campaigns/[address].js\n");

/***/ })

});