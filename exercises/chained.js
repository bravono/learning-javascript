const numbers = [1, 2, -1, 3, 2];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => ({ value: n}));



console.log(items);
