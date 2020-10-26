const fs = require('fs');

const newDir = 'test';
fs.mkdir(newDir, (err) => {
  if (err) {
    console.log(`Can't make dir ${newDir}. ${err}`);
  }
  else {
    console.log(`Directory '${newDir}' was created !`);
  }
});
