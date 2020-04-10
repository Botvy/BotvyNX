import { IPCEventHandler } from '../IPCEventHandler';
import { IpcMainInvokeEvent } from 'electron';
import { inject, injectable } from 'inversify';
import { Logger } from 'winston';
import { Services } from '@botvy-nx/framework/ioc';

@injectable()
export class GetVersionIPCEventHandler extends IPCEventHandler<string> {
    private readonly logger: Logger;

    /**
     * The application version
     */
    private readonly version: string;

    constructor(
        @inject(Services.Logging.Logger) logger: Logger,
        @inject(Services.System.Version) version: string,
    ) {
        super('get-app-version');
        this.logger = logger;
        this.version = version;
    }

    public async handleEvent(
        event: IpcMainInvokeEvent,
        args: string[],
    ): Promise<string> {
        this.logger.info('Requesting application version');

        return this.version;
    }
}
