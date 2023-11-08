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
