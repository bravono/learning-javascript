const address = {
    street: 'Sabon Titi Kwado',
    city: 'Katsina',
    zipCode: 801
}

showAddress(address);


function showAddress(address) {
    for (let key in address)
        console.log(key, address[key]);
}