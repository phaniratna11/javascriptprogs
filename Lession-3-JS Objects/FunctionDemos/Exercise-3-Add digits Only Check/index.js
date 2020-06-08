
function addNumbers() {
  var num1 = document.getElementById('num1');
  var num2 = document.getElementById('num2');

  var result = document.getElementById('result');
  

  if (isNaN(num1.value) || isNaN(num2.value)) {
    result.innerHTML = "Invalid numbers";
    return;
  }
  var sum = Number(num1.value) + Number(num2.value);
  result.innerHTML = sum;
}