// IF statement

var a = 15;
var b = 20;

if (a < b) {
    console.log('A is greater');
};

// IF ELSE IF statement

var per = 60;

if (per >= 80 && per  <= 100) {
    console.log('You Earn A1+ Grade');
} else if (per >= 70 && per < 80) {
    console.log('You Earn A Grade');
} else if (per >= 60 && per < 70) {
    console.log('You Earn B Grade');
} else if (per >= 50 && per < 60) {
    console.log('You Earn C Grade');
} else if (per >= 40 && per < 50) {
    console.log('You Earn D Grade');
} else if (per >= 30 && per < 40) {
    console.log('You Earn E Grade');
} else {
    console.log('You are not qualified');
};