const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter.js");
const userRouter = require("../user/userRouter.js");
const restaurantsRouter = require("../restaurants/restaurantsRouter.js");
const passportRouter = require("../passport/passportRouter.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/user", userRouter);
server.use("/api/restaurants", restaurantsRouter);
server.use("/api/passport", passportRouter);

server.get("/", (req, res) => {
  res.send("It's alive!");
});

module.exports = server;
