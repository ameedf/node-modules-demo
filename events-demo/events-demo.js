const EventEmitter = require('events');

const myEventEmitter = new EventEmitter();

myEventEmitter.on("start", () => {
  console.log("event 'start' was handled");
});

console.log("event 'start' will be fired");
myEventEmitter.emit("start");
console.log("event 'start' was fired and handled");

myEventEmitter.on("data-ready", (data) => {
  console.log('Data is ready:', data);
});

console.log("'data-ready' is about to be fired");
myEventEmitter.emit("data-ready", { name: "ameed", age: 40 });
