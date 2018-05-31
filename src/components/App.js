import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

import configureStore from '../redux/configureStore';
import FeaturedList from './FeaturedList';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Bookshop!</h1>
          </header>
          <FeaturedList/>
        </div>
      </Provider>
    );
  }
}

export default App;
