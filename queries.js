const Pool = require('pg').Pool
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'congresouse2',
	password: '123456',
	port: 5433,
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
