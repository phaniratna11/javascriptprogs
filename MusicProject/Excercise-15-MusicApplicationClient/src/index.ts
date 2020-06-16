import artistServer from './server';
export function addArtistInfo() {
  let artist_id: any = document.getElementById('artist_id');
  let artist_name: any = document.getElementById('artist_name');
  let profession: any = document.getElementById('profession');
  console.log(artist_id + " " + artist_name + profession);
  artistServer.createArtistObj(Number(artist_id.value), artist_name.value, profession.value)
    .then((response: any) => {
      console.log(response);
    });
}
export function getArtists() {
  let jsonObject = '';
  artistServer.getArtistsData()
    .then((response: any) => {
      console.log(response);
      let myObj = JSON.parse(response);
      for (let i of myObj) {
        jsonObject += i.artist_id + " " + i.artist_name + " " + i.profession + '<br>';
      }
      document.getElementById('result').innerHTML = jsonObject;
    });

}
