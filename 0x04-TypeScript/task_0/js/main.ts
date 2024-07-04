export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const studentA: Student = {
    firstName: "Elon",
    lastName: "Musk",
    age: 99,
    location: "Newyork, USA",
};
const studentB: Student = {
    firstName: "Bill",
    lastName: "Gates",
    age: 101,
    location: "Orlins, USA",
}
const studentsList: Student[] = [studentA, studentB];
const styleSheet = `
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;


const table = document.createElement('table');
const tableHead = document.createElement('thead');
const headRow = document.createElement('tr');
const tableBody = document.createElement('tbody');

// Insert table headers
headRow.insertAdjacentHTML('beforeend', '<td>First Name</td>');
headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
tableHead.insertAdjacentElement('beforeend', headRow);

studentsList.forEach(student => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableHead);
table.appendChild(tableBody);
const styleSheetElement = document.createElement('style');
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement('beforeend', styleSheetElement);
document.title = 'Task 0';
document.body.appendChild(table);
