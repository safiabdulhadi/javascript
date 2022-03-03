// let a = 20;
// a = 40;
// var b = 'ahmad';
// var b = "Nawid";
// const c = 1000;
// document.write(c);
// const ages = [18, 39, 35,40,80];
// ages[1] = 'ahmmad';
// ages[0] = 'My name is ';


// document.write(ages);
// with const we can't inisalisze or declarare 
// var ages = [18, 39, 35,40,80];
// ages[1] = 'ahmmad';
// ages[0] = 'My name is ';

// ages = ['khan', 'ahmmad', 'sadat','nawid','names'];


// document.write(ages);


// var obj = {
//     fristName: "ahmad",
//     lastName: "khan",
//     ages: 27
// }
// // for adding new value in obj
// // obj.fristName = 'safi';

// var obj = {
//     fristName: "gullkhan",
//     lastName: "malik",
//     ages: 28
// }

// console.log(obj);


// let string = "Let learn JavaScript Easlily";
// let result1 = string.length;
// let str = "I love javaScript";
// let result2 = str.length;

// document.write(result1 + " " + "<br>");
// document.write(result2);


// let string = "Let learn JavaScript Easlily";
// let results = string.toUpperCase();
// let string = "Let learn JavaScript Easlily";
// let results = string.toLowerCase();

// let string = "Let learn JavaScript Easlily";
// let results = string.includes("Let");//include is for true or false

// let string = "Let learn JavaScript Easlily";
// let results = string.startsWith("Let");
// let string = "Let learn JavaScript Easlily";
// let results = string.endsWith("Easlily");
// let string = "Let learn JavaScript Easlily";
// let results = string.search("learn");
// let string = "Let learn JavaScript Easlily";
// let results = string.match("javascript"); //its work same as search
// let string = "Let learn JavaScript learn Easlily";
// let results = string.match(/learn/g); // search globaly
// let string = "Let learn JavaScript Easlily";
// let results = string.indexOf("learn");
// let string = "Let learn JavaScript learn Easlily";
// // let results = string.lastIndexOf("learn");

// let string = "Let learn JavaScript Easlily";
// // let results = string.replace("learn", "practic");
// let string = "Let learn JavaScript learn Easlily";
// let results = string.replace(/learn/g, "Paratic"); // replace globally
// document.write(results);

// let ages = [10, 15,18, 30, 50 , 45];
// let findAge = 18;

//  let result = ages.some(check);

// function check (a) {
//     return findAge >= a;
// }
// document.write(result);

// let ages = [10,15,18, 30,50,45];
// let findAge = 18;

//  let result = ages.findIndex(check);

// function check (a) {
//     return a >= findAge;
// }
// document.write(result);


// let ages = [10,15,18, 30,50,45];
// let findAge = 18;

//  let result = ages.findIndex(function(a){
//     return a >= findAge;
//  });
// document.write(result);
// let a = "100";
// let a = true;
// let a = false;
// let a = 10.25;
// let num = Number.parseFloat(a);
// document.write(num);

// let a = Infinity;
// let a = 100;
// let result = Number.isInteger(a);
// document.write(result);

// const ages = [18,45,50,80];

// ages[0] = "ahmmad";
// ages[1] = "new value";

// // document.write(ages);
// const obj = {
//     firstName: "ahmad",
//     lastName: "sadat",
//     age:20
// }
// obj.firstName = "khan";
// console.log(obj.firstName);

// let str = '       javascript';
// //for the spaycing
// let str1 = str.trim();
// console.log(str);
// console.log(str1);

// let str = "javascript ";
// let result = String.fromCharCode(224);
// console.log(result);
// let result;

// result = document.getElementById('id1').innerText = 'New Text';

// console.log(result);


// let result;

// result = document.getElementById('id1').innerHTML = '<h1> New Text</h1>';

// console.log(result);

// let result;

// result = document.getElementById('id1').setAttribute("class", 'abc');

// console.log(result);

let result;

result = document.getElementById('id1').attributes[0].value = 'abc';

console.log(result);