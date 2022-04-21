console.log('Lambda Function');

var a = x => x+2;
var b = a(4);
console.log(b);

var e = x => {
    console.log(x);
    return x
};

console.log(e(9));