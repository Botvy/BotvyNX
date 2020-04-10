/**
 * Defines a basic plugin
 */
export interface IPlugin {
    /**
     * The identifier of the plugin
     */
    id: string;

    /**
     * The name of the plugin
     */
    name: string;

    /**
     * The version of the plugin
     */
    version: string;
}
