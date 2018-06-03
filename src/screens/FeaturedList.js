import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchFeatured } from '../redux/modules/featured/index';

import BookList from '../components/BookList';

class FeaturedList extends Component {
  componentDidMount() {
      this.props.fetchFeatured();
  }

  render() {
      return (
          <div className="FeaturedList">
              <BookList books={this.props.featured} />
          </div>
      );
  }
}

FeaturedList.propTypes = {
  featured: PropTypes.array,
  fetchFeatured: PropTypes.func
};

function mapState(state) {
  return {
    featured: state.featured,
  }
}

const mapDispatch = {
    fetchFeatured
};

export default connect(
    mapState,
    mapDispatch
)(FeaturedList);