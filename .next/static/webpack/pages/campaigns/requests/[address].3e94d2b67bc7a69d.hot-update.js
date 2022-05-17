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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nvar _this = undefined;\n\n\n\n\n\nvar RequestRow = function(param) {\n    var id = param.id, request = param.request, address = param.address, approversCount = param.approversCount;\n    var description = request.description, value = request.value, recipient = request.recipient, complete = request.complete, approvalCount = request.approvalCount;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Table.Cell;\n    var readyToFinalize = parseInt(approvalCount) > parseInt(approversCount) / 2;\n    var approve = function() {\n        var campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n    };\n    var finalize = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Row, {\n        disabled: complete,\n        positive: readyToFinalize && !complete,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].utils.fromWei(value, \"ether\")\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: recipient\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: parseInt(approvalCount) / parseInt(approversCount)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: !request.complete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onSubmit: approve,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Cell, {\n                children: !request.complete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                    color: \"teal\",\n                    basic: true,\n                    onSubmit: finalize,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBeUM7QUFDUztBQUNkO0FBQ1E7QUFFNUMsSUFBTU0sVUFBVSxHQUFHLGdCQUE4QztRQUEzQ0MsRUFBRSxTQUFGQSxFQUFFLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxPQUFPLFNBQVBBLE9BQU8sRUFBRUMsY0FBYyxTQUFkQSxjQUFjO0lBQ3hELElBQVFDLFdBQVcsR0FBZ0RILE9BQU8sQ0FBbEVHLFdBQVcsRUFBRUMsS0FBSyxHQUF5Q0osT0FBTyxDQUFyREksS0FBSyxFQUFFQyxTQUFTLEdBQThCTCxPQUFPLENBQTlDSyxTQUFTLEVBQUVDLFFBQVEsR0FBb0JOLE9BQU8sQ0FBbkNNLFFBQVEsRUFBRUMsYUFBYSxHQUFLUCxPQUFPLENBQXpCTyxhQUFhO0lBQzlELElBQVFDLEdBQUcsR0FBV2Qsd0RBQVgsRUFBRWUsSUFBSSxHQUFLZix5REFBTDtJQUNqQixJQUFNZ0IsZUFBZSxHQUNuQkMsUUFBUSxDQUFDSixhQUFhLENBQUMsR0FBR0ksUUFBUSxDQUFDVCxjQUFjLENBQUMsR0FBRyxDQUFDO0lBRXhELElBQU1VLE9BQU8sR0FBRyxXQUFNO1FBQ3BCLElBQU1DLFFBQVEsR0FBR2hCLDhEQUFRLENBQUNJLE9BQU8sQ0FBQztLQUVuQztJQUVELElBQU1hLFFBQVEsR0FBRyxXQUFNLEVBQUU7SUFFekIscUJBQ0UsOERBQUNOLEdBQUc7UUFBQ08sUUFBUSxFQUFFVCxRQUFRO1FBQUVVLFFBQVEsRUFBRU4sZUFBZSxJQUFJLENBQUNKLFFBQVE7OzBCQUM3RCw4REFBQ0csSUFBSTswQkFBRVYsRUFBRTs7Ozs7cUJBQVE7MEJBQ2pCLDhEQUFDVSxJQUFJOzBCQUFFTixXQUFXOzs7OztxQkFBUTswQkFDMUIsOERBQUNNLElBQUk7MEJBQUViLG9FQUFrQixDQUFDUSxLQUFLLEVBQUUsT0FBTyxDQUFDOzs7OztxQkFBUTswQkFDakQsOERBQUNLLElBQUk7MEJBQUVKLFNBQVM7Ozs7O3FCQUFROzBCQUN4Qiw4REFBQ0ksSUFBSTswQkFBRUUsUUFBUSxDQUFDSixhQUFhLENBQUMsR0FBR0ksUUFBUSxDQUFDVCxjQUFjLENBQUM7Ozs7O3FCQUFROzBCQUNqRSw4REFBQ08sSUFBSTswQkFDRixDQUFDVCxPQUFPLENBQUNNLFFBQVEsa0JBQ2hCLDhEQUFDWCxxREFBTTtvQkFBQ3dCLEtBQUssRUFBQyxPQUFPO29CQUFDQyxLQUFLO29CQUFDQyxRQUFRLEVBQUVULE9BQU87OEJBQUUsU0FFL0M7Ozs7O3lCQUFTOzs7OztxQkFFTjswQkFDUCw4REFBQ0gsSUFBSTswQkFDRixDQUFDVCxPQUFPLENBQUNNLFFBQVEsa0JBQ2hCLDhEQUFDWCxxREFBTTtvQkFBQ3dCLEtBQUssRUFBQyxNQUFNO29CQUFDQyxLQUFLO29CQUFDQyxRQUFRLEVBQUVQLFFBQVE7OEJBQUUsVUFFL0M7Ozs7O3lCQUFTOzs7OztxQkFFTjs7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0FBcENLaEIsS0FBQUEsVUFBVTtBQXFDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5jb25zdCBSZXF1ZXN0Um93ID0gKHsgaWQsIHJlcXVlc3QsIGFkZHJlc3MsIGFwcHJvdmVyc0NvdW50IH0pID0+IHtcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCwgY29tcGxldGUsIGFwcHJvdmFsQ291bnQgfSA9IHJlcXVlc3Q7XG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgY29uc3QgcmVhZHlUb0ZpbmFsaXplID1cbiAgICBwYXJzZUludChhcHByb3ZhbENvdW50KSA+IHBhcnNlSW50KGFwcHJvdmVyc0NvdW50KSAvIDI7XG5cbiAgY29uc3QgYXBwcm92ZSA9ICgpID0+IHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAgIFxuICB9O1xuXG4gIGNvbnN0IGZpbmFsaXplID0gKCkgPT4ge307XG5cbiAgcmV0dXJuIChcbiAgICA8Um93IGRpc2FibGVkPXtjb21wbGV0ZX0gcG9zaXRpdmU9e3JlYWR5VG9GaW5hbGl6ZSAmJiAhY29tcGxldGV9PlxuICAgICAgPENlbGw+e2lkfTwvQ2VsbD5cbiAgICAgIDxDZWxsPntkZXNjcmlwdGlvbn08L0NlbGw+XG4gICAgICA8Q2VsbD57d2ViMy51dGlscy5mcm9tV2VpKHZhbHVlLCBcImV0aGVyXCIpfTwvQ2VsbD5cbiAgICAgIDxDZWxsPntyZWNpcGllbnR9PC9DZWxsPlxuICAgICAgPENlbGw+e3BhcnNlSW50KGFwcHJvdmFsQ291bnQpIC8gcGFyc2VJbnQoYXBwcm92ZXJzQ291bnQpfTwvQ2VsbD5cbiAgICAgIDxDZWxsPlxuICAgICAgICB7IXJlcXVlc3QuY29tcGxldGUgJiYgKFxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJncmVlblwiIGJhc2ljIG9uU3VibWl0PXthcHByb3ZlfT5cbiAgICAgICAgICAgIEFwcHJvdmVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgKX1cbiAgICAgIDwvQ2VsbD5cbiAgICAgIDxDZWxsPlxuICAgICAgICB7IXJlcXVlc3QuY29tcGxldGUgJiYgKFxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ0ZWFsXCIgYmFzaWMgb25TdWJtaXQ9e2ZpbmFsaXplfT5cbiAgICAgICAgICAgIEZpbmFsaXplXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NlbGw+XG4gICAgPC9Sb3c+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUmVxdWVzdFJvdztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwid2ViMyIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsImlkIiwicmVxdWVzdCIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsImRlc2NyaXB0aW9uIiwidmFsdWUiLCJyZWNpcGllbnQiLCJjb21wbGV0ZSIsImFwcHJvdmFsQ291bnQiLCJSb3ciLCJDZWxsIiwicmVhZHlUb0ZpbmFsaXplIiwicGFyc2VJbnQiLCJhcHByb3ZlIiwiY2FtcGFpZ24iLCJmaW5hbGl6ZSIsImRpc2FibGVkIiwicG9zaXRpdmUiLCJ1dGlscyIsImZyb21XZWkiLCJjb2xvciIsImJhc2ljIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});