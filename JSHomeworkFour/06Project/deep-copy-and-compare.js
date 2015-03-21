function compareObjects(fst, snd){
    var check = (fst == snd);
    console.log('a == b --> ' + check);
}

function clone(original){
    var cloneVariable = JSON.parse(JSON.stringify( original ));
    return cloneVariable;
}

var a = {name: 'Pesho', age: 21} ;
var b = a; // not a deep copy
var c = clone(a);
console.log('Deep copy:')
compareObjects(a, c);
console.log('Not a deep copy:')
compareObjects(a, b);
//------------------------------------------------------------------
console.log(a); // if you change a, only b will be affected.
console.log(b); // if you change b , a will change too.
console.log(c); // if you change the deep copy c, a will not change.
