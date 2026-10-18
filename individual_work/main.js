console.log("--- Task 6: Variables and Data Types ---");
const fullName = "Akerke Yermakhan"; 
let age = 19;                        
let isStudent = confirm("Are you a student of Astana IT University?"); 
const favColour = "Green";           

console.log("Name:", fullName, "| Type:", typeof fullName);
console.log("Age:", age, "| Type:", typeof age);
console.log("Status (from confirm):", isStudent, "| Type:", typeof isStudent);
console.log("Colour:", favColour, "| Type:", typeof favColour);

age = 20; 
console.log("Updated Age:", age);

console.log("\n--- Task 7: Input and a Greeting ---");
let userName = prompt("What is your name?");
alert("Hello, " + userName + "! Welcome to my JS tasks.");

let group = "SE-2304"; 
let templateGreeting = `Student Name: ${fullName}, Group: ${group}`;
console.log(templateGreeting);

console.log("\n--- Task 8: Sum and Arithmetic ---");
let num1String = prompt("Enter first number (Please type 12):");
let num2String = prompt("Enter second number (Please type 5):");

console.log("String concatenation result (without Number()):", num1String + num2String); 

let n1 = Number(num1String);
let n2 = Number(num2String);

console.log(`Sum (+): ${n1 + n2}`);          
console.log(`Difference (-): ${n1 - n2}`);   
console.log(`Product (*): ${n1 * n2}`);      
console.log(`Quotient (/): ${n1 / n2}`);     
console.log(`Remainder (%): ${n1 % n2}`);    

console.log("\n--- Task 9: Strings ---");
let myName = "Akerke Yermakhan";
console.log("String Length:", myName.length);             
console.log("Uppercase Version:", myName.toUpperCase());  
console.log("Lowercase Version:", myName.toLowerCase());  
console.log("First 3 characters:", myName.slice(0, 3));   

let str1 = "I love coding";
let str2 = "in JavaScript.";
console.log(str1 + " " + str2);

console.log("\n--- Task 10: Increment and Assignment ---");
let counter = 10;
console.log("Initial Tracker Value:", counter); 

counter++; 
console.log("After ++:", counter); 

counter--; 
console.log("After --:", counter); 

counter += 5; 
console.log("After += 5:", counter); 

counter -= 3; 
console.log("After -= 3:", counter); 

counter *= 2; 
console.log("After *= 2:", counter); 

counter /= 4; 
console.log("After /= 4:", counter); 

console.log("\n--- Task 11: Dog Age Calculation ---");
function calculateHumanAge(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    console.log(`Dog Age: ${dogAge} -> Equivalent Human Age: ${humanAge}`);
}
calculateHumanAge(2); 
calculateHumanAge(5); 

console.log("\n--- Task 12: Functions ---");
function greetUser(name) {
    console.log(`Welcome back to the terminal, ${name}!`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

greetUser("Alice");
greetUser("Bob");

console.log("Sum Evaluation 1 (10, 20):", calculateSum(10, 20));
console.log("Sum Evaluation 2 (5.5, 4.5):", calculateSum(5.5, 4.5));

console.log("Area Evaluation 1 (5, 8):", calculateRectangleArea(5, 8));
console.log("Area Evaluation 2 (12, 4):", calculateRectangleArea(12, 4));
