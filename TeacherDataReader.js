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
    get FileArray()
    {
        return JSON.parse(fs.readFileSync(this.FileName).toString()).map(teacherRaw =>
         new Teacher(teacherRaw.firstName,teacherRaw.lastName,teacherRaw.age,teacherRaw.id)   
        );
    }
    set FileArray(value)
    {
        fs.writeFileSync(this.FileName,JSON.stringify(value));
    }
    getTeacher(id)
    {   
        return this.FileArray.find(t => t.id == id);
    }
    updateteacher(teacher)
    {
        this.FileArray = this.FileArray.map(t => {
            if(t.id == teacher.id)
            {
                return teacher;
            }else{
                return t;
            }
        });
    }
    deleteTeacher(id)
    {
        this.FileArray = this.FileArray.filter(t => t.id != id);
    }
    addteacher(teacher)
    {
        this.FileArray = this.FileArray.concat([teacher]);
    } 
}

module.exports = TeacherDataReader ;