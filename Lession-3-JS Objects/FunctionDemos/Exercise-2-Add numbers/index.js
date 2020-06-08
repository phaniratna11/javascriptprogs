
function findFactorial() {
  var num1 = Number(document.getElementById('num1').value);
  var x = 0;
  var factResult ;
  if (isNaN(num1) || x < 1 || x > 10) {
    text = "Input not valid";
    document.getElementById('num1').focus();
   
  }
  else
  {
     factResult = findFact(num1.value);
     console.log(factResult);
  }
  document.getElementById("demo").innerHTML = text;
    var result = document.getElementById('result');
  result.innerHTML = factResult;
}function findFact(num) {
  if(num == 0){
    return 1;
  }
   return num * findFact(num - 1);

}
