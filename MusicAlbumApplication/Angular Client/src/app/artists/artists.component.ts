import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  result:any;
  artistsData :any;
  constructor(private service:MyServiceService) { 
    
  }

  ngOnInit(): void {
    
  }
  artistsForm = new FormGroup({
    artist_id: new FormControl(''),
    artist_name: new FormControl(''),
    genre_id: new FormControl(''),
    profession: new FormControl(''),
  });
  addArtistsInfo(){
  console.log(this.artistsForm.value);
    this.service.addArtists(this.artistsForm.value).subscribe(response =>{
      this.result = response;
      console.log(this.result);
    });
   }
}
