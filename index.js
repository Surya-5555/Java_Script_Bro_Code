// console.log(`Hello`);
// console.log(`I Like Pizza`);


// window.alert(`This Is An Alert`);

// document.getElementById("myH1").textContent=`Hello`;
// document.getElementById("myP").textContent=`I Like Pizza`;


// This Is A Comment

/* This
   Is
   A 
   Comment 
*/


//variable
// 1.declaration        let x=10;
// 2.assignment         x=100;

// let age=25;
// console.log(`You Are ${age} Years Old`);

// let age=25;
// console.log(typeof age);

// let Name = `Surya`;
// console.log(typeof Name);

// Boolean
// let online=true;
// console.log(online);
// console.log(typeof online);

// let fullName = "Surya";
// let age = 25;
// let student = false;

// ---1---document.getElementById("p1").textContent = `Your Name Is : ${fullName}`;
// document.getElementById("p2").textContent = `Your Age Is : ${age}`;
// document.getElementById("p3").textContent = `Enrolled : ${student}`;

// Augmented Assignment Operators
// Example: += , -=

/*
Operator Precedence 
1. Parenthesis ()
2. Exponents
3. Multiplication & Divison & modulo 
4. Addition & Subtraction
*/

// let result = 1+ 2 * 3 + 4 **2;
// console.log(result); 

// let result = 12 % 5 + 8 /2;
// console.log(result); 

// How TO Accept User Input ?

// 1. Easy Way = window prompt
// 2. Professional Way = HTML textbox

// let username;

// username = window.prompt("What's Your UserName ?");
// console.log(username);

// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
// }

// Type Conversion
// let Age;
// Age = window.prompt("How Old Are You ?");
// Age+=1;  //Appending TO String 
// console.log(Age);

// So:
// let Age;
// Age = window.prompt("How Old Are You ?");
// Age = Number(Age);
// Age+=1;  //Appending TO String 
// console.log(Age);

// let x = "Pizza";
// let y = "Pizza";
// let z = "Pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);

// let x = "0";
// let y = "0";
// let z = "0"; // Nothing Given Inside "" - False Otherwise True For All Number

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);

// let x;
// let y;
// let z; // Nothing Given Inside "" - False Otherwise True For All Number

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x , typeof x);
// console.log(y , typeof y);
// console.log(z , typeof z);

// const PI = 3.14;
// console.log(PI);  //Use Caps As A Variable Name For Const

// const PI = 3.14;
// document.getElementById("mySubmit").onclick = function(){
//     Value = document.getElementById("myText").value;
//     Value = Number(Value);
//     Value = PI * Value ** 2;
//     document.getElementById("myH3").textContent = Value;
// }




//Counter Program - Project

// const cntlbl = document.getElementById("cntlbl");
// const dcr = document.getElementById("dcr");
// const rst = document.getElementById("rst");
// const inc = document.getElementById("inc");

// let cnt=0;
// dcr.onclick = function(){
//     cnt--;
//     cntlbl.textContent = cnt;
// }
// rst.onclick = function(){
//     cnt=0;
//     cntlbl.textContent = cnt;
// }
// inc.onclick = function(){
//     cnt++;
//     cntlbl.textContent = cnt;
// }

// Counter Program - Project

// Math
// console.log(Math.PI); //Value Of PI
// console.log(Math.E);  //Eulers Number Value
// console.log(Math.log(10));  //Value Of Log 10

//Mathematical approach
// let x = 3;
// let y = 3;
// let z = 9;
// console.log(Math.round(x));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.9));
// console.log(Math.trunc(x));
// console.log(Math.pow(x,y));
// console.log(Math.sqrt(z));

//Trignometry
// console.log(Math.sin(45));
// console.log(Math.cos(10));
// console.log(Math.tan(10));

// console.log(Math.abs(-10));  //10  (+ve)

//Checking out sign : -1 , 0 , 1 
// console.log(Math.sign(-10));  //-1
// console.log(Math.sign(10));  //1
// console.log(Math.sign(0));  //0

//Max And Min
// console.log(Math.max(1 , 2 , 3));
// console.log(Math.min(1 , 2 , 3));

// let RandomNum = Math.random()*6;  //*6 To Have Random Values Only Btw 0 To (6 --> (Exclusive))
// console.log(RandomNum);

// const min = 50;
// const max = 100;

// let RandomNum = Math.floor(Math.random()* (max-min)) + min;  
// console.log(RandomNum);

//Random Number Generator

// const myButton = document.getElementById("myButton");
// const myLabel1 = document.getElementById("myLabel1");
// const myLabel2 = document.getElementById("myLabel2");
// const myLabel3 = document.getElementById("myLabel3");
// const min = 1;
// const max = 7;
// let Random1;
// let Random2;
// let Random3;
// myButton.onclick = function(){
//    Random1 = Math.floor(Math.random() * max)+min;
//    Random2 = Math.floor(Math.random() * max)+min;
//    Random3 = Math.floor(Math.random() * max)+min;
//    myLabel1.textContent = Random1;
//    myLabel2.textContent = Random2;
//    myLabel3.textContent = Random3;
// }

//Random Number Generator

// let Age = 25;

// if(Age>=18){
//    console.log("You Are Old Enough To Enter This Site");
// }else{
//    console.log("Dont Enter...!!")
// }

// let isStudent = false;
// if(isStudent){
//    console.log("You Are A Student");
// }else{
//    console.log("You Are Not An Student");  //Runs
// }

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

//1 let Age;
// mySubmit.onclick = function(){
//    Age = myText.value;
//    Age = Number(Age);  //Coz Default It Is String
//    if(Age > 100){
//       resultElement.textContent = "You Are Too Old To Enter This Website";
//    }
//    else if(Age <= 0){
//       resultElement.textContent = "Your Age Cannot Be in Negative Or Zerooo";
//    }
//    //Add How Many Conditions You Want 
//    else{
//       resultElement.textContent = "Vanakam Sir Eyyyy";
//    }
// 1}

//Checked Property In JavaScript --> Checks Whether A HTMl TextBox or RadioButton Is Checked


// const myCheckbox = document.getElementById("myCheckbox");

// const myRadio1 = document.getElementById("myRadio1");
// const myRadio2 = document.getElementById("myRadio2");
// const myRadio3 = document.getElementById("myRadio3");

// const ForCheckBox = document.getElementById("ForCheckBox");
// const ForRadioBtn = document.getElementById("ForRadioBtn");

// const mySubmit = document.getElementById("mySubmit");

// mySubmit.onclick = function(){

// if(myCheckbox.checked){
//    ForCheckBox.textContent = `You Have Subscribed`;
// }else{
//    ForCheckBox.textContent = `Do Subscribe For Advanced Access`;
// }

// if(myRadio1.checked){
//    ForRadioBtn.textContent = `You Are Going To Pay Via PayPal`;
// }else if(myRadio2.checked){
//    ForRadioBtn.textContent = `You Are Going To Pay Via CreditCard`;
// }
// else if(myRadio3.checked){
//    ForRadioBtn.textContent = `You Are Going To Pay Via GooglePay`;
// }

// }


//Checked Property In JavaScript

//Ternary Operator --> (?:)
// let Age = 21;
// let Check = Age >= 18 ? "You Are An adult" : "You Are Not Adult";
// console.log(Check);




