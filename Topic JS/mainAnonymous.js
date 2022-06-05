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

var fun2 = function () {
    console.log('Anonymous Function');
};

fun2();

(function () {
    console.log('Recursive Function');
})

(); 