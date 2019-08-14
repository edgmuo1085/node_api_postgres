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

const postQueryOlap = (req, res) => {
	const { query_olap } = req.body
	pool.query('SELECT public.consulta_olap($1)', [query_olap], (error, results) => {
		if (error) { throw error }
		res.status(200).json(results.rows)
		//console.log("query_olap: ", results.rows)
	});
};

const getIndex = (req, res) => {
	res.status(200).send({ message: 'API Node.js, Express, and Postgres' });
};

const postDato = (req, res) => {
	const id = req.body.id
	res.status(200).send({ token: service.createToken(id) })
	//console.log("Usuario: ", id)
};

const getUsers = (request, response) => {
	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
		//console.log("Todos: ",results.rows)
	})
};

const getUserById = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
		//console.log("Usuario: ", id)
	})
};

const createUser = (request, response) => {
	const { name, email } = request.body

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
		if (error) { throw error }
		response.status(201).json(pool.options);
		//console.error("Crear usuario: ", pool.options);
	})
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id)
	const { name, email } = request.body

	pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id],
		(error, results) => {
			if (error) { throw error }
			response.status(200).send(`User modified with ID: ${id}`)
			//console.error("Usuario modificado: ", id);
		}
	)
};

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
		if (error) { throw error }
		response.status(200).send(`User deleted with ID: ${id}`)
		//console.error("Usuario eliminado: ", id);
	})
};

module.exports = {
	postQueryOlap,
	getIndex,
	postDato,
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser
};