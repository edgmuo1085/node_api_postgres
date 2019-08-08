'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = require('./app');

const config = require('./config');

app.listen(config.portApi, () => {
	console.log(`App running on port http://localhost:${config.portApi}.`)
});