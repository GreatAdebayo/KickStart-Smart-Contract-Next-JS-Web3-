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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar Requests = function(param) {\n    var requests = param.requests, requestCount = param.requestCount;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    console.log(requests);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                children: \"Requests\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                primary: true,\n                onClick: function() {\n                    router.push(\"/campaigns/requests/\".concat(router.query.address, \"/new\"));\n                },\n                children: \"Add Request\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                children: requests.length\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/pages/campaigns/requests/[address]/index.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, _this);\n};\n_s(Requests, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Requests;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Requests);\nvar _c;\n$RefreshReg$(_c, \"Requests\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYW1wYWlnbnMvcmVxdWVzdHMvW2FkZHJlc3NdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUN5QjtBQUNYO0FBQ0c7O0FBRzNDLElBQU1JLFFBQVEsR0FBRyxnQkFBZ0M7UUFBN0JDLFFBQVEsU0FBUkEsUUFBUSxFQUFFQyxZQUFZLFNBQVpBLFlBQVk7O0lBQ3hDLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQk0sT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVEsQ0FBQyxDQUFDO0lBQ3RCLHFCQUNFLDhEQUFDSiwwREFBTTs7MEJBQ0wsOERBQUNTLElBQUU7MEJBQUMsVUFBUTs7Ozs7cUJBQUs7MEJBQ2pCLDhEQUFDUCxxREFBTTtnQkFDTFEsT0FBTztnQkFDUEMsT0FBTyxFQUFFLFdBQU07b0JBQ2JMLE1BQU0sQ0FBQ00sSUFBSSxDQUFDLHNCQUFxQixDQUF1QixNQUFJLENBQXpCTixNQUFNLENBQUNPLEtBQUssQ0FBQ0MsT0FBTyxFQUFDLE1BQUksQ0FBQyxDQUFDLENBQUM7aUJBQ2hFOzBCQUNGLGFBRUQ7Ozs7O3FCQUFTOzBCQUNULDhEQUFDQyxJQUFFOzBCQUFFWCxRQUFRLENBQUNZLE1BQU07Ozs7O3FCQUFNOzs7Ozs7YUFDbkIsQ0FDVDtDQUNIO0dBakJLYixRQUFROztRQUNHRixrREFBUzs7O0FBRHBCRSxLQUFBQSxRQUFROztBQXVDZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9bYWRkcmVzc10vaW5kZXguanM/MTNhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vLi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcblxuY29uc3QgUmVxdWVzdHMgPSAoeyByZXF1ZXN0cywgcmVxdWVzdENvdW50IH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKHJlcXVlc3RzKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGgzPlJlcXVlc3RzPC9oMz5cbiAgICAgIDxCdXR0b25cbiAgICAgICAgcHJpbWFyeVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLnB1c2goYC9jYW1wYWlnbnMvcmVxdWVzdHMvJHtyb3V0ZXIucXVlcnkuYWRkcmVzc30vbmV3YCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIEFkZCBSZXF1ZXN0XG4gICAgICA8L0J1dHRvbj5cbiAgICAgIDxoND57cmVxdWVzdHMubGVuZ3RofTwvaDQ+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IGFkZHJlc3MgfSA9IHF1ZXJ5O1xuICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICBjb25zdCByZXF1ZXN0Q291bnQgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFJlcXVlc3RDb3VudCgpLmNhbGwoKTtcbiAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBQcm9taXNlLmFsbChcbiAgICBBcnJheShyZXF1ZXN0Q291bnQpXG4gICAgICAuZmlsbCgpXG4gICAgICAubWFwKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgICByZXR1cm4gY2FtcGFpZ24ubWV0aG9kcy5yZXF1ZXN0cyhpbmRleCkuY2FsbCgpO1xuICAgICAgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICByZXF1ZXN0czogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyZXF1ZXN0cykpLFxuICAgICAgcmVxdWVzdENvdW50OiByZXF1ZXN0Q291bnQsXG4gICAgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RzO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGF5b3V0IiwidXNlUm91dGVyIiwiQnV0dG9uIiwiUmVxdWVzdHMiLCJyZXF1ZXN0cyIsInJlcXVlc3RDb3VudCIsInJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJoMyIsInByaW1hcnkiLCJvbkNsaWNrIiwicHVzaCIsInF1ZXJ5IiwiYWRkcmVzcyIsImg0IiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/campaigns/requests/[address]/index.js\n");

/***/ })

});