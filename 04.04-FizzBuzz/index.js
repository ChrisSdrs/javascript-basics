console.log(fizzBuzz(1));
console.log(fizzBuzz(2));
console.log(fizzBuzz(3));
console.log(fizzBuzz(4));
console.log(fizzBuzz(5));
console.log(fizzBuzz('dsf'));
console.log(fizzBuzz(15));
console.log(fizzBuzz(564));
console.log(fizzBuzz(7));










function fizzBuzz (input){
    
    if (typeof input === 'number'){
    if ((input % 3 === 0) && (input % 5 ===0)){
        return 'FizzBuzz';
    } else if (input % 3 === 0){
        return 'Fizz';
    } else if (input % 5 === 0){
        return 'Buzz';
    } else return input;
} else return NaN;
}