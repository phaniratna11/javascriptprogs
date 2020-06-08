var Persons = [] ;//Empty Array. This is supposed to hold Persons Objects

function addPerson (){
  //1. Get Person details from DOM
   
  //used domAccess.js file methods
  //2. Create Persons Object
  var person = new Person();
  person.init(personDOM.getName(), personDOM.getAge(), personDOM.getAddress());

  //3.Add it to the list
  Persons.push(person);

}

function getByAgeCondition() {
  setTimeout(getAgeCondition,2000);
}
function getAgeCondition() {

  //1. Get Age condition using html input ageCondition
  var ageCondition = personDOM.getAgeCondition();
  //2. if Age is zero get all persons description
  var tempList = Persons;
  if (ageCondition != 0) {
    tempList = tempList.filter(function(person) {
      return person.age <= ageCondition;
    });
    console.log(tempList);
  }
  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for( person of tempList) { //This is ES6 for loop
    personsList += person.describe();
  }

  //4. update personsList
  setTimeout(function(){personDOM.updatePersonsList(personsList);},0);
  //var listElement = personDOM.updatePersonsList(personsList);
}

//Please fill code
function getBySearchCondition() {
  
  var   searchCondition= personDOM.getSearchCriteria();
  console.log(searchCondition);
  var newList = Persons;
   
 

  if(searchCondition.length != 0) {
       newList = Persons.filter(function(person){
         //console.log(person.name);
         return person.name.match( searchCondition);
       });
      }
      //console.log(newList);

      var personsList = "";
     for( person of newList) { //This is ES6 for loop
       personsList += person.describe();
      }
      //4. update personsList
     var listElement = personDOM.updatePersonsList(personsList);
  }
  setInterval(() => {
    var wish = "<h1>WELCOME TO OJAS</h1>";
     alert(wish);
    
  }, 2000);