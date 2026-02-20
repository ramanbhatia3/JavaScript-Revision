// Reading the contents of a file

const fs = require("fs");

// Async

console.log("Start of the Program")

fs.readFile("4-sample.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File Content:");
    console.log(data);
});

console.log("End of the Program")



// Sync

console.log("Start of the Program")

const data = fs.readFileSync("4-sample.txt", "utf8")

console.log("File Content:");
console.log(data);


console.log("End of the Program")