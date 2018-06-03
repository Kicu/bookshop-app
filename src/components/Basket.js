import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { getBasket, removeFromBasket } from '../redux/modules/basket';
import { getBookById } from '../redux/modules/books';

class Basket extends Component {
    render() {
        const { basket, removeFromBasket } = this.props;
        if (!basket.length) {
            return null;
        }

        return (
            <div className="Basket">
                <div>Basket:</div>
                <ul>
                    {basket.map(basketItem => (
                        <li key={basketItem.book.id}>
                            <span>{basketItem.book.title}</span>
                            <span>{` - ${basketItem.quantity}`}</span>
                            <button onClick={() => removeFromBasket(basketItem.book.id)}>remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Basket.propTypes = {
    basket: PropTypes.array,
    removeFromBasket: PropTypes.func
};

function mapState(state) {
    const basket = getBasket(state).map(basketItem => {
        const book = getBookById(state, basketItem.bookId);
        return {
            book,
            quantity: basketItem.quantity
        }
    });
    return {
        basket
    };
}

const mapDispatch = {
    removeFromBasket
};

export default connect(
    mapState,
    mapDispatch
)(Basket);
