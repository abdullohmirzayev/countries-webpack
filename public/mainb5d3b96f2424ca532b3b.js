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

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://countries/./src/css/main.css?");

/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _updataUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updataUI */ \"./src/js/updataUI.js\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\nconst searchFormEl = document.querySelector(\".search\");\r\n\r\nsearchFormEl.search.addEventListener(\"input\", () => {\r\n  const searchValue = searchFormEl.search.value.toLowerCase();\r\n  const cardsItem = document.querySelectorAll(\".cards__item\");\r\n  const cardsTitles = document.querySelectorAll(\".cards__title\");\r\n  cardsTitles.forEach((title, i) => {\r\n    if (title.textContent.toLowerCase().includes(searchValue)) {\r\n      cardsItem[i].style.display = \"block\";\r\n    } else {\r\n      cardsItem[i].style.display = \"none\";\r\n    }\r\n  });\r\n});\r\n\r\nconst searchSelect = document.querySelectorAll(\".search__select-list li\");\r\nconst searchSelectSpan = document.querySelector(\".search__select span\");\r\n\r\n\r\n\r\n\r\nsearchSelect.forEach((li) => {\r\n  li.addEventListener(\"click\", () => {\r\n    searchSelectSpan.textContent = li.textContent;\r\n    let filterAPI;\r\n\r\n    if (li.textContent == \"All\") {\r\n      filterAPI = \"https://restcountries.com/v3.1/all\";\r\n    } else {\r\n      filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;\r\n    }\r\n\r\n    (0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filterAPI)\r\n      .then((data) => {\r\n        (0,_updataUI__WEBPACK_IMPORTED_MODULE_0__.createCountries)(data);\r\n      })\r\n      .catch((err) => {\r\n        alert(err.message);\r\n      });\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://countries/./src/js/filter.js?");

/***/ }),

/***/ "./src/js/loader.js":
/*!**************************!*\
  !*** ./src/js/loader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst loaderEl = document.querySelector(\".loader\");\r\n\r\nconst loaderToggle = (info) => {\r\n  if (info) {\r\n    loaderEl.classList.remove(\"hidden\");\r\n  } else {\r\n    loaderEl.classList.add(\"hidden\");\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loaderToggle);\r\n\n\n//# sourceURL=webpack://countries/./src/js/loader.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.css */ \"./src/css/main.css\");\n/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ \"./src/js/request.js\");\n/* harmony import */ var _updataUI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updataUI */ \"./src/js/updataUI.js\");\n/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter */ \"./src/js/filter.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mode */ \"./src/js/mode.js\");\n/* harmony import */ var _mode__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mode__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst API = \"https://restcountries.com/v3.1/all\";\r\n\r\n(0,_request__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(API)\r\n  .then((data) => {\r\n    (0,_updataUI__WEBPACK_IMPORTED_MODULE_2__.createCountries)(data);\r\n  })\r\n  .catch((err) => {\r\n    alert(err.message);\r\n  });\r\n\n\n//# sourceURL=webpack://countries/./src/js/main.js?");

/***/ }),

/***/ "./src/js/mode.js":
/*!************************!*\
  !*** ./src/js/mode.js ***!
  \************************/
/***/ (() => {

eval("const modeBtn = document.querySelector(\".header__dark-mode\");\r\nconst body = document.querySelector(\"body\");\r\nconst modeFromLocal = localStorage.getItem(\"mode\")\r\n  ? localStorage.getItem(\"mode\")\r\n  : null;\r\n\r\nif (modeFromLocal) {\r\n  body.classList.add(\"dark-mode\");\r\n}\r\n\r\nmodeBtn.addEventListener(\"click\", () => {\r\n  body.classList.toggle(\"dark-mode\");\r\n  modeFromLocal\r\n    ? localStorage.setItem(\"mode\", \"\")\r\n    : localStorage.setItem(\"mode\", \"dark\");\r\n});\r\n\n\n//# sourceURL=webpack://countries/./src/js/mode.js?");

/***/ }),

/***/ "./src/js/request.js":
/*!***************************!*\
  !*** ./src/js/request.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader */ \"./src/js/loader.js\");\n\r\n\r\nconst request = async (reource) => {\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(true);\r\n  const req = await fetch(reource);\r\n  if (!req.ok) {\r\n    (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n    throw new Error(\"Something went wrong :(\");\r\n  }\r\n  const data = await req.json();\r\n  (0,_loader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (request);\r\n\n\n//# sourceURL=webpack://countries/./src/js/request.js?");

/***/ }),

/***/ "./src/js/updataUI.js":
/*!****************************!*\
  !*** ./src/js/updataUI.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCounryInfo: () => (/* binding */ createCounryInfo),\n/* harmony export */   createCountries: () => (/* binding */ createCountries)\n/* harmony export */ });\nconst cardsEl = document.querySelector(\".cards\");\r\n\r\nconst createCountries = (countries) => {\r\n  cardsEl.innerHTML = \"\";\r\n  countries.forEach((country) => {\r\n    const commonName = country.name.common;\r\n    const population = country.population;\r\n    const region = country.region;\r\n    const capital = country.capital ? country.capital[0] : \"No Capital\";\r\n    const flag = country.flags.svg;\r\n\r\n    // li\r\n    const li = document.createElement(\"li\");\r\n    li.classList.add(\"cards__item\");\r\n    li.innerHTML = `\r\n            <a href=\"./about.html?country=/name/${commonName}\">\r\n                <img src=${flag} alt=\"germany-flag\" width=\"267\" height=\"160\">\r\n                <div class=\"cards__item-inner\">\r\n                    <h3 class=\"cards__title\">${commonName}</h3>\r\n                    <p class=\"population\">Population: <span>${population}</span></p>\r\n                    <p class=\"region\">Region: <span>${region}</span></p>\r\n                    <p class=\"capital\">Capital: <span>${capital}</span></p>\r\n                </div>\r\n            </a>\r\n        `;\r\n    // ul\r\n    cardsEl.appendChild(li);\r\n  });\r\n};\r\n\r\n// ABOUT UI\r\n\r\nconst cuntryInfoEl = document.querySelector(\".country-info\");\r\n\r\nconst createCounryInfo = (country) => {\r\n  const {\r\n    population,\r\n    borders,\r\n    capital,\r\n    flags,\r\n    name,\r\n    region,\r\n    tld,\r\n    currencies,\r\n    languages,\r\n    subregion,\r\n  } = country;\r\n\r\n  console.log(borders);\r\n\r\n  const nativeName = Object.values(name.nativeName)[0].official;\r\n  const currency = Object.values(currencies)[0].name;\r\n  const language = Object.values(languages);\r\n\r\n  cuntryInfoEl.innerHTML = `\r\n\r\n        \r\n    <img\r\n        class=\"country-info__img\"\r\n        src=${flags.svg}\r\n        alt=\"germany-flag\"\r\n        width=\"560\"\r\n        height=\"400\"\r\n    />\r\n  <div class=\"country-info__content\">\r\n    <h2>${name.common}</h2>\r\n    <ul class=\"country-info__list\">\r\n      <li class=\"country-info__item\">\r\n        <p class=\"name\">\r\n          Native Name: \r\n          <span>${nativeName}</span>\r\n        </p>\r\n        <p class=\"population\">\r\n          Population:\r\n          <span>${population}</span>\r\n        </p>\r\n        <p class=\"region\">\r\n          Region:\r\n          <span>${region}</span>\r\n        </p>\r\n        <p class=\"sub-region\">\r\n          Sub Region:\r\n          <span>${subregion}</span>\r\n        </p>\r\n        <p class=\"capital\">\r\n          Capital:\r\n          <span>${capital}</span>\r\n        </p>\r\n      </li>\r\n      <li class=\"country-info__item\">\r\n        <p class=\"name\">\r\n          Top Level Domain:\r\n          <span>${tld}</span>\r\n        </p>\r\n        <p class=\"population\">\r\n          Currencies:\r\n          <span>${currency}</span>\r\n        </p>\r\n        <p class=\"region\">\r\n          Languages:\r\n          <span>${language}</span>\r\n        </p>\r\n      </li>\r\n    </ul>\r\n\r\n    <div class=\"country-info__borders\">\r\n      <h3>Border Countries:</h3>\r\n        ${\r\n          borders\r\n            ? borders.map((border) => {\r\n                return `\r\n            <a href=\"./about.html?country=/alpha/${border}\">${border}</a>\r\n            `;\r\n              })\r\n            : \"No Borders\"\r\n        }\r\n    </div>\r\n  </div>\r\n\r\n\r\n    `;\r\n};\r\n\n\n//# sourceURL=webpack://countries/./src/js/updataUI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;