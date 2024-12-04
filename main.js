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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact(){\n    const content = document.querySelector(\"#content\");\n    const contact = document.createElement(\"div\");\n    contact.classList.add(\"pageContent\");\n\n    const phoneNumber = document.createElement(\"p\");\n    phoneNumber.textContent = '📞 999 999 999';\n    contact.appendChild(phoneNumber);\n\n    const address = document.createElement(\"p\");\n    address.textContent = \"🏠 1996 Eleftheroupoli, Kavala, Greece\";\n    contact.appendChild(address);\n\n    const form = document.createElement(\"form\");\n    form.classList.add(\"contectForm\");\n\n    const emailInput = document.createElement(\"input\");\n    emailInput.type = \"email\";\n    emailInput.placeholder = \"Enter your email\";\n    form.appendChild(emailInput);\n\n    const phoneInput = document.createElement(\"input\");\n    phoneInput.type = \"number\";\n    phoneInput.placeholder = \"Enter your phone number\";\n    form.appendChild(phoneInput);\n\n    const textInput = document.createElement(\"input\");\n    textInput.type = \"text\";\n    textInput.placeholder = \"Send us an email here\";\n    form.appendChild(textInput);\n\n    contact.appendChild(form);\n\n    content.appendChild(contact);\n\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOzs7QUFHQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcz9kNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3QoKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZChcInBhZ2VDb250ZW50XCIpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9ICfwn5OeIDk5OSA5OTkgOTk5JztcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcblxuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCLwn4+gIDE5OTYgRWxlZnRoZXJvdXBvbGksIEthdmFsYSwgR3JlZWNlXCI7XG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJjb250ZWN0Rm9ybVwiKTtcblxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZW1haWxJbnB1dC50eXBlID0gXCJlbWFpbFwiO1xuICAgIGVtYWlsSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgZW1haWxcIjtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuXG4gICAgY29uc3QgcGhvbmVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBwaG9uZUlucHV0LnR5cGUgPSBcIm51bWJlclwiO1xuICAgIHBob25lSW5wdXQucGxhY2Vob2xkZXIgPSBcIkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZUlucHV0KTtcblxuICAgIGNvbnN0IHRleHRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0ZXh0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRleHRJbnB1dC5wbGFjZWhvbGRlciA9IFwiU2VuZCB1cyBhbiBlbWFpbCBoZXJlXCI7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0ZXh0SW5wdXQpO1xuXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad.js */ \"./src/pageLoad.js\");\n/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.js */ \"./src/restaurant.js\");\n\n\n\n\n\n(0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst homeButton = document.querySelector(\"#homeButton\");\nconst menuButton = document.querySelector(\"#menuButton\");\nconst contactButton = document.querySelector(\"#contactButton\");\n\nhomeButton.addEventListener(\"click\", ()=>{\n    clearContent();\n    (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})\n\nmenuButton.addEventListener(\"click\", ()=>{\n    clearContent();\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();\n})\n\ncontactButton.addEventListener(\"click\", ()=>{\n    clearContent();\n    (0,_pageLoad_js__WEBPACK_IMPORTED_MODULE_0__.loadContact)();\n})\n\nfunction clearContent(){\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.querySelector(\".pageContent\");\n    if (pageContent) {\n        content.removeChild(pageContent);\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0s7QUFDRztBQUNXOztBQUV2RCx3REFBUTs7QUFFUjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMERBQXdCO0FBQzVCLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksc0RBQVE7QUFDWixDQUFDOztBQUVEO0FBQ0E7QUFDQSxJQUFJLHlEQUFXO0FBQ2YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9hZFBhZ2UgZnJvbSBcIi4vcGFnZUxvYWQuanNcIlxuaW1wb3J0IHsgbG9hZE1lbnUgfSBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiO1xuaW1wb3J0IHsgbG9hZENvbnRhY3QgfSBmcm9tIFwiLi9wYWdlTG9hZC5qc1wiO1xuaW1wb3J0IGNyZWF0ZVJlc3RhdXJhbnRIb21lUGFnZSBmcm9tIFwiLi9yZXN0YXVyYW50LmpzXCI7XG5cbmxvYWRQYWdlKCk7XG5cbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hvbWVCdXR0b25cIik7XG5jb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51QnV0dG9uXCIpO1xuY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdEJ1dHRvblwiKTtcblxuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UoKTtcbn0pXG5cbm1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZE1lbnUoKTtcbn0pXG5cbmNvbnRhY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgbG9hZENvbnRhY3QoKTtcbn0pXG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgY29uc3QgcGFnZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhZ2VDb250ZW50XCIpO1xuICAgIGlmIChwYWdlQ29udGVudCkge1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKHBhZ2VDb250ZW50KTtcbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createMenu= ()=>{\n    const content = document.querySelector(\"#content\");\n    const menu = document.createElement(\"div\");\n    menu.classList.add(\"pageContent\");\n\n    const heading = document.createElement('h1');\n    heading.textContent = \"A la carte Menu\";\n\n    menu.appendChild(\n        createMenuItem(\n            \"BeefSteak\",\n            \"spicy grilled filet steak tenderloin\"\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n            \"Goulash\",\n            \"Slow Cooked Beef Goulash With Paprika Potatoes\"\n        )\n    );\n    \n    content.appendChild(menu);\n}\n\nconst createMenuItem = (name, description) => {\n    const menuItem = document.createElement (\"div\");\n    menuItem.classList.add(\"menuItem\");\n\n    const foodName = document.createElement(\"h2\");\n    foodName.textContent = name;\n\n    const foodDescription = document.createElement(\"p\");\n    foodDescription.textContent = description;\n\n    const foodImage = document.createElement(\"img\");\n    foodImage.src = `images/${name.toLowerCase()}.png`;\n    foodImage.alt = `${name}`;\n\n    menuItem.appendChild(foodImage);\n    menuItem.appendChild(foodName);\n    menuItem.appendChild(foodDescription);\n    \n    return menuItem;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixtQkFBbUI7QUFDakQsdUJBQXVCLEtBQUs7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcz9hYjA4Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZU1lbnU9ICgpPT57XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoXCJwYWdlQ29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGhlYWRpbmcudGV4dENvbnRlbnQgPSBcIkEgbGEgY2FydGUgTWVudVwiO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkJlZWZTdGVha1wiLFxuICAgICAgICAgICAgXCJzcGljeSBncmlsbGVkIGZpbGV0IHN0ZWFrIHRlbmRlcmxvaW5cIlxuICAgICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiR291bGFzaFwiLFxuICAgICAgICAgICAgXCJTbG93IENvb2tlZCBCZWVmIEdvdWxhc2ggV2l0aCBQYXByaWthIFBvdGF0b2VzXCJcbiAgICAgICAgKVxuICAgICk7XG4gICAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuY29uc3QgY3JlYXRlTWVudUl0ZW0gPSAobmFtZSwgZGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgKFwiZGl2XCIpO1xuICAgIG1lbnVJdGVtLmNsYXNzTGlzdC5hZGQoXCJtZW51SXRlbVwiKTtcblxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGZvb2ROYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGZvb2REZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGZvb2REZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgY29uc3QgZm9vZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBmb29kSW1hZ2Uuc3JjID0gYGltYWdlcy8ke25hbWUudG9Mb3dlckNhc2UoKX0ucG5nYDtcbiAgICBmb29kSW1hZ2UuYWx0ID0gYCR7bmFtZX1gO1xuXG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZEltYWdlKTtcbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChmb29kTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZERlc2NyaXB0aW9uKTtcbiAgICBcbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnUiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initialLoad),\n/* harmony export */   loadContact: () => (/* binding */ loadContact),\n/* harmony export */   loadMenu: () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _restaurant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant.js */ \"./src/restaurant.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nfunction initialLoad(){\n    (0,_restaurant_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\n\nfunction loadMenu(){\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n}\n\nfunction loadContact(){\n    (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZUxvYWQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBQ25CO0FBQ007O0FBRTFCO0FBQ2YsSUFBSSwwREFBd0I7QUFDNUI7O0FBRU87QUFDUCxJQUFJLG9EQUFVO0FBQ2Q7O0FBRU87QUFDUCxJQUFJLHVEQUFhO0FBQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9wYWdlTG9hZC5qcz83OTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVSZXN0YXVyYW50SG9tZVBhZ2UgZnJvbSBcIi4vcmVzdGF1cmFudC5qc1wiXG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXRpYWxMb2FkKCl7XG4gICAgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVudSgpe1xuICAgIGNyZWF0ZU1lbnUoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRDb250YWN0KCl7XG4gICAgY3JlYXRlQ29udGFjdCgpO1xufVxuXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pageLoad.js\n");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage =() =>{\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add(\"pageContent\");\n\n    const image = document.createElement(\"img\");\n    image.src= \"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\";\n    image.height = \"600\";\n    pageContent.appendChild(image);\n\n    const headLine = document.createElement(\"h1\");\n    headLine.textContent = \"Welcome to our restaurant!\"\n    pageContent.appendChild(headLine);\n\n    const moto = document.createElement(\"p\");\n    moto.textContent = \"We serve the best food in town. Come and taste!\";\n    pageContent.appendChild(moto);\n\n    content.appendChild(pageContent);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzdGF1cmFudC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9yZXN0YXVyYW50LmpzPzY2ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlID0oKSA9PntcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGNvbnN0IHBhZ2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwYWdlQ29udGVudC5jbGFzc0xpc3QuYWRkKFwicGFnZUNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaW1hZ2Uuc3JjPSBcImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTE3MjQ4MTM1NDY3LTRjN2VkY2FkMzRjND9xPTgwJnc9MjY3MCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZpeGxpYj1yYi00LjAuMyZpeGlkPU0zd3hNakEzZkRCOE1IeHdhRzkwYnkxd1lXZGxmSHg4ZkdWdWZEQjhmSHg4ZkElM0QlM0RcIjtcbiAgICBpbWFnZS5oZWlnaHQgPSBcIjYwMFwiO1xuICAgIHBhZ2VDb250ZW50LmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgIGNvbnN0IGhlYWRMaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGhlYWRMaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIG91ciByZXN0YXVyYW50IVwiXG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZExpbmUpO1xuXG4gICAgY29uc3QgbW90byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1vdG8udGV4dENvbnRlbnQgPSBcIldlIHNlcnZlIHRoZSBiZXN0IGZvb2QgaW4gdG93bi4gQ29tZSBhbmQgdGFzdGUhXCI7XG4gICAgcGFnZUNvbnRlbnQuYXBwZW5kQ2hpbGQobW90byk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2VDb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUmVzdGF1cmFudEhvbWVQYWdlIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/restaurant.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;