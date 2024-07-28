const http = require("http");

const port = 3002;
const hostname = "http://127.0.0.1";

const server = http.createServer((request, response) => {});

server.listen((port, hostname) => {
  console.log(`Сервер запущен по адресу ${hostname}:${port}`);
});
