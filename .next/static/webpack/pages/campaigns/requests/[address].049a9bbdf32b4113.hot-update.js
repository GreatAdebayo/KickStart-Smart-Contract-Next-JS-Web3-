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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\n\nvar RequestRow = function(param) {\n    var id = param.id, request = param.request, address = param.address, approversCount = param.approversCount;\n    var description = request.description, value = request.value, recipient = request.recipient, complete = request.complete, approvalCount = request.approvalCount;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Table.Cell;\n    var readyToFinalize = parseInt(approvalCount) > parseInt(approversCount) / 2;\n    var approve = function() {\n        var _ref = _asyncToGenerator(_Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var campaign;\n            return _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(address);\n                        try {} catch (error) {}\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function approve() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var finalize = function() {};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Row, {\n        disabled: complete,\n        positive: readyToFinalize && !complete,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: id\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: _ethereum_web3__WEBPACK_IMPORTED_MODULE_3__[\"default\"].utils.fromWei(value, \"ether\")\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: recipient\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: parseInt(approvalCount) / parseInt(approversCount)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: !request.complete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    color: \"green\",\n                    basic: true,\n                    onSubmit: approve,\n                    children: \"Approve\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Cell, {\n                children: !request.complete && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    color: \"teal\",\n                    basic: true,\n                    onSubmit: finalize,\n                    children: \"Finalize\"\n                }, void 0, false, {\n                    fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                    lineNumber: 38,\n                    columnNumber: 11\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/RequestRow.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, _this);\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNTO0FBQ2Q7QUFDUTtBQUU1QyxJQUFNTSxVQUFVLEdBQUcsZ0JBQThDO1FBQTNDQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxjQUFjLFNBQWRBLGNBQWM7SUFDeEQsSUFBUUMsV0FBVyxHQUFnREgsT0FBTyxDQUFsRUcsV0FBVyxFQUFFQyxLQUFLLEdBQXlDSixPQUFPLENBQXJESSxLQUFLLEVBQUVDLFNBQVMsR0FBOEJMLE9BQU8sQ0FBOUNLLFNBQVMsRUFBRUMsUUFBUSxHQUFvQk4sT0FBTyxDQUFuQ00sUUFBUSxFQUFFQyxhQUFhLEdBQUtQLE9BQU8sQ0FBekJPLGFBQWE7SUFDOUQsSUFBUUMsR0FBRyxHQUFXZCx3REFBWCxFQUFFZSxJQUFJLEdBQUtmLHlEQUFMO0lBQ2pCLElBQU1nQixlQUFlLEdBQ25CQyxRQUFRLENBQUNKLGFBQWEsQ0FBQyxHQUFHSSxRQUFRLENBQUNULGNBQWMsQ0FBQyxHQUFHLENBQUM7SUFFeEQsSUFBTVUsT0FBTzttQkFBRyxnTUFBWTtnQkFDcEJDLFFBQVE7Ozs7d0JBQVJBLFFBQVEsR0FBR2hCLDhEQUFRLENBQUNJLE9BQU8sQ0FBQyxDQUFDO3dCQUVuQyxJQUFJLEVBRUgsQ0FBQyxPQUFPYSxLQUFLLEVBQUUsRUFBRTs7Ozs7O1NBQ25CO3dCQU5LRixPQUFPOzs7T0FNWjtJQUVELElBQU1HLFFBQVEsR0FBRyxXQUFNLEVBQUU7SUFFekIscUJBQ0UsOERBQUNQLEdBQUc7UUFBQ1EsUUFBUSxFQUFFVixRQUFRO1FBQUVXLFFBQVEsRUFBRVAsZUFBZSxJQUFJLENBQUNKLFFBQVE7OzBCQUM3RCw4REFBQ0csSUFBSTswQkFBRVYsRUFBRTs7Ozs7cUJBQVE7MEJBQ2pCLDhEQUFDVSxJQUFJOzBCQUFFTixXQUFXOzs7OztxQkFBUTswQkFDMUIsOERBQUNNLElBQUk7MEJBQUViLG9FQUFrQixDQUFDUSxLQUFLLEVBQUUsT0FBTyxDQUFDOzs7OztxQkFBUTswQkFDakQsOERBQUNLLElBQUk7MEJBQUVKLFNBQVM7Ozs7O3FCQUFROzBCQUN4Qiw4REFBQ0ksSUFBSTswQkFBRUUsUUFBUSxDQUFDSixhQUFhLENBQUMsR0FBR0ksUUFBUSxDQUFDVCxjQUFjLENBQUM7Ozs7O3FCQUFROzBCQUNqRSw4REFBQ08sSUFBSTswQkFDRixDQUFDVCxPQUFPLENBQUNNLFFBQVEsa0JBQ2hCLDhEQUFDWCxxREFBTTtvQkFBQ3lCLEtBQUssRUFBQyxPQUFPO29CQUFDQyxLQUFLO29CQUFDQyxRQUFRLEVBQUVWLE9BQU87OEJBQUUsU0FFL0M7Ozs7O3lCQUFTOzs7OztxQkFFTjswQkFDUCw4REFBQ0gsSUFBSTswQkFDRixDQUFDVCxPQUFPLENBQUNNLFFBQVEsa0JBQ2hCLDhEQUFDWCxxREFBTTtvQkFBQ3lCLEtBQUssRUFBQyxNQUFNO29CQUFDQyxLQUFLO29CQUFDQyxRQUFRLEVBQUVQLFFBQVE7OEJBQUUsVUFFL0M7Ozs7O3lCQUFTOzs7OztxQkFFTjs7Ozs7O2FBQ0gsQ0FDTjtDQUNIO0FBdkNLakIsS0FBQUEsVUFBVTtBQXdDaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5jb25zdCBSZXF1ZXN0Um93ID0gKHsgaWQsIHJlcXVlc3QsIGFkZHJlc3MsIGFwcHJvdmVyc0NvdW50IH0pID0+IHtcbiAgY29uc3QgeyBkZXNjcmlwdGlvbiwgdmFsdWUsIHJlY2lwaWVudCwgY29tcGxldGUsIGFwcHJvdmFsQ291bnQgfSA9IHJlcXVlc3Q7XG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgY29uc3QgcmVhZHlUb0ZpbmFsaXplID1cbiAgICBwYXJzZUludChhcHByb3ZhbENvdW50KSA+IHBhcnNlSW50KGFwcHJvdmVyc0NvdW50KSAvIDI7XG5cbiAgY29uc3QgYXBwcm92ZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuICAgIFxuICAgIHRyeSB7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfTtcblxuICBjb25zdCBmaW5hbGl6ZSA9ICgpID0+IHt9O1xuXG4gIHJldHVybiAoXG4gICAgPFJvdyBkaXNhYmxlZD17Y29tcGxldGV9IHBvc2l0aXZlPXtyZWFkeVRvRmluYWxpemUgJiYgIWNvbXBsZXRlfT5cbiAgICAgIDxDZWxsPntpZH08L0NlbGw+XG4gICAgICA8Q2VsbD57ZGVzY3JpcHRpb259PC9DZWxsPlxuICAgICAgPENlbGw+e3dlYjMudXRpbHMuZnJvbVdlaSh2YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XG4gICAgICA8Q2VsbD57cmVjaXBpZW50fTwvQ2VsbD5cbiAgICAgIDxDZWxsPntwYXJzZUludChhcHByb3ZhbENvdW50KSAvIHBhcnNlSW50KGFwcHJvdmVyc0NvdW50KX08L0NlbGw+XG4gICAgICA8Q2VsbD5cbiAgICAgICAgeyFyZXF1ZXN0LmNvbXBsZXRlICYmIChcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvblN1Ym1pdD17YXBwcm92ZX0+XG4gICAgICAgICAgICBBcHByb3ZlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICl9XG4gICAgICA8L0NlbGw+XG4gICAgICA8Q2VsbD5cbiAgICAgICAgeyFyZXF1ZXN0LmNvbXBsZXRlICYmIChcbiAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwidGVhbFwiIGJhc2ljIG9uU3VibWl0PXtmaW5hbGl6ZX0+XG4gICAgICAgICAgICBGaW5hbGl6ZVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9DZWxsPlxuICAgIDwvUm93PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3RSb3c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJUYWJsZSIsIkJ1dHRvbiIsIndlYjMiLCJDYW1wYWlnbiIsIlJlcXVlc3RSb3ciLCJpZCIsInJlcXVlc3QiLCJhZGRyZXNzIiwiYXBwcm92ZXJzQ291bnQiLCJkZXNjcmlwdGlvbiIsInZhbHVlIiwicmVjaXBpZW50IiwiY29tcGxldGUiLCJhcHByb3ZhbENvdW50IiwiUm93IiwiQ2VsbCIsInJlYWR5VG9GaW5hbGl6ZSIsInBhcnNlSW50IiwiYXBwcm92ZSIsImNhbXBhaWduIiwiZXJyb3IiLCJmaW5hbGl6ZSIsImRpc2FibGVkIiwicG9zaXRpdmUiLCJ1dGlscyIsImZyb21XZWkiLCJjb2xvciIsImJhc2ljIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});