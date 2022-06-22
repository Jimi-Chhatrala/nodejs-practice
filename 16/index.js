// HTTP Server

const http = require("http");
const { type } = require("os");

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url === "/") {
    res.end("Response Done at /.");
  } else if (req.url === "/about") {
    res.end("About Response Done at /.");
  } else if (req.url === "/contact") {
    res.end("Contact Response Done at /.");
    // res.write("Contact Response Done at /.");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1>404 Page not found Response Done at /.</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to the port no 8000");
});
