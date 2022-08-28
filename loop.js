/*let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
       friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);
// The answer wil be 10 

let i = 0;
while (i<3){ //shows 0, then 1, then 2 
       alert(i);
       i++;
}


let i = 0;
while (i<10) {
       alert(i);
       i++;
}

let i = 3;
while(i){
       //when i becomes 0, the condition become falsy, and the loop stops 
       alert(i);
       i--;
}

let i = 0;
do{
       alert(i);
       i++;
} while(i<3);

for (let i = 0; i<3; i++){
       alert(i); //0, 1, 2
}

let i = 0;
for (i = 0; i <3; i++){
       alert(i); //0, 1, 2
}
alert(i); //visible, because declared outsid of the loop

let i = 0; //we have i already declared and assigned 
for (; i < 3; i++) { // no need for "begin"
       alert(i); //0, 1, 2
}

let sum = 0;
while (true) {
       let value = +prompt ("Enter a number", '');
       if (! value) break; //(*)
       sum += value;
}
alert('sum: ' + sum);
*/
// let i = 3;
// alert(i--); //show 3, decreases i to 2
// alert(i--); //show 2, descreases i to 1
// alert(i--); // show 1, descreases i to 0
// done, while (i) check stops the loop

// for (let i = 1; i <= 10; i++) {
//     //     console.log(i)
//     console.log(` 2 x ${i} = ${2 * i }`);
// }


// Function

// function mulTable() {

//     for (let i = 1; i <= 10; i++) {
//         //     console.log(i)
//         console.log(` 2 x ${i} = ${3 * i }`);
//     }
// }
// mulTable();


// function mulTable(num) {
//     for (i = 0; i <= 10; i++) {
//         //     console.log(i)
//         console.log(` 2 x ${num} = ${num * i }`);
//     }
// }
// mulTable(2);

// mulTable(3);


// let multiTables = (num) => {
//     for (i = 0; i <= 10; i++) {
//         console.log(` 2 x ${num} = ${num * i }`);
//     }
// }
// multiTables(2);
// multiTables(3);

function addiction(n) {
    total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addiction(2));