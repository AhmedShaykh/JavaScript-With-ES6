for (var a = 1; a <= 10; a++) {
    console.log(`Number: ${a}`);
};

var i = 0;

for (i = 0; i <= 10; i++) {
    if (i === 3) {
        console.log(`Break: ${i}`);
        continue;
    };
    console.log(`Counter: ${i}`);
};

var x = 0;

for (x = 0; x <= 5; x++) {
    if (x === 3) {
        console.log(`Break: ${x}`);
        break;
    };
    console.log(`Number: ${x}`);
};