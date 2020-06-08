var Persons = [] ;//Empty Array. This is supposed to hold Persons Objects

function addPerson (){
  //1. Get Person details from DOM
  var name = document.getElementById("name").value;
  var age = document.getElementById("age").value;
  var contactno = document.getElementById("contactno").value;
  var email = document.getElementById("email").value;
 
  var result = document.getElementById('error');
  
  if (name == '' || isNaN(age) || contactno  == '' || email== ''){
    result.innerHTML = "<font color = red>Invalid Input</font>";
    return;
  }
  else{ 
    result.innerHTML = "<font color = green>valid Input</font>";
  //2. Create Persons Object

  var person = new Person();
  person.init(name, age,contactno,email);

  //3.Add it to the list
  Persons.push(person);
  }
}

function getByAgeCondition() {
  var name =document.getElementById("nameCondition").value;
   //2. if Age is zero get all persons description
   
   var newList = Persons;
   
  //  if(age != 0) {
  //   newList = newList.filter(function(person){
  //     return person.age <= age;
  //   });

  if(name.length != 0) {
       newList = newList.filter(function(person){
         return person.name.match( name);
       });
      console.log(newList);
  }
  
   //3. if age is some value, filter persons whose age is lower than given
   var personsList = "";
   for( person of newList) { //This is ES6 for loop
     //personsList += person.describe();
     
     personsList += person.describeWithHoroscope();
   }

  //4. update personsList
  var listElement = document.getElementById("personsList");
  listElement.innerHTML = personsList;
}
