import Address from './address';
import Contact from './contact';

let Contacts = new Array(); //Empty Array. This is supposed to hold Persons Objects
//let scrollTimerId = -1;
//Q. Can you creat new function to take many contacts in single function
//input can be from json text

export function addPersons() {
  //1. Build Persons List here
  //Ex: const persons = [{}, {}, {}, {} ]
  const contactList = [
    {
      pid: 10,
      name: "Ramu",
      age: 34,
      hno: "123-5",
      street: "Kranthi Nagar",
      city: "Hyd",
    },
    {
      pid: 11,
      name: "Vani",
      age: 31,
      hno: "123-5",
      street: "Musheerabad",
      city: "Hyd",
    },
    {
      pid: 12,
      name: "Madhu",
      age: 35,
      hno: "123-5",
      street: "Mehadipatnam",
      city: "Hyd",
    },
    {
      pid: 13,
      name: "Latha",
      age: 36,
      hno: "243-5",
      street: "LIngampally",
      city: "Hyd",
    },
  ];

  //for loop to add every person in list
  // const addressBooks =[{'pid':10,'name':'Modi'},{'pid':10,'name':'Jassu'}];
  const addressBooks = [
    { pid: 10, friends: [11, 13] },
    { pid: 11, friends: [12, 13] },
  ];

  for (let contactInfo of contactList) {
    const x  = new Contact(contactInfo.pid,contactInfo.name,contactInfo.age,contactInfo.hno,contactInfo.street,contactInfo.city);
      //3.Add it to the list
    Contacts.push(x);
  }
  let ele: any = document.getElementById("sel");
  for (var  contact of Contacts) {
    ele.innerHTML =
      ele.innerHTML +
      '<option value="' +
      contact.pid +
      '">' +
      contact.name +
      "</option>";
  }

  for (const friendsList of addressBooks) {
    const pid = friendsList.pid;
    getContactAsync(pid, (contact:any) => {
      const currentContact = contact;
      if (currentContact == null) {
        return;
      }
      for (const friendId of friendsList.friends) {
        getContactAsync(friendId, (friendContact:any) => {
          // let currentContact = null;
          // currentContact = friendContact;
          if (friendContact == null) {
            return;
          }
          currentContact.addContact(friendContact);
        });
      }
    });
  }
}

function getContactAsync(pid:number, cbk:any) {
  //return the result should be using  callback and timeout
  setTimeout(() => {
    for (const contact of Contacts) {
      if (contact.pid === pid) {
        cbk(contact);
      }
    }
    cbk(null);
  }, 0);
}

function getContact(pid :number):any {
  //return the result should be using  callback and timeout
  for (const contact of Contacts) {
    if (this.contact.pid === pid) {
      return contact;
    }
  }
  return null;
}

//Asyn
export function getPersonDetails() {
  //1. Get Age condition using html input ageCondition
  var pidCondition:any =document.getElementById("pidCondition");
  var pid = Number(pidCondition.value);
  getContactAsync(pid, (contact:any) => {
    let currentContact = null;
    currentContact = contact;
    if (currentContact == null) {
      return;
    }
    let personsList = " ";
    if (currentContact != null) {
      personsList += currentContact.describe();
      personsList += currentContact.getFriendsList();
    }
    let listElement = document.getElementById("personsDetails");
    listElement.innerHTML = personsList;
  });
}

export function show(ele:any) {
  // GET THE SELECTED VALUE FROM <select> ELEMENT AND SHOW IT.
  var msg = document.getElementById("msg");
  msg.innerHTML =
    "Selected Peroson: <b>" +
    ele.options[ele.selectedIndex].text +
    "</b> </br>" +
    "ID: <b><input type = text name = pid value =  " +
    ele.value +
    ">";
}
