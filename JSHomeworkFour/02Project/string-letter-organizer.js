function sortLetters(inString, boolValue){
    inString = inString.split('');
    inString.sort(function(x,y){
    /*console.log( "comparing " + x + ",  " + y + " -> " + x.localeCompare(y)); console.log(inString);
    // - shows how the sort() algorithm works*/
        return x.localeCompare(y);}) //localeCompare is case insensitive!
    if(!boolValue){
        inString.reverse();
    }
    return inString.join('');
}

console.log('\'' + sortLetters('HelloWorld', true) + '\'');
console.log('\'' + sortLetters('HelloWorld', false) + '\'');

