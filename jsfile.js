 var x=document.forms["myform"]["fname"];
 var x1= document.forms["myform"]["lname"];
  var x2 = document.forms["myform"]["website"];
  var  x3 = document.forms["myform"]["phone"];
  var x4 = document.forms["myform"]["email"];
  var x5 = document.forms["myform"]["user"];
  var  x6 = document.forms["myform"]["pass"];


  var  x7 = document.forms["myform"]["deg"];
  var x8= document.forms["myform"]["birthday"];
  





  z1=0;
  z2=0;
  z3=0;
  z4=0;
  z5=0;
  z6=0;
  z7=0;

  z8=0;
  z9=0;
 

function skip(y){
    if(x.value!="")
    {
        z1=1;
    }
    if(x1.value!="")
    {
        z2=1;
    }
    if(x2.value!="")
    {
        z3=1;
    }
    if(x3.value!="")
    {
        z4=1;
    }
    if(x4.value!="")
    {
        z5=1;
    }
    if(x5.value!="")
    {
        z6=1;
    }
    if(x6.value!="")
    {
        z7=1;
    }
    if(x7.value!="")
    {
        z8=1;
    }
    if(x8.value!="")
    {
        z9=1;
    }/*
    if(x9.value!="")
    {
        z10=1;
    }*/
//**********************************//

    if(y==2&&z1==0)
    {
        alert("PLZ Input In Order");
        x.select();

    }
    if(y==3&&z2==0)
    {
        alert("PLZ Input In Order ");
        x.select();

    }
    if(y==4&&z3==0)
    {
        alert("PLZ Input In Order");
        x.select();

    }
    if(y==5&&z4==0)
    {
        alert("PLZ Input In Order ");
        x.select();

    }
    if(y==6&&z5==0)
    {
        alert("PLZ Input In Order ");
        x.select();

    }
    if(y==7&&z6==0)
    {
        alert("PLZ Input In Order ");
        x.select();
    }
    if(y==8&&z7==0)
    {
        alert("PLZ Input In Order ");
        x.select();
    }
    if(y==9&&z8==0)
    {
        alert("PLZ Input In Order");
        x.select();
    }/*
    if(y==10&&z9==0)
    {
        alert("error !!!! you must enter ");
        x8.select();
    }*/
}



function spilt()
{
    
    var email = document.getElementById("email").value
    var name   = email.substring(0, email.lastIndexOf("@"));
    alert(name+" has been saved.")
}



function submitt() 
{

    var check=false;
    var y=document.getElementById("fname").value;
    if (y == "") {
        document.getElementById("fname").style.border ="solid 3px red";
        check=true;
    }
    
    if (x1.value == "") {
        check=true;
        document.getElementById("lname").style.border ="solid 3px red";
    }
   
    if (x2.value == "") {
        check=true;
        document.getElementById("website").style.border ="solid 3px red";
    }
   
    if (x3.value == "") {
        check=true;
        document.getElementById("phone").style.border ="solid 3px red";
    }
    
    if (x4.value == "") {
        check=true;
        document.getElementById("email").style.border ="solid 3px red";
    }
   
    if (x5.value== "") {
        check=true;
        document.getElementById("user").style.border ="solid 3px red";
    }
    
    if (x6.value== "") {
        check=true;
        document.getElementById("pass").style.border ="solid 3px red";
    }
    
    if (x7.value== "st") {

      document.getElementById("deg").style.border ="solid 3px red";
      check=true;
    }
    if(check==true)
        alert("error!! you must enter all input");
}





function normal(field)
{
    field.style.border ="solid 1px black";
}