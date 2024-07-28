const http = require("http");
const getUsers = require("./modules/users");
const getBooks = require("./modules/books");

const port = 3002;
const hostname = "http://127.0.0.1";

const server = http.createServer((request, response) => {
  if (request.url === "/users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();

    return;
  }

  if (request.url === "/books") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getBooks());
    response.end();

    return;
  }

  if (request.url === "/") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Enter request /books or /users");
    response.end();

    return;
  }

  if (request.url === "/?books/add-book") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write("Enter request /books or /users");
    response.end();

    return;
  }

  response.status = 500;
  response.statusMessage = "Internal server error";
  response.header = "Content-Type: text/plain";
  response.write("");
  response.end();
});

server.listen(
  port,
  console.log(`Сервер запущен по адресу ${hostname}:${port}`)
);
