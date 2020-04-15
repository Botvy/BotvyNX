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
    getComponentsForSection: (section: string) => JSX.Element;
}

export interface IPluginDescriptor extends IPlugin {
    /**
     * The main entry path to the plugin
     */
    main: string;
}
