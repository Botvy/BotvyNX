import { ContainerModule } from 'inversify';
import { GetVersionIPCEventHandler, IPCEventHandler } from '@botvy-nx/framework/events';

export class IPCEventHandlerContainerModule extends ContainerModule {
    constructor() {
        super(bind => {
            bind(IPCEventHandler).to(GetVersionIPCEventHandler);
        });
    }
}
