age = 25;
let addage = age+2;
let subage = age-2;
let multage = age*2;
let divage = age/2;

console.log(addage)
console.log(subage)
console.log(multage)
console.log(divage)

console.log("webpage")



console.log("area of rectangle")
let length = 10;
let breadth = 5;
let area = length * breadth;
console.log(area)

console.log("area of square")
let side = 4;
let area_square = side * side;
console.log(area_square)

console.log("factorial of a number")
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log(factorial)

console.log("calculator operations")

let num1 = parseFloat(prompt("Enter first number: "));
let num2 = parseFloat(prompt("Enter second number: "));
let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

if (num2 === 0) {
    quotient ="Error: Division by zero is not allowed.";
    
}
else {
    quotient = num1 / num2;
}
console.log(sum)
console.log(difference)
console.log(product)
console.log(quotient)

console.log("compound interest")
let principal = parseFloat(prompt("Enter principal amount: "));
let rate = parseFloat(prompt("Enter rate of interest: "));
let time = parseFloat(prompt("Enter time (in years): "));
let compoundInterest = principal * Math.pow((1 + rate / 100), time) - principal;
console.log("Compound Interest: " + compoundInterest);


if (age>18){
    console.log("you are elgible")
}

console.log("calculator using if else")
let operator = prompt("Enter operator (+, -, *, /): ");
let result; 
if (operator == "+") {
    result = num1 + num2;
} else if (operator == "-") {
    result = num1 - num2;
} else if (operator == "*") {
    result = num1 * num2;
} else if (operator == "/") {
    if (num2 === 0) {
        result = "Error: Division by zero is not allowed.";
    } else {
        result = num1 / num2;
    }
}