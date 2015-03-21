var value = "O";
var counter = 0;

function changeSign(id){
    if(value == "O" && document.getElementById(id).innerHTML.length < 1){
        value = "X";
    }else if(value == "X" && document.getElementById(id).innerHTML.length < 1){
        value = "O";
    }
}

function changeColor(id){
    if(value == "X" && document.getElementById(id).innerHTML.length < 1){
        document.getElementById(id).style.color = "black";
        counter++;
    }else if(value == "O" && document.getElementById(id).innerHTML.length < 1){
        document.getElementById(id).style.color = "green";
        counter++;
    }
}

function changeResult(){
    document.getElementById("result").innerHTML = "RESULT";
}

function clearAll(){
    var cells = document.getElementsByClassName("cell");
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerHTML = "";
    }
    counter = 0;
    value = "O";
    setTimeout("changeResult()", 3000);
}


function checkAll(){
    var winningSign = "";
    //check rows
    if(document.getElementById("11").innerHTML == document.getElementById("12").innerHTML &&
        document.getElementById("11").innerHTML == document.getElementById("13").innerHTML &&
        document.getElementById("11").innerHTML != "" ){
        winningSign = document.getElementById("11").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    if(document.getElementById("21").innerHTML == document.getElementById("22").innerHTML &&
        document.getElementById("21").innerHTML == document.getElementById("23").innerHTML &&
        document.getElementById("21").innerHTML != "" ){
        winningSign = document.getElementById("21").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    if(document.getElementById("31").innerHTML == document.getElementById("32").innerHTML &&
        document.getElementById("31").innerHTML == document.getElementById("33").innerHTML &&
        document.getElementById("31").innerHTML != "" ){
        winningSign = document.getElementById("31").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    //check cols
    if(document.getElementById("11").innerHTML == document.getElementById("21").innerHTML &&
        document.getElementById("11").innerHTML == document.getElementById("31").innerHTML &&
        document.getElementById("11").innerHTML != "" ){
        winningSign = document.getElementById("11").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    if(document.getElementById("12").innerHTML == document.getElementById("22").innerHTML &&
        document.getElementById("12").innerHTML == document.getElementById("32").innerHTML &&
        document.getElementById("12").innerHTML != "" ){
        winningSign = document.getElementById("12").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    if(document.getElementById("13").innerHTML == document.getElementById("23").innerHTML &&
        document.getElementById("13").innerHTML == document.getElementById("33").innerHTML &&
        document.getElementById("13").innerHTML != "" ){
        winningSign = document.getElementById("13").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    //check diagonals
    if(document.getElementById("11").innerHTML == document.getElementById("22").innerHTML &&
        document.getElementById("11").innerHTML == document.getElementById("33").innerHTML &&
        document.getElementById("11").innerHTML != "" ){
        winningSign = document.getElementById("11").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
    if(document.getElementById("13").innerHTML == document.getElementById("22").innerHTML &&
        document.getElementById("13").innerHTML == document.getElementById("31").innerHTML &&
        document.getElementById("13").innerHTML != "" ){
        winningSign = document.getElementById("13").innerHTML;
        document.getElementById("result").innerHTML = winningSign + " WINS ! CONGRATULATIONS !"
        clearAll()
    }
}


function onClick(id){
    changeSign(id);
    changeColor(id);
    if(document.getElementById(id).innerHTML.length < 1){
        document.getElementById(id).innerHTML = value;
    }
    checkAll();
    if(counter >= 9){
        document.getElementById("result").innerHTML = "DRAW ! TRY AGAIN ;)";
        clearAll()
    }
}
