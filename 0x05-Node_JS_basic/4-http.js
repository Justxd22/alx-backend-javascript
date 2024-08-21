const http = require('http');

const app = http.createServer();

app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});

app.listen(1245, 'localhost', () => {
  process.stdout.write('Server listening at -> http://localhost:1245\n');
});

module.exports = app;
