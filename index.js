const fs = require("fs");

// Synchronous way of reading
const input = fs.readFileSync("txt/input.txt", "utf-8");
console.log(input);

const finalText = fs.readFileSync("txt/final.txt", "utf-8");
console.log(finalText);

const output = `This is what I know about Avocado:${input}\n${Date.now()}`;
fs.writeFileSync("txt/output.txt", output);

fs.writeFileSync(
  "txt/sharon.txt",
  "My girlfriend is called Sharon and I really love her so much and she finally told her grany about me"
);
