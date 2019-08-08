import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const categories = [
    { name: 'fantasy', label: 'Fantasy'},
    { name: 'science-fiction', label: 'SF'},
    { name: 'horror', label: 'Horror'},
    { name: 'romance', label: 'Romance'},
];

class Categories extends Component {
    render() {
        return (
            <div className="Categories">
                <ul>
                    {categories.map(cat => (
                        <li key={cat.name}>
                            <Link to={`/category/${cat.name}`}>{cat.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

Categories.propTypes = {
    featured: PropTypes.array,
    fetchFeatured: PropTypes.func
};

export default Categories;
