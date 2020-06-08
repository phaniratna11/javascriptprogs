import axios  from 'axios';
export  default class AddressServer {
  static createContact(pid: number, name: string, age: number, hno: string,
    street: string, city: string): void {
      axios({
        method: 'get',
        url: 'http://localhost:3000/createOne?pid='+pid
        +'&name='+name+'&age='+age+'&hno='+hno+'&street='+street+'&city='+city,        
      })
        .then( (data : any) => {
         console.log(data);
        });
      
    }
    static getContacts(): any {
      return new Promise((resolve,reject)=>{
      axios({
        method: 'get',
        url: 'http://localhost:3000/getAll'       
      })
        .then( (data : any) => {
         console.log(data);
         resolve(data);
        })
       .catch(error =>{
         console.log(error);
         reject(error);
       });
    });
  }
}