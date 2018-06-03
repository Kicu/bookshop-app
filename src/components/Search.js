import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import BookList from './BookList';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: ''
        };

        this.onSearchInputChange = this.onSearchInputChange.bind(this);
    }

    onSearchInputChange(e) {
        const searchTerm = e.target.value;

        this.setState(() => ({
            searchTerm
        }));
    }


    render() {
        return (
            <div className="BookSearch">
                <input
                    className="BookSearch-input"
                    value={this.state.searchTerm}
                    onChange={this.onSearchInputChange}
                />
                <BookList books={this.props.books}/>
            </div>
        );
    }
}

Search.propTypes = {
    books: PropTypes.array
};

function mapState(state) {
    return {
        books: []
    };
}

export default connect(
    mapState,
    {}
)(Search);

