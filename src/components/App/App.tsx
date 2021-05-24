import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Home from '../pages/Home/Home';
import Table from '../pages/Table/Table';
import HardCoded from '../pages/HardCoded/HardCoded';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/hard-coded" exact component={HardCoded} />
          <Route path="/**" component={Table} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
