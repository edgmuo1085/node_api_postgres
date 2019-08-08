'use strict'

const db = require('../config');

const Pool = require('pg').Pool
const pool = new Pool({
	user: db.user,
	host: db.host,
	database: db.database,
	password: db.password,
	port: db.port,
});

const getQueryOlap = (request, response) => {
	const { query_olap } = request.body
	pool.query('SELECT public.consulta_olap($1)', [query_olap], (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};

module.exports = {
	getQueryOlap
};