const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config();

const commentRoutes = require('./routes/comment.routes');

const app = express();

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', commentRoutes);

module.exports = app;
