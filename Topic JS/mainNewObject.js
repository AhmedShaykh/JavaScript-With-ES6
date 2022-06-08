console.log('Object Literals');

function Foo(id) {
    return {
        name: 'OBJ',
        id,
        bar() {
            console.log('bar');
        }
    };
};

console.log(Foo('ES6'));

var fees = {};

fees['Fee'] = 100;
fees['Name'] = 'Enderman';

fees.Gender = 'Cartoon';
fees.Game = 'Minecraft';

console.log(fees);
console.log(fees.Name);
console.log(fees.Game);

var person = new Object();

person.firstName = 'David';
person.lastName = 'Guetta';

var lastName = person.lastName

console.log(person);
console.log(person.firstName);
console.log(lastName);