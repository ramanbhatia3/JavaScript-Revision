// Write to a file

const fs = require("fs");

// Async

console.log("Start of Program");

fs.writeFile("5-output.txt", "Hello!\nPractising JS", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully!");
});

console.log("End of Program");


// Sync

console.log("Start of Program");

fs.writeFile("5-output.txt", "Hello!\nPractising JS", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("File written successfully!");
});


console.log("End of Program");