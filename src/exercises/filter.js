numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


//filter - creates a new array with only the items that are value as true

const newNumbers = numbers.filter(function (number){
    return number > 5
})

//console.table(newNumbers);

/* hand made with for each */

let biggerThanFive = [];

numbers.forEach(element => {
    element > 5 ?  biggerThanFive.push(element): null
});

console.table(biggerThanFive);
