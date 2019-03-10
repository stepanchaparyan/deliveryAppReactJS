import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import state from './redux/state';

ReactDOM.render(<App state={state}/>, document.getElementById('root'));

serviceWorker.unregister();
