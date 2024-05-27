'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive");

//const interface = 'Audio'; // Reserved word for possible fututre feature
*/

/*
function logger(message) {
    console.log(message);
    return message;
}


let messageSent = logger("Hello");
console.log(messageSent);
*/

/* function Declaration vs expression
// Function as a declaration. These do NOT need to be declared before calling it.
function calcAge1(birthYear) {
    return 2024 - birthYear;
}

console.log(calcAge1(1997));

//Function as an expression. Must eb created before calling it.
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

const age2 = calcAge2(1997);

console.log(calcAge1(1997), calcAge2(1997));

console.log(`daskjfklda ${calcAge2(1997)} jdsaklfjkldsj`);
*/



/* Arrow functions
// return happens implisently if it is only 1 line, else be specific. Should be stored in variable. This way does not get a 'this' keyword.
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);


const yearsToRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const yearsToRet = 65 - age;
    return `${firstName} retires in ${yearsToRet} years`;
}
console.log(yearsToRetirement(1997, "Alex"));
*/


// Arrays
/*
const friends = [
    "dsjfklj",
    "jfdsklafj",
    "djaflkjd",
    "jdasfj"
]

console.log(friends[0]);
console.log(friends[1]);

const years = new Array(1991, 1982, 1945);

console.log(years[0]);

for (let i = 0; i < friends.length; i++)
{
    console.log(friends[i]);
}

const names = new Array();
console.log(names[0]); // Undefined because we did not give it a value. Did not throw error.
*/

/*
const friends = [
    "dsjfklj",
    "jfdsklafj",
    "djaflkjd",
    "jdasfj"
]

const length = friends.push('Jay'); // Add to the end of the array. Returns length.
console.log(friends);
console.log(length);

friends.unshift('John'); // Add to front
console.log(friends);

const removedElement = friends.pop(); // Pops off the last element of the array. Returns removed element
console.log(friends);

friends.shift(); // Removes the front element.
console.log(friends);

console.log(friends.indexOf('dsjfklj')); // Returns the index of the element

console.log(friends.includes('dsjfklj')); // Returns true if the element is in the array
*/


// Objects
/*
const Alex = {
    firstName: 'Alexander',
    lastName: 'McTernan',
    birthYear: 1997,
    isMale: true,
    friends: ['Keegan', 'Tyson', 'Matt'],

    calcAge: function () {
        this.age = 2024 - this.birthYear; // this is a reference to itself
        return this.age; // Does not need to return
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old, and they are a ${this.isMale ? 'Man' : 'Woman'}.`
    }
};

console.log(Alex);
console.log(Alex.firstName); // Dot notaiton
console.log(Alex['firstName']); // Bracket notation.
console.log(Alex.friends[0]); // Accessing the array inside the object

Alex.location = 'Woodlawn'; // Dynamically expanding on the object.

console.log(Alex);
console.log(Alex.location);
console.log(Alex['location']);

console.log(Alex.calcAge());
//console.log(Alex['calcAge']());
console.log(Alex.age);

console.log(Alex.getSummary());
*/


// Loops

// For loop

for (let rep = 0; rep < 10; rep++)
{
    console.log(`Lifting weight rep number ${rep + 1}`);   
}

let i = 0
while (i < 10)
{
    console.log(i);
    i++;
}