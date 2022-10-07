import { Router, Request as req, Response as res } from 'express';

const router = Router();

router.get('/', (req: req, res: res) => {
  res.send('hello from rest');
});

export default router;
