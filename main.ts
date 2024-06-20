// 45 Questions Assignment
// Question 2

let eric : string = "Hello Eric, would you like to learn some Python today?";

console.log(eric);

// Question 3

function printNameCases(name: string): void {
    // Print lowercase
    console.log("Lowercase:", name.toLowerCase());

    // Print uppercase
    console.log("Uppercase:", name.toUpperCase());

    // Print titlecase (capitalize first letter of each word)
    console.log("Titlecase:", toTitleCase(name));
}

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

// Example usage:
let personName: string = "john doe";
printNameCases(personName);




// Question 4

function printFamousQuote(author: string, quote: string): void {
    console.log(`${author} once said, "${quote}"`);
}

const author: string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new.";

printFamousQuote(author, quote);

// Question 5


// Question 6

// Store the person's name with whitespace characters
let nameWithWhitespace: string = "\t \n  John Doe \n \t";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);

// Strip whitespace from the name
let strippedName: string = nameWithWhitespace.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);

// Question 7 & 8

console.log(5+3);
console.log(11-3);
console.log(2*4);
console.log(16/2);

// Question 9 & 10

// store a number in variable name favorite number
let favoriteNumber:number = 7;

// store a message in a variable
let message : string =" My favorite number is";

console.log(message + " " + favoriteNumber);


// Question 11

let names : string[] = ["salik","mota","ubair", "hasan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Question 12

console.log("dost" +" " + names[0]);
console.log("dost" +" " + names[1]);
console.log("dost" +" " + names[2]);
console.log("dost" +" " + names[3]);

// Question 13

let favoriteTransportation: Array <[transport: string, brand : string]> = []

favoriteTransportation.push(['motorcycle', 'honda'])
favoriteTransportation.push(['Car', 'Toyota'])
favoriteTransportation.push(['Bicycle', 'Sohrab'])

favoriteTransportation.forEach(([transport, brand]) =>
    {console.log(`I would like to own a ${brand} ${transport}`);
    }

)


// Question 14

let guestList : string [] = ['Ahar','Salik','ubair']

console.log(`Welcome to dinner ${guestList[0]}`);
console.log(`Welcome to dinner ${guestList[1]}`);
console.log(`Welcome to dinner ${guestList[2]}`);

// Question 15 



// Question 18 


let placesToVisit: string[] = [
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
console.log([...placesToVisit].sort());

// Show original array is still in original order
console.log("\nOriginal Order Check:");
console.log(placesToVisit);

// Print array in reverse alphabetical order (without modifying original list)
console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

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
