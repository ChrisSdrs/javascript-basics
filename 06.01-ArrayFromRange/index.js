const numbers = arrayFromRange(1, 100);

console.log(numbers);



function arrayFromRange (min, max) {
    const a = [];
    for(let i=min; i<=max; i++){
        a.push(i);
    }
    return a;
};