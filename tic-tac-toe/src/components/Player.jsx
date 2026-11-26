import { useState } from 'react'

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false)
 
  function handleEdit() {
    setIsEditing((editing) => !editing)
  }
  
  return (
    <li>
      <span className="player">
        {!isEditing ? <span className="player-name">{name}</span> : <input type="text" required value={name}></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}