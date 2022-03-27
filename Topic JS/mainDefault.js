function Sum(a, b) {
    return a + b
};

console.log(Sum(2, 5));

function fun1(...params) {
    console.log(params.length);
};

fun1();
fun1(5);
fun1(5, 6, 7);

// Anonymous function

var f = function () {
    console.log('Hello World');
};

console.log(f());

// Anonymous recursive Function

(function (){
    console.log('Recursive Function');
})(); 