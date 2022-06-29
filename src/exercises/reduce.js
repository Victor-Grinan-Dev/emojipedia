numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//reduce - acumulates the value by doing something to each element of an array


//hand made
let total = 0;

numbers.forEach(element => {
    total += element;
});

//console.log(total)

console.log(numbers.reduce(function (total, num){
    return total + num
}))