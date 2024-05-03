const http = require("http");

const fs = require("fs");
const path = require("path");

const PORT = 8000;
const PUBLIC_DIRECTORY = path.join(__dirname, "../public");

const onRequest = (req, res) => {
  const { url } = req;
  const filePath = path.join(PUBLIC_DIRECTORY, url === "/" ? "index.html" : url === "/cars" ? "cars.html" : url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    if (filePath.endsWith(".css")) {
      res.writeHead(200, { "Content-Type": "text/css" });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
    }

    res.end(data);
  });
};

const server = http.createServer(onRequest);

server.listen(PORT, "localhost", () => console.log(`[server]: Listening on port ${PORT}`));
