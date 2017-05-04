import React from 'react';

class MovieList extends React.Component {

    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

MovieList.propTypes = {

};

export default MovieList;