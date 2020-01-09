const express = require("express").Router();
const bcrypt = require("bcryptjs");
const authHelpers = require("../helpers/authHelpers");
const generateToken = require("../utils/generateToken");

express.post("/register", (req, res) => {
  let userInfo = req.body;

  if (userInfo.username && userInfo.password) {
    const hash = bcrypt.hashSync(userInfo.password, 12);
    userInfo.password = hash;
    authHelpers
      .add(userInfo)
      .then(saved => {
        res.status(201).json(saved);
      })
      .catch(error => {
        res.status(500).json({ message: "could not add user", error });
      });
  } else {
    res.status(500).json({ message: "must have username and password" });
  }
});


expres.post("/login", (req, res) => {
  let { username, password } = req.body;
  if (username && password) {
    authHelpers
      .findByLogin({ username })
      .first()
      .then(user => {
        // check that the password is valid
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);
          res.status(200).json({
            username: user.username,
            id: user.id,
            email: user.email,
            message: `Welcome ${user.username}!`,
            token
          });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      })
      .catch(error => {
        console.log("login error", error);
        res.status(500).json({ error });
      });
  } else{
    res.status(500).json({ message: "must have username and password" });
  }
});

module.exports = express;
