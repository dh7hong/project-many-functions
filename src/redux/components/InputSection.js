// InputSection.js
import React, { useState } from 'react';
import "../../App.css";

const InputSection = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handlePriceChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setPrice(value);
  };

  const handleSave = () => {
    alert(JSON.stringify({ name, price: price.replace(/,/g, '') }));
  };

  return (
    <div style={{ marginBottom: '30px' }}>
      <label>
        Name:
        <input className="inputBox"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <span style={{ marginLeft: '30px' }}>
        <label>
          Price:
          <input className="inputBox"
            type="text"
            value={price}
            onChange={handlePriceChange}
          />
        </label>
      </span>
      <span style={{ marginLeft: '30px' }}>
      <button className="saveButton"
        onClick={handleSave}
      >
        Save
      </button>
      </span>
    </div>
  );
};

export default InputSection;
