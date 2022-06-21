const path = require("path");

console.log(
  "Directory Path: " +
    path.dirname("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js")
);
console.log(
  "File Extension: " +
    path.extname("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js")
);
console.log(
  "File Name: " +
    path.basename("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js")
);

console.log(
  "Details: " + path.parse("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js")
);

console.log(
  "\nBase: " +
    path.parse("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js").base +
    "\nDirectory : " +
    path.parse("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js").dir +
    "\nExtension : " +
    path.parse("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js").ext +
    "\nName : " +
    path.parse("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js").name +
    "\nRoot : " +
    path.parse("E:Wampjune/www/ThapaTechnical/NodeJS/11/path.js").root
);
