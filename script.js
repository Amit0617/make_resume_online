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
  var con = document.createElement("p");
  con.innerHTMl = document.getElementById("cont").value;
  document.body.appendChild(con);
}

