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

function adminControl(user) {
    if (user) {
        if (user.admin) {
            console.log('showing admin panel')
        } else {
            console.log('you need to be an admin')
        }
    } else {
        console.log('You need to logged in')
    }
}

let mainUser = {
    name: 'Harry',
    admin: true      // 'showing admin panel'
};

let userOne = {
    name: 'Harry',
    admin: false     // 'you need to be an admin'
};

let userTwo = null    // 'You need to logged in' 

adminControl(mainUser);

// // Now we are using Ternary Operator in this function

function adminControl(user) {
   return user ? user.admin ? 'showing admin panel' : 'you need to be an admin' : 'You need to logged in'
};

// // now we will write this entire function in one line with javascript updated version
// // ECMAScript (ES6)

let adminControl = (user) => user ? user.admin ? 'showing admin panel' : 'you need to be an admin' : 'You need to logged in';

// // *************** Objects in JavaScript ***************

// // Objects in JavaScript is similar to Array/
// // Array contains only values for Example:
// const arr = [4, 'Mike', true];
// //          --------|--------
// //                values

// // but in Objects it contains keys and values also, so whats, the syntax:

// // -----------> 1) object contain a variable just like array and a pair of curly brackets,
// const obj = {  };

// // -----------> 2) now first we will write a key name and then pass a value in key,
// const obj = {
//     name: 'John',
//     age: 23,
//     isAdult: true
// };
// // the name, age and isAdult is the key name, and "John", 23, true is their values,
// // so if we want to access a specific key, so we will just call variable name and key name,

// console.log(obj.name);     // John

// // and if you want to access a whole object so just write only variable name
// console.log(obj);

// // *************** Nested Objects in JavaScript ***************

// const obj = {
//     name: 'John',
//     age: 23,
//     isAdult: true,
//     nested2: {
//         name: 'Mike',
//         age: 16,
//         isAdult: false
//     }
// };

// console.log(obj.nested2.name);

// // nested object is same thing, it just only contain object in object.
// // now if i want to change the value of name, we will write variable name pass the key name: Example,
// obj.name = 'peter'    
// console.log(obj.name)       // peter

// // ************** Functions in Objects ***************
// // in objects we will write anonymous function, Example:

// var obj = {
//     name: 'John',
//     age: 23,
//     isAdult: true,
//     nested2: {
//         name: 'Mike',
//         age: 16,
//         isAdult: false
//     },
//     sayHi: function() {
//         console.log('Hello')
//     }
// };

// // sayHi is the key of the function and it also act like its name, and the value of the sayHi is 
// // an anonymous function which prints 'Hello',

// obj.sayHi();

// obj = {
//     sayHi: function() {
//       console.log("Hello");
//     }
// };

// // method shorthand looks better, right?
// obj = {
//   sayHi() { // same as "sayHi: function()"
//     console.log("Hello");
//   }
// };


// // ================== Module one completed! ================



// // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% ADVANCE JAVASCRIPT %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// // ************* "THIS" in methods *************
// // It’s common that an object method needs to access the information stored in the object to do its job.
// // For instance, the code inside user.sayHi() may need the name of the user.
// // To access the object, a method can use the this keyword.
// // The value of this is the object “before dot”, the one used to call the method.

// let user = {
//     name: 'John',
//     age: 12,
//     sayHi() {
//         // "this" is the "current object"
//         console.log(this.name)
//     }
// };

// user.sayHi();    // John

// // *********** ( THIS ) is not Bound **********
// let user = { name: "John" };
// let admin = { name: "Admin" };

// function sayHi() {
//   console.log(this.name);
// };

// // Calling without an object: this == undefined
// function sayHi() {
//     console.log(this);
// }

// sayHi(); // undefined

// // use the same function in two objects
// user.f = sayHi;
// admin.f = sayHi;

// // these calls have different this
// // "this" inside the function is the object "before the dot"
// user.f(); // John  (this == user)
// admin.f(); // Admin  (this == admin)

// // ************** Comparison by reference *************

// let a = {};
// let b = a;             // copy the reference
// console.log(a == b);      // true, both variables reference the same object
// console.log(a === b);     // true

// // And here two independent objects are not equal, even though both are empty:
// let a = {};
// let b = {}; // two independent objects

// alert( a == b ); // false

// // ************ Cloning and merging, Object.assign ************
// let user = { name: "John" };

// let permissions1 = { canView: true };
// let permissions2 = { canEdit: true };

// // copies all properties from permissions1 and permissions2 into user
// Object.assign(user, permissions1, permissions2);

// // now user = { name: "John", canView: true, canEdit: true }

// // If the copied property name already exists, it gets overwritten:
// let user = { name: "John" };

// Object.assign(user, { name: "Pete" });

// console.log(user.name); // now user = { name: "Pete" }

// // *************** The "new Function" syntax ***************

// // There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative.
// // The syntax for creating a function:

// let fun = new Function('a', 'b', 'return a + b')
// console.log(fun(1,2));

// // and heres the function without arguments
// let sayHi = new Function('console.log("Hello")');
// sayHi();

// // **************** Time Interval in JS ******************

// // DELAY
// // The delay before run, in milliseconds (1000 ms = 1 second), by default 0.

// // arg1, arg2…
// // Arguments for the function (not supported)

// // For instance, this code calls sayHi() after 03 second:
// function set() {
//     console.log('Hi')
// }

// setTimeout(set, 3000)

// // with Arguments it should look like this
// function add(a, b) {
//     console.log(a + b)
// };

// setTimeout(add, 2000, 2, 3)

// // Example 01
// let timer = setTimeout(() => {
//     console.log('Hello')
// }, 2000)

// timer();

// // Example 02
// let func = (renderData) => {
//     setTimeout(() => {
//        renderData('Hello')
//     }, 2000)
// };

// function renderData(x) {
//    console.log(x)
// };

// func(renderData);

// // ************ Decorators and forwarding, call/apply ***********

// // ------------- CALL -------------

// // we will create an object, and inside that object we will create a function that refers to that object.
// let obj1 = {
//     name: 'John',
//     age: 20,
//     borrow() {
//         console.log(this.name + " " + this.age)
//     }
// };

// // similar to that we will also create one more object without function, but we want to make a function
// // that also refers to the second object, so here a CALL method comes in, we wil borrow a function from 
// // first object and use it on second object.

// var obj2 = {
//     name: 'Mike',
//     age: 25
// };

// // function borrowing
// obj1.borrow.call(obj2);  // Mike 25

// // this is the first method of borrowing a function from other object, now we will see another method of doing it

// // we create a function not in any object, we created this function to act globally

// // and heres our obj
// var obj1 = {
//     name: 'John',
//     age: 23,
// };

// // now we will use this function in object with call method
// bio.call(obj1);    // John 23

// // same thing we are doing in this example, but now we are taking arguments in function,

// let bio = function(grade) {
//     console.log(this.name + " " + this.age + " class " + grade)
// }

// var obj2 = {
//     name: 'Mike',
//     age: 25
// };

// bio.call(obj2, 08)
// //              |
// //    arguments passed here

// // --------------- APPLY -----------------
// // apply is also the same thing as call method, the only change is we will pass arguments in array shape,

// let bio = function(grade, home) {
//     console.log(this.name + " " + this.age + " class " + grade + " " + home)
// }

// var obj2 = {
//     name: 'Mike',
//     age: 25
// };

// bio.apply(obj2, [08, "malir"])
// //              ------|-------
// //                array form

// // -------------- BIND --------------

// // bind method creates a copy of a function and store it on variable and we can just call the variable name
// // and our function will invoke

// let myName = bio.bind(obj2, 08, 'malir');
// myName();

// // *************** Rest parameters and spread syntax **************
// // The rest of the parameters can be included in the function definition by using 
// // three dots ... followed by the name of the array that will contain them. The dots literally 
// // mean “gather the remaining parameters into an array”.

// // For instance, to gather all arguments into array args:

// function sum(a, b,c, ...args) {
//     return a + b+ c;
//     console.log(...args)        // 3, 4, 5
// };
// console.log(sum(1, 2, 3, 4, 5));
// // only 1 and 2 parameters will add up in function, and the reset of other will go in array.

// // We can choose to get the first parameters as variables, and gather only the rest.
// // Here the first two arguments go into variables and the rest go into titles array:
// function addUp(fName, lName, ...title) {
//     console.log(`${fName} ${lName}`);
//     console.log(title[0]);               // Mehroz
//     console.log(title[1]);               // Shayan
//     console.log(title);                  // Mehroz and Shayan
// };

// addUp('Zulkaif', 'Bilal', 'Mehroz', 'Shayan');

// // ----------------- The rest parameters must be at the end ----------------
// // The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

// function f(arg1, ...rest, arg2) { // arg2 after ...rest ?!
//     // error
// }
// // The ...rest must always be last.

// // ------------------- The “Arguments” variable ------------------
// // There is also a special array-like object named arguments that contains all arguments by their index.
// // For instance:

// function showName(a, b) {
//     console.log(arguments.length);       // 2
//     console.log(arguments[0]);           // John
//     console.log(arguments[1]);           // Mike
// };

// // shows: 2, John, Mike
// showName("John", "Mike");                

// // shows: 1, David, undefined (no second argument)
// showName("David");                      // 1, David, undefined

// // In old times, rest parameters did not exist in the language, and using arguments was the 
// // only way to get all arguments of the function. 
// // And it still works, we can find it in the old code.

// // ----------- Arrow functions do not have "arguments" -----------
// // If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

// // ******************* Spread Syntax ********************
// // We’ve just seen how to get an array from the list of parameters.
// // But sometimes we need to do exactly the reverse.
// // For instance, there’s a built-in function Math.max that returns the greatest number from a list:

// console.log( Math.max(3, 5, 1) ); // 5
// // Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?
// // Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:
// let arr = [3, 5, 1];

// console.log( Math.max(arr) ); // NaN

// // And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be 
// // unsure how many there are. As our script executes, there could be a lot, or there could be none. 
// // And that would get ugly.
// // Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.
// // When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
// // For Math.max:

// let arr = [3, 5, 1];

// console.log( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

// // We also can pass multiple iterables this way:
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];

// console.log( Math.max(...arr1, ...arr2) ); // 8

// // We can even combine the spread syntax with normal values:
// // Also, the spread syntax can be used to merge arrays:
// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];

// let merged = [0, ...arr, 2, ...arr2];

// console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// // ******************** Get a new copy of an array/object ********************
// let arr = [1, 2, 3];
// let arrCopy = [...arr]; // spread the array into a list of parameters
//                         // then put the result into a new array

// // do the arrays have the same contents?
// console.log(JSON.stringify(arr) === JSON.stringify(arrCopy)); // true

// // are the arrays equal?
// console.log(arr === arrCopy); // false (not same reference)

// // modifying our initial array does not modify the copy:
// arr.push(4);
// console.log(arr); // 1, 2, 3, 4
// console.log(arrCopy); // 1, 2, 3

// // Example 02
// let obj = { a: 1, b: 2, c: 3 };
// let objCopy = { ...obj }; // spread the object into a list of parameters
//                           // then return the result in a new object

// // do the objects have the same contents?
// console.log(JSON.stringify(obj) === JSON.stringify(objCopy)); // true

// // are the objects equal?
// console.log(obj === objCopy); // false (not same reference)

// // modifying our initial object does not modify the copy:
// obj.d = 4;
// console.log(JSON.stringify(obj)); // {"a":1,"b":2,"c":3,"d":4}
// console.log(JSON.stringify(objCopy)); // {"a":1,"b":2,"c":3}

// // -------------------- SUMMARY ------------------------
// // When we see "..." in the code, it is either rest parameters or the spread syntax.

// // There’s an easy way to distinguish between them:

// // When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the 
// // list of arguments into an array.
// // When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an list into a array.


// // *********** ARRAY PUSH ************
// // An easy way to append data to the end of an array is via the push() function.
// // .push() takes one or more parameters and "pushes" them onto the end of the array.
// var arr1 = [1,2,3];
// arr1.push(4);
// // arr1 is now [1,2,3,4]

// var arr2 = ["Stimpson", "J", "cat"];
// arr2.push(["happy", "joy"]);
// // arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

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