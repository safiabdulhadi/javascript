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

let contact = {
    firstName : 'abdulhadi',
    lastName : 'Safi',
    phoneNumber : 067859569,
    age : 27,
    fullName : function (){
        return this.firstName + ' ' + this.lastName
    }
}

// document.getElementById('div1').innerHTML = contact.firstName + " " + contact.lastName;
document.getElementById('div1').innerHTML = contact.fullName();
