console.log('Start');

let data = 'Content';
console.log(data);

function Greet(msg, alertGreet) {
    if (msg === 'evening') {
        Evening(alertGreet);
    } else if (msg === 'morning') {
        Morning(alertGreet);
    } else {
        Night(alertGreet);
    };
};

function Evening(alertGreet) {
    alert('Good Evening');
    alertGreet('Its Tea Time');
};

function Morning(alertGreet) {
    alert('Good Morning');
    alertGreet('Its Coffee Time');
};

function Night(alertGreet) {
    alert('Good Night');
    alertGreet('Go To Rest');
};

function alertGreet(msg) {
    console.log(msg);
};

Greet('morning', alertGreet);