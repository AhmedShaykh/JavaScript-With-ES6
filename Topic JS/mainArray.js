var a = ['Joe', 'Morten', 'David', 'Jack', 'Christian', 'Chris'];
console.log(a);

var b = a.slice(1, 4);
console.log(b);

var c = ['Joe', 'Morten', 'David', 'Christian'];
c.splice(2, 1, 'Chris');
console.log(c);

var d = Array.isArray(a);
console.log(d);

if (Array.isArray(a) === true) {
    console.log('This is an Array');
} else {
    console.log('It is not an Array');
};

var e = a.includes('Morten');
console.log(e);

var see = a.indexOf('David', 1); // (Search + Start)
console.log(see);

var x = a.indexOf('Jack');
console.log(x);

var y = a.indexOf('Peter', 1); // Peter Not Add in Array Answer ====> (-1)
console.log(y);

var z = a.lastIndexOf('Christian', 5);
console.log(z);

var j = a.lastIndexOf('Joe');
console.log(j);

var arr = [12, 13, 15, 17];
var ages = arr.some(adultFunc);

function adultFunc(age) {
    return age >= 18
};

console.log(ages);

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

var arrString = [10, 58, 44];
console.log(arrString.toString());