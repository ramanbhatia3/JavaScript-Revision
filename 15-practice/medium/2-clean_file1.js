// File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// hello     world    my    name   is       raman
// After the program runs, the output should be

// hello world my name is raman

const fs = require("fs");

fs.readFile("1-input.txt", "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    console.log("Original Data:");
    console.log(data);

    const cleanedData = data.replace(/\s+/g, " ").trim();

    fs.writeFile("1-input.txt", cleanedData, (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }

        console.log("File cleaned successfully!");
        console.log("Cleaned Data:");
        console.log(cleanedData);
    });
});
