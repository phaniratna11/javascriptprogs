//const express = require('express');

//const Sequelize = require('sequelize');
import { Sequelize, Model, DataTypes } from 'sequelize';
import * as express from 'express';
var app = express();
  class MyServer{
  Albums:any;
  Artists:any;
  Titles:any;
  Genres:any;
  connection: any;
  AlbumsArtists:any;
  albumsartistData :any;
    
  getConnection():void{
    // let server: any = app.listen(9999, function () {
    // let host:string = server.address().address
    // let port:string = server.address().port
    // console.log("App listening at http://%s:%s", host, port);

    // })
    this.connection = new Sequelize('musicalbum','root','root',{
      host:'localhost',
      dialect:'mysql',
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      },
    });
    this.connection.sync({
    }); 
   }
   
 
createGenre():any{
  this.Genres = this.connection.define('genres', {
    genre_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true  
    },
    genre_name: {
        type: DataTypes.STRING,
        default:null
      }
     
    });
}
createTitle():any{
  this.Titles = this.connection.define('titles', {
    title_id: {
      type: DataTypes.INTEGER, 
      primarykey: true
      
    },
    title_name: {
        type: DataTypes.STRING,
        default:null
      },
      lyricist: {
        type: DataTypes.INTEGER,
        default:null
      },
      singer: {
        type: DataTypes.INTEGER,
        default:null
      },
      director : {
        type: DataTypes.INTEGER,
        default:null
      },
    });
    
}
createAritist():any{
  this.Artists = this.connection.define('artists', {
    artist_id : {
      type: DataTypes.INTEGER, 
      primarykey: true
      
    },
    artist_name: {
        type: DataTypes.STRING,
        default:null
      },
      
      genre_id: {
        type: DataTypes.INTEGER,
        default:null
      },
      profession : {
        type: DataTypes.STRING,
        default:null
      },
     
    });
    
   
 } 
createAlbums():any{
  this.Albums = this.connection.define('albums', {
    album_id  : {
      type: DataTypes.INTEGER, 
      primarykey: true,
      
    },
    album_name: {
        type: DataTypes.STRING,
        default:null
      },
      year : {
        type: DataTypes.INTEGER,
        default:null
      },
    });
}
createAlbumsAndArtistsInfo():any{
  this.AlbumsArtists = this.connection.define('album_artistsinfo', {
    album_artist_id  : {
      type: DataTypes.INTEGER, 
      primarykey: true
      
    },
    album_id: {
        type: DataTypes.INTEGER,
        default:null
    },
    title_id : {
        type: DataTypes.INTEGER,
        default:null
    },
    artists_id : {
      type: DataTypes.INTEGER,
      default:null
    },
    genre_id : {
      type: DataTypes.INTEGER,
      default:null
    },

    });
}
findByAlbumData():void{
  // this.albumsartistData  =  this.connection.query('SELECT * FROM album_artistsinfos', {
  //   model: this.AlbumsArtists,
  //   mapToModel: true // pass true here if you have any mapped fields
  // });
}
applyJoins():void{
  //this.Albums.belongsTo(this.Genres, {foreignKey: 'genre_id'});
  //this.Artists.belongsTo(this.Albums, {foreignKey: 'album_id'}); //Album primarykey
  this.Artists.belongsTo(this.Genres, {foreignKey: 'genre_id'});
  //this.Titles.belongsTo(this.Artists, {foreignKey: 'lyricist'}); 
  //this.Titles.belongsTo(this.Artists, {foreignKey: 'singer'}); 
   //this.Titles.belongsTo(this.Artists, {foreignKey: 'director'});
   //this.AlbumsArtists.hasMany(this.Albums, {foreignKey: 'album_id'});
  //this.AlbumsArtists.belongsTo(this.Titles, {foreignKey: 'title_id'});
 // this.AlbumsArtists.belongsTo(this.Genres, {foreignKey: 'genre_id'});
}


 }

const obj = new MyServer();
obj.getConnection();
obj.createAlbums();
obj.createAritist();
obj.createGenre();
obj.createTitle();
obj.applyJoins();
obj.findByAlbumData();
obj.createAlbumsAndArtistsInfo();
export default obj;

