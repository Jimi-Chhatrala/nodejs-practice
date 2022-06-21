const fs = require("fs");

console.log("\nBefore the fs readFile() \n");

fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
  console.log(err);
});

// console.log(data);
console.log("\nAfter the clg data\n");
