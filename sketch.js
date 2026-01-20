// Basic knowledge
let names = ["Mark", "Dave", "Maria"];
console.log(names);

// Specific index
let colours = ["Yellow", "Pink", "Grey"];
console.log(colours[1]);

// Change value in array
names[0] = "John"
console.log(names);

names.push("Franklin")

console.log(names);

console.log("Length of names is "+names.length)

console.log("// The names array contains the names:");
console.log("\n");
for (let i = 0; i < names.length; i++) {
	console.log(names[i]);
}
console.log("\n");

// Remove last
names.pop();
console.log(names);

// Add to start
names.unshift("Sarah");
console.log(names);

// Removes the middle two names
names.splice(1, 2);
console.log(names);

// Find what index Maria is in
console.log("The index of Maria is " +names.indexOf("Maria"));

// Add two names
names.push("Ben", "Gordon");
console.log(names);

// Replace Ben with Jenny
names.splice(2, 2, "Jenny");

// The first two people are VIPs
let vips = names.slice(0, 2);
console.log("The VIPs are " +vips);

// Remove the first name
console.log("// Removed " +names[0]);
names.shift();

vips = names.slice(0, 2);
console.log("The VIPs are " +vips);

function setup() {
	createCanvas(500, 500);
	background(55);
	rectMode(CENTER);
}

function draw() {
	rect(250, 250, 100, 100);
}
