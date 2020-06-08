import Address from "./address";

//const Address= require('./Address');
export default class Contact {
  pid:number;
  name:string;
  age:number;
  hno:string;
  street:string;
  address:Address;
constructor(pid:number,name:string, age:number,hno:string,street:string,city:string) {
  this.pid = pid;
  this.name = name;
  this.age = age;
  this.address = new Address(hno,street,city);
  //this.friendsList = [];
}

describe () {
  var description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
     description += this.address.describe();
     description += "\n"; //Hack, should not do it 
    return description;
}
getJson(){
  return {
    name: this.name,
    age : this.age
   
   }
}

}
//module.exports = Contact;
  
