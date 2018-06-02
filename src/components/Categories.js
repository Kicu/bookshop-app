import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
                        <li key={cat.name}>{cat.label}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

Categories.propTypes = {
    foo: PropTypes.object
};

export default Categories;
