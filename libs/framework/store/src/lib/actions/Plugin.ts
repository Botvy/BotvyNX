import { Action } from 'redux';
import { Actions } from '../actionNames/Plugin';

export const InitializePlugins: () => Action = () => ({
    type: Actions.Plugins.Initialize,
});
