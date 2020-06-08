
function Person(){
 obj.num1 = num1;
 obj.prototype.num3 =num3;
 obj.prototype.init = function(num1,num2){
   this.num1 = num1;        
   this.num2 = num2;
 }
 Person.prototype.sum = function(){
     return this.num1 + this.num2;
 }
}
 

function dispSub() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  var obj = new Object();
  obj.num1 = num1;
  obj.num2 = num2;
  
//   document.getElementById('result').innerHTML = resultString;
    

  
 
}


