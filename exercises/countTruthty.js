const array = [0, null, 2, undefined, '', 5, NaN];

console.log(countTruthy(array));

function countTruthy(array) {
    let count = 0;
    for (let item of array) 
        if (item)
            count += 1;
    return count;
}
