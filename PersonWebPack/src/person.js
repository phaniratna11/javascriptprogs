export default class  Person {
  constructor(name,age,address){
    this.name = name;
    this.age = age;
    this.address = address;
  }
  describe(){
    let description = 'Person Information <br> Name is ';
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += String(this.address);
    description += "\n"; //Hack, should not do it 
    return description;
 }
}
//const person = new Person(name,age,address)
//export default person;
