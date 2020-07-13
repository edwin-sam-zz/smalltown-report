// Lecture: let and const 

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6 
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);

//ES5 
function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence5(true);

//ES6

function driversLicence6(passedTest) {

    let firstName;
    const yearOfBirth = 1990; 

    if (passedTest) {
        firstName = 'John';

    }
    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence6(true);



let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);

*/

/*
//////////////////////////
//Lecture : Blocks and IIFEs

{
    const a = 1;
    let b  = 2;
}

console.log(a + b);

*/

/*
/////////////////////////
// Lecture: Strings in ES6

//ES5
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
 
function calcAge(year) {
    return 2020 - yearOfBirth;
}

console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + 
calcAge(yearOfBirth) + ' years old.');

//ES6 
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('th'));
console.log(n.includes(' S'));
console.log(`${firstName} `.repeat(5));

*/

////////////////////////
///Lesson: Arrow Functions :) 

/*
const years = [1990, 1965, 1982, 1937];

//ES5

var ages5 = years.map(function(el) {
    return 2020 - el;
})
//console.log(ages5);

//ES6
let ages6 = years.map(el => 2020 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}`;
});
console.log(ages6);
*/

/*
//ES5 

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        var self = this;
        document.querySelector('.green').addEventListener('click', function() {
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;

            alert(str);
        })
    }
}
//box5.clickMe();

//ES6 

const box6 = {
    color: 'green',
    position: 1,
    clickMe: function() {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;

            alert(str);
        })
    }
}
//box6.clickMe();

//ES5

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

var kevin = new Person('Kevin').myFriends5(friends);

//ES6

function Person(name) {
    this.name = name;
}

Person.prototype.myFriends6 = function(friends) {
    
    const arr = friends.map((el) => `${this.name} is friends with ${el}`);

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

new Person('Kevin').myFriends6(friends);

Person.prototype.myFriends7 = function(friends) {
    
    const arr = friends.map((el) => `${this.name} is friends with ${el}`);

    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];

const kate = new Person('Kate');

kate.myFriends7(friends);

console.log(kate.name);

*/

/*
///////////////////////////////
//Lecture: Destructuring

//ES5
var john = ['John', 26];
//var name = john[0];
//var age = john[1];

//ES6 

const [name, age] = ['John', 26];
//console.log(name);
//console.log(age);

const firstObj = {
    firstName: 'John',
    lastName: 'Smith',
    age: 25,
    car: 'Nissan Altima',
    married: false 
};

const {firstName: a, car: b, married: c} = firstObj;
console.log(`My first name is ${a}. I drive a ${b} and I am married? -> ${c}`);

function calculateRetirement(year) {
    let age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirementAge] = calculateRetirement(1995);
console.log(age);
console.log(retirementAge);



/////////////////
// Arrays in ES6 

/*

const boxes = document.querySelectorAll('.box');


//ES5 
var boxesArr5 = Array.prototype.slice.call(boxes);

/*
boxesArr5.forEach(function(cur) {
    cur.style.backgroundColor = 'dodgerblue';
});
*/

/*
//ES6 
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5 
/*
for (var i = 0; i < boxesArr5.length; i++) {

    if (boxesArr5[i].className === 'box blue') {
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}
*/
/*
//ES6 
for (const cur of boxesArr6) {
    if (cur.className.includes('blue')) {
        continue;
    }
    cur.textContent = 'I changed to blue!';
}

//Edwin Version
/*
const years = [1995, 2002, 2008, 2000, 1997, 1983, 2012];


let currentYear = new Date().getFullYear();

const ages = years.map(el => new Date().getFullYear() - el);
console.log(ages);

console.log(ages.map(el => el >= 18));

for (const cur of ages) {
    if (cur < 18) {
        continue;
    }
    console.log(cur);
}

console.log(cur);

*/

/*

let ages = [12, 17, 8, 21, 14, 11];

//ES5 
var full = ages.map(function(cur) {
    return cur >= 18;
})
console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6  

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));

*/

/*
/////////////////
//The spread operator

function addFourages (a, b, c, d) {
    return a + b + c + d;
}

var sum1 = addFourages(18, 30, 12, 21);
console.log(sum1);

//ES5 
var ages = [18, 30, 12, 21];
var sum2 = addFourages.apply(null, ages);
console.log(sum2);

//ES6 
var sum3 = addFourages(...ages);
console.log(sum3);

const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];

const bigFamily = [...familySmith, ...familyMiller];
console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');

const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

//////////////////////
// Lecture: Rest Parameters 
/*
//ES5 
function isFullAge5() {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(element) {
        console.log((2020 - element) >= 18);
    });
}

isFullAge5(1990, 2003, 1944);
isFullAge5(1990, 2003, 1944, 2005, 1998);

//ES6

function isFullAge6(...years) {
    years.forEach(cur => (2020 - cur) >= 18);
}
isFullAge6(1990, 2004, 1998);


//ES5 
function isFullAge5(limit) {
    //console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(element) {
        console.log((2020 - element) >= limit);
    });
}

isFullAge5(100, 1990, 2003, 1944);
isFullAge5(100, 1990, 2003, 1944, 2005, 1998);

//ES6

function isFullAge6(limit, ...years) {
    years.forEach(cur => console.log((2020 - cur) >= limit));
}
isFullAge6(17, 1990, 2004, 1998);
*/

//////////////////////////////
// Lecture: Default Parameters

//ES5 
/*
function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

    lastName === undefined ? lastName = 'Smith': lastName;
    nationality === undefined ? nationality = 'American': nationality;

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}


//ES6 
function SmithPerson(firstName, yearOfBirth, lastName = 'Smith', nationality = 'american') {

    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;

}

var john = new SmithPerson('John', 2000);
console.log(john);

var casey = new SmithPerson('Casey', 1994, 'Glase', 'nigerian');
console.log(casey);


/////////////////////
// Lecture: Maps

//ES5 
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong, please try again!');

//console.log(question.get('question'));
//console.log(question.size);

if (question.has(4)) {
    //question.delete(4);
    console.log('Answer 4 is here!');
}

//question.forEach((value, key) => console.log(`This is ${key} and it's set to ${value}`));

for (let [key, value] of question.entries()) {
    if (typeof(key) === 'number') {
        console.log(`Answer ${key}: ${value}`)
    }
}

const ans = parseInt(prompt('Write the correct answer'));

console.log(question.get(ans === question.get('correct')));
*/

/////////////////////
// Lecture: Classes

//ES5
/*
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    
}

var john5 = new Person5('John', 1995, 'dancer');
john5.calculateAge();

*/
/*
//ES6 

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }

    static greeting() {
        console.log('Hi Sir');
    }
}

const newPerson6 = new Person6('John', 1995, 'Dancer');
newPerson6.calculateAge();

*/

/*
///////////////////////////////////
// Lesson: Classes with Subclasses 


//ES5
var Person5 = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function() {
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals) {
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function() {
    this.medals++;
    console.log(this.medals);
}

var kevin = new Athlete5('kevin', 27, 'nascar driver', 5, 2);
console.log(kevin);

Person5.prototype.limbs = 2;

console.log(kevin.limbs);
console.log(kevin.wonMedal());


//ES6 

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        let age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, medals, olympicGames) {
        super(name, yearOfBirth, job);
        this.medals = medals;
        this.olympicGames = olympicGames;
    }

    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const john = new Athlete6('john', 1995, 'basketball player', 3, 2);
console.log(john);

john.wonMedal();
john.calculateAge();

*/

/////////////////////////
// Coding Challenge

/*
Suppose that you're working ina small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town so right now there are only 3 parks and 4 streets. All parks and streets have 
a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town
    (formula: number of trees/park area)
2. Average age of each town's park 
    (formula: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the towns streets
5. Size classification of all streets: 
    tiny/small/normal/big/huge. If tge size is unknown, the default is normal

All the report data should be printed to the console.

ES6 Features: classes, subclasses, template strings, default parameters, maps, arrow function, destructuring, etc
*/

//Parks function constructor 
class Park {
    constructor(name, yearBuild) {
        this.name = name;
        this.yearBuild = yearBuild;
    }

    parkAge() {
        let age = new Date().getFullYear() - this.yearBuild;
        return age;
    }
}

class EPPark extends Park {
    constructor(name, yearBuild, numTrees, parkArea) {
        super(name, yearBuild);
        this.numTrees = numTrees;
        this.parkArea = parkArea;
    }

    parkDensity() {
        let density = this.numTrees/ this.parkArea;
        return density;
    }

}

//Streets function constructor 
class Street {
    constructor(name, yearOfBuild) {
        this.name = name;
        this.yearBuild = yearOfBuild;
    }
}

class EPStreet extends Street {
    constructor(name, yearOfBuild, streetLength, streetSize = 'normal') {
        super(name, yearOfBuild);
        this.streetLength = streetLength;
        this.streetSize = streetSize;
    }
}

let data = {
    allData: {
        parks: {
            names: [],
            ages: []
        },
        streets: {
            names: [],
            ages: []
        }
    }
}

function addParkData(park) {
    //push park name
    data.allData.parks.names.push(park.name);
    //push park age
    data.allData.parks.ages.push(park.parkAge());
}

function addStreetData(street) {
    //push street name
    data.allParkData.streets.names.push(street.name);
    //Push street age
    data.allData.streets.ages.push(street.streetAge());
} 

//Parks 

//Initializing parks (3)
const pierce = new EPPark('Pierce', 1987, 1250, 2000);
addParkData(pierce);
console.log(pierce.parkAge());
console.log(pierce.parkDensity());
const kent = new EPPark('Kent', 1995, 980, 1000);
addParkData(kent);
const aggy = new EPPark('Agawam', 1990, 2200, 2000);
addParkData(aggy);
//Initializing streets  (4)
const eastern = new EPStreet('Eastern Ave', 2002, 8);
const pawtucket = new EPStreet('Pawtucket Ave', 1990, 55);
const taunton = new EPStreet('Taunton Ave', 1995, 17);
const putnam = new EPStreet('Putnam St', 1998, 4);

console.log(data);


