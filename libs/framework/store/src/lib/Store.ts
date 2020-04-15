import { combineReducers, compose, createStore } from 'redux';
import { pluginReducer } from './reducer/pluginReducer';

const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const Store = createStore(
    combineReducers({
        plugins: pluginReducer,
    }),
    composeEnhancers(),
);

export default Store;
