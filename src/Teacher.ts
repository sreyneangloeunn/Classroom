import Person from "./Person";
import { AttendanceActions } from "../interfaces/AttendanceActions";
import Subject from "./Subject";

class Teacher extends Person implements AttendanceActions {
  private subjects: Subject[] = [];

  assignSubject(subject: Subject): void {
    this.subjects.push(subject);
    subject.assignTeacher(this);
  }

  markAbsent(): void {
    console.log(`${this.name} is not teaching today.`);
  }

  askPermission(): void {
    console.log(`${this.name} asked for leave.`);
  }

  markLate(): void {
    console.log(`${this.name} is marked late.`);
  }

  markAttendance(): void {
    console.log(`${this.name} is teaching today.`);
  }

  displayDetails(): void {
    console.log(`Teacher Name: ${this.name}, ID: ${this.id}`);
    console.log("Assigned Subjects:");
    this.subjects.forEach(subject => console.log(`  - ${subject.getSubjectName()}`));
  }
}

export default Teacher;
