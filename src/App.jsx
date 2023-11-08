import React from 'react';
import ButtonSection from './redux/components/ButtonSection';
import InputSection from './redux/components/InputSection';
import ModalSection from './redux/components/ModalSection';
import SelectSection from './redux/components/SelectSection';
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Button</h1>
      <ButtonSection />
      <h1>Input</h1>
      <InputSection />
      <h1>Modal</h1>
      <ModalSection />
      <SelectSection />
    </div>
  );
}

export default App;

// import React from 'react';
// import Select from 'react-select';

// // Define your options array with label and value pairs
// const options = [
//   { value: 'chocolate', label: 'Chocolate' },
//   { value: 'strawberry', label: 'Strawberry' },
//   { value: 'vanilla', label: 'Vanilla' }
// ];

// // Define a custom style object
// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     height: 50,
//     width: 200,
//     background: "#fff",
//     borderColor: state.isFocused ? "blue" : base.borderColor,
//     boxShadow: state.isFocused ? "0 0 0 1px blue" : base.boxShadow,
//     "&:hover": {
//       borderColor: state.isFocused ? "blue" : base.borderColor
//     }
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     height: 50,
//     width: 200,
//     borderBottom: '1px dotted pink',
//     color: state.isSelected ? 'red' : 'blue',
//     padding: 20,
//     background: state.isFocused ? 'lightgray' : 'white'
//   }),
//   menu: (base) => ({
//     ...base,
//     // override border radius to match the box
//     borderRadius: 0,
//     // kill the gap
//     marginTop: 0
//   }),
//   menuList: (base) => ({
//     ...base,
//     // kill the white space on first and last option
//     padding: 0
//   })
//   // You can also customize other parts like `multiValue` or `indicatorSeparator`
// };

// const App = () => {
//   return (
//     <Select
//       options={options}
//       styles={customStyles}
//     />
//   );
// };

// export default App;

// import React, { useState, useRef, useEffect } from 'react';
// import Select from 'react-select';

// const DropdownSelect = () => {
//   // Set the initial max height to a reasonable default
//   const [maxMenuHeight, setMaxMenuHeight] = useState(300);
//   const selectRef = useRef(); // Ref for the select DOM element

//   // Update the maxMenuHeight based on the viewport and select element position
//   const updateMaxHeight = () => {
//     const selectRect = selectRef.current.getBoundingClientRect();
//     const bottomSpace = window.innerHeight - selectRect.bottom;
//     const maxHeight = bottomSpace - 10; // For example, keep 10px to the bottom of the viewport
//     setMaxMenuHeight(maxHeight);
//   };

//   // Effect to handle window resize
//   useEffect(() => {
//     // Call updateMaxHeight when the window is resized
//     window.addEventListener('resize', updateMaxHeight);
//     return () => window.removeEventListener('resize', updateMaxHeight);
//   }, []);

//   const options = [
//     { value: 'chocolate', label: 'Chocolate' },
//     { value: 'strawberry', label: 'Strawberry' },
//     { value: 'vanilla', label: 'Vanilla' },
//     // ... more options
//   ];

//   return (
//     <Select
//       ref={selectRef}
//       options={options}
//       onMenuOpen={updateMaxHeight}
//       maxMenuHeight={maxMenuHeight}
//       // ... other props as needed
//     />
//   );
// };

// export default DropdownSelect;


// import React from 'react';
// import Dropdown from './redux/components/Dropdown';

// const App = () => {
//   const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5'];

//   return (
//     <div className="App">
//       <Dropdown options={options} />
//     </div>
//   );
// };

// export default App;
