// var x = 5;
//  var y = 6;
//  var z = x + y;


// document.getElementById("div1").innerHTML = z;



// var lightName = 'img/pic_bulboff.gif';

// function clickOff(){
//     document.getElementById('light').src = lightName;
// }

// let name = 'Abdulhadi safi';
// let name = 'Abdulhadi\' safi';
// let name = 'Abdulhadi\\ safi';
// let name = 'Abdulhadi \b safi';
// let name = 'Abdulhadi \f safi';
// let name = 'Abdulhadi \safi';





// function multiply(x,y) {
//     return (x + y)
// }


// function test() {

//     // document.getElementById("div1").innerHTML = name;
//     // document.getElementById("div1").innerHTML = 'Abdulhadi' ;
//     //  document.getElementById("div1").innerHTML = 'Abdul \hadi' ;
// // }
// const multiply = (x,y) => {
//     let z = 10;
//     return (x + z);
//     // return (x + y);
// }
// sum = multiply(1,2);
// document.getElementById("div1").innerHTML =" Sum = " + sum;

// let contact = {
//     firstName : 'abdulhadi',
//     lastName : 'Safi',
//     phoneNumber : 067859569,
//     age : 27,
//     fullName : function (){
//         return this.firstName + ' ' + this.lastName
//     }
// }

// document.getElementById('div1').innerHTML = contact.firstName + " " + contact.lastName;

// var str = "Please locate where 'locate' occurs!"
// var pos = str.indexOf("locate");
// var str = "Please locate where 'locate' occurs!"
// var pos = str.indexOf("locate", 15);

// var str = "Please locate where 'locate' occurs!"
// var pos = str.search("locate");
// var str = "Please locate where 'locate' occurs!"
// var pos = str.slice(0,21);

// var str = "Please locate where 'locate' occurs!"
// var pos = str.slice(-15);


// var str = "Please locate where 'locate' occurs!"
// var pos = str.substr(5,10);

// var str = "Apple, Banana, Kiwi";
// // var res = str.substr(-4);

// var str = "Please visit Microsoft!";
// var n = str.replace("Microsoft", "W3Schools");


// // regular expressions
// var str = "Please locate where 'locate' occurs";
// var pos = str.replace(/ /g, "_");

// document.getElementById('div1').innerHTML = pos;

// var text1 = "Hello" + " " + "World";
// var text2 = "Hello".concat(" ", "World");

// document.write(text1 + " <br>");
// document.write(text2);


// var str = "                           Hello World";

// document.write(str.trim());

// var str = " Hello World";
// var test2 = "abdulhadi,safi ,abdu, haha";
// var test3 = test2.split(',');
// document.write(test3);

// var str = "Hello World";

// document.write(str[0]);

// JavaScript Arrays 
// JavaScript arrays are used to store multiple values in a single variable.


// var array = ["ali", "Hassan", "taghi"];

// var cars = new Array("Saab", "Volvo", "BMW");
// var array2 = new Array("this is also new Array");



// function test(){
//     document.getElementById('div1').innerHTML = array2;
// }



// var cars = new Array( "volvo", "BMW");
// cars.push("Audi");


// // The pop() method removes the last element from an array
// var cars = new Array( "volvo", "BMW");
// cars.pop();


// var fruits = ["Banana", "Orange"," Apple", "Mango"];
// fruits[fruits.length] = "Kiwi";
// function test(){
//     document.getElementById('div1').innerHTML = fruits;
// }


// to delete
// var fruits = ["Banana", "Orange"," Apple", "Mango"];
// delete fruits[0];
// function test(){
//     document.getElementById('div1').innerHTML = fruits;
// }

// var fruits = ["Banana", "Orange"," Apple", "Mango"];
// fruits.splice(0, 2, "Lemon", "Kiwi")
// function test(){
//     document.getElementById('div1').innerHTML = fruits;
// }

// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var MyChildren = myGirls.concat(myBoys);


// var cars = new Array("Fiat","Volvo", "BMW");
// var arr2 = cars.slice(2);

// var fruits = ["Banana","Orange", "Apple", "Mango"];
// fruits.sort();

// let x = 123;
// x.toString();

// function test(){
//     document.getElementById('div1').innerHTML = x;
// }

// var a = ["Rahul", "Karan", "Aman", "Neha"];

// a.forEach(function(value, index){
// // document.write(value + "<br>");
// document.write(index +  " : " + value + "<br>");
// });

// const numbers = [45, 4, 5, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);
// document.write(txt);

// function myFunction(value, index, array) {
 
//    txt += value + "<br>";
   
// }

// let x = 123;
// x.toString();

// function test(){
//     document.getElementById('div1').innerHTML = x;
// }

// var d = new Date();
// function test(){
//     document.getElementById('div1').innerHTML = d;
// }
// var d = new Date();
// var m = d.getFullYear()
// var d = new Date();
// // var m = d.getDay();
// var days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
// function test(){
//     // document.getElementById('div1').innerHTML = d.getFullYear();
//     // document.getElementById('div1').innerHTML = m;
//     document.getElementById('div1').innerHTML = days[d.getDay()];
// }

// let a = ['Ahmad', 'mahmood', 69, 'karim'];

// a.forEach(function(index,value){
// document.write(index + " <br>" + value);
// })

 



// var d = new Date();
// function test(){
//     document.getElementById('div1').innerHTML = d;
// }






// var d = new Date();
// d.setFullYear(2022);
// function test(){
//     document.getElementById('div1').innerHTML = d.getFullYear();
// }

var d = new Date();
d.setFullYear(2022);
function test(){
    document.getElementById('div1').innerHTML = d.getFullYear();
}

