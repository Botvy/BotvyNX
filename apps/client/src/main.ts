import 'reflect-metadata';
import { getContainer, InitializationSide } from '@botvy-nx/framework/ioc';
import { Application } from './Application';

(async () => {
    const container = await getContainer(
        InitializationSide.CLIENT,
    );

    container.bind(Application).toSelf();

    const application = container.get(Application);

    application.initialize();
    application.bootstrapApp();
    application.bootstrapAppEvents();
})();
