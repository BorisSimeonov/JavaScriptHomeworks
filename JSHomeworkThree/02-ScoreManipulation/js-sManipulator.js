function solve(input){
    for(var cnt = 0; cnt < input.length; cnt++){
        input[cnt] = Number((input[cnt]*0.8).toFixed(1));
        if(input[cnt] > 400 || input[cnt] < 0){
            input.splice(cnt, 1);
            cnt--;
            continue;
        }
    }
    input.sort(function(a,b){return a-b})
    console.log(input);
}
var incVariable = [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
solve(incVariable);
