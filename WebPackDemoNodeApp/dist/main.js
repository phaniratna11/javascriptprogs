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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: getArithmetic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getArithmetic", function() { return getArithmetic; });
/* harmony import */ var _mathlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mathlibrary */ "./src/mathlibrary.ts");

function getArithmetic() {
    const num1 = document.getElementById('num1');
    const num2 = document.getElementById('num2');
    const result = document.getElementById('error');
    const value1 = Number(num1.value); //explicit number conversion
    const value2 = Number(num2.value); //explicit number conversion
    if (!_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].validate(value1, value2)) {
        result.innerHTML = "Invalid numbers";
        return;
    }
    document.getElementById('sumResult').innerHTML = String(_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].add(value1, value2)); //implicit conversion to string here
    document.getElementById('mulResult').innerHTML = String(_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].multiplication(value1, value2));
    document.getElementById('subResult').innerHTML = String(_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].subtraction(value1, value2));
    document.getElementById('divResult').innerHTML = String(_mathlibrary__WEBPACK_IMPORTED_MODULE_0__["default"].division(value1, value2)); //implicit conversion to string here
}


/***/ }),

/***/ "./src/mathlibrary.ts":
/*!****************************!*\
  !*** ./src/mathlibrary.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class ArithmeticLibrary {
    constructor() {
    }
    validate(num1, num2) {
        //if (typeof num1 != 'number' || typeof num2 != 'number')
        if (isNaN(num1) || isNaN(num2)) {
            return false;
        }
        return true;
    }
    add(num1, num2) {
        return num1 + num2; //return number
    }
    multiplication(num1, num2) {
        return String(num1 * num2); //converts to string and returns
    }
    subtraction(num1, num2) {
        var sub = num1 - num2;
        return sub.toString(); //converts to string and returns
    }
    division(num1, num2) {
        if (num2 == 0)
            return 0;
        return num1 / num2; //return number
    }
}
const mathLibrary = new ArithmeticLibrary();
/* harmony default export */ __webpack_exports__["default"] = (mathLibrary);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly91aS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly91aS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly91aS8uL3NyYy9tYXRobGlicmFyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBd0M7QUFDakMsU0FBUyxhQUFhO0lBQ3pCLE1BQU0sSUFBSSxHQUFRLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEQsTUFBTSxJQUFJLEdBQVEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVsRCxNQUFNLE1BQU0sR0FBUSxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7SUFDdkUsTUFBTSxNQUFNLEdBQVksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtJQUN4RSxJQUFJLENBQUMsb0RBQVcsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ3pDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLENBQUM7UUFDckMsT0FBTztLQUNSO0lBRUQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLG9EQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsb0NBQW9DO0lBQzlILFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxvREFBVyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNwRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsb0RBQVcsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7SUFDakcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLG9EQUFXLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsb0NBQW9DO0FBQ3JJLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQkg7QUFBQSxNQUFPLGlCQUFpQjtJQUVwQjtJQUVBLENBQUM7SUFDRCxRQUFRLENBQUMsSUFBWSxFQUFFLElBQVk7UUFDakMseURBQXlEO1FBQ3pELElBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QixPQUFPLEtBQUssQ0FBQztTQUNkO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsR0FBRyxDQUFDLElBQVksRUFBRSxJQUFZO1FBQzVCLE9BQU8sSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDLGVBQWU7SUFDbkMsQ0FBQztJQUNELGNBQWMsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUN2QyxPQUFPLE1BQU0sQ0FBQyxJQUFJLEdBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxnQ0FBZ0M7SUFDNUQsQ0FBQztJQUNELFdBQVcsQ0FBQyxJQUFZLEVBQUUsSUFBWTtRQUNwQyxJQUFJLEdBQUcsR0FBRyxJQUFJLEdBQUMsSUFBSSxDQUFDO1FBQ3BCLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsZ0NBQWdDO0lBQ3pELENBQUM7SUFDRCxRQUFRLENBQUMsSUFBWSxFQUFHLElBQVk7UUFDbEMsSUFBSSxJQUFJLElBQUksQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDLGVBQWU7SUFDbkMsQ0FBQztDQUNGO0FBQ0QsTUFBTSxXQUFXLEdBQUcsSUFBSSxpQkFBaUIsRUFBRTtBQUM1QiwwRUFBVyxFQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBtYXRoTGlicmFyeSBmcm9tICcuL21hdGhsaWJyYXJ5JztcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFyaXRobWV0aWMoKSB7XHJcbiAgICBjb25zdCBudW0xOiBhbnkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnVtMScpO1xyXG4gICAgY29uc3QgbnVtMjogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ251bTInKTtcclxuICBcclxuICAgIGNvbnN0IHJlc3VsdDogYW55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Vycm9yJyk7XHJcbiAgICBjb25zdCB2YWx1ZTE6IG51bWJlciA9IE51bWJlcihudW0xLnZhbHVlKTsgLy9leHBsaWNpdCBudW1iZXIgY29udmVyc2lvblxyXG4gICAgY29uc3QgdmFsdWUyOiBudW1iZXIgPSAgTnVtYmVyKG51bTIudmFsdWUpOyAvL2V4cGxpY2l0IG51bWJlciBjb252ZXJzaW9uXHJcbiAgICBpZiAoIW1hdGhMaWJyYXJ5LnZhbGlkYXRlKHZhbHVlMSwgdmFsdWUyKSkge1xyXG4gICAgICByZXN1bHQuaW5uZXJIVE1MID0gXCJJbnZhbGlkIG51bWJlcnNcIjtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VtUmVzdWx0JykuaW5uZXJIVE1MID0gU3RyaW5nKG1hdGhMaWJyYXJ5LmFkZCh2YWx1ZTEsIHZhbHVlMikpOyAvL2ltcGxpY2l0IGNvbnZlcnNpb24gdG8gc3RyaW5nIGhlcmVcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtdWxSZXN1bHQnKS5pbm5lckhUTUwgPSBTdHJpbmcobWF0aExpYnJhcnkubXVsdGlwbGljYXRpb24odmFsdWUxLCB2YWx1ZTIpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJSZXN1bHQnKS5pbm5lckhUTUwgPSBTdHJpbmcobWF0aExpYnJhcnkuc3VidHJhY3Rpb24odmFsdWUxLCB2YWx1ZTIpKTtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXZSZXN1bHQnKS5pbm5lckhUTUwgPSBTdHJpbmcobWF0aExpYnJhcnkuZGl2aXNpb24odmFsdWUxLCB2YWx1ZTIpKTsgLy9pbXBsaWNpdCBjb252ZXJzaW9uIHRvIHN0cmluZyBoZXJlXHJcbiAgfVxyXG4gIFxyXG4gXHJcbiAgXHJcbiAgIiwiY2xhc3MgIEFyaXRobWV0aWNMaWJyYXJ5e1xyXG4gICBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgdmFsaWRhdGUobnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgICAgLy9pZiAodHlwZW9mIG51bTEgIT0gJ251bWJlcicgfHwgdHlwZW9mIG51bTIgIT0gJ251bWJlcicpXHJcbiAgICAgIGlmKGlzTmFOKG51bTEpIHx8IGlzTmFOKG51bTIpKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgYWRkKG51bTE6IG51bWJlciwgbnVtMjogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgcmV0dXJuIG51bTErbnVtMjsgLy9yZXR1cm4gbnVtYmVyXHJcbiAgICB9XHJcbiAgICBtdWx0aXBsaWNhdGlvbihudW0xOiBudW1iZXIsIG51bTI6IG51bWJlcik6IHN0cmluZ3tcclxuICAgICAgcmV0dXJuIFN0cmluZyhudW0xKm51bTIpOyAvL2NvbnZlcnRzIHRvIHN0cmluZyBhbmQgcmV0dXJuc1xyXG4gICAgfVxyXG4gICAgc3VidHJhY3Rpb24obnVtMTogbnVtYmVyLCBudW0yOiBudW1iZXIgKTogc3RyaW5ne1xyXG4gICAgICB2YXIgc3ViID0gbnVtMS1udW0yO1xyXG4gICAgICByZXR1cm4gc3ViLnRvU3RyaW5nKCk7IC8vY29udmVydHMgdG8gc3RyaW5nIGFuZCByZXR1cm5zXHJcbiAgICB9XHJcbiAgICBkaXZpc2lvbihudW0xOiBudW1iZXIgLCBudW0yOiBudW1iZXIgKTogbnVtYmVyIHtcclxuICAgICAgaWYgKG51bTIgPT0gMCkgcmV0dXJuIDA7XHJcbiAgICAgIHJldHVybiBudW0xL251bTI7IC8vcmV0dXJuIG51bWJlclxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBtYXRoTGlicmFyeSA9IG5ldyBBcml0aG1ldGljTGlicmFyeSgpXHJcbiAgZXhwb3J0IGRlZmF1bHQgbWF0aExpYnJhcnk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=