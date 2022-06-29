import { Writable } from 'stream';
import { UserId } from '../../framework/domain/types';

interface StorageService {
  createWriteStream(
    userId: UserId,
    conversationId: string,
  ): {
    url: string;
    stream: Writable;
  };
}

export default StorageService;
