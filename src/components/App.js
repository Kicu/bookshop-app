import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';

import configureStore from '../redux/configureStore';
import FeaturedList from '../screens/FeaturedList';
import Categories from './Categories'
import CategoryList from '../screens/CategoryList';
import Search from '../components/Search';
import Basket from '../components/Basket';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Bookshop!</h1>
                    </header>
                    <Search/>
                    <Categories />
                    <Route path="/category/:category" component={CategoryList} />
                    <FeaturedList/>
                    <Basket/>
                </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
