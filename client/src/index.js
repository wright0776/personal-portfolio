import * as atatus from 'atatus-js';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

import App from "./App";

import "./css/main.css";

atatus.config('19b3072c306e4d8398a801b7d2085ca8').install();

let data = {
    fn: 'testFn',
    user: 'Matt',
    date: new Date()
}

atatus.recordTransaction('recorded transaction', 60);
atatus.recordTransaction(JSON.stringify(data), 60);

console.log('done!');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));