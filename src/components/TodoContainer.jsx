import React, { useState } from 'react';
import '../App.css';

const TodoContainer = () => {
  const [pros, setPros] = useState([{}]);
  const [cons, setCons] = useState([{}]);
  const [inputText, setInputText] = useState('');
  const [inputSecondText, setInputSecondText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      setPros([...pros, inputText.trim()]);
      setInputText('');
    } else if (e.key === 'Backspace' && inputText === '') {
      removeLastItem(pros, setPros);
    }
  };

  const handleInputRemove = (e) => {
    setInputSecondText(e.target.value);
  };

  const handleDown = (e) => {
    if (e.key === 'Enter' && inputSecondText.trim() !== '') {
      setCons([...cons, inputSecondText.trim()]);
      setInputSecondText('');
    } else if (e.key === 'Backspace' && inputSecondText === '') {
      removeLastItem(cons, setCons);
    }
  };

  const removeLastItem = (list, setList) => {
    if (list.length > 0) {
      const updatedList = [...list];
      updatedList.pop();
      setList(updatedList);
    }
  };

  return (
    <div className="parentContianer">
      <h1>Should I eat at McDonadls?</h1>
      <div className="ourContainer">
        <div className="prosContainer">
          <h3>PROS</h3>
          {pros.map((pro, index) => (
            <div key={index} className="list">
              {index + 1}.
              <input
                type="text"
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
            </div>
          ))}
        </div>

        <div className="consContainer">
          <h3>CONS</h3>
          {cons.map((con, index) => (
            <div key={index} className="list">
              {index + 1}.
              <input
                type="text"
                onChange={handleInputRemove}
                onKeyDown={handleDown}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
