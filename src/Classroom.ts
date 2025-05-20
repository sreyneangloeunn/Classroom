
class Classroom {
  private students: Student[] = [];
  private teachers: Teacher[] = [];

  addStudent(student: Student): void {
    this.students.push(student);
  }

  addTeacher(teacher: Teacher): void {
    this.teachers.push(teacher);
  }

  takeAttendance(): void {
    console.log("Taking attendance...");
    this.students.forEach(student => student.markAttendance());
    this.teachers.forEach(teacher => teacher.markAttendance());
  }
}

export default Classroom;
