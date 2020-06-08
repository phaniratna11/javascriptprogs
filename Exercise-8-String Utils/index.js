
var stringUtils = {
  reverse: function(str) {
    return str;
  },
  encode: function(str, key) {

  }
  ,
  decode: function(str, key) {

  },
  search: function(sourceString, searchStr) {
    
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