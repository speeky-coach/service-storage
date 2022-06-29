import express from 'express';
import { Bucket, Storage } from '@google-cloud/storage';
import StorageController from './StorageController';

const storageController = new StorageController();

const router = express.Router();

router.post('/audio', storageController.uploadAudioFile.bind(storageController));

/* router.post('/audio', (req, res) => {
  const storage = new Storage();
  const bucket = storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET!);

  const file = bucket.file(`users/${req.query.userId}/conversations/${req.query.conversationId}`);

  req.pipe(file.createWriteStream()).on('finish', () => {
    res.end();
  });

  console.log(`uploaded to`);
}); */

export default router;
