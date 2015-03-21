function replaceATag(str){
    var check = str.replace('<a', '[URL').replace('</a>', '[/URL]');
    var find = check.match(/\>\w+/);
    str = check.substring(0, find.index) + ']' + check.substring(find.index+1);
    return str;
}
var time = Date.now();
var text = '<ul>\n<li>\n<a href=http://softuni.bg>SoftUni</a>\n</li>\n</ul>';
text = replaceATag(text);
console.log(text);
console.log((Date.now() - time)/1000)