import React from 'react';
import Headers from './components/header';
import Footers from './components/footer'
import Verification from './pages/verification';
import Route from './route';
import Vote from './pages/vote';
import './App.scss';

const App = () => {
  return (
    <div>
      <Headers />
      <Route path="/">
        <Verification />
      </Route>
      <Route path="/vote">
        <Vote />
      </Route>
      <Footers />
    </div>
  );
}

export default App;
