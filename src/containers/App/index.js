import React from 'react';
import { connect } from 'react-redux';
import Waypoint from 'react-waypoint';

import { MovieActions } from '../../actions';
import MovieList from '../../components/MovieList';
import Movie from '../../components/Movie';
import Header from '../../components/Header';

class App extends React.Component {

	constructor(props) {
		super(props);

        this.nextPage = this.nextPage.bind(this);
	}

    nextPage() {
        const { page } = this.props.movies;
		this.props.dispatch(MovieActions.fetchMovies(page + 1));
    }

	render() {
        const { results } = this.props.movies;

        const items = results.map(item => <Movie key={item.id} title={item.title} image={item.backdrop_path} />);

		return (
			<div>
                <Header text="Popular" />
                <MovieList>
                    { items }
                </MovieList>

                <Waypoint onEnter={this.nextPage} />
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