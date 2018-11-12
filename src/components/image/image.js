import React from 'react';
import PropTypes from 'prop-types';

const Image = props => {
    if (props.url) {
        return (
            <div className={props.className} style={{backgroundImage: `url(${props.url})`}}></div>
        )
    } else {
        return null;
    }
};

Image.defaultProps = {
    className: ''
};

Image.propTypes = {
    url: PropTypes.string,
    className: PropTypes.string
};

export default Image;