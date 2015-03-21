function solve(input){
    //var maxMinNum = [Number.MIN_VALUE, Number.MAX_VALUE];
    var allNums = new Array();
    var mostFrequent = {value: Number.MIN_VALUE, counter : 0};
    var current;
    for(var cnt = 0; cnt < input.length; cnt++)
    {
        if(!isNaN(input[cnt])) {
            allNums.push(input[cnt]);
            //maxMinNum[0] = Math.max(maxMinNum[0], input[cnt]);
            //maxMinNum[1] = Math.min(maxMinNum[1], input[cnt]);
        }
    }
    allNums.sort(function(a, b){return b-a});
    for(var cnt = 0; cnt < allNums.length; cnt++){
        current = {value: allNums[cnt], counter : 1}
        for(var secCnt = cnt + 1; secCnt < allNums.length; secCnt++){
            if(allNums[secCnt] === current.value){
                current.counter += 1;
            }
        }
        if(current.counter > mostFrequent.counter){
            mostFrequent.value = current.value;
            mostFrequent.counter = current.counter;
        }
    }
    console.log('Min number: ' + allNums[allNums.length - 1]);//+ maxMinNum[1]);
    console.log('Max number: ' + allNums[0]); //+ maxMinNum[0]);
    console.log('Most frequent number: ' + mostFrequent.value);
    console.log(allNums);
}

var x = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
solve(x);
