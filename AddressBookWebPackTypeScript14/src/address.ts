export default class Address {
  hno:string = '';
  street: string = '';
  city: string = '';
  constructor(hno:string,street:string,city:string){
    this.hno = hno;
    this.street = street;
    this.city = city;
  }
describe ():string{
  let description = "Address[hno =";
  description += this.hno;
  description += ", Col Name = ";
  description += String(this.street);
  description += ", City Name = ";
  description += String(this.city);
  description += "]\n"; //Hack, should not do it 
  return description;
}
}//class closing