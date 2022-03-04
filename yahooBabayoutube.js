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

var obj = {
    firstName : "yahoo",
    lastName : "Baba",
    Age : 25,
    email : "hello@yahoobaba.com"
};

for(var i in obj){
    document.write(i + " : " + obj[i] + "<br>");
}
