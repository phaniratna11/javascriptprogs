//Using IIFE (immediately invoking function express as a way to create abstraction)
class PersonDOM {
  //Kind of Private within this function, cannot be accessible
  static AGE = 'age';
  static  AGE_CONDITION = 'ageCondition';
  static  NAME = 'name';
  static  HNO = 'hno';
  static  COLNAME = 'colName';
  static  SEARCH_CRITERIA = 'searchCriteria';
  static  PERSONS_LIST = 'personsList';
  static  RANDOM_SCROLL_TEXT = 'randomScrollText';
  static  SCROLL_TIME = 'scrollTime';
  //static  dom = new PersonDOM();
  static getInteger(name){
    let htmlElement = document.getElementById(name);
    let returnValue = Number(0); 
    if (!isNaN(htmlElement.value))
      returnValue = Number(htmlElement.value);
    return returnValue;
  }
  static getAge(){
    return PersonDOM.getInteger(PersonDOM.AGE);
  }
  static getAgeCondition() {
    return PersonDOM.getInteger(PersonDOM.AGE_CONDITION);
  }
  static getScrollTime(){
   
    return PersonDOM.getInteger(PersonDOM.SCROLL_TIME);
  }
  static getString(name){
    var htmlElement = document.getElementById(name);
    var returnValue = '';  
    if (typeof(htmlElement.value) == 'string')
      returnValue = String(htmlElement.value);
    return returnValue;
  }
  static getName() {
    return PersonDOM.getString(PersonDOM.NAME)
  }
  static getHno() {
    return PersonDOM.getString(PersonDOM.HNO);
  }
  static getColName() {
    return PersonDOM.getString(PersonDOM.COLNAME);
  }
  static getSearchCriteria() {
    return this.getString(PersonDOM.SEARCH_CRITERIA);
  }

  static updatePersonsList(newText) {
    //Updating UI in separate callback from setTimeout so your logic does not wait until UI returns
    setTimeout(function() {
      let personsListElement = document.getElementById(PersonDOM.PERSONS_LIST);
      personsListElement.innerText = newText;
    }, 0);
  }
  static updateScrollText(newText){
    setTimeout(function() {
      var personsListElement = document.getElementById(PersonDOM.RANDOM_SCROLL_TEXT);
      personsListElement.innerText = newText;
      }, 0);
    
  }
  
}
