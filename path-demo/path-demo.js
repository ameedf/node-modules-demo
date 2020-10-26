const path = require('path');

// https://nodejs.org/dist/latest-v12.x/docs/api/path.html

const fileName = "D:\\tmp\\reports-server\\logs\\log.txt";

console.log("fileName >>>>>", fileName);
console.log("dirname >>>>>", path.dirname(fileName));
console.log("parse >>>>>", path.parse(fileName).dir);
console.log("extname >>>>>", path.extname(fileName));
console.log("basename >>>>>", path.basename(fileName));
console.log("parse >>>>>", path.parse(fileName));
console.log("join >>>>>", path.join(fileName, "..", "/test2", "hello.js"));