const age = 32
const firstName = 'alex'
const lastName = 'gerome'
const height = 172
const isStudent = true

console.log(age, firstName, lastName, height, isStudent)

/* ================================================ */

function myName() {
    console.log(`hello ${firstName}`)
}
myName()

/* ================================================ */

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function getNumber(arr) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] > 10) {
            console.log(`The number is ${arr[i]}`);
        }
    }
}

getNumber(array);

/* ================================================ */

function calc(num1, num2, operator) {
    if (operator === "minus") {
        return (num1 - num2)
    } else if (operator === "plus") {
        return (num1 + num2)
    } else if (operator === "divide") {
        return (num1 / num2)
    } else if (operator === "multiply") {
        return (num1 * num2)
    }
}
calc(5, 5, "multiply")

/* ================================================ */

const users = [
    { name: 'alex', age: 21, isAdmin: false, country: 'USA' },
    { name: 'john', age: 22, isAdmin: true, country: 'UK' },
    { name: 'mary', age: 25, isAdmin: false, country: 'Canada' },
    { name: 'susan', age: 28, isAdmin: true, country: 'Australia' },
    { name: 'david', age: 30, isAdmin: false, country: 'Germany' },
    { name: 'lisa', age: 27, isAdmin: false, country: 'France' },
    { name: 'mike', age: 29, isAdmin: true, country: 'Italy' }
];

let regularUser = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin == false) {
        regularUser = regularUser + 1;
    }
};
console.log(regularUser)