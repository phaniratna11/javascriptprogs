//Using IIFE (immediately invoking function express as a way to create abstraction)
const personDOM = (function(){
  //Kind of Private within this function, cannot be accessible
  const PID= 'pid';
  const PNAME ='pname';
  const JOB = 'job';
  const HNO = 'hno';
  const STREET ='street';
  const CITY = 'city';
  const PINCODE = 'pincode';
  const STATE = 'state';

  var dom = new Object();   

  
  
  dom.getInteger = function(name) {
    const htmlElement = document.getElementById(name);
    let returnValue = Number(0);  //default is zero?
    if (!isNaN(htmlElement.value)) {
      returnValue = Number(htmlElement.value);
      return returnValue;
    }
    throw 'not a number';
  }
  
  dom.getString = (name) => {
    const htmlElement = document.getElementById(name);
    let returnValue = '';  //default is empty Name?
    if (typeof(htmlElement.value) == 'string')
      returnValue = String(htmlElement.value);
    return returnValue;
  }
  dom.getPid = function() {
    return this.getInteger(PID);
  }
  dom.getPname = function() {
    return this.getString(PNAME)
  }
   dom.getJob = function() {
    return this.getString(JOB);
  }
  dom.getHno = function() {
    return this.getString(HNO);
  }
  dom.getStreet = function() {
    return this.getString(STREET);
  }
  dom.getCity = function() {
    return this.getString(CITY);
  }
  dom.getState = function() {
    return this.getString(STATE);
  }
  dom.getPinCode = function() {
    return this.getString(PINCODE);
  }
  return dom;
})();


