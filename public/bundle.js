/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/forms.ts":
/*!**********************!*\
  !*** ./src/forms.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formData\": () => (/* binding */ formData)\n/* harmony export */ });\n// try to use this kind of fucntions more in the future for forms, seems useful \r\nconst formData = (form) => {\r\n    const inputs = form.querySelectorAll('input');\r\n    // values object will take array of props, which are strings, value of each property is also string\r\n    let values = {};\r\n    inputs.forEach(input => {\r\n        values[input.id] = input.value;\r\n    });\r\n    return values;\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9ybXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdGQUFnRjtBQUN6RSxNQUFNLFFBQVEsR0FBRyxDQUFDLElBQXFCLEVBQUUsRUFBRTtJQUM5QyxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsbUdBQW1HO0lBQ25HLElBQUksTUFBTSxHQUE2QixFQUFFLENBQUM7SUFFMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNyQixNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDakMsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXR5cGVzY3JpcHQtdHV0b3JpYWwvLi9zcmMvZm9ybXMudHM/NTBiNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0cnkgdG8gdXNlIHRoaXMga2luZCBvZiBmdWNudGlvbnMgbW9yZSBpbiB0aGUgZnV0dXJlIGZvciBmb3Jtcywgc2VlbXMgdXNlZnVsIFxyXG5leHBvcnQgY29uc3QgZm9ybURhdGEgPSAoZm9ybTogSFRNTEZvcm1FbGVtZW50KSA9PiB7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XHJcbiAgICAvLyB2YWx1ZXMgb2JqZWN0IHdpbGwgdGFrZSBhcnJheSBvZiBwcm9wcywgd2hpY2ggYXJlIHN0cmluZ3MsIHZhbHVlIG9mIGVhY2ggcHJvcGVydHkgaXMgYWxzbyBzdHJpbmdcclxuICAgIGxldCB2YWx1ZXM6IHtbcHJvcDogc3RyaW5nXTogc3RyaW5nfSA9IHt9O1xyXG4gIFxyXG4gICAgaW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xyXG4gICAgICB2YWx1ZXNbaW5wdXQuaWRdID0gaW5wdXQudmFsdWU7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/forms.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms */ \"./src/forms.ts\");\n\r\n// console.log(formData())\r\nconst form = document.querySelector('form');\r\nform.addEventListener('submit', (e) => {\r\n    e.preventDefault();\r\n    const data = (0,_forms__WEBPACK_IMPORTED_MODULE_0__.formData)(form);\r\n    // to see if it works properly\r\n    console.log(data);\r\n});\r\n// gotta throw an error to understand source maps\r\nconst person = {};\r\nconsole.log(person.speak());\r\n// well it showed in mozilla that the error was in index.ts because the eval \r\n// was used probably by default accord,ng to the notes in bundle.js\r\n// still gonna add in configs to understand how to handle source maps\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUM7QUFDbkMsMEJBQTBCO0FBQzFCLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFFLENBQUM7QUFFN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO0lBQ3BDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNuQixNQUFNLElBQUksR0FBRyxnREFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRTVCLDhCQUE4QjtJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3BCLENBQUMsQ0FBQyxDQUFDO0FBRUgsaURBQWlEO0FBQ2pELE1BQU0sTUFBTSxHQUFRLEVBQUUsQ0FBQztBQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzVCLDZFQUE2RTtBQUM3RSxtRUFBbUU7QUFDbkUscUVBQXFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10eXBlc2NyaXB0LXR1dG9yaWFsLy4vc3JjL2luZGV4LnRzP2ZmYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybURhdGEgfSBmcm9tIFwiLi9mb3Jtc1wiO1xyXG4vLyBjb25zb2xlLmxvZyhmb3JtRGF0YSgpKVxyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpITtcclxuXHJcbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgY29uc3QgZGF0YSA9IGZvcm1EYXRhKGZvcm0pO1xyXG5cclxuICAvLyB0byBzZWUgaWYgaXQgd29ya3MgcHJvcGVybHlcclxuICBjb25zb2xlLmxvZyhkYXRhKTtcclxufSk7XHJcblxyXG4vLyBnb3R0YSB0aHJvdyBhbiBlcnJvciB0byB1bmRlcnN0YW5kIHNvdXJjZSBtYXBzXHJcbmNvbnN0IHBlcnNvbjogYW55ID0ge307XHJcbmNvbnNvbGUubG9nKHBlcnNvbi5zcGVhaygpKTtcclxuLy8gd2VsbCBpdCBzaG93ZWQgaW4gbW96aWxsYSB0aGF0IHRoZSBlcnJvciB3YXMgaW4gaW5kZXgudHMgYmVjYXVzZSB0aGUgZXZhbCBcclxuLy8gd2FzIHVzZWQgcHJvYmFibHkgYnkgZGVmYXVsdCBhY2NvcmQsbmcgdG8gdGhlIG5vdGVzIGluIGJ1bmRsZS5qc1xyXG4vLyBzdGlsbCBnb25uYSBhZGQgaW4gY29uZmlncyB0byB1bmRlcnN0YW5kIGhvdyB0byBoYW5kbGUgc291cmNlIG1hcHMiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;