export default class Address {
  hno:string = '';
  colName:string = '';
  constructor(hno:string,colName:string){
    this.hno = hno;
    this.colName = colName;
  }
describe ():string{
  let description = "Address[hno =";
  description += this.hno;
  description += ", Col Name = ";
  description += String(this.colName);
  description += "]\n"; //Hack, should not do it 
  return description;
}
}//class closing