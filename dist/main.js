/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\n/* harmony import */ var _scripts_nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/nav */ \"./src/scripts/nav.js\");\n/* harmony import */ var _scripts_nav__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_nav__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/menu */ \"./src/scripts/menu.js\");\n/* harmony import */ var _scripts_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_menu__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _scripts_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/account */ \"./src/scripts/account.js\");\n/* harmony import */ var _scripts_account__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_account__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n// import \"./scripts/carousel\";\n\n//# sourceURL=webpack://forforce/./src/index.js?");

/***/ }),

/***/ "./src/scripts/account.js":
/*!********************************!*\
  !*** ./src/scripts/account.js ***!
  \********************************/
/***/ (() => {

eval("(function () {\n  var parentBtn = document.querySelector(\".account__BtnBlock\");\n  var btns = document.querySelectorAll(\".account__Btn\");\n  var cards = document.querySelectorAll(\".account__card-outerWrapper\");\n  btns.forEach(function (btn) {\n    return btn.addEventListener(\"click\", function () {\n      return setActive(btn);\n    });\n  });\n  function setActive(btn) {\n    parentBtn.querySelector(\".active-btn\").classList.remove(\"active-btn\");\n    btn.classList.add(\"active-btn\");\n    var cardId = btn.textContent === \"Yearly\" ? \"enterprise\" : \"premium\";\n    var card = document.getElementById(cardId);\n    card.scrollIntoView({\n      behavior: \"smooth\"\n    });\n    var target = btn.getAttribute(\"data-target\");\n    cards.forEach(function (card) {\n      if (card.getAttribute(\"data-target\") === target) {\n        card.classList.add(\"active-card\");\n      } else {\n        card.classList.remove(\"active-card\");\n      }\n    });\n  }\n})();\n\n//# sourceURL=webpack://forforce/./src/scripts/account.js?");

/***/ }),

/***/ "./src/scripts/menu.js":
/*!*****************************!*\
  !*** ./src/scripts/menu.js ***!
  \*****************************/
/***/ (() => {

eval("(function () {\n  var refs = {\n    openModalBtn: document.querySelector('.menu'),\n    closeModalBtn: document.querySelector('.close'),\n    modal: document.querySelector('.backdrop')\n  };\n  refs.openModalBtn.addEventListener('click', toggleModal);\n  refs.closeModalBtn.addEventListener('click', toggleModal);\n  function toggleModal() {\n    refs.modal.classList.toggle('backdrop--hidden');\n  }\n})();\n\n//# sourceURL=webpack://forforce/./src/scripts/menu.js?");

/***/ }),

/***/ "./src/scripts/nav.js":
/*!****************************!*\
  !*** ./src/scripts/nav.js ***!
  \****************************/
/***/ (() => {

eval("(function () {\n  var links = document.querySelectorAll(\".nav__item\");\n  var nav = document.querySelector(\".nav__list\");\n  links.forEach(function (link) {\n    return link.addEventListener(\"click\", function () {\n      return setActive(link);\n    });\n  });\n  function setActive(link) {\n    nav.querySelector(\".active-link\").classList.remove(\"active-link\");\n    link.classList.add(\"active-link\");\n  }\n})();\n\n//# sourceURL=webpack://forforce/./src/scripts/nav.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://forforce/./src/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;