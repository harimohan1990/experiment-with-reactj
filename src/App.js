import React from 'react';
import './App.css';
import CricketScoreChart from './component/CricketScoreChart';

function App() {
  const cricketScores = [50, 60, 45, 70, 80, 55, 90];

  return (
    <div className="App">
      <h1>Cricket Score Chart</h1>
      <CricketScoreChart data={cricketScores} />
    </div>
  );
}

export default App;
