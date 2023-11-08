// SelectSection.js
import React, { useState, useRef} from 'react';
import "../../App.css";
import Select from 'react-select';
import styled from 'styled-components';

const SelectSection = () => {
  const [firstSelection, setFirstSelection] = useState('React Native');
  const [secondSelection, setSecondSelection] = useState('Java');
  const options = ['React', 'Java', 'Spring', 'React Native'];

  const handleChange = (firstSelection) => {
    setFirstSelection(firstSelection);
  };
  const handleChange2 = (secondSelection) => {
    setSecondSelection(secondSelection);
  };

  const selectContainerRef = useRef(null);

  return (
    <>
      <h1>Select</h1>
      <SelectContainer ref={selectContainerRef}>
        <SelectWrapper>
          <Select
            value={firstSelection}
            onChange={handleChange}
            options={options.map(option => ({ value: option, label: option }))}
            menuPortalTarget={selectContainerRef.current}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
        </SelectWrapper>
        <SelectWrapper2>
          <Select
            value={secondSelection}
            onChange={handleChange2}
            options={options.map(option => ({ value: option, label: option }))}
            menuPortalTarget={selectContainerRef.current}
            styles={{ menuPortal: base => ({ ...base, zIndex: 9999 }) }}
          />
        </SelectWrapper2>
      </SelectContainer>
    </>
  );
};

export default SelectSection;


const SelectContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-style: solid;
  height: 150px;
`;

const SelectWrapper = styled.label`
  width: 250px;
  margin: 10px;
`;

const SelectWrapper2 = styled.label`
  overflow: hidden;
  width: 250px;
  margin: 10px;
`;
