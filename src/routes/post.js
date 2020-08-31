import { Router } from 'express';

const router = Router();
const postsController = require('../controllers').posts;

router.get('/api/home', (req, res) => res.status(200).send({
  message: 'Welcome to the Posts API',
}));

router.post('/api', postsController.create);
router.get('/api', postsController.list);
router.get('/api/:postId', postsController.retrieve);
router.put('/api/:postId', postsController.update);
router.delete('/api/:postId', postsController.destroy);

export default router;
