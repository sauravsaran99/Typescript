let myname:string = 'saurav';
let age:number | string = 21;
let male:boolean = true;
let salery:number;
salery = 70000;
age = '20';
let firstname = new String('Danny');
console.log(firstname); // String {'Danny'}
let names: string[] = ['sa', 'ur', 'av'];
let ages: (string | number | boolean)[] = [18, 21, false, '20'];
let amount: Number[] = [4, 5, 6, 7];
// amount.push('78'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.
amount.push(78);
let exampleArr: any[] = ['hello', 84, true]; // any basically reverts TypeScript back into JavaScript
let objArr: object[] = [{name: 'saurav', age: 29}, {name: 'gaurav', age: 26}];
let person: [string, number, boolean] = ['Danny', 1, true]; //tuple
// person[0] = 100; // Error - Value at index 0 can only be a string
let personDetails: {
    name: string,
    location: string,
    isProgrammer: boolean
};//how to define object typescript

personDetails = {
    name: 'Saurav',
    location: 'IN',
    isProgrammer: true
};

// personDetails = {
//     name: 'Gaurav',
//     isProgrammer: false
// }; //ERROR: missing the isProgrammer property

interface Person {
  name: string;
  location: string;
  isProgrammer: boolean
}; //If you have multiple object to decide their field types

let person1: Person = {
    name: 'Person1',
    location: 'UK',
    isProgrammer: true
};

let person2: Person = {
    name: 'Person2',
    location: 'US',
    isProgrammer: false
};


interface Speech {
    hiIAm(name:string):string;
    goodByy: (name:string) => string;
}

let speech1: Speech = {
    hiIAm: (name: string) => `Hi! ${name}`,
    goodByy: function (name: string) {
        return `Goodbyy! ${name}`;
    }
}

console.log(speech1.hiIAm('saurav')); //Hi! saurav
console.log(speech1.goodByy('saurav')); //Goodbyy! saurav

function findRadius (radius:number, name?:number | string) : string {
    console.log(name);
    return `The radius of the circle is `+ Math.PI*radius*radius;
} //Writen a function for finding area of circle.

console.log(findRadius(4, 'saurav'));

const findRadiusAnotherFun =  (radius: number):string => `The radius of the circle is `+ Math.PI*radius*radius;
console.log(findRadiusAnotherFun(6));

const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
  };
  
  logMessage('TypeScript is superb'); // This is the message: TypeScript is superb

  type strOrNum = string | number;

  type projectObject = {
    name: string,
    id: strOrNum
  };

  const project1: projectObject = {
    name: 'project1',
    id: '3'
  };

  const project2: projectObject = {
    name: 'project2',
    id: 4
  }