const fs = require('fs');

const newFile = 'test.txt';
fs.writeFile(newFile, "This file was just created too !\r\n", (err) => {
  if (err) {
    console.log(`Can't create file ${newFile}. ${err}`);
    return;
  }
  console.log(`File '${newFile}' was created !`);
  fs.appendFile(newFile, "Welcome to fs module\r\n", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("A string was appended !");
    }
  });
});
