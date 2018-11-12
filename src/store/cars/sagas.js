import * as actionTypes from './actionTypes';
import * as actionCreators from './actionCreators';
import {getCars, getStatus} from "../../api/cars";
import {call, put, takeEvery, takeLatest} from "redux-saga/effects";

const requestCars = function* () {
    try {
        const results = yield call(getCars);

        yield put(actionCreators.requestCarsSuccess(results))
    } catch (e) {
        yield put(actionCreators.requestCarsFail())
    }
};

const requestAvailability = function* (action) {
    try {
        const result = yield call(getStatus, action.payload.id);

        yield put(actionCreators.requestAvailabilitySuccess(action.payload.id, result));
    } catch (e) {
        yield put(actionCreators.requestAvailabilityFail());
    }
};

const cars = function* () {
    yield takeLatest(actionTypes.REQUEST_CARS, requestCars);
    yield takeEvery(actionTypes.REQUEST_AVAILABILITY, requestAvailability)
};

export default cars;