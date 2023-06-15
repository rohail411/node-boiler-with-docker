const express = require("express");
const http = require("http");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((_req, _res, _next) => {
  _res.header("Access-Control-Allow-Origin", "*");
  _next();
});

app.get("/home", (_req, _res, _next) => {
  return _res.json({ message: "Home" });
});

app.use((_req, _res, _next) => {
  return _res.status(404).json({
    message: new Error("Not Found").message,
  });
});

const server = http.createServer(app);
server.listen(3000, () => console.log("Server is listing on port 3000"));
