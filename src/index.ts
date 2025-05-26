import http from "http";

const port = parseInt(process.env.PORT || "3000");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Eliza minimal test server running\n");
});

server.listen(port, () => {
  console.log(`✅ HTTP server running on port ${port}`);
});
