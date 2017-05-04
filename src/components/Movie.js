import React from 'react';
import constants from '../constants';

const IMAGE_URL_BASE = constants.api.IMAGE_URL + constants.api.IMAGE_SIZES.small;

class Movie extends React.Component {

    constructor() {
        super();
        this.state = {
            imageLoaded: false
        };

        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    onImageLoaded() {
        this.setState({
            imageLoaded: true
        });
    }



    render() {
        const { image, title } = this.props;
        const { imageLoaded } = this.state;

        return (
            <div className={`movie${imageLoaded ? '' : ' hidden'}`}>
                <img src={IMAGE_URL_BASE + image} onLoad={this.onImageLoaded} />
                <p>{title}</p>
            </div>
        );
    }
}

Movie.propTypes = {
    image: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
};

export default Movie;