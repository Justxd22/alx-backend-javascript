process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (input) => {
  console.log(`Your name is: ${input.trim()}`);
  if (process.stdin.isTTY) {
    process.exit();
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
