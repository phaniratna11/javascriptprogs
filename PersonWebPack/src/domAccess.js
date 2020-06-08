//Using IIFE (immediately invoking function express as a way to create abstraction)
class PersonDOM{
    //Kind of Private within this function, cannot be accessible

    //static AGE ;
     // AGE_CONDITION = 'ageCondition';
    //static NAME = 'name';
    // ADDRESS = 'address';
    // SEARCH_CRITERIA = 'searchCriteria';
    // PERSONS_LIST = 'personsList';
   constructor() {
     
   }
   
    getAge() {
      let ageElement = document.getElementById('age');
      let age = 0;  //default is zero?
      if (!isNaN(ageElement.value)) //Any other way?
        age = Number(ageElement.value);
      return age;
    }
    getAgeCondition() {
      let ageConditionElement = document.getElementById('ageCondition');
      let ageCondition = Number(0);  //default is zero?
      if (!isNaN(ageConditionElement.value))
        ageCondition = Number(ageConditionElement.value);
      return ageCondition;
    }
    
    getName() {
      let nameElement = document.getElementById('name');
      let name = '';  //default is empty Name?
      if (typeof(nameElement.value) == 'string')
        name = String(nameElement.value);
      return name;
    }
    getAddress() {
      let addressElement = document.getElementById('address');
      let address = '';  //default is empty Name?
      if (typeof(addressElement.value) == 'string')
      address = String(addressElement.value);
      return address;
    }
  
    getSearchCriteria() {
      let searchCriteriaElement = document.getElementById('searchCriteria');
      let searchCriteria = '';  //default is empty Name?
      if (typeof(searchCriteriaElement.value) == 'string')
      searchCriteria = String(searchCriteriaElement.value);
      return searchCriteria;
    }
  
    updatePersonsList(newText) {
        let personsListElement = document.getElementById('personsList');
      personsListElement.innerText = newText;
    }
    
  }
  const domAccess = new PersonDOM();
  export default domAccess;