import DomainEvent from '../domain/bus/DomainEvent';
import DomainEventDTO from '../infrastructure/DomainEventDTO';
import DomainEventDTOMapper from '../infrastructure/DomainEventDTOMapper';

export const dtoEventMapper: DomainEventDTOMapper<DomainEvent & { data: any }, DomainEventDTO & { data: any }> = {
  toDTO(domainEvent: DomainEvent & { data: any }): DomainEventDTO & { data: any } {
    return {
      data: domainEvent.data,
      eventName: domainEvent.eventName,
      aggregateId: domainEvent.aggregateId as string,
      eventId: domainEvent.eventId,
      occurredOn: domainEvent.occurredOn,
    };
  },
};
