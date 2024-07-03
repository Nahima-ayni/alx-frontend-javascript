interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

let studentsList: Student[] = [
  {
    firstName: "Tasnim",
    lastName: "Somo",
    age: 20,
    location: "Nairobi",
  },
  {
    firstName: "Naimah",
    lastName: "Madey",
    age: 19,
    location: "Nakuru",
  }
];

const studentsTable = document.createElement('table');

studentsList.forEach(student => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.innerText = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.innerText = student.location;
  row.appendChild(locationCell);

  studentsTable.appendChild(row);
});

document.body.appendChild(studentsTable);
