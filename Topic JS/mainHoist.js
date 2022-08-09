var a = 100;

function hoist() {
    a = 20;
    var b = 100;
    console.log(a);
};

console.log(a);

hoist();