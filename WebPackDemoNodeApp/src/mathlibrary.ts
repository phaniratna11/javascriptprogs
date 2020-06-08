class  ArithmeticLibrary{
   
    constructor(){

    }
    validate(num1: number, num2: number): boolean {
      //if (typeof num1 != 'number' || typeof num2 != 'number')
      if(isNaN(num1) || isNaN(num2)) {
        return false;
      }
      return true;
    }
    add(num1: number, num2: number): number {
      return num1+num2; //return number
    }
    multiplication(num1: number, num2: number): string{
      return String(num1*num2); //converts to string and returns
    }
    subtraction(num1: number, num2: number ): string{
      var sub = num1-num2;
      return sub.toString(); //converts to string and returns
    }
    division(num1: number , num2: number ): number {
      if (num2 == 0) return 0;
      return num1/num2; //return number
    }
  }
  const mathLibrary = new ArithmeticLibrary()
  export default mathLibrary;
