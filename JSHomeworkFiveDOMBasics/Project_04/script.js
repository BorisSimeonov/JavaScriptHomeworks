
var HTMLGen = { createParagraph: function (id, value){
        var par = document.createElement("p");
        var text = document.createTextNode(value);
        par.appendChild(text);
        document.getElementById(id).appendChild(par);
    },

    createDiv: function(id, cName){
        var newDiv = document.createElement("div");
        newDiv.className = cName;
        var someValue = document.createTextNode('Some text child inside the div');
        newDiv.appendChild(someValue);
        document.getElementById(id).appendChild(newDiv);
    },

    createLink: function(id, name, href){
        var newLink = document.createElement("a");
        newLink.href = href;
        var textValue = document.createTextNode(name);
        newLink.appendChild(textValue);
        document.getElementById(id).appendChild(newLink);
    }
}

HTMLGen.createParagraph('wrapper', 'Soft Uni');
HTMLGen.createDiv('wrapper', 'section');
HTMLGen.createLink('book', 'C# basics book', 'http://www.introprogramming.info/');