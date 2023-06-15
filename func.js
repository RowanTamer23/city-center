function calllost() {
  document.getElementById("new11").innerHTML = "lost and found";
  document.getElementById("butt1").remove();

  var news = document.createElement("button");
  news.innerHTML = "whatsapp";
  news.setAttribute("id", "butt");
  news.setAttribute("onclick", "f2()");
  document.getElementById("new1").appendChild(news);

  var neww = document.createElement("button");
  neww.innerHTML = "call";
  neww.setAttribute("id", "butt");
  neww.setAttribute("onclick", "f1()");
  document.getElementById("new1").appendChild(neww);
}

function f1() {
  window.open("tel:01022276020");
}
function f2() {
  window.open("https://wa.me/201022276020");
}

function callsec() {
  document.getElementById("new22").innerHTML = "security control";
  var news = document.createElement("button");
  news.innerHTML = "whatsapp";
  news.setAttribute("id", "butt");
  news.setAttribute("onclick", "f12()");
  document.getElementById("new2").appendChild(news);

  var neww = document.createElement("button");
  neww.innerHTML = "call";
  neww.setAttribute("id", "butt");
  neww.setAttribute("onclick", "f11()");
  document.getElementById("new2").appendChild(neww);

  document.getElementById("butt2").remove();
}
function f11() {
  window.open("tel:01224113999");
}
function f12() {
  window.open("https://wa.me/201224113999");
}
