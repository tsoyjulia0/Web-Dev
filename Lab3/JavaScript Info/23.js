// Object.keys, values, entries

//Sum the properties
function sumSalaries(salaries) {
    let sum = 0;
    for (let i of Object.values(salaries)) {
      sum += i;
    }
    return sum; 
}
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
alert( sumSalaries(salaries) ); 

//Count properties
function count(obj) {
    return Object.keys(obj).length;
}
let user = {
    name: 'John',
    age: 30
};
alert( count(user) ); 
