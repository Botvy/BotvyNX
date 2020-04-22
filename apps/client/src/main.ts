import 'reflect-metadata';
import { getContainer, InitializationSide } from '@botvy-nx/framework/ioc';
import { Services } from '@botvy-nx/framework/constants';
import { Application } from './Application';
import { environment } from './environments/environment';

(async () => {
    const container = await getContainer(InitializationSide.CLIENT);

    container.bind(Application).toSelf();
    container
        .bind(Services.System.Version)
        .toConstantValue(environment.version);

    const application = container.get(Application);

    application.initialize();
    application.bootstrapApp();
    application.bootstrapAppEvents();
})();
