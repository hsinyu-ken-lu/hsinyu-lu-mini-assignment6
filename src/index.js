import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App.js';
import './index.css';
import combineReducer from './Reducers';
import {Provider} from 'react-redux';

const store = createStore(combineReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));