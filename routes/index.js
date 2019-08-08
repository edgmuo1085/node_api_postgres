'use strict'

const express = require('express');
const cubeCtrl = require('../controllers/cube');
const auth = require('../middleware/auth');
const api = express.Router();

api.get('/olap', auth, cubeCtrl.getQueryOlap);
api.post('/private', cubeCtrl.postDato);
api.get('*', cubeCtrl.getIndex);
/*
api.get('/private', auth, function (req, res) {
	res.status(200).send({ message: 'Tienes acceso' });
});
*/
module.exports = api;