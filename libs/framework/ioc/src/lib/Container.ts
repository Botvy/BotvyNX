import { Container } from 'inversify';
import { LoggerContainerModule } from './modules/LoggerContainerModule';
import { PluginContainerModule } from './modules/PluginContainerModule';

export const getContainer = async (): Promise<Container> => {
    const container = new Container();

    container.load(new LoggerContainerModule());
    container.load(new PluginContainerModule());

    return container;
};
