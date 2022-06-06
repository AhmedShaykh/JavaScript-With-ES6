console.log('Object Literals');

function Foo(id) {
    return {
        name: 'dummy',
        id,
        bar() {
            console.log('bar');
        }
    };
};

console.log(Foo());

var fees = {};

fees['Fee'] = 100;
fees['Name'] = 'Josh';

fees.Gender = 'male';
fees.City = 'Karachi';

var person = new Object();

person.firstName = 'David';
person.lastName = 'Mosh';

var lastName = person.lastName 

console.log(person);
console.log(person.firstName);
console.log(lastName);