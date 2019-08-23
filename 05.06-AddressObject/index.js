const address = {
    street: 'A',
    city: 'B',
    zipCode: 1234
};

function showAddress (address){
    for (let key in address)
    console.log(key, address[key]);
}

showAddress(address);