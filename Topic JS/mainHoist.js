var a = 100;

function hoist() {
    a = 20;
    var b = 100;
};

console.log(a);

hoist();
console.log(a);