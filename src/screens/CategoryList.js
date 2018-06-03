import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchByCategory, getBooksByCategory } from '../redux/modules/books';
import BookList from '../components/BookList';

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
              <BookList books={this.props.books} />
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
        books: getBooksByCategory(state),
    }
}

const mapDispatch = {
    fetchByCategory
};

export default connect(
    mapState,
    mapDispatch
)(CategoryList);