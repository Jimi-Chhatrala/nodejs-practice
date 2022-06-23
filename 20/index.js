// Events Module

const EventEmitter = require("events");

const event = new EventEmitter();

event.on("sayMyName", () => {
  console.log("My name is Jimi.");
});

event.on("sayMyName", () => {
  console.log("My name is Kumar.");
});

event.on("sayMyName", () => {
  console.log("My name is Chhatrala.");
});

event.on("checkPageStatusCode", (sc, msg) => {
  console.log(`Status code is : ${sc} and the page is : ${msg}`);
});

// event.emit("sayMyName");
event.emit("checkPageStatusCode", 200, "ok");
