const numbers = [1, 2, -1, 3];

const atLeastOnePositive = numbers.some(function(value) {
        return value >= 0;
});


console.log(atLeastOnePositive);