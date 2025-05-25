//  Practice:
// 1. Make a simple calculator using prompt() and alert()




function calculator() {
  let continueLoop = true;

  while (continueLoop) {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));

    console.log("Enter + for addition");
    console.log("Enter - for subtraction");
    console.log("Enter * for multiplication");
    console.log("Enter % for modulus");
    console.log("Enter / for division");

    let choice = prompt("Enter your choice ( +  -  *  %  / ):");

    let result;

    if (choice === '+') {
      result = num1 + num2;
    } else if (choice === '-') {
      result = num1 - num2;
    } else if (choice === '*') {
      result = num1 * num2;
    } else if (choice === '%') {
      result = num1 % num2;
    } else if (choice === '/') {
      result = num1 / num2;
    } else {
      alert("Invalid choice! Try again.");
      continue;
    }

    alert("Result = " + result);

    // Ask if user wants to continue
    let again = prompt("Do you want to perform another operation? (yes/no)");
    if (again.toLowerCase() !== "yes") {
      continueLoop = false;
    }
  }
}

calculator(); // call the function to start
