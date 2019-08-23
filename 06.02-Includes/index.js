const numbers = [1, 2, 3, 4];

console.log(numbers.includes(1));


console.log(include(numbers, 3));


function include (array, searchElement){
    for (let n of array) {
        if (n === searchElement)
            return true;
        return false;
    }
}