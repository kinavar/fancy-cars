import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux-immutable';
import createSagaMiddleWare from 'redux-saga';

import cars from './cars/reducer';
import carsSaga from './cars/sagas';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(combineReducers({
    cars
}), applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(carsSaga);

export default store;
