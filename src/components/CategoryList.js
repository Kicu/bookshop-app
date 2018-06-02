import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchByCategory } from '../redux/modules/byCategory';

import Book from './Book';

class CategoryList extends Component {
  componentDidMount() {
      this.props.fetchByCategory('fantasy');
  }

  render() {
      return (
          <div className="FeaturedList">
              <div>{`Fantasy books:`}</div>
              <ul className="FeaturedList-list">
                  {this.props.books.map(book => (
                      <li className="FeaturedList-list-item"><Book {...book}/></li>
                  ))}
              </ul>
          </div>
      );
  }
}

CategoryList.propTypes = {
    books: PropTypes.array,
    fetchByCategory: PropTypes.func
};

function mapState(state) {
    return {
        books: state.byCategory,
    }
}

const mapDispatch = {
    fetchByCategory
};

export default connect(
    mapState,
    mapDispatch
)(CategoryList);