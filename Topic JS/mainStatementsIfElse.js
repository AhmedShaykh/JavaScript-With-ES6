var a = prompt('Enter A Value');
var b = 20;

if (a < b) {
    console.log('B is Greater Of A');
} else {
    console.log('A is Greater Of B');
};

var per = prompt('Enter Your Value', '99 Value Limit Otherwise Value Acceptable');

if (per >= 80 && per < 100) {
    console.log('You Earn A+ Grade');
} else if (per >= 70 && per < 80) {
    console.log('You Earn A Grade');
} else if (per >= 60 && per < 70) {
    console.log('You Earn B Grade');
} else if (per >= 50 && per < 60) {
    console.log('You Earn C Grade');
} else if (per >= 40 && per < 50) {
    console.log('You Earn D Grade');
} else if (per >= 33 && per < 40) {
    console.log('You Earn E Grade');
} else if (per >= 100) {
    console.log('Error 404');
} else {
    console.log('You are not Qualified');
};