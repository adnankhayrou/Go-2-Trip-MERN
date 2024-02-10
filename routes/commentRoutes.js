const express = require('express')
const router = express.Router()
const commentController = require('../controllers/commentController');


router.post('/createComment', commentController.createNewComment);
router.get('/getComment/:productId', commentController.getCommentWithProducId);
router.patch('/updateComment/:id', commentController.updateComment);
router.delete('/deleteComment/:id', commentController.deleteComment);


module.exports = router;