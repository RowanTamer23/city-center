function calllost() {
  document.getElementById("new11").innerHTML = "lost and found";

  var news = document.createElement("button");
  news.innerHTML = "whatsapp";
  news.setAttribute("class", "butt");
  news.setAttribute("onclick", "f2()");
  document.getElementById("new1").appendChild(news);

  var neww = document.createElement("button");
  neww.innerHTML = "call";
  neww.setAttribute("class", "butt");
  neww.setAttribute("onclick", "f1()");
  document.getElementById("new1").appendChild(neww);

  document.getElementById("lost").remove();
}

function f1() {
  window.open("tel:01273722974");
}
function f2() {
  window.open("https://wa.me/201273722974");
}

function callsec() {
  document.getElementById("new22").innerHTML = "security control";
  var news = document.createElement("button");
  news.innerHTML = "whatsapp";
  news.setAttribute("class", "butt");
  news.setAttribute("onclick", "f12()");
  document.getElementById("new2").appendChild(news);

  var neww = document.createElement("button");
  neww.innerHTML = "call";
  neww.setAttribute("class", "butt");
  neww.setAttribute("onclick", "f11()");
  document.getElementById("new2").appendChild(neww);

  document.getElementById("security").remove();
}
function f11() {
  window.open("tel:01030160168");
}
function f12() {
  window.open("https://wa.me/201030160168");
}
