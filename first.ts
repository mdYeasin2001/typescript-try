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