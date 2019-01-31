import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bulma/css/bulma.min.css";
import "bulma/";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';

import Router from "./components/router/router.js";

ReactDOM.render(<Router />, document.getElementById('root'));
registerServiceWorker();
