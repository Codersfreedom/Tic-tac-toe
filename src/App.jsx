import Game from "./Game"
import "./App.css"
function App() {


  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="status">
        <h2>Player x turn</h2>
        <button>Reset</button>
      </div>
      <Game />
    </div>
  )
}

export default App
