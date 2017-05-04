import React from 'react';
import { connect } from 'react-redux';

import constants from '../../constants';
import { MovieActions } from '../../actions';

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.dispatch(MovieActions.fetchMovies(1));
        this.props.dispatch(MovieActions.fetchMovies(2));
	}

	render() {
		return (
			<div>
				<h1>Popular Movies {constants.api.KEY}</h1>
			</div>
		);
	}
}

App.propTypes = {

};

export default connect()(App);