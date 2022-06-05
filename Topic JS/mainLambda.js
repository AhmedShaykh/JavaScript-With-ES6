console.log('Lambda Function');

var a = x => x + 2;

var b = a(4);
console.log(b);

var e = z => {
    console.log(z);
    return z
};

console.log(e(9));