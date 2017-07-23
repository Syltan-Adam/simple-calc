//---------\\
var un = 0;//
var ph = 0;//
var inside = 0;//
//---------\\
var n1 = 0;
var a1 = "";
var n2 = 0;
var a2 = "";
var n3 = 0;
var a3 = "";
var n4 = 0;



function printnum(num) {
if (un == 0) {
      ph = num;
      un ++;
  } else if (un == 1) {
    ph *= 10;
    ph += num;
  }
  console.log(ph + " - " + un);

  //Thing.
  if(n1 == 0) {document.getElementById('num').innerHTML = ph}
  else if (n2 == 0) {document.getElementById('num').innerHTML = n1 + " " + a1 + " " + ph}
  else if (n3 == 0) {document.getElementById('num').innerHTML = n1 + " " + a1 + " " + n2 + " " + a2 + " " + ph}
  else if (n4 == 0) {document.getElementById('num').innerHTML = n1 + " " + a1 + " " + n2 + " " + a2 + " " + n3 + " " + a3 + " " + ph}

function add() {
  if(n1 == 0) {
    n1 = ph;
    a1 = "+";
  }else if (n2 == 0) {
    n2 = ph;
    a2 = "+";
  }else if (n3 == 0) {
    n3 = ph;
    a2 = "+";
  }else if (n4 == 0) {
    n4 = ph;
    a3 = "+";
  }else {console.error("I can't fit anymore in! Please press '='!")}
  stat();
}

function sub() {
  if(n1 == 0) {
    n1 = ph;
    a1 = "-";
  }else if (n2 == 0) {
    n2 = ph;
    a2 = "-";
  }else if (n3 == 0) {
    n3 = ph;
    a2 = "-";
  }else if (n4 == 0) {
    n4 = ph;
    a3 = "-";
  }else {console.error("I can't fit anymore in! Please press '='!")}
  stat();
}

function mut() {
  if(n1 == 0) {
    n1 = ph;
    a1 = "x";
  }else if (n2 == 0) {
    n2 = ph;
    a2 = "x";
  }else if (n3 == 0) {
    n3 = ph;
    a2 = "x";
  }else if (n4 == 0) {
    n4 = ph;
    a3 = "x";
  }else {console.error("I can't fit anymore in! Please press '='!")}
  stat();
}

function div() {
  if(n1 == 0) {
    n1 = ph;
    a1 = "/";
  }else if (n2 == 0) {
    n2 = ph;
    a2 = "/";
  }else if (n3 == 0) {
    n3 = ph;
    a2 = "/";
  }else if (n4 == 0) {
    n4 = ph;
    a3 = "/";
  }else {console.error("I can't fit anymore in! Please press '='!")}
  stat();
}

function equ() {
 //DMAS
var answer;
if (ph > 0) {
  if (n2 == 0) {n2 = ph; ph = 0}
  else if (n3 == 0) {n3 = ph; ph = 0}
  else if (n4 == 0) {n4 = ph; ph = 0}
  else {console.warn("Shit.")}
} else {console.log("No placeholder.")}
 //Divide any numbers
 if (a1 == "/") {
   n1 /= n2;
   n2 = 0;
 }
 if (a2 == "/") {
   n1 /= n3;
   n3 = 0;
 }
 if (a3 == "/") {
   n1 /= n4;
   n4 = 0;
 }
 //Multiply
 if (a1 == "x") {
   n1 *= n2;
   n2 = 0;
 }
 if (a2 == "x") {
   n1 *= n3;
   n3 = 0;
 }
 if (a3 == "x") {
   n1 *= n4;
   n4 = 0;
 }
 //add
 if (a1 == "+") {
   n1 += n2;
   n2 = 0;
 }
 if (a2 == "+") {
   n1 += n3;
   n3 = 0;
 }
 if (a3 == "+") {
   n1 += n4;
   n4 = 0;
 }
 //subtract
 if (a1 == "-") {
   n1 -= n2;
   n2 = 0;
 }
 if (a2 == "-") {
   n1 -= n3;
   n3 = 0;
 }
 if (a3 == "-") {
   n1 -= n4;
   n4 = 0;
 }
 console.log("The answer is " + n1);
 document.getElementById('num').innerHTML = "The answer is: " + n1;
 inside = 1;
 n1 = 0;
}

function stat() {
    console.log("Here are the stats:");
    console.log(n1 + " " + a1 + " " + n2 + " " + a2 + " " + n3 + " " + a3 + " " + n4);
    un = 0;
    ph = 0;
    if (inside == 1) {document.getElementById('num').innerHTML = "&nbsp;"; inside = 0;}
}

function clr() {
  un = 0;
  ph = 0;
  n1 = 0;
  a1 = "";
  n2 = 0;
  a2 = "";
  n3 = 0;
  a3 = "";
  n4 = 0;
  document.getElementById('num').innerHTML = "&nbsp;"; inside = 0;
  console.log("Cleared.");
  stat();
}
