#!/usr/bin/node

const fs = require('fs');

fs.readFile(`${process.argv[2]}`, 'utf-8', (err, inputD) => {
  if (err) {
     console.error('Error reading file:', err);
     process.exit(1);
  }
  console.log(inputD.toString());
});
