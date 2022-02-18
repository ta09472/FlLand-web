"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/works/[id]";
exports.ids = ["pages/works/[id]"];
exports.modules = {

/***/ "./components/Title.js":
/*!*****************************!*\
  !*** ./components/Title.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Title)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Title({ title  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n        /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n            children: [\n                title,\n                \" | FL Land\"\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Title.js\",\n            lineNumber: 5,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Title.js\",\n        lineNumber: 4,\n        columnNumber: 5\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RpdGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0QjtBQUNiLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0hGLGtEQUFJOzRHQUNGRSxDQUFLOztnQkFBRUEsS0FBSztnQkFBQyxDQUFVOzs7Ozs7Ozs7Ozs7QUFHOUIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsLXdlYi8uL2NvbXBvbmVudHMvVGl0bGUuanM/NDZmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaXRsZSh7IHRpdGxlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9IHwgRkwgTGFuZDwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJUaXRsZSIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Title.js\n");

/***/ }),

/***/ "./pages/works/[id].js":
/*!*****************************!*\
  !*** ./pages/works/[id].js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Detail)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Title */ \"./components/Title.js\");\n\n\n\n\nfunction Detail() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Title__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: \"Detail\"\n            }, void 0, false, {\n                fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-71bbc0fcabe14dfd\" + \" \" + \"Info\",\n                /*#__PURE__*/ children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"jsx-71bbc0fcabe14dfd\",\n                    children: [\n                        \"1. 사업 명 : 무언가 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-71bbc0fcabe14dfd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                            lineNumber: 10,\n                            columnNumber: 25\n                        }, this),\n                        \"2. 사업 일자: 언젠가 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-71bbc0fcabe14dfd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                            lineNumber: 11,\n                            columnNumber: 25\n                        }, this),\n                        \"3. 위치 : 어딘가 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-71bbc0fcabe14dfd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                            lineNumber: 12,\n                            columnNumber: 23\n                        }, this),\n                        \"4. 면적 : 많이 \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {\n                            className: \"jsx-71bbc0fcabe14dfd\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                            lineNumber: 13,\n                            columnNumber: 22\n                        }, this),\n                        \"5. 제원 : 무언가\"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-71bbc0fcabe14dfd\" + \" \" + \"Photos\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"jsx-71bbc0fcabe14dfd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"jsx-71bbc0fcabe14dfd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"jsx-71bbc0fcabe14dfd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: \"jsx-71bbc0fcabe14dfd\"\n                    }, void 0, false, {\n                        fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/pages/works/[id].js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"71bbc0fcabe14dfd\",\n                children: \".Info.jsx-71bbc0fcabe14dfd{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex}\\n.Photos.jsx-71bbc0fcabe14dfd{width:100%;\\nbackground-color:silver}\\nimg.jsx-71bbc0fcabe14dfd{background-color:gold;\\nheight:60vh;\\nwidth:100%}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93b3Jrcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDRztBQUMzQixRQUFRLENBQUNFLE1BQU0sR0FBRyxDQUFDO0lBQ2hDLEtBQUssQ0FBQ0MsTUFBTSxHQUFHSCxzREFBUztJQUN4QixNQUFNOzt3RkFFREMseURBQUs7Z0JBQUNHLEtBQUssRUFBQyxDQUFROzs7Ozs7d0ZBQ3BCQyxDQUFHOzBEQUFXLENBQU07b0hBQ2xCQyxDQUFDOzs7d0JBQUMsQ0FDYTtvR0FBYUMsQ0FBRTs7Ozs7Ozt3QkFBRyxDQUNOO29HQUFHQSxDQUFFOzs7Ozs7O3dCQUFHLENBQ1I7b0dBQUhBLENBQUU7Ozs7Ozs7d0JBQUcsQ0FDUDtvR0FBREEsQ0FBRTs7Ozs7Ozt3QkFBRyxDQUVuQjs7Ozs7Ozs7Ozs7O3dGQUVERixDQUFHOzBEQUFXLENBQVE7O2dHQUNwQkcsQ0FBRzs7Ozs7OztnR0FDSEEsQ0FBRzs7Ozs7OztnR0FDSEEsQ0FBRzs7Ozs7OztnR0FDSEEsQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmwtd2ViLy4vcGFnZXMvd29ya3MvW2lkXS5qcz9jZTFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1RpdGxlXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWwoKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGl0bGUgdGl0bGU9XCJEZXRhaWxcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJJbmZvXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDEuIOyCrOyXhSDrqoUgOiDrrLTslrjqsIAgPGJyIC8+XG4gICAgICAgICAgMi4g7IKs7JeFIOydvOyekDog7Ja47KCg6rCAIDxiciAvPlxuICAgICAgICAgIDMuIOychOy5mCA6IOyWtOuUmOqwgCA8YnIgLz5cbiAgICAgICAgICA0LiDrqbTsoIEgOiDrp47snbQgPGJyIC8+XG4gICAgICAgICAgNS4g7KCc7JuQIDog66y07Ja46rCAXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJQaG90b3NcIj5cbiAgICAgICAgPGltZyAvPlxuICAgICAgICA8aW1nIC8+XG4gICAgICAgIDxpbWcgLz5cbiAgICAgICAgPGltZyAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5JbmZvIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5QaG90b3Mge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xuICAgICAgICB9XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZDtcbiAgICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJUaXRsZSIsIkRldGFpbCIsInJvdXRlciIsInRpdGxlIiwiZGl2IiwicCIsImJyIiwiaW1nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/works/[id].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/works/[id].js"));
module.exports = __webpack_exports__;

})();