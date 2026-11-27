import { useState } from 'react'

export default function Player({initialName, symbol, isActive}) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)
 
  function handleEditButton() {
    setIsEditing((editing) => !editing)
  }

  function handleNameChange(event) {
    console.log(event)
    setPlayerName(event.target.value)
  }
  
  return (
    <li className={isActive ? 'active' : undefined }>
      <span className="player">
        {!isEditing ? 
        <span className="player-name">{playerName}</span> 
        : <input type="text" required value={playerName} onChange={handleNameChange}></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditButton}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}