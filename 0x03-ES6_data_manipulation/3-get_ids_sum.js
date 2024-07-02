export default function getStudentIdsSum(getListStudents) {
  return getListStudents.reduce((sum, students) => sum + students.id, 0);
}
