const albumList = [{
  album_id: 1001,
  name: 'Abhinandhana',
  titles: [3001, 3002, 3003, 3004],
  artists: [2001, 2002, 2003],
  genre: [4001,4003,4009],
  year: 1988
},
{
  album_id: 1002,
  name: 'Baahubali',
  titles: [3005, 3006, 3007 ],
  artists: [2004, 2005, 2006,2007,2008,2009],
  genre: [4002,4004,4008],
  year: 2015
},
{
  album_id: 1003,
  name: 'Ala vaikunthapurramuloo',
  titles: [3008, 3009, 3010],
  artists: [2010, 2011, 2012,2013,2015,2016],
  genre: [4005,4006,4007],
  year: 2020
}
];
const artistList = [{
  artist_id: 2001,
  name: 'Athreya',
  albums: [1001],
  genre: [4001,4002],
  profession: ['Lyricist']
},
{
  artist_id: 2002,
  name: 'SP. Balasubramanyam',
  albums: [1001],
  genre: [4003,4004],
  profession: ['Singer']
},
{
  artist_id: 2003,
  name: 'Ilayaraja',
  albums: [1001],
  genre: [4005,4006],
  profession: ['Music composer']
},
{
  artist_id: 2004,
  name: 'M.M Keeravani',
  albums: [1002],
  genre: [4007,4008],
  profession: ['Music composer']
},
{
  artist_id: 2005,
  name: 'Yamini',
  albums: [1002],
  genre: [4009,4001],
  profession: ['Singer']
},
{
  artist_id: 2006,
  name: 'K. Shivashakti Datta',
  albums: [1002],
  genre: [4002,4003],
  profession: ['Lyricist']
},
{
  artist_id: 2007,
  name: 'Ramajogayya Sastry',
  albums: [1002],
  genre: [4004,4005],
  profession: ['Lyricist']
},
{
  artist_id: 2008,
  name: 'Ramya Behra',
  albums: [1002],
  genre: [4006,4007],
  profession: ['Singer']
},
{
  artist_id: 2009,
  name: 'Inaganti Sundar',
  albums: [1002],
  genre: [4008,4009],
  profession: ['Lyricist']
},
{
  artist_id: 2010,
  name: 'Sirivennela Sitaramasastri',
  albums: [1003],
  genre: [4001,4002],
  profession: ['Lyricist']
},
{
  artist_id: 2011,
  name: 'Sid Sriram',
  albums: [1003],
  genre: [4003,4004],
  profession: ['Singer']
},
{
  artist_id: 2012,
  name: 'S. Thaman',
  albums: [1003],
  genre: [4005,4006],
  profession: ['Music composer']
},
{
  artist_id: 2013,
  name: 'Kasarla Shyam',
  albums: [1003],
  genre: [4007,4008],
  profession: ['Lyricist']
},
{
  artist_id: 2014,
  name: 'Anurag Kulkarni',
  albums: [1003],
  genre: [4009,4001],
  profession: ['Singer']
},
{
  artist_id: 2015,
  name: 'Krishna Chaitanya',
  albums: [1003],
  genre: [4002,4003],
  profession: ['Lyricist']
},
{
  artist_id: 2016,
  name: '‎Roll Rida',
  albums: [1003],
  genre: [4004,4005],
  profession: ['Singer']
},
]
const titleList = [{
  title_id: 3001,
  title_name: 'Ade Neevu',
  lyricist: [2001],
  singer: [2002],
  director: [2003],
  //other_artists: [artists_ids],
},
{
  title_id: 3002,
  title_name: 'Eduta Neeve',
  lyricist: [2001],
  singer: [2002],
  director: [2003],
  //other_artists: [artists_ids],
},
{
  title_id: 3003,
  title_name: 'Prema Entha Madhuram',
  lyricist: [2001],
  singer: [2002],
  director: [2003],
  //other_artists: [artists_ids],
},
{
  title_id: 3004,
  title_name: 'Prema Ledani',
  lyricist: [2001],
  singer: [2002],
  director: [2003],
  //other_artists: [artists_ids],
},
{
  title_id: 3005,
  title_name: 'Mamathala  Thalli',
  lyricist: [2006],
  singer: [2005],
  director: [2004],
  //other_artists: [artists_ids],
},
{
  title_id: 3006,
  title_name: 'Dhivara',
  lyricist: [2007],
  singer: [2008],
  director: [2004],
  //other_artists: [artists_ids],
},
{
  title_id: 3007,
  title_name: 'Nippula Swasa ga',
  lyricist: [2009],
  singer: [2004],
  director: [2004],
  //other_artists: [artists_ids],
},
{
  title_id: 3008,
  title_name: 'Samajavaragamana',
  lyricist: [2010],
  singer: [2011],
  director: [2012],
  //other_artists: [artists_ids],
},
{
  title_id: 3009,
  title_name: 'Ramuloo Ramulaa',
  lyricist: [2013],
  singer: [2014],
  director: [2012],
  //other_artists: [artists_ids],
},
{
  title_id: 3010,
  title_name: 'OMG Daddy',
  lyricist: [2015],
  singer: [2016],
  director: [2012],
  //other_artists: [artists_ids],
}
]
const genreList = [{
    genre_id: 4001,
    genre_name: 'Country'
  },
  {
    genre_id: 4002,
    genre_name: 'Hip hop'
  },
  {
    genre_id: 4003,
    genre_name: 'Melody'
  },
  {
    genre_id: 4004,
    genre_name: 'Pop'
  },
  {
    genre_id: 4005,
    genre_name: 'Folk'
  },
  {
    genre_id: 4006,
    genre_name: 'Pop Punk'
  },
  {
    genre_id: 4007,
    genre_name: 'Clasical Music'
  },
  {
    genre_id: 4008,
    genre_name: 'carnatic Music'
  },
  {
    genre_id: 4009,
    genre_name: 'Rock'
  }
]