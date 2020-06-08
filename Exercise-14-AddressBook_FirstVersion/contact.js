
function Contact() {
};
Contact.pid ="";
Contact.name = "";
Contact.age = "";
Contact.address = ""; //Can Address be separate class?
Contact.friendsList = [];

//Q. In address class have fields like House Number, street Name, City, State, ZipCode
Contact.prototype.init = function(pid,name, age, hno,street,city) {
  this.pid = Number(pid);
  this.name = name;
  this.age = Number(age);
  this.address = new Address();
  this.address.init(hno,street,city);
  this.friendsList = [];
  
}
Contact.prototype.describe = function() {
  var description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += String(this.age);
    description += " and address is ";
    description += this.address.describe();
    description += "\n"; //Hack, should not do it 

    return description;
}


//fill code to add another contact here
//but asynchronously
Contact.prototype.addContact = function (friendContact) {
  this.friendsList.push(friendContact);
}

//asynchronously return this person 
//friends list using callback function
Contact.prototype.getFriendsList = function () {
  let friendsData = ' ';
  for(friend of this.friendsList){
    friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age +']';
  }
  return friendsData;
}
   
   
  
