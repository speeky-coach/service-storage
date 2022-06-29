import { Readable, Writable } from 'stream';
import EventBus from '../../framework/domain/bus/EventBus';
import { UserId } from '../../framework/domain/types';
import AudioUploadedDomainEvent from '../domain/AudioUploadedDomainEvent';
import StorageService from '../domain/StorageService';

class StorageApplication {
  constructor(private storageService: StorageService, private eventBus: EventBus) {}

  public uploadAudioFile(readableStream: Readable, userId: UserId, conversationId: string): Writable {
    const { stream, url } = this.storageService.createWriteStream(userId, conversationId);

    readableStream.pipe(stream).on('finish', () => {
      this.eventBus.publish([
        new AudioUploadedDomainEvent({
          url,
          userId,
          conversationId,
        }),
      ]);
    });

    return stream;
  }
}

export default StorageApplication;
