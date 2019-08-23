const circle = {
    radius: 1,
    draw (){
        console.log('draw');
    }
};

// Old way
// const another = {};
// for (let key in circle){
//     another[key] = circle[key];
// }

// Object.assign
// const another = Object.assign({}, circle);

// Spread operator ( ... )
const another = { ...circle };

console.log(another);