const numbers = [1, 2, 3, 4];

function getMax(array) {
        if (array.length === 0) return undefined;
        // let max = 0;
        // for (let element of array)
        //  if (element >= max)
        //   max = element;
        // return max;

        return array.reduce((a, b) => (a > b) ? a : b);
}



const max = getMax(numbers);
console.log(max);

