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






