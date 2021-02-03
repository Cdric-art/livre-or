const sql = require('../database/slqConnection')

module.exports.getAllComments = async (req, res) => {
	await sql.query('SELECT * FROM comments', (err, result) => {
		if (err) throw err
		res.status(200).json(result)
	})
}

module.exports.getComment = async (req, res) => {
	await sql.query('SELECT * FROM comments WHERE id = ?', [req.params.id], (err, result) => {
		if (err) throw err
		res.status(200).json(result)
	})
}

module.exports.addComment = async (req, res) => {

}

module.exports.deleteComment = async (req, res) => {

}
