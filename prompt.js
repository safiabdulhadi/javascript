/*let name = prompt("What is your name ?", "");
alert(name);

'use strict'
let name = prompt("What is your name ?", "");
alert(name);

function myFunction (){ 
var person = prompt ("<Please enter your name", "Safi abdulhadi" );

if (person != null) {
       document.getElementById("demo").innerHTML = 
       "Hello " + person + "! How are you today?";
}
}

function myFunction (){
       var person = prompt ("Please enter your name", "abdul hadi");
       if (person != null){ 
              document.getElementById("demo").interHTML = 
              "Hello " + person + "! How are you today?";
              
       }
}
*/

function myFunction(){
       var text;
       var favDrink = prompt ("What's your favorite cocktail drink?",
       "Daiquiri");
       switch(favDrink){
              case "Martini":
                     text = "Excellent choice. Martini is good for your soul.";
                     break;
                     case " Daiquiri":
                            text = "Daiquiri is my favorite too!";
                            break;
                            case "Cosmopolitan":
                                   text = "Really? Are you sure the Cosmoplitan is your favorite?";
                                   break;
                                   default:
                                          text = "I have never heard of that one..";
       }
       document.getElementById("demo").interHTML = text;

}

