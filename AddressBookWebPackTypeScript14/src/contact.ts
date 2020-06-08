import Address from './address';
export default class Contact {
  pid: number = 0;
  name: string  = "";
  age: number = 0;
  address: Address; //Can Address be separate class?
  friendsList= new Array();

//Q. In address class have fields like House Number, street Name, City, State, ZipCode
constructor(pid: number,name :string, age: number, hno:string,street: string,city: string) {
  this.pid = pid;
  this.name = name;
  this.age = age;
  this.address = new Address(hno,street,city);
  //this.friendsList = [];
  
}
describe() : string{
  let description = "==>Person Name is ";
    description += this.name;
    description += " and person age is ";
    description += this.age;
    description += " and address is ";
    description += this.address.describe();
    description += "\n"; //Hack, should not do it 

    return description;
}


//fill code to add another contact here
//but asynchronously
addContact(friendContact:Contact):void {
  this.friendsList.push(friendContact);
}

//asynchronously return this person 
//friends list using callback function
getFriendsList (): string{
  let friendsData: string = '';
  for(const friend of this.friendsList){
    friendsData += 'Friends Names :  [' + friend.name + ' ' + friend.age +']';
  }
  return friendsData;
 }
}; 
