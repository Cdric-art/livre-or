const CommentsModel = require('../database/comments.model.js')

class CommentController {

	static async getAllComments (_, res) {
		await CommentsModel.getAll(result => {
			res.status(200).json(result)
		})
	}

	static async addComment (req, res) {
		await CommentsModel.setComment(req.body.text, () => {
			res.status(201).json({message: 'Done !'})
		})
	}

}

module.exports = CommentController
