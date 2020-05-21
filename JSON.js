let person = {
    firstname : "essa",
    lastname : "abouasali",
    age : 23,
    //myFullName : function () { return `${this.firstname} ${this.lastname}` }
}

//console.log(JSON.stringify(person));
const fs = require("fs");
const path = require("path");

fs.writeFileSync(path.join(__dirname,"MyFile.txt"),JSON.stringify(person));

let filevalue = fs.readFileSync(path.join(__dirname,"MyFile.txt"));

console.log(JSON.parse(filevalue).lastname);