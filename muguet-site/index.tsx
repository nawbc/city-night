import React from 'react';
import ReactDOM from 'react-dom';
import Site from './site';
// import 'react-app-polyfill/ie9'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Site />, document.getElementById('root'));

serviceWorker.unregister();
