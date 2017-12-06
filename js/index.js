// alert('World!');
// document.write('<h2>Hello World!</h2>');
// console.log('Hello World!');

// var messageForUser;
// messageForUser = 'Hello';

// document.write(messageForUser);

// document.write('<br>');

// var userAge = 20.5;
// document.write(userAge);

// let userProfession = 'Developer';
// document.write(userProfession);

// const favouriteColor = 'red';

// Data types
// ES5
// let msg = 'Hello World'; // String
// let age = 50; // Number
// let isMale = true; // Boolean: true, false
// let unknown = undefined; // undefined
// let empty = null; // null
// let obj = {}; // Object
// // ES2015
// let sym = Symbol(); // Symbol


// const userName = prompt('Enter your name');
// const greetings = 'Hello ' + userName;
// document.write(greetings);

// document.write('<br>');

// const userAge = parseFloat(prompt('Enter your age'));
// const nextAge = Math.round(userAge + 1);
// document.write('Next year you will be ' + nextAge);
// document.write('<br>');

// if (userAge < 18) {
//     document.write('Child');
// } else {
//     document.write('Adult');
// }



const calc = sum(100, 200, 300);

document.write(calc);

function sum(a, b, c) {
    return a + b + c;
}