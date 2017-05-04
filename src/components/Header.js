import React from 'react';

class Header extends React.Component {

    render() {
        const { text } = this.props;
        return (
            <div className="header">
                <h1>{text}</h1>
            </div>
        );
    }
}

Header.propTypes = {
    text: React.PropTypes.string.isRequired
};

export default Header;