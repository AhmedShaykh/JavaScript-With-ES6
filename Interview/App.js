(function () {
    return a = b = 3
})()

console.log("A Defined? " + (typeof a !== 'undefined'));
console.log("B Defined? " + (typeof b == 'undefined'));

var myObject = {
    foo: "bar",
    func: function () {
        var self = this;
        console.log("Outer func:  this.foo = " + this.foo); // bar
        console.log("Outer func:  self.foo = " + self.foo); // bar
        (function () {
            console.log("Inner func:  this.foo = " + this.foo); // undefined
            console.log("Inner func:  self.foo = " + self.foo); // bar
        }());
    }
};

myObject.func();

function reverseStr(str) {
    const arr = str.split("");
    console.log(arr);
    arr.reverse();
    a = arr.join("");
    console.log(a);
};

reverseStr("Ahmed");

const palindrome = (str) => {
    let x = str
    console.log("Before Text", x)
    const arr = x.split("");
    arr.reverse();
    x = arr.join("")
    console.log("After Text", x);
    if (x == str) {
        console.log(true)
    } else {
        console.log(false)
    }
}

var input = prompt("Enter Your Word ....")
palindrome(input);

function outer() {
    var num = 2;
    function inner() {
        num++
        var num = 4;
        console.log(num);
    }
    inner();
};

outer();

console.log(typeof true);
console.log(typeof "Type");
console.log(typeof 4);
console.log(typeof typeof 1);

var hero = {
    _name: 'Imran Khan',
    getSecretIdentity: function () {
        return this._name
    }
};

var identity = hero.getSecretIdentity();
console.log(identity);
console.log(hero.getSecretIdentity())


function myArr(arr, callback) {
    arr.push(100);
    callback();
};

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

myArr(arr, function () {
    console.log('Number 100 is pushed in Array', arr);
});

var arrL = [1, 2, 3, 4, 5, 6];
var newArr = arrL;
arrL.length = 0;
console.log(newArr);

function checkInt(int) {
    typeof int === "number" ? console.log("It's a Number") : console.log("It's Not an Integer");
};

checkInt(2);

var Stack = ["Cat", "Dog", "Eagle"];

function duplicate(arr) {
    return arr.concat(arr)
};

console.log(duplicate(Stack));

function mul(x) {
    return function (y) {
        return function (z) {
            return (x * y * z)
        }
    }
}

console.log(mul(2)(2)(2));

function baseNumber(num) {
    return function (N) {
        console.log(N);
        return num + N
    }
};

var baseResult = baseNumber(6);
console.log(baseResult(10));

function plus(num) {
    return function (N) {
        return num + N
    };
};

console.log(plus(3)(3));

var ary = [1, 2, 3, 4];

ary.map((y) => {
    console.log(y * 2);
});

const obj = [
    { fName: 'Ahmed', lName: 'Shaikh' },
    { fName: 'Elon', lName: 'Musk' },
    { fName: 'Steve', lName: 'Jobs' },
];

obj.map((ob) => {
    console.log(ob.fName)
});

const number = [1, -2, 3, -9, 0, 2];

var vn = number.filter((value) => {
    return value >= 0
})

console.log(vn);

var res = [
    { name: 'Broadway', isOpen: true },
    { name: 'Pizza Hut', isOpen: false },
    { name: 'Pizza king', isOpen: true },
    { name: 'California', isOpen: false },
];

var openRes = res.map(rp => {
    return rp.name + ` is Open ` + rp.isOpen
})

console.log(openRes);

function promise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let api = false;
            if (!api) {
                console.log('Api Connected');
                resolve()
            } else {
                console.log('Api not Connected');
                reject()
            }
        }, 2000);
    })
};

promise()
    .then(() => {
        console.log('Incoming Data .....')
    })
    .catch((error) => {
        console.log(error)
    });