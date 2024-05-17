import { useState } from "react";

const Game = () => {
    const initialboard =  ()=> Array(9).fill(null)

    const [board, setBoard] = useState(initialboard())
   

  return (
    <div className="board">
      {board.map((_,index)=>(
        <button key={index} onClick={()=>{console.log(index)}}>{index}</button>
      ))}
    </div>
  )
}

export default Game
