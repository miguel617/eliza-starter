import http from "http";

const port = parseInt(process.env.PORT || "3000");

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("Eliza says hello\n");
});

server.listen(port, () => {
  console.log(`✅ Bound HTTP server on port ${port}`);
});
