'use strict'

const express = require('express');
const cubeCtrl = require('../controllers/cube');
const auth = require('../middleware/auth');
const api = express.Router();

api.get('/olap', cubeCtrl.getQueryOlap);
api.post('/private', cubeCtrl.postDato);
//
api.get('/users', cubeCtrl.getUsers);
api.get('/users/:id', cubeCtrl.getUserById);
api.post('/users', cubeCtrl.createUser);
api.put('/users/:id', cubeCtrl.updateUser);
api.delete('/users/:id', cubeCtrl.deleteUser);
api.get('*', cubeCtrl.getIndex);

/*
api.get('/private', auth, function (req, res) {
	res.status(200).send({ message: 'Tienes acceso' });
});
*/
module.exports = api;