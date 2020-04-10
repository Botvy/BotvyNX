import { Container } from 'inversify';
import { LoggerContainerModule } from './modules/LoggerContainerModule';
import { PluginContainerModule } from './modules/PluginContainerModule';
import { InitializationSide } from './InitializationSide';

export const getContainer = async (
    initializationSide: InitializationSide,
): Promise<Container> => {
    const container = new Container();

    container.load(new LoggerContainerModule());
    container.load(new PluginContainerModule());

    switch (initializationSide) {
        case InitializationSide.CLIENT:
            break;
        case InitializationSide.SERVER:
            break;
    }

    return container;
};
