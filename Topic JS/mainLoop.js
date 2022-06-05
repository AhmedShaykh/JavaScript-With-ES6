console.log('Loops');

var i = 0;

for (i = 0; i < 3; i++) {
    console.log(i);
};

let places = ['Karachi', 'Lahore', 'Islamabad'];

for (let index = 0; index < places.length; index++) {
    const element = places[index];
    console.log('Hello from ' + element);
};

var frameWork = ['React', 'Next', 'Ether'];

frameWork.forEach(function (e) {
    console.log('Hi from ' + e + ' JS')
});

let num = [18, 56, 98];

for (e of num) {
    console.log('==> ' + e);
};

const employee = {
    name: 'David',
    salary: 40000,
};

for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`)
};