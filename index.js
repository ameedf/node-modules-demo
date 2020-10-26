// (function (exports, require, module, __filename, __dirname) {  
// });

const p = require('./person');

console.log(p.myPerson);
p.myPerson.name = "kuku";
console.log(p.person);
