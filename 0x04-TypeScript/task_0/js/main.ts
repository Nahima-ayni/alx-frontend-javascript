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
]
students_table = document.createElement('table')
for student of studentsList {
  let firstName_row = document.createElement('tr')
  let location_row = document.createElement('td')

  let firstNameCell = document.createElement('td')
  let locationCell = document.createElement('td')

  firstNameCell.innerText = student.firstName
  firstName_row.appendChild(firstNameCell)

  locationCell.innerText = student.location
  location_row.appendChild(locationCell)
}
