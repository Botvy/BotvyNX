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

    /**
     * Returns the components for a section
     * @param section The section to get the components for
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getComponentsForSection: (section: string) => any[];
}

export interface IPluginDescriptor extends IPlugin {
    /**
     * The main entry path to the plugin
     */
    main: string;
}
