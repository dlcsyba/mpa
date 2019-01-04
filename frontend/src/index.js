import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/core.css';
import './assets/css/icons.css';
import './assets/css/components.css';
import './assets/css/pages.css';
import './assets/css/menu.css';
import './assets/css/responsive.css';
import './index.css';
import App from './App';
import Grid from './components/grid';


ReactDOM.render(
    <BrowserRouter basename='/mpa'>
        <App />
    </BrowserRouter>,

    document.getElementById('root')
);

