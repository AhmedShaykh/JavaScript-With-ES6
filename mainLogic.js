// Logical Operators

/*
1) &&  ->  Logical AND
2) ||  ->  Logical OR
3) !   ->  Logical NOT
*/

// And Operator

var age = 19;

if (age >= 18 && age <= 21) {
    console.log('You are eligible');
} else {
    console.log('You are not eligible');
};

// Or Operator

let a = 10;
let b = 12;

if (a >= 12 || b <= 13) {
    console.log('Correct Number');
} else {
    console.log('Not correct');
};

// Not Operator

let c = 12;

if (! c >= 10) {
    console.log('Pass');
};