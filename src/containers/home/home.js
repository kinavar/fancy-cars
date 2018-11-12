import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {getSortedCars} from "../../store/cars/selector";
import {requestAvailability, requestCars, setSorting} from "../../store/cars/actionCreators";
import Sort from "../../components/sort/sort";
import Loader from "../../components/loader/loader";
import Card from "../../components/card/card";

import './home.scss'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCars();
    }

    render() {
        return (
            <div className="container home-container mt-2">
                <Sort className="text-right" change={this.props.setSorting} value={this.props.sortBy}/>
                <div className="row">
                    {!this.props.loading ?
                        this.props.cars.map(car =>
                            <Card
                                key={car.id}
                                car={car}
                                status={this.props.availability[car.id]}
                                getStatus={this.props.requestAvailability}
                            />) :
                        <Loader/>
                    }
                </div>
            </div>
        )

    }
}

Home.propTypes = {
    sortBy: PropTypes.string,
    cars: PropTypes.array,
    getCars: PropTypes.func,
    requestAvailability: PropTypes.func,
    setSorting: PropTypes.func
};

const mapStateToProps = state => ({
    sortBy: state.getIn(['cars', 'sortBy']),
    loading: state.getIn(['cars', 'loading']),
    cars: getSortedCars(state),
    availability: state.getIn(['cars', 'availability']).toJS()
});

const mapDispatchToProps = dispatch => ({
    getCars: () => dispatch(requestCars()),
    requestAvailability: id => dispatch(requestAvailability(id)),
    setSorting: value => dispatch(setSorting(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)

