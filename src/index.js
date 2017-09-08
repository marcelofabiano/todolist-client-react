import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/app';
import registerServiceWorker from './server/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
