import { Router } from 'express';

const router = Router();
const postsController = require('../controllers').posts;

router.get('/', async (req, res) => {
  const posts = await req.context.models.Post.findAll();
  return res.send(posts);
});

router.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the Posts API',
}));

router.post('/api/posts', postsController.create);
router.get('/api/posts', postsController.list);
router.get('/api/:postId', postsController.retrieve);
router.put('/api/:postId', postsController.update);
router.delete('/api/:postId', postsController.destroy);

export default router;
