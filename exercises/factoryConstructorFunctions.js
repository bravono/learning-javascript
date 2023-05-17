// Factory Function
const address = createAddress('Sabon', 'Katsina', '801')

console.log(address);
    
function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

// Constructor Function

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const address2 = new Address('Sabon', 'Katsina', 801)
console.log(address2)