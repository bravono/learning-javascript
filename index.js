// [1, 1, 2, 2, 2, 3]

var solution = function (array) {
  let obj = {};

  for (let item of array) {
    if (obj[item] === undefined) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }
  }

  let newArr = [];

  for (let element in obj) {
    newArr.push({ key: element, value: obj[element] });
  }

  let sorted = newArr.sort((a, b) => {
    if (a.value > b.value) return 1;
    else if (a.value < b.value) return -1;
    return 0;
  });

  return parseInt(sorted[0].key);
};

console.log(solution([1, 1, 2, 2, 2, 3]));
