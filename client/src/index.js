import * as atatus from 'atatus-js';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';

import App from "./App";

import "./css/main.css";

atatus.config('19b3072c306e4d8398a801b7d2085ca8').install();

atatus.recordTransaction('recorded transaction', 60);
atatus.recordTransaction('recorded transaction', 60);
atatus.recordTransaction('one', 1);
atatus.recordTransaction('zero', 0);
atatus.recordTransaction('no time');
console.log('done!');

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));