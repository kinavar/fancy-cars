import {Record, List, Map} from 'immutable';
import * as actionTypes from './actionTypes';
import {sort} from "../../lib/sort";

const State = Record({
    loading: false,
    error: false,
    cars: List(),
    sortBy: sort.atoz,
    availability: Map()

});

export default (state = new State(), action) => {
    switch (action.type) {
        case actionTypes.REQUEST_CARS:
            return state.set('loading', true);
        case actionTypes.REQUEST_CARS_SUCCESS:
            return state.set('cars', List(action.payload.results))
                .set('loading', false);
        case actionTypes.REQUEST_CARS_FAIL:
            return state.set('error', true)
                .set('loading', false);
        case actionTypes.SET_SORTING:
            return state.set('sortBy', action.payload.order);
        case actionTypes.REQUEST_AVAILABILITY_SUCCESS:
            return state.setIn(['availability', action.payload.id], action.payload.status);
        default:
            return state;
    }
}