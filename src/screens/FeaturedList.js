import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchFeatured, getFeaturedBooks } from '../redux/modules/books';

import BookList from '../components/BookList';

class FeaturedList extends Component {
  componentDidMount() {
      this.props.fetchFeatured();
  }

  render() {
      return (
          <div className="FeaturedList">
              <BookList books={this.props.featured} isLoading={this.props.isLoading} />
          </div>
      );
  }
}

FeaturedList.propTypes = {
  featured: PropTypes.array,
  isLoading: PropTypes.bool,
  fetchFeatured: PropTypes.func
};

function mapState(state) {
  return {
    featured: getFeaturedBooks(state),
    isLoading: state.uiLoading.featured
  }
}

const mapDispatch = {
    fetchFeatured
};

export default connect(
    mapState,
    mapDispatch
)(FeaturedList);