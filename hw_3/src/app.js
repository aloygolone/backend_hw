const http = require("http");

const fs = require("fs");

const getUsers = () => {
  return fs.readFileSync(path, './src/data/user.json')
}

const port = 3002;
const hostname = "http://127.0.0.1";

const server = http.createServer((request, response) => {});

server.listen(
  port,
  console.log(`Сервер запущен по адресу ${hostname}:${port}`)
);
