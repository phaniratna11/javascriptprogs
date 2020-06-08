var ui =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domAccess.js":
/*!**************************!*\
  !*** ./src/domAccess.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//Using IIFE (immediately invoking function express as a way to create abstraction)\r\nclass PersonDOM{\r\n    //Kind of Private within this function, cannot be accessible\r\n\r\n    //static AGE ;\r\n     // AGE_CONDITION = 'ageCondition';\r\n    //static NAME = 'name';\r\n    // ADDRESS = 'address';\r\n    // SEARCH_CRITERIA = 'searchCriteria';\r\n    // PERSONS_LIST = 'personsList';\r\n   constructor() {\r\n     \r\n   }\r\n   \r\n    getAge() {\r\n      let ageElement = document.getElementById('age');\r\n      let age = 0;  //default is zero?\r\n      if (!isNaN(ageElement.value)) //Any other way?\r\n        age = Number(ageElement.value);\r\n      return age;\r\n    }\r\n    getAgeCondition() {\r\n      let ageConditionElement = document.getElementById('ageCondition');\r\n      let ageCondition = Number(0);  //default is zero?\r\n      if (!isNaN(ageConditionElement.value))\r\n        ageCondition = Number(ageConditionElement.value);\r\n      return ageCondition;\r\n    }\r\n    \r\n    getName() {\r\n      let nameElement = document.getElementById('name');\r\n      let name = '';  //default is empty Name?\r\n      if (typeof(nameElement.value) == 'string')\r\n        name = String(nameElement.value);\r\n      return name;\r\n    }\r\n    getAddress() {\r\n      let addressElement = document.getElementById('address');\r\n      let address = '';  //default is empty Name?\r\n      if (typeof(addressElement.value) == 'string')\r\n      address = String(addressElement.value);\r\n      return address;\r\n    }\r\n  \r\n    getSearchCriteria() {\r\n      let searchCriteriaElement = document.getElementById('searchCriteria');\r\n      let searchCriteria = '';  //default is empty Name?\r\n      if (typeof(searchCriteriaElement.value) == 'string')\r\n      searchCriteria = String(searchCriteriaElement.value);\r\n      return searchCriteria;\r\n    }\r\n  \r\n    updatePersonsList(newText) {\r\n        let personsListElement = document.getElementById('personsList');\r\n      personsListElement.innerText = newText;\r\n    }\r\n    \r\n  }\r\n  const domAccess = new PersonDOM();\r\n  /* harmony default export */ __webpack_exports__[\"default\"] = (domAccess);\n\n//# sourceURL=webpack://ui/./src/domAccess.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: addPerson, getByAgeCondition, getAgeCondition, getBySearchCondition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPerson\", function() { return addPerson; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getByAgeCondition\", function() { return getByAgeCondition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAgeCondition\", function() { return getAgeCondition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBySearchCondition\", function() { return getBySearchCondition; });\n/* harmony import */ var _person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./person */ \"./src/person.js\");\n/* harmony import */ var _domAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domAccess */ \"./src/domAccess.js\");\n\r\n\r\nlet Persons = [] ;//Empty Array. This is supposed to hold Persons Objects\r\nfunction addPerson (){\r\n  //1. Get Person details from DOM\r\n  //used domAccess.js file methods\r\n  //2. Create Persons Object\r\n  let person1 = new _person__WEBPACK_IMPORTED_MODULE_0__[\"default\"](_domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getName(),_domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAge(),_domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAddress());\r\n  //3.Add it to the list\r\n  Persons.push(person1);\r\n}\r\nfunction getByAgeCondition() {\r\n  setTimeout(getAgeCondition,2000);\r\n}\r\nfunction getAgeCondition() {\r\n  //1. Get Age condition using html input ageCondition\r\n  let ageCondition = _domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAgeCondition();\r\n  //2. if Age is zero get all persons description\r\n  let tempList = Persons;\r\n  if (ageCondition != 0) {\r\n    tempList = tempList.filter(function(person) {\r\n      return person.age <= ageCondition;\r\n    });\r\n    console.log(tempList);\r\n  }\r\n  //3. if age is some value, filter persons whose age is lower than given\r\n  let personsList = \"\";\r\n  for(var x of tempList) {\r\n   //This is ES6 for loop\r\n    personsList += x.describe();\r\n  }\r\n\r\n  //4. update personsList\r\n  setTimeout(function(){\r\n    _domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePersonsList(personsList);\r\n  },0);\r\n  //var listElement = personDOM.updatePersonsList(personsList);\r\n}\r\n//Please fill code\r\nfunction getBySearchCondition() {\r\n  let   searchCondition= _domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSearchCriteria();\r\n  console.log(searchCondition);\r\n  let newList = Persons;\r\n  if(searchCondition.length != 0) {\r\n       newList = Persons.filter(function(person){\r\n         //console.log(person.name);\r\n         return person.name.match( searchCondition);\r\n       });\r\n    }\r\n      //console.log(newList); \r\n    let personsList = \"\";\r\n     for(var x of newList) { //This is ES6 for loop\r\n        \r\n       personsList += x.describe();\r\n        \r\n      }\r\n      //4. update personsList\r\n     let listElement = _domAccess__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updatePersonsList(personsList);\r\n  }\r\n  \n\n//# sourceURL=webpack://ui/./src/index.js?");

/***/ }),

/***/ "./src/person.js":
/*!***********************!*\
  !*** ./src/person.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Person; });\nclass  Person {\r\n  constructor(name,age,address){\r\n    this.name = name;\r\n    this.age = age;\r\n    this.address = address;\r\n  }\r\n  describe(){\r\n    let description = 'Person Information <br> Name is ';\r\n    description += this.name;\r\n    description += \" and person age is \";\r\n    description += String(this.age);\r\n    description += \" and address is \";\r\n    description += String(this.address);\r\n    description += \"\\n\"; //Hack, should not do it \r\n    return description;\r\n }\r\n}\r\n//const person = new Person(name,age,address)\r\n//export default person;\r\n\n\n//# sourceURL=webpack://ui/./src/person.js?");

/***/ })

/******/ });