var a = 1;

for (a = 1; a <= 100; a = a + 10) {
    for (var b = a; b < a + 10; b++) {
        console.log(b);
    };
};

for (var a = 1; a <= 5; a++) {
    for (var b = 1; b <= a; b++) {
        document.write(b + ' '); 
    };
    document.write('<br>');
};

for (var i = 1; i <= 5; i++) {
    for (var x = 1; x <= i; x++) {
        document.write(i, ' ');
    };
    document.write('<br>');
};

for (var y = 5; y >= 1; y--) {
    for (var z = 1; z <= y; z++) {
        document.write(y, ' ');
    };
    document.write('<br>');
};

for (var c = 5; c >= 1; c--) {
    for (var d = c; d >= 1; d--) {
        document.write(d, ' ');
    };
    document.write('<br>');
};