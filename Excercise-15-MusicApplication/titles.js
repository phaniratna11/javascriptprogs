function Title() {
};
Title.title_id = ' ';
Title.title_name = ' ';
Title.lyricist = [];
Title.singer = [];
Title.director = []; 
//Q. In address class have fields like House Number, street Name, City, State, ZipCode

Title.prototype.init = function(title_id,title_name,lyricist, singer,director) {
  this.title_id = Number(title_id);
  this.title_name = title_name;
  this.lyricist = lyricist;
  this.singer = singer;
  this.director = director;
}
Title.prototype.describe = function() {
  var description = '';
  description += ' Title Id = ' +new Number(this.title_id)+ ' , ' ;
  description += '  Title Name = ';
  description += this.title_name +'<br>';
  for(let artistNum of this.lyricist){
    titleObject = getArtistListById(artistNum);
    if(titleObject == null){
      continue;
     }
     description += titleObject.describe()+"\n";
  }
  description += '\n'; 
  return description;
}



// class BasicContact {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   describe() {
//     return '==>' + this.name + ' ' + this.age + ' ';
//   }
// }
 
// class PhysicalContact extends BasicContact {
//   constructor(name, age, address) {
//     super(name, age);
//     this.address = address;
//   }
//   describe() {
//     return super.describe() + ' ' + this.address;
//   }
// }
// class DigitalContact extends BasicContact {
//   constructor(name, age, email) {
//     super(name, age);
//     this.email = email;
//   }
//   describe() {
//     return super.name  + ' ' + super.age + ' ' +  this.email;
//   }
// }