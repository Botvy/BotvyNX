import React from 'react';
import { IPluginState } from '../states/IPluginState';
import { Action } from 'redux';
import { IPlugin } from '@botvy-nx/framework/plugins';
import { Actions } from '../actionNames/Plugin';

export const initialState: IPluginState = {
    foundPlugins: [],
    loadedPlugins: [],
};

export const pluginReducer = (
    state: IPluginState,
    action: Action,
): IPluginState => {
    if (state === undefined) {
        return initialState;
    }

    switch (action.type) {
        case Actions.Plugins.Initialize:
            return Object.assign({}, state, {
                foundPlugins: [
                    {
                        id: 'plugin.test',
                        name: 'test',
                        version: '0.0.0',
                        getComponentsForSection: (section) => (
                            <div>test 123</div>
                        ),
                    },
                ] as IPlugin[],
            });
    }

    return state;
};
