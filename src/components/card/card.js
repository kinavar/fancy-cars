import React from 'react';
import PropTypes from 'prop-types';
import Car from "../../lib/car";
import Image from "../image/image";
import Badge from "../badge/badge";

import './card.scss'

const Card = props => {
    props.getStatus(props.car.id);

    return (
        <div className="col-lg-4 col-md-6">

            <div className="card">
                <Image className="card-img-top card-image" url={props.car.image}/>
                <div className="card-body">
                    <h5 className="card-title">{props.car.name}</h5>
                    <Badge status={props.status}/>
                    <dl className="card-description">
                        <dt>Make</dt>
                        <dd>{props.car.make}</dd>

                        <dt>Model</dt>
                        <dd>{props.car.model}</dd>

                        <dt>Year</dt>
                        <dd>{props.car.year}</dd>
                    </dl>
                    {props.status === 'In Dealership' &&
                        <button className="buy-button float-right btn btn-dark">Buy</button>
                    }
                </div>
            </div>
        </div>
    )
};

Card.propTypes = {
    car: PropTypes.instanceOf(Car),
    getStatus: PropTypes.func,
    status: PropTypes.string
};

export default Card;

