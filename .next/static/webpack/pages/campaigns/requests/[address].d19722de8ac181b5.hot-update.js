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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ \"./node_modules/semantic-ui-react/dist/es/index.js\");\n/* harmony import */ var _ethereum_web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ethereum/web3 */ \"./ethereum/web3.js\");\n/* harmony import */ var _ethereum_campaign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ethereum/campaign */ \"./ethereum/campaign.js\");\nvar _this = undefined;\n\n\n\n\n// class RequestRow extends Component {\n//   onApprove = async () => {\n//     const campaign = Campaign(this.props.address);\n//     const accounts = await web3.eth.getAccounts();\n//     await campaign.methods.approveRequest(this.props.id).send({\n//       from: accounts[0],\n//     });\n//   };\n//   onFinalize = async () => {\n//     const campaign = Campaign(this.props.address);\n//     const accounts = await web3.eth.getAccounts();\n//     await campaign.methods.finalizeRequest(this.props.id).send({\n//       from: accounts[0],\n//     });\n//   };\n//   render() {\n//     const { Row, Cell } = Table;\n//     const { id, request, approversCount } = this.props;\n//     const readyToFinalize = request.approvalCount > approversCount / 2;\n//     return (\n//       <Row\n//         disabled={request.complete}\n//         positive={readyToFinalize && !request.complete}\n//       >\n//         <Cell>{id}</Cell>\n//         <Cell>{request.description}</Cell>\n//         <Cell>{web3.utils.fromWei(request.value, \"ether\")}</Cell>\n//         <Cell>{request.recipient}</Cell>\n//         <Cell>\n//           {request.approvalCount}/{approversCount}\n//         </Cell>\n//         <Cell>\n//           {request.complete ? null : (\n//             <Button color=\"green\" basic onClick={this.onApprove}>\n//               Approve\n//             </Button>\n//           )}\n//         </Cell>\n//         <Cell>\n//           {request.complete ? null : (\n//             <Button color=\"teal\" basic onClick={this.onFinalize}>\n//               Finalize\n//             </Button>\n//           )}\n//         </Cell>\n//       </Row>\n//     );\n//   }\n// }\nvar RequestRow = function(param) {\n    var key = param.key, id = param.id, requests = param.requests, address = param.address, approversCount = param.approversCount;\n    var Row = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Row, Cell = semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Table.Cell;\n    var _props = _this.props, id = _props.id, request = _props.request, approversCount = _props.approversCount;\n    var readyToFinalize = request.approvalCount > approversCount / 2;\n};\n_c = RequestRow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RequestRow);\nvar _c;\n$RefreshReg$(_c, \"RequestRow\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBeUM7QUFDUztBQUNkO0FBQ1E7QUFFNUMsdUNBQXVDO0FBQ3ZDLDhCQUE4QjtBQUM5QixxREFBcUQ7QUFFckQscURBQXFEO0FBQ3JELGtFQUFrRTtBQUNsRSwyQkFBMkI7QUFDM0IsVUFBVTtBQUNWLE9BQU87QUFFUCwrQkFBK0I7QUFDL0IscURBQXFEO0FBRXJELHFEQUFxRDtBQUNyRCxtRUFBbUU7QUFDbkUsMkJBQTJCO0FBQzNCLFVBQVU7QUFDVixPQUFPO0FBRVAsZUFBZTtBQUNmLG1DQUFtQztBQUNuQywwREFBMEQ7QUFDMUQsMEVBQTBFO0FBRTFFLGVBQWU7QUFDZixhQUFhO0FBQ2Isc0NBQXNDO0FBQ3RDLDBEQUEwRDtBQUMxRCxVQUFVO0FBQ1YsNEJBQTRCO0FBQzVCLDZDQUE2QztBQUM3QyxvRUFBb0U7QUFDcEUsMkNBQTJDO0FBQzNDLGlCQUFpQjtBQUNqQixxREFBcUQ7QUFDckQsa0JBQWtCO0FBQ2xCLGlCQUFpQjtBQUNqQix5Q0FBeUM7QUFDekMsb0VBQW9FO0FBQ3BFLHdCQUF3QjtBQUN4Qix3QkFBd0I7QUFDeEIsZUFBZTtBQUNmLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIseUNBQXlDO0FBQ3pDLG9FQUFvRTtBQUNwRSx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZUFBZTtBQUNmLFNBQVM7QUFDVCxNQUFNO0FBQ04sSUFBSTtBQUNKLElBQU1NLFVBQVUsR0FBRyxnQkFBb0Q7UUFBakRDLEdBQUcsU0FBSEEsR0FBRyxFQUFFQyxFQUFFLFNBQUZBLEVBQUUsRUFBRUMsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxjQUFjLFNBQWRBLGNBQWM7SUFDOUQsSUFBUUMsR0FBRyxHQUFXVix3REFBWCxFQUFFVyxJQUFJLEdBQUtYLHlEQUFMO0lBQ2pCLElBQXdDLE1BQVUsR0FBVixNQUFLWSxLQUFLLEVBQTFDTixFQUFFLEdBQThCLE1BQVUsQ0FBMUNBLEVBQUUsRUFBRU8sT0FBTyxHQUFxQixNQUFVLENBQXRDQSxPQUFPLEVBQUVKLGNBQWMsR0FBSyxNQUFVLENBQTdCQSxjQUFjO0lBQ25DLElBQU1LLGVBQWUsR0FBR0QsT0FBTyxDQUFDRSxhQUFhLEdBQUdOLGNBQWMsR0FBRyxDQUFDO0NBQ25FO0FBSktMLEtBQUFBLFVBQVU7QUFLaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlcXVlc3RSb3cuanM/Y2EzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBUYWJsZSwgQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi4vZXRoZXJldW0vd2ViM1wiO1xuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi9ldGhlcmV1bS9jYW1wYWlnblwiO1xuXG4vLyBjbGFzcyBSZXF1ZXN0Um93IGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgb25BcHByb3ZlID0gYXN5bmMgKCkgPT4ge1xuLy8gICAgIGNvbnN0IGNhbXBhaWduID0gQ2FtcGFpZ24odGhpcy5wcm9wcy5hZGRyZXNzKTtcblxuLy8gICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2ViMy5ldGguZ2V0QWNjb3VudHMoKTtcbi8vICAgICBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmFwcHJvdmVSZXF1ZXN0KHRoaXMucHJvcHMuaWQpLnNlbmQoe1xuLy8gICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4vLyAgICAgfSk7XG4vLyAgIH07XG5cbi8vICAgb25GaW5hbGl6ZSA9IGFzeW5jICgpID0+IHtcbi8vICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHRoaXMucHJvcHMuYWRkcmVzcyk7XG5cbi8vICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4vLyAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5maW5hbGl6ZVJlcXVlc3QodGhpcy5wcm9wcy5pZCkuc2VuZCh7XG4vLyAgICAgICBmcm9tOiBhY2NvdW50c1swXSxcbi8vICAgICB9KTtcbi8vICAgfTtcblxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuLy8gICAgIGNvbnN0IHsgaWQsIHJlcXVlc3QsIGFwcHJvdmVyc0NvdW50IH0gPSB0aGlzLnByb3BzO1xuLy8gICAgIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcblxuLy8gICAgIHJldHVybiAoXG4vLyAgICAgICA8Um93XG4vLyAgICAgICAgIGRpc2FibGVkPXtyZXF1ZXN0LmNvbXBsZXRlfVxuLy8gICAgICAgICBwb3NpdGl2ZT17cmVhZHlUb0ZpbmFsaXplICYmICFyZXF1ZXN0LmNvbXBsZXRlfVxuLy8gICAgICAgPlxuLy8gICAgICAgICA8Q2VsbD57aWR9PC9DZWxsPlxuLy8gICAgICAgICA8Q2VsbD57cmVxdWVzdC5kZXNjcmlwdGlvbn08L0NlbGw+XG4vLyAgICAgICAgIDxDZWxsPnt3ZWIzLnV0aWxzLmZyb21XZWkocmVxdWVzdC52YWx1ZSwgXCJldGhlclwiKX08L0NlbGw+XG4vLyAgICAgICAgIDxDZWxsPntyZXF1ZXN0LnJlY2lwaWVudH08L0NlbGw+XG4vLyAgICAgICAgIDxDZWxsPlxuLy8gICAgICAgICAgIHtyZXF1ZXN0LmFwcHJvdmFsQ291bnR9L3thcHByb3ZlcnNDb3VudH1cbi8vICAgICAgICAgPC9DZWxsPlxuLy8gICAgICAgICA8Q2VsbD5cbi8vICAgICAgICAgICB7cmVxdWVzdC5jb21wbGV0ZSA/IG51bGwgOiAoXG4vLyAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwiZ3JlZW5cIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uQXBwcm92ZX0+XG4vLyAgICAgICAgICAgICAgIEFwcHJvdmVcbi8vICAgICAgICAgICAgIDwvQnV0dG9uPlxuLy8gICAgICAgICAgICl9XG4vLyAgICAgICAgIDwvQ2VsbD5cbi8vICAgICAgICAgPENlbGw+XG4vLyAgICAgICAgICAge3JlcXVlc3QuY29tcGxldGUgPyBudWxsIDogKFxuLy8gICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInRlYWxcIiBiYXNpYyBvbkNsaWNrPXt0aGlzLm9uRmluYWxpemV9PlxuLy8gICAgICAgICAgICAgICBGaW5hbGl6ZVxuLy8gICAgICAgICAgICAgPC9CdXR0b24+XG4vLyAgICAgICAgICAgKX1cbi8vICAgICAgICAgPC9DZWxsPlxuLy8gICAgICAgPC9Sb3c+XG4vLyAgICAgKTtcbi8vICAgfVxuLy8gfVxuY29uc3QgUmVxdWVzdFJvdyA9ICh7IGtleSwgaWQsIHJlcXVlc3RzLCBhZGRyZXNzLCBhcHByb3ZlcnNDb3VudCB9KSA9PiB7XG4gIGNvbnN0IHsgUm93LCBDZWxsIH0gPSBUYWJsZTtcbiAgY29uc3QgeyBpZCwgcmVxdWVzdCwgYXBwcm92ZXJzQ291bnQgfSA9IHRoaXMucHJvcHM7XG4gIGNvbnN0IHJlYWR5VG9GaW5hbGl6ZSA9IHJlcXVlc3QuYXBwcm92YWxDb3VudCA+IGFwcHJvdmVyc0NvdW50IC8gMjtcbn07XG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiVGFibGUiLCJCdXR0b24iLCJ3ZWIzIiwiQ2FtcGFpZ24iLCJSZXF1ZXN0Um93Iiwia2V5IiwiaWQiLCJyZXF1ZXN0cyIsImFkZHJlc3MiLCJhcHByb3ZlcnNDb3VudCIsIlJvdyIsIkNlbGwiLCJwcm9wcyIsInJlcXVlc3QiLCJyZWFkeVRvRmluYWxpemUiLCJhcHByb3ZhbENvdW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/RequestRow.js\n");

/***/ })

});