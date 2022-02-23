import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti'
import { VictimList } from './VictimList.tsx';
import './App.css';

function App() {
  const [potentialVictims, setPotentialVictims] = useState(localStorage.getItem('victims') ? JSON.parse(localStorage.getItem('victims')) : [])
  const [currentVictim, setCurrentVictim] = useState()

  const [runConfetti, setRunConfetti] = useState(false)

  useEffect(() => {
    localStorage.setItem('victims', JSON.stringify(potentialVictims));
    setCurrentVictim(potentialVictims.length > 0 ? 'Ready?' : 'Add victims')
},[potentialVictims])

  const findVictim = () => {
    runConfetti && setRunConfetti(false)
    const loop = setInterval(() => {
      setCurrentVictim(potentialVictims[Math.floor(Math.random() * potentialVictims.length)])
    }, 50);
    setTimeout(() => [clearInterval(loop), setRunConfetti(true)], 2000)
    setCurrentVictim(potentialVictims[Math.floor(Math.random() * potentialVictims.length)])
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
      {runConfetti && <Confetti recycle={false} run={runConfetti} onConfettiComplete={() => setRunConfetti(false)} />}
        <p className="victim">{currentVictim}</p>
        {potentialVictims.length > 0 && <button className="findVictimButton" onClick={findVictim}>Find victim</button>}
      </main>
      <aside>
        <VictimList names={potentialVictims} setVictims={setPotentialVictims} />
      </aside>
    </div>
  );
}

export default App;
