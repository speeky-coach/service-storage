import { Writable } from 'stream';
import { UserId } from '../../framework/domain/types';

interface StorageService {
  createWriteStream(userId: UserId, filename: string): Writable;
}

export default StorageService;
