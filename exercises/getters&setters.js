const person = {
    firstName: 'Ahbideen',
    lastName: 'Yusuf',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        this.firstName = parts[0];
        this.lastName = parts[1];
    
    }
};