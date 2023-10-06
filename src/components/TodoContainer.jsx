import React from 'react';
import '../App.css';
import MyInput from './UI/input/MyInput';

const TodoContainer = () => {

  return (
    <div className="parentContianer">
      <h1>Should I eat at McDonadls?</h1>
      <div className="ourContainer">
        <div className="prosContainer">
          <h3>PROS</h3>
            <div className='inputSection'>
              <MyInput />
            </div>
        </div>

        <div className="consContainer">
          <h3>CONS</h3>
          <div className='inputSection'>
            <MyInput />
          </div>
        </div>
        </div>

      </div>
  );
};

export default TodoContainer;
