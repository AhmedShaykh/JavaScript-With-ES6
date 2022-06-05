var arr = [2, 4, 8, 10];

var b = arr.map(Test);
console.log(b);

function Test(x) {
    return x * 10
};

var nameArr = [
    { fName: 'David', lName: 'John' },
    { fName: 'Tokyo', lName: 'Moscow' },
    { fName: 'Mosh', lName: 'Bravo' },
];

var Arr = nameArr.map(Test2);

function Test2(x) {
    return (
        console.log(`Name: ${x.fName} ${x.lName}`)
    );
};