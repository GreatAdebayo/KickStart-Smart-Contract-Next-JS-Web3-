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

/***/ "./components/ContributeForm.js":
/*!**************************************!*\
  !*** ./components/ContributeForm.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ContributeForm = function(param) {\n    var address = param.address;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), amount = ref[0], setAmount = ref[1];\n    var campaign = (0,_ethereum_campaign__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(address);\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(_Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var accounts;\n            return _Users_adebayoiyanuoluwa_Desktop_Web3_kickstart_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3.eth.getAccounts();\n                    case 4:\n                        accounts = _ctx.sent;\n                        _ctx.next = 7;\n                        return campaign.methods.contribute().send();\n                    case 7:\n                        _ctx.next = 11;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    9\n                ]\n            ]);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form, {\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Form.Field, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        children: \"Amount to Contribute\"\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/ContributeForm.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Input, {\n                        label: \"ether\",\n                        labelPosition: \"right\",\n                        onChange: function(e) {\n                            setAmount(e.target.value);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/ContributeForm.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/ContributeForm.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                primary: true,\n                children: \"Contribute!\"\n            }, void 0, false, {\n                fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/ContributeForm.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/adebayoiyanuoluwa/Desktop/Web3/kickstart/components/ContributeForm.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(ContributeForm, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = ContributeForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContributeForm);\nvar _c;\n$RefreshReg$(_c, \"ContributeForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbnRyaWJ1dGVGb3JtLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpQztBQUN1QjtBQUNaOztBQUU1QyxJQUFNSyxjQUFjLEdBQUcsZ0JBQWlCO1FBQWRDLE9BQU8sU0FBUEEsT0FBTzs7SUFDL0IsSUFBNEJOLEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLENBQUMsRUFMNUMsTUFLZSxHQUFlQSxHQUFjLEdBQTdCLEVBTGYsU0FLMEIsR0FBSUEsR0FBYyxHQUFsQjtJQUN4QixJQUFJUyxRQUFRLEdBQUdMLDhEQUFRLENBQUNFLE9BQU8sQ0FBQztJQUVoQyxJQUFNSSxRQUFRO21CQUFHLDhMQUFPQyxDQUFDLEVBQUs7Z0JBR3BCQyxRQUFROzs7O3dCQUZoQkQsQ0FBQyxDQUFDRSxjQUFjLEVBQUUsQ0FBQzs7OytCQUVNQyxJQUFJLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFOzt3QkFBdkNKLFFBQVEsWUFBK0I7OytCQUN2Q0gsUUFBUSxDQUFDUSxPQUFPLENBQUNDLFVBQVUsRUFBRSxDQUFDQyxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O1NBRTdDO3dCQU5LVCxRQUFRLENBQVVDLENBQUM7OztPQU14QjtJQUVELHFCQUNFLDhEQUFDVixtREFBSTtRQUFDUyxRQUFRLEVBQUVBLFFBQVE7OzBCQUN0Qiw4REFBQ1QseURBQVU7O2tDQUNULDhEQUFDb0IsT0FBSztrQ0FBQyxzQkFBb0I7Ozs7OzZCQUFRO2tDQUNuQyw4REFBQ25CLG9EQUFLO3dCQUNKbUIsS0FBSyxFQUFDLE9BQU87d0JBQ2JDLGFBQWEsRUFBQyxPQUFPO3dCQUNyQkMsUUFBUSxFQUFFLFNBQUNaLENBQUMsRUFBSzs0QkFDZkgsU0FBUyxDQUFDRyxDQUFDLENBQUNhLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLENBQUM7eUJBQzNCOzs7Ozs2QkFDRDs7Ozs7O3FCQUNTOzBCQUNiLDhEQUFDdEIscURBQU07Z0JBQUN1QixPQUFPOzBCQUFDLGFBQVc7Ozs7O3FCQUFTOzs7Ozs7YUFDL0IsQ0FDUDtDQUNIO0dBM0JLckIsY0FBYztBQUFkQSxLQUFBQSxjQUFjO0FBNkJwQiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanM/ZTA1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG5jb25zdCBDb250cmlidXRlRm9ybSA9ICh7IGFkZHJlc3MgfSkgPT4ge1xuICBjb25zdCBbYW1vdW50LCBzZXRBbW91bnRdID0gdXNlU3RhdGUobnVsbCk7XG4gIGxldCBjYW1wYWlnbiA9IENhbXBhaWduKGFkZHJlc3MpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuY29udHJpYnV0ZSgpLnNlbmQoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge31cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICA8Rm9ybS5GaWVsZD5cbiAgICAgICAgPGxhYmVsPkFtb3VudCB0byBDb250cmlidXRlPC9sYWJlbD5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgbGFiZWw9XCJldGhlclwiXG4gICAgICAgICAgbGFiZWxQb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvRm9ybS5GaWVsZD5cbiAgICAgIDxCdXR0b24gcHJpbWFyeT5Db250cmlidXRlITwvQnV0dG9uPlxuICAgIDwvRm9ybT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRyaWJ1dGVGb3JtO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9ybSIsIklucHV0IiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJDb250cmlidXRlRm9ybSIsImFkZHJlc3MiLCJhbW91bnQiLCJzZXRBbW91bnQiLCJjYW1wYWlnbiIsIm9uU3VibWl0IiwiZSIsImFjY291bnRzIiwicHJldmVudERlZmF1bHQiLCJ3ZWIzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJtZXRob2RzIiwiY29udHJpYnV0ZSIsInNlbmQiLCJGaWVsZCIsImxhYmVsIiwibGFiZWxQb3NpdGlvbiIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJwcmltYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ContributeForm.js\n");

/***/ })

});