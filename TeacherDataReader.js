// DailyChallenge

const uuid = require("uuid");
let fs = require("fs");
let path = require("path");
const Person = require("./Person");
const Random = require("./Random");
const Teacher = require("./Teacher");
const Student = require("./Student");
const StudeNTDataReader =require("./StudeNTDataReader");

class TeacherDataReader
{
    constructor(FileName)
    {
        this.FileName = FileName;
    }
    getFileArray()
    {
        return JSON.parse(fs.readFileSync(this.FileName).toString()).map(teacherRaw =>
         new Teacher(teacherRaw.firstName,teacherRaw.lastName,teacherRaw.age,teacherRaw.id)   
        );
    }

    saveArraytoFile(teachers)
    {
        fs.writeFileSync(this.FileName,JSON.stringify(teachers));
    }
    getTeacher(id)
    {   
        return this.getFileArray().find(t => t.id == id);
    }
    updateteacher(teacher)
    {
        let teachers = this.getFileArray();
        let updatedteacher =teachers.map(t => {
            if(t.id == teacher.id)
            {
                return teacher;
            }else{
                return t;
            }
        });
        this.saveArraytoFile(updatedteacher);
    }
    deleteTeacher(id)
    {
        let teachers = this.getFileArray();
        let updatedteachers = teachers.filter(t => t.id != id);
        this.saveArraytoFile(updatedteachers);
    }
    addteacher(teacher)
    {
        let teachers = this.getFileArray();
        teachers.push(teacher);
        this.saveArraytoFile(teachers);
    } 
}

module.exports = TeacherDataReader ;