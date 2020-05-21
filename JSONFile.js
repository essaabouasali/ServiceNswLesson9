



class Person {
    constructor(firstName, lastName, age, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
    }

    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old`;
    }

    static generateRandomPeople(numberOfPeople) {
        let randomPeople = [];
        for (let i = 0; i < numberOfPeople; i++) {
            // Generate a random person
            let randomPerson = new Person(getRandomGivenName(), getRandomFamilyName(), getRandomNumber(42) + 18, uuid.v4());
            randomPeople.push(randomPerson);
        }
        return randomPeople;
    }
}

const fs =require("fs");
const path = require("path");
// const util = require("util");


// const LOG_FILE_PATH = path.join(__dirname,"debug.log");
// const LOG_FILESTREAM = fs.createWriteStream(LOG_FILE_PATH,{flags : "w"});

// console.log = (v) => {
//     LOG_FILESTREAM.write(util.format(v) + "\n");
//     process.stdout.write(util.format(v) + "\n");
// }

let peopleraw = JSON.parse(fs.readFileSync(path.join(__dirname,"People.json")).toString());
//console.log(people);

let people = peopleraw.map(person => new Person(person.firstName,person.lastName,person.age,person.id));

let info = people.map(person => person.getInfo());

//console.log(info);

//console.log(people[0].getInfo());
people.map(person => person.age++);
console.log(people[0].getInfo());



fs.writeFileSync(path.join(__dirname,"People.json"),JSON.stringify(people));

