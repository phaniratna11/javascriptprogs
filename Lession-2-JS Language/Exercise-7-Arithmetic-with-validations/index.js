
var arithmetic = {
  validate: function(num1, num2) {
    //if (typeof num1 != 'number' || typeof num2 != 'number')
    if(isNaN(num1) || isNaN(num2)) {
      return false;
    }
    return true;
  },
  add: function(num1, num2) {
    return num1+num2; //return number
  },
  multiplication: function(num1, num2){
    return String(num1*num2); //converts to string and returns
  },
  subtraction: function(num1, num2){
    var sub = num1-num2;
    return sub.toString(); //converts to string and returns
  },
  division: function(num1, num2){
    if (num2 == 0) return 0;
    return num1/num2; //return number
  }
};

function getArithmetic() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');

  var result = document.getElementById('error');
  num1 = Number(num1.value); //explicit number conversion
  num2 = Number(num2.value); //explicit number conversion
  if (!arithmetic.validate(num1, num2)) {
    result.innerHTML = "Invalid numbers";
    return;
  }
  
  document.getElementById('sumResult').innerHTML = arithmetic.add(num1, num2); //implicit conversion to string here
  document.getElementById('mulResult').innerHTML = arithmetic.multiplication(num1, num2);
  document.getElementById('subResult').innerHTML = arithmetic.subtraction(num1, num2);
  document.getElementById('divResult').innerHTML = arithmetic.division(num1, num2); //implicit conversion to string here
}

