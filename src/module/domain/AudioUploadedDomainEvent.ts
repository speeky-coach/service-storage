import DomainEvent from '../../framework/domain/bus/DomainEvent';
import { UserId } from '../../framework/domain/types';

export interface AudioFile {
  url: string;
  userId: UserId;
  conversationId: string;
}

class AudioUploadedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'domain_event.audio.uploaded';

  readonly data: AudioFile;

  constructor(audioFile: AudioFile) {
    super(AudioUploadedDomainEvent.EVENT_NAME, audioFile.conversationId);
    this.data = audioFile;
  }
}

export default AudioUploadedDomainEvent;
