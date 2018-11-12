import {createSelector} from 'reselect';
import {sort} from "../../lib/sort";
import Car from "../../lib/car";

const getCars = state => state.getIn(['cars', 'cars']);
const getSorting = state => state.getIn(['cars', 'sortBy']);
const getAvailability = state => state.getIn(['cars', 'availability']);

export const getMappedCars = createSelector(
    [getCars],
    (cars) => cars.toJS().map(car => new Car(car))
);

export const getSortedCars = createSelector(
    [getMappedCars, getSorting, getAvailability],
    (cars, order, availability) => {
        switch (order) {
            case sort.atoz:
                return cars.sort((a,b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
            case sort.ztoa:
                return cars.sort((a,b) => b.name.toLowerCase().localeCompare(a.name.toLowerCase()));
            case sort.available:
                return sortByAvailability(cars, availability.toJS())

        }
    }
);


const sortByAvailability = (cars, availability) => {
    return cars.sort(car => {
        if (availability[car.id] === 'In Dealership') {
            return -1;
        }

        if (availability[car.id] === 'Out of Stock') {

            return 1;
        }

        return 0
    })

};


