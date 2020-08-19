import { Router } from 'express';

const router = Router();
const postCommentsController = require('../controllers').postComments;

router.get('/', async (req, res) => {
  const postComments = await req.context.models.PostComment.findAll();
  return res.send(postComments);
});

router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the Post Comments API',
}));

router.post('/api/:postId/comments', postCommentsController.create);
router.put('/api/:postId/comments/:postCommentId', postCommentsController.update);
router.delete('/api/:postId/comments/:postCommentId', postCommentsController.destroy);

export default router;
