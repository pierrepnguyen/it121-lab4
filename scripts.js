// var para = document.createElement("p");
// $("main").appendChild(node);
// var btn1 = document.createTextNode("You have selected insert!");
var btn1 = "<p>You have selected insert!</p>"
var btn2 = document.createTextNode("You have selected append!");
var btn3 = document.createTextNode("You have selected remove!");
var btn4 = "<p>You have selected replace! Please give us 100% ❤️</p>"

function append(){
  $("#main").append(btn2);
}

function insert(){
  $(btn1).insertBefore("#main");
}

function remove(){
  $("#main").remove();
}

function replace(){
  $("#main").replaceWith(btn4);
}