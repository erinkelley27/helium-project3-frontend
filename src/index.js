import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {BrowserRouter as Router} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import {
    Route,
    Switch,
    Link
  } from 'react-router-dom'

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
registerServiceWorker();
