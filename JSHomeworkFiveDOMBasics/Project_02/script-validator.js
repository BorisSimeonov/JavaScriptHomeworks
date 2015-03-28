function checkTheEmail(value){
    if(value.length < 1){
        document.getElementById('checkField').style.backgroundColor = 'white';
    }else{
        var regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
        if(regEx.test(value)){
            document.getElementById('checkField').style.backgroundColor = 'green';
        }else{
            document.getElementById('checkField').style.backgroundColor = 'red';
        }
    }
}

function validate(){
    var input = '';
    input = document.getElementById('EmailInput').value;
    document.getElementById('checkField').innerHTML = input;
    checkTheEmail(input);
}

function removeText(){
    document.getElementById('checkField').innerHTML = '';
}