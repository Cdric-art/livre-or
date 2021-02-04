const CommentsModel = require('../database/comments.model.js')

module.exports.getAllComments = async (_, res) => {
	await CommentsModel.getAll((result) => {
		res.status(200).json(result)
	})
}

module.exports.addComment = async (req, res) => {
	await CommentsModel.setComment(req.body.text, () => {
		res.status(201).json({message: 'Done !'})
	})
}

// module.exports.deleteComment = async (req, res) => {
//
// }
