function solve(inLine){
    inLine = inLine.sort(function(x,y){
        return x.name > y.name;
    })
    for(var cnt = 0; cnt < inLine.length; cnt++){
        inLine[cnt].score = Number((inLine[cnt].score*1.1).toFixed(1));
        if(inLine[cnt].score >= 100){
            inLine[cnt].hasPassed = true;
        }
        else
        {
            inLine.splice(cnt, 1);
            cnt--;
        }
    }
    console.log(inLine)
}

var inLine = [{'name' : 'Пешо','score' : 91},{
        'name' : 'Лилия','score' : 290},{
        'name' : 'Алекс','score' : 343},{
        'name' : 'Габриела','score' : 400},{
        'name' : 'Жичка','score' : 70}];
solve(inLine);




