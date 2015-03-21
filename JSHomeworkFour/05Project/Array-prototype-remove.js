Array.prototype.RemoveItem = function(input){
    for(var cnt = 0; cnt<this.length; cnt++){
        if(this[cnt] === input){
            this.splice(cnt, 1);
            cnt--;
        }
    }
    return this;
}

var arr = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
console.log(arr.RemoveItem(1));
arr = ['hi', 'bye', 'hello' ];
console.log(arr.RemoveItem('bye'));
