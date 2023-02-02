import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { ChosenOneList } from './ChosenOneList.tsx';
import './App.css';

function App() {
  const [potentialChosenOnes, setPotentialChosenOnes] = useState(
    localStorage.getItem('chosenOnes')
      ? JSON.parse(localStorage.getItem('chosenOnes'))
      : []
  );
  const [currentChosenOne, setCurrentChosenOne] = useState();

  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    localStorage.setItem('chosenOnes', JSON.stringify(potentialChosenOnes));
    setCurrentChosenOne(
      potentialChosenOnes.length > 0 ? 'Ready?' : 'Nothing to choose'
    );
  }, [potentialChosenOnes]);

  const findChosenOne = () => {
    runConfetti && setRunConfetti(false);
    const loop = setInterval(() => {
      setCurrentChosenOne(
        potentialChosenOnes[
          Math.floor(Math.random() * potentialChosenOnes.length)
        ]
      );
    }, 50);
    setTimeout(() => [clearInterval(loop), setRunConfetti(true)], 2000);
    setCurrentChosenOne(
      potentialChosenOnes[
        Math.floor(Math.random() * potentialChosenOnes.length)
      ]
    );
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        {runConfetti && (
          <Confetti
            recycle={false}
            run={runConfetti}
            onConfettiComplete={() => setRunConfetti(false)}
          />
        )}
        <p className="chosenOne">{currentChosenOne}</p>
        {potentialChosenOnes.length > 0 && (
          <button className="findChosenOneButton" onClick={findChosenOne}>
            Find the chosen one
          </button>
        )}
      </main>
      <aside>
        <ChosenOneList
          names={potentialChosenOnes}
          setChosenOnes={setPotentialChosenOnes}
        />
      </aside>
    </div>
  );
}

export default App;
