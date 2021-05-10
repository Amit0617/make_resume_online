function openForm1() {
  document.getElementById("expform").style.display = "block";
}
function openForm2() {
  document.getElementById("eduform").style.display = "block";
}
function openForm3() {
  document.getElementById("skillform").style.display = "block";
}
function openForm4() {
  document.getElementById("cform").style.display = "block";
}
function closeForm1() {
  document.getElementById("expform").style.display = "none";
}
function closeForm2() {
  document.getElementById("eduform").style.display = "none";
}
function closeForm3() {
  document.getElementById("skillform").style.display = "none";
}
function closeForm4() {
  document.getElementById("cform").style.display = "none";
}
function add1() {
  var wy = document.createElement("p");
  var on = document.createElement("strong");
  var e = document.createElement("p");
  wy.innerHTMl = document.getElementById("WY").value;
  on.innerHTML = document.getElementById("ON").value;
  e.innerHTML = document.getElementById("E").value;
  document.body.appendChild(wy);
  document.body.appendChild(on);
  document.body.appendChild(e);
}
function add2() {
  var y = document.createElement("p");
  var c = document.createElement("strong");
  var o = document.createElement("p");
  y.innerHTMl = document.getElementById("Y").value;
  c.innerHTML = document.getElementById("C").value;
  o.innerHTML = document.getElementById("O").value;
  document.body.appendChild(y);
  document.body.appendChild(c);
  document.body.appendChild(o);
}
function add3() {
  var s = document.createElement("li");
  s.innerHTMl = document.getElementById("S").value;
  document.body.appendChild(s);
}
function add4() {
  var con = document.createElement("a");
  con.innerHTMl = document.getElementById("cont").value;
  document.body.appendChild(con);
}ad
document.getElementById("edit").contentEditable='true';

function addline() {
  var line = document.createElement("p");
  line.innerHTML = document.getElementById("line").value;
  document.body.appendChild(line);
}

function adddate() {
  var date = document.createElement("p");
  date.innerHTML = document.getElementById("date");
  document.body.appendChild(date);
}

function addbold() {
  var bold = document.createElement("strong");
  bold.innerHTML = document.getElementById("bold");
  document.body.appendChild(bold);
}

function addlink() {
  var a = document.createElement("a");
  var link_text = document.createTextNode("");
  link_text.innerHTML = document.getElementById("link_text").value;
  a.title = link_text.innerHTML;
  a.href = document.getElementById("link_in").value;
  document.body.appendChild(a);
}

function openLinkForm() {
  document.getElementById("link").style.display = "block";
}

function Delete_buttons() {
  var butt = document.querySelector("buttons");
  butt.innerHTML = "";
}
