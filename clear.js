const fs = require('fs');
const path = require('path');

const directory = './src';

fs.readdir(directory, (err, files) => {
  if (err) throw err;

  for (const file of files) {
    console.log(path.join(directory, file))
    // fs.unlink(path.join(directory, file), err => {
    //   if (err) throw err;
    //t });
  }
});