import { IPlugin } from '@botvy-nx/framework/plugins';

export interface IPluginState {
    loadedPlugins: IPlugin[];
    foundPlugins: IPlugin[];
}
