var person = prompt("Please enter your name", "Harry Potter");

if (person == null || person == "") {
  txt = "User cancelled the prompt.";
} else {
  txt = "Hello " + person + "! How are you today?";
}

function myfunction(){
document.getElementById("demo").innerHTML = "This is my new text";
}

document.getElementById("demo").style.color = "cornflowerblue";

function badNameFunction(){
document.getElementById("demo").innerHTML = "Anime Fandom United";
}
