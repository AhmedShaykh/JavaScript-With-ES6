function checkNum(a, b) {
    if (a === 100) {
        return true
    } else if (b === 100) {
        return true
    } else if (a + b === 100) {
        return true
    } else {
        return false
    }
};

console.log(checkNum(90, 10));

let checkNum2 = (a, b) => a === 100 || b === 100 || a + b === 100;

console.log(checkNum2(0, 100));
console.log(checkNum2(110, 90));

function checkExt(str) {
    return str.slice(str.lastIndexOf('.'));
};

console.log(checkExt('ETH.sol'));

let checkExt2 = (str) => {
    return str.slice(str.lastIndexOf('.'));
};

console.log(checkExt2('App.ts'));

function getDate1(date = new Date()) {
    var dates = date.getDate();
    var months = date.getMonth();
    var years = date.getFullYear();
    return `${dates}/${months}/${years}`;
};

console.log(getDate1());

const getDate = (date = new Date()) => {
    let dates = date.getDate();
    let months = date.getMonth();
    let years = date.getFullYear();
    return `${dates}/${months}/${years}`
};

console.log(getDate());

function addStr(str) {
    let incStr = 'New'
    if (str.includes('New')) {
        return str
    } else {
        return `${incStr} ${str}`
    }
}

console.log(addStr('Office'));
console.log(addStr('New Rocket!'));

function newStr(str) {
    if (str.length > 3) {
        return (
            str.substring(0, 3) + str.substring(str.length - 3)
        )
    } else if (str.length <= 3) {
        return str
    }
}

console.log(newStr('Amsterdam'));
console.log(newStr('Karachi'));

const newStr1 = (str) => str.length <= 3 ? str : str.slice(0, 3) + str.slice(-3);
console.log(newStr1('Pakistan'));

function firstHalf(str) {
    return str.slice(0, str.length / 2);
};

console.log(firstHalf('Rain'));

const firstHalf2 = (str) => str.slice(0, str.length / 2);

console.log(firstHalf2('World'));

function rmvCh(strA, strB) {
    return strA.substring(1) + strB.substring(1);
};

console.log(rmvCh('Learn', 'Night'));

const rmvCh2 = (str1, str2) => str1.slice(1) + str2.slice(1);
console.log(rmvCh2('World', 'Hello'));

const triangle = {
    type: 'Polygon',
    sides: 3,
    sumOfAngles: 180,
    equilateral: true,
    equiangular: true
};

console.log(Object.keys(triangle));
console.log(Object.values(triangle));

const musicData = [
    { artist: 'ZAYN', name: 'Whole New World', sales: 1608000 },
    { artist: 'SQLN', name: 'Sunset', sales: 1554000 },
    { artist: 'Martin Garrix', name: 'Animals', sales: 1085000 },
    { artist: 'AHM X', name: 'Revealed', sales: 603000 },
    { artist: 'Dyro', name: 'Like A Boss', sales: 904000 },
    { artist: 'Hardwell', name: 'Hakuna Matata', sales: 820000 },
    { artist: 'The Chainsmokers', name: 'Selfie', sales: 738000 },
    { artist: 'Will Sparks', name: 'Dreaming', sales: 668000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albumSalesStrings = musicData.map(function (data) {
    return (`<b>${data.name} By ${data.artist} Sold ${data.sales} Copies<b/> <br/><br/>`)
})

document.write(albumSalesStrings);

const musicData2 = [
    { artist: 'ZAYN', name: 'Whole New World', sales: 1608000 },
    { artist: 'SQLN', name: 'Sunset', sales: 1554000 },
    { artist: 'Martin Garrix', name: 'Animals', sales: 1085000 },
    { artist: 'AHM X', name: 'Revealed', sales: 603000 },
    { artist: 'Dyro', name: 'Like A Boss', sales: 904000 },
    { artist: 'Hardwell', name: 'Hakuna Matata', sales: 820000 },
    { artist: 'The Chainsmokers', name: 'Selfie', sales: 738000 },
    { artist: 'Will Sparks', name: 'Dreaming', sales: 668000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = musicData2.filter(function (album) {
    return album.name.length > 7 && album.name.length < 15;
});

console.log(results);

function expandArray() {
    let myArray = [1, 2, 3];
    return function () {
        myArray.push(4)
        return myArray
    }
}

console.log(expandArray());

const driver = {
    name: 'Trevor',
    displayName: function () {
        return `Name: ${this.name}`;
    }
};

console.log(driver.displayName());

const car = {
    name: 'Michael'
};

console.log(driver.displayName.apply(car));

const findEven = (arr) => arr.filter(num => num % 2 === 0).length;

console.log(findEven([1, 2, 4, 5, 8]));

const leapYear = (year) => year % 4 === 0;

console.log(leapYear(2014));
console.log(leapYear(2016));

let objectA = {
    a: 1,
    b: 2,
    c: 3
};

let objectB = {
    a: 2,
    d: 4,
    c: 3
};

let objectC = {
    a: 6,
    b: 7,
    c: 5
}

const checkObject = (a, b) => Object.keys(a).every(key => b[key]);
console.log(checkObject(objectA, objectB));
console.log(checkObject(objectA, objectC));

let calculator = {
    sum(a, b) {
        return a + b
    },
    mul(a, b) {
        if (a == null || b == null) {
            return this.result();
        } else {
            return a * b
        }
    },
    result() {
        console.log('Enter a Value');
    }
}

console.log(calculator.mul(2, 4));

const ladder = {
    step: 0,
    stepUp() {
        this.step++
        console.log(this.step);
    },
    stepDown() {
        this.step--
        console.log(this.step);
    },
    showStep() {
        console.log(this.step);
    }
}

ladder.stepUp();
ladder.showStep();
ladder.stepUp();
ladder.stepDown();

let obj1 = {
    meeting: 0,
    addMeeting(a) {
        this.meeting = this.meeting + a
    },
    summary() {
        console.log(`You have ${this.meeting} Meeting Left`);
    }
};

obj1.addMeeting(2);
obj1.summary();

let obj2 = {
    day: 'Monday',
    meeting: 0,
    meetDone: 0,
    addMeeting(a) {
        this.meeting = this.meeting + a
    },
    summary() {
        console.log(`You have ${this.meeting} Meeting Left`);
    },
    decrementMeet() {
        this.meeting = this.meeting - 1
    },
    decrementSummary() {
        console.log(`You have ${this.meeting} Meeting Left`);
    },
    resetMeeting() {
        this.meeting = this.meeting * 0
    },
    meetLeft() {
        console.log(`You have ${this.meeting} Meeting Left`);
    },
    addMeetDone() {
        this.meetDone++
    },
    summaryMeetDone() {
        console.log(`You have Done ${this.meetDone} Meeting`);
    }
};

obj2.addMeeting(1);
obj2.addMeeting(1);
obj2.summary();
obj2.addMeetDone();
obj2.summaryMeetDone();
obj2.decrementMeet();
obj2.decrementSummary();
obj2.resetMeeting();
obj2.meetLeft();

// // email and password checker function, if a user entered email and password it should print "You are logged in"
// // or else it will return "enter email and password", and if a user entered only email not password or only password
// // not email it will again print "enter email and password".

// // let userChecker = (user) => {
// //    if (user.email && user.password) {
// //       console.log('You are logged in')
// //    } else {
// //       console.log('You need to log in')
// //    }
// // }

// let userChecker = (user) => user.email && user.password ? 'You are logged in' : 'enter email and password'

// var obj = {
//     name: 'Bilal',
//     email: 'test123@gmail.com',
//     password: 'abc123'
// }

// console.log(userChecker(obj))