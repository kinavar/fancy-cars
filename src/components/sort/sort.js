import React from 'react';
import PropTypes from 'prop-types';
import {sort} from '../../lib/sort'




const Sort = props => {
    const handleChange = (e) => {
        props.change(e.target.value)
    };

    return (
        <div className={`sort-container ${props.className}`}>
            <label>Sort by:
                <select className="ml-2 sort-selector" value={props.value} onChange={handleChange}>
                    {Object.keys(sort).map(value => <option key={value} value={sort[value]}>{sort[value]}</option>)}
                </select>
            </label>
        </div>
    )
};

Sort.propTypes = {
    value: PropTypes.string,
    change: PropTypes.func,
    className: PropTypes.string
};

export default Sort;