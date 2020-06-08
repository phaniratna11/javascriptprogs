import AddressServer from './addressserver';
 export default function addContactInfo(){
  let pid:any = document.getElementById('pid');
  let name:any = document.getElementById('name');
  let age:any = document.getElementById('age');
  let hno:any =  document.getElementById('hno');
  let street:any = document.getElementById('street');
  let city:any =  document.getElementById('city');
  AddressServer.createContact(Number(pid.value),name.value,Number(age.value),hno.value,street.value,city.value);

}
export function  getContacts(){
  AddressServer.getContacts()
  .then((response: any) => {
    console.log(response);
  });
}
