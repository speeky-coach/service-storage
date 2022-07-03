import express from 'express';
import StorageController from './StorageController';

const storageController = new StorageController();

const router = express.Router();

router.post('/audio', storageController.uploadAudioFile.bind(storageController));

export default router;
