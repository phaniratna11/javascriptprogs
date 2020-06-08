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

/***/ "./src/address.js":
/*!************************!*\
  !*** ./src/address.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Address; });\n class  Address {\r\n constructor(hno,colName) {\r\n  this.hno = hno;\r\n  this.colName = colName;\r\n }\r\n describe() {\r\n let  description = \"Address[hno =\";\r\n    description += this.hno;\r\n    description += \", Col Name = \";\r\n    description += String(this.colName);\r\n    description += \"]\\n\"; //Hack, should not do it \r\n    return description;\r\n  }\r\n}\n\n//# sourceURL=webpack://ui/./src/address.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Contact; });\n/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ \"./src/address.js\");\n \r\nclass Contact {\r\nconstructor(pid, name, age, hno,street,city) {\r\n  this.pid = Number(pid);\r\n  this.name = name;\r\n  this.age = Number(age);\r\n  this.address = new _address__WEBPACK_IMPORTED_MODULE_0__[\"default\"](hno,street,city);\r\n  this.friendsList = [];\r\n}\r\n\r\ndescribe () {\r\n  var description = \"==>Person Name is \";\r\n    description += this.name;\r\n    description += \" and person age is \";\r\n    description += String(this.age);\r\n    description += \" and address is \";\r\n    description += this.address.describe();\r\n    description += \"\\n\"; //Hack, should not do it \r\n    return description;\r\n}\r\n\r\n\r\n//fill code to add another contact here\r\n//but asynchronously\r\naddContact(friendContact) {\r\n  this.friendsList.push(friendContact);\r\n}\r\n\r\n//asynchronously return this person \r\n//friends list using callback function\r\ngetFriendsList () {\r\n  let friendsData = ' ';\r\n  for(const friend of this.friendsList){\r\n    friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age +']';\r\n  }\r\n  return friendsData;\r\n }\r\n};  \r\n   \r\n  \r\n\n\n//# sourceURL=webpack://ui/./src/contact.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: addPersons, getPersonDetails, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPersons\", function() { return addPersons; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPersonDetails\", function() { return getPersonDetails; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show\", function() { return show; });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\nlet Contacts = []; //Empty Array. This is supposed to hold Persons Objects\r\nlet scrollTimerId = -1;\r\n//Q. Can you creat new function to take many contacts in single function\r\n//input can be from json text\r\n\r\nfunction addPersons() {\r\n  //1. Build Persons List here\r\n  //Ex: const persons = [{}, {}, {}, {} ]\r\n  const contactList = [\r\n    {\r\n      pid: 10,\r\n      name: \"Ramu\",\r\n      age: 34,\r\n      hno: \"123-5\",\r\n      street: \"Kranthi Nagar\",\r\n      city: \"Hyd\",\r\n    },\r\n    {\r\n      pid: 11,\r\n      name: \"Vani\",\r\n      age: 31,\r\n      hno: \"123-5\",\r\n      street: \"Musheerabad\",\r\n      city: \"Hyd\",\r\n    },\r\n    {\r\n      pid: 12,\r\n      name: \"Madhu\",\r\n      age: 35,\r\n      hno: \"123-5\",\r\n      street: \"Mehadipatnam\",\r\n      city: \"Hyd\",\r\n    },\r\n    {\r\n      pid: 13,\r\n      name: \"Latha\",\r\n      age: 36,\r\n      hno: \"243-5\",\r\n      street: \"LIngampally\",\r\n      city: \"Hyd\",\r\n    },\r\n  ];\r\n\r\n  //for loop to add every person in list\r\n  // const addressBooks =[{'pid':10,'name':'Modi'},{'pid':10,'name':'Jassu'}];\r\n  const addressBooks = [\r\n    { pid: 10, friends: [11, 13] },\r\n    { pid: 11, friends: [12, 13] },\r\n  ];\r\n\r\n  for (let contactInfo of contactList) {\r\n    const contact = new _contact__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( contactInfo.pid,\r\n      contactInfo.name,\r\n      contactInfo.age,\r\n      contactInfo.hno,\r\n      contactInfo.street,\r\n      contactInfo.city);\r\n    \r\n    //3.Add it to the list\r\n    Contacts.push(contact);\r\n  }\r\n  let ele = document.getElementById(\"sel\");\r\n  for (let contact of Contacts) {\r\n    ele.innerHTML =\r\n      ele.innerHTML +\r\n      '<option value=\"' +\r\n      contact.pid +\r\n      '\">' +\r\n      contact.name +\r\n      \"</option>\";\r\n  }\r\n\r\n  for (const friendsList of addressBooks) {\r\n    const pid = friendsList.pid;\r\n    getContactAsync(pid, (contact) => {\r\n      const currentContact = contact;\r\n      if (currentContact == null) {\r\n        return;\r\n      }\r\n\r\n      for (const friendId of friendsList.friends) {\r\n        getContactAsync(friendId, (friendContact) => {\r\n          // let currentContact = null;\r\n          // currentContact = friendContact;\r\n          if (friendContact == null) {\r\n            return;\r\n          }\r\n\r\n          currentContact.addContact(friendContact);\r\n        });\r\n      }\r\n    });\r\n  }\r\n}\r\n\r\nfunction getContactAsync(pid, cbk) {\r\n  //return the result should be using  callback and timeout\r\n  setTimeout(() => {\r\n    for (const contact of Contacts) {\r\n      if (contact.pid === pid) {\r\n        cbk(contact);\r\n      }\r\n    }\r\n    cbk(null);\r\n  }, 0);\r\n}\r\n\r\nfunction getContact(pid) {\r\n  //return the result should be using  callback and timeout\r\n  for (const contact of Contacts) {\r\n    if (contact.pid === pid) {\r\n      return contact;\r\n    }\r\n  }\r\n  return null;\r\n}\r\n\r\n//Asyn\r\nfunction getPersonDetails() {\r\n  //1. Get Age condition using html input ageCondition\r\n  let pidCondition = Number(document.getElementById(\"pidCondition\").value);\r\n  getContactAsync(pidCondition, (contact) => {\r\n    let currentContact = null;\r\n    currentContact = contact;\r\n    if (currentContact == null) {\r\n      return;\r\n    }\r\n    let personsList = \" \";\r\n    if (currentContact != null) {\r\n      personsList += currentContact.describe();\r\n      personsList += currentContact.getFriendsList();\r\n    }\r\n    let listElement = document.getElementById(\"personsDetails\");\r\n    listElement.innerHTML = personsList;\r\n  });\r\n}\r\n\r\nfunction show(ele) {\r\n  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.\r\n  var msg = document.getElementById(\"msg\");\r\n  msg.innerHTML =\r\n    \"Selected Peroson: <b>\" +\r\n    ele.options[ele.selectedIndex].text +\r\n    \"</b> </br>\" +\r\n    \"ID: <b><input type = text name = pid value =  \" +\r\n    ele.value +\r\n    \">\";\r\n}\r\n\r\n//Fill this code to get given Person details\r\n//Name, person Address and person address book\r\n\r\n//Example: for given person name 'Modi'\r\n//Name: Modi\r\n//Age: 65\r\n//Person Self Address: New Delhi\r\n//Person Contact List (address Book): [Amit, Naidu, Kcr, Kaveri, Mamatha]\r\n//function getPersonDetails() {\r\n\r\n//1. get given person name\r\n\r\n//2. get given person details\r\n\r\n//3. get given person address book\r\n\r\n//4. update UI with this list\r\n//}\r\n\r\n// function getPersonDetails() {\r\n//   //1. Get Age condition using html input ageCondition\r\n//   let pidCondition = document.getElementById(\"pidCondition\").value;\r\n//   let newAddressbook = Contacts;\r\n//   let currentContact = null;\r\n//   for(const contact of Contacts){\r\n//     if(contact.pid == pidCondition){\r\n//       currentContact = contact;\r\n//       break;\r\n//     }\r\n//   }\r\n//   let personsList = ' ';\r\n//   if( currentContact != null) {\r\n//     personsList += currentContact.describe();\r\n//     personsList += currentContact.getFriendsList();\r\n//   }\r\n//   let listElement = document.getElementById(\"personsDetails\");\r\n//   listElement.innerHTML = personsList;\r\n// }\r\n\n\n//# sourceURL=webpack://ui/./src/index.js?");

/***/ })

/******/ });