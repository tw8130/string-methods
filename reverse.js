// Write a JavaScript
// function to reverse words in a given string.
// Test Data:
//     ("abc") - > "cba"
//     ("JavaScript Exercises") - > "tpircSavaJ sesicrexE"
//     (1234) - > "It must be a string."

function reverseWordsString(str) {
    // Check if the input is a string
    if (typeof str !== "string") {
        return "It must be a string.";
    }

    // Split the string into an array
    const words = str.split(" ");

    // Reverse the order of the words
    words.reverse();

    // Join the words back
    return words.join(" ");
}

console.log(reverseWordsString("abc")); // "cba"
console.log(reverseWordsString("JavaScript Exercises")); // "tpircSavaJ sesicrexE"
console.log(reverseWordsString(1234)); // "It must be a string."