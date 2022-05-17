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

/***/ "./components/RequestRow.js":
/*!**********************************!*\
  !*** ./components/RequestRow.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nvar _this = undefined;\n\n\n\n\n\nvar RequestRow = function(param) {\n    var id = param.id, request = param.request, address = param.address, approversCount = param.approversCount;\n    var description = request.description, value = request.value, recipient = request.recipient, complete = request.complete, approvalCount = request.approvalCount;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell;\n    var readyToFinalize = parseInt(approvalCount) > parseInt(approversCount) / 2;\n    var approve = function() {};\n    var finalize = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        disabled: complete,\n        positive: readyToFinalize && !complete,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(value, \"ether\")\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: recipient\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: parseInt(approvalCount) / parseInt(approversCount)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: !request.complete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onSubmit: approve,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: !request.complete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"teal\",\n                    basic: true,\n                    onSubmit: finalize,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDUztBQUNkO0FBQ1E7QUFFNUMsSUFBTU0sVUFBVSxHQUFHLGdCQUE4QztRQUEzQ0MsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsY0FBYyxTQUFkQSxjQUFjO0lBQ3hELElBQVFDLFdBQVcsR0FBZ0RILE9BQU8sQ0FBbEVHLFdBQVcsRUFBRUMsS0FBSyxHQUF5Q0osT0FBTyxDQUFyREksS0FBSyxFQUFFQyxTQUFTLEdBQThCTCxPQUFPLENBQTlDSyxTQUFTLEVBQUVDLFFBQVEsR0FBb0JOLE9BQU8sQ0FBbkNNLFFBQVEsRUFBRUMsYUFBYSxHQUFLUCxPQUFPLENBQXpCTyxhQUFhO0lBQzlELElBQVFDLEdBQUcsR0FBV2Qsd0RBQVgsRUFBRWUsSUFBSSxHQUFLZix5REFBTDtJQUNqQixJQUFNZ0IsZUFBZSxHQUNuQkMsUUFBUSxDQUFDSixhQUFhLENBQUMsR0FBR0ksUUFBUSxDQUFDVCxjQUFjLENBQUMsR0FBRyxDQUFDO0lBRXhELElBQU1VLE9BQU8sR0FBRyxXQUFNLEVBQUU7SUFFeEIsSUFBTUMsUUFBUSxHQUFHLFdBQU0sRUFBRTtJQUV6QixxQkFDRSw4REFBQ0wsR0FBRztRQUFDTSxRQUFRLEVBQUVSLFFBQVE7UUFBRVMsUUFBUSxFQUFFTCxlQUFlLElBQUksQ0FBQ0osUUFBUTs7MEJBQzdELDhEQUFDRyxJQUFJOzBCQUFFVixFQUFFOzs7OztxQkFBUTswQkFDakIsOERBQUNVLElBQUk7MEJBQUVOLFdBQVc7Ozs7O3FCQUFROzBCQUMxQiw4REFBQ00sSUFBSTswQkFBRWIsb0VBQWtCLENBQUNRLEtBQUssRUFBRSxPQUFPLENBQUM7Ozs7O3FCQUFROzBCQUNqRCw4REFBQ0ssSUFBSTswQkFBRUosU0FBUzs7Ozs7cUJBQVE7MEJBQ3hCLDhEQUFDSSxJQUFJOzBCQUFFRSxRQUFRLENBQUNKLGFBQWEsQ0FBQyxHQUFHSSxRQUFRLENBQUNULGNBQWMsQ0FBQzs7Ozs7cUJBQVE7MEJBQ2pFLDhEQUFDTyxJQUFJOzBCQUNGLENBQUNULE9BQU8sQ0FBQ00sUUFBUSxrQkFDaEIsOERBQUNYLHFEQUFNO29CQUFDdUIsS0FBSyxFQUFDLE9BQU87b0JBQUNDLEtBQUs7b0JBQUNDLFFBQVEsRUFBRVIsT0FBTzs4QkFBRSxTQUUvQzs7Ozs7eUJBQVM7Ozs7O3FCQUVOOzBCQUNQLDhEQUFDSCxJQUFJOzBCQUNGLENBQUNULE9BQU8sQ0FBQ00sUUFBUSxrQkFDaEIsOERBQUNYLHFEQUFNO29CQUFDdUIsS0FBSyxFQUFDLE1BQU07b0JBQUNDLEtBQUs7b0JBQUNDLFFBQVEsRUFBRVAsUUFBUTs4QkFBRSxVQUUvQzs7Ozs7eUJBQVM7Ozs7O3FCQUVOOzs7Ozs7YUFDSCxDQUNOO0NBQ0g7QUFqQ0tmLEtBQUFBLFVBQVU7QUFrQ2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzP2NhMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IHdlYjMgZnJvbSBcIi4uL2V0aGVyZXVtL3dlYjNcIjtcbmltcG9ydCBDYW1wYWlnbiBmcm9tIFwiLi4vZXRoZXJldW0vY2FtcGFpZ25cIjtcblxuY29uc3QgUmVxdWVzdFJvdyA9ICh7IGlkLCByZXF1ZXN0LCBhZGRyZXNzLCBhcHByb3ZlcnNDb3VudCB9KSA9PiB7XG4gIGNvbnN0IHsgZGVzY3JpcHRpb24sIHZhbHVlLCByZWNpcGllbnQsIGNvbXBsZXRlLCBhcHByb3ZhbENvdW50IH0gPSByZXF1ZXN0O1xuICBjb25zdCB7IFJvdywgQ2VsbCB9ID0gVGFibGU7XG4gIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9XG4gICAgcGFyc2VJbnQoYXBwcm92YWxDb3VudCkgPiBwYXJzZUludChhcHByb3ZlcnNDb3VudCkgLyAyO1xuXG4gIGNvbnN0IGFwcHJvdmUgPSAoKSA9PiB7fTtcblxuICBjb25zdCBmaW5hbGl6ZSA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBkaXNhYmxlZD17Y29tcGxldGV9IHBvc2l0aXZlPXtyZWFkeVRvRmluYWxpemUgJiYgIWNvbXBsZXRlfT5cbiAgICAgIDxDZWxsPntpZH08L0NlbGw+XG4gICAgICA8Q2VsbD57ZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaSh2YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XG4gICAgICA8Q2VsbD57cmVjaXBpZW50fTwvQ2VsbD5cbiAgICAgIDxDZWxsPntwYXJzZUludChhcHByb3ZhbENvdW50KSAvIHBhcnNlSW50KGFwcHJvdmVyc0NvdW50KX08L0NlbGw+XG4gICAgICA8Q2VsbD5cbiAgICAgICAgeyFyZXF1ZXN0LmNvbXBsZXRlICYmIChcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvblN1Ym1pdD17YXBwcm92ZX0+XG4gICAgICAgICAgICBBcHByb3ZlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NlbGw+XG4gICAgICA8Q2VsbD5cbiAgICAgICAgeyFyZXF1ZXN0LmNvbXBsZXRlICYmIChcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIGJhc2ljIG9uU3VibWl0PXtmaW5hbGl6ZX0+XG4gICAgICAgICAgICBGaW5hbGl6ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9DZWxsPlxuICAgIDwvUm93PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiY29tcGxldGUiLCJhcHByb3ZhbENvdW50IiwiUm93IiwiQ2VsbCIsInJlYWR5VG9GaW5hbGl6ZSIsInBhcnNlSW50IiwiYXBwcm92ZSIsImZpbmFsaXplIiwiZGlzYWJsZWQiLCJwb3NpdGl2ZSIsInV0aWxzIiwiZnJvbVdlaSIsImNvbG9yIiwiYmFzaWMiLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});