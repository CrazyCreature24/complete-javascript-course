'use strict';

// Hoisting and the TDZ
// console.log(me);
// //console.log(job);
// //console.log(year);

// var me = 'ALex';
// let job = 'wh worker';
// const year = 1997;

// // Functions

// console.log(addDecal(2, 3));
// //console.log(addExpr(4, 6)); // Won't work (Because function expression)
// //console.log(addArrow(10, 3)); // Won't work (Because arrow function)

// function addDecal(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// The 'this' keyword
// console.log(this); // this = window object in the global scope.

// const calcAge = function (birthYear) {
//   console.log(2024 - birthYear);
//   console.log(this); // 'this' = undefined (Because in strict mode)
// };
// calcAge(1997);

// const calcAgeArrow = birthYear => {
//   console.log(2024 - birthYear);
//   console.log(this); // 'this' = window (Arrow function does not get 'this') It gets the 'this' of the parent function, in this case it is global scope.
// };
// calcAgeArrow(1997);

// const alex = {
//   year: 1997,
//   calcAge: function () {
//     console.log(this); // 'this' = alex object (because it is a method in an object) (It is alex because that was the object calling the keyword)
//     console.log(2024 - this.year);
//   },
// };
// alex.calcAge();

// const matilda = {
//   year: 2017,
// };
// matilda.calcAge = alex.calcAge;
// matilda.calcAge(); // 'this' = matilda, even though the method is borrowed from the alex object

// Reg vs Arrow functions
// const alex = {
//   firstName: 'Alex',
//   year: 1997,
//   calcAge: function () {
//     console.log(this);
//     console.log(2024 - this.year);

//     // Solution 1
//     // const self = this;
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996); // If you try to use 'this' it will return undefined. Use the self to preserve the 'this' keyword
//     //   };

//     // Solution 2
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996); // 'this' = alex. (Because arrow funciton, it inherits the 'this'  of the parent, in this case it is 'calcAge()')
//     };
//     isMillenial();
//   },

//   greet: () => console.log(`Hey ${this.firstName}`), // 'this' = undefined (because arrow function gets the 'this' of the parent, which is the global scope. Objects are not a block of code) DO NOT USE ARROW FUNCTIONS AS METHODS
// };

// alex.greet();
// console.log(this.firstName); // Also a global scope. So it is undefined as firstName does not exist in the global scope.
// alex.calcAge();

// Object References
// const jessica = {
//   firstnam: 'Jessica',
//   lastName: `Williams`,
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';

// console.log('Before: ', jessica);
// console.log('After: ', marriedJessica); // These reference the same object on the heap

// // Now lets create a new object instead of reference
// const jessica2 = {
//   firstnam: 'Jessica',
//   lastName: `Williams`,
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// // Shallow Copy
// const jessica2Copy = { ...jessica2 }; // This is the "Spread" operator
// jessica2Copy.lastName = 'Davis';

// console.log(jessica2, jessica2Copy);
// jessica2Copy.family.push('Mary');
// jessica2Copy.family.push('John'); // This family object is REFERENCED by both objects

// console.log('Before: ', jessica2);
// console.log('After: ', jessica2Copy);

// // Deep copy/clone
// const jessicaClone = structuredClone(jessica2);
// jessicaClone.family.push('Alex');
// jessicaClone.family.push('Robert');

// console.log('Before: ', jessica2);
// console.log('After: ', jessicaClone);
