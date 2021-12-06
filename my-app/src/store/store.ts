
import {compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = createStore(rootReducer, composeEnhancers());