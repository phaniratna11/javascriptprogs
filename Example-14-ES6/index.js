const mySum = (x,y)=> { 
    return (x + y);
}

function getSum() {
  const firstNum = Number(document.getElementById('num1').value);
  const secNum = Number(document.getElementById('num2').value);
  const result = mySum(firstNum,secNum);
  document.getElementById('sumResult').innerHTML = result;
}


function dispEven() {
  let arr=[];
   for(let i = arithDOM.getNum3();i <=arithDOM.getNum4();i++ ){
        if(i % 2 == 0){
           arr.push(i);
          }
  }
   disp(arr);
 

}
const disp = (...arr)=>{
  arithDOM.updateEvenList(arr); 
}