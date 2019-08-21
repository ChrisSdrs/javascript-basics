sum(10);
sum(534);
sum(654);
sum(234);
sum(13);
sum(4765756);




function sum(limit){
    let sum = 0;

    for(let i = 0; i <= limit; i++){
        if ((i % 3 === 0) || (i % 5 == 0))
            sum += i;
        
    }

    console.log("Sum of 3's and 5's multiples between 0 and ", limit, " is ", sum);
}