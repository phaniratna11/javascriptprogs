 class  Address {
 constructor(hno,street,city) {
  this.hno = hno;
  this.street = street;
  this.city = city;
 }
 describe() {
 let  description = "Address[hno =";
    description += this.hno;
    description += ",Street Name = ";
    description += String(this.street);
    description += ", city = ";
    description += String(this.city);
    description += "]\n"; //Hack, should not do it 
    return description;
  }
}
module.exports = Address;