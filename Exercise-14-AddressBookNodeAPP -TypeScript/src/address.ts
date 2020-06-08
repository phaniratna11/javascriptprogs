 export default class  Address {
  hno: string;
  street: string;
  city: string;

 constructor(hno:string,street:string,city:string) {
  this.hno = hno;
  this.street = street;
  this.city = city;
 }
 describe(){
 let  description = "Address[hno =";
    description += this.hno;
    description += ",Street Name = ";
    description += String(this.street);
    description += ", city = ";
    description += String(this.city);
    description += "]\n"; //Hack, should not do it 
    return description;
  }
  getJson(){
    return {
      
      hno : this.hno,
      street: this.street,
      city: this.city
     }
  }
}
//module.exports = Address;
