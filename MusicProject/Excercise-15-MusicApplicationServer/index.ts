import * as express from 'express';
import * as bodyParser from 'body-parser';
import artists from './artist';
const app = express();
const port:number = 4000;
let artistList = new Array();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(function (req: express.Request, res: express.Response, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.listen(port, () => {
  console.log('listening is succesffull',port);
});
//To add Artist
app.get('/createArtist', (req: express.Request, res: express.Response) => {
  const artist_id: number = Number(req.query.artist_id);
  const artist_name: string = String(req.query.artist_name);
  const profession: string = String(req.query.profession);
  const newArtist = new artists(artist_id, artist_name, profession);
  artistList.push(newArtist);
  res.send('Successfully added contact to the list....<br\>');
});
//To get all Artists
app.get('/getAllArtists', (req: express.Request, res: express.Response) => {
  let localArtist = [];
  for (const artistOb of artistList) {
    localArtist.push(artistOb);
  }
  console.log(localArtist);
  res.send(JSON.stringify(localArtist));
});
