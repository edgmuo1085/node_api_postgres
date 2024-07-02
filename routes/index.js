"use strict";

const express = require("express");
const sicofCtrl = require("../controllers/sicof");
const api = express.Router();

api.get("/versionApp", sicofCtrl.getAppVersion);
api.post("/versionApp", sicofCtrl.setAppVersion);
api.get("*", sicofCtrl.getIndex);

module.exports = api;
