import { injectable, multiInject } from 'inversify';
import SquirrelEvents from './app/events/squirrel.events';
import { app, BrowserWindow, ipcMain } from 'electron';
import App from './app/app';
import { IPCEventHandler } from '@botvy-nx/framework/events';

@injectable()
export class Application {
    private readonly ipcEventHandlers: IPCEventHandler<any>[];

    constructor(
        @multiInject(IPCEventHandler) ipcEventHandlers: IPCEventHandler<any>[],
    ) {
        this.ipcEventHandlers = ipcEventHandlers;
    }

    public initialize() {
        if (SquirrelEvents.handleEvents()) {
            // squirrel event handled (except first run event) and app will exit in 1000ms, so don't do anything else
            app.quit();
        }
    }

    public bootstrapApp() {
        App.main(app, BrowserWindow);
    }

    public bootstrapAppEvents() {
        for (const ipcEventHandler of this.ipcEventHandlers) {
            ipcMain.handle(ipcEventHandler.eventName, ipcEventHandler.handleEvent);
        }

        // initialize auto updater service
        if (!App.isDevelopmentMode()) {
            // UpdateEvents.initAutoUpdateService();
        }
    }
}
