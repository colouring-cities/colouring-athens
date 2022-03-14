import express from 'express';

import multiLingualController from '../controllers/multiLingualController';

const router = express.Router();


//get options to populate widgets
router.get('/options', multiLingualController.getMultiLingualOptions);

//return label of selected id
router.get('/labels', multiLingualController.getMultiLingualLabel);

export default router;
