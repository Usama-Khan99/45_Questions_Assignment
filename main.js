"use strict";
// 45 Questions Assignment
// Question 2
Object.defineProperty(exports, "__esModule", { value: true });
let eric = "Hello Eric, would you like to learn some Python today?";
console.log(eric);
// Question 3
let name = "Usama";
console.log(name.toLowerCase());
console.log(name.toUpperCase());
function toTitleCase(str) {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
let variable = "hello world";
let titleCaseVariable = toTitleCase(variable);
console.log(titleCaseVariable); // Output: Hello World
// Question 4
function printFamousQuote(author, quote) {
    console.log(`${author} once said, "${quote}"`);
}
const author = "Albert Einstein";
const quote = "A person who never made a mistake never tried anything new.";
printFamousQuote(author, quote);
// Question 5
// Question 6
// Store the person's name with whitespace characters
let nameWithWhitespace = "\t \n  John Doe \n \t";
// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);
// Strip whitespace from the name
let strippedName = nameWithWhitespace.trim();
// Print the stripped name
console.log("Stripped name:", strippedName);
// Question 7 & 8
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
// Question 9 & 10
// store a number in variable name favorite number
let favoriteNumber = 7;
// store a message in a variable
let message = " My favorite number is";
console.log(message + " " + favoriteNumber);
// Question 11
let names = ["salik", "mota", "ubair", "hasan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
// Question 12
console.log("dost" + " " + names[0]);
console.log("dost" + " " + names[1]);
console.log("dost" + " " + names[2]);
console.log("dost" + " " + names[3]);
// Question 13
let favoriteTransportation = [];
favoriteTransportation.push(['motorcycle', 'honda']);
favoriteTransportation.push(['Car', 'Toyota']);
favoriteTransportation.push(['Bicycle', 'Sohrab']);
favoriteTransportation.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand} ${transport}`);
});
// Question 14
let guestList = ['Ahar', 'Salik', 'ubair'];
console.log(`Welcome to dinner ${guestList[0]}`);
console.log(`Welcome to dinner ${guestList[1]}`);
console.log(`Welcome to dinner ${guestList[2]}`);
// QUestion 15
guestList.push('Mota');
console.log(guestList);
