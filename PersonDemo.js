const uuid = require("uuid");
let fs = require("fs");
let path = require("path");
const Person = require("./Person");
const Random = require("./Random");
const Teacher = require("./Teacher");
const Student = require("./Student");
const StudeNTDataReader =require("./StudeNTDataReader");
const TeacherDataReader = require("./TeacherDataReader");


//let _teacherdata = new TeacherDataReader(path.join(__dirname,"Teachers.json"));
//console.log(_teacherdata.FileArray);

//console.log(_teacherdata.getTeacher("d55b84d1-64be-476b-b697-d6a4371b62f0"));
//_teacherdata.deleteTeacher("d55b84d1-64be-476b-b697-d6a4371b62f0");
//_teacherdata.addteacher(new Teacher("Essa","abouasali",23));


//let _studentdata = new StudeNTDataReader(path.join(__dirname, "Students.json"));
//console.log(_studentdata.filearray);
//console.log(_studentdata.getStudent("ce44f06e-855f-4598-a88b-07d63003b504"));

/*
let teachers = Teacher.generateRandomPeople(10);
let students = Student.generateRandomPeople(100, teachers.map(teacher => teacher.id));
// console.log(teachers);
// console.log(students);
// console.log(teachers[0].getmystudents(students));
// console.log(students[0].getteacher(teachers));
//fs.writeFileSync(path.join(__dirname,"Teachers.json"), JSON.stringify(teachers));
//fs.writeFileSync(path.join(__dirname,"Students.json"), JSON.stringify(students));

*/