import React, {useState} from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import OutputData from './components/OutputData';


function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInputChange = (inputIdentifier, newvalue) => {
    setUserInput((prevInput) => ({
      ...prevInput,
      [inputIdentifier]: +newvalue,
    }));
  };

  return (
    <>
    <header />
    <UserInput userInput={userInput} onInputChange={handleInputChange} />
    <OutputData inputValue={userInput} />
    </>
  );
  
}

export default App;
