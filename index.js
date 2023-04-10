"use strict";
let myname = 'saurav';
let age = 21;
let male = true;
let salery;
salery = 70000;
age = '20';
let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
let names = ['sa', 'ur', 'av'];
let ages = [18, 21, false, '20'];
let amount = [4, 5, 6, 7];
// amount.push('78'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
amount.push(78);
let exampleArr = ['hello', 84, true]; // any basically reverts TypeScript back into JavaScript
let objArr = [{ name: 'saurav', age: 29 }, { name: 'gaurav', age: 26 }];
let person = ['Danny', 1, true]; //tuple
// person[0] = 100; // Error - Value at index 0 can only be a string
let personDetails; //how to define object typescript
personDetails = {
    name: 'Saurav',
    location: 'IN',
    isProgrammer: true
};
; //If you have multiple object to decide their field types
let person1 = {
    name: 'Person1',
    location: 'UK',
    isProgrammer: true
};
let person2 = {
    name: 'Person2',
    location: 'US',
    isProgrammer: false
};
let speech1 = {
    hiIAm: (name) => `Hi! ${name}`,
    goodByy: function (name) {
        return `Goodbyy! ${name}`;
    }
};
console.log(speech1.hiIAm('saurav')); //Hi! saurav
console.log(speech1.goodByy('saurav')); //Goodbyy! saurav
