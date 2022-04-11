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

// let result;

// // result = document.getElementById('id1').attributes[0].value = 'abc';


// let demo = function() {
//     console.log("hello");

// }
// demo();

// function demo1() {
//     console.log("hello world");
// }
// demo1();

// let demo3 = () => console.log("hello again");
// demo3();


// function demo() {
//     console.log("hello");
// }
// demo();



// let demo1 = function() {
//     console.log("hello again");

// }
// demo1();

// let demo = () => {
//     console.log("hello");

// }
// demo();


// function demo() {
//     console.log("Heloo ");
// }
// demo();


// let demo1 = function() {
//     console.log("hello demo1");

// }

// demo1()


// let demo2 = () => console.log("hello");
// demo2()

// let demo1 = () => { 
//     console.log("helooo");
// }
// demo1()

// Full function 
// let demo = () =>  { 
//     let name = "Ahmad" ;
//     console.log(`hello from ${name}`);
// }
// demo()

// let demo1 = () => {
//     console.log("khan");
// }
// demo1()

// let demo2 = () => console.log("khan Agha");
// demo2()

// let demo = () => {
//     let name = "khan";
//     console.log(`Hello ${name} `);
// }
// demo()

// let demo1 = () => document.write("hello");
// demo1()


// let demo = () => {
//     console.log("hello");
// }
// demo();


// let demo2 = () => document.write("hello");
// demo2()

// let demo = (name, age) =>  document.write(name + " " + age);
// demo("ahmad", 29)

// let demo = (name, age) => console.log(`hello my name is ${name} and i am ${age} old `);
// demo("khan", 28);

// If you have only one parametter

// let demo =name => console.log(name);
// demo("ahamd ali");

// let demo1 = age => console.log(age);
// demo1(22);


// let demo = name => console.log( name);
// demo("kahn");

// let simple = function (name) {
//     return name;
// }
// console.log(simple("ahmad"));


// let demo = name => name;
// console.log(demo("ahmad khan wali"));

// let value = name => name;
// console.log(value("khan"));



// function sum(num1, num2) {
// console.log(num1 + num2)
// }
// sum(200,300);

// function sum() 
// {
//     let sum = 0;
//     for(i in arguments) 
//     {
//          sum = sum + arguments [i];
//     }
//     console.log(sum)
// }
// sum(100,300,400,4,200);

// ES6 rest operator

// function sum2( name, fname,  ... args) {
//  let sum = 0;
//  for(let i in args) {

//     sum = sum  + args[i];
//  }
//  console.log(`Total marks of${name} son of ${fname} ${sum} `)

// } 
// sum2("ahmmad", "sardar",200,300,20);


// let sum2 = ( name, fname,  ... args) => {
//     let sum = 0;
//     for(let i in args) {
   
//        sum = sum  + args[i];
//     }
//     console.log(`Total marks of${name} son of ${fname} ${sum} `)
   
//    } 
//    sum2("ahmmad", "sardar",200,300,20);


// let names = ["ahamd", "khan", "kamrem", "javad" ];
 
//    for(let i = 0; i < names.length; i++) {
//        console.log(names[i]);
//    }

// names.forEach(function(value){
//     console.log(value);
// });

// names.forEach(print_array);

// function print_array(value) {
//     console.log(value);
// }

// names.forEach(function(value,index){
//     console.log(index, + "/ " +   value)
// });

// let names = ["ahamd", "khan", "kamrem", "javad" ];

// names.forEach(function(v,i){
//     console.log(i,v);
// });

// let ages = [10,12,15,18,20,23,25];

// Return true or flase
// let result = ages.some(check);

// function check(a){
//  return a >= 18;
// }
// console.log(result);

// let result = ages.some(function(a){
//     return a >=18;
// });
// console.log(result);

// return true or false but check all possible values 
// let ages = [10,12,15,18,20,23,25,45,50];

// let result = ages.every(function(a){
//    return a >=5;
// });

// console.log(result);


// Return the value if matched

// let ages = [10,12,15,18,20,23,25];
  

//  let result = ages.find(function(a){
//      return a >= 18;
//  });
 
//  console.log(result);

// Return Index number if match 3 
// let ages = [10,12,15,18,20,23,25];

// let result = ages.findIndex(function(a){

//      return a >=18;
// });
// console.log(result)

// Return array of matched values 

// let ages = [10,12,15,18,20,23,25];

// let result = ages.filter(function(a){
// return a >=18;
// });

// console.log(result);


// let ages = [10,12,15,18,20,23,25];

// // let r =ages.filter(function(a){
// // return a >=18;
// // });
// // // console.log(r);
// // document.write(r);

// let r = ages.filter(k);
//  function k (a) 
//  {
//      return a >=18;
//  }
// //  console.log(r);
// document.write(r);
