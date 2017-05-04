import React from 'react';
import { connect } from 'react-redux';

import constants from '../../constants';
import { MovieActions } from '../../actions';

const IMAGE_URL_BASE = constants.api.IMAGE_URL + constants.api.IMAGE_SIZES.small;

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
        const { page } = this.props.movies;
		this.props.dispatch(MovieActions.fetchMovies(page + 1));
	}

	render() {
        const { results, isLoading, page } = this.props.movies;

		return (
			<div>
				<h1>Popular Movies {isLoading ? 'True' : 'False'}</h1>
                { results.map(item => 
                    <div>
                        <p key={item.id} >{item.title}</p> 
                        <img src={IMAGE_URL_BASE + item.backdrop_path} />
                    </div>
                )}
			</div>
		);
	}
}

App.propTypes = {

};

const mapStateToProps = state => {
    return { 
        movies: state.movies
    }
}

export default connect(mapStateToProps)(App);