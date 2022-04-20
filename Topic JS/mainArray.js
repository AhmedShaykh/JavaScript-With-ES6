var a = ['John', 'Mosh', 'David', 'Jack', 'Christian', 'Cook'];
console.log(a);

var b = a.slice(1, 4);
console.log(b);

var c = ['John', 'Mosh', 'David', 'Christian'];
c.splice(2, 0, 'Cook');
console.log(c);

var d = Array.isArray(a);
console.log(d);

if (Array.isArray(a) === true) {
    console.log('This is an Array');
} else {
    console.log('It is not an Array');
};

var e = a.includes('Mosh');
console.log(e);

var x = a.indexOf('David', 1);
console.log(x);

var y = a.indexOf('Jack', 2);
console.log(y);

var z = a.lastIndexOf('Christian', 4);
console.log(z);

var arr = [12, 13, 15, 18];
var ag = arr.some(adultFunc);

function adultFunc(age) {
    return age >= 18
};

console.log(ag);

var ages = [10, 23, 19, 20];
var b = ages.find(checkAdult);

console.log(b);

function checkAdult(age) {
    return age >= 18
};

var numArr = [10, 12, 19, 20];
var bn = numArr.filter(checkNumbers);

console.log(bn);

function checkNumbers(chk) {
    return chk >= 18;
};

var arrString = ['Jerry', 'Mike', 'Thomas'];
arrString.toString();

console.log(arrString);