
var arithmetic = {
  add: function(num1, num2){
    return num1+num2;
  },
  multiplication: function(num1, num2){
    return num1*num2;
  },
  subtraction: function(num1, num2){
    return num1-num2;
  },
  division: function(num1, num2){
    if (num2 == 0) return 0;
    return num1/num2;
  }
};

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
  document.getElementById('sumResult').innerHTML = arithmetic.add(num1, num2);
  document.getElementById('mulResult').innerHTML = arithmetic.multiplication(num1, num2);
  document.getElementById('subResult').innerHTML = arithmetic.subtraction(num1, num2);
  document.getElementById('divResult').innerHTML = arithmetic.division(num1, num2);
}

