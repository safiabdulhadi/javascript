/*

function sayHi(){
       alert("Hello");
}
alert(sayHi);

function ask(question, yes , no){
       if (confirm(question)) yes() 
       else no();
}
function showOk() {
       alert("You agreed.");

}
function showCancel () {
       alert ("You canceled the execution.");
}
// usage: functions showOk, showCancel are passed as arguments to ask 
ask ("Do you agree?", showOk, showCancel);

// function Declaration
function sum(a, b){
       return a + b;
}
*/
sayHi ("John") ; // Hello, John 

function sayHi (name) {
       alert ('Hello, ${name}' );
}
