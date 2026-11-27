import Player from './components/Player.jsx'
import GameBoard from './components/GameBoard.jsx'
import Log from './components/Log.jsx'
import { useState } from 'react'
import { WINNING_COMBINATIONS } from './winning-combinations.js'
import GameOver from './components/GameOver.jsx'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X'

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O'
  }
  return currentPlayer
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])
  const [players, setPlayers] = useState({
    'X': 'Player 1',
    'O': 'Player 2'
  })

  const activePlayer = derivedActivePlayer(gameTurns)

  let gameBoard = [...initialGameBoard.map(array => [...array])]

  for (const turn of gameTurns) {
    const {square , player} = turn
    const {row, col} = square

    gameBoard[row][col] = player
  }

  let winner = null

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].col]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].col]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].col]
  
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol]

    }
  }

  const hasDraw = gameTurns.length === 9 && !winner

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
    
      const currentPlayer = derivedActivePlayer(prevTurns)
  

      const updatedTurns = 
      [
        { square: 
          { row: rowIndex, col: colIndex }, player: currentPlayer }, 
          ...prevTurns
      ]
      return updatedTurns
    })
  }

  function handlePlayAgain() {
    setGameTurns([])
  }

  function handlePlayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [playerSymbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className='highlight-player'>
          <Player initialName={players['X']} symbol='X' isActive={activePlayer === 'X'} onNameChange={handlePlayerNameChange} />
          <Player initialName={players['O']} symbol='O' isActive={activePlayer === 'O'} onNameChange={handlePlayerNameChange} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onPlayAgain={handlePlayAgain} />}
        <GameBoard 
        onSelectSquare={handleSelectSquare} 
        board={gameBoard} 
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
