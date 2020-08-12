//console.log("Hello World!");

//How to write a comment inline
//alert('yooo');

//Variables
var b = 'smoothie';
//console.log(b);

var someNumber = 45;
//console.log(someNumber)

// Manipulate DOM with JavaScript
/* ... It's just a fancy way of saying
change HTML with JavaScript*/


//Get element by ID and modify it throught javascript 

/*
document.getElementById('someText').innerHTML = 'Hey there!';
*/

//Input

//var age = prompt('What is your age?: ');

//Now we read the age and 'print' it out on the page 
//document.getElementById('someText').innerHTML = age;

//Numbers in JavaScript 
var num1 = 10; //int
var num2 = 5;
var num3 = 5.7; //float

//The arithmetic operations are the same as other languages

/*console.log(num1 * num2);
console.log(num1 / num2);*/

//Increment by 1
num1++; // same as num1 = num1 + 1;
//console.log(num1);

//Decrement by 1
num1--; // same as num1 = num1 - 1;
//console.log(num1);

//Divide '/', multiply '*', remainders '%'

//Increment/decrement by any number you want
num1 += 10;
//console.log(num1);

/*Functions
1. Create a function
2. Call the function
*/

//Create
function fun(){
    alert('This is a function!');
}

//Call the function
//fun();


/*Let's create a function that takes in a name and says 'Hello' followed by your name

For example

Name: "Samuel"
Return: "Hello Samuel"
*/

function greeting(yourName){
   
   var result = 'Hello ' + yourName; //String concatenation
   console.log(result);
}

//var name = prompt('What is your name?: ');
//greeting(name);

//How do arguments work in functions?
//How do we add 2 numbers together in a function?

function sumNumbers(a, b){
    var result = a + b;
    console.log(result);
}

//sumNumbers(10 , 10);

//sumNumbers("Hello ", "Samuel");

//sumNumbers('10', '10');


/*while, Do-while & for loops */

//While loops 
var num = 0;

/*
while (num < 100){
    num++;
    console.log(num);
}*/

//Do-While loop

/*
do{
    console.log(num);
    num++;
}while(num < 10);
*/

//for loops

//var and let are the same, but it's better to use let
//This for loop returns the same as the previous while loop

/*
for(let n = 1; n <= 100; n++){
    console.log(n);
}
*/

//Data types
 
let yourAge = 20; //number
let yourName = 'Samuel'; //String
let name = {first: 'Valen', last: 'Romero'}; //object
let truth = false; //boolean
let groceries = ['apple', 'banana', 'orange']; //array
let random; //undefined
let nothing = null; //value null

/*
//STRINGS in javascript (Common methods)
let fruit = 'banana';

console.log(fruit.length); //It's not counting from 0
console.log(fruit.indexOf('an')); //To see if somenthing can be found and what index it is 

//Slicing
console.log(fruit.slice(2, 4)); //it's exclusive

//Replacing
console.log(fruit.replace('ban', '123'));

//Upper case and lower case
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());

//Get a character
console.log(fruit.charAt(2));
console.log(fruit[2]);

//Spliting
console.log(fruit.split('')); //split by characters
//This returns an array of the split elements

*/


//ARRAYS in Javascript

//Declaring an array
let numbers = [1,2,3,4,5,6,7]; 
//let numbers = new Array(1,2,3,4,5,6,7);

//looping through an array

/*
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

console.log(numbers); //in one line

*/

//Array common methods 

/*
console.log('to string', numbers.toString());
console.log(numbers.join(' - '));
console.log(numbers.pop(), numbers); //pop() returns the popped element, removes the last element
console.log(numbers.push(7), numbers); //Appends 
*/

//Adding a new item
//numbers[numbers.length] = 8; //We can do this too, it's like push
//numbers[7] = 8;
//console.log(numbers[7]);

//opposite of pop
//numbers.shift(); //removes first element, if we can avoid it better

//numbers.unshift(1);

//operations with two arrays

let books = ['Harry Potter', 'Hunger games', 'Romeo and Juliett', 'Abraham'];

let quantities = [6, 5, 3];

//combine
let librarie = books.concat(quantities);

//console.log(librarie);
//console.log(librarie.slice(1, 4));

//Reverse an array
//console.log(librarie.reverse());

/*
//Sort
let nums = [5, 10, 2, 20, 3, 255, 1, 2, 334, 21];
//With numbers we have to pass a criteria
//Ascending order
console.log(nums.sort( function(a, b) {return a-b} ));
//Descending order
console.log(nums.sort( function(a, b) {return b-a} ));
*/

/*
let emptyArray = new Array();

for(let i = 0; i < 10; i++){
    emptyArray.push(i);
}
console.log(emptyArray);
*/

//OBJECTS in Javascript == dictionaries in Python

// key-value pair
let student = {
    first: "Samuel", 
    last: "Velasquez", 
    age: 20, 
    height: 180,

    //Creating a Method
    studentInfo: function(){
        return this.first + '\n' + this.last + '\n' + this.age;
    }
};

//we access the value with the key
/*
console.log(student.first);
//student.first = 'Gabriel'; // change value
student.age++; //increment an attribute
console.log(student.age);
*/

//console.log(student.studentInfo());

//IF - ELSE statements, same as Java
//18-35 is my target

/*
var age = prompt('What is your age?:'); //with let the prompt() function doesn't work
let status;

if ( (age >= 18) && (age <= 35) ){
    status = 'target demo';
    console.log(status);
}else{
    status = 'not my audience';
    console.log(status);
}
*/

//SWITCH statements, same as Java
//differentiate between weekday vs. weekend
// 0 is Sunday
// 6 is Saturday

/*
var day = prompt('Enter the day: ');
let text;

switch(day){
    case 0:
        text = 'Weekend';
        break;
    case 5:
        text = 'Weekend';
        break;
    case 6:
        text = 'Weekend';
        break;
    default:
        console.log('Weekday');
        break;
}

console.log(text);
*/





