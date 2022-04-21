console.log('Loops');

// For loop
var i = 0;

for (i=0; i<3; i++) {
    console.log(i);
};

let places = ['Karachi', 'Lahore', 'Islamabad'];

for (let index = 0; index < places.length; index++) {
    const element = places[index];
    console.log('Hello from ' + element);
};

// forEach loop
var frameWork = ['React', 'Angular', 'Vue'];

frameWork.forEach(function f(e) {
    console.log('Hi from ' + e)
});

// For of loop
let num = [14, 56, 98];

for (e of num) {
    console.log('--> ' + e);
};

// Object Loop
const employee = {
    name: 'David',
    salary: 400,
};

for (key in employee) {
    console.log(`The ${key} of employee is ${employee[key]}`)
};