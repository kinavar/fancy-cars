import React from 'react';
import PropTypes from 'prop-types';

const Badge = props => {
    if(props.status) {
        return(
            <span className={`availability-badge badge badge-info mb-2 ${props.className}`}>{props.status}</span>
        )
    } else {
        return null
    }
};

Badge.defaultProps = {
    className: ''
};

Badge.propTypes = {
    className: PropTypes.string,
    status: PropTypes.string
};

export default Badge;
