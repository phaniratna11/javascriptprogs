import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http:HttpClient) { 

  }
  getGenres(){
    return this.http.get('http://localhost:3000/getGenreAll');
  }
  addGenres(data){

    return this.http.post('http://localhost:3000/createGenre/',data);
  }
  getAlbums(){
    return this.http.get('http://localhost:3000/getAlbums');
  }
  addTitles(data){

    return this.http.post('http://localhost:3000/createTitle',data);
  }
  addArtists(data){
    return this.http.post('http://localhost:3000/createArtists',data);
  }
}
