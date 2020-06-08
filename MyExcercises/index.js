
function findFactorial() {
  var num1 = Number(document.getElementById('num1').value);
  console.log(num1);
  var fact = findfact(num1) ;
  var result = document.getElementById('result');
  result.innerHTML = fact;
}
function findfact(num1){
  if(num1 == 1) {
    return 1;
  }else {
    return num1 * findfact(num1 -1);
  }
}
function imageDownloaded(result){
     alert("Image is copied successfully" + result);
}

function imageCopy(){
  testCall(imageDownloaded);
}
function testCall(callmeback){
  callmeback('success');
}