import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import middlewares from '../middlewares.js';

// import api routes
import user from './user.js';

const router = express.Router();
router.use(express.json());
router.use(cookieParser());
router.use(helmet());
router.use(cors());

// api root (api/v1)
router.get('/', async (req, res, next) => {
  try {
    res.json({
      success: true,
      message: 'Surprise motherfucker!'
    });
  } catch (error) {
    next(error)
  };
});

// use api routes
router.use('/user', user);

// middlewares
router.use(middlewares.notFound);
router.use(middlewares.errorHandler);

export default router;
