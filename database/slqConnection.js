const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

const dbConnection = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME
});

dbConnection.connect(err => {
	if (err) {
		console.log('Error connecting : ' + err.stack);
		dbConnection.end();
	} else {
		console.log('Connected as id ' + dbConnection.threadId);
	}
});


module.exports = dbConnection;