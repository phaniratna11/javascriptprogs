var arithDOM = (function(){
    //Kind of Private within this function, cannot be accessible
    var num3 = 'num3';
    var num4 = 'num4';
    var GET_EVEN= 'getEven';
    var EVEN_LIST = 'evenResult';
    var dom = new Object();
    dom.getInteger = function(name) {
      var htmlElement = document.getElementById(name);
      var returnValue = Number(0);  //default is zero?
      try{
      if (!isNaN(htmlElement.value))
        returnValue = Number(htmlElement.value);
      }
      catch(error){
        alert(error);
      }
      return returnValue;
    }
    dom.getNum3 = function() {
      return this.getInteger(num3);
    }
    dom.getNum4 = function() {
      return this.getInteger(num4);
    }
    
    dom.getString = function(name) {
      var htmlElement = document.getElementById(name);
      try{
      var returnValue = '';  //default is empty Name?

      if (typeof(htmlElement.value) == 'string')
        returnValue = String(htmlElement.value);
      }
      catch(error){
        alert(error);
      }
      return returnValue;
    }
    dom.getName = function() {
      return this.getString(GET_EVEN)
    }
    dom.updateEvenList = function(newText) {
      //Updating UI in separate callback from setTimeout so your logic does not wait until UI returns
      setTimeout(function() {
        var evenListElement = document.getElementById(EVEN_LIST);
        evenListElement.innerText = newText;
      }, 0);
    }
    
    return dom;
  })();
  