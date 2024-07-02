export default function getStudentsByLocation(getListStudents, city) {
  return getListStudents.filter(getListStudents => getListStudents.location === city);
}
