const person = {
    name: 'Ahbideen',
    age: 20,
    skinColor: 'brown',
    height: 170
};

showProerty(person);

function showProerty(person) {
    for (let key in person)
        if (typeof person[key] ===  'string')
            console.log(person[key]);
}