// 45 Questions Assignment
// Question 2
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var eric = "Hello Eric, would you like to learn some Python today?";
console.log(eric);
// Question 3
function printNameCases(name) {
    // Print lowercase
    console.log("Lowercase:", name.toLowerCase());
    // Print uppercase
    console.log("Uppercase:", name.toUpperCase());
    // Print titlecase (capitalize first letter of each word)
    console.log("Titlecase:", toTitleCase(name));
}
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Example usage:
var personName = "john doe";
printNameCases(personName);
// Question 4
function printFamousQuote(author, quote) {
    console.log("".concat(author, " once said, \"").concat(quote, "\""));
}
var author = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
printFamousQuote(author, quote);
// Question 5
// Question 6
// Store the person's name with whitespace characters
var nameWithWhitespace = "\t \n  John Doe \n \t";
// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);
// Strip whitespace from the name
var strippedName = nameWithWhitespace.trim();
// Print the stripped name
console.log("Stripped name:", strippedName);
// Question 7 & 8
console.log(5 + 3);
console.log(11 - 3);
console.log(2 * 4);
console.log(16 / 2);
// Question 9 & 10
// store a number in variable name favorite number
var favoriteNumber = 7;
// store a message in a variable
var message = " My favorite number is";
console.log(message + " " + favoriteNumber);
// Question 11
var names = ["salik", "mota", "ubair", "hasan"];
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
var favoriteTransportation = [];
favoriteTransportation.push(['motorcycle', 'honda']);
favoriteTransportation.push(['Car', 'Toyota']);
favoriteTransportation.push(['Bicycle', 'Sohrab']);
favoriteTransportation.forEach(function (_a) {
    var transport = _a[0], brand = _a[1];
    console.log("I would like to own a ".concat(brand, " ").concat(transport));
});
// Question 14
var guestList = ['Ahar', 'Salik', 'ubair'];
console.log("Welcome to dinner ".concat(guestList[0]));
console.log("Welcome to dinner ".concat(guestList[1]));
console.log("Welcome to dinner ".concat(guestList[2]));
// Question 15 
var placesToVisit = [
    "Tokyo",
    "Paris",
    "Machu Picchu",
    "Santorini",
    "Sydney"
];
// Print original array
console.log("Original Order:");
console.log(placesToVisit);
// Print array in alphabetical order (without modifying original list)
console.log("\nAlphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());
// Show original array is still in original order
console.log("\nOriginal Order Check:");
console.log(placesToVisit);
// Print array in reverse alphabetical order (without modifying original list)
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
// Show original array is still in original order
console.log("\nOriginal Order Check:");
console.log(placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);
// Reverse the order again to get back to original order
placesToVisit.reverse();
console.log("\nBack to Original Order:");
console.log(placesToVisit);
// Sort array in alphabetical order (modifying the original list)
placesToVisit.sort();
console.log("\nSorted Alphabetically:");
console.log(placesToVisit);
