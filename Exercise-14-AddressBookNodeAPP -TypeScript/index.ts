import * as express from 'express';

//const express = require('express');

var http = require('http');
var fs = require('fs');
//const Contact = require('./src/contact')
import Contact from "./src/contact";
const app = express();
const port = 3000;
let contacts = new Array(); 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(3000, ()=> {
    console.log('listening is succesffull');
} );

app.get('/index.html', (req, res) => {
    fs.readFile('index.html', function(err:any, data:any) {
        res.write(data);
        return res.end();
      });
 
});

app.get('/',(req,res)=> {

  console.log('Hello World');
  res.send('Hello....');
});

app.get('/createOne',(req,res)=> {

  console.log('Hello World');
  const pid:number = Number(req.query.pid);
  const name:string= String(req.query.name);
  const age:number = Number(req.query.age);
  const hno:string = String(req.query.hno);
  const street:string = String(req.query.street);
  const city:string = String(req.query.city);
  const contact = new Contact(pid,name,age,hno,street,city);
  contacts.push(contact);
  res.send('Successfully added contact to the list....<br\>' );
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

