import { Router } from 'express';

const router = Router();
const usersController = require('../controllers').users;

router.put('/api/:userId', usersController.update);
router.delete('/api/:userId', usersController.destroy);
router.get('/:userId',usersController.retrieve)
router.get('/api/:userId',usersController.retrieve)
router.get('/', usersController.list);
router.get('/api', usersController.list);
router.post('/api', usersController.create);

export default router;
