import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"
import { useState } from 'react'

function App() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    expectedReturn: 1200,
    annualInvestment: 6,
    duration: 10
  })

  const isInputValid = inputValues.initialInvestment > 0
    && inputValues.expectedReturn > 0
    && inputValues.annualInvestment > 0
    && inputValues.duration > 0

  function handleInputChange(fieldName, inputValue) {
    setInputValues((prevValues) => ({ ...prevValues, [fieldName]: +inputValue }))
  }

  return (
    <>
      <Header />
      <UserInput inputValues={inputValues} setInputValues={setInputValues} handleInputChange={handleInputChange} />
      {isInputValid ? <Results inputValues={inputValues} /> : <p className="center">Please enter valid investment details.</p>}
    </>
  )
}

export default App
