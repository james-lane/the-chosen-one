import { useState } from 'react';

export const ChosenOneList = ({
  names,
  setChosenOnes,
}: {
  names: string[];
  setChosenOnes: Function;
}) => {
  const [currentInput, setCurrentInput] = useState('');

  const handleInputChange = (input: string) => {
    setCurrentInput(input);
  };

  const addName = () => {
    setChosenOnes([...names, currentInput]);
    setCurrentInput('');
  };

  const removeName = (target: any) => {
    setChosenOnes(
      names.filter((value) => value !== target.previousSibling.textContent)
    );
  };

  return (
    <div className="chosenOneListContainer">
      <form className="inputContainer" action="#">
        <input
          autoFocus
          value={currentInput}
          onChange={(e) => handleInputChange(e.target.value)}
        ></input>
        <button onClick={addName}>Add</button>
      </form>
      <ul className="chosenOneList">
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
