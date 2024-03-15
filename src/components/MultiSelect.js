import React, { useState } from 'react';

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8', 'Option 9', 'Option 10']; // Replace with your options

  const toggleOption = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  return (
    <div className="multi-select">
      <div className="selected-options">
        {selectedOptions.map((option, index) => (
          <div key={index} className="selected-option">
            {option} 
            <button onClick={() => toggleOption(option)}>&times;</button>
          </div>
        ))}
      </div>
      <div className="options-list">
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => toggleOption(option)}
            className={`option ${selectedOptions.includes(option) ? 'selected' : ''}`}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
