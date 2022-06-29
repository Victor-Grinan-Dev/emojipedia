numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//find - returns the first value that meet the criteria.
console.log(
    numbers.find(function(num){
        return num > 5;
    })
)