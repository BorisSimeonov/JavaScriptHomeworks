function myFunction(id, value){
    var par = document.createElement("p");
    var text = document.createTextNode(value);
    par.appendChild(text);
    document.getElementById(id).appendChild(par);
    (function newMove(){
        var check = confirm('Make another paragraph?');
        if(check){
            myFunction(id, value);
        }else{
            document.getElementById(id).removeChild(
                document.getElementById(id).childNodes[ document.getElementById(id).childNodes.length - 1 ]
            );
            newMove();
        }
    })();
}

