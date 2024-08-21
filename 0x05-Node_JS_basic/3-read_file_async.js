const fs = require('fs').promises;

const countStudents = async (db) => {
  try {
    const stats = await fs.stat(db);
    if (!stats.isFile()) {
      throw new Error('Cannot load the database');
    }
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
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(new Error('Cannot load the database'));
  }
};

module.exports = countStudents;
