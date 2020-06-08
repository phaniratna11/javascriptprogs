//Using IIFE (immediately invoking function express as a way to create abstraction)
const personDOM = (function(){
  //Kind of Private within this function, cannot be accessible
const AGE = 'age';
const AGE_CONDITION = 'ageCondition';
const NAME = 'name';
 // var ADDRESS = 'address';
const HNO = 'hno';
const COLNAME = 'colName';
const SEARCH_CRITERIA = 'searchCriteria';
const PERSONS_LIST = 'personsList';
const RANDOM_SCROLL_TEXT = 'randomScrollText';
const SCROLL_TIME = 'scrollTime';
const ERROR_RESULT = 'errorRes';

const dom = new Object();
dom.validateInteger = (htmlElement) =>{
  console.log(htmlElement);
  var ageReg =/^[\d]{0,2}$/;
  
    if(htmlElement.value == " " || htmlElement.value.length == 0 ){
      throw 'Empty Field';
    }
    if(!ageReg.test(htmlElement.value)) {
      throw 'Enter valid age';
    }
  
  // catch(error){
  //    document.getElementById('errorRes').innerHTML = "<font color=red>"+error+"</font>";
  // }
};
 
 dom.validateString = (htmlElement) =>{
  let regex = /^[a-zA-Z]{2,30}$/;
  if(htmlElement.value == "" ||  htmlElement.value.length == 0){
    throw 'Empty Name';
  }
  if(!regex.test(htmlElement.value)){
    throw 'Invalid Name';
  }
    
    
  
  // catch(error){
  //   document.getElementById('errorName').innerHTML = "<font color=red>"+htmlElement.value + "" + error+"</font>";
  // }

};
  dom.getInteger = (name) => {
     const htmlElement = document.getElementById(name);
    dom.validateInteger (htmlElement);
    let returnValue = Number(0);  //default is zero?
    if (!isNaN(htmlElement.value)){
      returnValue = Number(htmlElement.value);
    } 
    
     //document.getElementById('errorRes').innerHTML = error;
        
  
    return returnValue;
  }
  
  dom.getAge = function ()  {return this.getInteger(AGE);}
  
  dom.getAgeCondition = function()  {return this.getInteger(AGE_CONDITION);}
  
  dom.getScrollTime = function () { return this.getInteger(SCROLL_TIME);}
  
  
  dom.getString = (name) =>{
    let htmlElement = document.getElementById(name);
    dom.validateString (htmlElement);
    let returnValue = '';  //default is empty Name?
    if (typeof(htmlElement.value) == 'string')
      returnValue = String(htmlElement.value);
    return returnValue;
  }
  dom.getName = function()  { return this.getString(NAME); }
  
  dom.getHno = function()  { return this.getString(HNO);}
  
  dom.getColName = function () { return this.getString(COLNAME);}
  
  dom.getSearchCriteria =function ()    { return this.getString(SEARCH_CRITERIA);}
  

  dom.updatePersonsList = (newText) => {
    //Updating UI in separate callback from setTimeout so your logic does not wait until UI returns
    setTimeout(function() {
      const personsListElement = document.getElementById(PERSONS_LIST);
      personsListElement.innerText = newText;
    }, 0);
  }

  dom.updateScrollText = function(newText) {
    setTimeout(function() {
      const personsListElement = document.getElementById(RANDOM_SCROLL_TEXT);
      personsListElement.innerText = newText;
      }, 0);
  }
  dom.updateError = function(errorText){
    setTimeout(function() {
      const errorResultElement = document.getElementById(ERROR_RESULT);
      errorResultElement.innerText = errorText;
      }, 0);
  }
  return dom;
})();
