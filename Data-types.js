/*Data types
A value in JavaScript is always of a certain type. For example, a string or a number.

There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.

We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:
// no error
let message = "Hello";
alert(message);
*/
// Javascript Data Types
// In this tutrial, you will learn about the various data types available  JavaScript with the help of examples.
/* 
const x = 5;
const y = "Hello";
console.log(x + ' '+ y ); // for spaces (x + ' '+y)

Data Types in javascript
String     represents textual data  'hello' , "hello world!"
number     an integer or a floating-point 3, 23', 2e-2 etc...
BigInt     an interger with arbirary percision   9007199955151515n , 1n
Boolean    Any of two values: true or false       true and false
undefined  a data type whose variable is not initialized    let a;
null       denotes a null value                   let a = null;
Symbol     data type whose instances are unique and immutable      let value = Symbol('hello');
object     key-value pairs of collection of data       let student = { };
*/
// strings example 
/*
const name = 'ram';
const name1 = 'har';
const result = `the names are ${name} and ${name1}`;
//strings example
const name = 'ram';
const name1 = "hari";
const result = `The names are ${name} and ${name1}`;
console.log(result);

const number1 = 3;
const number2 = 3.43;
const results = `The number are ${number1} and ${number2}`;
console.log(results);
alert(results);

const num1 = 5;
const num2= 5;
const resul = `The number are ${num1} and ${num2}`;
console.log(resul);

let name = " John";
// embed a variable 
alert(`The result is ${1 + 2}`); // the result is 3

let isGreater = 4>1;
alert (isGreater); // true (the comparison result is "yess")
let age;
alert(age); //
 shows "undefined"


let name = "Ilya";
alert(`hello ${name}`); // hello Ilya 
alert(`hello ${1}`); // hello 1

// Data Type : Numbers
// There are 7 data types 
// Boolenan 
// var date = true // booleans rule // It will be true
 var data = false;
 if (data){
        console.log("Booleans rule!");
 } else{
        console.log("Booleans ar elame.");
 }
 
// null
var n = null;
console.log(n);

// undefined
var a;
console.log(a + 2);// *NaN
console.log(a);// undefined 
// number 
var num = 3.6;
var ber = 6.4;
console.log(num + ber); // the answer is 10 

// String. ' Howdy' 
var name = "Abdulhadi";
console.log("hi ! My name is" + " " + name);
// Symbol 
var sym1 = Symbol("foo");
var sym2 = Symbol("foo");
console.log(sym1 === sym2); // here is false
console.log(String(sym1) === String(sym2)); //now is true
// Object is just a collection of properties 
var myCar = new Object();
myCar.make = "ford";
myCar.model = "Mustang";

console.log(myCar.make);// output is ford 
*/
/*
const firstName = 'Abdulhadi'
const lastName = 'safi'

const sentence = 'Hello' + firstName + ` ` + lastName + `! how are you `;
const sentenceWithTemplate = 'Hello ${firstName} 5 ${lastName} ! How are you !?';
const five = '5';
console.log(five + five); // 5 is inside of the string though
console.log(sentence);
console.log(sentenceWithTemplate);
// this is a comment use the slash<
  
const skyIsblue = true;

if (skyIsblue) {
       console.log('The sky is blue');

} else {
       console.log('The sky is ...not blue?');
}


// is true 

let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;

let x = 16 + "Volvo";
document.getElementById("demo").innerHTML = x;

let x = "Volvo" + 15 + 4;
document.getElementById("demo").innerHTML = x;

let x ; // now x is undefined 
x = 5; // 5;
x = "John"; // now x is a String 

document.getElementById("demo").innerHTML = x;

let answer1 = "It's alright";
let answer2 = " He is called 'Jonny'";
let answer3 = 'He is called "Jonny"';

document.getElementById("demo").innerHTML = 
answer1 + "<br>" + answer2 + "<br>" + answer3;


let answer1 = "It's alright";
let answer2 = "He is called Jonny";
let answer3 = 'He is called "Jonny"';
let total = `<br> ${answer1} <br> ${answer2} <br> ${answer3}`;

document.getElementById("demo").innerHTML = total;

let answer1 = "It's a alright"
let answer2 = "He is called Jonney";
let answer3 = 'He is called "Joney 2';
let result = ` <br> ${answer1} <br> ${answer2} <br> ${answer3} `;
console.log(result);
document.getElementById("demo").innerHTML = result;

let x1 = 34;
let x2 = 35;
let x3 = 40;
document.getElementById("demo").innerHTML = 
x1 + "<br>" + x2 + "<br>" + x3 ;
document.getElementById("demo").innerHTML =
x1 + "" + x2 +  "" + x3;


let x = 5;
let y = 5;
let z = 4;

document.getElementById("demo").innerHTML = 
(x == y) + "<br>" + (x ==z);

let x = 5;
let y = 5;
let z = 5;
document.getElementById("demo").innerHTML = 
(x ==y) + "<br>" + (x == z);// It will be both true; 


const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars[0];
console.log(cars);

let cars = ["saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML =
cars [0]; 
console.log(cars);
document.write (cars);
window.alert(cars);
*/
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo1").innerHTML
 = fruits,
 fruits.sort();
 document.getElementById("demo2").innerHTML = fruits;
 