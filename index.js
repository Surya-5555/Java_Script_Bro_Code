//  VS Code Features
//  ctrl + f To search Some Text In The Entire File Like Search In Whatsapp
//  ctrl + i To Call Copilot
//  ctrl + . TO Generate Code Using Copilot

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

//Switch Case
// let Age = 17;
// switch(Age){
//    case 17 :
//       console.log("First Case");
//       break;
//       default:
//          console.log("Defaut Case");
//          break;
// }

// let Mark = 10;
// let Grade;
// switch(true)
// {
//    case Mark>=90 :
//       Grade = "A";
//       break;
//       case Mark>80 :
//       Grade = "B";
//       break;
//       case Mark>70 :
//       Grade = "C";
//       break;
//       default:
//       Grade = "F";
//       break   
//       }
// console.log(Mark,Grade);

//--- Some String Methods --- //
//charAt() --> 1
// let UserName = "Surya";
// console.log(UserName.charAt(5));  //First Character In A String For Normal By Index & <empty string> --> If (Not Accessible Index)

// indexof() --> 2
// let UserName = "Surya";
// console.log(UserName.indexOf(`a`)); //Index of The Specified character If Not Availble Output --> -1

// lastIndexOf() --> 3
// let UserName = "Surya";
// console.log(UserName.lastIndexOf(``)); //Same As Normal Indexof() & Nothing Inside Like (``) --> Output Will Be Length Of String 

//Length --> 4
// let UserName = "Surya";
// console.log(UserName.length);

//Trim() --> 5
//let UserName = "Surya Is A SDE";
// console.log(UserName.trim());  //Gives Fully Given In Input

// toUpperCase() --> 6
//let UserName = "Surya Is A SDE";
//console.log(UserName.toUpperCase()); //Make It 

// toLowerCase() --> 7
// let UserName = "Surya Is A SDE";
// console.log(UserName.toLowerCase());

// repeat() --> 8
// let UserName = "Surya Is A SDE";
// console.log(UserName.repeat(3));  //Repeats Many Times The Same Input

// startsWith() --> 9
// let UserName = " Surya Is A SDE";
// Result = UserName.startsWith(` `);

// if(Result){
//    console.log("Dont leave As White Space For UserName In Beginning...!!");
// }else{
//    console.log("Good...!!");
// }

// endsWith() --> 10
// let UserName = "Surya Is A SDE!";
// Result = UserName.endsWith(`!`);

// if(Result){
//    console.log("Dont leave As White Space For UserName In Ending...!!");
// }else{
//    console.log("Good...!!");
// }

// includes() --> 11
// let UserName = "Surya Is A SDE!";
// Result = UserName.includes(`!`);

// if(Result){
//    console.log("Your Name Cannot Have Special Characters In The String");
// }else{
//    console.log("Good...!!");
// }

// replaceAll() --> 12
// let PhoneNumber = `123-456-789`;
// PhoneNumber = PhoneNumber.replaceAll("-" , "");
// console.log(PhoneNumber);  //Output --> 123456789

// let PhoneNumber = `123-456-789`;
// PhoneNumber = PhoneNumber.padStart(15,"0");  //Adds Four 0's at Beginning As It Size Is 15 (Size Of String + Other All 0's)
// console.log(PhoneNumber);  //Output --> 0000123-456-789  

// StringSlicing --> Formula or Syntax - string.slice(start ,  end)
// const FullName = "Surya Code";
// let FirstName = FullName.slice(0,5);
// let LastName = FullName.slice(6,10);  //Or slice(6)
// console.log(FirstName);
// console.log(LastName );
// NegaIndex = FullName.slice(-1);
// console.log(NegaIndex);  //e --> Coz Negative Indexing Starts From -1 From Last 
// NegaIndex = FullName.slice(-4);
// console.log(NegaIndex);  //Code

// const FullName = "Surya Code";
// let FirstName = FullName.slice(0,5);
// let LastName = FullName.slice(6,10);
// console.log(FirstName);
// console.log(LastName );
//             |
//   Making Above Code as Dynamic 
//             |
// const FullName = "Surya Code";
// let FirstName = FullName.slice(0,FullName.indexOf(" "));
// let LastName = FullName.slice(FullName.indexOf(" ") + 1);
// console.log(FirstName);
// console.log(LastName);

// Method Chaining --> Calling One Method After Another In One Continuous Line Of Code

//---Method Chaining--- 

// let UserName = window.prompt("Enter Your Username : ");
// UserName = UserName.trim();

// let Letter = UserName.charAt(0);
// Letter = Letter.toUpperCase();

// let ExtraChars = UserName.slice(1);
// ExtraChars = ExtraChars.toLowerCase();

// let Sum = Letter + ExtraChars;
// console.log(Sum);

//---No Method Chaining--- 

// let UserName = window.prompt("Enter Your Username : ");

// UserName = UserName.trim().charAt(0).toUpperCase() + UserName.trim().slice(1).toLowerCase();
// console.log(UserName);

// Logical Operators
// 1.AND - &&
// 2.OR - ||
// 3.NOT - ! --> Example - Valid = false 
//                         if(!Valid)  //True And Executes

// = Assignment Operator
// == loose Comparison Opeartor (Only Values and Doesnot Consider DataType) --> Example - 3.14 == "3.14"  //True
// === Strict Comparison Operator (Values Along With DataType)
// != InEquality Operator
// !== Strict InEquality Operator

// "" --> Denotes Empty String 
// " " --> Denotes Empty Index

//While Loop
// let UserName = "";

// 1. while(UserName === ""){
//    UserName = window.prompt("Enter some UserName : ")
// }
// console.log(UserName);  //Give Cancel --> Output - null

// 2. while(UserName === "" || UserName === null){
//    UserName = window.prompt("Enter some UserName : ")
// }
// console.log(UserName);  //Give Cancel --> again Pop Up Untill Entering Something , No Longer Clicking Cancel will Output null

// let Bool = false;
// let UserName ;
// let Password ;

// while(!Bool){
//    UserName = window.prompt(`enter Your UserName :`);
//    Password = window.prompt(`Enter Your Password : `);

//    if(UserName === "MyUserName" && Password === "MyPassword"){
//       Bool = true;
//       console.log(`Done JS Coder...!! , You Are Logged-wIn`);
//    }else{
//       console.log(`Done Some Mistakes In Log-In`);
//    }
// }

// Number Guessing Game 

// const minNum = 1;
// const maxNum = 100;
// const Answer = Math.floor(Math.random() * (maxNum-minNum + minNum)) + minNum;

// let Attempts = 0 ;
// let Guess ;
// let Attempt = true;

// while(Attempt){
//    Guess = window.prompt(`Guess A Number Between ${minNum} And ${maxNum}`);
//    Guess = Number(Guess);  //When Try To convert String To Number --> NaN

//    if(isNaN(Guess)){
//       window.alert(`Enter A Valid Number`);
//    }else if(Answer < minNum || Answer > maxNum){
//       window.alert(`Enter A Valid Number`);
//    }else{
//       Attempts++;
//       if(Guess < Answer){
//          window.alert(`Too Low...!!`);
//       }else if(Guess > Answer){
//          window.alert(`Too High...!!`);
//       }else if(Guess == Answer){
//          window.alert(`You Got It Correct...!! , In ${Attempts} Attempts`);
//          Attempt = false;
//       }
//    }
// }

// function Surya(UserName , Date){
//    console.log(`Hi ${UserName}`);
//    console.log(`Your Birthday Is Next Month By ${Date}`);
// }

// Surya("Surya" , 5);
// Surya("Dharshana" , 28);

// Function Scope

// Example --> 
// let x = 5;

// function Example1(){
//    let x = 10;
//    console.log(x);
// }
// function Example2(){
//    let x = 50;
//    console.log(x);
// }

// Example1();  //10
// Example2();  //50  //First Prefernce To Local Scope

//Alt + 0 --> Keyboard ShortCuts

//Temperature Conversion

// const TextBox = document.getElementById("textBox");
// const toFahrenheit = document.getElementById("toFahrenheit");
// const toCelsius = document.getElementById("toCelsius");
// const result = document.getElementById("result");
// let temp;

// function convert(){
//    if(toFahrenheit.checked){
//       temp = Number(TextBox.value);
//       temp = temp * 9/5 + 32; 
//       result.textContent= temp.toFixed(1) + " F";  //toFixed() To Decide How Many Numbers Should Be After Decimal Place
//    }else if(toCelsius.checked){
//       temp = Number(TextBox.value);
//       temp = (temp - 32) * (5/9); 
//       result.textContent= temp.toFixed(1) + " C";  //toFixed() To Decide How Many Numbers Should Be After Decimal Place
//    }else{
//       result.textContent = "Select A Unit"
//    }
// }

//Temperature Conversion

//Array
// let fruits = ["Apple","Carrot","Banana"];  //--> 0 ,1 , 2 --> 3
// fruits[0] = "Changed";
// fruits[4] = "New Index";
// console.log(fruits[0]);  //Apple
// console.log(fruits[1]);  //Carrot
// console.log(fruits[2]);  //Banana
// console.log(fruits[3]);  //Undefined
// console.log(fruits[4]);  //New Index

//Push And Pop & Unshift and Shift
// let fruits = ["Apple","Carrot","Banana"];  //--> 0 ,1 , 2 --> 3
// fruits.push("Pushed New To End");  //Adds In Last Index
// console.log(fruits);

// fruits.pop();  //Pops Out Last Element
// console.log(fruits);

// fruits.unshift("Surya");  //Added In First Index Before All
// console.log(fruits);

// fruits.shift();  //Removes First Element
// fruits.shift();  //Removes First Element
// console.log(fruits);

// Length Of An Array
// let fruits = ["Apple","Carrot","Banana"];
// console.log(fruits.length);  //3
// console.log(fruits.indexOf("Carrot"));

//Accessing with For Loops
// let fruits = ["Apple","Carrot","Banana"];

// for(let i = 0 ; i < fruits.length ; i++){
//    console.log(fruits[i]);  //1 st Way - Normal
// }

// for(let i = fruits.length - 1 ; i >=0 ; i--){
//    console.log(fruits[i]);  //2 nd Way - Reverse
// }

// for(let fruit of fruits){
//    console.log(fruit);  //3 rd Way - normal & Different
// }

//Sorting Array
// let fruits = ["Apple","Carrot","Banana"];
// let Sorted_Array = fruits.sort();
// console.log(Sorted_Array);
// Sorted_Array = fruits.sort().reverse();
// console.log(Sorted_Array);

// Spread Operator --> ...

// let Numbers = [1 ,2 , 3 ,4 ,5];
// let Maximum = Math.max(Numbers);
// console.log(Maximum);  //NaN --> So

// let Numbers = [1 ,2 , 3 ,4 ,5];
// let Maximum = Math.max(...Numbers);
// console.log(Maximum);  //5

// let Numbers = [1 ,2 , 3 ,4 ,5];
// let Maximum = Math.min(...Numbers);
// console.log(Maximum);  //1

// let UserName = "Surya";
// console.log(UserName);  //Surya
// console.log([UserName]);  //["Surya"]
// let Letters = [...UserName];
// console.log(Letters);  //["S" , "u" , "r" , "y" , "a"]

// let Fruits = ["Apple" , "Banana" , "Carrot"];
// console.log(Fruits);  //[ "Apple", "Banana", "Carrot" ]
// console.log([Fruits]);  //Different 
// console.log([...Fruits]);  //[ "Apple", "Banana", "Carrot" ]

// Creating A Copy
// let NewFruits = Fruits;
// console.log(NewFruits);  //Same Copy Of Original Array
//Instead Of Above
// let NewFruits = [...Fruits];
// console.log(NewFruits);  //Same Output

// Combining Two Arrays 
// let Fruits = ["Apple" , "Banana" , "Carrot"];
// let Vegetables = ["Celery" , "Potatoes" , "Brocoli"];
// let Foods = [...Fruits , ...Vegetables];
// console.log(Foods);  //Array Will Be Merged --> ["Apple" , "Banana" , "Carrot" , "Celery" , "Potatoes" , "Brocoli"]

// Appending In The Array
// let Fruits = ["Apple" , "Banana" , "Carrot"];
// let Vegetables = ["Celery" , "Potatoes" , "Brocoli"];
// let Foods = [...Fruits , ...Vegetables , "New" , "Appended"];
// console.log(Foods);  //[ "Apple", "Banana", "Carrot", "Celery", "Potatoes", "Brocoli", "New", "Appended" ]


// Rest Parameters --> (...rest) - Parameter Pre-Fixed with Three Dots --> Bundles Seperate Elements As An Array i.e. Opposite To Spread Operator 
// function Open_Fridge(Foods){
//    console.log(Foods);
// }
// const Food1 = "Pizza";
// const Food2 = "HandBurger";
// const Food3 = "HotDog";
// const Food4 = "Sushi";

// Open_Fridge(Food1);  //Pizza
// Open_Fridge(Food2);  //HandBurger
// Open_Fridge(Food1 , Food2);  //Only Pizza Coz Can't Take Multiple Arguments

// So -->
// function Open_Fridge(...Foods){  //Accepts More Than One Argument
//    console.log(Foods);
// }
// const Food1 = "Pizza";
// const Food2 = "HandBurger";
// const Food3 = "HotDog";
// const Food4 = "Sushi";

// Open_Fridge(Food1);  //Pizza
// Open_Fridge(Food2);  //HandBurger
// Open_Fridge(Food1 , Food2 , Food3); //  [ "Pizza", "HandBurger", "HotDog" ]

// To Display As All Seperate Elements
// function Open_Fridge(...Foods){  //Accepts More Than One Argument
//    console.log(...Foods);
// }
// const Food1 = "Pizza";
// const Food2 = "HandBurger";
// const Food3 = "HotDog";
// const Food4 = "Sushi";

// Open_Fridge(Food1);  //Pizza
// Open_Fridge(Food2);  //HandBurger
// Open_Fridge(Food1 , Food2 , Food3);  //Pizza HandBurger HotDog

// Calculates Sum 
// function Sum(...Numbers){
//    let sum = 0;
//    for(let number of Numbers){
//       sum +=number;
//    }return sum;
// }

// const Store = Sum(1 , 3 , 4 , 2);
// console.log(Store);

//Calculates Average
// function Sum(...Numbers){
//    let sum = 0;
//    for(let number of Numbers){
//       sum +=number;
//    }return sum / Numbers.length;
// }

// const Store = Sum(1 , 3 , 4 , 2 ,5);
// console.log(Store);

// Merge Multiple Strings
// function Merge(...Strings){
//    return Strings.join(" ");
// }

// let MergedString = Merge("Surya" , "Is" , "a" , "Sde");
// console.log(MergedString);  //Surya Is a Sde

// Dice Game 

// function Roll(){
//    const UserValue = document.getElementById("InputBox").value;
//    const Result = document.getElementById("Result");
//    const Images = document.getElementById("Images");
//    const Result_Array = [];
//    const Images_Array = [];

//    for(let i = 0; i < UserValue ; i++){
//       const Random_Number = Math.floor(Math.random()*6)+1;
//       Result_Array.push(Random_Number);
//       Images_Array.push(`<img src="Images/${Random_Number}.png">`)
//    }
//    Result.textContent = `Dice : ${Result_Array.join(" , ")}`;
//    Images.innerHTML = Images_Array.join(" ");
// }

// Dice Game 


// Random Password Generator --> Project

// function generatePassword(length , includeUpperCase , includeLowerCase , includeNumbers , includeSymbols){
//    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//    const numberchars = "0123456789";
//    const symbolChars = "!@#$%^&*()_+-\|/?";

//    let allowedChars = "";
//    let password = "";

//    allowedChars += includeUpperCase ? upperCaseChars : "";
//    allowedChars += includeLowerCase ? lowerCaseChars : "";
//    allowedChars += includeNumbers ? numberchars : "";
//    allowedChars += includeSymbols ? symbolChars : "";

//    if(length <= 0){
//       return `(Password Length Must Be Atleast One)`;
//    }
//    if(allowedChars.length === 0){  //Or Conditionn Can Be (allowedChars === "")
//       return `(Atleast 1 Set Of Characters Need To Be Selected)`;  //When All False Below
//    }
//    for(let i = 0; i < length ; i++){
//       const randomIndex = Math.floor(Math.random() * allowedChars.length);  //Math.random() Generates From 0 To 1
//       password += allowedChars[randomIndex];
//    }
//    return password;
// }

// const passwordLength = 2;
// const includeUpperCase = true;
// const includeLowerCase = false;
// const includeNumbers = false;
// const includeSymbols = false;

// const password = generatePassword(passwordLength , includeUpperCase , includeLowerCase , includeNumbers , includeSymbols);
// console.log(`Generated Password : ${password}`);

// Random Password Generator --> Project


// Call Back --> Function Passed As An Argument To another Function
//           Used To Handle Asynchronous Operations :  // Asynchronous Operations - Operators That Take Variable Amout Of Time
//              1. Reading A File
//              2. Network Requests
//              3. Interacting With DataBases

// hello(goodBye);  //Function Name Passed As An Argument
// function hello(callback){
//    console.log(`Hello...!!`);
//    callback();
// }
// function goodBye(){
//    console.log(`goodBye...!!`);
// }  --> Ouput - Hello...!!
//                goodBye...!!

// Example 1:Finding Sum
         // sum(display_sum , 3 , 2);
         // function sum(callback , a , b){
         //    let result = a + b;
         //    callback(result);  //Calling Here
         // }
         // function display_sum(result){
         //    console.log(result);  //Displaying Result Here
         // }
// Example 2:Greatest Of 3 Numbers
         // max(display_max_value , 1 , 2 , 5);
         // function max(callback , a , b , c){
         //    let max_Value = Math.max(a , b, c);
         //    callback(max_Value);  //Calling Here
         // }
         // function display_max_value(max_Value){
         //    console.log(`Max Value Is : ${max_Value}`);  ////Displaying Result Here
         // }

// forEach() --> Method Used To Iterate Over The Elements Of An Array and Apply A Specified Function (callback) To Each Element
      //   Syntax -->array.forEach(callback);

      // Example 1 : To Display All Numbers
// let numbers = [1 , 2 , 3 , 4 , 5];
// numbers.forEach(display);
// function display(element){
//    console.log(element)
// }

      // Example 2 : To Display All Numbers Doubled
// let numbers = [1 , 2 , 3 , 4 , 5];
// numbers.forEach(Calculate);
// numbers.forEach(display);
// function Calculate(element , index , array){  //This Is The Format --> (element , index , array)
//    array[index] = element * 2;
// }
// function display(element){
//    console.log(element);
// }


// .map() --> Accepts A CallBack And Applies That Function To Each element Of An Array , Then Return A New Array
// Similar to forEach() Method , Only Difference is Here It Returns A New Array

// Example 1 :
// const numbers = [1 , 2 , 3 , 4 , 5];
// const squares = numbers.map(square);  //Stores In An New Array
// console.log(squares);
// function square(element){
//    return Math.pow(element,2);
// }

// Example 2 :
// const dates = ["2024/1/4" , "2025/3/5" , "2026/2/6"];  // Dates In Reverse Form 
// const returned_new_dates = dates.map(spliting_dates);
// console.log(returned_new_dates);
// function spliting_dates(element){
//    let single_element = element.split("/");  // After Splitting , Gives Index As (0 Or 1 Or 2)
//    return `${single_element[2]}-${single_element[1]}-${single_element[0]}`;
// }  //  Output -->  Array(3) [ "4-1-2024", "5-3-2025", "6-2-2026" ]  // Now In Proper Form 


// .filter()  --> Creates An New Array By Filltering Out Numbers

// Example 1 --> Filtering Out Even Numbers Alone
// let numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7];
// let Filtered_Numbers = numbers.filter(even_number);
// console.log(Filtered_Numbers);  //Array(3) [ 2, 4, 6 ]
// function even_number(element){
//       return element % 2  === 0;
// }

// Example 2 --> Choosing Adults In An Mixed Array
// const input_array = [18 , 19 , 14 ,20 , 21 , 22 , 16 , 17];
// let adult = input_array.filter(finding_adult);
// console.log(adult);
// function finding_adult(element){
//       return element>=18;
// }


// .reduce() --> Reduce The Elements Of An Array To A Single Value & Accumulator Will Come

// Example 1 : Sum Of Elements In An Array
// const prices = [10 , 70 , 80];
// let sum_of_prices = prices.reduce(sum);
// console.log(`$${sum_of_prices}`);
// function sum(accumulator , element){  //  Accumulator First Has 1 And Stores Further Sum In It
//       return accumulator + element;   //  Work Flow -->  0 + 10 = 10  //  10 Stored In Accumulator
//                                       //                 10 + 70(Next Element) = 80  //  80 Stored In Accumulator
//                                       //                 80 + 80 = 160  //160 Is Returned Coz Array Is Over
// }

// Example 2 : Largest Element In An Array
// const grades = [75 , 86 , 83 , 100 , 91 , 69 , 99 , 1];
// let largest_number = grades.reduce(largest_num_finder);
// console.log(largest_number);
// function largest_num_finder(accumulator , element){
//       return Math.max(accumulator , element);  // 100 Coz Accumulator Compares By Starting With Initial Value Of 0 (accumulator = 0)
// }


// Function expression --> A Way To Define Functions As Values Or Variables

// const hello = function(){  //Anonymous Function
//       console.log(`Hellooo...!!`);
// }
// hello();  // Variable With Parenthesis To Invoke

// Syntax For setTimeout Function --> setTimeout(callback , 3000)  //3 Seconds Or 3000 Milli Seconds

// const hello = function(){  //Anonymous Function
//       console.log(`Hellooo...!!`);
// }
// setTimeout(hello , 3000)  // Hellooo...!! Displayed After 3 Seconds

// We Can Directly Write The Function Inside setTimeout
// setTimeout(function(){
//       console.log("Hellooo...!!");
// },3000);

// const numbers = [1 , 2 , 3 , 4 , 5 , 6, 7, 8];
// let squared_values = numbers.map(function(element){
//       return Math.pow(element , 2);
// })
// console.log(squared_values);  //  Array(8) [ 1, 4, 9, 16, 25, 36, 49, 64 ]

// const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];
// let pick_even_numbers = numbers.filter(function(element){
//       return element % 2 === 0;
// })
// console.log(pick_even_numbers);  //  Array(4) [ 2, 4, 6, 8 ]

// const numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 4];
// let total = numbers.reduce(function(accumulator , element){
//       return accumulator + element;
// })
// console.log(total);  //  40


// arrow functions --> A concise Way To Write Function Expressions Good For Simple Functions That You Use Only Once (parameters)  --> Some code

// Normally We Write :
// function hello(){
//       console.log("Hello...!!");  //  Hello...!!
// }
// hello();  

// This Time Let Us Write little Consisely :
// const hello = function (){
//       console.log("Hellooo...!!");
// }
// hello();

// Writing By Arrow Function - More Consisely:
// Example 1 :
// const hello = () => console.log("Hellooo...!!");
// hello();

// Example 2 :
// const surya_arrow = () => console.log(`This Is An Arrow Fucntion`);
// surya_arrow();

// Example 3 :
// Passing Arguments In Arrow Function
// const name = (my_name) => console.log(`Hello Mr.${my_name}`);
// name("Surya");

// Example 4 :
// This Is An Example With setTimeout
// setTimeout(() => console.log(`Surya You Are Doing Well`),3000);  // Surya You Are Doing Well --> Displayed After 3 seconds

// Example 5 :
// This Is An Example Of Squaring All Element With Map Format By Arrow Function 
// const numbers = [1 , 2 , 3 , 4 , 5 , 6];
// const squared_array = numbers.map((elements) => Math.pow(elements , 2) );
// console.log(squared_array);  //  Array(6) [ 1, 4, 9, 16, 25, 36 ]

// Example 6 :
// This Is An Example For Filter And Reduce Property With Arrow Function
    // .Filter() :
// const numbers = [1 , 2 , 3 , 4 , 5 , 6];
// let filtered_even_numbers = numbers.filter((element) => element % 2 === 0)  // No need Return If It Is An Arrow Function
// console.log(filtered_even_numbers);  //  Array(3) [ 2, 4, 6 ]
    // .Reduce() :
// const numbers = [10 , 20 , 30];
// let total = numbers.reduce((accumulator , element) => accumulator + element);
// console.log(total);  //  60