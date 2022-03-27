// Slice
var a = ['John', 'Mosh', 'David', 'John', 'Christian', 'Cook'];
console.log(a);

var b = a.slice(1, 4);
console.log(b);

//Splice
var c = ['John', 'Mosh', 'David', 'Christian'];
c.splice(2, 0, 'Cook');
console.log(c);

// isArray
var d = Array.isArray(a);
console.log(d);

if (Array.isArray(a) == true) {
    console.log('This is an Array');
} else {
    console.log('It is not an Array');
};

// indexOf & lastIndexOf Method
var x = a.indexOf('John', 2);
console.log(x);

var z = a.lastIndexOf('John', 4);
console.log(z);

// Includes Method
var e = a.includes('Mosh');
console.log(e);

// Some Method
var arr = [12, 13, 15, 18];
var ag = arr.some(adultFunc);

function adultFunc(age) {
    return age >= 18
};

// find & findIndex Method
var ages = [10, 23, 19, 20];
var b = ages.find(checkAdult);
// findIndex is also the same thing, it only shows the index of the number
console.log(b);

function checkAdult(age) {
    return age >= 18
};

// Filter Method
var numArr = [10, 12, 19, 20];
var bn = numArr.filter(checkNumbers);
console.log(bn);

function checkNumbers(chk) {
    return chk >= 18;
};

// toString, Fill, valueOff Method
var arrString = ['john', 'mosh', 'david'];
arrString.toString();

document.write(arrString);