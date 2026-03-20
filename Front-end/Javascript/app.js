// console.log("Hello, World!");
// console.log("Nirma Mali");
//  let a = 10;
// let b = 20;
//  console.log("Sum is: " + (a + b));

// let pencilPrice = 10;
// let eraserPrice = 5;
// console.log("The total price is : ", pencilPrice + eraserPrice,"Rupees.");

// let output = "The total price is : " + (pencilPrice + eraserPrice) + " Rupees.";
// console.log(output);

// let op=`The total price is : ${pencilPrice + eraserPrice} Rupees.`;  //back ticks
// console.log(op);

//Arithmetic operators
// let a = 10;
// let b = 20;
// console.log("Sum is: " + (a + b));
// console.log("Difference is: " + (a - b));
// console.log("Product is: " + (a * b));
// console.log("Division is: " + (a / b));
// console.log("Modulus is: " + (a % b));
// console.log("Exponentiation is: " + (a ** b));

//unary operators
// let c = 5;  
// console.log("Value of c is: " + c);
// console.log("Value of c after increment: " + (++c)); // pre-increment
// console.log("Value of c after decrement: " + (--c)); // pre-decrement
// console.log("Value of c after post-increment: " + (c++)); // post-increment
// console.log("Value of c after post-decrement: " + (c--)); // post-decrement

//Comparision operators
// console.log("Is a equal to b? " + (a == b)); // equality
// console.log("Is a equal to b with equal type? " + (5=== 5)); // compares type and value
// console.log("Is a not equal to b? " + (a != b)); // inequality
// console.log("Is a greater than b? " + (a > b)); // greater than
// console.log("Is a less than b? " + (a < b)); // less than
// console.log("Is a greater than or equal to b? " + (a >= b)); // greater than or equal to
// console.log("Is a less than or equal to b? " + (a <= b)); // less than or equal to


//conditional statements
//if 
// console.log("before my if statement");
// let a = 10;
// if(a>=7){
//     console.log("a is greater than or equal to 7");
// }
// console.log("after my if statement");

// let firstName = "Nirma";
// if(firstName === "Nirma"){
//     console.log(`Welcome ${firstName} !!!!`);
// }

// //if else
//     let age=13;
// if(age>=18)
// {
//     console.log("you can vote");
// }
// else if(age<18)
// {
//     console.log("you cannot vote")
// }


// let marks=75;
// if(marks>=80){
//     console.log("A+");
// }
// else if(marks>=60){
//     console.log("A");
// }
// else if(marks>=33){
//     console.log("B");
// }
// else if (marks<33){
//     console.log("F");
// }

// //Traffic light system 
// let color="green";
// if(color == "red"){
//     console.log("Stop! ligth color is red");
// }
// else if(color== "yellow"){
//     console.log("slow down! light color is yellow")
// }
// else if(color== "green"){
//     console.log("Go! light color is green ")
// }

// //else 
//      let age1=31;
// if(age1>=18)
// {
//     console.log("you can vote");
// }
// else
// {
//     console.log("you cannot vote")
// }

// let color1="blue";
// if(color1 == "red"){
//     console.log("Stop! ligth color is red");
// }
// else if(color1== "yellow"){
//     console.log("slow down! light color is yellow")
// }
// else if(color1== "green"){
//     console.log("Go! light color is green ")
// }
// else{
//     console.log("traffic light is broken ");
// }

// //Create a system to calculate popcorn prices based on the size customer asked for : 
// let size='S';
// if(size==='XL'){
//     console.log("Price is Rs.250");
// }
// else if(size==='L'){
//     console.log("Price is Rs.200");
// }
// else if(size==='M'){
//     console.log("Price is Rs.100");
// }
// else{
//     console.log("Price is Rs.50");
// }
// let marks1=56;
// if(marks1>=33){
//             console.log("Pass");
//             if (marks1>=80){
//                 console.log("O");
//             }
//             else{
//                 console.log("A");
//             }
//         }
//         else{
//             console.log("better luck next time!!");
//         }

// //logical operators
// let marks2=75;
// if(marks2>33 && marks2<=80 || !(false)){
//     console.log("pass");  // (exexution starts from left )
// }

// //A "good string" is a string that starts with the letter 'a' and has a length >3 . write a program to find if a string is good or not
// let str="apple";
// if((str[0]==='a') && (str.length>3)){
//     console.log("Good string");
// }
// else{
//     console.log("Not a good string");
// }

// //predict the output 
// let num=12;
// if((num%3==0)&&((num+1==15)||(num-1==11))){
//     console.log("safe");
// }
// else{
//     console.log("unsafe"); 
// }

// //switch statement 
// let color2="red";
// switch(color2){
//     case "red" : console.log("stop"); break;
//     case "yellow" : console.log("slow down"); break;
//     case "green" : console.log("go"); break;
//     default : console.log("Broken Light");
// }

// let day=4;
// switch(day){
//     case 1 : console.log("Monday"); break;
//     case 2 : console.log("Tuesday"); break;
//     case 3 : console.log("Wednesday"); break;
//     case 4 : console.log("Thursday"); break;
//     case 5 : console.log("Friday"); break;
//     case 6 : console.log("Saturday"); break;
//     case 7 : console.log("Sunday"); break;
//     default : console.log("Invalid");
// }

// alert("something is wrong");
// prompt("please enter your roll no.");
// console.log("Print");
// console.error("error");
// console.warn("warning");

// let fname=prompt("Enter ur name");
// console.log(fname);

// let firstName=prompt("enter your first name:");
// let lastName=prompt("enter your last name:");
// let fullName="Welcome " +firstName+" "+lastName+ "!!";
// console.log(fullName);
// alert(fullName);

//print “good” if the number is divisible by 10 and print “bad” if it is not
// let num=prompt("Enter a number :");
// if((num%10)===0){
//     console.log(num+" is good");
// }
// else{
//     console.log(num+" is bad");
// }

//name is age years old
// let name=prompt("Enter your name:");
// let age=prompt("Enter your age:");
// alert(`${name} is ${age} years old`);


//quater1 jan feb mar and so on
// let quater=1;
// switch(quater){
//     case 1:console.log("January, February, March"); break;
//     case 2:console.log("April, May, June"); break;
//     case 3:console.log("July, august, september"); break;
//     case 4: console.log("october, november, december"); break;
//     default:console.log("Invalid");
// }

//golden string if it starts with character A or a and len greater than 5
// let str="Apple"
// if(((str[0]==='A')||(str[0]==='a')) && (str.length>5)){
//     console.log("Golden String");
// }
// else{
//     console.log("Not a goleden string");
// }

//Find the largest of 3number
// let a=10;
// let b=8;
// let c=19;
// if(a>b && a>c){
//     console.log("ais greater");
// }
// else if(b>c){
//     console.log("b is greater");
// }
// else{
//     console.log("c is greater ")
// }
// let x=((a > b ? (a > c ? a : c) : (b > c ? b : c)));
// console.log(x);

// let n1=32;
// let n2=47852;
// if((n1%10)==(n2%10)){
//     console.log("Same last digit i.e.,2");
// }
// else{
//     console.log("not same last digit");
// }

// let msg="   Hel    lo    ";
// console.log(msg.trim()); // removes whitespace from both ends of a string
// console.log(msg.trimStart()); // removes whitespace from the start of a string
// let password=prompt("Enter your password:");
// let newpassword=password.trim(); // removes whitespace from both ends of a string
// console.log(newpassword); // removes whitespace from both ends of a string


// let str=prompt("Enter a string:");
// console.log(`original string =${str}`);
// console.log(`string without spaces =${str.trim()}`);

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
// }
// for (let i = 5; i >= 1; i--) {
//     console.log(i);
// }

// print all odd numbers from 1 to 20
// for (let i = 1; i <= 20; i=i+2) {
//     console.log(i);
// }

// // print all even numbers from 1 to 20
// for (let i = 2; i <= 20; i=i+2) {
//     console.log(i);
// }

// //print table of 5
// let n= prompt("Enter a number to print its table:");
// n=parseInt(n)
// for(let i=n; i<=n*10; i=i+n){
//     console.log(i);
// }

// Favorite Movie 
// const favMovie ="avatar";
// let guess = prompt("Guess my favorite movie:");
// while((guess != favMovie) && (guess != "quit")){
//     console.log("Wrong guess, try again!");
//     guess = prompt("Guess my favorite movie:");
// }
// if(guess == favMovie){
//     console.log("congrats!!")
// }
// else{
//     console.log("You quit the game.");
// }

// const student = {
//     name: "nirma",
//     age: 23,
//     marks: 94,
//     city: "mandya"
// };

// let student2= ["nirma",23,94,"mandya"];


//Thread / Twitter Post
// const  post ={
//     username : "@nirma",
//     content : "This is #firstpost!",
//     likes : 100,
//     reposts : 50,
//     tags : ["@roopa","@rishiii"]
// };

// //user enters a max number & then tries to guess a random generated number between 1 to max 
// const max= prompt("Enter the max number:");
// const random = Math.floor(Math.random() * max )+ 1;
// // console.log(random);
// let guess = prompt("Enter your first guess:");
// while(true){
//     if(guess =="quit"){
//         console.log("You quit the game.");
//         break;
//     }
//     if(guess == random){
//         console.log("Congrats!! You guessed it right.");
//         break;
//     } else if(guess > random){
//         guess = prompt("Too high, try again:");
//     }  else if(guess < random){
//         guess = prompt("Too low, try again:");
//     }
    
// }


// let name=prompt("Enter your name:");
// let age=prompt("Enter your age:");

// function info(name, age){
//     console.log(`${name} is ${age} years old`);
// }
// info(name,age);

// function printPoem(){
//     console.log("Roses are red, violets are blue");
//     console.log("Sugar is sweet, and so are you.");
// }

// printPoem();


// function rollDice(){
//     let rand = Math.floor(Math.random() * 6) +1;
//     console.log(rand);
// }
// rollDice();


// function avg(num1, num2, num3){
//         let avg=(num1+num2+num3)/3;
//         console.log(avg);
// }
// avg(2,3,50);

// function printTable(n){
//     for(let i=n; i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// printTable(7);


// function isAdult(age){
//     if(age>=18){
//         return "adult";
//     }
//     else{
//         return "not adult";
//     }
// }

// let str = ["hi", "hello", "hey"];
// function concat(str){
//     let res;
//     for(let i=0; i<str.length;i++){
//         res+=str[i];
//     }
//     return res;
// }

// let a=[1,5,97,7,3,9,8,45,32];
// let num=5;
// function findMax(a,num){
//     for(let i=0; i<a.length;i++){
//         if(a[i]>num){
//             console.log(a[i]);
//         }                                   
//     }
//     return max;
// }

// findMax(a,num);


// let b1=document.createElement("button");
// b1.innerText="Click Me";
// document.querySelector("body").append(b1);  

let btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function(){
    console.log("Button Clicked");
}