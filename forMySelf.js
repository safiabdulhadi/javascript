// const today = new Data();
// const day = today.getDay();
// const daylist = ["Sunday", "Monday", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(`Today is : ${dayList [day] }. `);
// let hours = today.geHours():
// const minute = today.getMinutes();
// const second = today.getSeconds();
// let prepand = (hours >= 12)? "PM" : "AM";
// hour = (hour >= 12)? hour - 12: hour;
// if (hour===0 && prepand==='PM')
// {
// if (minute===0 && second===0)
// { 
// hour=12;
// prepand=' Noon';
// } 
// else
// { 
// hour=12;
// prepand=' PM';
// } 
// } 
// if (hour===0 && prepand===' AM ') 
// { 
// if (minute===0 && second===0)
// { 
// hour=12;
// prepand=' Midnight';
// } 
// else
// { 
// hour=12;
// prepand=' AM';
// } 
// } 
// console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);



// const friendsAtYourParty = 0;

// if (friendsAtYourParty ===0) {
//        console.log("cool , now I have a lot of nachos to myself.");
// } else if (friendsAtYourParty<= 4) {
//        console.log("perfect amount to play some Marion Lart.");
// } else {
//        console.log("woooooo turn on the dance music!");
// }


// let myBook = {
//     title: 'The Story of Tau',
//     author: 'Will Alexander',
//     NumberOfPages: 250,
//     isAvailable: true
// };
// console.log(typeof myBook);

// let myBook = {
//     title: 'The Story of Tau',
//     author: 'Will Alexander',
//     numberOfPages: 250,
//     isAailable: true 
// };

// let bookTitle = myBook.title; // The Story of Tau
// let bookPages = myBook.numberOfPages //250

// // console.log(bookTitle);

// let num = 6 ;
// console.log(typeof num + " " + num)

// let num = Number("123");
// console.log(typeof num);
// let myBook = {
//     title: 'The Story of Tau',
//     author: 'Will Alexander',
//     numberOfPages: 250,
//     isAvailable: true
// };
// // console.log(myBook);

// let positiveInterger = 42;
// let negativeInterger = 43;
// let largeDecimal = 343.33433;
// console.log(typeof positiveInterger);
// console.log(typeof negativeInterger);
// console.log(typeof largeDecimal);
// console.log(positiveInterger);

// let x = 20;

// if(x > 15) {
//     document.write("X is Greater")
// }
// else{
//     document.write("X is Smaller")
// }
// let arr1 = ['Ahmad', 'Karam', 'Javad' , 'Abdulhadi'];
// let arr2 = [90, 34, 45, 100,];
// let result = arr1.concat(arr2);
// document.write(result);

// let arr1 = ['Ahmad', 'Karam', 'Javad' , 'Abdulhadi'];
// let arr2 = [90, 34, 45, 100,];
// let result = arr1.join(" - ");
// document.write(result);

// let a = ["Rashid", "Ahmad", "Jan"];
// result = a.slice();

// document.write(result);


let a = ["Rashid", "Ahmad", "Jan"];
result = a.splice(1, 0, 'new Value');

document.write(a);