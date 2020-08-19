function clearOutput() {
  document.getElementById("output").innerHTML = "0";
}

function removezero() {
  var value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
}

function fordisplay(myvalue) {
  removezero();
  document.getElementById("output").innerHTML += myvalue;
}

function solve() {
  removezero();
  var equation = document.getElementById("output").innerHTML;
  var solved = eval(equation);
  document.getElementById("output").innerHTML = solved;
}
