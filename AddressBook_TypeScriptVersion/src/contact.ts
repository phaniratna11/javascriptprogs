import Address from './address';
export default class Contact {
  pid: number = 0;
  name: string  = '';
  age: number = 0;
  address: Address; //Can Address be separate class?
  friendsList: number [];

//Q. In address class have fields like House Number, street Name, City, State, ZipCode
constructor(pid: number,name :string, age: number, hno:string,colName: string) {
  this.pid = Number(pid);
  this.name = name;
  this.age = Number(age);
  this.address = new Address(hno,colName);
  this.friendsList = [];
  
}
describe() : string{
  let description = "==>Person Name is ";
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
addContact(friendContact: any):void {
  this.friendsList.push(friendContact);
}

//asynchronously return this person 
//friends list using callback function
getFriendsList() :any{
  let friendsData = ' ';
  for( const friend of this.friendsList){
    friendsData += 'Friends Names :  [' + this.friend.name + ' ' + friend.age +']';
  }
  return friendsData;
}
}

