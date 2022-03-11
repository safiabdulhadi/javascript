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
 

var saw_tahnks = ()=> console.log('merci');
saw_tahnks()
saw_tahnks()

var func = ()=> {
    console.log("functions");
};
func()

var table_multiplication = () => {
    for (let index = 1; index <11; index++){
        console.log(` 3 x ${index} = ${index*3}`);
    }
}
table_multiplication()
