const fs = require('fs');

fs.stat("test.txt", (err, stat) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("isDirectory", stat.isDirectory());
  console.log("isFile", stat.isFile());
  console.log("size", stat.size);
});
