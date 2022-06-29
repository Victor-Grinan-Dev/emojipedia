numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//map - creates an array by doing something with each item of an array

let doubleNumbers = [];

function double (item){
    doubleNumbers.push(item * 2);
}

/**** HAND MADE MAP ****/

numbers.forEach(element => {
    return double(element)
});

//console.table(doubleNumbers);

/**** step 1: including the function in the forEach in anonymus mode ****/
doubleNumbers = [];

numbers.forEach(function (item){
    doubleNumbers.push(item * 2);
});

//console.table(doubleNumbers);

/**** step 2 including the function in the map in anonymus mode ****/
doubleNumbers = [];
doubleNumbers = numbers.map(function (item){
    return item * 2;
});

//console.table(doubleNumbers);

/**** step 3 transform the map in arrow function ****/
doubleNumbers = [];
doubleNumbers = numbers.map( item => (
    item * 2
));

console.table(doubleNumbers);


