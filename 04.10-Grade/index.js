
const marks = [90, 70, 90];

calculateGrade(marks);


function calculateGrade(marks){
    let sum = 0;
    
    for (let mark of marks){
        sum += mark;
    }

    let average = sum / marks.length;
    
    if (average < 0 && average > 100) console.log('Error');
    if (average <= 59)
    console.log('Mark is F, average is ', average);
    else if (average <= 69)
    console.log('Mark is D, average is ', average); 
    else if (average <= 79)
    console.log('Mark is C, average is ', average);
    else if (average <= 89)
    console.log('Mark is B, average is ', average);
    else
    console.log('Mark is A, average is ', average);

}