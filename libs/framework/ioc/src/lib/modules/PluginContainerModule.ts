import { ContainerModule } from 'inversify';
import { PluginManager } from '@botvy-nx/framework/plugins';

export class PluginContainerModule extends ContainerModule {
    constructor() {
        super((bind) => {
            bind(PluginManager)
                .toSelf()
                .inSingletonScope();
        });
    }
}
