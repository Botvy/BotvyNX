/**
 * This module is responsible on handling all the inter process communications
 * between the frontend to the electron backend.
 */

import { app, ipcMain } from 'electron';
import { environment } from '../../environments/environment';
import { getContainer, Services } from '@botvy-nx/framework/ioc';
import { Logger } from 'winston';

export default class ElectronEvents {
    static bootstrapElectronEvents(): Electron.IpcMain {
        return ipcMain;
    }
}

(async () => {
    const container = await getContainer();
    const logger = container.get<Logger>(Services.Logging.Logger);

    // Retrieve app version
    ipcMain.handle('get-app-version', (event) => {
        logger.info(`Fetching application version... [v${environment.version}]`);

        return environment.version;
    });

// Handle App termination
    ipcMain.on('quit', (event, code) => {
        logger.info('Quitting application');

        app.exit(code);
    });
})();
