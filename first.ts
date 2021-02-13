// let age = 50;
// let isFamous = true;
// let text = "hello";

let age: number = 50;
let isFamous: boolean = false;
let text: string = 'I love my country';


// const famous: boolean; // it will show an error because a const variable can't be written without assigning a value;

const famous: boolean = false;
// famous = true // it will show an error because constant variable can't be re-assign


age = 100;




// apply typescript on function
function add(num1, num2){
    return num1 + num2;
}
add(3, 12);
add('Harry', 'Potter');

function add2(num1: number, num2: number){
    return num1 + num2;
}
add2(3, 12);
// add2('Harry', 'Max'); // caught an error of type mistake

function add3(num1: number | string, num2: number | string){
    return num1 + num2;
}

function add4(firstName: string, lastName: string): string{
    return firstName + lastName;
}

const user = add4('Harry', 'Hero'); 
// const user2: number = add4('Harry', 'Hero'); // show an error because it a string type mistake






// void function and arrow function 
function doubleItAndConsoleLogIt(num: number): void{
    const result: number = num * 2;
    console.log(result);
}
const output:void = doubleItAndConsoleLogIt(10);
console.log(output);

const multiply = (x: number, y: number): number => x * y;

let multiply2: (x: number, y: number) => number;
multiply2 = (a, b) => a * b;









// apply typeScript on array

const numbers = [3, 5, 8, 10, 12, 9, 20, 13];
numbers.push(25);
// numbers.push('Harry');
const numbers2: number[] = [34, 54, 32, 66, 88];
numbers2.push(59);
// numbers2.push('Potter')

const friends: string[] = ['Harry', 'Max', 'Beo', 'Bill'];
friends.push('Abdul');
// friends.push(33);

const mix: (string | number)[] = [3, 'Jon', 5, 'Jam'];
mix.push(16);
mix.push('Bala');





// apply typeScript on objects
const friend = {
    name: 'Harry Potter',
    age: 23
}
friend.name = 'Max';
// friend.name = 32;
friend.age = 25;
// friend.age = 'Twenty Five';

let player: {
    name: string,
    age: number,
} = {
    name: 'Jon', 
    age: 23
}
player.name = 'Abdul';
player.age = 30;





// typeScript Interface
interface Player {
    club: string,
    name: string, 
    salary: number,
    married: boolean,
    wife?: string,
    isPlaying: boolean
}
const Harry: Player = {
    club: 'Real Madrid',
    name: 'Harry',
    salary: 450000,
    married: true,
    wife: 'Angelina',
    isPlaying: false
}
const Max: Player = {
    club: 'unKnown',
    name: 'Max',
    salary: 34543000,
    married: false,
    isPlaying: true
}


function getBonus(player:{salary: number}){
    return player.salary * 3;

}

function getBonus2(player: Player){
    return player.salary * 2;
}





// apply typeScript on class

class Person{
    name: string;
    private _Partner: string;
    readonly fatherName: string;
    constructor(name: string, father: string){
        this.name = name;
        this.fatherName = father;
        this._Partner = name;
    }
    getFullName(){
        return this.name;
    }
}
const person1 = new Person('Doe', 'Doe Ban')
console.log(person1);

console.log(person1);


