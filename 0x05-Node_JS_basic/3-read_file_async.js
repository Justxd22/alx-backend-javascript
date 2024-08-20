#!/usr/bin/node
const fs = require('fs').promises;

async function countStudents(db) {
  try {
    const data = await fs.readFile(db, 'utf8');
    const lines = data.split('\n');

    const students = lines.slice(1);

    const fields = {};

    students.forEach((student) => {
      const [firstname, , , field] = student.split(',');

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
