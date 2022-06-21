// fsAsync

const fs = require("fs");

// fs.writeFile("read.txt", "today is awesome day;)", (err) => {
//   console.log("file created");
//   console.log(err);
// });

// fs.appendFile("read.txt", "\nAGAIN jimi.", (err) => {
//   console.log("file data appended");
//   console.log(err);
// });

fs.readFile("read.txt", "UTF-8", (err, data) => {
  console.log("file data readed: ");
  console.log(data);
  console.log("ERROR: " + err);
});
