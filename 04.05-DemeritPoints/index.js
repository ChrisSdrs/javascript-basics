checkSpeed(543);



function checkSpeed(speed){
    if (typeof speed !== 'number'){ 
     console.log(NaN);
    } else if (speed < 0){ 
     console.log('Invalid number');
    } else if (speed < 75){
     console.log('Ok');
    }
     else if (speed >= 75){
        let limit = 70;
        let points = (speed - limit) / 5;
        if (points < 12){
            console.log('Points: ' + Math.floor(points));
        } else console.log('License suspended');
    }
}