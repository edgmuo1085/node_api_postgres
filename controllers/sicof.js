"use strict";

const service = require("../services");
const db = require("../config");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
});

const getIndex = (req, res) => {
  res.status(200).send({ message: "API Node.js, Express, and Postgres" });
};

const getUserById = (request, response) => {
  res.status(200).send({ message: "API Node.js, Express, and Postgres" });
  /* const id = parseInt(request.params.id);

  pool.query("SELECT * FROM users WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
    //console.log("Usuario: ", id)
  }); */
};

module.exports = {
  getIndex,
  getUserById,
};
