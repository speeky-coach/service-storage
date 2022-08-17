import { Writable } from 'stream';
import { UserId } from '@speeky/framework';

interface StorageService {
  createWriteStream(userId: UserId, filename: string): Writable;
}

export default StorageService;
