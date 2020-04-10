import { IPlugin } from './IPlugin';
import { injectable } from 'inversify';
import { existsSync, readdirSync } from 'fs';
import { resolve } from 'path';
import { Logger } from 'winston';


@injectable()
export class PluginManager {
    private loadedPlugins: IPlugin[];

    private logger: Logger;

    constructor() {
        this.loadedPlugins = [];
    }

    /**
     * Loads all plugins from the given directory
     * @param pluginDirectory The directory to search in
     */
    public async loadPlugins(
        pluginDirectory: string,
    ) {
        // Get the directory contents of the plugin directory
        const directoryContents = readdirSync(
            pluginDirectory,
        ).filter(entry => entry !== '.')
         .filter(entry => entry !== '..');

        // Iterate over each entry
        for (const directory of directoryContents) {
            // Check if the plugin.json file exists
            if (!this.isPluginDirectory(pluginDirectory, directory)) {
                this.logger.warning(
                    `The plugin directory ${directory} does not contain a "plugin.json" file`,
                );

                continue;
            }

            this.logger.debug(`Processing plugin directory: ${directory}`);
        }
    }

    /**
     * Checks if the "plugin.json" file exists
     * @param baseDirectory The plugins directory which contains all plugins
     * @param pluginDirectory The plugin directory
     */
    private isPluginDirectory(
        baseDirectory: string,
        pluginDirectory: string,
    ) {
        const resolvedPath = resolve(
            baseDirectory,
            pluginDirectory,
        );

        const pluginDescriptorFile = resolve(
            resolvedPath,
            'plugin.json',
        );

        return existsSync(pluginDescriptorFile);
    }
}
