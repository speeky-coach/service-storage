import { Readable, Writable } from 'stream';
import { EventBus, UserId } from '@speeky/framework';
import AudioUploadedDomainEvent from '../domain/AudioUploadedDomainEvent';
import StorageService from '../domain/StorageService';

class StorageApplication {
  constructor(private storageService: StorageService, private eventBus: EventBus) {}

  public uploadAudioFile(readableStream: Readable, userId: UserId, filename: string): Writable {
    const stream = this.storageService.createWriteStream(userId, filename);

    readableStream.pipe(stream).on('finish', () => {
      this.eventBus.publish(
        new AudioUploadedDomainEvent({
          userId,
          filename,
        }),
      );
    });

    return stream;
  }
}

export default StorageApplication;
