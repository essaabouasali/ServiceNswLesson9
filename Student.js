const Person = require("./Person");
const Random = require("./Random");
const uuid = require("uuid");
class Student extends Person {
    constructor(firstName, lastName, age, grades, teacherId, id = uuid.v4()) {
        super(firstName, lastName, age, id);
        this.grades = grades;
        this.teacherId = teacherId;
    }

    getteacher(teachers) {
        return teachers.find(teacher => teacher.id == this.teacherId);
    }

    static generateRandomPeople(num, validIds) {

        return super.generateRandomPeople(num).map(person => new Student(
            person.firstName,
            person.lastName,
            person.age,
            this.generatrandomgrades(),
            validIds[Random.getRandomNumber(validIds.length)],
            person.id
        ));
    }
    static generatrandomgrades() {
        let numberofgrades = Random.getRandomNumber(10);
        let grades = [];
        for (let i = 0; i < numberofgrades; i++) {
            grades.push(Random.getRandomNumber(100));
        }
        return grades;
    }
}

module.exports = Student;