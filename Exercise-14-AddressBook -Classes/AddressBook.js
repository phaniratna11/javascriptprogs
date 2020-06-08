class AddressBook{
  constructor(name,phoneNumber){
    this.name = name;
    this.phoneNumber = phoneNumber;
  }
  describe() {
    let description = " AddressBook[Name = ";
     description += this.name;
     description += ', Phone Number : ' + this.phoneNumber;
     description += "]";
    return description;
  }
};

