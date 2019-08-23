// const address = {
//     street: 'A',
//     city: 'B',
//     zipCode: 1234
// };


let address1 = createAddress('A', 'B', 1234);
let address2 = new Address('C', 'D', 5678);

console.log(address1);
console.log(address2);



// Factory Function

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode 
    };
}

// Constructor Function

function Address (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}