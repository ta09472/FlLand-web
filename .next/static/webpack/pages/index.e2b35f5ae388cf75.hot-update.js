"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Carousel.js":
/*!********************************!*\
  !*** ./components/Carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Slider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/ArrowBackIos */ \"./node_modules/@material-ui/icons/ArrowBackIos.js\");\n/* harmony import */ var _material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/ArrowForwardIos */ \"./node_modules/@material-ui/icons/ArrowForwardIos.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Slider() {\n    _s();\n    var TOTAL_SLIDES = 3;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0), /*#__PURE__*/ currentSlide = ref[0], setCurrentSlide = ref[1];\n    var slideRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    var nextSlide = function() {\n        if (currentSlide >= TOTAL_SLIDES) {\n            // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.\n            setCurrentSlide(0);\n        } else {\n            setCurrentSlide(currentSlide + 1);\n        }\n    };\n    var prevSlide = function() {\n        if (currentSlide === 0) {\n            setCurrentSlide(TOTAL_SLIDES);\n        } else {\n            setCurrentSlide(currentSlide - 1);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        slideRef.current.style.transition = \"all 0.7s ease-in-out\";\n        slideRef.current.style.transform = \"translateX(-\".concat(currentSlide, \"00%)\");\n    // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.\n    }, [\n        currentSlide\n    ]);\n    setTimeout(function() {\n        nextSlide();\n    }, 4000);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-a13071dd036c5205\" + \" \" + \"wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ArrowBackIos__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                style: {\n                    fontSize: 30\n                },\n                onClick: prevSlide,\n                className: \"btn\"\n            }, void 0, false, {\n                fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"jsx-a13071dd036c5205\" + \" \" + \"Container\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: slideRef,\n                    className: \"jsx-a13071dd036c5205\" + \" \" + \"SliderContainer\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/carousel1.png\",\n                            className: \"jsx-a13071dd036c5205\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/carousel2.jpeg\",\n                            className: \"jsx-a13071dd036c5205\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/carousel3.jpeg\",\n                            className: \"jsx-a13071dd036c5205\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/carousel4.jpg\",\n                            className: \"jsx-a13071dd036c5205\"\n                        }, void 0, false, {\n                            fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_icons_ArrowForwardIos__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                style: {\n                    fontSize: 30\n                },\n                onClick: nextSlide,\n                className: \"btn\"\n            }, void 0, false, {\n                fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"a13071dd036c5205\",\n                children: \".wrapper.jsx-a13071dd036c5205{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-justify-content:space-around;\\njustify-content:space-around;\\n-webkit-align-items:center;\\n-webkit-box-align:center;\\n-ms-flex-align:center;\\nalign-items:center;\\n-webkit-animation-duration:1.5s;\\nanimation-duration:1.5s;\\n-webkit-animation-name:opacity;\\nanimation-name:opacity}\\n@keyframes opacity {from {opacity:0}to {opacity:1}}\\n.Container.jsx-a13071dd036c5205{overflow:hidden;\\nborder-radius:3px;\\nbox-shadow:0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 12px rgba(0, 0, 0, 0.19)}\\n.SliderContainer.jsx-a13071dd036c5205{display:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\nwidth:1080px}\\nimg.jsx-a13071dd036c5205{display:block;\\nmargin:0 auto;\\nwidth:100%}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/beomsukim/2022/nextjs/fl-web/FlLand-web/components/Carousel.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this));\n};\n_s(Slider, \"5q7oD7AXiwo/LtZCiQOuiiTXOCM=\");\n_c = Slider;\nvar _c;\n$RefreshReg$(_c, \"Slider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ1c7QUFDTTtBQUN0Qzs7QUFFZixRQUFRLENBQUNNLE1BQU0sR0FBRyxDQUFDOztJQUNoQyxHQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ3RCLEdBQUssQ0FBbUNQLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLGlCQUEzQ1EsWUFBWSxHQUFxQlIsR0FBVyxLQUE5QlMsZUFBZSxHQUFJVCxHQUFXO0lBQ25ELEdBQUssQ0FBQ1UsUUFBUSxHQUFHUiw2Q0FBTSxDQUFDLElBQUk7SUFFNUIsR0FBSyxDQUFDUyxTQUFTLEdBQUcsUUFDcEIsR0FEMEIsQ0FBQztRQUN2QixFQUFFLEVBQUVILFlBQVksSUFBSUQsWUFBWSxFQUFFLENBQUM7WUFDakMsRUFBbUM7WUFDZUUsZUFBbkMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsTUFBTSxDQUFDO1lBQ05BLGVBQWUsQ0FBQ0QsWUFBWSxHQUFHLENBQUM7UUFDbEMsQ0FBQztJQUNILENBQUM7SUFDRCxHQUFLLENBQUNJLFNBQVMsR0FBRyxRQUNwQixHQUQwQixDQUFDO1FBQ3ZCLEVBQUUsRUFBRUosWUFBWSxLQUFLLENBQUMsRUFBRSxDQUFDO1lBQ3ZCQyxlQUFlLENBQUNGLFlBQVk7UUFDOUIsQ0FBQyxNQUFNLENBQUM7WUFDTkUsZUFBZSxDQUFDRCxZQUFZLEdBQUcsQ0FBQztRQUNsQyxDQUFDO0lBQ0gsQ0FBQztJQUVEUCxnREFBUyxDQUFDLFFBQ1osR0FEa0IsQ0FBQztRQUNmUyxRQUFRLENBQUNHLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxVQUFVLEdBQUcsQ0FBc0I7UUFDMURMLFFBQVEsQ0FBQ0csT0FBTyxDQUFDQyxLQUFLLENBQUNFLFNBQVMsR0FBSSxDQUFZLGNBQWUsTUFBSSxDQUFqQlIsWUFBWSxFQUFDLENBQUk7SUFDbkUsRUFBbUM7SUFDckMsQ0FBQyxFQUFFLENBQUNBO1FBQUFBLFlBQVk7SUFBQSxDQUFDO0lBRWpCUyxVQUFVLENBQUMsUUFDYixHQURtQixDQUFDO1FBQ2hCTixTQUFTO0lBQ1gsQ0FBQyxFQUFFLElBQUk7SUFDUCxNQUFNLDZFQUNITyxDQUFHO2tEQUFXLENBQVM7O3dGQUNyQmYsdUVBQWdCO2dCQUNmVyxLQUFLLEVBQUUsQ0FBQztvQkFBQ0ssUUFBUSxFQUFFLEVBQUU7Z0JBQUMsQ0FBQztnQkFDdkJDLE9BQU8sRUFBRVIsU0FBUztnQkFDbEJTLFNBQVMsRUFBQyxDQUFLOzs7Ozs7d0ZBRWhCSCxDQUFHOzBEQUFXLENBQVc7c0dBQ3ZCQSxDQUFHO29CQUE2QkksR0FBRyxFQUFFWixRQUFROzhEQUEvQixDQUFpQjs7b0dBQzdCYSxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBZ0I7Ozs7Ozs7b0dBQ3hCRCxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBaUI7Ozs7Ozs7b0dBQ3pCRCxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBaUI7Ozs7Ozs7b0dBQ3pCRCxDQUFHOzRCQUFDQyxHQUFHLEVBQUMsQ0FBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHNUJwQiwwRUFBbUI7Z0JBQ2xCVSxLQUFLLEVBQUUsQ0FBQztvQkFBQ0ssUUFBUSxFQUFFLEVBQUU7Z0JBQUMsQ0FBQztnQkFDdkJDLE9BQU8sRUFBRVQsU0FBUztnQkFDbEJVLFNBQVMsRUFBQyxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUN2QixDQUFDO0dBdkZ1QmYsTUFBTTtLQUFOQSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2Fyb3VzZWwuanM/MjdiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBBcnJvd0JhY2tJb3NJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQXJyb3dCYWNrSW9zXCI7XG5pbXBvcnQgQXJyb3dGb3J3YXJkSW9zSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Fycm93Rm9yd2FyZElvc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlcigpIHtcbiAgY29uc3QgVE9UQUxfU0xJREVTID0gMztcbiAgY29uc3QgW2N1cnJlbnRTbGlkZSwgc2V0Q3VycmVudFNsaWRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBzbGlkZVJlZiA9IHVzZVJlZihudWxsKTtcblxuICBjb25zdCBuZXh0U2xpZGUgPSAoKSA9PiB7XG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+PSBUT1RBTF9TTElERVMpIHtcbiAgICAgIC8vIOuNlCDsnbTsg4Eg64SY7Ja06rCIIOyKrOudvOydtOuTnOqwgCDsl4bsnLzrqbQg7Iqs65287J2065Oc66W8IOy0iOq4sO2ZlO2VqeuLiOuLpC5cbiAgICAgIHNldEN1cnJlbnRTbGlkZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0Q3VycmVudFNsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xuICAgIH1cbiAgfTtcbiAgY29uc3QgcHJldlNsaWRlID0gKCkgPT4ge1xuICAgIGlmIChjdXJyZW50U2xpZGUgPT09IDApIHtcbiAgICAgIHNldEN1cnJlbnRTbGlkZShUT1RBTF9TTElERVMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRDdXJyZW50U2xpZGUoY3VycmVudFNsaWRlIC0gMSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2xpZGVSZWYuY3VycmVudC5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC43cyBlYXNlLWluLW91dFwiO1xuICAgIHNsaWRlUmVmLmN1cnJlbnQuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7Y3VycmVudFNsaWRlfTAwJSlgO1xuICAgIC8vIOuwse2LseydhCDsgqzsmqntlZjsl6wg7Iqs65287J2065Oc66GcIOydtOuPme2VmOuKlCDslaDri4jrqZTsnbTshZjsnYQg66eM65Ot64uI64ukLlxuICB9LCBbY3VycmVudFNsaWRlXSk7XG5cbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgbmV4dFNsaWRlKCk7XG4gIH0sIDQwMDApO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgPEFycm93QmFja0lvc0ljb25cbiAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IDMwIH19XG4gICAgICAgIG9uQ2xpY2s9e3ByZXZTbGlkZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlNsaWRlckNvbnRhaW5lclwiIHJlZj17c2xpZGVSZWZ9PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Nhcm91c2VsMS5wbmdcIiAvPlxuICAgICAgICAgIDxpbWcgc3JjPVwiL2Nhcm91c2VsMi5qcGVnXCIgLz5cbiAgICAgICAgICA8aW1nIHNyYz1cIi9jYXJvdXNlbDMuanBlZ1wiIC8+XG4gICAgICAgICAgPGltZyBzcmM9XCIvY2Fyb3VzZWw0LmpwZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8QXJyb3dGb3J3YXJkSW9zSWNvblxuICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogMzAgfX1cbiAgICAgICAgb25DbGljaz17bmV4dFNsaWRlfVxuICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxuICAgICAgLz5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IDEuNXM7XG4gICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IG9wYWNpdHk7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIG9wYWNpdHkge1xuICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuQ29udGFpbmVyIHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgICAgICAgICAwIDZweCAyMHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5TbGlkZXJDb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgd2lkdGg6IDEwODBweDtcbiAgICAgICAgfVxuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJBcnJvd0JhY2tJb3NJY29uIiwiQXJyb3dGb3J3YXJkSW9zSWNvbiIsIkltYWdlIiwiU2xpZGVyIiwiVE9UQUxfU0xJREVTIiwiY3VycmVudFNsaWRlIiwic2V0Q3VycmVudFNsaWRlIiwic2xpZGVSZWYiLCJuZXh0U2xpZGUiLCJwcmV2U2xpZGUiLCJjdXJyZW50Iiwic3R5bGUiLCJ0cmFuc2l0aW9uIiwidHJhbnNmb3JtIiwic2V0VGltZW91dCIsImRpdiIsImZvbnRTaXplIiwib25DbGljayIsImNsYXNzTmFtZSIsInJlZiIsImltZyIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel.js\n");

/***/ })

});