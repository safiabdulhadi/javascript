/*
Variables
Most of the time, a JavaScript application needs to work with information. Here are two examples:

1. An online shop – the information might include goods being sold and a shopping cart.
2. A chat application – the information might include users, messages, and much more.
Variables are used to store this information.

A variable
A variable is a “named storage” for data. We can use variables to store goodies, visitors, and other data.

To create a variable in JavaScript, use the let keyword.

The statement below creates (in other words: declares) a variable with the name “message”:*/
/*
let message1;
message1 = 'Hello, World' // store the string 'hello' in the variable named message 
alert(message1);
let message2;
message2 = 'Hello';
alert(message2);

let message;
message = 'Hello!';
message = 'World';
alert('message');

// We can also declare two variables and copy data from one into the other.
let hello = 'Hello world';
let meesage;
//copy 'Hello world ' from hello into message 
message = hello;
// now two variables hold the same data 
alert (hello);// <hello world!
alert(message);//Hello world!

let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"

alert($ + _); // 3

let $ = 1;
let _ = 2;

alert($ + _);

var price1 = 5;
var price2 = 6;
var total = price1 + price2;
document.getElementById("demo").innerHTML =
"The total is: " + total;
num = 5;
alert(num);


let admin , name; // can declare two variable at once 

name = "John"
admin = name;
alert(admin); // "John"

var x = 5;
var y = 6;
var z = x + y;
alert(z);
*/





/*

const myName = 'abdulhadi';
console.log(myName);
let mySurname = 'safi';
console.log(mySurname);
var myAge = 27;
console.log(myAge);
var myAge = 29;
console.log(myAge);
const firstName = 'Abdulhadi';
const lastName = 'SAFI';
console.log(firstName + lastName);
const country = 'Afghanistan';
console.log(country);
var x = 5;
var y = 10;
var z = x + y;
//alert(z);
console.log(z);
var price1 = 5;
var price2 = 6;
var total = price1 + price2;
console.log(total);

// Du code dans un fichier séparé
// délaration d'une variable
var a;
var b;
var c = a + b;
console.log(c);
*/
// var maVariable = 20;
// // alert(maVariable);

// {
//     let x = 10;
//     console.log(x);
// }

// let x = 10;
// if ( x == 10) {
//     let x = 50;
//     console.log("Inside the block", x);
// }
// console.log("Outside the block", x);
// var a = 20;
// console.log(window.a);
// let b = 10;
// console.log(window.b);
// ES5
// for (var i = 0; i<5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }
// Es6
// for (let i = 0; i <= 10 ; i++) {
//     setTimeout ( function () {
//         console.log(i);
//     }, i * 1000);
// }

// for (let i = 0 ; i < 5 ; i ++){
//     setTimeout(() => console.log(i), i * 1000);
// }
// for( let i = 0; i<= 10 ; i++) {
//     setTimeout(() => console.log(i), i *1000);
// }
// const student = { age: 27};
// student.age = 40;
// // console.log(student.age);
// const fruit = ["apple"];
// fruit.push("banana");
// console.log(fruit);
// const fruits = ["apples", "oranges"];
// fruits.push("bananas");
// // console.log(fruits);
// var message = "This is a \"simple\" message";//ignore the string with helps of backword slash
// console.log(message);
// const msg = ` This i s"simple" string 'exmple' in ES6`;
// console.log(msg);
const post = {
    title: "TechBowl Youtube Channel ",
    body:  "Please subscribe and pres the bell icon for mre update.",
    keywords: ["ES6","string", "template"]
};



const template = `<article> 
<h1>${post.title} </h1>
<section>
<p>${post.body} </p>
</section>
</article>
<footer>
<ul>
${post.keywords.map(keywords => `<li>${keywords} </li>`).join('\n')}
</ul>
</footer>`;
document.body.innerHTML = template;
// const template = `<article> 
// <h1>TechBowl Youtube Channel </h1>
// <section>
// <p> Please subscribe and pres the bell icon for mre update.</p>
// </section>
// </article>
// <footer>
// <ul>
// <li> ES6</li>
// <li>string</li>
// <li>template</li>
// </ul>
// </footer>`;