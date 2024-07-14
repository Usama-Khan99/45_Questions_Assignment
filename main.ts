// 45 Questions Assignment
// Question 2

console.log("Question 2");

let eric : string = "Hello Eric, would you like to learn some Python today?";

console.log(eric);

// Question 3

console.log("Question 3");

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

console.log("Question 4");

function printFamousQuote(author: string, quote: string): void {
    console.log(`${author} once said, "${quote}"`);
}

const author: string = "Albert Einstein";
const quote: string = "A person who never made a mistake never tried anything new.";

printFamousQuote(author, quote);

// Question 5

console.log("Question 5");

// Question 6

console.log("Question 6");

// Store the person's name with whitespace characters
let nameWithWhitespace: string = "\t \n  John Doe \n \t";

// Print the name with whitespace
console.log("Name with whitespace:", nameWithWhitespace);

// Strip whitespace from the name
let strippedName: string = nameWithWhitespace.trim();

// Print the stripped name
console.log("Stripped name:", strippedName);

// Question 7 & 8

console.log("Question 7 & 8");

console.log(5+3);
console.log(11-3);
console.log(2*4);
console.log(16/2);

// Question 9 & 10

console.log("Question 9 & 10");

// store a number in variable name favorite number
let favoriteNumber:number = 7;

// store a message in a variable
let message : string =" My favorite number is";

console.log(message + " " + favoriteNumber);


// Question 11

console.log("Question 11");

let names : string[] = ["salik","mota","ubair", "hasan"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Question 12

console.log("Question 12");

console.log("dost" +" " + names[0]);
console.log("dost" +" " + names[1]);
console.log("dost" +" " + names[2]);
console.log("dost" +" " + names[3]);

// Question 13

console.log("Question 13");

let favoriteTransportation: Array <[transport: string, brand : string]> = []

favoriteTransportation.push(['motorcycle', 'honda'])
favoriteTransportation.push(['Car', 'Toyota'])
favoriteTransportation.push(['Bicycle', 'Sohrab'])

favoriteTransportation.forEach(([transport, brand]) =>
    {console.log(`I would like to own a ${brand} ${transport}`);
    }

)


// Question 14
console.log("Question 14");


let guestList : string [] = ['Ahar','Salik','ubair']

console.log(`Welcome to dinner ${guestList[0]}`);
console.log(`Welcome to dinner ${guestList[1]}`);
console.log(`Welcome to dinner ${guestList[2]}`);

// Question 15 


// Print original guest list
console.log("Question 15: Original Guest List:");
console.log(guestList);

// Name of the guest who can't make it
let guestWhoCantMakeIt: string = "Salik";
console.log(`\nUnfortunately, ${guestWhoCantMakeIt} can't make it.`);

// Find index of the guest who can't make it
let indexToRemove: number = guestList.indexOf(guestWhoCantMakeIt);
if (indexToRemove !== -1) {
    // Replace the guest who can't make it with a new person
    let newPerson: string = "Frank";
    guestList[indexToRemove] = newPerson;

    // Print updated guest list
    console.log("\nUpdated Guest List:");
    console.log(guestList);

    // Send out invitations to remaining guests
    console.log("\nInvitations:");
    guestList.forEach(guest => {
        console.log(`Dear ${guest}, please join us for dinner!`);
    });
} else {
    console.log(`Guest ${guestWhoCantMakeIt} was not found in the list.`);
}

// Question 16 


// Print original guest list
console.log("Question 16: Original Guest List:");
console.log(guestList);


    // Inform about bigger dinner table
    console.log("\nGood news! We found a bigger dinner table!");

    // Add one new guest to the beginning of the array
    let newGuest1: string = "Harry";
    guestList.unshift(newGuest1);

    // Add one new guest to the middle of the array
    let newGuest2: string = "Isabelle";
    guestList.splice(Math.ceil(guestList.length / 2), 0, newGuest2);

    // Add one new guest to the end of the array
    let newGuest3: string = "Jack";
    guestList.push(newGuest3);

    // Print new guest list with invitations
    console.log("\nInvitations:");
    guestList.forEach(guest => {
        console.log(`Dear ${guest}, please join us for dinner!`);
    });

// Question 17 

// Print original guest list
console.log("Question 17: Original Guest List:");
console.log(guestList);

// Inform that only two people can be invited
console.log("\nSorry, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (guestList.length > 2) {
    let removedGuest: string = guestList.pop()!;
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print messages to remaining guests
console.log(`\nInvitation for ${guestList[0]}: You're still invited to dinner.`);
console.log(`Invitation for ${guestList[1]}: You're still invited to dinner.`);

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Print to verify the list is empty
console.log("\nFinal Guest List:");
console.log(guestList);


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


// Question 19 

console.log("Question 19");


// Function to print number of guests
function printNumberOfGuests(guestList: string[]): void {
    console.log(`You are inviting ${guestList.length} people to dinner.`);
}

// Call the function to print the number of guests
printNumberOfGuests(guestList);

// Question 20

console.log("Question 20");

// Define an array of countries
let countries: string[] = ['USA', 'Canada', 'Australia', 'Japan', 'Brazil', 'Germany'];

// Print the list of countries
console.log("List of countries:");
for (let country of countries) {
    console.log(country);
}

// Question 21 

console.log("Question 21");

// Define an array of city objects
let cities: { name: string, country: string, population: number }[] = [
    { name: 'New York', country: 'USA', population: 8537673 },
    { name: 'Tokyo', country: 'Japan', population: 9273000 },
    { name: 'London', country: 'UK', population: 8982000 },
    { name: 'Paris', country: 'France', population: 2141000 },
    { name: 'Sydney', country: 'Australia', population: 5312000 }
];

// Print information about each city
console.log("Information about cities:");
for (let city of cities) {
    console.log(`City: ${city.name}, Country: ${city.country}, Population: ${city.population}`);
}

// Question 22 

console.log("Question 22");


// Accessing an index that doesn't exist (intentional error)
// Trying to access the 6th city (index 5, since arrays are 0-indexed)
let sixthCity = cities[5];  // This line will cause an index error because there is no index 5

// Correcting the error by accessing an existing index
let thirdCity = cities[2];  // Corrected to access index 2

// Print information about the third city
console.log(`Third city: ${thirdCity.name}, Country: ${thirdCity.country}, Population: ${thirdCity.population}`);

// Question 23 

console.log("Question 23");

let age: number = 25;
let name: string = 'Alice';
let isAdmin: boolean = true;

// Test 1: Equality test with number
console.log("Is age == 25? I predict True.");
console.log(age == 25);

// Test 2: Equality test with string
console.log("Is name == 'Alice'? I predict True.");
console.log(name == 'Alice');

// Test 3: Inequality test with number
console.log("Is age != 30? I predict True.");
console.log(age != 30);

// Test 4: Inequality test with string
console.log("Is name != 'Bob'? I predict True.");
console.log(name != 'Bob');

// Test 5: Logical AND operation
console.log("Is isAdmin && age > 18? I predict True.");
console.log(isAdmin && age > 18);

// Test 6: Logical OR operation
console.log("Is isAdmin || age < 18? I predict True.");
console.log(isAdmin || age < 18);

// Test 7: Greater than comparison
console.log("Is age > 30? I predict False.");
console.log(age > 30);

// Test 8: Less than comparison
console.log("Is age < 30? I predict True.");
console.log(age < 30);

// Test 9: Strict equality (type and value)
console.log("Is age === '25'? I predict False.");
console.log(age === 25);

// Test 10: Strict inequality (type and value)
console.log("Is name !== 'Alice'? I predict False.");
console.log(name !== 'Alice');

