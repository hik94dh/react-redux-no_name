import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer';
import createSagaMiddleware from 'redux-saga';
import history from '../history';
import { saga } from '../ducks/people';

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(
    sagaMiddleware,
    routerMiddleware(history),
    thunk,
    logger,
);

const store = createStore(reducer, enhancer);
// для дебага
window.store = store;

sagaMiddleware.run(saga);

export default store;
