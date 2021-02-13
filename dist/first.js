"use strict";
// let age = 50;
// let isFamous = true;
// let text = "hello";
let age = 50;
let isFamous = false;
let text = 'I love my country';
// const famous: boolean; // it will show an error because a const variable can't be written without assigning a value;
const famous = false;
// famous = true // it will show an error because constant variable can't be re-assign
age = 100;
// apply typescript on function
function add(num1, num2) {
    return num1 + num2;
}
add(3, 12);
add('Harry', 'Potter');
function add2(num1, num2) {
    return num1 + num2;
}
add2(3, 12);
// add2('Harry', 'Max'); // caught an error of type mistake
function add3(num1, num2) {
    return num1 + num2;
}
function add4(firstName, lastName) {
    return firstName + lastName;
}
const user = add4('Harry', 'Hero');
// const user2: number = add4('Harry', 'Hero'); // show an error because it a string type mistake
// void function and arrow function 
function doubleItAndConsoleLogIt(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsoleLogIt(10);
console.log(output);
