import 'dotenv/config';
import packageJson from '../../package.json';
import { ExpressApp, authMiddleware } from '@speeky/framework';
import { rabbitMQApp } from '../setup/rabbitmq';

import storageModule from '../module/module';

console.log('version', packageJson.version);

const expressApp = new ExpressApp(packageJson.version, [authMiddleware(['/health'])], [storageModule.router]);
expressApp.initErrorManagement();

if (process.env.NODE_ENV !== 'test') {
  expressApp.start([rabbitMQApp.connect()]);
}

export { expressApp, rabbitMQApp };
