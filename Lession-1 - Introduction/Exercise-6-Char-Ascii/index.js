

function asciiOfCharString() {
  var str1 = document.getElementById('str');
  str1 = str1.value;
   var resultString = '';
  var m ='';
  for(var i = 0;i< str1.length;i++) {
      var n = str1.charCodeAt(i);
      if(n >= 65 && n <= 90) {
        console.log(n);
         if(n > 89){
          n = 64;
         }
      }
      if(n >= 97 && n <= 122) {
        if(n > 121) {
          n = 96;
        }
      }
      resultString+= String.fromCharCode(++n);
    
    console.log(resultString);
  }
  document.getElementById('result').innerHTML = resultString;
    

  
 
}


