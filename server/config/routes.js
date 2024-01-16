import Router from 'express';

import UserController from '../modules/controller/user.js';

const router = Router();

router.get('/', (req, res) => {
  res.send('Hello World!');
});

router.post('/login', UserController.login)


export default router;