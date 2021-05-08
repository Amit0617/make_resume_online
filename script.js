function openform1() {
  document.getElementById("expform").style.display = block;
}
function openform2() {
  document.getElementById("eduform").style.display = "block";
}
function openform3() {
  document.getElementById("skillform").style.display = "block";
}
function openform4() {
  document.getElementById("cform").style.display = "block";
}
function closeform1() {
  document.getElementById("expform").style.display = "none";
}
function closeform2() {
  document.getElementById("eduform").style.display = "none";
}
function closeform3() {
  document.getElementById("skillform").style.display = "none";
}
function closeform4() {
  document.getElementById("cform").style.display = "none";
}
function add1() {
  var wy = document.createElement("p");
  var on = document.createElement("p");
  var e = document.createElement("p");
  wy.innerHTMl = document.getElementById("WY").value;
  on.innerHTML = document.getElementById("ON").value;
  e.innerHTML = document.getElementById("e").value;
  document.body.appendChild(wy);
  document.body.appendChild(on);
  document.body.appendChild(e);
}
function add2() {
  var y = document.createElement("p");
  var c = document.createElement("p");
  var o = document.createElement("p");
  y.innerHTMl = document.getElementById("Y").value;
  c.innerHTML = document.getElementById("C").value;
  o.innerHTML = document.getElementById("O").value;
  document.body.appendChild(y);
  document.body.appendChild(c);
  document.body.appendChild(o);
}
function add3() {
  var s = document.createElement("p");
  s.innerHTMl = document.getElementById("S").value;
  document.body.appendChild(s);
}
function add4() {
  var con = document.createElement("p");
  con.innerHTMl = document.getElementById("cont").value;
  document.body.appendChild(con);
}

