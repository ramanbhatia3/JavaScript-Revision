const fs = require("fs").promises;

async function cleanFile() {
    try {
        const data = await fs.readFile("1-input2.txt", "utf8");

        const cleanedData = data.replace(/\s+/g, " ").trim();

        await fs.writeFile("1-input2.txt", cleanedData);

        console.log("File cleaned successfully!");
    } catch (err) {
        console.error("Error:", err);
    }
}

cleanFile();