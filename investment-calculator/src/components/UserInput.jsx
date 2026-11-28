import { useState } from 'react'

export default function UserInput() {
  const [inputValues, setInputValues] = useState({
    initialInvestment: 10000,
    expectedReturn: 1200,
    annualInvestment: 6,
    duration: 10
  })

  function handleInputChange(fieldName, inputValue) {
    setInputValues((prevValues) => ({...prevValues,[fieldName]: inputValue}))
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <p>
            <label>Initial Investment:</label>
            <input 
              type="number" 
              required 
              value={inputValues.initialInvestment} 
              onChange={(event) => handleInputChange("initialInvestment", event.target.value)}
              />
          </p>
          <p>
            <label>Expected Return:</label>
            <input 
            type="number" 
            required 
            value={inputValues.expectedReturn} 
            onChange={(event) => handleInputChange("expectedReturn", event.target.value)} />
          </p>
        </div>
        <div>
          <p>
            <label>Annual Investment:</label>
            <input 
              type="number" 
              required 
              value={inputValues.annualInvestment} 
              onChange={(event) => handleInputChange("annualInvestment", event.target.value)} />
          </p>
          <p>
            <label>Duration:</label>
            <input 
              type="number"
              required 
              value={inputValues.duration} 
              onChange={(event) => handleInputChange("duration", event.target.value)} />
          </p>
        </div>
      </div>
    </div>
  )
}