//Task 1: Variables and Data Types

let employeeName = "John Doe";
const employeeID = 1;
var isActive = false;

console.log(employeeName, typeof(employeeName));
console.log(employeeID, typeof(employeeID));
console.log(isActive, typeof(isActive));



//Task 2: Compound Data Types

let products = ["apple", "banana", "grape"]
const productDetails = {
        name: products,
        price: 50.00,
        inStock: "yes",
    }

console.log(products, productDetails);



//Task 3: Assignment Operators

let accountBalance = 500;
accountBalance += 50;
console.log("Updated AccountBalance1:", accountBalance);
accountBalance -= 50;
console.log("Updated AccountBalance2:", accountBalance);
accountBalance *= 10;
console.log("Updated AccountBalance3:", accountBalance);
accountBalance /= 10;
console.log("Updated AccountBalance4:", accountBalance);
accountBalance %= 57;
console.log("Updated AccountBalance5:", accountBalance);



//Task 4: Comparison Operators

let employeeScore1 = 89;
let employeeScore2 = 63;

console.log(employeeScore1 > employeeScore2);
console.log(employeeScore1 < employeeScore2);
console.log(employeeScore1 >= employeeScore2);
console.log(employeeScore1 <= employeeScore2);
console.log(employeeScore1 === employeeScore2);
console.log(employeeScore1 !== employeeScore2);
