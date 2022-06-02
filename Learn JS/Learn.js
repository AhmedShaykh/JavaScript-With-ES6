var a = 'Ahmed Shaykh';
document.write(a);
console.log(a);

console.log(a.length);

var b = 'Hello Web 3.0';
console.log(b.includes('Web 3'));
console.log(b.includes('3.O'));
console.log(b.includes('Yello'));
console.log(b.includes('Hell'));
console.log(b.includes('web'));

console.log(b.toUpperCase());

console.log(b.toLowerCase());

var language = 'JavaScript';
console.log(language[0]);
console.log(language[1]);
console.log(language[2]);
console.log(language[3]);

console.log(language[language.length - 2]);

console.log(language.substring(1, 4));

var nameA = 'Sabrina';
var nameB = 'Carpenter';

console.log(nameA + " " + nameB + ' Best Female Singer In The World');

console.log(`${nameA} ${nameB} Best Female Singer In The World`);

const phoneNumber = "+92123456789";
console.log(phoneNumber.startsWith('+'));
console.log(phoneNumber.startsWith('1'));
console.log(phoneNumber.endsWith('9'));
console.log(phoneNumber.endsWith('7'));

const text = '    Ahmëd Shäykh';
console.log(text)
console.log(text.trim());

const answer = 42;
const stringNum = 40;
console.log(answer)
console.log(answer.toString());
console.log(stringNum)

console.log("12");
console.log(Number.parseInt('12'));

function isPassing(grade) {
    if (grade >= 10) {
        return "Pass";
    } else {
        return "Fail";
    }
}

console.log(isPassing(12));
console.log(isPassing(10));
console.log(isPassing(-10));
console.log(isPassing(9.9));

var a = 5 + 2 * (3 - 2) / 2;
console.log(a) // 6

var b = 3 + 5 * 2;
console.log(b) // 13

var c = 8 / 2 - 1;
console.log(c) // 3

var d = 3 % 2 + 4 - 1;
console.log(d) // 3.06 = 4

var z = a + 5 * c - d / (3 + b);
console.log(z) // 20.75

var num = 6;
num++
console.log(num);

num--
console.log(num);

var num2 = ++num;
console.log(num2);

var num = 8;
var num2 = num++;
var num3 = ++num;
console.log(num);
console.log(num2);
console.log(num3);

var firstName = 'Type';
var lastName = 'Script';

console.log(firstName + " " + lastName);
console.log(firstName + lastName);
console.log(`${firstName} ${lastName}`);

var a = "6" + 2;
console.log(a)

var b = 3 + "6";
console.log(b)

var add = 3 + 6;
console.log(add)

var c = "Hello " + 2;
console.log(c)

var d = "Hello " + 2 + 3;
console.log(d)

var e = "Hello " + (2 + 3);
console.log(e)

var x = "Hello " + 3 * 4;
console.log(x)

var z = "Hello " + (3 - 4);
console.log(z)

function showMessage() {
    console.log('Hello World')
};

showMessage();

function multiply(num1, num2) {
    var num3 = num1 * num2;
    console.log(`The Output is: ${num3}`);
};

multiply(3, 3);

function showName(name) {
    console.log('Hello', name);
};

showName("Hardwell");

function test() {
    return 45
};

var a = test();
console.log(a);

function multi(num1, num2) {
    return num2;
};

var a = multi(3, 6);
console.log(a);

function showMessage2(name) {
    console.log("Hello " + name);
};

showMessage2("Metaverse")
showMessage2(404)
showMessage2(true)  
showMessage2()
showMessage2("Crypto", 12)
showMessage2("Bitcoin " + "#1")

function multiply2(num1, num2) {
    return num1 * num2
};

var a = multiply2(3, 6) + 5
var b = multiply2(3, 6) - 6
var c = multiply2(3, 6) * 5
var d = multiply2(3, 6) / 2
console.log(a);
console.log(b);
console.log(c);
console.log(d);

function multiply3(num1, num2) {
    return num1 * num2
};

function sum(a, b) {
    return multiply3(a, b) + b
};

var total = sum(3, 4) + 6 // +b (4)   
console.log(total)

function multiply4(num1, num2) {
    return num1 * num2
};

function sum2(a, b) {
    return a + b
};

var total2 = sum2(multiply4(3, 4), 2) + 6
console.log(total2)

var sum;
var mul = multiply(3, 2);
console.log("Mul = ", mul);
var add = sum(3, 2); // Previous Function Sum() Call Paramater 'B'
console.log("Add = ", add); // (a * b) + b = 4

var sum = function (a, b) {
    return a + b
};

function multiply(num1, num2) {
    return num1 * num2
};

var num = 5;

function changeValue() {
    return num = 8
};

console.log(num);
console.log(changeValue());

var arr = [1, 2, 3, 4];

function arrayIndex(arr) {
    arr[1] = 57
};

console.log(arr[1]);
arrayIndex(arr);
console.log(arr[1]);

var obj = { name: 'John', age: 23 };

function updateObject(obj) {
    obj.age = 30
};

console.log(obj.age);
updateObject(obj);
console.log(obj.age);

function markssheet(marks) {
    if (marks >= 90) {
        return 'Grade A+';
    }
    else if (marks >= 80 && marks < 90) {
        return 'Grade A';
    }
    else if (marks >= 70 && marks < 80) {
        return 'Good Affort';
    }
    else if (marks >= 40 && marks < 70) {
        return 'Improve Your Hard Work';
    }
    else {
        return 'Failed';
    };
}

console.log(markssheet(70));
console.log(markssheet(39));
console.log(markssheet(91));
console.log(markssheet(54));

function ageVerification(x) {
    if (x >= 18) {
        return 'You Are Eligible';
    } else {
        return 'You Are Not Eligible';
    };
};

console.log(ageVerification(18));

function Verification(z) {
    return z >= 18 ? 'Eligible' : 'Not Eligible';
};

console.log(Verification(15));

const object = {
    name: 'AHM X',
    age: 21,
    Artist: true
};

console.log(object.name);

console.log(object);

const obj2 = {
    name: 'Brian',
    age: 23,
    isAdult: true,
    nested2: {
        name: 'Alan',
        age: 16,
        isAdult: false
    }
};

console.log(obj2.nested2.name);

var obj = {
    name: 'Brian',
    age: 23,
    isAdult: true,
    nested2: {
        name: 'Alan',
        age: 16,
        isAdult: false
    },
    nFTS: function () {
        console.log("Bored Ape Yacht Club");
    }
};

obj.nFTS();

obj3 = {
    nFTS: function () {
        console.log("Mutant Ape Yacht Club");
    }
};

obj3.nFTS();

let user = {
    name: 'Jay',
    age: 11,
    sayHi() {
        console.log(this.name)
        console.log(this.gender)
    }
};

user.sayHi();

let username = { name: "Johnny", age: 21 };
let admin = { name: "Admin" };

function call() {
    console.log(this.name); // Wrong Practice 
    console.log(username.name);
};

call();

let userName = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

console.log(Object.assign(userName, permissions1, permissions2));

let userName2 = { name: "John" };

Object.assign(userName2, { name: "Peter" });

console.log(userName2.name);

let fun = new Function('a', 'b', 'return a + b')
console.log(fun(1, 2));

let sayHello = new Function('console.log("Hello")');
sayHello();

function set() {
    console.log('Hi Solana!')
}

setTimeout(set, 3000);

function addFun(a, b) {
    setTimeout(function () {
        console.log(a + b)
    }, 2000)
};

addFun(2, 3);

let timer = setTimeout(() => {
    console.log('Time To Travel')
}, 2000);

let func = (renderData) => {
    setTimeout(() => {
        renderData('Hello ETH!')
    }, 2000)
};

function renderData(x) {
    console.log(x)
};

func(renderData);

// let obj1 = {
//     name: 'Elon',
//     age: 20,
//     borrow() {
//         console.log(this.name + " + " + this.age)
//     }
// };

// obj1.borrow();

// var obJ2 = {
//     name: 'Mike',
//     age: 25
// };

// obj1.borrow.call(obJ2);

// var obj4 = {
//     name: 'Elon',
//     age: 22,
// };

// let bio = function (grade) {
//     console.log(this.name + " " + this.age + " Class " + grade)
// }

// bio.call(obj4);

// var obj5 = {
//     name: 'Harry',
//     age: 29
// };

// bio.call(obj5, 08)

// let bioo = function (grade, home) {
//     console.log(this.name + " " + this.age + " Class " + grade + " " + home)
// }

// var data = {
//     name: 'Ali',
//     age: 18
// };

// bioo.apply(data, [08, "Malir"])

// let myName = bioo.bind(data, 76, 'Clifton');
// myName();

// function addUp(fName, lName, ...title) {
//     console.log(`${fName} ${lName}`);
//     console.log(title);
//     console.log(title[1]);
//     console.log(title[0]);
// };

// addUp('Yaseen', 'Usman', 'Saqlain', 'Majid');

// function showName(a, b) {
//     console.log(arguments.length);
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[2]);
// };

// showName("Jack", "Martin", "Thomas");

// console.log(Math.max(3, 5, 1));

// let arr2 = [39, 52, 14];

// console.log(Math.max(...arr2));

// let arr3 = [1, -2, 3, 4];
// let arr4 = [8, 3, -8, 1];

// console.log(Math.max(...arr3, ...arr4));

// let arr5 = [3, 5, 1];
// let arr6 = [8, 9, 15];

// let merged = [0, ...arr5, 2, ...arr6];

// console.log(merged);

// let arrr = [1, 2, 3];
// let arrCopy = [...arrr];
// console.log("ArrCopy", arrCopy)

// console.log(arrr === arrCopy);

// console.log(JSON.stringify(arrr) === JSON.stringify(arrCopy));

// arrr.push(4);
// console.log(arrr);
// console.log(arrCopy);

// let objz = { a: 1, b: 2, c: 3 };
// let objCopy = { ...objz };
// console.log("Obj Copy", objCopy)

// console.log(JSON.stringify(objz) === JSON.stringify(objCopy));

// console.log(obj === objCopy);

// objz.d = 4;
// console.log(objz);
// console.log(JSON.stringify(objz));
// console.log(JSON.stringify(objCopy));

// var arr1 = [1, 2, 3];
// arr1.push(4);

// var arrx = ["Steve", "Jet", "Cat"];
// arrx.push(["Happy", "Coin"]);

// console.log(arr1);
// console.log(arrx);

// var ourArray = ["Anderson", "Jelly", ["cat"]];
// console.log(ourArray);

// var removedArray = ourArray.shift();
// console.log(removedArray);

// var ourArray = ["Anderson", "Jelly", ["cat"]];
// ourArray.unshift("Happy");

// console.log(ourArray);

// var processed = 0;

// function processArg(num) {
//     return (num + 3) / 5;
// }

// var processed = processArg(7);
// console.log(processed)

// function nextInLine(arr, item) {
//     arr.push(item)
//     var removed = arr.shift()
//     return removed;
// }

// var testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// var someObj = {
//     propName: "AHM X"
// };

// function propPrefix(str) {
//     var sample = "prop";
//     return sample + str;
// }

// var someProp = propPrefix("Name");
// console.log(someProp);
// console.log(someObj[someProp]);

// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
// };

// var playerNumber = 16;
// var player = testObj[playerNumber];
// console.log(player)

// var ourStorage = {
//     "desk": {
//         "drawer": "stapler"
//     },
//     "cabinet": {
//         "top drawer": {
//             "folder1": "a file",
//             "folder2": "secrets"
//         },
//         "bottom drawer": "soda"
//     }
// };

// console.log(ourStorage.cabinet["top drawer"].folder2);
// console.log(ourStorage.desk.drawer);

// var myStorage = {
//     "car": {
//         "inside": {
//             "glove box": "maps",
//             "passenger seat": "crumbs"
//         },
//         "outside": {
//             "trunk": "jack"
//         }
//     }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"];
// console.log(gloveBoxContents);

// var ourPets = [
//     {
//         animalType: "cat",
//         names: [
//             "Meowzer",
//             "Fluffy",
//             "Kit-Cat"
//         ]
//     },
//     {
//         animalType: "dog",
//         names: [
//             "Spot",
//             "Bowser",
//             "Frankie"
//         ]
//     }
// ];

// console.log(ourPets[0].names[1]);
// console.log(ourPets[1].names[0]);

// var myPlants = [
//     {
//         type: "flowers",
//         list: [
//             "rose",
//             "tulip",
//             "dandelion"
//         ]
//     },
//     {
//         type: "trees",
//         list: [
//             "fir",
//             "pine",
//             "birch"
//         ]
//     }
// ];

// var secondTree = myPlants[1].list[1];
// console.log(secondTree);

// let arrDest = ["Shaykh", "Ahmed"]

// let [ firstMyName, lastMyName ] = arrDest

// console.log(lastMyName);
// console.log(firstMyName);

// const objDest = {
//     nameObj: 'Andrew',
//     age: 19,
// };

// let { nameObj, age } = objDest

// console.log(nameObj);
// console.log(age);

// // ====================== End ====================== //