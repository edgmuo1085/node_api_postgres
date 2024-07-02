"use strict";

const db = require("../config");

const Pool = require("pg").Pool;
const pool = new Pool({
  user: db.user,
  host: db.host,
  database: db.database,
  password: db.password,
  port: db.port,
});

const getIndex = (request, response) => {
  response.status(200).send({ message: "API Node.js, Express, and Postgres." });
};

const getAppVersion = (request, response) => {
  pool.query(
    'SELECT * from "VERSION_APP_SICOF" order by "ID" DESC LIMIT 1',
    (error, results) => {
      if (error) {
        throw error;
      }

      if (!results.rows.length) {
        response.status(200).json(results.rows);
        return;
      }
      let versionAppObject = [];
      results.rows.forEach((item) => {
        versionAppObject.push({
          id: item.ID,
          versionApp: item.VERSION_APP,
          creationDate: item.CREATION_DATE,
        });
      });
      response.status(200).json(versionAppObject);
    }
  );
};

const setAppVersion = (request, response) => {
  const { version } = request.body;

  pool.query(
    'insert into public."VERSION_APP_SICOF" ("VERSION_APP") values($1)',
    [version],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`version added: ${version}`);
    }
  );
};

module.exports = {
  getIndex,
  getAppVersion,
  setAppVersion,
};
