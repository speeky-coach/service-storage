import * as dotenv from 'dotenv';
dotenv.config();

import ExpressApp from '../framework/express/ExpressApp';
import { rabbitMQApp } from '../framework/rabbitmq/RabbitMQApp';

import storageModule from '../module/module';

const expressApp = new ExpressApp([storageModule.router]);

if (process.env.NODE_ENV !== 'test') {
  expressApp.start([rabbitMQApp.connect()]);
}

export { expressApp, rabbitMQApp };
