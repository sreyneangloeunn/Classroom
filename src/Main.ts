import {Student} from "./Student";
import {Teacher} from "./Teacher";
import {Subject} from "./Subject";
import {Classroom} from "./Classroom";

// Subjects
const algorithm = new Subject("Algorithm");
const data = new Subject("Data Analytics");

// Students
const student1 = new Student("S1", "Bunny");
const student2 = new Student("S2", "chanak");

student1.enrollSubject(algorithm);
student2.enrollSubject(data);

// Teachers
const teacher1 = new Teacher("T1", "Mr. Him");
const teacher2 = new Teacher("T2", "Mr. Yon");

teacher1.assignSubject(algorithm);
teacher2.assignSubject(data);

// Classroom
const classroom = new Classroom();
classroom.addStudent(student1);
classroom.addStudent(student2);
classroom.addTeacher(teacher1);
classroom.addTeacher(teacher2);

// Take Attendance
classroom.takeAttendance();

// Display Subject Details
algorithm.displayDetails();
data.displayDetails();