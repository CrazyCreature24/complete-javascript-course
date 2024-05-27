/*let js = 'amazing';  
console.log(40 + 8 + 23 - 10);

let firstName = "Jonas";

console.log(firstName);
*/

/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 20);
console.log(typeof 'Hello');
*/

/*
let age = 30;
age = 31;

const name = 'Alex';
name = 'Fart';
*/

/*
const ageJonas = 2037 - 1991;
const ageSarah = 2037 - 2018;
console.log(ageJonas, ageSarah); // Can log multiple variables.

console.log(ageJonas ** 3);

const firstName = 'Alex';
const lastName = 'McTernan';

console.log(firstName + ' ' + lastName);
*/

/*
const firstName = 'Alex';
const job = 'student';
const birthYear = 1997;
const currentYear = 2024;

const alex = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' year old ' + job + '!';
console.log(alex);

// Now we use template literals They can be used for all strings if you want. This make strings much nicer.
const alexNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
console.log(alexNew);

// They also make adding new lines easier, do not need to use '\n' Which works the same way as it does in C++
console.log(`String
multiple
lines`);
*/

/*
const age = 12;
const isOldEnough = age >= 16;

if (isOldEnough)
{
    console.log(`Sarah can get a driving license`);
}
else
{
    const yearsLeft = 16 - age;
    console.log(`Sarah is not old enough. Wait another ${yearsLeft} years`);
}


const birthYear = 1997;
let century;

if (birthYear <= 2000)
{
    century = 20;

} else {
    century = 21;
}
console.log(`Sarah lives in the ${century}th century`);
*/

/*
// Type conversion
const inputYear = '1991';
console.log(inputYear + 18); // Treated as string
console.log(Number(inputYear) + 18);

console.log(Number('Alex')); // Shows NaN when failed to convert.

// Type coercion (Does the conversion for you)
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3); // + makes string concatinate, - makes the values converted to Numbers
*/

/*
const age = '18';
if (age === 18) console.log('You are an adult'); // No Type coercion

if (age == 18) console.log('You are an adult'); // Can Type coercion. Avoid Loose equality

const favoriteNumber = prompt("What is your favourite number?");
*/

/*
const day = 'monday';

switch (day) {
    case 'monday':
        console.log("Plan course");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        break;
}
*/



    

let me = {
    name: 'Alex',
    age: 26
}


