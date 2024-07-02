export default function updateStudentGradeByCity(getListStudents, city, newGrades) {
  return students
    .filter(students => students.location === city);
    


}
