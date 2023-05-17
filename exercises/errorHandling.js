const person = {
    firstName: 'Ahbideen',
    lastName: 'Yusuf',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') 
            throw new Error('Value is not a string.')

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Please enter first and last name')
        this.firstName = parts[0];
        this.lastName = parts[1];
    
    }
};

try {
    person.fullName = 'Ademurewa Ahmed';
}
catch (a) {
    alert(a);
}

console.log(person)