const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'congresouse2',
	password: '123456',
	port: 5433,
});

const getLlaves = (request, response) => {
	const { name, key } = request.body
	pool.query('SELECT public.key_foreign($1, $2)', [name, key], (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};

const getLlaves2 = (request, response) => {
	//const { hechos, mesure, dimension, filters, filtersM } = request.body
	pool.query('SELECT * FROM cubo_olap;', (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};

const getJoinsParams = (request, response) => {
	const { name } = request.body
	pool.query('SELECT public.joins_params($1)', [name], (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};

const getAttrib = (request, response) => {
	const { name } = request.body
	pool.query('SELECT public.attrib_params($1)', [name], (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};


/*
const getUsers = (request, response) => {
	pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};

const getUserById = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('SELECT * FROM users WHERE id = $1', [id], (error, results) => {
		if (error) { throw error }
		response.status(200).json(results.rows)
	})
};

const createUser = (request, response) => {
	const { name, email } = request.body

	pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
		if (error) { throw error }
		response.status(201).send(`User added with ID: ${pool.insertId}`);
		console.error("crear usuario: ", pool);
	})
};

const updateUser = (request, response) => {
	const id = parseInt(request.params.id)
	const { name, email } = request.body

	pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id],
		(error, results) => {
			if (error) { throw error }
			response.status(200).send(`User modified with ID: ${id}`)
		}
	)
};

const deleteUser = (request, response) => {
	const id = parseInt(request.params.id)

	pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
		if (error) { throw error }
		response.status(200).send(`User deleted with ID: ${id}`)
	})
};
*/
module.exports = {
	getLlaves,
	getLlaves2,
	getAttrib,
	getJoinsParams/*,
	getUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,*/
};