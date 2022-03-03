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

const content = document.querySelector('.content');
// console.log(content.innerHTML);

content.innerHTML += '<h2> This is a new h2 </h2>';