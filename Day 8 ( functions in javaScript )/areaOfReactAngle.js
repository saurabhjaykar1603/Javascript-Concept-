 // Write a program to build function that can calculate area of rectangle when lenght and breath are passed as parameters
 function  AddLenghBreath(lenght, breath)
 {
     const  Calculation = lenght * breath;

     document.write("<br/>area of rectangle " + lenght + "*" + breath + "=" + Calculation);
 }

 const lenght = parseInt(prompt("enter the value of lenght: "))
 const breath =  parseInt(prompt("enter the value of breath: "))
 AddLenghBreath(lenght,breath)
 