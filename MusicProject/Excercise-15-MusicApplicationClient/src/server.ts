import axios, { AxiosResponse, AxiosError }  from 'axios';
export  default class ArtistServer {
  static createArtistObj(artist_id: number, artist_name: string, profession: string): any{
    let params: any = {
      artist_id: artist_id,
      artist_name: artist_name,
      profession: profession
    };
    axios({
    method: 'get',
    url: 'http://localhost:4000/createArtist',params
    })
    .then( (response : any) => {
      console.log(JSON.stringify(response));
    });
        
  }
  static getArtistsData(): any {
    return new Promise((resolve,reject)=>{
    axios({
      method: 'get',
      url: 'http://localhost:4000/getAllArtists'       
    })
      .then( (response : any) => {
       console.log(response);
       resolve(JSON.stringify(response.data));
      })
     .catch((error: any) =>{
       console.log(error);
       reject(error);
     });
  });
}
}

