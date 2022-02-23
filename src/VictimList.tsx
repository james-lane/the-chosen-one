import { useState } from 'react';

export const VictimList = ({
  names,
  setVictims,
}: {
  names: string[];
  setVictims: Function;
}) => {
  const [currentInput, setCurrentInput] = useState('');

  const handleInputChange = (input: string) => {
    setCurrentInput(input);
  };

  const addName = () => {
    setVictims([...names, currentInput]);
    setCurrentInput('');
  };

  const removeName = (target: any) => {
    setVictims(
      names.filter((value) => value !== target.previousSibling.textContent)
    );
  };

  return (
    <div className="victimListContainer">
      <form className="inputContainer" action="#">
        <input
          autoFocus
          value={currentInput}
          onChange={(e) => handleInputChange(e.target.value)}
        ></input>
        <button onClick={addName}>Add</button>
      </form>
      <ul className="victimList">
        {names.map((name) => (
          <li key={name}>
            {name}
            <button onClick={(e) => removeName(e.target)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
