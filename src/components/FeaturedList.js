import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchFeatured } from '../redux/modules/featured';

import './FeaturedList.css';
import Book from './Book';

class FeaturedList extends Component {
  componentDidMount() {
      this.props.fetchFeatured();
  }

  render() {
      return (
          <div className="FeaturedList">
              <ul className="FeaturedList-list">
                  {this.props.featured.map(book => (
                      <li className="FeaturedList-list-item"><Book {...book}/></li>
                  ))}
              </ul>
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