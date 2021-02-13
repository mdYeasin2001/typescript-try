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
const multiply = (x, y) => x * y;
let multiply2;
multiply2 = (a, b) => a * b;
// apply typeScript on array
const numbers = [3, 5, 8, 10, 12, 9, 20, 13];
numbers.push(25);
// numbers.push('Harry');
const numbers2 = [34, 54, 32, 66, 88];
numbers2.push(59);
// numbers2.push('Potter')
const friends = ['Harry', 'Max', 'Beo', 'Bill'];
friends.push('Abdul');
// friends.push(33);
const mix = [3, 'Jon', 5, 'Jam'];
mix.push(16);
mix.push('Bala');
// apply typeScript on objects
const friend = {
    name: 'Harry Potter',
    age: 23
};
friend.name = 'Max';
// friend.name = 32;
friend.age = 25;
// friend.age = 'Twenty Five';
let player = {
    name: 'Jon',
    age: 23
};
player.name = 'Abdul';
player.age = 30;
const Harry = {
    club: 'Real Madrid',
    name: 'Harry',
    salary: 450000,
    married: true,
    wife: 'Angelina',
    isPlaying: false
};
const Max = {
    club: 'unKnown',
    name: 'Max',
    salary: 34543000,
    married: false,
    isPlaying: true
};
function getBonus(player) {
    return player.salary * 3;
}
function getBonus2(player) {
    return player.salary * 2;
}
// apply typeScript on class
class Person {
    constructor(name, father) {
        this.name = name;
        this.fatherName = father;
        this._Partner = name;
    }
    getFullName() {
        return this.name;
    }
}
const person1 = new Person('Doe', 'Doe Ban');
console.log(person1);
console.log(person1);
