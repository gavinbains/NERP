import { Router } from 'express';

const router = Router();
const usersController = require('../controllers').users;

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(
    req.params.userId,
  );
  return res.send(user);
});

router.post('/api', usersController.create);
// router.put('/api', usersController.update);
// router.delete('/api', usersController.update);

export default router;
