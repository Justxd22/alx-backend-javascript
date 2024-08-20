#!/usr/bin/node

function displayMessage(m) {
  process.stdout.write(`${m}\n`);
}

module.exports = displayMessage;
