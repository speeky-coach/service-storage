import { rabbitMQEventBus } from '../../setup/rabbitmq';
import StorageApplication from '../application/StorageApplication';
import { storageServiceAdapter } from './StorageServiceAdapter';

export const storageApplication = new StorageApplication(storageServiceAdapter, rabbitMQEventBus);
