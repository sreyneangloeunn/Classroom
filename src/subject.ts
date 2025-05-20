import Student from "./Student";
import Teacher from "./Teacher";

class Subject {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  constructor(private subjectName: string) {}

  getSubjectName(): string {
    return this.subjectName;
  }

  assignStudent(student: Student): void {
    if (!this.students.includes(student)) {
      this.students.push(student);
    }
  }

  assignTeacher(teacher: Teacher): void {
    if (!this.teachers.includes(teacher)) {
      this.teachers.push(teacher);
    }
  }

  displayDetails(): void {
    console.log(`Subject: ${this.subjectName}`);
    console.log("Students:");
    this.students.forEach(student => console.log(`  - ${student.getName()}`));
    console.log("Teachers:");
    this.teachers.forEach(teacher => console.log(`  - ${teacher.getName()}`));
  }
}

export default Subject;
