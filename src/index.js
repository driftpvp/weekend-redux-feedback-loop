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


//reducer
const scaleCount = (state = 0 , action) => {
    console.log('reducer is go');
    if (action.type === 'ADD_SCALE') {
        return [...state, action.payload];
    }
    return state;
};

//store
const storeInstance = createStore (
    combineReducers({
        scaleCount
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
