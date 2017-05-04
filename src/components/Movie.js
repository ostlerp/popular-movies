import React from 'react';
import constants from '../constants';

const IMAGE_URL_BASE = constants.api.IMAGE_URL + constants.api.IMAGE_SIZES.small;

class Movie extends React.Component {

    render() {
        const { image, title } = this.props;
        return (
            <div>
                <p>{title}</p> 
                <img src={IMAGE_URL_BASE + image} />
            </div>
        );
    }
}

Movie.propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Movie;