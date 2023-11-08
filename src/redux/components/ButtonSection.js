import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showAlert, setUserInput } from '../modules/alertReducer';
import { useSelector } from 'react-redux';
import "../../App.css";
import BellIcon from './BellIcon';

const ButtonSection = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const displayAlert = (message, needsInput = false) => {
    if (needsInput) {
      const userInput = window.prompt(message);
      dispatch(setUserInput(userInput));
      console.log(userInput); // To log the input when OK is pressed
    } else {
      alert(message);
    }
  };

  // The style objects could be moved outside the component or use CSS/Sass for cleaner code
  return (
    <div>
      {/* First row of buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        {/* Large Primary Button */}
        <button
          style={{ width: '200px', height: '50px', border: '2px solid black', borderRadius: '5px', backgroundColor: 'transparent' }}
          onClick={() => displayAlert('Make a button', false)}//dispatch(showAlert('Make a button'))}
        >
          Large Primary Button &gt;
        </button>
        {/* Medium Button */}
        <button
          style={{ width: '140px', height: '45px', backgroundColor: 'green', borderRadius: '5px', color: 'black' }}          
        >
          Medium
        </button>
        {/* Small Button */}
        <button
          style={{ width: '100px', height: '40px', backgroundColor: 'green', color: 'black' }}
          
        >
          Small
        </button>
      </div>

      {/* Second row of buttons */}
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Large Negative Button */}
        <button
          style={{ width: '200px', height: '50px', border: '2px solid red', borderRadius: '5px', backgroundColor: 'transparent', color: 'red' }}
          onClick={() => displayAlert('Is this difficult?', true)}
        >
          Large Negative Button {BellIcon()}
        </button>
        {/* Medium Negative Button */}
        <button
          style={{ width: '140px', height: '45px', backgroundColor: 'pink', borderRadius: '5px', color: 'red' }}          
        >
          Medium
        </button>

        {/* Small Negative Button */}
        <button
          style={{ width: '100px', height: '40px', backgroundColor: 'pink', color: 'red' }}
        >
          Small
        </button>
      </div>
    </div>
  );
};

export default ButtonSection;