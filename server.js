const express = require("express");
const config = require("./middleware/configureMiddleware");
const restricted = require("./middleware/restrict");

const authRouter = require("./routes/authRouter");
const bnbRouter = require("./routes/bnbRoutes");

server = express();

config(server);

server.use("/auth", authRouter);
server.use("/api", restricted, bnbRouter);

server.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

module.exports = server;
