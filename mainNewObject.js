console.log('Object Literals');

// 1 method

function Foo(id) {
    return {
        name: 'dummy',
        id,
        bar() {
            console.log('bar');
        }
    };
};

// 2 method

console.log(Foo());

var fees = {};

fees['Fee'] = 100;
fees['Name'] = 'Josh';

// 3 method

fees.Gender = 'male';
fees.City = 'Karachi';

var person = new Object();

person.firstName = 'David';
person.lastName = 'Mosh';

var lastName = person.lastName 

console.log(person);
console.log(person.firstName);
console.log(lastName);