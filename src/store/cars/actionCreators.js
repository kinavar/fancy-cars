import * as actionTypes from './actionTypes';

export const requestCars = () => ({
    type: actionTypes.REQUEST_CARS
});

export const requestCarsSuccess = results => ({
    type: actionTypes.REQUEST_CARS_SUCCESS,
    payload: {results}
});

export const requestCarsFail = () => ({
    type: actionTypes.REQUEST_CARS_FAIL,
    error: true,
    payload: new Error('Something has gone wrong')
});

export const requestAvailability = id => ({
    type: actionTypes.REQUEST_AVAILABILITY,
    payload: {id}
});

export const requestAvailabilitySuccess = (id, status) => ({
    type: actionTypes.REQUEST_AVAILABILITY_SUCCESS,
    payload: {id, status}
});

export const requestAvailabilityFail = () => ({
    type: actionTypes.REQUEST_AVAILABILITY_FAIL,
    error: true,
    payload: new Error('Something has gone wrong')
});

export const setSorting = order => ({
    type: actionTypes.SET_SORTING,
    payload: {order}
});

