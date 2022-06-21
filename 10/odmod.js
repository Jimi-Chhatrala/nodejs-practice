// OS Modules

const os = require("os");

console.log("OS architecture : " + os.arch() + " bit.\n");
console.log("Hostname: " + os.hostname() + "\n");
console.log("OS System: " + os.platform() + "\n");
console.log("OS : " + os.type() + "\n");
console.log("Temp file: " + os.tmpdir() + "\n");

const freeMemory = os.freemem();
console.log("Free Memory: " + freeMemory + " bytes. \n");
console.log(`Free Memory: ${freeMemory / 1024 / 1024 / 1024} GB. \n`);

const totalMemory = os.totalmem();
console.log(`Total Memory: ${totalMemory / 1024 / 1024 / 1024} GB. \n`);
