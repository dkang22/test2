const readlineSync = require("readline-sync");

const base = Number(readlineSync.question("\nEnter base: "));
const height = Number(readlineSync.question("Enter height: "));
const hypotenuse = Number(readlineSync.question("Enter hypotenuse: "));

if (Math.pow(base, 2) + Math.pow(height, 2) === Math.pow(hypotenuse, 2)) {
    console.log("\nYes, that's a right triangle!\n");
} else {
    console.log("\nNope...not a right triangle.\n");
}
