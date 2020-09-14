import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./store/reducer";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

