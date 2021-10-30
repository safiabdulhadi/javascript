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

*/
let name = "Ilya";
alert(`hello ${name}`); // hello Ilya 
alert(`hello ${1}`); // hello 1