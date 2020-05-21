const Person =require("./Person");
const uuid = require("uuid");
class Teacher extends Person {
    constructor(firstName, lastName, age, id = uuid.v4()) {
        super(firstName, lastName, age, id);
    }

    static generateRandomPeople(num) {
        return super.generateRandomPeople(num).map(person => new Teacher(
            person.firstName,
            person.lastName,
            person.age,
            person.id
        ));
    }

    getmystudents(students) {
        return students.filter(student => student.teacherId == this.id);
    }
}

module.exports =Teacher ;