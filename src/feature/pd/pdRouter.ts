import express from 'express';

// import router
import userRouter from './user/userRouter';

const router = express.Router();

// Add router
router.use('/user', userRouter);

export default router;
