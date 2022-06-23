const fs = require("fs");

const bioData = {
  name: "Jimi",
  age: 20,
  channel: "Start With Jimi",
};

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("bio-data.json", jsonData, (err) => {
//   console.log("Data written in File");
//   console.log("ERROR : " + err);
// });

// fs.readFile("bio-data.json", "utf-8", (err, data) => {
//   console.log("Data: \n");
//   console.log(data);
//   console.log(err);
// });

fs.readFile("bio-data.json", "utf-8", (err, data) => {
  const orgData = JSON.parse(data);
  console.log("\nJSON Data: ");
  console.log(data);

  console.log("\nObject Data: ");
  console.log(orgData);

  console.log("\nERROR : " + err);
});

// const bioData = {
//   name: "Jimi",
//   age: 20,
//   channel: "Start With Jimi",
// };

// // console.log(bioData.name);

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// const objectData = JSON.parse(jsonData);
// console.log(objectData);
// console.log(objectData.channel);
