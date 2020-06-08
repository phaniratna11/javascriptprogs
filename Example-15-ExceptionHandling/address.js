function Address() {
};
Address.hno = "";
Address.colName = "";

Address.prototype.init = function(hno,colName) {
  this.hno = hno;
  this.colName = colName;
  
}
Address.prototype.describe = function() {
  var description = "Address[hno =";
    description += this.hno;
    description += ", Col Name = ";
    description += String(this.colName);
    
    description += "]\n"; //Hack, should not do it 

    return description;
}