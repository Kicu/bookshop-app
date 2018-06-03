import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchBooks } from '../redux/modules/search';

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

        if (searchTerm.length >= 3) {
            this.props.searchBooks(searchTerm);
        }
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
    books: PropTypes.array,
    searchBooks: PropTypes.func
};

function mapState(state) {
    return {
        books: state.search
    }
}

const mapDispatch = {
    searchBooks
};

export default connect(
    mapState,
    mapDispatch
)(Search);

