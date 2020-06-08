function Person() {
};
Person.name = "";
Person.age = "";
Person.email ="";
Person.contact ="";
Person.prototype.init = function(name, age,contactno,email) {
  this.name = name;
  this.age = age;
  this.contactno = contactno;
  this.email = email;
}
Person.prototype.describe = function() {
  var description = "<==>Person Name is ";
  description += this.name +"<br>";
  description += " and person age is ";
  description += String(this.age) +"<br>";
  description += " and Contact Number is ";
  description += String(this.contactno) +"<br>";
  description += " and Email  is ";
  description += String(this.email) +"<br>";
  return description;
}

Person.prototype.describeWithHoroscope = function() {
  var description = this.describe();
  description += " Prediction: " + getHoroscope(this.name, this.age);
  return description;
}
