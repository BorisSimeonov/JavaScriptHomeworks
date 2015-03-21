function calculate(value){
    var area = Math.pow(value, 2) * Math.PI;
    return area;
}
function setValues(){
    var fst = 7;
    var snd = 1.5;
    var trd = 20;
    document.getElementById("fstP").innerHTML = calculate(fst);
    document.getElementById("secP").innerHTML = calculate(snd);
    document.getElementById("trdP").innerHTML = calculate(trd);
}
