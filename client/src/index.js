import * as atatus from 'atatus-js';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

import App from "./App";

import "./css/main.css";

atatus.config('19b3072c306e4d8398a801b7d2085ca8').install();
atatus.beginTransaction('testFunction');
setTimeout(() => {
    console.log('set timeout ran');
    atatus.endTransaction('testFunction');
}, 1000);

atatus.beginTransaction('oneMilisec');
setTimeout(() => {
    console.log('one milisec ran');
    atatus.endTransaction('oneMilisec');
}, 1);

atatus.beginTransaction('noTime');
atatus.endTransaction('noTime');

atatus.endTransaction('endOnly');

atatus.beginTransaction('beginOnly');

console.log('end of custom transactions')

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));