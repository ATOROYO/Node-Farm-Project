const fs = require("fs");
const https = require("https");

// Synchronous way of reading and writng
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

// Asynchronous Way of reading and writng files
fs.readFile(`./txt/start.txt`, "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
      fs.writeFile(`./txt/brendy.txt`, ` ${data3}`, (err) => {
        console.log("I logged out Data 3");
      });
    });
  });
});

// Node Farm Project
const server = https.createServer((req, res) => {
  res.end("Hello from the server");
});

server(8000, "127.0.0.1", (err) => {
  console.log();
  ("Listening to request from port 8000");
});
