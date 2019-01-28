import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

import Router from "./components/router/router.js";

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
