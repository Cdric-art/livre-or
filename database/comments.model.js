const sql = require('../database/slqConnection')

class CommentsModel {

	static getAll = (cb) => {
		sql.query('SELECT * FROM comments ORDER BY id DESC', (err, result) => {
			if (err) throw err
			cb(result)
		})
	}

	static setComment = (data, cb) => {
		sql.query('INSERT INTO comments (text) VALUES (?)', [data], (err, result) => {
			if (err) throw err
			cb(result)
		})
	}

}

module.exports = CommentsModel