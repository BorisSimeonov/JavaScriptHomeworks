function calculate(id){
    var expression = document.getElementById(id).value;
    var result;
    try{
        result = eval(expression);
    }catch(e){
        result = "Invalid input!";
    }
    document.getElementById("result").innerHTML = result;
}