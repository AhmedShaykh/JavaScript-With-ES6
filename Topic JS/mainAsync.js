console.log('Start');

let data = 'content';
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
    alertGreet('Hello World')
};

function Morning(alertGreet) {
    alert('Good Morning');
    alertGreet('Hello World')
};

function Night(alertGreet) {
    alert('Good Night');
    alertGreet('Hello World')
};

function alertGreet(msg) {
    alert(msg);
};

Greet('Hello World', alertGreet);