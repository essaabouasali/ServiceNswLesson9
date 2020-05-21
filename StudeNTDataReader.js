const uuid = require("uuid");
let fs = require("fs");
let path = require("path");
const Person = require("./Person");
const Random = require("./Random");
const Teacher = require("./Teacher");
const Student = require("./Student");

class StudeNTDataReader {
    constructor(fileNAME) {
        this.fileNAME = fileNAME;
    }

    get filearray() {
        return JSON.parse(fs.readFileSync(this.fileNAME).toString()).map(studentRaw => new Student(
            studentRaw.firstName,
            studentRaw.lastName,
            studentRaw.age,
            studentRaw.grades,
            studentRaw.teacherId,
            studentRaw.id
        ));
    }

    set filearray(value) {
        fs.writeFileSync(this.fileNAME, JSON.stringify(value));
    }
    getStudent(id) {
        return this.filearray.find(s => s.id == id);
    }

    updatestudent(student) {
        this.filearray = this.filearray.map(s => {
            if (s.id == student.id) {
                return student;
            }
            else {
                return s;
            }
        });
    }
    deletestudent(id) {
        this.filearray = this.filearray.filter(s => s.id != id);
    }
    addstudent(student) {
        this.filearray = this.filearray.concat([student]);
    }
}

module.exports = StudeNTDataReader ;