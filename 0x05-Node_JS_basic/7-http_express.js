#!/usr/bin/node
const express = require('express');
const fs = require('fs').promises;

const app = express();

async function countStudents(db){
    try {
        const data = await fs.readFile(db, 'utf8');
        const lines = data.split('\n')

        const header = lines[0].split(',');
        const students = lines.slice(1);

        const fields = {};

        students.forEach((student) => {
            const [firstname, lastname, age, field] = student.split(',');

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        let mess = [];
        mess.push(`Number of students: ${students.length}`);

        for (const [field, names] of Object.entries(fields)) {
            mess.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
        return (mess.join('\n'));

    }
    catch (err){
        throw new Error('Cannot load the database');
    }
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
    const filePath = process.argv[2];
    if (!filePath) {
      res.statusCode = 500;
      res.send('Database file not specified.');
    }
    else{
      countStudents(filePath).then(data => {
        res.send(data);
      })
      .catch(error => {
        res.statusCode = 500;
        res.send(error);
      });;
    }
});

app.listen(1245, () => {
  console.log('Server listening on PORT 1245');
});

module.exports = app;