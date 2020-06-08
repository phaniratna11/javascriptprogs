 export default class AddressBook {
  constructor(name,phoneNumber){
    this.name = name;
    this.phoneNumber = phoneNumber; 
  }
  describe() {
     let description = " AddressBook[Name = ";
     description += this.name;
     description += "]";
    return description;
  }
}