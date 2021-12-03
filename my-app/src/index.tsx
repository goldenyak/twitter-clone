import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from '@material-ui/core';
import theme from "./theme";
import {App} from './App';
import {store} from "./store/store";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Router>
                <Provider store={store}>
                    <App/>
                </Provider>
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
