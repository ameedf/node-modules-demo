const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;  //   /ameed

  if (url.startsWith("/api/user")) {
    const user = { name: "kuku", role: "ADMIN" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(user));
  } else {
    const name = url.substring(1);  //  ameed
    const html = `<html><body><h1>Welcome ${name}</h1></body></html>`;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(html);
  }
});

server.listen(4000, () => console.log("Server is up and running on port 4000"));
