const Contacts = [] ;//Empty Array. This is supposed to hold Persons Objects
var scrollTimerId = -1;
var isScrollOn = false;
var scrollTime = 0;
//Q. Can you creat new function to take many contacts in single function

function addPerson (){
  //1. Get Contact details from DOM
  //used domAccess.js file methods
  //2. Create contact Object
  personDOM.updateError(" ");
  let contact = new Contact();
  try{
  contact.init(personDOM.getName(), personDOM.getAge(), personDOM.getHno(),personDOM.getColName());
  }
  catch(error){
    personDOM.updateError(error);
    return;
  }
  Contacts.push(contact);
  //3.Add it to the list
 
}

function getByAgeCondition() {
 
  setTimeout(() => {
    //1. Get Age condition using html input ageCondition
    //var ageCondition = personDOM.getAgeCondition();
    let ageCondition = Number(document.getElementById('ageCondition').value);
    //2. if Age is zero get all persons description
    let tempList = Contacts;
    if (ageCondition != 0) {
      tempList = tempList.filter(person => person.age <= ageCondition);
    }
    console.log(tempList);
    //3. if age is some value, filter persons whose age is lower than given
    let personsList = "";
    for( contact of tempList) { //This is ES6 for loop
      personsList += contact.describe();
    }

    //4. update personsList
     personDOM.updatePersonsList(personsList);
  }, 0);
}


function updatePersonData(){
    if (Contacts.length > 0) {
      var ind = Math.floor(Math.random() * Math.floor(Contacts.length));
      ind = ind % Contacts.length;
      personDOM.updateScrollText(Contacts[ind].describe());
    }
    if(isScrollOn){
      scrollTimerId = setTimeout(updatePersonData, scrollTime*1000); //multiply by 1000 to make it in milli seconds
    }

}
function onStartScroll() {
  isScrollOn = true;
  scrollTime = personDOM.getScrollTime();
  //onStopScroll();
  if(scrollTimerId != -1) {
    clearTimeout(scrollTimerId);
  }
  scrollTimerId = setTimeout(updatePersonData, scrollTime*1000); //multiply by 1000 to make it in milli seconds
}
function onStopScroll() {
  isScrollOn = false;
  if(scrollTimerId != -1) {
    clearTimeout(scrollTimerId);
  }
  
}