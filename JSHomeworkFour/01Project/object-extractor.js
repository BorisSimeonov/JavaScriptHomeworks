function getAllObjects(inValue){
    for(var cnt = 0; cnt < inValue.length; cnt++){
        if(inValue[cnt] instanceof Object && !(inValue[cnt] instanceof Array) &&
            !(inValue[cnt] instanceof Date)){
            continue;
        }else{
            inValue.splice(cnt, 1);
            cnt--;
        }
    }
    return inValue;
}

var input =[
    true,
    null,
    Date.now(),
    "Pesho",
    4,
    4.21,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
];

console.log(getAllObjects(input));
