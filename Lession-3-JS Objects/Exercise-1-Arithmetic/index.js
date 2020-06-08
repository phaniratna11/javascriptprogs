//Factory Pattern
function createArithmetiOperaions(num1,num2){
     var arithdemo = new Object();
     arithdemo.num1 = num1;
     arithdemo.num2 = num2;
     arithdemo.add = function () {
      return num1+num2;
    };
    arithdemo.multiplication = function(){
      return num1*num2;
    };
    arithdemo.subtraction = function(){
      return num1-num2;
    };
    arithdemo.division = function(){
      if (num2 == 0) return 0;
      return num1/num2;
    };
    return arithdemo;

}

function getArithmetic() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  
  var result = document.getElementById('error');
  
  if (isNaN(num1.value) || isNaN(num2.value)) {
    result.innerHTML = "Invalid numbers";
    return;
  }
  num1 = Number(num1.value);
  num2 = Number(num2.value);
  var obj1 = createArithmetiOperaions(num1,num2);
  document.getElementById('sumResult').innerHTML = obj1.add();
  document.getElementById('mulResult').innerHTML = obj1.multiplication();
  document.getElementById('subResult').innerHTML = obj1.subtraction();
  document.getElementById('divResult').innerHTML = obj1.division();
}

