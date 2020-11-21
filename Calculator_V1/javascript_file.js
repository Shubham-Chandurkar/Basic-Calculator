var temp = 0;
var counter = 0;
var counterpro = 0;

function check() {
  counter = counter + 1;
}

function checkpro() {
  if (counter > 0) {
    counterpro = counterpro + 1;
  }
}

function clearOutput() {
  document.getElementById("output").innerHTML = "0";
  counter = 0;
  counterpro = 0;
}

function removezero() {
  var value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
  if (temp == 1) {
    value = " ";
    document.getElementById("output").innerHTML = value;
    temp = 0;
  }
}

function fordisplay(myvalue) {
  removezero();
  document.getElementById("output").innerHTML += myvalue;
}

function solve() {
  removezero();

  if (counterpro > 0) {
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById("output").innerHTML = solved;
    temp = 1;
  } else {
    alert("Please enter the valid equation");
  }
}
