
const fs = require("fs");
const path = require("path");

// write on file
fs.writeFileSync(path.join(__dirname, "MyFile.txt"),"hello world");


// read on file
let fileValue = fs.readFileSync(path.join(__dirname, "MyFile.txt"));
console.log(fileValue.toString());
