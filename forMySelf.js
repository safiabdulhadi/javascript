const today = new Data();
const day = today.getDay();
const daylist = ["Sunday", "Monday", " Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log(`Today is : ${dayList [day] }. `);
let hours = today.geHours():
const minute = today.getMinutes();
const second = today.getSeconds();
let prepand = (hours >= 12)? "PM" : "AM";
hour = (hour >= 12)? hour - 12: hour;
if (hour===0 && prepand==='PM')
{
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Noon';
} 
else
{ 
hour=12;
prepand=' PM';
} 
} 
if (hour===0 && prepand===' AM ') 
{ 
if (minute===0 && second===0)
{ 
hour=12;
prepand=' Midnight';
} 
else
{ 
hour=12;
prepand=' AM';
} 
} 
console.log(`Current Time : ${hour}${prepand} : ${minute} : ${second}`);














// const friendsAtYourParty = 0;

// if (friendsAtYourParty ===0) {
//        console.log("cool , now I have a lot of nachos to myself.");
// } else if (friendsAtYourParty<= 4) {
//        console.log("perfect amount to play some Marion Lart.");
// } else {
//        console.log("woooooo turn on the dance music!");
// }
