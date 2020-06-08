function AddressBook() {
};
AddressBook.name = "";
AddressBook.phoneNumber = "";

//Add more properties like age, address, 
//friends list  -> this holds list of other contacts as his/her friends list

//Q. In address class have fields like House Number, street Name, City, State, ZipCode
AddressBook.prototype.init = function (name,phoneNumber) {
  this.name = name;
  this.phoneNumber = phoneNumber; 
 


}
AddressBook.prototype.describe = function () {
     let description = " AddressBook[Name = ";
     description += this.name;
     description += "]";
    return description;
  }