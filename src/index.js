import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

const template = (
    <App />
);

const rootElement = document.getElementById('root');

ReactDOM.render(template, rootElement);