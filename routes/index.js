"use strict";

const express = require("express");
const sicofCtrl = require("../controllers/sicof");
const auth = require("../middleware/auth");
const api = express.Router();

//api.get("/users/:id", cubeCtrl.getUserById);
api.get("*", sicofCtrl.getIndex);
api.get("/private", auth, function (req, res) {
  res.status(200).send({ message: "Tienes acceso" });
});

module.exports = api;
