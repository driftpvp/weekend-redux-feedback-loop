//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//reducers
const scaleCount = (state = 0 , action) => {
    console.log('reducer is go');
    if (action.type === 'ADD_SCALE') {
        return action.payload;
    }else if (action.type === "CLEAR") {
        return 0;
    }
    return state;
};

const Understanding = (state = 0 , action) => {
    console.log('Understanding reducer is go');
    if (action.type === 'ADD_UNDERSTANDING') {
        return action.payload;
    }else if (action.type === "CLEAR") {
        return 0;
    }
    return state;
};

const Supported = (state = 0 , action) => {
    console.log('Support reducer is go');
    if (action.type === 'ADD_SUPPORT') {
        return action.payload;
    }else if (action.type === "CLEAR") {
        return 0;
    }
    return state;
};

//store
const storeInstance = createStore (
    combineReducers({
        scaleCount,
        Understanding,
        Supported
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);

export {storeInstance};
