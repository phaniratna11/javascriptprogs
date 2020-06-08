const Address= require('./Address');
class Contact {
constructor(pid,name, age,hno,street,city) {
  this.pid = Number(pid);
  this.name = name;
  this.age = Number(age);
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
    age : this.age,
    hno : this.hno,
    street: this.street,
    city: this.city,
   }
}


//fill code to add another contact here
//but asynchronously
addContact(friendContact) {
  this.friendsList.push(friendContact);
}

//asynchronously return this person 
//friends list using callback function
getFriendsList () {
  let friendsData = ' ';
  for(const friend of this.friendsList){
    friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age +']';
  }
  return friendsData;
 }
};  
module.exports = Contact;
  
