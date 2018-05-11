import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {hashRouter} from 'react-router-dom';

ReactDOM.render(
<hashRouter>
<App />
</hashRouter>
, document.getElementById('root'));
registerServiceWorker();
