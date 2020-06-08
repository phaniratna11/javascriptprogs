
var stringUtils = {
  reverse: function(str) {
    var reverseStr='';
     
    for (let i = str.length-1; i >=0 ; i--) {
      reverseStr += str[i];
    }
     
    return reverseStr;
  },
  encode: function(str, key) {
      //1.For every key
      // var result ='';
      // var ind = 0,len = key.length;
      // for(var i = 0; i < str.length;i++) {
      //   result +=  str[i];
      //   result +=  key[ind++];
      //   if(ind == len){
      //     ind = 0; 
      //   }
      // }
      // console.log("1. First method Encode result: "+result);
      // var result2 ="";
      // //2.for every 2 chars append key.length
      // for(var i = 0; i < result.length;i++) {
      //   result2 += result[i];
      //   if(i % 2 != 0) {
      //     result2 += key.length;
      //     }
          
      // }
      // console.log("2. Second method Encode result: "+result2);
      // return result2;


      var result = '';
  var len = key.length;
 
  //3. reduce alphabets only by one ascii code
  var strAlphabets = "ZYXWVUTSRQPONMLKJIHGFEDCBAZzyxwvutsrqponmlkjihgfedcbaz";
  
  for(var j = 0; j < str.length; j++) {
    var letters = /^[A-Za-z]+$/;
    if(str[j].match(letters)) {
      var ind = strAlphabets.indexOf(str[j]);
      ind++; //advance to the next alphabet
      result += strAlphabets[ind]; //replace with next char in alphabet list
    }
    else {
      result += str[j];
    }
  }
  /**
   * /2.split string into half and move positions of each
  // var halfIndex = result.length / 2;
  // result = result.substr(halfIndex) + result.substr(0, result.length-halfIndex);
 
  var finalResult = "";
  var ind = 0;
  //1.For every character in str, remove one digit from key
  //repeat until the end of string by adding chars from key again
  for(var i = 0; i < result.length; i++){
    finalResult += result[i++];
    if(result[i] != key[ind++]){
      return '';
    }
    if(ind == key.length) {
        ind = 0;
    }
  }
  return finalResult;
   */
  return result; 
  },
  decode: function(str, key) {

    
    // var result2 ="";
    
    // var arr = str.trim().split("");
    // //2.for every 2 chars remove key.length
    // for(var i = 2; i < arr.length; i+=2){
    //       arr.splice(i, 1);

    // }
    // arr = arr.join('');
    // console.log(arr);
    // console.log("2. Second method decode result: "+arr);

    // var result = '';
    // var ind = 0, len = key.length;
    // for(var i = 0; i < arr.length; i++) {
    //   result += arr[i++];
    //   if(arr[i] != key[ind++]) {
    //     return '';
    //   }
    //   if(ind == key.length) {
    //       ind = 0;
    //   }
    // }
    // console.log("1. First method decode result: "+result);
    // return result;
    //3. move alphabets only by one ascii code
    var finalResult = "";
    var strAlphabets = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZA";
    for(var j = 0; j < result.length; j++) {
      var letters = /^[A-Za-z]+$/;
      if(result[j].match(letters)) {
        var ind = strAlphabets.indexOf(result[j]);
        ind++; //advance to the next alphabet
        finalResult += strAlphabets[ind]; //replace with next char in alphabet list
      }
      else {
        finalResult += result[j];
      }
    }
   return finalResult;
  },
  search: function(sourceString, searchStr) {
    var result = '';
    var splitString = sourceString.split(' ');
    var  b = false;
    for(var i = 0; i <  splitString.length;i++){
       if(splitString[i] == searchStr){
         b = true;
       }
    }
    if(b){
      result = "Searching word is found";
    }
    else{
      result = "Searching word is not found";
    }

    // var n = sourceString.search(/searchStr/g);
    // if(n != -1) {
    //     result = 'Seaching word is not found';
    // }
    // else{
    //    result ='Seaching word  found';
    // }

    return result;
  }
};

//use secretKey for encoding and decoding
var secretKey = 'abc123';

function reverse() {
  var sourceStrElement = document.getElementById('str1');
  var result = stringUtils.reverse(sourceStrElement.value);
  var reverseElement = document.getElementById('reverseResult');
  reverseElement.innerHTML = result;
}
function encode() {
  var sourceStrElement = document.getElementById('str1');
  var result = stringUtils.encode(sourceStrElement.value, secretKey);
  var encodeElement = document.getElementById('encodeResult');
  encodeElement.innerHTML = result;
}
function decode() {
  var sourceStrElement = document.getElementById('str1');
  var result = stringUtils.decode(sourceStrElement.value, secretKey);
  var decodeElement = document.getElementById('decodeResult');
  decodeElement.innerHTML = result;
}

function search() {
  var sourceStrElement = document.getElementById('str1');
  var searchStrElement = document.getElementById('searchFor');
  var result = stringUtils.search(sourceStrElement.value, searchStrElement.value);
  var searchResultElement = document.getElementById('searchResult');
  searchResultElement.innerHTML = result;
}