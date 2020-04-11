import { ContainerModule } from 'inversify';
import { createLogger, format, Logger, transports } from 'winston';
import { Services } from '@botvy-nx/framework/ioc';

export class LoggerContainerModule extends ContainerModule {
    constructor() {
        super((bind) => {
            bind(Services.Logging.Logger).toConstantValue(
                this.getConfiguredLogger(),
            );
        });
    }

    private getConfiguredLogger(): Logger {
        const { Console } = transports;

        const consoleTransport = new Console();

        return createLogger({
            transports: [consoleTransport],
            format: format.combine(
                format.colorize(),
                format.timestamp({
                    format: 'DD.MM.YYYY HH:mm:ss',
                }),
                format.printf((context) => {
                    return `[${context.timestamp}] [${context.level}] ${context.message}`;
                }),
            ),
        });
    }
}
