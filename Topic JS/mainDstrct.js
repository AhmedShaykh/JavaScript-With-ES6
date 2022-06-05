const bioData = {
    name: 'Josh',
    age: 23,
    gender: 'male'
};

const names = bioData.name
console.log(names);

const { name, age, gender } = bioData;

console.log(age);
console.log(gender);