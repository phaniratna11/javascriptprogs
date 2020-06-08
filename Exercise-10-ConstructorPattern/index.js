var Persons = [] ;//Empty Array. This is supposed to hold Persons Objects

function addPerson (){
  //1. Get Person details from DOM
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;

  // var nameElement = document.getElementById("personsList");
  // listElement.innerHTML = personsList;

  //2. Create Persons Object
  const person = new Person(name, age);
  console.log(person.name + " " + person.age);
  //3.Add it to the list
  Persons.push(person);

}

function getByAgeCondition() {
  //1. Get Age condition using html input ageCondition
  var age = document.getElementById("ageCondition").value;
  age = Number(age);
  

  
  //2. if Age is zero get all persons description
  var newList = Persons;
    if(age !=0){
    newList = newList.filter(function(x){
    return x.age <= age;
      });
  }
  //3. if age is some value, filter persons whose age is lower than given
  var personsList = "";
  for( person of newList) { //This is ES6 for loop
    personsList += person.describe();
  }
 console.log(personsList);
  //4. update personsList
  var listElement = document.getElementById("personsList");
  listElement.innerHTML = personsList;
}