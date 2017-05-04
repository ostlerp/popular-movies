import React from 'react';

class MovieList extends React.Component {

    render() {
        return (
            <div className="movie-list">
                { this.props.children }
            </div>
        );
    }
}

MovieList.propTypes = {

};

export default MovieList;