import DomainEvent from '../../framework/domain/bus/DomainEvent';
import { UserId } from '../../framework/domain/types';

export interface AudioFile {
  userId: UserId;
  filename: string;
}

class AudioUploadedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'domain_event.storage.audio_uploaded';

  readonly data: AudioFile;

  constructor(audioFile: AudioFile) {
    super(AudioUploadedDomainEvent.EVENT_NAME, audioFile.userId);
    this.data = audioFile;
  }
}

export default AudioUploadedDomainEvent;
