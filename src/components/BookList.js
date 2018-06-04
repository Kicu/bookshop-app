import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './BookList.css';
import Book from './Book';
import isLoading from './isLoading';

const BookList = ({ books }) => (
    <div className="BookList">
        <ul className="BookList-list">
            {books.map(book => (
                <li key={book.id} className="BookList-list-item"><Book {...book}/></li>
            ))}
        </ul>
    </div>
);

BookList.propTypes = {
    books: PropTypes.array,
};

export default isLoading(BookList);