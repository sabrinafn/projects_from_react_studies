function InputGroup({ label }) {
  return (
    <>
      <p>
        <label>{label}:</label>
        <input type="number" placeholder="0" required />
      </p>
    </>
  )
}

export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <div>
          <InputGroup label="Initial Investment" />
          <InputGroup label="Expected Return" />
        </div>
        <div>
          <InputGroup label="Annual Investment" />
          <InputGroup label="Duration" />
        </div>
      </div>
    </div>
  )
}
