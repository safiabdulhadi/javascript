// let x = 25;
// if(x > 20) {
//     document.write("X is Greater");
// }
// else {
//     document.write("X is smaller");
// }

// var x = 15;
// if(x > 30)  {
//     document.write("X is Greater");
// }else {
//     document.write("X is Smaller");
// }

// var x = 100;
// if(x ==100)  {
//     document.write("X is Same");
// }else {
//     document.write("X is not same");
// }
// var x = '100';
// if(x === 100)  {
//     document.write("X is Same");
// }else {
//     document.write("X is not same");
// }

// var name = 'Yahoo Baba';
// var gender = 'female';
// if(gender == "male")  {
//     document.write("Hello Mr." + name);
// }else {
//     document.write("Hello Miss." + name);
// }


// var per = 55;


// if(per >= 80 && per <= 100) {
// document.write('');
// } else if() {

// }else {

// }
// var ary = [11,4,9,16];

// var b = ary.map(text);
// document.write(b);

// function text(x){
//     return x * 10;
// }

// var ary = [
//     {fname : "yahoo", lname : "baba"},
//     {fname : "sada", lname : "babi"},
//     {fname : "nawid", lname : "kha"}
// ];

// var b = ary.map(text);
// document.write(b);

// function text(x){
//     return x.fname + " " + x.lname + " " + x.fname;
// }

// var str = "JavaScript is a Great Language";
// var a = str.includes("JavaScript");

// document.write(a);


// var str = "JavaScript is a  is Great is  Language";
// var a = str.match(/is/g);

// document.write(a);

// var str = "JavaScript is a Great Language";
// var a = str.replace("JavaScript" , "Php");

// document.write(a);


// var str = "JavaScript is a Great Language";
// var str = "                  JavaScript          ";

// var a = str.trim();

// alert(a);
// document.write(a);

// var a = ["sangja", "khan", "Aman", "karan"];
// a.forEach(function(value){
//     document.write(value);
// });


// var a = ['Rhaul','karan','Aman'];
// a.forEach(function(value, index){
//     document.write(index + " " + value + '<br>')
// })


// var obj = {
//     firstName : "yahoo",
//     lastName : "Baba",
//     Age : 25,
//     email : "hello@yahoobaba.com"
// };

// for(var i in obj){
//     document.write(obj[i] + "<br>");
// }

// var obj = {
//     firstName : "yahoo",
//     lastName : "Baba",
//     Age : 25,
//     email : "hello@yahoobaba.com"
// };

// for(var i in obj){
//     document.write(i + " : " + obj[i] + "<br>");
// }


// var ary = [
//     {   fname : 'yahooo' , lname : 'baba' }
// ]

// var ary = [11, 4 , 15, 9];
// var b = ary.map(test);
// document.write(b);
// function test(x){
//     return x * 10;
// }


// function names(fname , lastName){
//     document.write('hello' + ' ' + fname + ' ' + lastName);
// }
// names('abdulhadi', 'safi');


// function sum(math,eng,sc){
//     var s = math + eng + sc;
//     return s;
// }
// function percentage(tt){
//      var per = tt/300 * 100;
//      document.write(per);
//      return per;
// }

// var total = sum(80,80,80);
// percentage(total);
// // console.log(total);

// function hello() {
//     document.write('Hello Everyone');
// // }


// let r = function(ali, ahmad, khalil){
//     let sum = ali + ahmad + khalil;
//     return sum;
// }

// document.write( r(30, 4, 35));

let welcome = function (name)  {
    return ` Hello & Welcome ${name}`;
}
document.write(welcome("Yahoo Baba"));
document.write('<br>');

let arrow = (fname) => { 
    return ` Hello and welcome ${fname}`;
}

document.write(arrow('Yahoo babas'));
 
