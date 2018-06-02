import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchByCategory } from '../redux/modules/byCategory';

import Book from './Book';

class CategoryList extends Component {
  componentDidMount() {
      this.props.fetchByCategory(this.props.category);
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.category !== this.props.category) {
          this.props.fetchByCategory(nextProps.category);
      }
  }

  render() {
      return (
          <div className="FeaturedList">
              <div>{`${this.props.category} books:`}</div>
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
    category: PropTypes.string,
    books: PropTypes.array,
    fetchByCategory: PropTypes.func
};

function mapState(state, ownProps) {
    const category = ownProps.match.params.category;
    return {
        category,
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