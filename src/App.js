import React from 'react';
import Headers from './components/header';
import Footers from './components/footer'
import Verification from './pages/verification';
import Vote from './pages/vote';
import './App.scss';

const App = () => {
  return (
    <div>
      <Headers />
      <Verification />
      <Footers />
    </div>
  );
}

export default App;
