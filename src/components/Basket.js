import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import { getBasket, removeFromBasket, loadBasketData } from '../redux/modules/basket';
import { getBookById } from '../redux/modules/books';

class Basket extends Component {
    componentDidMount() {
        this.props.loadBasketData();
    }

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
    removeFromBasket: PropTypes.func,
    loadBasketData: PropTypes.func
};

function mapState(state) {
    const basket = getBasket(state)
        .map(basketItem => {
            const book = getBookById(state, basketItem.bookId);
            if (!book) {
                return undefined;
            }

            return {
                book,
                quantity: basketItem.quantity
            }
        })
        .filter(Boolean);
    return {
        basket
    };
}

const mapDispatch = {
    removeFromBasket,
    loadBasketData
};

export default connect(
    mapState,
    mapDispatch
)(Basket);
