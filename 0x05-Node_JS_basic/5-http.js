const http = require('http');
const fs = require('fs');

const app = http.createServer();

function countStudents(db) {
  try {
    const data = fs.readFileSync(db, 'utf8');
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

    const mess = [];
    mess.push('This is the list of our students');
    mess.push(`Number of students: ${students.length}`);

    for (const [field, names] of Object.entries(fields)) {
      mess.push(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
    return (mess.join('\n'));
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

app.on('request', (req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseText.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseText));
  } else if (req.url === '/students') {
    const filePath = process.argv[2];
    if (!filePath) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Database file not specified.');
      return;
    }
    const r = countStudents(filePath);
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', r.length);
    res.statusCode = 200;
    res.write(Buffer.from(r));
  }
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('Server listening at -> http://localhost:1245\n');
});

module.exports = app;
