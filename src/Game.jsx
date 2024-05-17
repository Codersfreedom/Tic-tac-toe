import useGame from "./hooks/useGame"


const Game = () => {

  const { board, handleClick, calculateWinner, getStatusMsg, resetGame } = useGame();

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <div className="status">
        <h2>{getStatusMsg()}</h2>
        <button onClick={() =>resetGame()}>Reset</button>
      </div>
      <div className="board">
        {board.map((b, index) => (
          <button disabled ={b} key={index} onClick={() => { handleClick(index) }}>{b}</button>
        ))}
      </div>
    </>
  )
}

export default Game
