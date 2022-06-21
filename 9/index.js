const fs = require("fs");

// fs.mkdir("thapa", (err) => {
//   console.log("Folder Created");
//   console.log("ERROR: " + err);
// });

// fs.writeFile("thapa/bio.txt", "My name is Jimi.", (err) => {
//   console.log("File Created and data written");
//   console.log("ERROR: " + err);
// });

// fs.appendFile("thapa/bio.txt", "\n I append this data.", (err) => {
//   console.log("Data appended");
//   console.log("ERROR: " + err);
// });

// fs.readFile("thapa/bio.txt", "utf-8", (err, data) => {
//   console.log("Data :\n" + data);
//   console.log("ERROR: " + err);
// });

// fs.rename("thapa/bio.txt", "thapa/MyBio.txt", (err) => {
//   console.log("File Renamed");
//   console.log("ERROR: "+err);
// });

// fs.unlink("thapa/MyBio.txt", (err) => {
//   console.log("File deleted");
//   console.log("ERROR: " + err);
// });

fs.rmdir("thapa", (err) => {
  console.log("Folder Deleted");
  console.log("ERROR: " + err);
});
