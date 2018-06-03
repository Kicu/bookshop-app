import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addToBasket } from '../redux/modules/basket';

import './Book.css';

const defaultImage = 'https://pngimg.com/uploads/book/book_PNG2116.png';

const Book = ({ id, title, author, price, image = defaultImage, addToBasket }) => {
  return (
    <div className="Book">
      <img className="Book-image" src={image} alt="book" />
        <div className="Book-info">
            <div className="Book-info-title">{title}</div>
            <div className="Book-info-author">{author}</div>
            <div className="Book-info-price">{price}</div>
        </div>
        <button onClick={() => addToBasket(id)}>Add</button>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  addToBasket: PropTypes.func
};

export default connect(
    null,
    { addToBasket }
)(Book);
