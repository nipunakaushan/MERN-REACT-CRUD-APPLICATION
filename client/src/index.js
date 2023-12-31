import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, applyMiddleware, componse, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import App from './App';


const store = configureStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    <App />,document.getElementById('root')
);
