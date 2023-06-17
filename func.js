// document.getElementById("new2").style.alignSelf = "end";
function calllost() {
  document.getElementById("but1").innerHTML = "customer service";

  var news = document.createElement("button");
  news.innerHTML = "whatsapp";
  news.setAttribute("id", "butt");
  news.setAttribute("onclick", "f2()");
  document.getElementById("but1").appendChild(news);

  var neww = document.createElement("button");
  neww.innerHTML = "call";
  neww.setAttribute("id", "buttt");
  neww.setAttribute("onclick", "f1()");
  document.getElementById("but1").appendChild(neww);

  document.getElementById("but1").style.color = "white";
  document.getElementById("but1").style.fontSize = "7vw";
  document.getElementById("but1").style.width = "fit-content";

  document.getElementById("span").remove();
  // document.getElementById("butt1").style.height = "2vw";
  // document.getElementById("butt1").style.height = "18vw";
}

function f1() {
  window.open("tel:01022276020");
}
function f2() {
  window.open("https://wa.me/201022276020");
}

function callsec() {
  // var y = document.createElement("div");
  // y.setAttribute("id", "new2");
  // document.getElementById("but2").appendChild(y);

  document.getElementById("but2").innerHTML = "Security";

  var news = document.createElement("button");
  news.innerHTML = "whatsapp";
  news.setAttribute("id", "butt");
  news.setAttribute("onclick", "f12()");
  document.getElementById("but2").appendChild(news);

  var neww = document.createElement("button");
  neww.innerHTML = "call";
  neww.setAttribute("id", "buttt");
  neww.setAttribute("onclick", "f11()");
  document.getElementById("but2").appendChild(neww);

  document.getElementById("but2").style.color = "white";
  document.getElementById("but2").style.fontSize = "7vw";
  document.getElementById("main").style.alignItems = "top";
  document.getElementById("but2").style.width = "fit-content";
  document.getElementById("but2").style.width = "fit-content";
  document.getElementById("main").style.justifyContent = "space-around";
  document.getElementById("butt").style.justifyContent = "center";
  document.getElementById("butt").style.alignItems = "center";

  // var x = document.createElement("div");
  // x.setAttribute("id", "imgg");
  // document.getElementById("but2").appendChild(x);

  // document.getElementById("imgg").appendChild(document.getElementById("img"));

  document.getElementById("spann").remove();
  // document.getElementById("news2").remove();
}
function f11() {
  window.open("tel:01224113999");
}
function f12() {
  window.open("https://wa.me/201224113999");
}
