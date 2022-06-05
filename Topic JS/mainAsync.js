console.log('Start');

let data = 'Content';
console.log(data);

function Greet(msg, alertGreet) {
    if (msg === 'evening') {
        Evening(alertGreet);
    } else if (msg === 'morning') {
        Morning(alertGreet);
    } else if (msg === 'night') {
        Night(alertGreet);
    } else {
        alert('404')
        console.log('Sorry! This Value Not A Exist');
        }
    ;
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
    alertGreet('Go To Sleep');
};

function alertGreet(msg) {
    console.log(msg);
};

var input = prompt("Enter Parts Of Days in Lower Case", "Please Put It")
Greet(input, alertGreet);