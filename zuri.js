// take the operand input

var int1 = window.prompt("Enter first number");
var int2 = window.prompt("Enter a second number");

// take the operator input
var operator = window.prompt("Enter operator from the list: +, -, /, *, %");

int1 = parseFloat (int1);
int2 = parseFloat (int2);

let result;

// using the if..elseif statement;

if (operator == '+'){
    result = int1 + int2;
}

else if (operator == '-'){
    result = int1 - int2;
}

else if (operator == '/'){
    result = int1 / int2;
}

else if (operator == '*'){
    result = int1 * int2;
}

else {
    result = int1 % int2;
}

// display result
document.write(`${result}`);


// OTHERWISE, USING THE SWITCH STATEMENT
// switch(operator) {
//     case '+':
//     result = int1 + int2;
//     document.write(`${result}`);
//     break;

//     case '-':
//     result = int1 - int2;
//     document.write(`${result}`);
//     break;

//     case '/':
//     result = int1 / int2;
//     document.write(`${result}`);
//     break;

//     case '*':
//     result = int1 * int2;
//     document.write(`${result}`);
//     break;

//     case '%':
//     result = int1 % int2;
//     document.write(`${result}`);
//     break;

//     default:
//     document.write('Invalid Operator');
//     break;
// }