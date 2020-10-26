const os = require('os');

// https://nodejs.org/dist/latest-v12.x/docs/api/os.html

console.log("platform", os.platform());
console.log("freemem", os.freemem());
console.log("totalmem", os.totalmem());
