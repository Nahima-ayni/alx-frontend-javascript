export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return students
    .filter(students => students.location === city);
    .map(students => {
      const gradeObj = newGrades.find(grade => grade.studentId === student.id);



}
