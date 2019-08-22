showStars(10);


function showStars (rows){

    if (typeof rows !== 'number') console.log(NaN);

    let star = '*';
    for (let i = 0; i < rows; i++){
        console.log(star);
        star += '*';
    }
}