var name = 'Martin';
var admin = name;
console.log(admin);

function arguments(a,b){
    if(a > b){
        console.log(a)
    }
    else{
        console.log(b)
    }
}

arguments(20,30);

var obj= {
    name:'Usman', 
    class:2, 
    age:18,
    sayHi() {
        console.log('Say Hi')
    }
}

obj.sayHi();

function emailChecker(x, y) {
    if (x.includes('@') && y.length >= 6) {
        console.log(`${x} and ${y}`)
    } else {
        console.log(`Enter email and password`);
    };
};

emailChecker('test@mail.com', 'testing123');