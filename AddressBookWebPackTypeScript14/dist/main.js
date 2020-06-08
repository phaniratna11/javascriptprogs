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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/address.ts":
/*!************************!*\
  !*** ./src/address.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Address; });
class Address {
    constructor(hno, street, city) {
        this.hno = '';
        this.street = '';
        this.city = '';
        this.hno = hno;
        this.street = street;
        this.city = city;
    }
    describe() {
        let description = "Address[hno =";
        description += this.hno;
        description += ", Col Name = ";
        description += String(this.street);
        description += ", City Name = ";
        description += String(this.city);
        description += "]\n"; //Hack, should not do it 
        return description;
    }
} //class closing


/***/ }),

/***/ "./src/contact.ts":
/*!************************!*\
  !*** ./src/contact.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./address */ "./src/address.ts");

class Contact {
    //Q. In address class have fields like House Number, street Name, City, State, ZipCode
    constructor(pid, name, age, hno, street, city) {
        this.pid = 0;
        this.name = "";
        this.age = 0;
        this.friendsList = new Array();
        this.pid = pid;
        this.name = name;
        this.age = age;
        this.address = new _address__WEBPACK_IMPORTED_MODULE_0__["default"](hno, street, city);
        //this.friendsList = [];
    }
    describe() {
        let description = "==>Person Name is ";
        description += this.name;
        description += " and person age is ";
        description += this.age;
        description += " and address is ";
        description += this.address.describe();
        description += "\n"; //Hack, should not do it 
        return description;
    }
    //fill code to add another contact here
    //but asynchronously
    addContact(friendContact) {
        this.friendsList.push(friendContact);
    }
    //asynchronously return this person 
    //friends list using callback function
    getFriendsList() {
        let friendsData = '';
        for (const friend of this.friendsList) {
            friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age + ']';
        }
        return friendsData;
    }
}
;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: addPersons, getPersonDetails, show */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPersons", function() { return addPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPersonDetails", function() { return getPersonDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ "./src/contact.ts");

let Contacts = new Array(); //Empty Array. This is supposed to hold Persons Objects
//let scrollTimerId = -1;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text
function addPersons() {
    //1. Build Persons List here
    //Ex: const persons = [{}, {}, {}, {} ]
    const contactList = [
        {
            pid: 10,
            name: "Ramu",
            age: 34,
            hno: "123-5",
            street: "Kranthi Nagar",
            city: "Hyd",
        },
        {
            pid: 11,
            name: "Vani",
            age: 31,
            hno: "123-5",
            street: "Musheerabad",
            city: "Hyd",
        },
        {
            pid: 12,
            name: "Madhu",
            age: 35,
            hno: "123-5",
            street: "Mehadipatnam",
            city: "Hyd",
        },
        {
            pid: 13,
            name: "Latha",
            age: 36,
            hno: "243-5",
            street: "LIngampally",
            city: "Hyd",
        },
    ];
    //for loop to add every person in list
    // const addressBooks =[{'pid':10,'name':'Modi'},{'pid':10,'name':'Jassu'}];
    const addressBooks = [
        { pid: 10, friends: [11, 13] },
        { pid: 11, friends: [12, 13] },
    ];
    for (let contactInfo of contactList) {
        const x = new _contact__WEBPACK_IMPORTED_MODULE_0__["default"](contactInfo.pid, contactInfo.name, contactInfo.age, contactInfo.hno, contactInfo.street, contactInfo.city);
        //3.Add it to the list
        Contacts.push(x);
    }
    let ele = document.getElementById("sel");
    for (var contact of Contacts) {
        ele.innerHTML =
            ele.innerHTML +
                '<option value="' +
                contact.pid +
                '">' +
                contact.name +
                "</option>";
    }
    for (const friendsList of addressBooks) {
        const pid = friendsList.pid;
        getContactAsync(pid, (contact) => {
            const currentContact = contact;
            if (currentContact == null) {
                return;
            }
            for (const friendId of friendsList.friends) {
                getContactAsync(friendId, (friendContact) => {
                    // let currentContact = null;
                    // currentContact = friendContact;
                    if (friendContact == null) {
                        return;
                    }
                    currentContact.addContact(friendContact);
                });
            }
        });
    }
}
function getContactAsync(pid, cbk) {
    //return the result should be using  callback and timeout
    setTimeout(() => {
        for (const contact of Contacts) {
            if (contact.pid === pid) {
                cbk(contact);
            }
        }
        cbk(null);
    }, 0);
}
function getContact(pid) {
    //return the result should be using  callback and timeout
    for (const contact of Contacts) {
        if (this.contact.pid === pid) {
            return contact;
        }
    }
    return null;
}
//Asyn
function getPersonDetails() {
    //1. Get Age condition using html input ageCondition
    var pidCondition = document.getElementById("pidCondition");
    var pid = Number(pidCondition.value);
    getContactAsync(pid, (contact) => {
        let currentContact = null;
        currentContact = contact;
        if (currentContact == null) {
            return;
        }
        let personsList = " ";
        if (currentContact != null) {
            personsList += currentContact.describe();
            personsList += currentContact.getFriendsList();
        }
        let listElement = document.getElementById("personsDetails");
        listElement.innerHTML = personsList;
    });
}
function show(ele) {
    // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
    var msg = document.getElementById("msg");
    msg.innerHTML =
        "Selected Peroson: <b>" +
            ele.options[ele.selectedIndex].text +
            "</b> </br>" +
            "ID: <b><input type = text name = pid value =  " +
            ele.value +
            ">";
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91aS8uL3NyYy9hZGRyZXNzLnRzIiwid2VicGFjazovL3VpLy4vc3JjL2NvbnRhY3QudHMiLCJ3ZWJwYWNrOi8vdWkvLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLE1BQU0sT0FBTztJQUkxQixZQUFZLEdBQVUsRUFBQyxNQUFhLEVBQUMsSUFBVztRQUhoRCxRQUFHLEdBQVUsRUFBRSxDQUFDO1FBQ2hCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVoQixJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUNmLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLEdB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QUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUk7WUFDbkMsWUFBWTtZQUNaLGdEQUFnRDtZQUNoRCxHQUFHLENBQUMsS0FBSztZQUNULEdBQUcsQ0FBQztBQUNSLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkcmVzcyB7XHJcbiAgaG5vOnN0cmluZyA9ICcnO1xyXG4gIHN0cmVldDogc3RyaW5nID0gJyc7XHJcbiAgY2l0eTogc3RyaW5nID0gJyc7XHJcbiAgY29uc3RydWN0b3IoaG5vOnN0cmluZyxzdHJlZXQ6c3RyaW5nLGNpdHk6c3RyaW5nKXtcclxuICAgIHRoaXMuaG5vID0gaG5vO1xyXG4gICAgdGhpcy5zdHJlZXQgPSBzdHJlZXQ7XHJcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xyXG4gIH1cclxuZGVzY3JpYmUgKCk6c3RyaW5ne1xyXG4gIGxldCBkZXNjcmlwdGlvbiA9IFwiQWRkcmVzc1tobm8gPVwiO1xyXG4gIGRlc2NyaXB0aW9uICs9IHRoaXMuaG5vO1xyXG4gIGRlc2NyaXB0aW9uICs9IFwiLCBDb2wgTmFtZSA9IFwiO1xyXG4gIGRlc2NyaXB0aW9uICs9IFN0cmluZyh0aGlzLnN0cmVldCk7XHJcbiAgZGVzY3JpcHRpb24gKz0gXCIsIENpdHkgTmFtZSA9IFwiO1xyXG4gIGRlc2NyaXB0aW9uICs9IFN0cmluZyh0aGlzLmNpdHkpO1xyXG4gIGRlc2NyaXB0aW9uICs9IFwiXVxcblwiOyAvL0hhY2ssIHNob3VsZCBub3QgZG8gaXQgXHJcbiAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG59XHJcbn0vL2NsYXNzIGNsb3NpbmciLCJpbXBvcnQgQWRkcmVzcyBmcm9tICcuL2FkZHJlc3MnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250YWN0IHtcclxuICBwaWQ6IG51bWJlciA9IDA7XHJcbiAgbmFtZTogc3RyaW5nICA9IFwiXCI7XHJcbiAgYWdlOiBudW1iZXIgPSAwO1xyXG4gIGFkZHJlc3M6IEFkZHJlc3M7IC8vQ2FuIEFkZHJlc3MgYmUgc2VwYXJhdGUgY2xhc3M/XHJcbiAgZnJpZW5kc0xpc3Q9IG5ldyBBcnJheSgpO1xyXG5cclxuLy9RLiBJbiBhZGRyZXNzIGNsYXNzIGhhdmUgZmllbGRzIGxpa2UgSG91c2UgTnVtYmVyLCBzdHJlZXQgTmFtZSwgQ2l0eSwgU3RhdGUsIFppcENvZGVcclxuY29uc3RydWN0b3IocGlkOiBudW1iZXIsbmFtZSA6c3RyaW5nLCBhZ2U6IG51bWJlciwgaG5vOnN0cmluZyxzdHJlZXQ6IHN0cmluZyxjaXR5OiBzdHJpbmcpIHtcclxuICB0aGlzLnBpZCA9IHBpZDtcclxuICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gIHRoaXMuYWdlID0gYWdlO1xyXG4gIHRoaXMuYWRkcmVzcyA9IG5ldyBBZGRyZXNzKGhubyxzdHJlZXQsY2l0eSk7XHJcbiAgLy90aGlzLmZyaWVuZHNMaXN0ID0gW107XHJcbiAgXHJcbn1cclxuZGVzY3JpYmUoKSA6IHN0cmluZ3tcclxuICBsZXQgZGVzY3JpcHRpb24gPSBcIj09PlBlcnNvbiBOYW1lIGlzIFwiO1xyXG4gICAgZGVzY3JpcHRpb24gKz0gdGhpcy5uYW1lO1xyXG4gICAgZGVzY3JpcHRpb24gKz0gXCIgYW5kIHBlcnNvbiBhZ2UgaXMgXCI7XHJcbiAgICBkZXNjcmlwdGlvbiArPSB0aGlzLmFnZTtcclxuICAgIGRlc2NyaXB0aW9uICs9IFwiIGFuZCBhZGRyZXNzIGlzIFwiO1xyXG4gICAgZGVzY3JpcHRpb24gKz0gdGhpcy5hZGRyZXNzLmRlc2NyaWJlKCk7XHJcbiAgICBkZXNjcmlwdGlvbiArPSBcIlxcblwiOyAvL0hhY2ssIHNob3VsZCBub3QgZG8gaXQgXHJcblxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uO1xyXG59XHJcblxyXG5cclxuLy9maWxsIGNvZGUgdG8gYWRkIGFub3RoZXIgY29udGFjdCBoZXJlXHJcbi8vYnV0IGFzeW5jaHJvbm91c2x5XHJcbmFkZENvbnRhY3QoZnJpZW5kQ29udGFjdDpDb250YWN0KTp2b2lkIHtcclxuICB0aGlzLmZyaWVuZHNMaXN0LnB1c2goZnJpZW5kQ29udGFjdCk7XHJcbn1cclxuXHJcbi8vYXN5bmNocm9ub3VzbHkgcmV0dXJuIHRoaXMgcGVyc29uIFxyXG4vL2ZyaWVuZHMgbGlzdCB1c2luZyBjYWxsYmFjayBmdW5jdGlvblxyXG5nZXRGcmllbmRzTGlzdCAoKTogc3RyaW5ne1xyXG4gIGxldCBmcmllbmRzRGF0YTogc3RyaW5nID0gJyc7XHJcbiAgZm9yKGNvbnN0IGZyaWVuZCBvZiB0aGlzLmZyaWVuZHNMaXN0KXtcclxuICAgIGZyaWVuZHNEYXRhICs9ICdGcmllbmRzIE5hbWVzIDogIFsnICsgZnJpZW5kLm5hbWUgKyAnICcgKyBmcmllbmQuYWdlICsnXSc7XHJcbiAgfVxyXG4gIHJldHVybiBmcmllbmRzRGF0YTtcclxuIH1cclxufTsgXHJcbiIsImltcG9ydCBBZGRyZXNzIGZyb20gJy4vYWRkcmVzcyc7XHJcbmltcG9ydCBDb250YWN0IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5sZXQgQ29udGFjdHMgPSBuZXcgQXJyYXkoKTsgLy9FbXB0eSBBcnJheS4gVGhpcyBpcyBzdXBwb3NlZCB0byBob2xkIFBlcnNvbnMgT2JqZWN0c1xyXG4vL2xldCBzY3JvbGxUaW1lcklkID0gLTE7XHJcbi8vUS4gQ2FuIHlvdSBjcmVhdCBuZXcgZnVuY3Rpb24gdG8gdGFrZSBtYW55IGNvbnRhY3RzIGluIHNpbmdsZSBmdW5jdGlvblxyXG4vL2lucHV0IGNhbiBiZSBmcm9tIGpzb24gdGV4dFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZFBlcnNvbnMoKSB7XHJcbiAgLy8xLiBCdWlsZCBQZXJzb25zIExpc3QgaGVyZVxyXG4gIC8vRXg6IGNvbnN0IHBlcnNvbnMgPSBbe30sIHt9LCB7fSwge30gXVxyXG4gIGNvbnN0IGNvbnRhY3RMaXN0ID0gW1xyXG4gICAge1xyXG4gICAgICBwaWQ6IDEwLFxyXG4gICAgICBuYW1lOiBcIlJhbXVcIixcclxuICAgICAgYWdlOiAzNCxcclxuICAgICAgaG5vOiBcIjEyMy01XCIsXHJcbiAgICAgIHN0cmVldDogXCJLcmFudGhpIE5hZ2FyXCIsXHJcbiAgICAgIGNpdHk6IFwiSHlkXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwaWQ6IDExLFxyXG4gICAgICBuYW1lOiBcIlZhbmlcIixcclxuICAgICAgYWdlOiAzMSxcclxuICAgICAgaG5vOiBcIjEyMy01XCIsXHJcbiAgICAgIHN0cmVldDogXCJNdXNoZWVyYWJhZFwiLFxyXG4gICAgICBjaXR5OiBcIkh5ZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGlkOiAxMixcclxuICAgICAgbmFtZTogXCJNYWRodVwiLFxyXG4gICAgICBhZ2U6IDM1LFxyXG4gICAgICBobm86IFwiMTIzLTVcIixcclxuICAgICAgc3RyZWV0OiBcIk1laGFkaXBhdG5hbVwiLFxyXG4gICAgICBjaXR5OiBcIkh5ZFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcGlkOiAxMyxcclxuICAgICAgbmFtZTogXCJMYXRoYVwiLFxyXG4gICAgICBhZ2U6IDM2LFxyXG4gICAgICBobm86IFwiMjQzLTVcIixcclxuICAgICAgc3RyZWV0OiBcIkxJbmdhbXBhbGx5XCIsXHJcbiAgICAgIGNpdHk6IFwiSHlkXCIsXHJcbiAgICB9LFxyXG4gIF07XHJcblxyXG4gIC8vZm9yIGxvb3AgdG8gYWRkIGV2ZXJ5IHBlcnNvbiBpbiBsaXN0XHJcbiAgLy8gY29uc3QgYWRkcmVzc0Jvb2tzID1beydwaWQnOjEwLCduYW1lJzonTW9kaSd9LHsncGlkJzoxMCwnbmFtZSc6J0phc3N1J31dO1xyXG4gIGNvbnN0IGFkZHJlc3NCb29rcyA9IFtcclxuICAgIHsgcGlkOiAxMCwgZnJpZW5kczogWzExLCAxM10gfVxyXG4gICAgeyBwaWQ6IDExLCBmcmllbmRzOiBbMTIsIDEzXSB9LFxyXG4gIF07XHJcblxyXG4gIGZvciAobGV0IGNvbnRhY3RJbmZvIG9mIGNvbnRhY3RMaXN0KSB7XHJcbiAgICBjb25zdCB4ICA9IG5ldyBDb250YWN0KGNvbnRhY3RJbmZvLnBpZCxjb250YWN0SW5mby5uYW1lLGNvbnRhY3RJbmZvLmFnZSxjb250YWN0SW5mby5obm8sY29udGFjdEluZm8uc3RyZWV0LGNvbnRhY3RJbmZvLmNpdHkpO1xyXG4gICAgICAvLzMuQWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICBDb250YWN0cy5wdXNoKHgpO1xyXG4gIH1cclxuICBsZXQgZWxlOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlbFwiKTtcclxuICBmb3IgKHZhciAgY29udGFjdCBvZiBDb250YWN0cykge1xyXG4gICAgZWxlLmlubmVySFRNTCA9XHJcbiAgICAgIGVsZS5pbm5lckhUTUwgK1xyXG4gICAgICAnPG9wdGlvbiB2YWx1ZT1cIicgK1xyXG4gICAgICBjb250YWN0LnBpZCArXHJcbiAgICAgICdcIj4nICtcclxuICAgICAgY29udGFjdC5uYW1lICtcclxuICAgICAgXCI8L29wdGlvbj5cIjtcclxuICB9XHJcblxyXG4gIGZvciAoY29uc3QgZnJpZW5kc0xpc3Qgb2YgYWRkcmVzc0Jvb2tzKSB7XHJcbiAgICBjb25zdCBwaWQgPSBmcmllbmRzTGlzdC5waWQ7XHJcbiAgICBnZXRDb250YWN0QXN5bmMocGlkLCAoY29udGFjdDphbnkpID0+IHtcclxuICAgICAgY29uc3QgY3VycmVudENvbnRhY3QgPSBjb250YWN0O1xyXG4gICAgICBpZiAoY3VycmVudENvbnRhY3QgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBmb3IgKGNvbnN0IGZyaWVuZElkIG9mIGZyaWVuZHNMaXN0LmZyaWVuZHMpIHtcclxuICAgICAgICBnZXRDb250YWN0QXN5bmMoZnJpZW5kSWQsIChmcmllbmRDb250YWN0OmFueSkgPT4ge1xyXG4gICAgICAgICAgLy8gbGV0IGN1cnJlbnRDb250YWN0ID0gbnVsbDtcclxuICAgICAgICAgIC8vIGN1cnJlbnRDb250YWN0ID0gZnJpZW5kQ29udGFjdDtcclxuICAgICAgICAgIGlmIChmcmllbmRDb250YWN0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgY3VycmVudENvbnRhY3QuYWRkQ29udGFjdChmcmllbmRDb250YWN0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb250YWN0QXN5bmMocGlkOm51bWJlciwgY2JrOmFueSkge1xyXG4gIC8vcmV0dXJuIHRoZSByZXN1bHQgc2hvdWxkIGJlIHVzaW5nICBjYWxsYmFjayBhbmQgdGltZW91dFxyXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgZm9yIChjb25zdCBjb250YWN0IG9mIENvbnRhY3RzKSB7XHJcbiAgICAgIGlmIChjb250YWN0LnBpZCA9PT0gcGlkKSB7XHJcbiAgICAgICAgY2JrKGNvbnRhY3QpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBjYmsobnVsbCk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbnRhY3QocGlkIDpudW1iZXIpOmFueSB7XHJcbiAgLy9yZXR1cm4gdGhlIHJlc3VsdCBzaG91bGQgYmUgdXNpbmcgIGNhbGxiYWNrIGFuZCB0aW1lb3V0XHJcbiAgZm9yIChjb25zdCBjb250YWN0IG9mIENvbnRhY3RzKSB7XHJcbiAgICBpZiAodGhpcy5jb250YWN0LnBpZCA9PT0gcGlkKSB7XHJcbiAgICAgIHJldHVybiBjb250YWN0O1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuLy9Bc3luXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQZXJzb25EZXRhaWxzKCkge1xyXG4gIC8vMS4gR2V0IEFnZSBjb25kaXRpb24gdXNpbmcgaHRtbCBpbnB1dCBhZ2VDb25kaXRpb25cclxuICB2YXIgcGlkQ29uZGl0aW9uOmFueSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwaWRDb25kaXRpb25cIik7XHJcbiAgdmFyIHBpZCA9IE51bWJlcihwaWRDb25kaXRpb24udmFsdWUpO1xyXG4gIGdldENvbnRhY3RBc3luYyhwaWQsIChjb250YWN0OmFueSkgPT4ge1xyXG4gICAgbGV0IGN1cnJlbnRDb250YWN0ID0gbnVsbDtcclxuICAgIGN1cnJlbnRDb250YWN0ID0gY29udGFjdDtcclxuICAgIGlmIChjdXJyZW50Q29udGFjdCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBwZXJzb25zTGlzdCA9IFwiIFwiO1xyXG4gICAgaWYgKGN1cnJlbnRDb250YWN0ICE9IG51bGwpIHtcclxuICAgICAgcGVyc29uc0xpc3QgKz0gY3VycmVudENvbnRhY3QuZGVzY3JpYmUoKTtcclxuICAgICAgcGVyc29uc0xpc3QgKz0gY3VycmVudENvbnRhY3QuZ2V0RnJpZW5kc0xpc3QoKTtcclxuICAgIH1cclxuICAgIGxldCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyc29uc0RldGFpbHNcIik7XHJcbiAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSBwZXJzb25zTGlzdDtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3coZWxlOmFueSkge1xyXG4gIC8vIEdFVCBUSEUgU0VMRUNURUQgVkFMVUUgRlJPTSA8c2VsZWN0PiBFTEVNRU5UIEFORCBTSE9XIElULlxyXG4gIHZhciBtc2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1zZ1wiKTtcclxuICBtc2cuaW5uZXJIVE1MID1cclxuICAgIFwiU2VsZWN0ZWQgUGVyb3NvbjogPGI+XCIgK1xyXG4gICAgZWxlLm9wdGlvbnNbZWxlLnNlbGVjdGVkSW5kZXhdLnRleHQgK1xyXG4gICAgXCI8L2I+IDwvYnI+XCIgK1xyXG4gICAgXCJJRDogPGI+PGlucHV0IHR5cGUgPSB0ZXh0IG5hbWUgPSBwaWQgdmFsdWUgPSAgXCIgK1xyXG4gICAgZWxlLnZhbHVlICtcclxuICAgIFwiPlwiO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=