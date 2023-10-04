import React from 'react';
import axios from 'axios';
import './App.css';
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

//Components
import FeelingToday from '../FeelingToday/FeelingToday';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';

function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        
        <div>
            <Route exact path= "/" component={FeelingToday} />
            <Route exact path= "/Understanding" component={Understanding} />
            <Route exact path= "/Supported" component={Supported} />
            <Route exact path= "/Comments" component={Comments} />
            <Route exact path= "/Review" component={Review} />
        </div>
        
      </div>
    </Router>
  );
}

export default App;
