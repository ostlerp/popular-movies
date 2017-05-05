import React from 'react';
import constants from '../constants';

const IMAGE_URL_BASE = constants.api.IMAGE_URL + constants.api.IMAGE_SIZES.small;

class Movie extends React.Component {

    constructor() {
        super();
        this.state = {
            imageLoaded: false,
            entered: false
        };

        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    onImageLoaded() {
        this.setState({
            imageLoaded: true
        });

        setTimeout(() => {
            this.setState({
                entered: true
            });
        }, 200);
    }


    render() {
        const { image, title } = this.props;
        const { imageLoaded, entered } = this.state;

        return (
            <div key={image} className={`movie${imageLoaded ? '' : ' hidden'}${entered ? ' entered' : ''}`}>
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