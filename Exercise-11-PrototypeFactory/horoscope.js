function Horoscopes() {
};
Horoscopes.prototype.arrPredictions = [
    "Today is your lucky day",
    "You will meet your soulmate",
    "You will find your destiny",
    "you will never forget today rest of your life",
    "you need to hold your anger",
    "Patience is your weapon",
    "you are born leader",
    "get your life back",
    "change your surroundings",
    "you will be surprised",
    "stay healthy",
    "time to take easy"
  ];

Horoscopes.prototype.get = function(name, age) {
  //algorithm to determine horoscope based on age
  var len = this.arrPredictions.length;
  var ind = Math.floor(Math.random() * Math.floor(age % len));
  ind += Math.floor(Math.random() * Math.floor(name.length%len));
  ind = ind % len;
  return this.arrPredictions[ind];
}

var horoscopes = new Horoscopes();
function getHoroscope(name, age) {
  return horoscopes.get(name, age);
}