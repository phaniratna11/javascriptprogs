import person from './person';
import domAccess from './domAccess';
let Persons = [] ;//Empty Array. This is supposed to hold Persons Objects
export function addPerson (){
  //1. Get Person details from DOM
  //used domAccess.js file methods
  //2. Create Persons Object
  let person1 = new person(domAccess.getName(),domAccess.getAge(),domAccess.getAddress());
  //3.Add it to the list
  Persons.push(person1);
}
export function getByAgeCondition() {
  setTimeout(getAgeCondition,2000);
}
export function getAgeCondition() {
  //1. Get Age condition using html input ageCondition
  let ageCondition = domAccess.getAgeCondition();
  //2. if Age is zero get all persons description
  let tempList = Persons;
  if (ageCondition != 0) {
    tempList = tempList.filter(function(person) {
      return person.age <= ageCondition;
    });
    console.log(tempList);
  }
  //3. if age is some value, filter persons whose age is lower than given
  let personsList = "";
  for(var x of tempList) {
   //This is ES6 for loop
    personsList += x.describe();
  }

  //4. update personsList
  setTimeout(function(){
    domAccess.updatePersonsList(personsList);
  },0);
  //var listElement = personDOM.updatePersonsList(personsList);
}
//Please fill code
export function getBySearchCondition() {
  let   searchCondition= domAccess.getSearchCriteria();
  console.log(searchCondition);
  let newList = Persons;
  if(searchCondition.length != 0) {
       newList = Persons.filter(function(person){
         //console.log(person.name);
         return person.name.match( searchCondition);
       });
    }
      //console.log(newList); 
    let personsList = "";
     for(var x of newList) { //This is ES6 for loop
        
       personsList += x.describe();
        
      }
      //4. update personsList
     let listElement = domAccess.updatePersonsList(personsList);
  }
  