import {Person} from "./Person";
import { AttendanceActions } from "./AttendanceActions";
import {Subject} from "./Subject";

export class Student extends Person implements AttendanceActions {
  private subjects: Subject[] = [];

  enrollSubject(subject: Subject): void {
    this.subjects.push(subject);
    subject.assignStudent(this);
  }

  markAbsent(): void {
    console.log(`${this.name} is marked absent.`);
  }

  askPermission(): void {
    console.log(`${this.name} asked for permission.`);
  }

  markLate(): void {
    console.log(`${this.name} is marked late.`);
  }

  markAttendance(): void {
    console.log(`${this.name} is present.`);
  }

  displayDetails(): void {
    console.log(`Student Name: ${this.name}, ID: ${this.id}`);
    console.log("Enrolled Subjects:");
    this.subjects.forEach(subject => console.log(`  - ${subject.getSubjectName()}`));
  }
}

export default Student;