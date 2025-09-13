console.log("calculator ")
let num1 = float(input("Enter first number: "))
let num2 = float(input("Enter second number: "))
let operator = input("Enter operator (+, -, *, /): ")
let result; 
if (operator == "+") 
{
    result = num1 + num2;
} 
else if (operator == "-") 
{
    result = num1 - num2;
} 
else if (operator == "*") 
{
    result = num1 * num2;
} 
else if (operator == "/") 
    {
    if (num2 === 0) 
    {
        result = "Error: Division by zero is not allowed.";
    } 
    else 
    {
        result = num1 / num2;
    }
}
else
{
    result = "Invalid operator";
}
console.log(result)