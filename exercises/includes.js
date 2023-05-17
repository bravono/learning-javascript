const numbers = [1, 2, 3, 4];

function includes(array, searchElement) {
        for (let i of array) {
                if (i === searchElement)
                        return true;
        return false;
        }
};             

console.log(includes(numbers, -1));