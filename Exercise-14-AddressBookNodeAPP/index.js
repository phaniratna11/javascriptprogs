const express = require('express');
const Contact = require('./src/contact')
const app = express();
const port = 3000;
let contacts = []; 

app.listen(3000, ()=> {
    console.log('listening is succesffull');
} );

app.get('/',(req,res)=> {

  console.log('Hello World');
  res.send('Hello....');
});

app.get('/create',(req,res)=> {

  console.log('Hello World');
  const pid = req.query.pid;
  const name = req.query.name;
  const age = req.query.age;
  const hno = req.query.hno;
  const street = req.query.street;
  const city = req.query.city;
  const contact = new Contact(pid,name,age,hno,street,city);
  contacts.push(contact);
  res.send('Successfully added contact to the list....'  );
});

app.get('/getAll', (req, res) => {
  console.log("getAll Contacts");
  if (contacts.length === 0) {
      res.send({
          message: 'Empty Contactlist'
      });
      return;
  }
  let contactDetails = [] ;
for(const contact of contacts){
	contactDetails.push(contact);
}
  res.send({
      message: contactDetails
  })
});
app.get('/getByName', (req, res) => {
  let name = req.query.name;
  console.log("getAll Contacts");
  if (contacts.length === 0) {
      res.send({
          message: 'Empty Contactlist'
      });
      return;
  }
  let contactDetails = [] ;
for(const contact of contacts){
  if(name == contact.name){
  contactDetails.push(contact);
  }
}
  res.send({
      message: contactDetails
  })
});

