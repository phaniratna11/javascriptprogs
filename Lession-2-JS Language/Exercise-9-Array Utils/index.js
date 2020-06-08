function getPrimes() {
  var num1 = document.getElementById('arr1');
  //get the array of numbers
  num1 = num1.value;
  var nums =[];
  var inputList = num1.split(' ');
  for(var i = 0 ; i < inputList.length;i++) {
        nums[i] = Number(inputList[i]);
  }
  var myvars = nums.filter(function(num1){
  var i = 2,flag = 0;
  while(i < num1){
      if(num1 % i == 0){
         flag++;
         break;
       }
       i++;
  }
  if(flag == 0){
      return num1;
    }
  });
  console.log(myvars);
  var primeResultElement = document.getElementById('primeList');
  primeResultElement.innerHTML = myvars;
}

function getSecondSmallest() {
  var num1 = document.getElementById('arr1');
   num1 = num1.value;
   var nums =[];
  var inputList = num1.split(' ');
  for(var i = 0 ; i < inputList.length;i++) {
        nums[i] = Number(inputList[i]);
  }
  nums = nums.sort((a,b) => a - b);
  var secondSmallest = nums[2];
  var smallResultElement = document.getElementById('smallResult');
  smallResultElement.innerHTML = secondSmallest ;
}

function getOdd() {
  var num1 = document.getElementById('arr1');
   num1 = num1.value;
   var nums =[];
  var inputList = num1.split(' ');
  for(var i = 0 ; i < inputList.length;i++) {
        nums[i] = Number(inputList[i]);
  }
  var oddresult = nums.filter(function(x){
       return x % 2 !=0;
  } );
  
  var oddResultElement = document.getElementById('oddResult');
     oddResultElement.innerHTML = oddresult ;
}

function getProd() {
  var num1 = document.getElementById('arr1');
   num1 = num1.value;
   var numbers =[];
  var inputList = num1.split(' ');
  var k = 0;
  for(var i = 0 ; i < inputList.length-1;i++) {
        numbers[i] = Number(inputList[i]);
       
  }
  console.log(numbers[0]);
  let prodResult1 = numbers.reduce(function(prod, val){ return prod * val; },1); 
  console.log(prodResult);
  var  prodResultElement = document.getElementById('prodResult');
       prodResultElement.innerHTML = prodResult1 ;
}

