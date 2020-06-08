//Constructor Pattern 

function Employee(empno,ename,email){
   this.empno = empno;
   this.ename = ename;
   this.email = email;
   this.dispEmployeeInfo = function(){
      return "Emp No : " + empno + "\n Name : "+ ename + "\n Email Id = "+ email;
   };
  

}

function stringReverse() {
  var empno = document.getElementById('empno');
  empno = empno.value;
  var ename = document.getElementById('ename');
  ename = ename.value;
  var email = document.getElementById('email');
  email = email.value;
  var obj = new Employee(empno,ename,email);
  document.getElementById('result').innerHTML = obj.dispEmployeeInfo();
};



