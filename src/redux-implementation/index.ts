import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './combineReducers';
import { rootSaga } from './rootSaga';


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

if(typeof window !== undefined ) (window as any).store = store

sagaMiddleware.run(rootSaga);