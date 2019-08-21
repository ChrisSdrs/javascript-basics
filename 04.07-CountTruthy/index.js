const array = [0, 2, 6 , undefined , 8];

console.log(countTruthy(array));



function countTruthy(array){
    
    let count = 0;
    for (let value of array){
        if (value) count++;
        

    }
    return count;
}