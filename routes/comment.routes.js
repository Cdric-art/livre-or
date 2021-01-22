const router = require('express').Router();

const commentController = require('../controllers/comment.controller')

router.get('/comments', commentController.getAllComments);
router.get('/comment/:id', commentController.getComment);
router.post('/createdComment', commentController.setComment);
router.delete('/comment/:id', commentController.deleteComment)

module.exports = router;