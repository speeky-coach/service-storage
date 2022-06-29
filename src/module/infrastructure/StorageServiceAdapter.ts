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

  private createFilename(userId: string, conversationId: string): string {
    return `users/${userId}/conversations/${conversationId}`;
  }

  createWriteStream(
    userId: string,
    conversationId: string,
  ): {
    url: string;
    stream: Writable;
  } {
    const filename = this.createFilename(userId, conversationId);

    const file = this.bucket.file(filename);

    return {
      url: filename,
      stream: file.createWriteStream(),
    };
  }
}

export const storageServiceAdapter = new StorageServiceAdapter();

export default StorageServiceAdapter;
