const http = require('http')

const handleHello = (req, res) => {
  let name = req.url.substring(7);
  res.writeHead(200, { "Content-Type": "text/html" });
  const html = `<html><body><h1>${new Date()} -- Hello ${name}</h1></body></html>`;
  res.write(html);
  res.end();
}

const handleOtherRequests = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const html = `<html><body><h1>Welcome to Node.js</h1>${new Date()}</body></html>`;
  res.end(html);
}

const PORT = 4000;
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(`Handling request >>>> ${url}`);
  if (req.url.startsWith("/hello/")) {
    handleHello(req, res);
  } else {
    handleOtherRequests(req, res);
  }
});

server.listen(PORT, () => console.log(`Server is up and running on port ${PORT}`));
