const http = require("http");
const hostname = "localhost";
port = 5000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("About Page");
    res.end();
  } else if (req.url === "/admin") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.write("Admin Page");
    res.end();
  } else {
    res.end("404!");
  }
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
