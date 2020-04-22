import { Container } from 'inversify';
import { LoggerContainerModule } from './modules/LoggerContainerModule';
import { PluginContainerModule } from './modules/PluginContainerModule';
import { InitializationSide } from './InitializationSide';
import { Services } from '@botvy-nx/framework/constants';
import { IPCEventHandlerContainerModule } from './modules/IPCEventHandlerContainerModule';

export const getContainer = async (
    initializationSide: InitializationSide,
): Promise<Container> => {
    const container = new Container();

    container
        .bind(Services.IoC.InitializationSide)
        .toConstantValue(initializationSide);
    container.load(new LoggerContainerModule());
    container.load(new PluginContainerModule());

    switch (initializationSide) {
        case InitializationSide.CLIENT:
            container.load(new IPCEventHandlerContainerModule());
            break;
        case InitializationSide.SERVER:
            break;
    }

    return container;
};
