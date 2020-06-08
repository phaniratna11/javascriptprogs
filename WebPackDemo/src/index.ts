import mathLibrary from './mathlibrary';
export function getArithmetic() {
    const num1: any = document.getElementById('num1');
    const num2: any = document.getElementById('num2');
  
    const result: any = document.getElementById('error');
    const value1: number = Number(num1.value); //explicit number conversion
    const value2: number =  Number(num2.value); //explicit number conversion
    if (!mathLibrary.validate(value1, value2)) {
      result.innerHTML = "Invalid numbers";
      return;
    }
    
    document.getElementById('sumResult').innerHTML = String(mathLibrary.add(value1, value2)); //implicit conversion to string here
    document.getElementById('mulResult').innerHTML = String(mathLibrary.multiplication(value1, value2));
    document.getElementById('subResult').innerHTML = String(mathLibrary.subtraction(value1, value2));
    document.getElementById('divResult').innerHTML = String(mathLibrary.division(value1, value2)); //implicit conversion to string here
  }
  
 
  
  