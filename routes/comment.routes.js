const router = require('express').Router()

const commentController = require('../controllers/comment.controller')

router.get('/comments', commentController.getAllComments)
router.post('/createdComment', commentController.addComment)
// router.delete('/comment/:id', commentController.deleteComment)

module.exports = router
