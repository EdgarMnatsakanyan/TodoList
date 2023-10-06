import React, {useState} from 'react';
import cl from "./MyInput.module.css"
const MyInput = () => {
    const [pros, setPros] = useState([{}]);
    const [inputText, setInputText] = useState('');

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


    const removeLastItem = (list, setList) => {
        if (list.length > 0) {
          const updatedList = [...list];
          updatedList.pop();
          setList(updatedList);
        }
      };
    return (
        <div>
        {pros.map((pro, index) => (
            <div key={index} className={cl.list}>
              {index + 1}.
                <input
                    className={cl.inputStayle}
                    type="text"
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
          ))}
        </div>
    );
};

export default MyInput;