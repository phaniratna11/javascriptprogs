// addition(100,200);
// function addition(firstNum,secNum){
//   console.log(firstNum+secNum);
// }

var value = true;
if (value){
  var evenums = function(num){
    return num % 3 ;
  }
  evenums(34);
}
else{
  var evenums = function(num){
    return num % 2 ;
  }
  evenums(34);
}

// console.log(addition.name);
// console.log(evenums.name);
// //
// var enum_result = evenums;
// console.log(enum_result.name);
// enum_result = undefined;



// console.log("Even Nums = " +evenums.name);
// console.log("Even Result = " + enum_result.name);
function addNumbers() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');
  if (isNaN(num1) || x < 1 || x > 10) {
    text = "Input not valid";
    document.getElementById('num1').focus();
  }
  if (isNaN(num2) || x < 1 || x > 10) {
    text = "Input not valid";
    document.getElementById('num2').focus();
   
  } 
  document.getElementById("demo").innerHTML = text;

  var sum = Number(num1.value) + Number(num2.value);

  var result = document.getElementById('result');
  result.innerHTML = sum;
}