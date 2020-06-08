class Contact {
   constructor(pid,pname,job,address,friendsList){
    this.pid =  pid;
    this.pname = pname ;
    this.job = job;
    this.address = address; //Can Address be separate class?
    this.friendsList = friendsList;
   }
   describe() {
    let description = '==>Person Name is ';
    description += ' ' + this.pid + ' Name : '  + this.pname;
    description += ' ' + 'job  = ' + this.job + ' ';
    description += " and address is ";
    description += this.address;
    description += "\n"; 
    return description;
   }
   addContact(friendContact) {
    this.friendsList.push(friendContact);
   }
   getFriendsList() {
    let friendsData = ' ';
    for(friend of this.friendsList){
      friendsData += 'Friends Names :  [' + friend.pname + ' ' + friend.job +']';
    }
    return friendsData;
   }

};


   
  
