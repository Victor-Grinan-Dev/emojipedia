numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// findIndex - will return the index of the first item that meet the criteria

console.log(
    numbers.findIndex(function(num){
        return num > 2;
    })
)