class Address {
  constructor(street, city, pincode, state){
    this.street = street;
    this.city = city;
    this.pincode = pincode;
    this.city = city;
  }
  describe() {
    let description = 'Address[hno =';
    description += this.street;
    description += ', City  = ' + this.city;
    description += ' Pincode = ' + this.pincode + 'State : ' + this.state;
    description += "]\n"; //Hack, should not do it 
    return description;
  }
};
