'use strict'

const express = require('express');
const cubeCtrl = require('../controllers/cube');
const api = express.Router();

api.get('/', (request, response) => {
	response.json({ info: 'Node.js, Express, and Postgres API' })
});
api.get('/olap', cubeCtrl.getQueryOlap);

module.exports = api;