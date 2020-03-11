import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';



// import App from './App';
import Routing from './components/routing/Routing'
import SubRouting from './components/routing-nested/SubRouting'
import Api from './components/api-call/api'
import ApiHook from './components/api-call-hook/api_hook'
import Binding from './components/handle-event/binding'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ApiHook />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
