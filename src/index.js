//React
import React from 'react';
import ReactDOM from 'react-dom/client';

//Components
import './index.css';
import App from './components/App/App';

// Redux
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';


//reducer
const scaleCount = (state = 0 , action) => {
    console.log('reducer is go');
    return state;
};

//store
const storeInstance = createStore (
    scaleCount
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode store={storeInstance}>
        <App />
    </React.StrictMode>
);
