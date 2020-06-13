import * as express from 'express';
import * as bodyParser from 'body-parser';
import obj from  './server';
import { DatabaseError } from 'sequelize/types';
//var con:any = obj.getConnection();
const app = express();
const port = 3000;
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(3000, ()=> {
    console.log('listening is succesffull');
} );


app.get('/',(req,res)=> {

  console.log('Hello World');
  res.send('Hello....');
});

app.post('/createGenre',(req,res)=> {
  console.log('Hello World');
  var a = 10;
  var genreObj = {
     "genre_id": req.body.genre_id,
     "genre_name": req.body.genre_name
  }
  obj.Genres.create(genreObj)
  .then((x:any) =>{
    res.send({ message : 'Successfully added contact to the list....<br\>' });
  })
  .catch((error:any) =>{
    //console.log(error);
  });
 
});

app.get('/getGenreAll', (req, res) => {

  console.log("getAll Contacts");
  
  let items =  obj.Genres.findAll({
    attributes: ['genre_id','genre_name']
  }).then((x:any) =>{
   res.send(JSON.stringify(x) );
    
  }).catch((error:any) =>{
    console.log(error);
  });
  //console.log("Phani"+items);
 });

 //creating title
 app.post('/createTitle',(req,res)=> {
  console.log('Hello World');
  
  var titleObj = {
   "title_id": req.body.title_id,
   "title_name": req.body.title_name,
   "lyricist": req.body.lyricist,
   "singer": req.body.singer,
   "director": req.body.director
     
  }
  obj.Titles.create(titleObj)
  .then((x:any) =>{
     console.log(JSON.stringify(x));
  })
  .catch((error:any) =>{
     console.log(error);
  });
  res.send('Successfully added contact to the list....<br\>' );
});

app.get('/getTitles', (req, res) => {

  console.log("getAll Contacts");
  
  let titles =  obj.Titles.findAll({
    attributes: ['title_id','title_name','lyricist','singer','director']
  }).then((x:any) =>{
   res.send(x);
    
  }).catch((error:any) =>{
    console.log(error);
  });
  //console.log("Phani"+items);
 });

 //For album api
 app.get('/getAlbums', (req, res) => {

  console.log("getAll Albums");
  
  let albums =  obj.Albums.findAll({
    attributes: ['album_id','album_name','year']
  }).then((x:any) =>{
   res.send(x);
    
  }).catch((error:any) =>{
    console.log(error);
  });
  
 });

 app.post('/createAlbum',(req,res)=> {
  console.log('Hello World');
  
  var albumObj = {
  "album_id": req.body.album_id,
  "album_name": req.body.album_name,
  "year": req.body.year,
  }
     
  obj.Albums.create(albumObj)
  .then((x:any) =>{
    res.send({ message : 'Successfully added contact to the list....<br\>' });
  })
  .catch((error:any) =>{
    //console.log(error);
  });
 
});

app.post('/createArtists',(req,res)=> {
  console.log('Hello World');
  
  var artistsObj = {
    
  "artist_id": req.body.artist_id,
  "artist_name": req.body.artist_name,
  "genre_id": req.body.genre_id,
  "profession":req.body.profession
  }
     
  obj.Artists.create(artistsObj)
  .then((error:any,x:any) =>{
    console.log(x);
    res.json({ message : 'Successfully added contact to the list....<br\>' });
  })
  .catch((error:any) =>{
    console.log(error);
  });
  
  // obj.connection.query("INSERT INTO obj.Artists set ?",artistsObj,
	// (error:any,result:any)=>{
	//   if(error)throw error;
	// 	console.log("result");
	// 	res.send({message:"successfully"});
	// });
 
});

app.get('/getArtists', (req, res) => {

  console.log("getAll Artists");
  
  let aritsts =  obj.Artists.findAll({
    attributes: ['artist_id','artist_name','genre_id','profession']
  }).then((x:any) =>{
   res.send(x);
    
  }).catch((error:any) =>{
    console.log(error);
  });
  
 });

 app.get('/getByAlbumId', (req, res) => {
  let aritsts =  obj.AlbumsArtists.findAll({ 

    include: [ { model: obj.Albums}]
   // where: { album_id: req.query.album_id },
    //,include: [ { model: obj.Albums}]
    //,]//
  }).then((x:any) =>{

   res.send(x);
    
  }).catch((error:any) =>{
    console.log(error);
  });
  
 });

 //Model.findAll({ attributes: { include: [ [sequelize.fn('COUNT', sequelize.col('hats')), 'n_hats'] ] } });