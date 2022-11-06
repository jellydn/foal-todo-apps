import type {IAppController} from '@foal/core';
import {controller} from '@foal/core';

import {ApiController} from './controllers';

export class AppController implements IAppController {
	subControllers = [controller('/api', ApiController)];
}
