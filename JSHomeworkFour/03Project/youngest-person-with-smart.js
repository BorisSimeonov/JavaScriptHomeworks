function findYoungestPerson(array){
    var youngest = {age: Number.MAX_VALUE, name: ''};
    for(var index in array){
        if(array[index].hasSmartphone && array[index].age < youngest.age){
            youngest.age = array[index].age;
            youngest.name = array[index].firstname + ' ' + array[index].lastname;
        }
    }
    if(youngest.name === ''){
        return "No smartphones found!"
    }else{
        return "The youngest person is " + youngest.name;
    }
}


var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];
console.log(findYoungestPerson(people));