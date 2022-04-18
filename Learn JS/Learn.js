var a = 'Ahmed';
document.write(a);
console.log(a);

console.log(a.length);

var b = 'Hello World';
console.log(b.includes('World'));
console.log(b.includes('Yello'));
console.log(b.includes('H'));
console.log(b.includes('w'));

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

console.log('Best Female Singer Is ' + nameA + " " + nameB + ' In The World');

console.log(`Best Female Singer Is ${nameA} ${nameB} In The World`);

const phoneNumber = "+92123456789";
console.log(phoneNumber.startsWith('+'));
console.log(phoneNumber.startsWith('1'));
console.log(phoneNumber.endsWith('9'));
console.log(phoneNumber.endsWith('7'));

const text = '    Ahmed Shaykh';
console.log(text)
console.log(text.trim());

const answer = 42;
const stringNum = 40;
console.log(answer)
console.log(answer.toString());
console.log(stringNum)

console.log("12");
console.log(Number.parseInt('12'));

function isPassing(grade){
    if (grade >= 10){
        return "Passed";
    } else {
        return "Failed";
    }
}

console.log(isPassing(12));
console.log(isPassing(10));
console.log(isPassing(-10));
console.log(isPassing(9.9));

var Rose = 'Red';
console.log(Rose);

var a = 5 + 2 * (3 - 2) / 2;
console.log(a)

var b = 3 + 5 * 2;
console.log(b)

var c = 8 / 2 - 1;
console.log(c)

var d = 3 % 2 + 4 - 1;
console.log(d)

var z = a + 5 * c - d / (3 + b);
console.log(z)

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

var firstName = 'Java';
var lastName = 'Script';

console.log(firstName + "" + lastName);
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

showMessage2("World")
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

function sum(a , b) {
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

multiply4(a, b);

var total2 = sum2(multiply4(3, 4), 2) + 6
console.log(total2)

var sum;
var mul = multiply(3, 2);
console.log("Mul = ", mul);
var add = sum(1, 2);
console.log("Add = ", add);

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
changeValue(num);
console.log(num);


var arr = [1, 2, 3, 4];

function arrayIndex(val) {
    val[1] = 57
};

console.log(arr[1]);
arrayIndex(arr);
console.log(arr[1]);

var obj = { name: 'John', age: 23 };

function updateObject(val) { 
    val.age = 30
};

console.log(obj.age);
updateObject(obj);
console.log(obj.age);

function markssheet(marks) {
    if (marks >= 90) {
        return 'Grade A+';
     }
     else if (marks >=80 && marks < 90) {
        return 'Grade A';
     }
     else if (marks >=70 && marks < 80) {
        return 'Good Affort';
     }
     else if (marks >=40 && marks < 70) {
         return 'Just Passed';
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
        return 'Eligible';
    } else {
        return 'Not Eligible';
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
    name: 'John',
    age: 23,
    isAdult: true,
    nested2: {
        name: 'Mike',
        age: 16,
        isAdult: false
    }
};

console.log(obj2.nested2.name);

var obj = {
    name: 'John',
    age: 23,
    isAdult: true,
    nested2: {
        name: 'Mike',
        age: 16,
        isAdult: false
    },
    sayHi: function() {
        console.log("Hello NFTs");
    }
};

obj.sayHi();

obj3 = {
    sayHi: function() {
      console.log("Hello Object 3");
    }
};

obj3.sayHi();

let user = {
    name: 'John',
    age: 12,
    sayHi() {
        console.log(this.name)
        console.log(this.gender)
    }
};

user.sayHi();

let username = { name: "Johnny" , age: 21 };
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
console.log(fun(1,2));

let sayHello = new Function('console.log("Hello")');
sayHello();

function set() {
    console.log('Hi Solana!')
}

setTimeout(set, 3000);

function addFun(a, b) {
    setTimeout(function() {
    console.log(a + b)    
    } , 2000)
};

addFun(2, 3);

let timer = setTimeout(() => {
    console.log('Hello Crypto!')
}, 2000);

let func = (renderData) => {
    setTimeout(() => {
       renderData('Hello ETH')
    }, 2000)
};

function renderData(x) {
   console.log(x)
};

func(renderData);

let obj1 = {
    name: 'Elon',
    age: 20,
    borrow() {
        console.log(this.name + " + " + this.age)
    }
};

obj1.borrow();

var obJ2 = {
    name: 'Mike',
    age: 25
};

obj1.borrow.call(obJ2);

var obj4 = {
    name: 'Elon',
    age: 22,
};

let bio = function(grade) {
    console.log(this.name + " " + this.age + " Class " + grade)
}

bio.call(obj4);

var obj5 = {
    name: 'Harry',
    age: 29
};

bio.call(obj5, 08)

let bioo = function(grade, home) {
    console.log(this.name + " " + this.age + " Class " + grade + " " + home)
}

var data = {
    name: 'Ali',
    age: 18
};

bioo.apply(data, [08, "Malir"])

let myName = bioo.bind(data, 76, 'Clifton');
myName();

function addUp(fName, lName, ...title) {
    console.log(`${fName} ${lName}`);
    console.log(title);
    console.log(title[1]);
    console.log(title[0]);
};

addUp('Yaseen', 'Usman', 'Saqlain', 'Majid');

function showName(a, b) {
    console.log(arguments.length);
    console.log(arguments);
    console.log(arguments[0]);
    console.log(arguments[2]);
};

showName("Jack", "Martin", "Thomas");

console.log(Math.max(3, 5, 1) );

let arr2 = [39, 52, 14];

console.log(Math.max(...arr2));

let arr3 = [1, -2, 3, 4];
let arr4 = [8, 3, -8, 1];

console.log(Math.max(...arr3, ...arr4) );

let arr5 = [3, 5, 1];
let arr6 = [8, 9, 15];

let merged = [0, ...arr5, 2, ...arr6];

console.log(merged);

let arrr = [1, 2, 3];
let arrCopy = [...arrr];
console.log("ArrCopy", arrCopy)

console.log(arrr === arrCopy);

console.log(JSON.stringify(arrr) === JSON.stringify(arrCopy));

arrr.push(4);
console.log(arrr);
console.log(arrCopy);

let objz = { a: 1, b: 2, c: 3 };
let objCopy = {...objz};
console.log("ObjCopy", objCopy)

console.log(JSON.stringify(objz) === JSON.stringify(objCopy));

console.log(obj === objCopy);

objz.d = 4;
console.log(objz);
console.log(JSON.stringify(objz));
console.log(JSON.stringify(objCopy));

var arr1 = [1,2,3];
arr1.push(4);

var arrx = ["Steve", "Jet", "Cat"];
arrx.push(["Happy", "Coin"]);

console.log(arr1,arrx);

// // *************** Manipulate Arrays With shift() ***************
// // pop() always removes the last element of an array. What if you want to remove the first?
// // That's where .shift() comes in. It works just like .pop(), except it removes the 
// // first element instead of the last.

// var ourArray = ["Stimpson", "J", ["cat"]];
// var removedFromOurArray = ourArray.shift();
// // removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// // **************** Manipulate Arrays With unshift() *****************
// // Not only can you shift elements off of the beginning of an array, you can also unshift elements to 
// // the beginning of an array i.e. add elements in front of the array.
// // .unshift() works exactly like .push(), but instead of adding the element at the end 
// // of the array, unshift() adds the element at the beginning of the array.

// var ourArray = ["Stimpson", "J", "cat"];
// ourArray.shift(); // ourArray now equals ["J", "cat"]
// ourArray.unshift("Happy");
// // ourArray now equals ["Happy", "J", "cat"]

// // ************** Assignment with a Returned Value **************
// // If you'll recall from our discussion of Storing Values with the Assignment Operator, 
// // everything to the right of the equal sign is resolved before the value is assigned.
// // This means we can take the return value of a function and assign it to a variable.
// // Assume we have pre-defined a function sum which adds two numbers together, then:
// // ourSum = sum(5, 12);
// // will call sum function, which returns a value of 17 and assigns it to ourSum variable
// // Setup
// var processed = 0;

// function processArg(num) {
//   return (num + 3) / 5;
// }

// // Only change code below this line
// var processed = processArg(7)

// // ****************** Stand in Line ******************
// // In Computer Science a queue is an abstract Data Structure where items are kept in order. 
// // New items can be added at the back of the queue and old items are taken off from the front of the queue.

// // Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
// // Add the number to the end of the array, then remove the first element of the array.
// // The nextInLine function should then return the element that was removed.

// function nextInLine(arr, item) {
//     // Only change code below this line
//     arr.push(item)
//     var removed = arr.shift()
//     return removed;
//     // Only change code above this line
// }
  
// // Setup
// var testArr = [1,2,3,4,5];
  
// // Display code
// console.log("Before: " + JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log("After: " + JSON.stringify(testArr));

// // **************** Understanding Boolean Values ***************
// // Another data type is the Boolean. Booleans may only be one of two values: true or false. 
// // They are basically little on-off switches, where true is "on" and false is "off." 
// // These two states are mutually exclusive.

// // *************  Accessing Object Properties with VariablesPassed ***********
// // Another use of bracket notation on objects is to access a property which is stored as 
// // the value of a variable. This can be very useful for iterating through an object's 
// // properties or when accessing a lookup table.

// var someObj = {
//     propName: "John"
//   };
//   function propPrefix(str) {
//     var s = "prop";
//     return s + str;
//   }
//   var someProp = propPrefix("Name"); // someProp now holds the value 'propName'
//   console.log(someObj[someProp]); // "John"

// // Set the playerNumber variable to 16. Then, use the variable to look up the player's 
// // name and assign it to player.

// // Setup
// var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas"
//   };
  
//   // Only change code below this line
  
// var playerNumber = 16;       // Change this line
// var player = testObj[playerNumber];   // Change this line

// // *********** Testing Objects for Properties **********
// // Modify the function checkObj to test if an object passed to the function (obj) contains 
// // a specific property (checkProp). If the property is found, return that property's value. 
// // If not, return "Not Found".

// function checkObj(obj, checkProp) {
//     // Only change code below this line
//     if (obj.hasOwnProperty(checkProp) == true) {
//       return obj[checkProp]
//     } 
//     return "Not Found";
//     // Only change code above this line
// }
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "pet");
// checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "house");

// // ************** Accessing Nested Objects ***************
// //The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

// var ourStorage = {
//   "desk": {
//     "drawer": "stapler"
//   },
//   "cabinet": {
//     "top drawer": { 
//       "folder1": "a file",
//       "folder2": "secrets"  
//     },
//     "bottom drawer": "soda"
//   }
// };
// ourStorage.cabinet["top drawer"].folder2;  // "secrets"
// ourStorage.desk.drawer; // "stapler"

// // Access the myStorage object and assign the contents of the glove box property to the 
// // gloveBoxContents variable. Use dot notation for all properties where possible, 
// // otherwise use bracket notation.

// var myStorage = {
//   "car": {
//     "inside": {
//       "glove box": "maps",
//       "passenger seat": "crumbs"
//      },
//     "outside": {
//       "trunk": "jack"
//     }
//   }
// };

// var gloveBoxContents = myStorage.car.inside["glove box"];

// // ************* Accessing Nested Arrays **************
// // As we have seen in earlier examples, objects can contain both nested objects and nested arrays.
// // Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.

// var ourPets = [
//     {
//       animalType: "cat",
//       names: [
//         "Meowzer",
//         "Fluffy",
//         "Kit-Cat"
//       ]
//     },
//     {
//       animalType: "dog",
//       names: [
//         "Spot",
//         "Bowser",
//         "Frankie"
//       ]
//     }
// ];
// ourPets[0].names[1]; // "Fluffy"
// ourPets[1].names[0]; // "Spot"

// // Retrieve the second tree from the variable myPlants using object dot and array bracket notation.
// var myPlants = [
//     {
//       type: "flowers",
//       list: [
//         "rose",
//         "tulip",
//         "dandelion"
//       ]
//     },
//     {
//       type: "trees",
//       list: [
//         "fir",
//         "pine",
//         "birch"
//       ]
//     }
//   ];
  
// // Only change code below this line

// var secondTree = myPlants[1].list[1];


// // %%%%%%%%%%%%%%%%%%%%% Destructuring %%%%%%%%%%%%%%%%%%%%%%%%

// /* 
// The two most used data structures in JavaScript are Object and Array.

// Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.

// Although, when we pass those to a function, it may need not an object/array as a whole. It may need individual pieces.

// Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
// as sometimes that’s more convenient.

// Here's an example of destructuring 

// ----------- ARRAY DESTRUCTURING -----------
// */

// // we have an array with the name and surname
// let arr = ["John", "Smith"]

// let [ firstName, lastName ] = arr // you created variables under the array, now John is assign as firstName and Smith as lastName

// console.log(firstName); // John
// console.log(lastName); // Smith

// // --------------- OBJECT DESTRUCTURING ----------------

// const obj = {
//     name: 'John',
//     age: 19,
// };

// let { name, age } = obj

// console.log(name); // JOHN
// console.log(age); // 19