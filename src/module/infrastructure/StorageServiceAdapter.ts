import { Writable } from 'stream';
import { Bucket, Storage } from '@google-cloud/storage';
import StorageService from '../domain/StorageService';

class StorageServiceAdapter implements StorageService {
  private storage: Storage;
  private bucket: Bucket;

  constructor() {
    this.storage = new Storage();
    this.bucket = this.storage.bucket(process.env.GOOGLE_CLOUD_STORAGE_BUCKET!);
  }

  private createPathFile(userId: string, filename: string): string {
    return `users/${userId}/conversations/${filename}`;
  }

  createWriteStream(userId: string, filename: string): Writable {
    const pathFile = this.createPathFile(userId, filename);

    const file = this.bucket.file(pathFile);

    const stream = file.createWriteStream();

    return stream;
  }
}

export const storageServiceAdapter = new StorageServiceAdapter();

export default StorageServiceAdapter;
