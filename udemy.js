// const para = document.querySelector('p');
// const para = document.querySelector('body > h1');

// console.log(para);


// const paras = document.querySelectorAll('p');
// paras.forEach(para =>{
//     console.log(para);
// });
// console.log(paras[2]);

// const paras = document.querySelectorAll("p");
// const errors = document.querySelectorAll(".error");

// console.log(errors);
// const title = document.getElementById('page-title');
// console.log(title);

// const errors = document.getElementsByClassName('error');
// console.log(errors);
// console.log(errors[0]);


// const paras = document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[1]);




// const para = document.querySelector('p');

// // console.log(para.innerText);
// // para.innerText = "add new text ";

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text';
// })

// const content = document.querySelector('.content');
// // console.log(content.innerHTML);

// // content.innerHTML += '<h2> This is a new h2 </h2>';

// const people = ['mario', 'luigi','yoshi'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.faceboook.com');
// link.innerText = 'Facebook';


// const messg = document.querySelector('p');
// console.log(messg.getAttribute('class'));
// messg.setAttribute('class', 'success');
// messg.setAttribute('style', 'color:green');



// const title = document.querySelector('h1');
// // title.setAttribute('style', 'margin:50px;');
// // console.log(title);

// console.log(title.style);
// console.log(title.style.color);
// title.style.margin = '50px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';
// title.style.margin = '';


// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

// const content = document.querySelectorAll('p');

// content.forEach(p => {
//     if(p.textContent.includes('error')){
//         p.classList.add('error')
//     }
//     if(p.innerText.includes('success')){
//         p.classList.add('success')
//     }
// });


// const title = document.querySelector('.title');
// title.classList.toggle('test');
// title.classList.toggle('test');



// var age = 14; 
// var fruits = ['orange'];
// console.log(fruits)


//Les fonctions en JavaScript 
 

// var saw_tahnks = ()=> console.log('merci');
// saw_tahnks()
// saw_tahnks()

// var func = ()=> {
//     console.log("functions");
// };
// func()

// var table_multiplication = () => {
// //     for (let index = 1; index <11; index++){
// //         console.log(` 3 x ${index} = ${index*3}`);
// //     }
// // }
// // table_multiplication()


// // let user = {
// //     name: 'crystal',
// //     age:30,
// //     email: 'crystal@thenetnigja.com,',
// //     location: 'berlin',
// //     blogs: ["why mas & cheese rules , 10 thing to make with marmite"]
// // };

// // console.log(user);
// // console.log(user.name);
// // // user.age = 35;
// // console.log(user.age);

// // console.log(user['name']);
 
// // user['name'] = 'chu-li';
// // console.log(user['name']);

// // console.log(typeof user);



// let user = {
//     name: 'crystal',
//     age:30,
//     email: 'crystal@thenetnigja.com,',
//     location: 'berlin',
//     blogs: ["why mas & cheese rules , 10 thing to make with marmite"],
//     login: function (){
//         console.log('the user logged in');
//     },
//     logout: function() {
//         console.log('the user logged out');
//     },
//     logBlogs: function() {
//         // console.log(this.blogs);
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//             console.log(blog);
//         })
//     }
// };

// // user.login();


// // const name = 'mario';
// // name.toUpperCase();
// // console.log(name.toUpperCase());
// // user.logout();


// // user.logBlogs();
// user.logBlogs();
// console.log(this);



// 'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if(passTest) hasDriversLicense = true;
// if(hasDriversLicense) console.log('I can drive :D');



// function logger() {
//     console.log('My name is Abdulhadi');
// }

// // Calling / running / invoking Function / executing
// logger();
// logger();



// function b() {
// console.log(myVar);
// }

// function a() {
//     var myVAr = 2;
//     b();
// }

// var myVar = 1;
// a();
// b();



// let val;

// // Number to string
// val = String(555);
// val = String(4+4);

// //Bool to string
// val = String(true);

// // Date to string 
// val = String(new Date());

// // Array to string
// val = String([1,2,3,4,5]);
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2]);

// val = parseInt('100');
// val = parseFloat('100.30');


// //Output 

// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));



// const val1 = String(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console.log(typeof sum)

