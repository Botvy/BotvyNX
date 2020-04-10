import { IPCEventHandler } from '../IPCEventHandler';
import { IpcMainInvokeEvent } from 'electron';
import { inject, injectable } from 'inversify';
import { Logger } from 'winston';
import { Services } from '@botvy-nx/framework/ioc';

@injectable()
export class GetVersionIPCEventHandler extends IPCEventHandler<string> {
    private logger: Logger;

    constructor(
        @inject(Services.Logging.Logger) logger: Logger,
    ) {
        super('get-app-version');
        this.logger = logger;
    }

    public async handleEvent(
        event: IpcMainInvokeEvent,
        args: string[],
    ): Promise<string> {
        this.logger.info('Requesting application version');

        return '0.0.0';
    }
}
