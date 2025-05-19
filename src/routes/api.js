import { Router } from 'express';

const router = Router();

router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from the API!' });
});

router.post('/echo', (req, res) => {
  res.json({ received: req.body });
});

router.get('/time', (req, res) => {
  res.json({ time: new Date().toISOString() });
});

export default router;
