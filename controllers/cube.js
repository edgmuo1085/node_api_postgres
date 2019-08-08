'use strict'

const service = require('../services');
const db = require('../config');

const Pool = require('pg').Pool
const pool = new Pool({
	user: db.user,
	host: db.host,
	database: db.database,
	password: db.password,
	port: db.port,
});

const getQueryOlap = (req, res) => {
	const { query_olap } = req.body
	pool.query('SELECT public.consulta_olap($1)', [query_olap], (error, results) => {
		if (error) { throw error }
		res.status(200).json(results.rows);
	});
};

const getIndex = (req, res) => {
	res.status(200).send({ message: 'API Node.js, Express, and Postgres' });
};

const postDato = (req, res) => {
	const id = req.body.id
	res.status(200).send({ token: service.createToken(id) });
};

module.exports = {
	getQueryOlap,
	getIndex,
	postDato
};