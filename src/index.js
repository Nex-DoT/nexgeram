import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ActiveListfiltered from './Database/ActiveListfiltered';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ActiveListfiltered>
        <App />
    </ActiveListfiltered>
);

