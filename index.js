'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app');

const config = require('./config');

app.listen(config.portApi, () => {
	console.log(`Api esta corriendo por el puerto http://localhost:${config.portApi}`)
});