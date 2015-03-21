function getD(a , b , c){
    var d = Math.pow(b, 2) - ((4*a)*c);
    return d;
}

function getOnlyRoot(a, b){
    var root = (-b)/(2*a);
    return root;
}

function getTwoRoots(a, b, d){
    var roots = [];
    roots[0] = ((-b) + Math.sqrt(d))/(2*a);
    roots[1] = ((-b) - Math.sqrt(d))/(2*a);
    return roots;
}

function calculate(){
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    if((isNaN(a) || isNaN(b) || isNaN(c)) ||
        (a == "" || b == "" || c == "")){
        document.getElementById("outputData").innerHTML = "Invalid Input !";
    }else
    {
        var d = getD(a, b, c);
        document.getElementById("outputData").innerHTML = d;
        if(d<0){
            document.getElementById("outputData").innerHTML = "No real roots.";
        }
        else if(d == 0){
            var root = getOnlyRoot(a, b);
            document.getElementById("outputData").innerHTML = "x = " + root;
        }
        else if(d > 0){
            var root = [];
            root = getTwoRoots(a, b, d);
            document.getElementById("outputData").innerHTML = "x1 = " + root[0] + ";  x2 = " + root[1];
        }
    }
}
