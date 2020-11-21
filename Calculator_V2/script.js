let realvalue = "";

function clearme(){
document.getElementById("output").innerHTML = 0;
}

function removezero(){
let temp = document.getElementById("output").innerHTML;
if(temp=="0"){
    temp = "";
    document.getElementById("output").innerHTML = temp;
}
}

function createqu(value){
removezero();
document.getElementById("output").innerHTML += value;
realvalue += value;
}

function backone(){
realvalue = realvalue.slice(0,-1);
document.getElementById("output").innerHTML = realvalue;
if(realvalue== ""){
    document.getElementById("output").innerHTML = "0";
}
}

function calculate(){
    document.getElementById("output").innerHTML = eval(realvalue);
    realvalue = "";
}