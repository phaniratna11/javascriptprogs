export default class AddressBook {
name: string = ' ';
phoneNumber: number = 0;

constructor(name: string,phoneNumber: number) {
  this.name = name;
  this.phoneNumber = phoneNumber; 
}

describe(): string {
     let description = " AddressBook[Name = ";
     description += this.name;
     description += "]";
    return description;
  }
}